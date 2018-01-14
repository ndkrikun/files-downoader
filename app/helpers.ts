export function getFileName(
  link: string
): string {
  return link.split('/').slice(-1)[0];
}

export function logDownloadResult(
  error
) {
  console.log('---------------------------------------------');
  console.log(!!error ? `Error: ${error}` : 'Done')
  console.log('---------------------------------------------\n');
}
