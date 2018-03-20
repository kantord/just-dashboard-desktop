const dashboard = require('just-dashboard')
'use strict';

const render_dashboard = (data) =>
  dashboard.json_parser(data)(dashboard.d3.selection())

const render_dashboard_yaml = (data) =>
  render_dashboard(dashboard.yaml_parser(data))

render_dashboard_yaml(`
dashboard "Hello World":
  - h1 text: "Hello from just-dashboard"
  - pie chart: {
    "columns": [
      ["foo", 3],
      ["bar", 4],
      ["baz", 2],
    ]
  }
`)
