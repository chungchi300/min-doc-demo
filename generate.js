"use strict";

var plantuml = require("node-plantuml");
var fs = require("fs");
var md = require("markdown-it")({
  html: true,
  linkify: true,
  typographer: true
});

function plantumlToPng(file, destinationFileName) {
  var gen = plantuml.generate(file);

  gen.out.pipe(fs.createWriteStream(destinationFileName));
}
function markdownToHtml(file, destinationFileName) {
  var result = md.render(fs.readFileSync(file, "utf8"));

  fs.writeFileSync(destinationFileName, result);
}
plantumlToPng(
  "./docs/self/plantuml/flow.plantuml",
  "./docs/self/img/gen.flow.png"
);
markdownToHtml("./docs/self/doc.md", "./docs/self/gen.doc.html");
