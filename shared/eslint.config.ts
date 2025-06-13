// eslint.config.ts

import * as js from '@eslint/js';
import tseslint from 'typescript-eslint';
import * as eslintPluginPrettier from 'eslint-plugin-prettier';

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ['**/*.ts'],
    ignores: ['dist', 'node_modules'],

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },

    plugins: {
      prettier: eslintPluginPrettier,
    },

    rules: {
      'prettier/prettier': ['error'],

      // 🔧 Гибкие TS-правила — можно включать обратно по мере зрелости проекта
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
];
