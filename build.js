const postList = require('./postList');
const showdown = require('showdown');
const fs = require('fs');

const converter = new showdown.Converter();

const postIndex = [];
let indexElements = "";

const postFileNames = fs.readdirSync('./posts/');
console.log('postFileNames', postFileNames);

if (postFileNames) {
  postFileNames.forEach((postFileName) => {
    const { title, date, tags } = postList[postFileName];

    const readPath = `./posts/${postFileName}`;
    const fileContent = fs.readFileSync(readPath, 'utf8');
    const html = converter.makeHtml(fileContent);

    const postTemplatePath = './templates/post.html';
    const postTemplate = fs.readFileSync(postTemplatePath, 'utf8');

    const combinedContent = postTemplate.replace('---CONTENT---', html);


    const outputDirectory = './docs';

    if (!fs.existsSync(outputDirectory)) {
      fs.mkdirSync(outputDirectory);
    }


    writeFileName = postFileName.slice(0, -3);
    const writePath = `./docs/${writeFileName}.html`;
    fs.writeFileSync(writePath, combinedContent);

    postIndex.push({ title, date, tags, writePath, writeFileName });

  });
  // write postIndex to index.html ---CONTENT---
  const indexTemplatePath = './templates/index.html';
  const indexTemplate = fs.readFileSync(indexTemplatePath, 'utf8');

  // convert postIndex from an array in to html elements
  postIndex.forEach((post) => {
    indexElements += `<a href="${post.writeFileName}.html">${post.title}</a>&nbsp`;
  });

  const finalIndexPage = indexTemplate.replace('---CONTENT---', indexElements);
  const indexWritePath = `./docs/index.html`;
  fs.writeFileSync(indexWritePath, finalIndexPage);
}