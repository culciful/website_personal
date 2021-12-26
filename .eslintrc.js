// .eslintrc.js
module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    // https://github.com/vuejs/eslint-plugin-vue
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],

  parser: 'vue-eslint-parser',
  // parserOptions: {
  //   ecmaVersion: 2020
  // },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-blocks': ['error', 'never']
  }

}
