const bestPractices = {
    'array-callback-return': ['error', { allowImplicit: true }],
    'block-scoped-var': 'error',
    'consistent-return': [
        'off',
        {
            treatUndefinedAsUnspecified: true,
        },
    ],
    curly: ['error', 'multi-line'],
    'default-case-last': 'error',
    eqeqeq: 'error',
    'grouped-accessor-pairs': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-constructor-return': 'error',
    'no-else-return': 'warn',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': [
        'error',
        {
            allow: [],
            boolean: true,
            disallowTemplateShorthand: true,
            number: true,
            string: true,
        },
    ],
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-labels': ['error'],
    'no-lone-blocks': 'error',
    'no-loop-func': 'warn',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-return-assign': ['error', 'except-parens'],
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'warn',
    'prefer-named-capture-group': 'error',
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    'prefer-regex-literals': 'error',
    'vars-on-top': 'off',
    yoda: 'warn',
};

export { bestPractices };
