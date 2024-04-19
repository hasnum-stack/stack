// 引入 SWC 的库
const { parseSync, printSync } = require("@swc/core");
const Visitor = require("@swc/core/Visitor");
console.log(Visitor.Visitor)
class MyCustomTransformer extends Visitor.Visitor {
  visitNumericLiteral(expression) {
    // 例如：将所有数字增加 1
    expression.value += 1;
    return expression;
  }
}

// 插件需要导出的处理函数
function myPlugin(moduleAst) {
  const visitor = new MyCustomTransformer();
  return moduleAst.visit(visitor);
}

module.exports = myPlugin;
