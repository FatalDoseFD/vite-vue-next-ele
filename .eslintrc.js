module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-essential', 'airbnb-base', 'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'linebreak-style': ['off', 'windows'],
    'import/prefer-default-export': false,
    "no-console":"off"
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        // 这里写覆盖vue文件的规则
      },
    },
  ],
};
