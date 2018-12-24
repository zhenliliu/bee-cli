#!/usr/bin/env node

const fs        = require('fs')
const cmd       = require('node-cmd')
const ora       = require('ora');
const chalk     = require('chalk');
const symbols   = require('log-symbols');
const program   = require('commander')
const inquirer  = require('inquirer');
const download  = require('download-git-repo');

program.version("0.0.1")

program.command("init <ProjectName>")
    .description("create a new Project")
    .action(function(projectName) {
        if(!fs.existsSync(projectName)) {
            inquirer.prompt([
                { type: 'input', name: 'useRedux', message: 'use redux(y/n):'},
            ]).then((options) => {
                const spinner = ora('downloading...');
                if(options.useRedux === 'y' || options.useRedux === 'yes' || options.useRedux === '是'){
                    spinner.start()
                    download("github.com:zhenliliu/ssr-scaffold",projectName, {clone: false}, (error) => {
                        if(error) {
                            console.log('error', error)
                            spinner.fail('下载失败')
                            process.exit()
                        }else {
                            spinner.succeed('初始化成功')
                            process.exit()
                        }
                    })
                } else if (options.useRedux === 'n' || options.useRedux === 'no' || options.useRedux === '否'){
                    console.log('不使用redux', options)
                } else {
                    console.log(symbols.warning, chalk.red(`请输入正确命令！`))
                }
            })

        } else {
            console.log(symbols.warning, chalk.red(`文件${projectName}已经存在`)); 
        }
        // if(fs.stat(projectName))
        // const spinner = ora('正在下载模板...');
        // spinner.start();
        // setTimeout(() => {
        //     // spinner.fail();
        //     spinner.succeed();
        //     console.log(symbols.success, chalk.green('项目创建成功'));
        //          
        // },3000)
        // cmd.get(
        //     `node ./init.js`
        // )
    })
program.parse(process.argv)

if (!program.args.length) {
    program.help() 
    return
}