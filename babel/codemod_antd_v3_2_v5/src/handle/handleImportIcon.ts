import t, {
  type ImportDeclaration,
  type Node,
  type JSXElement,
} from "@babel/types";
import traverse, { NodePath } from "@babel/traverse";
import { stringLiteralToJSXIcon } from "../../utils/stringLiteralToJSXIcon";
import generate from "@babel/generator";
export function handleImportIcon(
  ast: Node,
  path: NodePath<ImportDeclaration>,
  indexIcon: number,
) {
  let flag = false;
  if (indexIcon === -1) return flag;
  const specifiers = path.node.specifiers;
  const specifiersLength = specifiers.length;
  //只有一个specifier,直接删除整个import语句
  if (specifiersLength === 1) {
    path.remove();
  } else {
    specifiers.splice(indexIcon, 1);
  }
  const iconJSX: string[] = [];
  traverse(ast, {
    JSXElement: (path: NodePath<JSXElement>) => {
      const { openingElement } = path.node;
      if (openingElement.type === "JSXOpeningElement") {
        const { name } = openingElement;
        if (name.type === "JSXIdentifier" && name.name === "LegacyIcon") {
          // name.name = "Icon";
          // 查看Icon的属性 type
          // <LegacyIcon type={expend ? 'down-circle' : 'up-circle'} />转成 {expend? <DownCircleOutlined /> : <UpCircleOutlined />}
          // down-circle转成大驼峰DownCircleOutlined
          // <LegacyIcon type={'skin'} className='list-type-icon'/> 转成 <SkinOutlined className='list-type-icon'/>
          // skin转成大驼峰SkinOutlined
          // console.log("openingElement", openingElement.attributes);
          let JSX = null;
          openingElement.attributes.forEach((attr) => {
            if (attr.type === "JSXAttribute") {
              if (
                attr.name.type === "JSXIdentifier" &&
                attr.name.name === "type"
              ) {
                if (attr.value && attr.value.type === "StringLiteral") {
                  const { value } = attr.value;
                  const [JSXNode, JSXname] = stringLiteralToJSXIcon(
                    value,
                    openingElement,
                  );
                  JSX = JSXNode;
                  iconJSX.push(JSXname);
                }

                if (
                  attr.value &&
                  attr.value.type === "JSXExpressionContainer"
                ) {
                  //生成一个jsx表达式

                  const { expression } = attr.value;
                  if (expression.type === "ConditionalExpression") {
                    let JSXConsequent, JSXAlternate;
                    const { consequent, alternate, test } = expression;
                    if (consequent.type === "StringLiteral") {
                      const [JSXNode, name] = stringLiteralToJSXIcon(
                        consequent.value,
                        openingElement,
                      );
                      JSXConsequent = JSXNode;
                      iconJSX.push(name);
                    }
                    if (alternate.type === "StringLiteral") {
                      const [JSXNode, name] = stringLiteralToJSXIcon(
                        alternate.value,
                        openingElement,
                      );
                      JSXAlternate = JSXNode;
                      iconJSX.push(name);
                    }

                    if (JSXConsequent && JSXAlternate && test) {
                      JSX = t.jSXExpressionContainer(
                        t.conditionalExpression(
                          test,
                          JSXConsequent,
                          JSXAlternate,
                        ),
                      );
                    }
                  }
                }

                if (
                  attr.value &&
                  attr.value.type === "JSXExpressionContainer"
                ) {
                  const { expression } = attr.value;
                  if (expression.type === "StringLiteral") {
                    const [JSXNode, name] = stringLiteralToJSXIcon(
                      expression.value,
                      openingElement,
                    );
                    JSX = JSXNode;
                    iconJSX.push(name);
                  }
                }
              }
            }
          });
          if (JSX) {
            path.replaceWith(JSX);
          }
        }
      }
    },
  });
  if (iconJSX.length) {
    flag = true;
    //找到ast中的@ant-design/icons
    // let importIconPath: NodePath<ImportDeclaration>;
    //根据ast查找import @ant-design/icons语句

    let hasImportIcon = false;
    traverse(ast, {
      ImportDeclaration: (path: NodePath<ImportDeclaration>) => {
        if (path.node.source.value === "@ant-design/icons") {
          hasImportIcon = true;
          const specifiers = path.node.specifiers;
          // 添加到import语句中
          iconJSX.forEach((item) => {
            specifiers.push(
              t.importSpecifier(t.identifier(item), t.identifier(item)),
            );
          });
          // 去重
          const specifiersLength = specifiers.length;
          const specifierSet = new Set();
          if (specifiersLength > 1) {
            path.node.specifiers = specifiers.filter((item) => {
              if (specifierSet.has(item.local.name)) {
                return false;
              }
              specifierSet.add(item.local.name);
              return true;
            });
          }
        }
      },
    });

    if (!hasImportIcon) {
      //去重iconJSX
      const iconJSXSetList = Array.from(new Set(iconJSX));
      const node = t.importDeclaration(
        iconJSXSetList.map((item) =>
          t.importSpecifier(t.identifier(item), t.identifier(item)),
        ),
        t.stringLiteral("@ant-design/icons"),
      );
      ast.program.body.unshift(node);
    }
  }
  return flag;
}
