module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'prettier'
  ],
  globals: {
    "_": "readonly",
    "$": "readonly"
  },
  // add your custom rules here
  rules: {
    'no-unused-vars': 1
  }
}
