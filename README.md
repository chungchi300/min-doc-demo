## What is min-doc

min-doc is an **hackable simple documentation generation template** that support **.md=>html** and **.plantuml=>img** tool.

## Pretty

* **Easy install** - All you need is having **node and npm installed**
* **Easy editing** - All you need is text editor like(nodepad++) to **draw different graph and styling**.
* **Good verision control** - Because **plantuml** allow Easily create UML Diagrams(Flow chart,Sequence diagram,Class diagram) from **simple textual description**.
* **Github-like html style** - Because when **html generated from markdown** using the **github markdown css**
* **hackable** - Want to integrate with [mindmap](https://github.com/fex-team/kityminder-editor)?Want to have .mp3 file?Simply Modify the `generate.js` file and **create your own documentation generation tool**.

## Usage

```
git clone git@github.com:chungchi300/min-doc.git
npm install
npm run generate
/*
if you want to automatically generate file after editing.
npm run generate-watch
*/
```

## Example

[Self](./docs/self/gen.doc.html)

## Optional

Despite you can edit using any text editor,there is some **plugins and editor** suggested to use for **real time preview & wysiwyg**
on **single file**

### Editor

VS Code Studio

### Plugins

VS Code Studio

* [plantuml](https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml#review-details)

* [markdown](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
