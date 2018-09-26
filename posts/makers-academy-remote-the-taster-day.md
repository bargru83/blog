{
  "title": "Makers academy remote - the taster day",
  "date": "2015-11-01",
  "tags": "['web development', 'makers academy']",
  "draft": "false"
}
---ENDFRONTMATTER---
![Makers Academy remote the taster day](media/makers-academy-remote-the-taster-day-header.png "Makers Academy remote the taster day")

Makers Academy has recently started offering a one day taster of its remote course, to give potential applicants an idea of what to expect. The following is an overview of how the taster day proceeded for me, but I’ve heard from others who attended tester days hosted by different members of the Makers Academy team that those days were completely different, so this post might be more entertaining the educational. Or neither!

Before the taster day I was emailed some instructions to follow, including an invite to Makers Academy’s Slack team. Slack is a place to hold text-based chat rooms with others in your team, and it served as the backbone of our taster day. All of the attendees were instructed to congregate on Slack first thing, and throughout the day it was always the place where we’d go to reconvene after our activities.

Via Slack we were instructed to install Zoom, a group video meeting service, and a meeting was started. There were around a dozen attendees, so everybody was asked to remain muted until they had something to say, otherwise the input from a dozen microphones would cause a constant background drone (there’s a mute button on the screen during the Zoom meetings, so don’t worry if like mine your headset doesn’t have a physical mute switch). During the meeting you have the choice of two different view styles: one in which you can see the person currently speaking occupy the whole screen, but I preferred the other option that displayed everybody simultaneously in a grid of small rectangles, a bit like Celebrity Squares.

# Itinerary
The itinerary for the day looked like this (although it did deviate as the day progressed):

- 10am-10.30am – Team Standup – Just like we do for Ronin(Remote)

- 10.30am-12pm – Thinking like a programmer

- 12pm-12.30pm – Watch me and Makers Academy coach Roi model how to pair well on coding challenges

- 12.30-1.30pm – Lunch Break – free to chat with other attendees and staff over lunch

- 1.30pm-2pm – Team Standup

- 2pm-4pm – Attendees will pair program on basic CodeWars challenges

# First group standup
Initially came the group standup meeting (unlike in-person standups you don’t actually have to stand up), which consisted of the coaches Dan and Roi introducing themselves, before going around each attendee in turn and having us introduce ourselves to the rest of the group.

# Thinking like a programmer
After the standup came a fun task that eased the group in to the day. This task didn’t require any coding, it was concerned with logic and how to break down everyday problems in to smaller steps, in the same way that a coder might. This saw us pairing up briefly via Google Hangouts (Makers Academy will make you aware ahead of time that you’ll need a Google Plus account in order to take part) to work through the problem together, before coming back to the main Zoom meeting to discuss our findings with the rest of the group. This part of the day was fun, and effective at highlighting the fact that even when you might think you’ve considered everything when breaking down a problem, you likely haven’t. I won’t go in to more precise detail about this task because I get the impression that it’s often used during taster days, and I don’t want to ruin the surprise. After this task Roi recommended two books to help us get in to the programmer’s mindset, <a href="https://www.goodreads.com/book/show/5859257-how-to-think-like-a-programmer" id="link">How to Think Like a Programmer: problem solving for the bewildered by Paul Vickers</a> and <a href="https://www.goodreads.com/book/show/13590009-think-like-a-programmer" id="link">Think Like a Programmer by V Anton Spraul</a>.

# How to pair code
Next we were introduced to some code in the form of watching Dan and Roi work together to solve a well known coding problem called Fizz Buzz. It was interesting to see their process, they would take it in turns to ‘drive’ and ‘navigate’, meaning that while one had control of the keyboard the other would think out loud and instruct the driver what to type, with the roles switching often.

Dan and Roi were using something called test driven development (TDD), which Makers Academy is very keen on, and while I knew of it beforehand, I only knew very little. Essentially it means that before Dan and Roi would code their solution in Ruby, they would write a test for that non-existent code using the RSpec framework, to ensure that the code will work as intended. Once the test fails, the solution can then be implemented to pass that test. After the code had passed the tests it was put though a refactoring stage if necessary, to tidy it up before moving on. When the code passes the tests you will receive a green pass message, and when the code fails you receive a red error message, which is considered useful because that will point you toward which part of your solution you need to code next to pass that test. Dan and Roi were using a system of ‘pass on red’, meaning that every time they received an error message they would switch driver and navigator roles.

