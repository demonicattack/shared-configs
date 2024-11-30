export const { ESLINT, PRETTIER, TYPE_CHECK } = {
    ESLINT: 'eslint --fix',
    PRETTIER: 'prettier --write',
    TYPE_CHECK: () => `tsc -p tsconfig.json --noEmit`,
} as const;
