import * as fs from 'fs';
import * as path from 'path';


function readdir(templateDir, pageDir, fileHandler, parentName) {
  const files = fs.readdirSync(templateDir, { encoding: 'utf-8' })
  files.forEach(name => {
    const filepath = `${templateDir}/${name}`
    fileHandler(filepath, parentName ? `${parentName}/${name}` : name, pageDir)
    const stat = fs.statSync(filepath)
    if (stat.isDirectory()) {
      readdir(filepath, pageDir, fileHandler, name)
    }
  })
}

function mkdir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
}

// 生成文件
function generate(pageName: string) {
  const templateDir = path.resolve(__dirname, '../src/templates')
  console.log(templateDir)
  // 生成页面根目录
  const pageDir = path.resolve(__dirname, '../src/pages', pageName)
  mkdir(pageDir)

  // 递归生成文件夹和文件
  readdir(path.join(templateDir, 'ListTpl'), pageDir, fileHandler, null)
}

function fileHandler(filepath, name, pageDir) {
  const stat = fs.statSync(filepath)
  const filename = path.join(pageDir, name)
  console.log(path.join(pageDir, name))
  // 生成文件夹和文件
  if (stat.isDirectory()) {
    mkdir(filename)
  } else if (stat.isFile()) {
    let content = fs.readFileSync(filepath, { encoding: 'utf-8' })
    fs.writeFileSync(filename, content, { encoding: 'utf-8' })
  }
}

export { generate };
