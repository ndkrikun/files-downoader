import { SOURCE_DATA_PATH } from './keys';
import { textFileToArray } from './file-reader';

const data: string[] = textFileToArray(
  SOURCE_DATA_PATH
)

console.log(
  data.length
)
