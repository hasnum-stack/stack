// import Plugin from './Plugin';

module.exports = (api, options, dirname) => {
  // let plugins = null;

  // // Only for test
  // // eslint-disable-next-line no-underscore-dangle
  // global.__clearBabelAntdPlugin = () => {
  //   plugins = null;
  // };

  // function applyInstance(method, args, context) {
  //   // eslint-disable-next-line no-restricted-syntax
  //   for (const plugin of plugins) {
  //     if (plugin[method]) {
  //       plugin[method].apply(plugin, [...args, context]);
  //     }
  //   }
  // }

  // const Program = {
  //   enter(path, { opts = {} }) {
  //     // Init plugin instances once.
  //     // if (!plugins) {
  //     //   if (Array.isArray(opts)) {
  //     //     plugins = opts.map(
  //     //       (
  //     //         { libraryName, libraryDirectory, style, styleLibraryDirectory, customStyleName, camel2DashComponentName, camel2UnderlineComponentName, fileName, customName, transformToDefaultImport },
  //     //         index
  //     //       ) => {
  //     //         assert(libraryName, 'libraryName should be provided');
  //     //         return new Plugin(
  //     //           libraryName,
  //     //           libraryDirectory,
  //     //           style,
  //     //           styleLibraryDirectory,
  //     //           customStyleName,
  //     //           camel2DashComponentName,
  //     //           camel2UnderlineComponentName,
  //     //           fileName,
  //     //           customName,
  //     //           transformToDefaultImport,
  //     //           types,
  //     //           index
  //     //         );
  //     //       }
  //     //     );
  //     //   } else {
  //     //     assert(opts.libraryName, 'libraryName should be provided');
  //     //     plugins = [
  //     //       new Plugin(
  //     //         opts.libraryName,
  //     //         opts.libraryDirectory,
  //     //         opts.style,
  //     //         opts.styleLibraryDirectory,
  //     //         opts.customStyleName,
  //     //         opts.camel2DashComponentName,
  //     //         opts.camel2UnderlineComponentName,
  //     //         opts.fileName,
  //     //         opts.customName,
  //     //         opts.transformToDefaultImport,
  //     //         types
  //     //       ),
  //     //     ];
  //     //   }
  //     // }
  //     // applyInstance('ProgramEnter', arguments, this); // eslint-disable-line
  //   },
  //   // exit() {
  //   //   applyInstance('ProgramExit', arguments, this); // eslint-disable-line
  //   // },
  // };

  // const methods = [
  //   'ImportDeclaration',
  //   'CallExpression',
  //   'MemberExpression',
  //   'Property',
  //   'VariableDeclarator',
  //   'ArrayExpression',
  //   'LogicalExpression',
  //   'ConditionalExpression',
  //   'IfStatement',
  //   'ExpressionStatement',
  //   'ReturnStatement',
  //   'ExportDefaultDeclaration',
  //   'BinaryExpression',
  //   'NewExpression',
  //   'ClassDeclaration',
  //   'SwitchStatement',
  //   'SwitchCase',
  // ];

  // // eslint-disable-next-line no-restricted-syntax
  // for (const method of methods) {
  //   ret.visitor[method] = function () {
  //     // eslint-disable-line
  //     applyInstance(method, arguments, ret.visitor); // eslint-disable-line
  //   };
  // }

  // return ret;

  // return traverse(ast, {
  //   CallExpression: {
  //     enter: path => {
  //       console.log('🚀 ~ dirname', dirname);

  //       if (path.node.callee.name === 'require' && path.node.arguments[0].value === 'antd') {
  //         const patharg = path.get('arguments')[0];
  //         patharg.replaceWithSourceString("'antd/lib'");
  //       }
  //       // console.log('🚀 ~ transformjs ~  path)');
  //       // patharg.forEach(item => {
  //       //   console.log('==========', item.replaceWithSourceString("'antd/lib'"));
  //       // });
  //       // console.log(path.node.callee.name);
  //       // console.log(path.node.arguments[0].value);
  //       // console.log('🚀 ~ transformjs ~ path', path);
  //     },
  //   },
  // });

  return {
    visitor: {
      CallExpression: {
        enter: (path, PluginPass) => {
          // PluginPass.file.filename
          console.log('🚀 ~ PluginPass.file.filename', PluginPass.file.opts.filename);
          // console.log('🚀 ~ rest', rest);
          // console.log('🚀 ~ options', options);

          if (path.node.callee.name === 'require' && path.node.arguments[0].value === 'antd') {
            const patharg = path.get('arguments')[0];
            patharg.replaceWithSourceString("'antd/lib'");
          }
          // console.log('🚀 ~ transformjs ~  path)');
          // patharg.forEach(item => {
          //   console.log('==========', item.replaceWithSourceString("'antd/lib'"));
          // });
          // console.log(path.node.callee.name);
          // console.log(path.node.arguments[0].value);
          // console.log('🚀 ~ transformjs ~ path', path);
        },
      },
    },
  };
};
