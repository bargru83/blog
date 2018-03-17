{
  "title": "How this blog is built",
  "date": "2018-03-17",
  "tags": "['blogging', 'some-tag']",
  "draft": "false"
}
---ENDFRONTMATTER---
The way I decided to build this blog is a little unusual, so I thought it would make a good subject for my first post.

# The problem

I've built a few blogs before, and I've always used some pretty common frameworks. My first couple of blogs were built on self-hosted Wordpress installations. Wordpress is nice but it soon became clear that it wasn't right for me. It's a large CMS and I only ever used a small subset of its features. It also required hosting on a paid server somewhere and being kept up to date with various patches. On top of this my wordpress sites were always a target for hackers. It always surprised me that sites as small as mine were even worth a hacker's time, but they tried pretty much every day!

For a later blog I learned about static site generators. This seemed much more suited to my use case. Posts could be written in markdown, converted to static HTML, CSS and JavaScript and hosted more easily with no need for a backend or a database. Hosting could be free, and having no backend means nothing for hackers to target! I built a site using Jekyll, and it made getting a site up and running very simple. However over time even Jekyll seemed like more than I needed. It's been built to accomodate a lot of features, most of which I didn't need, and it also required me to learn a templating engine to be able to style the site, which I just never got around to doing.

# The solution

This time around I knew that a static site generator would still be the best fit for my needs, so I figured, why not just build a simple one myself? It's simpler than it sounds, and serves my purposes perfectly. Here's how I did it. (I won't go in to code specific details here for the sake of brevity, but if you're interested you can read my heavily commented code <a href="https://github.com/bargru83/blog" id="link">here</a>).

# Building

My directory structure looks like this:

- **/docs** (the output directory where the final site will be built)
- **/lib** (any helper files required by the build script)
- **/media** (images)
- **/posts** (blog posts written in markdown)
- **/static** (pages which don't rely on blog posts, such as the about page)
- **/templates** (HTML templates that the post content will be inserted in to)
- **build.js** (the build script that makes the magic happen)

I write my posts in markdown format, and add to the top of each post an area called frontmatter (I stole that from all of the good static site generators). The frontmatter section is bascially just a JSON string containing properties about that post, like its title, date, an array of tags, and whether that post is in a draft state or not. I end the frontmatter section with a specific string so that I have an easy way to determine the end of the frontmatter from the start of the post content.

All media files (images) required are put in to a local directory inside the project, and all static files (the about page for example) are held in a local directory too. Once I've written a blog post I run the build script (I've added it as a script to my package.json, so that I can simply run `npm run build`), which does the following. Note that the process below is simplified but explains everything important without being too boring.

1. Check if there is already an output (/docs) directory full of posts from the previous time I ran this build script. If there is delete it. We'll rebuild the entire output directory each time the script is run to make sure that no stale data remains in there.
2. Check is there are any markdown post in the posts folder. If not then our work her is done.
3. If any post are found, for each post:
    * Separate the frontmatter from the post content.
    * Parse the JSON content in to usable data.
    * Check whether the frontmatter contains a `"draft": "true"` value. If it does then this post isn't ready to be published, so skip it.
    * For any post that isn't in a draft state, pass the post content to <a href="http://showdownjs.com/" id="link"> Showdownjs</a>, an npm package that converts markdown to HTML.
    * Fetch the post template file. This is just an HTML file that I've built and styled, and which contains placeholder strings for the post's title, date, tags and content.
    * Using a series of `String.replace()` calls I replace the placeholder strings in the template with the converted HTML of the post content, title, tags and date, and write out the final post as an HTML file.
    * While the post are being processed keep a record of all tags encountered, and which posts use each one.
    * Once the post are all processed, use the recorded tag data to perform a similar process to before, loading an HTML template file for the tags page. Replace the placeholder content with a page title and a list of all posts using that tag. Write out each final HTML tag page (one page per tag).
    * Similarly again, load up an HTML template for the index page, replace the placeholder strings with a list of links to the posts (in reverse chronological order) and write out the final HTML index file.
4. Copy all styles, media and static files to the output directory.

The process is pretty basic but the result is perfect for my needs, a very simple and quick to laod static site that I have total control over.

In an earlier version I built the tags page as a single page that used JavaScript to change the list of posts as you click through the various tags. However after some research I decided that I wanted to build a blog that would run perfectly for people who have JavaScript disabled in their browsers. It seems that a not insignificant number of people, especially technically-minded people (my kind of audience) run their browsers without JavaScript by default, only turning it back on for specific sites that they need access to, and I don't want to give those people a bad experience. To remove the dependency on JavaScript I had to rework the tags page, so that now I build a separate static tags page for every tag used across the blog. Less elegant, but more accessible.

# Hosting

I host the site on GitHub Pages. The beauty of this (apart from the fact that it's free hosting) is that you can configure GitHub Pages to deploy a site straight from the **/docs** directory, which is why that's what I called my output directory. This means that in practice all I have to do is run `npm run build` to build the site, commit the changes, push to master and my site will auto deploy. Pretty sweet. I've pointed my custom domain to GitHub Pages (a simple task through my domain registrar) and there you have it, job done.

To be continued.