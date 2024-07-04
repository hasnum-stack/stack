import type { NodePath } from "@babel/traverse";
import t from "@babel/types";
import type { Function, ClassDeclaration, Identifier } from "@babel/types";
import generate from "@babel/generator";

enum ReactComponentType {
  ClassComponent = "ClassComponent",
  FunctionComponent = "FunctionComponent",
}
type isReactComponentResult =
  | ReactComponentType.ClassComponent
  | ReactComponentType.FunctionComponent
  | null;

function includeReactComponent(path: NodePath<Identifier>) {
  return ["Component", "PureComponent"].includes(path.node.name);
}

/**
 * class component
 * super class  [Component, PureComponent, React.Component, React.PureComponent]
 * @param path
 */
function withReactSuperClass(path: NodePath<ClassDeclaration>) {
  const superClassPath = path.get("superClass");
  if (!superClassPath) return null;
  if (t.isIdentifier(superClassPath.node)) {
    if (includeReactComponent(superClassPath as NodePath<Identifier>)) {
      return superClassPath;
    }
  }
  let result = null;
  superClassPath.traverse({
    Identifier(identifierPath) {
      if (includeReactComponent(identifierPath)) {
        result = identifierPath;
        superClassPath.stop();
      }
    },
  });
  return result;
}

/**
 * function component
 * return JSXElement
 * @param path
 */
function withJSXElementReturn(path: NodePath<Function>) {
  let resultPath = null;
  path.traverse({
    ReturnStatement(returnPath) {
      if (
        t.isJSXElement(returnPath.node.argument) ||
        t.isJSXFragment(returnPath.node.argument)
      ) {
        resultPath = returnPath;
        path.stop();
      }
    },
  });
  return resultPath;
}

function isReactComponent(
  path: NodePath | null | undefined,
): isReactComponentResult {
  if (!path) return null;
  const node = path.node;

  if (
    t.isClassDeclaration(node) &&
    withReactSuperClass(path as NodePath<ClassDeclaration>)
  ) {
    return ReactComponentType.ClassComponent;
  }
  if (t.isFunction(node) && withJSXElementReturn(path as NodePath<Function>)) {
    // console.log(generate(node).code);
    return ReactComponentType.FunctionComponent;
  }
  return null;
}

export { isReactComponent };
export type { isReactComponentResult };
