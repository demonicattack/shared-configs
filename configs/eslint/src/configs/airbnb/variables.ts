import { noUnusedVariablesOptions } from '../../constants';

const variables = {
    'no-label-var': 'error',
    'no-shadow': 'off',
    'no-undef-init': 'warn',
    'no-unused-vars': ['error', noUnusedVariablesOptions],
    'no-use-before-define': [
        'error',
        {
            classes: false,
            functions: false,
            variables: true,
        },
    ],
};

export { variables };
