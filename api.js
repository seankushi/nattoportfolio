import fs from 'fs'

export default async function (path) {
  const fileNames = []
  try {
    fs.readdir(path, function (err, files) {
      if (err) {
        throw err
      }
      console.log('FILES', files)
      if (!files) {
        return []
      }
      files.forEach(file => {
        console.log(file)
        fileNames.push(file)
      })
    })
    return fileNames
  } catch (error) {
    console.error('API', error)
  }
}
