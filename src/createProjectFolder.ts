import { ensureDir } from 'fs-extra'

const createProjectdir = async (projectPath: string) => {
  await ensureDir(projectPath)
}

export default createProjectdir