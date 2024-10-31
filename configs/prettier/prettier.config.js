import { config } from '@demonicattack/prettier';

export default config({
  plugins: [
    {
      multilineArrays: true,  
      tailwindcss: true
    }
  ]
});
// /** @type {import("prettier").Config} */
// export default {
//   tabWidth: 4,
//   overrides: [
//     {
//       files: ['*.ts', '*.tsx'],
//       options: {
//         plugins: ['prettier-plugin-multiline-arrays'],
//         parser: 'typescript',
//       }
//     }
//   ]
// }
