import fs from 'fs'
import fm from 'front-matter'

function readDir (path) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, function (err, filenames) {
      if (err) {
        reject(err)
      } else {
        resolve(filenames)
      }
    })
  })
}

function readFile (dirname, filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(dirname + '/' + filename, 'utf-8', function (err, content) {
      if (err) {
        reject(err)
      }
      resolve({
        content: fm(content),
        filename: filename.substr(0, filename.lastIndexOf('.'))
      })
    })
  })
}

export function getProjects () {
  return readFiles('./content/projects')
}

export async function readFiles (dirname) {
  try {
    const filesNames = await readDir(dirname)
    return Promise.all(filesNames.map(filename => readFile(dirname, filename)))
  } catch (error) {
    console.error(error)
  }
  // fs.readdir(dirname, function(err, filenames) {
  //   if (err) {
  //     onError(err);
  //     return;
  //   }
  //   filenames.forEach(function(filename) {
  //     fs.readFile(dirname + filename, 'utf-8', function(err, content) {
  //       if (err) {
  //         onError(err);
  //         return;
  //       }
  //       onFileContent(filename, content);
  //     });
  //   });
  // });
}

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
