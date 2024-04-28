import { NodePath } from "@babel/traverse";
import t from "@babel/types";
import type { CallExpression } from "@babel/types";

/**
 * remove Form.create()
 * @param path
 */
export function handleRemoveFormCreate(path: NodePath<CallExpression>) {
  if (t.isMemberExpression(path.node.callee)) {
    if (
      t.isIdentifier(path.node.callee.object) &&
      path.node.callee.object.name === "Form" &&
      t.isIdentifier(path.node.callee.property) &&
      path.node.callee.property.name === "create"
    ) {
      if (t.isCallExpression(path.parentPath.node)) {
        const reactComponentIdentifier = path.parentPath.node.arguments[0];
        if (!t.isIdentifier(reactComponentIdentifier)) return;
        path.parentPath.replaceWith(reactComponentIdentifier);
        return reactComponentIdentifier;
      }
    }
  }
}
