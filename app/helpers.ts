import { DownloadState } from './interfaces/download-state.model'

export function getFileName(
  path: string
): string {
  return path.split('/').slice(-1)[0]
}

const line: string = '----------------------------------------------------------'

function showMessage(
  message: string
): void {
  console.info(`\n\t${message}\n\t${line}`)
}

export function logDownloadResult(
  state: DownloadState,
  error: string,
  isLastItem: boolean
): void {
  const step: string = `${state.fileIndex + 1} / ${state.sourceData.length}`
  const status: string = !!error ? `Failed with error code: ${error}` : 'Done!'
  const message: string = `${step} ${status}`

  showMessage(message)

  isLastItem && console.info(`
    \n\tCompleted!
    \n\tSuccessfuly downloaded ${state.downloaded} from ${state.sourceData.length} items
    \n\tFailed to download ${state.sourceData.length - state.downloaded}
  `)
}

export function logInitialDownload(
  state: DownloadState
): void {
  const message: string = `Downloading started. We are loading ${state.sourceData.length} items`
  showMessage(message)
}
