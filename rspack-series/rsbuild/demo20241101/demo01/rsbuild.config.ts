import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginLess } from '@rsbuild/plugin-less';
export default defineConfig({
  mode: 'development',
  plugins: [pluginReact(), pluginLess()],
  html: {},
  tools: {
    htmlPlugin: {
      templateParameters: {
        test: 123,
      },
      templateContent: templateParameters => {
        const html = require('./public/template.js');
        return html(templateParameters);
      },
    },
    // rspack: {
    //   plugins: [

    //   ]
    // }
    // htmlPlugin: {
    //   templateParameters: {
    //     title: 123,
    //     testerName: 'jz',
    //   },
    //   templateContent: templateParameters => {
    //     console.log(templateParameters);
    //     console.log(templateParameters.testerName);
    //     //生成一个json文件
    //     // fs.writeFileSync(path.resolve(__dirname, 'templateParameters.json'), JSON.stringify(templateParameters));

    //     // console.log(templateParameters.templateParameter);
    //     return `
    //   <!DOCTYPE html>
    //   <html lang="en">
    //   <head>

    //     <meta charset="UTF-8">

    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <title>Document</title>
    //   </head>
    //   <body>
    //     <div> 1 </div>
    //     <div id="root"></div>
    //   </body>
    //   </html>

    //       `;
    //   },
    //   templateContent:
    // },
  },
  source: {
    transformImport: [
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        // 设置 `style: 'css'` 来加载 `.css` 样式
        // 设置 `style: true` 来加载 `.less` 样式
        style: true,
      },
    ],
  },
});
