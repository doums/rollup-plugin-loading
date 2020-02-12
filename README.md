## rollup-plugin-loading

:truck: A [Rollup](https://rollupjs.org) plugin that shows a nice spinner when building the bundle

#### install
```
npm i -D rollup-plugin-loading
```

#### usage
```
import loading from 'rollup-plugin-loading'

export default {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'esm'
  },
  plugins: [ loading() ]
}
```

#### license
Mozilla Public License 2.0
