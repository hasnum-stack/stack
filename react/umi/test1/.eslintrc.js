/**
 * "off" or 0 - turn the rule off
 * "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
 * "error" or 2 - turn the rule on as an error (exit code will be 1)
 *
 */
module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint'), 'plugin:prettier/recommended'],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
  },
  rules: {
    'no-console': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-plusplus': 'warn',
    'func-names': ['error', 'as-needed'],
    'import/no-mutable-exports': 'warn',
    'prettier/prettier': 'error',
  },
};
