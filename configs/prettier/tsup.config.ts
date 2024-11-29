import { defineConfig } from 'tsup';

export default defineConfig({
    dts: true,
    entry: ['src/index.ts'],
    format: ['esm'],
    minify: true,
    outDir: 'dist',
    sourcemap: true,
    target: 'esnext',
    tsconfig: 'tsconfig.json',
});
