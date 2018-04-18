"use strict";

var plantuml = require("node-plantuml");
var fs = require("fs");
var glob = require("glob");
var _ = require("lodash");
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
  //You can add any content here!
  fs.writeFileSync(
    destinationFileName,
    `
    <script>
    document.addEventListener("DOMContentLoaded", function(event) { 
      document.getElementsByTagName("body")[0].classList.add('markdown-body');
    });
    </script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.css">
    <style>
      .markdown-body{
        width:1024px;
        padding: 45px;
        word-wrap: break-word;
        background-color: #fff;
        border: 1px solid #ddd;
        margin-left: auto;
        margin-right: auto;
      }
    </style>
    ` + result
  );
}
function getDestinationFileName(file) {
  let fileName = _.last(file.split("/"));
  let folder = file.replace(fileName, "");
  let fileNameWithoutExtension = /(.*)\./.exec(fileName)[1];
  let destinationExtension;
  if (fileName.includes("plantuml")) {
    destinationExtension = "png";
  }
  if (fileName.includes("md")) {
    destinationExtension = "html";
  }
  let destinationFileName = `${folder}gen.${fileNameWithoutExtension}.${destinationExtension}`;

  return destinationFileName;
}
function generate(folder) {
  glob(folder + "/plantuml/*.plantuml", null, function(er, files) {
    files.forEach(file => {
      plantumlToPng(file, getDestinationFileName(file));
    });
  });
  glob(folder + "/*.md", null, function(er, files) {
    files.forEach(file => {
      markdownToHtml(file, getDestinationFileName(file));
    });
  });
}
generate("./docs/demo");
