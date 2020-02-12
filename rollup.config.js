import { terser } from 'rollup-plugin-terser'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'index.ts',
  output: {
    file: 'lib/index.js',
    format: 'cjs',
    plugins: [terser()]
  },
  plugins: [
    typescript()
  ],
  external: [
    'readline',
    'stream',
    'os',
    'tty',
    'assert',
    'events'
  ]
}
