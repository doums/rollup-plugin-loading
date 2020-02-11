import ora from 'ora'

const spinner = ora({
  spinner: 'dots',
  color: 'red',
  indent: 4,
  stream: process.stdout
})

export default function loading () {
  return {
    name: 'loading',
    buildStart () {
      spinner.start()
    },
    buildEnd () {
      spinner.stop()
    },
    load (id) {
      spinner.text = id
      spinner.render()
      return null
    },
    renderStart () {
      spinner.text = 'generating bundle'
      spinner.render()
    }
  }
}
