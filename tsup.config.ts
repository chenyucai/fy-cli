import { defineConfig } from 'tsup';

// export default defineConfig({
//   entry: [
//     './src/node/cli.ts'
//   ],
//   bundle: true,
//   splitting: true,
//   outDir: 'fy-dist',
//   format: ['esm', 'cjs'],
//   dts: true,
//   shims: true,
//   clean: true,
//   banner: {
//     js: 'import { createRequire as createRequire0 } from "module"; const require = createRequire0(import.meta.url);'
//   }
// })

export default defineConfig({
  // entryPoints: ['src/node/cli.ts', 'src/node/index.ts'],
  entry: {
    cli: './src/node/cli.ts',
    // index: './src/node/index.ts',
    // dev: './src/node/dev.ts'
  },
  bundle: true,
  splitting: true,
  minify: process.env.NODE_ENV === 'production',
  outDir: 'dist',
  format: ['esm', 'cjs'],
  dts: true,
  shims: true,
  clean: true,
  banner: {
    js: 'import { createRequire as createRequire0 } from "module"; const require = createRequire0(import.meta.url);'
  }
});