/* eslint-disable @typescript-eslint/no-explicit-any */

import ora from 'ora'

type Step<T> = (...args: any[]) => Promise<T>

const runStep = async <T>(description: string, step: Step<T>, ...args: any[]): Promise<void> => {
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

export default runStep
