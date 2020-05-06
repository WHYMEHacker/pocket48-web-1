module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: "vue-eslint-parser",
  extends: [
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },

    project: __dirname + '/tsconfig.json',
  },
  rules: {
    'prettier/prettier': 'error',
    'no-bitwise': 'off',
    'newline-before-return': 'off',
    'no-trailing-spaces': 'off',
    'max-classes-per-file': 'off',
    curly: 'off',
    'prefer-arrow-callback': 'error',
    'no-unused-vars': ['warn', { varsIgnorePattern: '^_' }],
    'no-console': 'warn',
    radix: ['error', 'as-needed'],
    'no-return-await': 'error',
    'default-case': 'error',
    'use-isnan': 'error',
    'prefer-template': 'error',
    'no-useless-concat': 'error',
    camelcase: ['warn', { properties: 'never' }],
  },
  overrides: [
    {
      files: ['**/*.vue'],
      extends: [
        "plugin:vue/essential",
      ],
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
      ],
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            varsIgnorePattern: '^_',
            argsIgnorePattern: '^_',
            ignoreRestSiblings: true,
          },
        ],
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/ban-ts-ignore': 'warn',
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/no-type-alias': 'off',
        '@typescript-eslint/no-non-null-assertion': 'warn',
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/class-name-casing': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'error',
        '@typescript-eslint/interface-name-prefix': ['error', 'always'],
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-parameter-properties': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/unified-signatures': 'error',
        '@typescript-eslint/member-ordering': 'off',
        '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
      },
    },
  ],
};
