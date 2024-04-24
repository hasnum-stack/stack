import t from "@babel/types";
import generate from "@babel/generator";
const node = t.arrayPattern([t.identifier("a"), t.identifier("b")]);
const node1 = t.objectPattern([
  t.objectProperty(t.identifier("a"), t.identifier("a")),
]);
const node2 = t.restElement(t.identifier("a"));
const path = import.meta.dir + "/test.json";
Bun.write(path, generate(node2).code);
