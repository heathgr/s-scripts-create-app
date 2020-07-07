#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-explicit-any */

import ora from 'ora'

import configuration from './getConfiguration'
import createProjectFiles from './createProjectFiles'

type Step<T> = (...args: any[]) => Promise<T>

const runStep = async <T>(description: string, step: Step<T>, ...args: any[]) => {
  const spinner = ora(description)

  spinner.start()
  try {
    await step(...args)
    spinner.succeed()
  } catch (e) {
    spinner.fail()
    throw e
  }
}

const run = async (): Promise<void> => {
  await runStep('Create Project Files', createProjectFiles, configuration)
  // TODO install project dependencies
  // TODO run test suite
  // TODO initialize git
}

run()
