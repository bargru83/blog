{
  "title": "Makers academy remote - final project day 10",
  "date": "2016-03-30",
  "tags": "['web development', 'makers academy']",
  "draft": "false"
}
---ENDFRONTMATTER---
![Makers Academy remote final project day 10](media/makers-academy-remote-final-project-day-10-header.png "Makers Academy remote final project day 10")

After a long night spent trying to get Roadtripper working properly on Heroku, in typical fashion we fixed the issue very quickly this morning. It seems that it really is a good idea to sleep on a problem and then approach it the next morning with a clear mind.

# Heroku problems

The cause of the problem, which was difficult to track, was the fact that we were mistakenly calling the Google API twice when initialising the map, causing all sorts of errors. This mistake can probably be partly attributed to the fact that we're not very familiar with JavaScript, which the Google API uses, and also the fact that we relied on several online tutorials and sources of documentation when constructing our solution, and somehow implemented the same functionality twice in different ways. With both initialisations of Google maps being structured differently it wasn't immediately clear to us that we were performing the same task twice, at least not last night when we were tired and overworked. After fixing this problem I'm pleased to report that Roadtripper now functions on Heroku just as well as it does locally. As a worst case scenario we could have demonstrated our site on a local installation and ignored these deployment troubles, but it wouldn't feel like a complete solution if the audience we demonstrate it to couldn't immediately go online and begin to use it for themselves.

# Back to the front end

For much of the early afternoon I worked on implementing the new front end style taken from the latest series of mockups. I began by implementing a front end framework called Bootstrap, and then arranging the HTML structure whilst simultaneously writing the CSS, so that the site was effectively being rendered in stages from the top down. When our coach Sam dropped in to our group meeting for a catch up he suggested that I should actually focus only on the HTML first, leaving the CSS for later, and of course he was right, but my way was working so for the sake of keeping momentum I continued as I had been.

# Bye bye laptop

While I was working on the front end implementation the other two members of my group were very productive and managed to clean up our test suite substantially. However, after working on the front end for the morning I then had a very unproductive afternoon, because my poor little overworked laptop died. It's been a longstanding joke within our cohort that the Makers Academy course kills laptops, because they're so heavily used, and as we've progressed through the course more obscure problems have began manifesting themselves. Joking aside this might be a very real problem, my own laptop for example has been running for around sixteen hours per day, seven days a week for almost three months now. For the past few days my laptop has started exhibiting some weird behaviours, and this afternoon it finally died. Before attending Makers Academy I used a desktop Mac Mini, and I bought a cheap used MacBook Pro purely to use on the course, so that I wouldn't be shackled to my desk the entire time. Typically I then sold the Mac Mini, so when my laptop died today I had no backup machine available, and an already short staffed final project group who were keen for me to get back to work as soon as possible.

Without adequate time to look into fixing my laptop, the best solution I could see was to dash to the nearest Apple store to buy a new one. I knew that I'd need a new laptop relatively soon as my ageing one has struggled throughout the entire course due to its modest specs, but having the situation thrust upon me was a nuisance that my group could have done without.

I now have my new laptop sat in front of me (a MacBook Pro Retina 15 inch, it's beautiful), and the unenviable task of staying up until the early hours to set up my coding environment, so that I can make up for lost time first thing tomorrow.