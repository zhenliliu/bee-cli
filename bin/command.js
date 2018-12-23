#!/usr/bin/env node

const program = require('commander')
const cmd     = require('node-cmd')
program.version("0.0.1")
program.command("init <ProjectName>")
    .description("create a new Project")
    .action(function(projectName) {
        console.info(`init Project ${projectName}`)
        cmd.get(
            `node ./init.js`
        )
    })
program.parse(process.argv)

if (!program.args.length) {
    program.help() 
    return
}