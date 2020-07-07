#!/usr/bin/env node

import { join } from 'path'

import configuration from './getConfiguration'
import createProjectFiles from './createProjectFiles'
import runStep from './helpers/runStep'
import exec from './helpers/exec'

const run = async (): Promise<void> => {
  const projectFolder = join(process.cwd(), configuration.folder)

  await runStep('Creating Project Files', createProjectFiles, projectFolder, configuration)
  await runStep('Installing Dependencies', async () => exec(`( cd ${projectFolder}; npm install)`))
  await runStep('Validating Project', async () => exec(`( cd ${projectFolder}; npm test)`))
  await runStep('Initializing Git', async () => exec(`( cd ${projectFolder}; git init)`))
}

run()
