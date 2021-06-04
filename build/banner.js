'use strict'
const pack = require('../package.json')
// 打包的静态文件的写法
const bannerTxt = `/*! 版本号为 v${pack.version} | 小可爱们这是我写的小文本  */\n`

process.stdout.write(bannerTxt)
process.stdin.pipe(process.stdout)
