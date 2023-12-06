module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],
    rules: {
        'indent': ['error', 2],
        'semi': ['error', 'never'],
        'quotes': ['error', 'single'],
        'no-unused-vars': 'error'
    },
};