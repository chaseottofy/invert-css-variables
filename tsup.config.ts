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
  target: 'es5',
  tsconfig: 'tsconfig.json',
  external: ['tslib'],
});