const babel = require('@babel/core');
babel.transformSync('code', {}, (res, result) => {
  console.log('🚀 ~ babel.transformSync ~ result', result);
  console.log('🚀 ~ babel.transformSync ~ res', res);
});
