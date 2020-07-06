#!/usr/bin/env node

import { join } from 'path'

import args from './getArgs'
import createProjectFolder from './createProjectFolder'
import createProjectFiles from './createProjectFiles'

// TODO better overall error handeling especially when write files and creating directories
export const run = async () => {
  const projectFolder = join(process.cwd(), args.projectFolder)

  await createProjectFolder(projectFolder)
  await createProjectFiles(projectFolder, args.projectName)
  // TODO install project dependencies
  // TODO run test suite
  // TODO start dev server
}

run()