// payment-service/eslint.config.ts

import * as js from '@eslint/js';
import tseslint from 'typescript-eslint';
import * as eslintPluginPrettier from 'eslint-plugin-prettier';
import * as eslintPluginImport from 'eslint-plugin-import';

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
        sourceType: 'module',
      },
    },

    plugins: {
      prettier: eslintPluginPrettier,
      import: eslintPluginImport,
    },

    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
        node: {
          extensions: ['.js', '.ts'],
        },
      },
    },

    rules: {
      'prettier/prettier': ['error'],

      'import/extensions': [
        'error',
        'always',
        {
          js: 'always',
          ts: 'never',
        },
      ],

      'import/no-unresolved': 'error',

      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
];
