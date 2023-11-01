import { defineConfig } from 'tsup';

export default defineConfig({
  entryPoints: {
    'invert': 'src/index.ts',
  },
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: false,
  clean: true,
  minify: true,
  target: 'es2019',
  tsconfig: 'tsconfig.json',
  external: ['tslib'],
});