const showdown = require('showdown');
const fs = require('fs');

const converter = new showdown.Converter();

const postIndex = [];
let indexElements = "";


function splitFrontMatter(post) {
  const splitPost = post.split('---ENDFRONTMATTER---', 2);

  splitPost[0] = splitPost[0].replace(/\\n/g, "\\n")  
               .replace(/\\'/g, "\\'")
               .replace(/\\"/g, '\\"')
               .replace(/\\&/g, "\\&")
               .replace(/\\r/g, "\\r")
               .replace(/\\t/g, "\\t")
               .replace(/\\b/g, "\\b")
               .replace(/\\f/g, "\\f");


  const frontMatter = JSON.parse(splitPost[0]);

  frontMatter.tags = frontMatter.tags.replace(/\\n/g, "\\n")  
  .replace(/\\'/g, "\\'")
  .replace(/\\"/g, '\\"')
  .replace(/\\&/g, "\\&")
  .replace(/\\r/g, "\\r")
  .replace(/\\t/g, "\\t")
  .replace(/\\b/g, "\\b")
  .replace(/\\f/g, "\\f")
  .replace('[', '')
  .replace(']', '')
  .replace('\\', '')
  .replace(/["']/g, "");

  frontMatter.tags = frontMatter.tags.split(',');

const postContent = splitPost[1];

  return { frontMatter, post: postContent };
}


const postFileNames = fs.readdirSync('./posts/');

if (postFileNames) {
  postFileNames.forEach((postFileName) => {
    //const { title, date, tags } = postList[postFileName];

    const readPath = `./posts/${postFileName}`;
    const fileContent = fs.readFileSync(readPath, 'utf8');

    const { frontMatter, post } = splitFrontMatter(fileContent); 

    const { title, date, tags } = frontMatter;

    const html = converter.makeHtml(post);

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
  const indexTemplatePath = './templates/index.html';
  const indexTemplate = fs.readFileSync(indexTemplatePath, 'utf8');

  postIndex.forEach((post) => {
    indexElements += `<a href="${post.writeFileName}.html">${post.title} - ${post.date} - ${post.tags}</a>&nbsp`;
  });

  const finalIndexPage = indexTemplate.replace('---CONTENT---', indexElements);
  const indexWritePath = `./docs/index.html`;
  fs.writeFileSync(indexWritePath, finalIndexPage);
}