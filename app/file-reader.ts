import * as fs from 'fs'

export function textFileToArray(fileDir: string): string[] {
  return fs.readFileSync(fileDir)
    .toString()
    .split('\n')
}
