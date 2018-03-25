'use strict';
import * as dashboard from 'just-dashboard/dist/dashboard.js'
const fs = require('fs')




const argv = require('electron').remote.process.argv
const input_file = argv[1]
const file_contents = fs.readFileSync(input_file, {"encoding": "utf-8"})

const file_loader = (path, callback) => {
  console.log("Loading file", path)
  const file_contents = fs.readFileSync(
    path.slice('file://'.length), {"encoding": "utf-8"})
  callback(undefined, file_contents)
  console.log("Loaded file", path)
}


const render_dashboard = (data) =>
  dashboard.json_parser(data, file_loader)(dashboard.d3.selection())

const render_dashboard_yaml = (data) =>
  render_dashboard(dashboard.yaml_parser(data))

render_dashboard_yaml(file_contents)

dashboard.d3.select("body")
  .attr("id", "baseline")
  .attr("class", "typeset")
