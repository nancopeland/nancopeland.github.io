---
layout: post-layout.njk
tags: slate
title: User testing&#58; paywall checkout
description: tk tk tk
nicedate: November 02, 2020
---
# {{ title }}
<p class="date">{{ nicedate }}</p>

## Brief history

Over the past year, I've been working on the Slate paywall. After initially meeting with [Heidi Strom Moon](https://twitter.com/heidimoon), the product manager for the paywall, I broke out the project into three groups: site prompts, landing page & checkout process and account management.  

Before mocking, I checked out a few other sites. All sites started with an "offer" landing page and then I was asked for my account and payment information. Some sites had the account and payment forms on the same page as the landing page and some sites took you to a different page. I mocked up these two flows for Slate but wasn't sure which one would make for a better user experience so I decided to do a few rounds of user testing.

## User testing

Over the course of designing this flow, I did many rounds of user testing to get the checkout process optimized for Slate's readers:

### 1. [1-page](https://projects.invisionapp.com/share/W5US9YA4QNY#/screens/392870677_1_page_-_1) vs. [3-page](https://projects.invisionapp.com/share/W5US9YA4QNY#/screens/392875148_3_page_-_1) experience

For the first test, I tested a 1-page checkout experience vs. a 3-page checkout experience. I screened for users that read media sites at least once per week. 

<div class="img-flex-wrapper">
	<div class="img-flex-50">
		<img alt="checkout experience that stays on 1 page" src="/img/checkout/UT1_1page.gif">
		<span class="caption"><a href="https://projects.invisionapp.com/share/W5US9YA4QNY#/screens/392870677_1_page_-_1">1-page checkout</a></span>
	</div>
	<div class="img-flex-50">
		<img alt="checkout experience that is broken up into 3 pages" src="/img/checkout/UT1_3page.gif">
		<span class="caption"><a href="https://projects.invisionapp.com/share/W5US9YA4QNY#/screens/392875148_3_page_-_1">3-page checkout</a></span>
	</div>
</div>

**Result:** Overall, users understood both processes. When I asked which experience users preferred (something I am trying to not do anymore because I don't think an experience should be dictated by preference), they preferred the 1-page experience so I decided to go with the 1-page experience. 


### 2. [Forgot password experience](https://projects.invisionapp.com/share/W5US9YA4QNY#/screens/397971678_1-Page_Steps_-_LP)

For the next test, I wanted to test switching from the account creation form to the log in form. Slate has a lot of active commenters who have accounts so I thought this might be a hurdle they'd have to figure out if they wanted to subscribe to Slate in the future. 

One issue I had with this round of testing was that Invision doesn't allow [smooth scrolling](https://www.w3schools.com/howto/howto_css_smooth_scroll.asp) transitions (which is what I had envisioned for the 1-page experience) so I couldn't mimic a coded experience as well as I had hoped.

<div class="img-flex-wrapper">
	<div class="img-flex-50">
		<img alt="log in form with forgot password link" src="/img/checkout/UT2_login_form.png">
	</div>
	<div class="img-flex-50">
		<img alt="forgot password form" src="/img/checkout/UT2_forgot_password.png">
	</div>
	<span class="caption"><a href="https://projects.invisionapp.com/share/W5US9YA4QNY#/screens/397971678_1-Page_Steps_-_LP">Forgot password experience</a></span>
</div>

**Result:** I asked users to subscribe as if they already have an account but can’t remember their password. While 2 of the 8 users couldn't find the "forgot password" link, **the users who went through the whole “forgot password”  thought it was straightforward.**


### 3. [Coded 1-page experience](https://slategroup.github.io/slate-prototypes/1-page.html)

Because of the limitations with Invision and smooth scrolling, I wanted to test a coded version of the 1-page experience, just to make sure.  

![coded 1-page checkout experience](/img/checkout/UT3_coded_1page.gif)
<span class="caption"><a href="https://slategroup.github.io/slate-prototypes/1-page.html">Coded 1-page experience</a></span>

**Result:** Users, specifically older users, had varying degrees of difficulty (8 out of 10 users) logging into their account and subscribing. Because of this, I wondered if I could **test this same flow and set of users with a coded 3-page experience and see if I got the same results.** Accounts are always difficult so I thought simplifying each step might help.


### 4. [Coded 3-page experience](https://slategroup.github.io/slate-prototypes/3-page_plans.html)
 
4 users (of 10 total) had a bit or a lot of difficulty with this task and only 2 of those users were in the “older” category. From this, I assumed the **3-page experience was easier to understand for users trying to go from the “create account” form to the “log in” form.**

[See PDF](/img/checkout/paywall_checkout_user_testing_1-5_summary.pdf) for more detail descriptions of each test and see coded prototypes [here](https://slategroup.github.io/slate-prototypes/). 

## Decision

Based on the user feedback, I decided to go with the 3-page checkout process with very clear links to “log in” and “create account” to toggle between the two forms. I think this is more easily understood by users, specifically “older” ones (which Slate has more of than “young” ones).

![paywall checkout flow](/img/paywall/paywall_checkout-demo.gif)
<span class="caption">Click thru these mocks <a href="https://www.sketch.com/s/e162d784-4d85-4826-9954-53825ad7d03e/a/mQgwPJ/play">here</a></span>
