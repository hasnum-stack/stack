import type {
  ImportDeclaration,
  JSXElement,
  JSXOpeningElement,
  Node,
  JSXAttribute,
} from "@babel/types";
import traverse, { NodePath } from "@babel/traverse";

function handleRootClassName(ast: Node) {
  // console.log(ast)
  let flag = false;
  traverse(ast, {
    JSXElement: (path: NodePath<JSXElement>) => {
      //非Drawer组件,如果有rootClassName,改成className
      const { openingElement } = path.node;
      if (
        openingElement.type === "JSXOpeningElement" &&
        openingElement.name.type === "JSXIdentifier" &&
        openingElement.name.name !== "Drawer"
      ) {
        const { attributes } = openingElement;
        if (attributes) {
          attributes.forEach((attr) => {
            if (
              attr.type === "JSXAttribute" &&
              attr.name.type === "JSXIdentifier" &&
              attr.name.name === "rootClassName"
            ) {
              attr.name.name = "className";
              flag = true;
            }
            //rootStyle转成style
            if (
              attr.type === "JSXAttribute" &&
              attr.name.type === "JSXIdentifier" &&
              attr.name.name === "rootStyle"
            ) {
              attr.name.name = "style";
            }
          });
        }
      }
    },
  });
  return flag;
}
export { handleRootClassName };
