import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'

export default {
  input: 'index.js',
  output: [
    {
      file: 'lib/index.esm.js',
      format: 'esm',
      plugins: [terser()]
    },
    {
      file: 'lib/index.cjs.js',
      format: 'cjs',
      plugins: [terser()]
    }
  ],
  plugins: [
    babel({
      exclude: [
        'lib/',
        'node_modules/**',
        'tests/'
      ]
    }),
    resolve({
      preferBuiltins: true
    }),
    commonjs(),
    json()
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
