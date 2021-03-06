#!/usr/bin/env node
const fs        = require('fs');
const path      = require('path');
const ora       = require('ora');
const chalk     = require('chalk');
const symbols   = require('log-symbols');
const inquirer  = require('inquirer');
const download  = require('download-git-repo');
const promptOptions = require('./promptOptions')
module.exports = function (projectName) {
  inquirer.prompt(promptOptions.initProject).then((options) => {
      const spinner = ora({
          text: `正在加载，请稍后...  \n`,
          spinner: 'bouncingBar'
      });
      spinner.start()
      download(`github.com:zhenliliu/ssr-scaffold#${options.ui}`,projectName, {clone: false}, (error) => {
          if(error) {
              console.log('error', error)
              spinner.fail('加载失败')
              process.exit()
          }else {
              let packagePath = path.resolve(process.cwd(),`./${projectName}/package.json`)
              let packageJson = fs.readFileSync(packagePath, "utf-8").replace(/(\"\$\{projectName\}\")/,`"${projectName}"`)
              fs.writeFileSync(packagePath,packageJson)
              spinner.succeed('初始化成功')
              console.log(
                [
                  '    ████                           ',
                  '   ░░███                           ',
                  '    ░███████   ████████   ████████ ',
                  '    ░███░░███ ░███░░░░   ░███░░░░  ',
                  '    ░███ ░███ ░██████    ░██████   ',
                  '    ░███ ░███ ░███░░     ░███░░    ',
                  '   ████████   ░████████  ░████████ ',
                  '   ░░░░░      ░░░░░░░░   ░░░░░░░░  ', 
                ].join('\n'))
                console.log(symbols.info, chalk.bold(`运行项目请操作：`))
                console.log(symbols.info, chalk.bold(`cd ${projectName}`))
                console.log(symbols.info, chalk.bold(`npm run dev`))
          }
      })
  })
}