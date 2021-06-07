module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    browser: true,
    node: true,
    jest: true,
    'cypress/globals': true
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'cypress'],
  settings: {
    react: {
      version: '16.12'
    }
  },
  ignorePatterns: ['app/**']
}
