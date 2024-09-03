# 配置说明

## @babel/plugin-transform-runtime
目的:统一import helpers,不需要每个文件单独生成helpers函数

1.属于devDependencies,需要配套安装@babel/runtime

2.babel.config中添加插件,helpers默认开启

```
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
```