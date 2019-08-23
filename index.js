#!/usr/bin/env node

const electron = require("electron");
const proc = require("child_process");

// will print something similar to /Users/maf/.../Electron
console.log(electron);

const process = require("process");
const input_file = process.argv[2];
// spawn Electron
const child = proc.spawn(electron, [require.resolve("./main.js"), input_file]);
