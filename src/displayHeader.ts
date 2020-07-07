/* eslint-disable no-console */
import { version } from '../package.json'

const displayHeader = async (): Promise<void> => {
  console.log(`S is for Store Create App ${version}`)
}

export default displayHeader
