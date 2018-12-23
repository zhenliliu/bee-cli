#!/usr/bin/env node
const program = require('commander')
const cmd     = require('node-cmd')
const glob    = require('glob')

program.usage('<project-name>').parse(process.argv)
let fileList = glob.sync("*")
console.log('fileList', fileList)