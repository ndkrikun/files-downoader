import * as download from 'download-file'
import * as delay from 'delay'
import { textFileToArray } from './file-reader'
import { logDownloadResult, getFileName, logInitialDownload } from './helpers'
import {
  SOURCE_DATA_PATH,
  DEST_DATA_PATH,
  STEP_DELAY
} from './keys'
import { DownloadState } from './interfaces/download-state.model'

const sourceData: string[] = textFileToArray(
  SOURCE_DATA_PATH
);

const state: DownloadState = {
  fileIndex: 0,
  downloaded: 0,
  sourceData,
}

function onComplete(
  error: string
): void {
  const isLastItem = state.fileIndex === state.sourceData.length

  logDownloadResult(
    state,
    error,
    isLastItem
  )

  if (!error) {
    state.downloaded++
  }

  if (isLastItem) {
    return
  }
  
  delay(STEP_DELAY).then(() => {
    state.fileIndex++;
    downLoadFile(
      sourceData[state.fileIndex]
    )
  })
}

function downLoadFile(
  path: string,
) {
  const config = {
    directory: DEST_DATA_PATH,
    filename: getFileName(path)
  }
  download(
    path,
    config,
    error => onComplete(error)
  )
}

function init(): void {
  logInitialDownload(state);
  
  downLoadFile(
    sourceData[state.fileIndex]
  )
}

init()
