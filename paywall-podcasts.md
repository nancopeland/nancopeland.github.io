---
layout: post-layout.njk
tags: 
title: User testing&#58; paywall podcasts
description: tk tk tk
nicedate: November 02, 2020
---
# {{ title }}
<p class="date">{{ nicedate }}</p>

## History

Over the past year, I've been working on the Slate paywall (see other post on [the checkout experience](/paywall-checkout)). An important part of the paywall project is redesigning the account management experience which includes member podcast feeds, one of the core benefits of Slate Plus, Slate's membership program.

The member podcast feed experience has been something I've been working on for most of my time at Slate. My first project at Slate was [improving podcasts on the site](/slate-podcasts) and I have also contributed UX and branding work to [Supporting Cast](https://www.supportingcast.fm/?utm_source=slate&utm_medium=web&utm_campaign=slateplusux) so with the paywall, I wanted to combine all the research I've done on this topic to make it a great experience for Slate Plus's members. 

## Slate Plus & Supporting Cast 

Slate was one of the first media sites to offer private podcasts as a motivator to join Slate Plus but the experience of loading a private feed into the feed of your choice has always been manual and complicated. Users had to copy a feed link and load it into their player but each player had a different way to do this and some players don't support private feeds. 

![manual feed form for Slate Plus members](/img/paywall_podcasts/manual_feed_loading.gif)
<span class="caption">Manual feed form</span>

Because of the success of Slate Plus, Supporting Cast was created to help other podcasters start membership services. The biggest difference between Supporting Cast and Slate Plus is that the Supporting Cast podcast feed onboarding is much more user-friendly than the copy and paste method.  

<div class="mobile-img">
	<img src="/img/paywall_podcasts/onboarding_demo_double_shift.gif" alt="temporary Supporting Cast experience on Slate.com" />
	<span class="caption"><a href="https://doubleshift.supportingcast.fm/">The Double Shift</a>'s podcast onboarding experience using Supporting Cast and Apple Podcasts as the player</span> 
</div>

In mid-2020 (pre-paywall), we implemented an [interim version of the Supporting Cast experience](https://slate.com/briefing/2020/05/announcing-a-major-upgrade-to-the-slate-plus-podcast-experience.html) on Slate.com. Because the navigation on Slate's old account management system was a bit confusing, I decided to keep all the podcasts on one page. This also meant the UI had to be Slate's old branding so I knew all of this needed to be updated with the paywall rollout.  

<div class="mobile-img">
	<img src="/img/paywall_podcasts/temp_SC_experience.gif" alt="interim Supporting Cast experience on Slate.com" />
	<span class="caption">Interim Supporting Cast experience on Slate.com</span> 
</div>

With the paywall podcasts project, I wanted to slightly update the UX of the Supporting Cast experience while also seamlessly incorporating it into Slate's site, both the account management and podcast pages. 


## User testing

I did the user testing in two groups: account management and podcast pages. I wanted the experience to be consistent for both locations so I needed to figure out what worked best for both. 

### Account management

While implementing the temporary Supporting Cast experience, developer [Jonathan Zuckerman](https://twitter.com/jon47) was concerned that the Supporting Cast experience guessed your device (desktop vs. tablet vs. mobile) instead of letting the user choose (or at least switch to the right device). Although I designed the original Supporting Cast experience, I agreed. 

To combat that, my first round of user testing was seeing how people responded to two different experiences where you were allowed to switch your device. I mocked up a tabs version and a dropdown version. Each experience defaulted to the correct device (desktop computers got "I'm on a computer", mobile users got "I'm on a phone/tablet") and for tablet, I tested it defaulting to desktop for some users and mobile for other users. 

<div class="img-flex-wrapper">
	<div class="img-flex-50">
		<img alt="podcast feed experience on desktop using tabs to differentiate between screen size" src="/img/paywall_podcasts/1_tabs_desktop.png">
		<span class="caption">Tabs on desktop</span>
	</div>
	<div class="img-flex-50">
		<img alt="podcast feed experience on desktop using a dropdown to differentiate between screen size" src="/img/paywall_podcasts/1_dropdown_desktop.png">
		<span class="caption">Dropdown on desktop</span>
	</div>
</div>
<div class="img-flex-wrapper">
	<div class="img-flex-50">
		<img alt="podcast feed experience on mobile using tabs to differentiate between screen size" src="/img/paywall_podcasts/1_tabs_mobile.png">
		<span class="caption">Tabs on mobile</span>
	</div>
	<div class="img-flex-50">
		<img alt="podcast feed experience on mobile using a dropdown to differentiate between screen size" src="/img/paywall_podcasts/1_dropdown_mobile.png">
		<span class="caption">Dropdown on mobile</span>
	</div>
</div>

Overall, users understood both experiences and didn't have more trouble or success with one over the other. About 25% (5 out of 22) of users noted they were a bit overwhelmed with the number of options presented to them. From this information, I thought I'd try more testing and tweaking a bit of the language while also keeping in mind that the underlying issue might be the number of options. 

For the next round, I decided to test the interim experience vs. the tabs experience to see if people were overwhelmed by the number of options in both experiences. Because users found both tabs and dropdowns equally usable, I chose tabs because I like to show all options available, if possible.

<div class="img-flex-wrapper">
	<div class="img-flex-50">
		<img src="/img/paywall_podcasts/temp_SC_experience.gif" alt="interim Supporting Cast experience on Slate.com" />
		<span class="caption">Interim Supporting Cast experience on Slate.com</span> 
	</div>
	<div class="img-flex-50">
		<img alt="podcast feed experience on mobile using tabs to differentiate between screen size" src="/img/paywall_podcasts/1_tabs_mobile.png">
		<span class="caption">New experience with tabs</span>
	</div>
</div>

75% of users noted that they preferred the new experience over the old so I thought it was fine to see how this experience held up on podcast pages. 

### Podcast pages

For the first test on podcast pages, I decided to just put the tabs unit from the previous tests on the podcast show page (designed [here](/slate-podcasts)) and see what people thought about it. 

![new podcast feed experience on podcast show page](/img/paywall_podcasts/3_tabs_show_page.png)
<span class="caption">New podcast feed experience on <a href="https://slate.com/podcasts/decoder-ring">Decoder Ring</a> show page</span>

## Decision



Thank you to product managers [Heidi Strom-Moon](https://twitter.com/heidimoon) and [Chris Schieffer](https://twitter.com/cschieffer) who reviewed the many rounds of testing! 
