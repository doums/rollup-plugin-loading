/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import ora from 'ora'

const spinner = ora({
  spinner: 'hamburger',
  color: 'red',
  indent: 4,
  stream: process.stdout
})

export default function loading () {
  return {
    name: 'loading',
    buildStart () {
      spinner.text = 'start build'
      spinner.start()
    },
    load (id) {
      spinner.text = id.split('/').pop()
      spinner.render()
      return null
    },
    renderStart () {
      spinner.text = 'generating bundle'
      spinner.render()
    },
    writeBundle () {
      spinner.stop()
    }
  }
}
