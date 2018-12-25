#!/usr/bin/env node
const ora       = require('ora');
const chalk     = require('chalk');
const symbols   = require('log-symbols');
const program   = require('commander')
const inquirer  = require('inquirer');
const download  = require('download-git-repo');
const promptOptions = require('./promptOptions')
module.exports = function (projectName) {
  inquirer.prompt(promptOptions).then((options) => {
      const spinner = ora({
          text: `正在加载，请稍后⌛...  \n`,
          spinner: 'bouncingBar'
      });
      spinner.start()
      download(`github.com:zhenliliu/ssr-scaffold#${options.ui}`,projectName, {clone: false}, (error) => {
          if(error) {
              console.log('error', error)
              spinner.fail('下载失败')
              process.exit()
          }else {
              spinner.succeed('初始化成功')
              console.log(symbols.info,chalk.green(`cd ${projectName}; npm install; npm run dev`))
              process.exit()
              
          }
      })
  })
}