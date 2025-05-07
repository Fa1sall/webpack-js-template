// eslint.config.js

import eslintPluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      // Your custom ESLint rules
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'no-console': 'off',

      // Prettier integration
      'prettier/prettier': 'error',
    },
  },
  // Disable conflicting rules with Prettier
  {
    rules: {
      ...prettierConfig.rules,
    },
  },
];
