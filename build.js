const showdown = require('showdown');
const moment = require('moment');
const fs = require('fs');
const {
  cleanTag,
  cleanFrontMatter,
  cleanTags,
  deleteFolderRecursive
} = require('./lib/utils');

const converter = new showdown.Converter();

// set global vars
const postIndex = [];
let indexElements = "";
const postsByTag = {};

function splitFrontMatter(post) {
  // split the front matter from the post content
  const splitPost = post.split('---ENDFRONTMATTER---', 2);

  // clean up the front matter
  splitPost[0] = cleanFrontMatter(splitPost[0]);

  // parse the cleaned up front matter in to JSON
  const frontMatter = JSON.parse(splitPost[0]);

  // clean up the front matter tags
  frontMatter.tags = cleanTags(frontMatter.tags);

  // turn the tags in to an array
  frontMatter.tags = frontMatter.tags.split(',');

  // remove white space from tags
  frontMatter.tags = frontMatter.tags.map((tag) => {
    return tag.trim();
  });

  // return front matter and tags array separately
  const postContent = splitPost[1];
  return { frontMatter, post: postContent };
}

// get all file names of existing (potentially stale) files in docs directory
const docsDir = './docs/';
//const existingDocs = fs.readdirSync(docsDir);
// delete all files
if (fs.existsSync(docsDir)) {
  deleteFolderRecursive('./docs/');
}

// get file names of all md posts
const postFileNames = fs.readdirSync('./posts/');

