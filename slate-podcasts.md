---
layout: post-layout.njk
tags: slate
title: Podcast experience redesign
nicedate: January 13, 2019
---
# {{ title }}
<p class="date">{{ nicedate }}</p>

I updated the [Slate podcasts process](https://slate.com/podcasts) to make it easier for users to explore Slate's shows, find what they're looking for and subscribe. The design was updated to fit the [new Slate brand launched in 2018](https://slate.com/briefing/2018/01/jason-santa-maria-on-how-slate-redesigned-the-way-we-work.html). 

![podcasts homepage](/img/slate_podcasts/lp_scroll.gif)
<span class="caption">Finished [slate.com/podcasts](https://slate.com/podcasts) page</span>

## Background

The podcast redesign process followed [Slate's site redesign](https://slate.com/briefing/2018/01/why-we-redesigned-slate.html) where Slate updated their [design process](https://slate.com/briefing/2018/01/jason-santa-maria-on-how-slate-redesigned-the-way-we-work.html) and [CMS](https://slate.com/briefing/2018/01/slates-new-cms.html). Slate's articles were prioritized during this process so when I started as a designer, podcast publishing was still done using the old CMS. 

When the old site was built, podcasts weren't as high of a priority for Slate so the old podcasts landing page was just a "podcasts" tag page that featured the latest podcast episodes in reverse chronological order. 

![screenshot of old podcasts page](/img/slate_podcasts/old_landing_page.png)
<span class="caption">Old Slate podcasts landing page</span>

After we started working on the new podcast templates, a temporary page was put in place that functioned the same as the old one but publishing was in the new CMS. 

![temporary podcasts page](/img/slate_podcasts/temp_landing_page.png)
<span class="caption">Temporary Slate podcasts landing page in new CMS</span>

While both of these pages did display the latest podcasts published by Slate, they didn't offer information on each show nor were they set up to encourage users to subscribe to podcasts in their players.

## Planning

Product Manager [Chris Schieffer](https://twitter.com/cschieffer) conducted extensive interviews with various Slate people to see what they wanted out of the new podcast pages. He decided there would be three pages and came up with the following priorities and features for each page:

Landing Page: 
- Understanding the breadth of the podcasts Slate is making
- Listen to a trailer
- Subscribe
- Slate Plus pitch

Show Page: 
- Learn about the show
- Listen to a trailer
- Subscribe
- Slate Plus pitch
- Interact with episodes inside of show
- Social links, newsletter sign up, link to discussion group

Episode Page: 
- Learn about the episode
- Listen to the episode
- Subscribe
- Slate Plus pitch
- Recirculation (text and audio via topic)
- Social links, newsletter sign up, link to discussion group

## Design Process

After carefully reviewing Chris's notes on the project, I started on some very basic wireframes. 

Based on the notes, I figured the landing page should focus on featuring Slate's shows, specifically the ones currently in production. 

<div class="img-flex-wrapper">
	<div class="img-flex-33">
		<img alt="wireframe for landing page" src="/img/slate_podcasts/wireframe_lp1.jpg">
	</div>
	<div class="img-flex-33">
		<img alt="wireframe for landing page" src="/img/slate_podcasts/wireframe_lp2.jpg">
	</div>
	<div class="img-flex-33">
		<img alt="wireframe for landing page" src="/img/slate_podcasts/wireframe_lp3.jpg">
	</div>
</div>

For the show page, I focused on explaining the show concisely, including a trailer, and linking to the show in various players (since that is how most people would be listening). 

I also featured the latest episodes for each show. The one caveat here was how do we represent episodes differently for ongoing (ex. Political Gabfest) vs. seasonal (ex. Slow Burn) shows? 

<div class="img-flex-wrapper">
	<div class="img-flex-33">
		<img alt="wireframe for show page" src="/img/slate_podcasts/wireframe_show1.jpg">
	</div>
	<div class="img-flex-33">
		<img alt="wireframe for show page" src="/img/slate_podcasts/wireframe_show2.jpg">
	</div>
	<div class="img-flex-33">
		<img alt="wireframe for show page" src="/img/slate_podcasts/wireframe_show3.jpg">
	</div>
</div>

For the episode page, I focused on learning about and listening to the episode as well as, again, linking to the episode in various players.

<div class="img-flex-wrapper">
	<div class="img-flex-33">
		<img alt="wireframe for episode page" src="/img/slate_podcasts/wireframe_ep1.jpg">
	</div>
	<div class="img-flex-33">
		<img alt="wireframe for episode page" src="/img/slate_podcasts/wireframe_ep2.jpg">
	</div>
	<div class="img-flex-33">
		<img alt="wireframe for episode page" src="/img/slate_podcasts/wireframe_ep3.jpg">
	</div>
</div>

After deciding on wireframes, I needed to design the pages in a way that felt consistent with the [new site design](https://slate.com/briefing/2018/01/why-we-redesigned-slate.html) but also made sense within the podcast project. 

While designing the podcast pages, I had to consider how podcasts fit into the site's information architecture. Each podcast fits under a section (ex. [News & Politics](https://slate.com/news-and-politics), [Culture](https://slate.com/culture), etc.) so they're not on the same level as sections but they aren't exactly rubrics (ex. [Jurisprudence](https://slate.com/news-and-politics/jurisprudence), [Movies](https://slate.com/culture/movies), etc.) either. How could the design reflect this in a clearer way? 

Another thing I had to consider were components because Slate's CMS [Clay](https://clay.nymag.com/) is built with components. At first the component structure seemed limiting but I ended up really liking this setup because it reuses dev work and makes the experience consistent. 

The Slate Plus and "Need Help?" components are used on all three pages while the "How to Listen & Subscribe" component is on both the show and episode pages. 

<div class="img-flex-wrapper">
	<div class="img-flex-33">
		<img alt="mock for landing page" src="/img/slate_podcasts/mock_lp.jpg">
	</div>
	<div class="img-flex-33">
		<img alt="mock for show page" src="/img/slate_podcasts/mock_show.jpg">
	</div>
	<div class="img-flex-33">
		<img alt="mock for episode page" src="/img/slate_podcasts/mock_ep.jpg">
	</div>
</div>

One thing I realized during this process is that in addition to the three main pages, we would need an archive page. Slate has so many shows and it didn't make sense to feature old ones that are no longer in production on the landing page. 

<div class="img-flex-wrapper">
	<div class="img-flex-50">
		<img alt="archive link" src="/img/slate_podcasts/archive_link.png">
		<span class="caption">Link to archive page</span>
	</div>
	<div class="img-flex-50">
		<img alt="archive page" src="/img/slate_podcasts/archive_page.png">
		<span class="caption">Archive page</span>
	</div>
</div>

## User Testing

While making the mocks, I had a few questions about the experience that I wanted to user test: 

1. Should the shows on the landing page be structured alphabetically or by section? 
2. Do users understand how to use the "How to Listen" section on the show page? 

**For the first question**, I tested a mock with all the "featured shows" listed alphabetically vs. grouped by section. 

<div class="img-flex-wrapper">
	<div class="img-flex-50">
		<img src="/img/slate_podcasts/lp_alphabetical.jpg">
		<span class="caption">Podcasts sorted alphabetically</span>
	</div>
	<div class="img-flex-50">
		<img src="/img/slate_podcasts/lp_sections.jpg">
		<span class="caption">Podcasts sorted by section</span>
	</div>
</div>

I tested a group of Slate readers and a group of non-Slate readers. While users understood the alphabetical section they preferred the shows grouped by section because it is easier for a user to know what the show is about. If a user wanted to avoid all "News & Politics" shows, they could easily skip that section and move to the next. 

One argument in favor of the alphabetical ordering was it is better if the user knows exactly what they're looking for. But, because the point of this page is to show the breadth of Slate's offerings, we decided to go with the section grouping. 

**For the second question**, I tested the "How to Listen & Subscribe" section to see if users understood the "text me a link" form. 

The app subscribe buttons are a very common way to link to shows in podcast applications but the "text me a link" form isn't. Because most people listen to podcasts on their phones, I thought the texting feature would be helpful but I wanted to user test this to make sure. Does the text form help or confuse the user? 

<div class="img-flex-wrapper">
	<div class="img-flex-50">
		<img src="/img/slate_podcasts/how_to_full.png">
		<span class="caption">Section with both the texting form and app subscribe buttons</span>
	</div>
	<div class="img-flex-50">
		<img class="p-img" src="/img/slate_podcasts/how_to_buttons.png">
		<span class="caption">Section with just app subscribe buttons</span>
	</div>
</div>

While most users were more likely to use the app buttons to subscribe (or even just going to the app and searching for the podcast), they liked the option to text. So, we kept the version with the text form. 

In the end, the texting feature was tabled so we could get the MVP out but hopefully it will be added in the near future. 

## Podcasts across the site

Another thing we had to consider with this project is how podcasts are displayed across the site. Podcasts are often included in article lists but we received many complaints about how there was no indication for which list items were articles and which list items were podcasts. 

I tried a few different mocks but was leaning towards the designs that were the least invasive because this design needed to work in all units on the [homepage](https://slate.com/) as well as on [list pages](https://slate.com/culture). I decided I would user test three slightly different variations: headphones icon before the title, "Podcast:" in front of the title and headphones icon after the title. 

<div class="img-flex-wrapper">
	<div class="img-flex-33">
		<img alt="headphones before" src="/img/slate_podcasts/headphones_before.png">
		<span class="caption">Headphones icon before title</span>
	</div>
	<div class="img-flex-33">
		<img alt="'podcasts:' before" src="/img/slate_podcasts/podcasts_before.png">
		<span class="caption">"Podcasts:" before title</span>
	</div>
	<div class="img-flex-33">
		<img alt="headphones after" src="/img/slate_podcasts/headphones_after.png">
		<span class="caption">Headphones icon after title</span>
	</div>
</div>

Users definitely preferred the headphones icon and there was a slight preference for the icon before the title. I also liked that mock most so I went with that one. The icon I used in testing was done quickly and I updated it with an icon drawn by [Lisa Larson-Walker](https://twitter.com/lrsnwlkr) that was much more consistent with Slate's brand. 

![Headphones icon on the homepage in the "Culture" section](/img/slate_podcasts/icon_hp1.png)
<span class="caption">Headphones icon on the homepage in the "Culture" section</span>

![Headphones icon on the homepage in the "Most Recent" section](/img/slate_podcasts/icon_hp2.png)
<span class="caption">Headphones icon on the homepage in the "Most Recent" section</span>

![Headphones icon in a list on the "Culture" page](/img/slate_podcasts/icon_list.png)
<span class="caption">Headphones icon in a list on the "Culture" page</span>

## Implementation

See this project live at [slate.com/podcasts](https://slate.com/podcasts). 

I worked on this project with many people. Product management was led by [Chris Schieffer](https://twitter.com/cschieffer) and design was led by [Jason Santa Maria](https://twitter.com/jasonsantamaria). Development work was completed by [Jonathan Zuckerman](https://twitter.com/jon47), [Kim Le](https://twitter.com/meijiOrO/), [Chase Felker](https://github.com/felkerch), [Salomone Baquis](https://twitter.com/soluhmin) and [Greg Lavallee](https://twitter.com/elgreg)}. The podcast tile art featured throughout was done by [Lisa Larson-Walker](https://twitter.com/lrsnwlkr) and the art on the landing page and in the Slate Plus component was done by [Natalie Matthews-Ramo](https://twitter.com/MatthewsRamo). 