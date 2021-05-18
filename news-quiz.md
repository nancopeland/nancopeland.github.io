---
layout: post-layout.njk
tags: slate
title: News quiz
nicedate: May 18, 2021
---
# {{ title }}
<p class="date">{{ nicedate }}</p>

## History

[Chris Schieffer](https://twitter.com/cschieffer) and I decided to update the [Slate news quiz](https://slate.com/news-and-politics/the-slate-quiz) because it was one of the last features that hadn't be redesigned to fit [Slate's new style](https://slate.com/briefing/2018/01/jason-santa-maria-on-how-slate-redesigned-the-way-we-work.html). The quiz had been built at least 8 years prior so the interface was outdated and the scoring was not secure, according to the dev team. 

![old news quiz](/img/news_quiz/old_quiz_desktop.gif)
<span class="caption">Old news quiz design for the <a href="https://slate.com/news-and-politics/2021/05/slate-news-quiz-israeli-palestinian-conflict-liz-cheney-golden-globes.html">week of May 14, 2021</a></span>

![old news quiz leaderboard](/img/news_quiz/old_quiz_leaderboard.gif)
<span class="caption">Old news quiz leaderboard</span>

After meeting with the editorial, product and dev teams, Chris and I decided on this list of features for the MVP and post-MVP: 

### MVP

**Features to keep:** 

- Quiz basics
    - Date
    - Question
    - Answer choices (4)
    - Timer/countdown
    - Score
- Play against a Slatester
- Leaderboard
    - Should be able to toggle between Plus Members and Slatesters (including state where you are not signed in to Plus)
    - Show your score against the average and Slatester you played against at the end
- Way to review your answers

**Features to disregard:** 

- Coin counter/coins as the score

### Post-MVP

- Account registration to take quiz
- Update quiz builder
- Non-news quiz > how is this built differently from a news quiz? 
    - Will there be a timer for non-news quizzes?
    - Leaderboard should be able to be turned off based on "quiz type"
- Show percentage of readers that got each question correct


Also, the way the old quiz worked was that it was an <code class="language-html">iframe</code> placed in a regular Slate article template. I wanted to convert the quiz to its own Clay components because, in my opinion, <code class="language-html">iframe</code>s more than likely ruin the experience. The dev team overruled me on this because updating the quiz builder would be very difficult but assured me we could improve the <code class="language-html">iframe</code> experience. 


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

For the "end of quiz" experience, I knew I wanted to orient the score comparison chart horizontally (again, better for mobile). For the leaderboard, you had to be a [Slate Plus](https://slate.com/plus) member to be on the leaderboard and to see the "Slatester" scores but anyone could see the Slate Plus member scores. This is a bit confusing so I thought I'd just make it so you have to be a Slate Plus member to see the whole leaderboard. 

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


## User Testing/ edits

Describe user testing and what changed, working w/ dev & art team



## Final result

