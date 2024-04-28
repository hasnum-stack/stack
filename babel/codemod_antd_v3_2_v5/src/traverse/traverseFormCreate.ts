import traverse, { NodePath } from "@babel/traverse";
import type { Node, CallExpression, Identifier } from "@babel/types";
import { handleRemoveFormCreate } from "../handle/handleRemoveFormCreate.ts";
import { traversReactComponentByIdentifier } from "./traversReactComponentByIdentifier.ts";
import generate from "@babel/generator";

export function traverseFormCreate(ast: Node) {
  traverse(ast, {
    CallExpression: (path: NodePath<CallExpression>) => {
      /**
       * 去掉Form.create()
       * @param path
       * @returns reactComponentIdentifier
       */
      const reactComponentIdentifierNode = handleRemoveFormCreate(path);
      // console.log(
      //   "reactComponentIdentifier",
      //   reactComponentIdentifierNode?.name,
      // );
      if (!reactComponentIdentifierNode) return;

      // console.log(
      //   "reactComponentIdentifier",
      //   generate(reactComponentIdentifierNode).code,
      // );
      // console.log("----------------");
      /**
       * 根据reactComponentIdentifier找到对应的ReactComponent,给其添加Form
       */
      traversReactComponentByIdentifier({
        ast,
        reactComponentIdentifierNode,
      });
    },
  });
}
