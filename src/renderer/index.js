'use strict';
const dashboard = require('just-dashboard')
const fs = require('fs')

const render_dashboard = (data) =>
  dashboard.json_parser(data)(dashboard.d3.selection())

const render_dashboard_yaml = (data) =>
  render_dashboard(dashboard.yaml_parser(data))


const argv = require('electron').remote.process.argv
const input_file = argv[1]
const file_contents = fs.readFileSync(input_file, {"encoding": "utf-8"})

render_dashboard_yaml(file_contents)
