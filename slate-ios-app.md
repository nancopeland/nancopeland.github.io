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
- 5 out of 10 users said the menu could use better content organization 
- 7 out of 10 users said the menu is simple and easy to use
- 2 out of 10 users were very passionate about adding search to the app (it exists but is difficult to find) and making it work
- 3 out of 10 users mentioned how they like the “save” feature

**Podcasts**
- 8 out of 10 users were confused by the headphones icon (the headphones icon is how you get to the Podcasts section), some users thought this icon was for accessibility 
- Most of these users looked in the regular menu first for “Podcasts” 
- Half of the users thought the podcasts page should land on “Shows” first instead of “Latest” 
- 3 out of 10 users said linking from Slate’s app to the show in podcast apps would be helpful

**Slate Plus**
- 7 out of 10 users said their benefits (ad-free podcasts, ad-free reading experience in the app) are not clear from the current UX of the app
- Some users noted that the Slate Plus landing page experience (the landing page pops up after clicking into a Slate Plus article) has the info they expected but they didn’t expect it in that location in the app
- Many users were expecting a sort of landing page on the “Slate Plus” page instead of a stream of content
- 4 out of 10 users had a hard time finding “Slate Plus” in the menu: a few users scrolled past the “Slate Plus” page and looked at the FAQs page for Slate Plus info

## Wireframes and mocks

From the above findings, I decided on the following features & recommendations for the redesign: 

**App Home**
- This is the most-used page for current users
- Users use this page ("most recent" feed) the most but were expecting something "more curated" so I think the home screen should pull in the hierarchy and editorially-picked stories from slate.com
- Keep the swiping feature because it seems well-liked
- It should be easy to navigate to a “Most Recent” (because people use it so much currently) but the homepage is separate

<div class="img-flex-wrapper">
	<div class="img-flex-33">
		<img alt="App homepage with top stories vs. recent filter and search in top right" src="/img/slate_ios_app/home_wireframe_1.png">
		<span class="caption">App homepage with "top stories" vs. "recent" filter and search in top right</span>
	</div>
	<div class="img-flex-33">
		<img alt="App homepage with bottom nav and Slate Plus promo across the top" src="/img/slate_ios_app/home_wireframe_2.png">
		<span class="caption">App homepage with bottom nav and Slate Plus promo across the top</span>
	</div>
	<div class="img-flex-33">
		<img alt="App homepage with bottom nav, notable links from slate.com and 'customize' link for customizing the homepage" src="/img/slate_ios_app/home_wireframe_3.png">
		<span class="caption">App homepage with bottom nav, notable links from slate.com and "customize" link for customizing the homepage</span>
	</div>
</div>

**Navigation**
- Navigation should stay simple but have better organization, especially regarding rubrics’ relation to their section
- Different content types in the app that should be reflected in the navigation: Articles (Home, Most Recent/Most Popular/Saved, Section/Rubric content), Podcasts, Slate Plus/Account Info, Support
- Fix search function and make it more prominent 

<div class="img-flex-wrapper">
	<div class="img-flex-33">
		<img alt="Nav with 'podcasts' in 'main sections'" src="/img/slate_ios_app/nav_wireframe_1.png">
		<span class="caption">Nav with "podcasts" in "main sections"</span>
	</div>
	<div class="img-flex-33">
		<img alt="Nav with search at the top and 'podcasts' in 'feeds' section" src="/img/slate_ios_app/nav_wireframe_2.png">
		<span class="caption">Nav with search at the top and "podcasts" in "feeds" section</span>
	</div>
	<div class="img-flex-33">
		<img alt="App homepage with bottom nav and Slate Plus promo across the top" src="/img/slate_ios_app/home_wireframe_2.png">
		<span class="caption">App homepage with bottom nav and Slate Plus promo across the top</span>
	</div>
</div>

**Podcasts**
- Podcasts should be easier to find, that ideally would be solved by updating how the navigation works (see above) 
- Half the users expected "Podcasts" to land on "Shows" instead of "Latest Episodes" but this means half of them thought the opposite...maybe try this page defauting to "Shows" because that is how [slate.com/podcasts](https://slate.com/podcasts) works but this isn't necessary
- Episode feeds should have the ad-free versions if the person is a Slate Plus member
- Episode pages should link to podcast apps

[podcast wireframes]

**Slate Plus**
- Create Slate Plus landing page in the app: this page would explain the benefits of Slate Plus and provide price info and the option to sign up from this page
- If you are already a member, you would just have an account info page where you could get your podcast feed, etc 
- I think there shouldn’t be a Slate Plus feed page w/ Slate Plus bonus content, bonus content should just be indicated throughout the app w/ a Slate Plus logo (like it is on the website) 

[s+ wireframes]

## User Testing 

Once I had a solid prototype, I decided I should talk to users again. I already knew users' problems with the old app so I decided to just give users the new prototype and ask them to do a few general tasks: 

1. Can you find the article ["How Meet Cutes Have Changed in the 21st Century" by Heather Schwedel](https://slate.com/human-interest/2019/07/how-couples-meet-now-versus-earlier-eras.html)? 
2. Can you find the "News & Politics" section? 
3. How would you find the latest episode of [What Next](https://slate.com/podcasts/what-next)? 
4. How would you join Slate Plus?

[prototype](https://invis.io/W6T11A259RX#/374314337_homepage)
[gif of prototype]

## Decision




Thank you to product manager [Chris Schieffer](https://twitter.com/cschieffer) who reviewed the many rounds of testing. 
