{
  "title": "Makers academy remote - final project day 9",
  "date": "2016-03-29",
  "tags": "['web development', 'makers academy']",
  "draft": "false"
}
---ENDFRONTMATTER---
![Makers Academy remote final project day 9](media/makers-academy-remote-final-project-day-9-header.png "Makers Academy remote final project day 9")

Today we’ve made a lot of progress toward our final goal of building an MVP product. We’ve now implemented the ability to not only plot each of the stops for a road trip on to a map, but also to plan a driving route between each stop and draw that route on to the map.

# Making our map better

It took us quite a bit of work to get our driving route system to re-evaluate its route whenever a stop is added or removed, but the final effect is pretty good, and provides a much needed core feature for our project.

# Focusing on the front end

The further we’ve progressed with this project the more we’ve been considering how the finished product might look. Today I used Adobe Illustrator to produce a second series of mockups, this time with much more consideration than the first for the visual appearance of the site. The rest of the group were pleased with the mockups, although having very little front end experience were a bit concerned as to whether we could actually produce a site that resembles them in good time. Having slightly more front end experience myself I assured them that we can. No pressure then.

Interestingly the structure portrayed in both rounds of mockups has remained pretty much the same, so it seems that we haven’t drifted too far from our initial plan. After producing these new mockups, much of the day was spent tidying up the front end user experience in preparation for the front end design.

We continued to work until after midnight trying to deploy our current version of the project to Heroku, our cloud hosting service. Pushing to Heroku caused a few difficulties however, and while our app does function as expected when running in a local environment, it seems to have some problems initialising Google maps and Geocoder when running on Heroku. I’m confident we’ll fix these issues soon, but we had to finish today with the Heroku version in its broken state so that we could finally get some much needed sleep.