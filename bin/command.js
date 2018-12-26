#!/usr/bin/env node

const fs        = require('fs')
const cmd       = require('node-cmd')
const chalk     = require('chalk');
const symbols   = require('log-symbols');
const program   = require('commander')
const init      = require('./init')
program.version("0.0.1")

program.command("init <ProjectName>")
    .description("create a new Project")
    .action(function(projectName) {
        if(!fs.existsSync(projectName)) {
            init(projectName)
        } else {
            console.log(symbols.warning, chalk.red(`文件${projectName}已经存在`)); 
        }
    })


program.parse(process.argv)

if (!program.args.length) {
    program.help() 
    return
}