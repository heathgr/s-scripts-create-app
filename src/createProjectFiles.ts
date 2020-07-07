import {
  ensureFile, readFile, readdir, lstat, writeFile,
} from 'fs-extra'
import { join } from 'path'
import Handlebars from 'handlebars'
import { Args } from './getArgs'

const getTemplateFilePaths = async (path: string) => {
  const itemsInPath = await (readdir(path))
  let templateFiles: string[] = []

  await Promise.all(itemsInPath.map(async (item) => {
    const itemPath = join(path, item)
    const stats = await lstat(itemPath)

    if (stats.isDirectory()) {
      const subTemplateFiles = await getTemplateFilePaths(itemPath)

      templateFiles = [...templateFiles, ...subTemplateFiles]
    } else {
      templateFiles = [...templateFiles, itemPath]
    }
  }))

  return templateFiles
}

const getTemplateSources = async (filePaths: string[]) => Promise.all(filePaths.map((file) => readFile(file, 'utf8')))

const getRenderedTemplates = (
  templateSource: string[],
  templateData: Args,
) => templateSource.map((source) => {
  const template = Handlebars.compile(source)

  return template(templateData)
})

const createProjectDirectories = async (targetFilePaths: string[]) => Promise.all(
  targetFilePaths.map((file) => ensureFile(file)),
)

const writeProjectFiles = async (
  targetContents: string[],
  targetFilePaths: string[]) => Promise.all(
  targetContents.map((contents, i) => writeFile(targetFilePaths[i], contents, 'utf8')),
)

const createProjectFiles = async (projectFolder: string, projectArgs: Args): Promise<void> => {
  const templatePath = join(__dirname, '../template_files/')
  const templateFilePaths = await getTemplateFilePaths(templatePath)
  const templateSources = await getTemplateSources(templateFilePaths)
  const renderedTemplates = getRenderedTemplates(templateSources, projectArgs)
  const targetFilePaths = templateFilePaths.map((path) => join(projectFolder, path.replace(templatePath, '')))

  await createProjectDirectories(targetFilePaths)
  await writeProjectFiles(renderedTemplates, targetFilePaths)
}

export default createProjectFiles
