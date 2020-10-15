module.exports = {
  // watch this for explaining why some of this is here
  extends: ['eslint:recommended', 'plugin:vue/recommended'],
  rules: {
    'no-underscore-dangle': 'off',
    'comma-dangle': 'off',
    'linebreak-style': ['error', 'windows'],
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
    'arrow-body-style': ['error', 'always'],
    'consistent-return': 'off'
  }
};