// if there are any md posts
if (postFileNames) {
  postFileNames.forEach((postFileName) => {
    // read in all md posts
    const readPath = `./posts/${postFileName}`;
    const fileContent = fs.readFileSync(readPath, 'utf8');

    // separate front matter from post content
    const { frontMatter, post } = splitFrontMatter(fileContent);

    // get metadata from front matter
    const { title, date, tags } = frontMatter;

    // convert post content from md to html
    const html = converter.makeHtml(post);

    // read in html template file for posts
    const postTemplatePath = './templates/post.html';
    const postTemplate = fs.readFileSync(postTemplatePath, 'utf8');

    // format the post's date nicely
    const dateString = moment(date).format('Do MMMM Y');

    // generate tag elements from tag variable
    // replace to add tags below
    let tagElements = '';
    tags.forEach((tag) => {
      tagElements += `<a href="tags/${tag}.html" class="in-post-tag">${cleanTag(tag)}</a>`;
    });

    // insert te posts's title, content and date in to the html template for posts
    const combinedContent = postTemplate.replace('---HEADER---', title).replace('---CONTENT---', html).replace('---DATE---', dateString).replace('---TAGS---', tagElements);

    // set the output directory
    const outputDirectory = './docs';

    // if the output directoy doesn't exist, create it
    if (!fs.existsSync(outputDirectory)) {
      fs.mkdirSync(outputDirectory);
    }

    // get the filename to write the html post to
    writeFileName = postFileName.slice(0, -3);
    // write the html post file
    const writePath = `./docs/${writeFileName}.html`;
    fs.writeFileSync(writePath, combinedContent);

    // push the details of the post to the post index
    postIndex.push({ title, date, tags, writePath, writeFileName });

    // push the post details to a lookup object
    tags.forEach((tag) => {
      if (!postsByTag[tag]) {
        postsByTag[tag] = [];
      }
      postsByTag[tag].push({ title, date, tags, writePath, writeFileName });
    });
  });

  // read in html template file for the index page
  const indexTemplatePath = './templates/index.html';
  const indexTemplate = fs.readFileSync(indexTemplatePath, 'utf8');

  // sort posts in the post index in reverse chronological order
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

  // set vars to hold tag data
  const tagHeaderElements = [];
  let tagPageTagElements = '';

  // for each post in the post index
  postIndex.forEach((post) => {
    // create the html elements for the post's enrtry in the index page
    const divElement =
      `<div class="index-page-post-container">\
  <a href="${post.writeFileName}.html" class="index-page-post-title">${post.title}</a> \
  ---TAGS--- \
  <div class="index-page-post-date"> \
  ---DATE--- \
  </div> \
  </div>`

    // create the list of tags to display beside the post entry on the index page
    let tagElements = '';
    post.tags.forEach((tag) => {
      tagElements += `<a href="tags/${tag}.html" class="index-page-post-tag">${cleanTag(tag)}</a>`;
      if (tagHeaderElements.indexOf(tag) === -1) {
        tagHeaderElements.push(tag);
      }
    })

    // format the post's date nicely
    const dateString = moment(post.date).format('Do MMMM Y');

    // insert the tag list and the date in to the post enty's html elements
    const combinedElements = divElement.replace('---TAGS---', tagElements).replace('---DATE---', dateString);

    // add this post entry to the list of all post entries
    indexElements += combinedElements;
  });

  // insert the html elements from the list of post entries in to the index page html template
  const finalIndexPage = indexTemplate.replace('---CONTENT---', indexElements);
  const indexWritePath = `./docs/index.html`;
  fs.writeFileSync(indexWritePath, finalIndexPage);

  // read in html template file for the tags pages
  const tagsTemplatePath = './templates/tags.html';
  const tagsTemplate = fs.readFileSync(tagsTemplatePath, 'utf8');

  // for each tag used across the blog
  tagHeaderElements.forEach((tag) => {
    // create a var to hold all links of this tag type
    let tagLinks = '';
    // fetch all posts using this tag
    const thisTagsPosts = postsByTag[tag].reverse();
    // for each fecthed post
    thisTagsPosts.forEach((post) => {
      // format the post's date nicely
      const dateString = moment(post.date).format('Do MMMM Y');

      // create the html elements for this post's link on the tags pages
      const tagLinkElement =
        `<div class="tag-page-post-container"> \
      <a href="../${post.writeFileName}.html" class="tag-page-post-title">${post.title}</a> \
      <p class="tag-page-post-date">${dateString}</p> \
      </div>`
      // add this to the entire list of tag links
      tagLinks += tagLinkElement;
    });

    // Create header text for the tag page
    const tagPageTitle = `Posts by tag: ${cleanTag(tag)}`;

    // insert the list of posts of this tag type, and the page title in to the tag page template
    const finalTagPage = tagsTemplate.replace('---CONTENT---', tagLinks).replace('---TAG---', tagPageTitle);

    // set the tags pages output directory, and create it if it doesn't exist
    const tagsDirectory = './docs/tags';
    if (!fs.existsSync(tagsDirectory)) {
      fs.mkdirSync(tagsDirectory);
    }
    // write out the file for that tag's page
    const tagsWritePath = `./docs/tags/${tag}.html`;
    fs.writeFileSync(tagsWritePath, finalTagPage);
  });

  // copy the site's styles to the output directory
  const cssPath = './templates/styles.css';
  fs.copyFileSync(cssPath, './docs/styles.css');

  // get file names of any media files
  const mediaFileNames = fs.readdirSync('./media/');

  // if there are any media file, copy them to the docs directory
  if (mediaFileNames) {
    mediaFileNames.forEach((mediaFileName) => {
      const mediaFileReadPath = `./media/${mediaFileName}`;

      const mediaOutputDirectory = './docs/media';
      if (!fs.existsSync(mediaOutputDirectory)) {
        fs.mkdirSync(mediaOutputDirectory);
      }
      fs.copyFileSync(mediaFileReadPath, `${mediaOutputDirectory}/${mediaFileName}`);
    });
  }

  // get file names of any static files
  const staticFileNames = fs.readdirSync('./static/');

  // if there are any media file, copy them to the docs directory
  if (staticFileNames) {
    staticFileNames.forEach((staticFileName) => {
      const staticFileReadPath = `./static/${staticFileName}`;

      const staticOutputDirectory = './docs';
      if (!fs.existsSync(staticOutputDirectory)) {
        fs.mkdirSync(staticOutputDirectory);
      }
      fs.copyFileSync(staticFileReadPath, `${staticOutputDirectory}/${staticFileName}`);
    });
  }

}