import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

/** @type {import("eslint").Linter.FlatConfig} */
export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      import: importPlugin,
      prettier: prettierPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {},
      },
    },
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'react-redux',
              importNames: ['useSelector', 'useDispatch'],
              message: 'Use useAppSelector/useAppDispatch from reduxHooks.ts instead.',
            },
          ],
        },
      ],
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
        },
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'prettier/prettier': 'warn',
    },
  },

  // Special config for CommonJS mock files
  {
    files: ['**/__mocks__/**/*.js', '**/*.mock.js'],
    languageOptions: {
      sourceType: 'script',
      globals: {
        module: 'readonly',
        exports: 'readonly',
        require: 'readonly',
      },
    },
    rules: {
      'no-undef': 'off',
    },
  },

  prettierConfig,
];
