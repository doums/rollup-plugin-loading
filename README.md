## rollup-plugin-loading

:truck: A [Rollup](https://rollupjs.org) plugin that shows a nice spinner when building the bundle

### install
```
npm i -D rollup-plugin-loading
```

### usage
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

### api
#### `function` loading(options?: `Options`): `HookConfig`

#### `object` Options
**spinner?:** `string`\
default: `hamburger`\
spinner name: https://github.com/sindresorhus/cli-spinners/blob/master/spinners.json

**color?:** `string`\
default: `red`\
spinner color: `black` `red` `green` `yellow` `blue` `magenta` `cyan` `white` `gray`

**indent?:** `number`\
default: `4`\
number of spaces before the spinner

**width?:** `number`\
default: `1`\
the width of the spinner in number of character

### license
Mozilla Public License 2.0
