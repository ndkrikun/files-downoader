import { DownloadState } from './interfaces/download-state.model'

export function getFileName(
  path: string
): string {
  return path.split('/').slice(-1)[0]
}

const line: string = '----------------------------------------------------------'
const padding: string = '     ';

function showMessage(
  message: string
): void {
  console.info(`\n${padding}${message}\n\n${line}`)
}

export function logDownloadResult(
  state: DownloadState,
  error: string,
  isLastItem: boolean
): void {
  const step: string = `${state.fileIndex + 1} / ${state.sourceData.length}`
  const status: string = !!error ? `Failed with error code: ${error}` : 'Success'
  const message: string = `${step} ${status}`

  showMessage(message)

  if (isLastItem) {
    console.info(`\n${padding}Completed!\n${padding}Successfuly downloaded ${state.downloaded} from ${state.sourceData.length} items\n${padding}Failed to download ${state.sourceData.length - state.downloaded}`)
  }
}

export function logInitialDownload(
  state: DownloadState
): void {
  const message: string = `Downloading started. We are loading ${state.sourceData.length} items`
  showMessage(message)
}
