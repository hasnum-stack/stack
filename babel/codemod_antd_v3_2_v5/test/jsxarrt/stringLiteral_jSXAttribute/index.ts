import t from "@babel/types";
import generate from "@babel/generator";
const name = "123";
const node = t.jSXAttribute(t.jSXIdentifier("name"), t.stringLiteral(name));
const path = import.meta.dir + "/test.json";
Bun.write(path, generate(node).code);
