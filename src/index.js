module.exports = {
  'rules': {
    'no-undef': 'error',
    'no-unused-vars': 'error',
    'no-extra-semi': 'error',
    'block-spacing': 'error',
    'no-irregular-whitespace': 'error',
    'array-bracket-spacing': 'error',
    'brace-style': 'error',
    'comma-spacing': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'func-call-spacing': 'error',
    'indent': ['error', 2],
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['error', 'always'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always',
    }],
    'space-in-parens': 'error',
    'space-unary-ops': 'error',
    'switch-colon-spacing': 'error',
    'arrow-spacing': 'error',
    'generator-star-spacing': 'error',
    'template-curly-spacing': 'error',
    'rest-spread-spacing': 'error',
    'yield-star-spacing': 'error',
    'brace-style': 'error',
    'eol-last': 'error',
  },
  'parserOptions': {
    'sourceType': 'module',
  },
  'env': {
    'browser': true,
    'commonjs': true,
    'es2020': true,
    'worker': true,
    'jest': true,
  },
}