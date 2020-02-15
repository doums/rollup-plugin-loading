/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import ora, { Color } from 'ora'
import cliSpinners, { SpinnerName } from 'cli-spinners'
import path from 'path'

const spinner = ora({
  spinner: 'hamburger',
  color: 'red',
  indent: 4,
  stream: process.stdout
})

let spinnerWidth = cliSpinners['hamburger'].frames[0].length

interface HookConfig {
  name: string;
  buildStart(): void;
  transform(code: string, id: string): null;
  renderStart(): void;
  writeBundle(): void;
}

interface Options {
  spinner?: SpinnerName;
  color?: Color;
  indent?: number;
}

export default function loading (options?: Options): HookConfig {
  return {
    name: 'loading',
    buildStart (): void {
      if (options) {
        const {
          spinner: spinnerType,
          color,
          indent
        } = options
        if (spinner) {
          spinner.spinner = spinnerType
          spinnerWidth = cliSpinners[spinnerType].frames[0].length
        }
        if (color) {
          spinner.color = color
        }
        if (indent && indent >= 0) {
          spinner.indent = indent
        }
      }
      spinner.text = 'build started'
      spinner.start()
    },
    transform (code: string, id: string): null {
      const width = process.stdout.columns
      const offset = spinner.indent + spinnerWidth + 1
      let text = path.relative(process.cwd(), id)
      if (text.length + offset > width) {
        text = text.slice((text.length + offset + 3) - width)
        spinner.text = `...${text}`
      } else {
        spinner.text = text
      }
      spinner.render()
      return null
    },
    renderStart (): void {
      spinner.text = 'generating bundle'
      spinner.render()
    },
    writeBundle (): void {
      spinner.stop()
      if (process.stdout.isTTY) {
        process.stdout.cursorTo(0)
      }
    }
  }
}
