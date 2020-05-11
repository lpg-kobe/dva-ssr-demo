export async function getData (param) {
  return await Promise.resolve({
    news: [
      {
        id: '1',
        title: 'Racket v7.3 Release Notes'
      }
    ]
  })
}
export async function getInfo (param) {
  return await Promise.resolve({
    detail: { 1: 'Racket-on-Chez continues to improve. Snapshot builds are currently available at pre.racket-lang.org, and we expect that Racket-on-Chez will be included as a download option in the next release.' }
  })
}