# Lunch
I think Dan and Roi were having too much fun showing us how to pair code because they overran by about half an hour. After that we were given an hour for lunch, and I really didn’t want that long but I appreciate that some attendees might have. In the itinerary you’ll see where it says that participants are “free to chat with other attendees and staff over lunch”, but on the day that I attended, everybody, coaches included, went offline at lunch time and stayed offline until the afternoon session.

# Pair coding
We diverted from the itinerary after lunch and jumped straight in to some pair coding, which was very welcome because by that time I was keen to try some coding for myself. We were told to sign up to Codewars, a site that provides short coding exercises in your chosen language(s). Codewars is based around the idea of katas, short exercises used in martial arts that are repeated ad-nauseum to attain mastery. Each kata provides instruction as to what your code should do, and beside that description there’s a code box in which part of the code has already been provided, the task being to fill in the remainder to make it work. Once you think you have a complete solution there are two buttons, to either test the solution (which verifies it against an RSpec-style test) and then a submit button which submits the final answer to your account. Once you’ve submitted an answer you’re shown how other users have solved that same kata, which is really interesting because there were so many different solutions to any given problem. Some attendees already knew about Codewars and had signed up before the taster day, and it would be a time-saving to do the same because signing up involves completing a couple of coding challenges in your chosen language before your membership is activated, which can be time consuming.

As attendees were gaining access to Codewars and posting that they’d done so on Slack, the coaches were pairing us off with the instruction to join a Google Hangout with our partners. These pair Hangouts were a refreshing change of pace, it was nice to take a break from the group atmosphere and make small talk for a bit. My partner and I followed a link posted in Slack which took us to our first Codewars challenge, and then we soon became pretty confused, but not about the challenge as you might imagine. When we’d watched Dan and Roi pair coding they were sat beside one another sharing a laptop, so could effortlessly take turns to drive. As for my partner and I, we were in a Google Hangout which meant that while we could share screens, we could see no way to switch who was driving. Our setup just didn’t seem very conducive to pair coding.

We were a bit perplexed because the final instruction from our coaches was to make sure that we take it in turns to share the driving. After some head-scratching we posted the question on Slack, and Roi said not to worry too much about the logistics, and to just make sure that we communicate and work well as a pair, which is the main objective of the exercise. I have no idea what the other pairs did to resolve this, but what we did was to take it in turns to drive by alternating which one of us shared our screen with the other for each successive challenge, making sure to copy the final answer in to the Hangout chat box so that the non-driver could paste it in to their own Codewars account. Not the most elegant solution, but it worked.

It didn’t take long for me to see the benefits of pair coding. There were several times when neither I or my partner had the entire solution to any given kata, but between us we seemed to both have parts of the solution, and by using what we each knew things fell in to place quickly. I have no doubt that we’d both have managed to solve the katas alone, but by comparison it felt more productive to work together, and speaking for myself it was enjoyable having somebody to work through the problems with.

We hit a stumbling block during one of the katas when our solution passed the tests, but would not pass the submit button, which was complaining of an incorrect method name. After analysing our code and the error message we came to the conclusion that our solution was correct, and that there was actually a bug in the kata, with the test and submit buttons each expecting a different method name, so they couldn’t agree on whether our solution was correct. We hacked in a nasty fix by copying and pasting our solution's main method, renaming the duplicate so that we had two identical methods, one with each of the expected method names, and it worked.

Toward the end of the session Roi popped in to our Hangout to see how we were getting on. We mentioned that we suspected we’d found a bug with Codewars, and naturally he was intrigued. We took Roi to the kata in question and recounted our steps, and much to our relief he agreed that this was a bug. We showed Roi our hacky method of making the code pass, and he showed us a more elegant way of doing so.

# Final standup
After the pair coding we left our Hangouts and reconvened in the group Zoom meeting for the final standup. We took it in turns to each share what we felt were the most interesting things that we’d learned throughout the day, and several of us took the opportunity to thank Dan and Roi for an enjoyable experience. Once that was done the Zoom meeting was closed, and the taster day was over.

The taster day experience has left me with a clear idea of what to expect from the remote course, because I now understand in much more practical terms how the online meeting and pair coding processes work. Based upon my experience I’d definitely recommend the taster day for anybody who might be interested in applying for the remote course.