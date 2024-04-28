import parser from "@babel/parser";
import traverse from "@babel/traverse";

const code = `
 const bbb = () => {
 return <p>678687</p>
 }
`;
const code1 = `
 let bbb ; 
`;
const ast = parser.parse(code, { plugins: ["jsx"] });
traverse(ast, {
  VariableDeclarator: (path) => {
    console.log(path.has("init"));
    if (path.has("init")) {
      console.log(path.get("init").type);
      console.log(path.get("init").isArrowFunctionExpression());
    }
  },
});
