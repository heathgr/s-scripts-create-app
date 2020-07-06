import yargs from 'yargs'

const rawArgs = yargs
  .usage('Usage: $0 [path]')
  .describe('n', 'Specify a project name.')
  .alias('n', 'name')
  .nargs('n', 1)
  .demandCommand(1)
  .argv

const args = {
  projectFolder: rawArgs._[0],
  projectName: rawArgs.n as string || rawArgs._[0]
}

export default args