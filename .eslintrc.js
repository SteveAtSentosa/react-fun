module.exports = {
  extends: ['standard'],
  // env: {
  //   browser: true,
  //   es6: true,
  // },
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      ecmaVersion: 6,
    },
  },
  rules: {
    'spaced-comment': 0,
    'padded-blocks': 0,
    'comma-dangle': 0,
    'space-before-function-paren': 0,
    'no-multiple-empty-lines': 0,
    'operator-linebreak': 0,
    'space-infix-ops': 0,
    'no-multi-spaces': 0,
    'key-spacing': 0,
    'object-property-newline': 0,
    'import/no-duplicates': 0,
    curly: 0,
    indent: [
      'error',
      2,
      { flatTernaryExpressions: true, ignoredNodes: ['ConditionalExpression'] },
    ],
  },
}
