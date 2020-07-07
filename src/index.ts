#!/usr/bin/env node

import { join } from 'path'

import args from './getArgs'
import createProjectFiles from './createProjectFiles'

// TODO better overall error handeling especially when write files and creating directories
const run = async (): Promise<void> => {
  const projectFolder = join(process.cwd(), args.projectFolder)

  await createProjectFiles(projectFolder, args)
  // TODO install project dependencies
  // TODO run test suite
  // TODO start dev server
}

run()
