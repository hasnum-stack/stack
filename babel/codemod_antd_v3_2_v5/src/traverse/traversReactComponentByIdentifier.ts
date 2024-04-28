import t from "@babel/types";
import type { NodePath } from "@babel/traverse";
import type {
  Identifier,
  Expression,
  ClassProperty,
  Node,
  ArrowFunctionExpression,
  FunctionExpression,
  FunctionDeclaration,
  BlockStatement,
} from "@babel/types";
import traverse from "@babel/traverse";
import generate from "@babel/generator";
import { isReactComponent } from "../../utils/isReactComponent";

type params = {
  ast: Node;
  reactComponentIdentifierNode: Identifier;
};

// 获取 ClassProperty Node  formRef = React.createRef()
// 添加到 ClassDeclaration
function getFormRefNode() {
  return t.classProperty(
    t.identifier("formRef"),
    t.callExpression(
      t.memberExpression(t.identifier("React"), t.identifier("createRef")),
      [],
    ),
  );
}
// Node  const [form] = Form.useForm();
function getUseFormNode() {
  return t.variableDeclaration("const", [
    t.variableDeclarator(
      t.arrayPattern([t.identifier("form")]),
      t.callExpression(
        t.memberExpression(t.identifier("Form"), t.identifier("useForm")),
        [],
      ),
    ),
  ]);
}
function appendUseFormForFunctionBody(
  path: NodePath<
    FunctionDeclaration | FunctionExpression | ArrowFunctionExpression
  >,
) {
  if (path.has("body") && !path.get("body").isBlockStatement()) return;
  const functionBody = (path.node.body as BlockStatement).body;
  // 查找有没有form与Form.useForm()定义
  // 没有就添加
  const code = generate(getUseFormNode());
  const hasUseForm = functionBody.some((item) => {
    if (item.type === "VariableDeclaration") {
      const variableDeclarator = item.declarations[0];
      if (
        t.isArrayPattern(variableDeclarator.id) &&
        t.isIdentifier(variableDeclarator.id.elements[0])
      ) {
        return variableDeclarator.id.elements[0].name === "form";
      }
    }
  });
  if (!hasUseForm) {
    functionBody.unshift(getUseFormNode());
  }
}

function traversReactComponentByIdentifier({
  ast,
  reactComponentIdentifierNode,
}: params) {
  // console.log(reactComponentIdentifierNode.name);
  traverse(ast, {
    ClassDeclaration: (path) => {
      if (
        path.node.id?.name === reactComponentIdentifierNode.name &&
        isReactComponent(path)
      ) {
        const classBody = path.node.body.body;
        // 查找有没有formRef,没有就添加
        const hasFormRef = classBody.some((item) => {
          if (item.type === "ClassProperty" && t.isIdentifier(item.key)) {
            return item.key.name === "formRef";
          }
        });
        if (!hasFormRef) {
          classBody.unshift(getFormRefNode());
        }
      }
    },
    "ArrowFunctionExpression|FunctionExpression": (path) => {
      const parentPath = path?.parentPath;
      if (!parentPath) return;
      const hasId = parentPath.has("id");
      if (hasId) {
        const parentId = parentPath?.get("id");
        const parentIds = Array.isArray(parentId) ? parentId : [parentId];
        parentIds.forEach((id) => {
          if (id.isIdentifier({ name: reactComponentIdentifierNode.name })) {
            if (isReactComponent(path)) {
              appendUseFormForFunctionBody(path);
            }
          }
        });
      }
    },
    FunctionDeclaration: (path) => {
      if (path.node.id) {
        // console.log(
        //   "---",
        //   path.node.id.name,
        //   reactComponentIdentifierNode.name,
        // );
        // console.log("FunctionDeclaration", path.node.id.name);
        // console.log(path.node.id.name === reactComponentIdentifierNode.name);
        // console.log("666", isReactComponent(path));
        if (
          path.node.id.name === reactComponentIdentifierNode.name &&
          isReactComponent(path)
        ) {
          console.log("FunctionDeclaration", path.node.id.name);
          appendUseFormForFunctionBody(path);
        }
      }
    },
  });
}

export { traversReactComponentByIdentifier };
