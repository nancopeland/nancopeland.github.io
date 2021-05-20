---
layout: post-layout.njk
tags: slate
title: News quiz
nicedate: May 20, 2021
---
# {{ title }}
<p class="date">{{ nicedate }}</p>

## History

[Chris Schieffer](https://twitter.com/cschieffer) and I decided to update the [Slate news quiz](https://slate.com/news-and-politics/the-slate-quiz) because it was one of the last features that hadn't be redesigned to fit [Slate's new brand](https://slate.com/briefing/2018/01/jason-santa-maria-on-how-slate-redesigned-the-way-we-work.html). The quiz had been built at least 8 years prior so the interface was outdated and, according to the dev team, the scoring was not secure making it very easy to cheat. 

![old news quiz](/img/news_quiz/old_quiz_desktop.gif)
<span class="caption">Old news quiz design for the <a href="https://slate.com/news-and-politics/2021/05/slate-news-quiz-israeli-palestinian-conflict-liz-cheney-golden-globes.html">week of May 14, 2021</a></span>

![old news quiz leaderboard](/img/news_quiz/old_quiz_leaderboard.gif)
<span class="caption">Old news quiz leaderboard</span>

After meeting with the editorial, product and dev teams, Chris and I decided on this list of features for the MVP and post-MVP: 

### MVP

**Features to keep:** 

- Basics
    - Date
    - Question
    - Answer choices (4)
    - Timer/countdown
    - Score
- "Play against a Slatester"
- Leaderboard
	- Show your score vs. the average vs. Slatester 
    - Show top scores for Plus members and Slatesters
- Way to review your answers

**Features to disregard:** 

- Coin counter as the score

### Post-MVP

- Account registration to take quiz
- Update quiz builder
- Non-news quiz > how is this built differently from a news quiz? 
    - Will there be a timer for non-news quizzes?
    - Leaderboard should be able to be turned off based on "quiz type"
- Show percentage of readers that got each question correct

### CMS 

The old quiz was built with a custom quiz builder and placed in a regular Slate article template via a [Clay](https://clay.nymag.com/) <code class="language-html">iframe</code> component. I, like most people, am not a fan of <code class="language-html">iframe</code>s because they make the experience feel unnatural so I wanted to convert the quiz to its own Clay component(s). The dev team overruled me on this because updating the quiz builder would be very difficult but assured me we could improve the <code class="language-html">iframe</code> experience. This was important to know up front bc I needed to design for two different implementations: 

- Clay template - are we using the regular article template or a new "quiz" template?
- <code class="language-html">iframe</code> - how the questions and leaderboard are added to the page


## Wireframes

I started by laying out the current user journey of the news quiz to make sure I designed for all the various states. 

![quiz user journey](/img/news_quiz/quiz_user_flow.jpg)
<span class="caption">User journey</span>

The first thing I knew I wanted to change about the old design was the powerpoint "slide" layout. Why hide the questions with a slide when they could build down the page for easier review at the end? I also knew I wanted to orient the questions on top of the answers (instead of side-by-side) because that is a more natural orientation for mobile scrolling. 

<div class="img-flex-wrapper">
	<div class="img-flex-50">
		<img src="/img/news_quiz/questions_1.png" alt="Wireframe idea that shows the timer and score in the top right and a preview of the next question greyed out below" />
		<span class="caption">Wireframe idea that shows the timer and score in the top right and a preview of the next question greyed out below</span> 
	</div>
	<div class="img-flex-50">
		<img src="/img/news_quiz/questions_2.png" alt="Wireframe idea that shows the correct answer, the timer and score in the bottom right and a preview of the next question greyed out below" />
		<span class="caption">Wireframe idea that shows the correct answer, the timer and score in the bottom right and a preview of the next question greyed out below</span>
	</div>
</div>

I thought the transition between questions could be similar to the [Typeform](https://www.typeform.com/) forms minus the difficult scrolling back up to see previous questions. 

![Typeform demo](/img/news_quiz/typeform_demo.gif)
<span class="caption">Typeform demo</span>

For the "end of quiz" experience, I knew I wanted to orient the score comparison chart horizontally (again, better for mobile). For the leaderboard in the old experience, you had to be a [Slate Plus](https://slate.com/plus) member to be on the leaderboard and to see the "Slatester" scores but anyone could see the Slate Plus member scores. This was a bit confusing so I thought I'd just make it so you have to be a Slate Plus member to see the whole leaderboard. 

<div class="img-flex-wrapper">
	<div class="img-flex-50">
		<img src="/img/news_quiz/leaderboard_1.png" alt="Leaderboard being blocked by a prompt to sign up for Slate Plus" />
		<span class="caption">Leaderboard being blocked by a prompt to sign up for Slate Plus</span> 
	</div>
	<div class="img-flex-50">
		<img src="/img/news_quiz/leaderboard_2.png" alt="Leaderboard visible because user is a Slate Plus member" />
		<span class="caption">Leaderboard visible because user is a Slate Plus member</span>
	</div>
</div>


## User Testing

Once I decided on a wireframe and general experience, I thought it would be best to user test it before getting too far along. I thought the quickest way to test this in person would be to talk to internal Slate coworkers. I showed them the old quiz experience vs. the new quiz experience and asked them to compare. 

<div class="img-flex-wrapper">
	<div class="img-flex-50">
		<img src="/img/news_quiz/old_quiz_desktop.gif" alt="Old news quiz experience" />
		<span class="caption">Old news quiz experience</span> 
	</div>
	<div class="img-flex-50">
		<img src="/img/news_quiz/new_news_quiz_experience.gif" alt="New news quiz experience" />
		<span class="caption">New news quiz experience</span>
	</div>
</div>

Users liked the new experience but missed the Slate-y whimsical design of the old experience. Users also indicated that the timer and score were a bit confusing, probably because of the removal of coins in the new design.

While the experience I showed users in this round of testing was a wireframe, I thought I should meet with Slate's art team to see if they had any suggestions on how to make the experince more whimsical. [Natalie Matthews-Ramo](https://twitter.com/MatthewsRamo) suggested making the whole news quiz page feel more "special" with a banner at the top and generally adding more color to the page. She also suggested adding a circular timer that is only visible when the user is being timed. 

<div class="img-flex-wrapper">
	<div class="img-flex-33">
		<img src="/img/news_quiz/NMR_1.png" alt="Beginning of quiz with banner at the top" />
		<span class="caption">Beginning of quiz with banner at the top</span> 
	</div>
	<div class="img-flex-33">
		<img src="/img/news_quiz/NMR_2.png" alt="Question layout with timer counting down" />
		<span class="caption">Question layout with timer counting down</span>
	</div>
	<div class="img-flex-33">
		<img src="/img/news_quiz/NMR_3.png" alt="End of quiz chart comparing scores" />
		<span class="caption">End of quiz chart comparing scores</span>
	</div>
</div>

I knew that adding the top banner would be a template change and not easy to do for user testing but I could incorporate the timer and some of the smaller design elements for the next round of testing. 

For the next round of testing, I decided to test Slate readers who are frequent Slate News Quiz takers. Because these users were so familiar with the old news quiz experience, I decided to just show them the new experience and refer to the old one if necessary for comparison. 

![new experience with design updates](/img/news_quiz/new_news_quiz_experience_v2.gif)
<span class="caption">New experience with design updates</span>

Users missed the old experience but didn't think the new experience was difficult to understand so I proceeded with building this experience in a new template. 


## Final result

Editorial, product, dev, art and I all decided the new experience in a new template was a great idea. It was easier to use than the old quiz experience but still felt special and differentiated from a regular Slate article. But, I wanted to user test it one more time to make sure users wouldn't have trouble when it was finally launched. 

![New experience in new template on desktop](/img/news_quiz/new_news_quiz_experience_v3.gif)
<span class="caption">New experience in new template on desktop</span>

<div class="img-flex-wrapper">
	<div class="img-flex-50">
		<img src="/img/news_quiz/new_news_quiz_experience_v3_mobile.gif" alt="New experience in new template on mobile" />
		<span class="caption">New experience in new template on mobile</span> 
	</div>
	<div class="img-flex-50">
		<img src="/img/news_quiz/leaderboard_v3.png" alt="New leaderboard experience" />
		<span class="caption">New leaderboard experience</span>
	</div>
</div>

When user testing this, I noticed a few issues with ads that we needed to tweak for this template and also that the "start quiz" button and the share buttons were similar in size. To fix that, I updated the look of the share buttons to look more like secondary links. 

![New template with updated share buttons](/img/news_quiz/share_buttons.png)
<span class="caption">New template with updated share buttons</span>

This project has not gone live yet but when it does, it will be at [slate.com/news-and-politics/the-slate-quiz](https://slate.com/news-and-politics/the-slate-quiz).

I worked on this project with many people: Product management was led by [Chris Schieffer](https://twitter.com/cschieffer). [Megan Wiegand](https://twitter.com/mwieg) and [Abby McIntyre](https://twitter.com/abbjmc) provided lots of valuable editorial and CMS feedback. Development work was led by [Jonathan Zuckerman](https://github.com/macgyver) and [Iván Felix](https://github.com/ivanfex). [Natalie Matthews-Ramo](https://twitter.com/MatthewsRamo) provided me with great visual feedback and edits to make the whole experience feel more Slate-y. 


