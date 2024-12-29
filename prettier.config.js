import { prettier } from '@demonicattack/prettier';
export default prettier({
    overrides: [
        {
            files: [
                '*.ts',
                '*.tsx',
            ],
            excludeFiles: ['./configs/eslint/**/*'],
        },
    ],
});
