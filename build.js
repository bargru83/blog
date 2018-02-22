const showdown = require('showdown');
const moment = require('moment');
const fs = require('fs');

const converter = new showdown.Converter();

const postIndex = [];
let indexElements = "";
const postsByTag = {};

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

  frontMatter.tags = frontMatter.tags.map((tag) => {
    return tag.trim();
  });

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

    tags.forEach((tag) => {
      if (!postsByTag[tag]) {
        postsByTag[tag] = [];
      }
      postsByTag[tag].push({ title, date, tags, writePath, writeFileName });
    });

  });
  const indexTemplatePath = './templates/index.html';
  const indexTemplate = fs.readFileSync(indexTemplatePath, 'utf8');
  postIndex.sort((a, b) => {
    const aDate = moment(a.date);
    const bDate = moment(b.date);
    if (aDate.isBefore(bDate)) {
      return -1;
    }
    if (aDate.isAfter(bDate)) {
      return 1;
    }
    return 0;
  });
  postIndex.reverse();

  const tagHeaderElements = [];
  let tagPageTagElements = '';
  postIndex.forEach((post) => {
    //indexElements += `<a href="${post.writeFileName}.html">${post.title} - ${post.date} - ${post.tags}</a><br />\n`;

    const divElement =
      `<div>\
  <a href="${post.writeFileName}.html">${post.title}</a> \
  ---TAGS--- \
  </div>`

    let tagElements = '';
    post.tags.forEach((tag) => {
      //tagElements += `<button onclick="goToTags(this.innerText)">${tag}</button>`;
      tagElements += `<a href="tags/${tag}.html">${tag}</a>`;
      if (tagHeaderElements.indexOf(tag) === -1) {
        tagHeaderElements.push(tag);
      }

    })


    /* const tagPageElement =
      `<div>\
<a href="${post.writeFileName}.html">${post.title}</a> \
</div>`

    tagPageTagElements += tagPageElement; */

    const combinedElements = divElement.replace('---TAGS---', tagElements);

    indexElements += combinedElements;





  });

  const finalIndexPage = indexTemplate.replace('---CONTENT---', indexElements);
  const indexWritePath = `./docs/index.html`;
  fs.writeFileSync(indexWritePath, finalIndexPage);


  const tagsTemplatePath = './templates/tags.html';
  const tagsTemplate = fs.readFileSync(tagsTemplatePath, 'utf8');

  tagHeaderElements.forEach((tag) => {

    let tagLinks = '';
    const thisTagsPosts = postsByTag[tag];
    thisTagsPosts.forEach((post) => {
      const tagLinkElement =
        `<div> \
      <a href="../s${post.writeFileName}.html">${post.title}</a> \
      </div>`

      tagLinks += tagLinkElement;
    });

    const finalTagPage = tagsTemplate.replace('---CONTENT---', tagLinks);
    const tagsDirectory = './docs/tags';
    if (!fs.existsSync(tagsDirectory)) {
      fs.mkdirSync(tagsDirectory);
    }
    const tagsWritePath = `./docs/tags/${tag}.html`;
    fs.writeFileSync(tagsWritePath, finalTagPage);
  });

}