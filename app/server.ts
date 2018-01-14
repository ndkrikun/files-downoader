import * as download from 'download-file'
import * as delay from 'delay'
import { textFileToArray } from './file-reader'
import { logDownloadResult, getFileName } from './helpers'
import {
  SOURCE_DATA_PATH,
  DEST_DATA_PATH,
  STEP_DELAY
} from './keys'

const sourceData: string[] = textFileToArray(
  SOURCE_DATA_PATH
).filter((el, index) => index >= 1000 && index <= 1100)

let fileIndex = 0;

function onComplete(
  error: string
): void {
  logDownloadResult(error);
  delay(200)
    .then(() => {
      fileIndex++;
      downLoadFile(
        sourceData[fileIndex]
      )
    });
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

console.log(
  'Downloading started',
  'Source data length is: ',
  sourceData.length
)

downLoadFile(
  sourceData[fileIndex]
)
 
