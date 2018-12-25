#!/usr/bin/env node

const fs        = require('fs')
const cmd       = require('node-cmd')
const ora       = require('ora');
const chalk     = require('chalk');
const symbols   = require('log-symbols');
const program   = require('commander')
const inquirer  = require('inquirer');
const download  = require('download-git-repo');
const promptOptions = require('./promptOptions')
program.version("0.0.1")

program.command("init <ProjectName>")
    .description("create a new Project")
    .action(function(projectName) {
        if(!fs.existsSync(projectName)) {
            initProject(projectName)
        } else {
            console.log(symbols.warning, chalk.red(`文件${projectName}已经存在`)); 
        }
    })
function initProject(projectName) {
    inquirer.prompt(promptOptions).then((options) => {
        const spinner = ora({
            text: `正在加载，请稍后⌛...  \n`,
            spinner: 'bouncingBar'
        });
        if(options.useRedux){
            spinner.start()
            download("github.com:zhenliliu/ssr-scaffold#master",projectName, {clone: false}, (error) => {
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
        } else {
            console.log('不使用redux', options)
        }
    })
}

console.log(
    [
      '    ████                             ',
      '   ░░███                             ',
      '    ░███████   ████████   ████████   ',
      '    ░███░░███ ░███░░░░   ░███░░░░    ',
      '    ░███ ░███ ░██████    ░██████     ',
      '    ░███ ░███ ░███░░     ░███░░      ',
      '   ████████   ░████████  ░████████   ',
      '   ░░░░░      ░░░░░░░░   ░░░░░░░░    ',
    ].join('\n'))

program.parse(process.argv)

if (!program.args.length) {
    program.help() 
    return
}