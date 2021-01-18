---
layout: post-layout.njk
tags: slate
title: iOS app concept
nicedate: November 23, 2019
---
# {{ title }}
<p class="date">{{ nicedate }}</p>

## History

The overall goals of the project: 

1. Improve the Slate Plus experience: landing page and letting a user know they are logged in as a Slate Plus member.
2. Improve podcast experience: are we presenting metadata in the best way, what updates should we be making so the app is update to date with [podcasts on the website](/slate-podcasts)
3. Review app navigation and menu: are we surfacing the most important sections of the app in the easiest way we can? 
4. Update style/brand of app to fit with [redesign](https://slate.com/briefing/2018/01/jason-santa-maria-on-how-slate-redesigned-the-way-we-work.html)


## Research

I started off the project by sitting down with some users to figure out how they use the app and what they would like to see in a redesign. I knew I wanted to talk to users in person (vs. using [UserTesting.com](https://www.usertesting.com/)) and I thought I could talk to both frequent users of the app and new users. 

I talked to 5 frequent users and 5 new users and I wrote slightly different sets of questions for each (frequent users were asked about how they use use the app each day, new users were not). Both sets of questions asked users to go thru specific parts of the app: app home, navigation/menu, podcasts and Slate Plus. 

<div class="mobile-img">
	<img src="/img/slate_ios_app/old_app.gif" alt="old app experience" />
	<span class="caption">Old app experience</span> 
</div>
<div class="img-flex-wrapper">
	<div class="img-flex-50">
		<img alt="Slate Plus landing page in iOS app" src="/img/slate_ios_app/s+_screen.png">
		<span class="caption">Slate Plus "landing page" in iOS app</span>
	</div>
	<div class="img-flex-50">
		<img alt="Latest podcast episodes in iOS app" src="/img/slate_ios_app/podcasts.png">
		<span class="caption">Latest podcast episodes in iOS app</span>
	</div>
</div>


Overall, I learned that Slate iOS users opened the app because they want to read the latest Slate news (some users also open it to read the most popular or their "saved" stories) and they want to be able to navigate to said news easily. But, users had difficulty understanding and signing up for Slate Plus as well navigating to and accessing podcasts. Specifically, I learned: 

**Current Users** 
- All previous users of the app use the “most recent” feed the most in the app
- 3 out of the 5 current users never use the menu (other than maybe “popular” or “saved) or podcasts in the app

**App Home**
- 7 out of 10 users were expecting something more curated that tells the reader what to read (like a homepage)
- The amount of space each story takes up is contested, some people find it scannable but some people find it too large
- 3 users use the swiping between stories/sections feature

**Navigation**
- 5 users said the menu could use better content organization 
- 7 users said the menu is simple and easy to use
- 2 users were very passionate about adding search to the app (it exists but is difficult to find) and making it work
- 3 users mentioned how they like the “save” feature

**Podcasts**
- 8 users were confused by the headphones icon (the headphones icon is how you get to the Podcasts section), some users thought this icon was for accessibility 
- Most of these users looked in the regular menu first for “Podcasts” 
- 5 users thought the podcasts page should land on “Shows” first instead of “Latest” 
- 3 users said linking from Slate’s app to the show in podcast apps would be helpful

**Slate Plus**
- 7 users said their benefits (ad-free podcasts, ad-free reading experience in the app) are not clear from the current UX of the app
- Some users noted that the Slate Plus landing page experience (the landing page pops up after clicking into a Slate Plus article) has the info they expected but they didn’t expect it in that location in the app
- Many users were expecting a sort of landing page on the “Slate Plus” page instead of a stream of content
- 4 users had a hard time finding “Slate Plus” in the menu: a few users scrolled past the “Slate Plus” page and looked at the Slate Plus FAQs page for Slate Plus info

From the above findings, I decided on the following features & recommendations for the redesign: 

**Homepage vs. Recent Feed**
- The home screen should pull in the hierarchy from slate.com (shouldn't look like a regular feed in the app) but the same amount of info for each story that is currently displayed in the feeds in the app
- Keep the swiping feature because it seems well-liked
- It should be easy to navigate to a “Most Recent” (and “Most Popular” feed) but the homepage is separate

**Navigation**
- Navigation should stay simple but have better organization, especially regarding rubrics’ relation to their section 
- Different content types in the app that should be reflected in the navigation: Articles (Home, Most Recent / Most Pop / Saved, Section/Rubric content), Podcasts, Slate Plus / Account Info, Support
- Fix search function and make it more prominent 

**Podcasts**
- Podcasts should be easier to find, that ideally would be solved by updating how the navigation works (see above) 
- When someone clicks podcasts, the first option should be choosing a show, not one of the latest episodes
- Episode feeds should have the ad-free versions if the person is a Slate Plus member
- Episodes should link to podcast apps

**Slate Plus**
- Create Slate Plus landing page in the app: this page would explain the benefits of Slate Plus and provide price info and the option to sign up from this page
- If you are already a member, you would just have an account info page where you could get your podcast feed, etc 
- I think there shouldn’t be a Slate Plus page w/ Slate Plus bonus content, bonus content should just be indicated throughout the app w/ a Slate Plus logo (like it is on the website) 

## Wireframes and mocks

## User Testing 

## Decision




Thank you to product manager [Chris Schieffer](https://twitter.com/cschieffer) who reviewed the many rounds of testing. 
