---
layout: post-layout.njk
tags: slate
title: Slate paywall
description: tk tk tk
nicedate: July 04, 2020
---
# {{ title }}
<p class="date">{{ nicedate }}</p>

## Brief history

After meeting with the product manager, [Heidi Strom Moon](https://twitter.com/heidimoon), I broke out the project into three [large] groups: 

1. site prompts 
2. landing page & checkout process
3. account management

## Checkout process

I did 5 rounds of user testing to get the checkout process optimized for Slate's readers:

1. **[1-page](https://projects.invisionapp.com/share/W5US9YA4QNY#/screens/392870677_1_page_-_1) vs. [3-page](https://projects.invisionapp.com/share/W5US9YA4QNY#/screens/392875148_3_page_-_1)** - 
Users understood both 1-page and 3-page experiences but because people preferred the 1-page (and I preferred it), we went with 1-page. 

2. **Account creation [before](https://www.sketch.com/s/60150400-a0d8-40bc-ab8f-c9d1e1ce7c98/a/2RgAr5/play) vs. [after](https://www.sketch.com/s/60150400-a0d8-40bc-ab8f-c9d1e1ce7c98/a/dPQLMm/play) payment** - 
Because users thought having account creation before payment was weird and the dev team was pretty opposed to account creation not being explicitly linked to subscription, we decided to keep account creation first.

3. **1-page [“stepped” layout](https://projects.invisionapp.com/share/W5US9YA4QNY#/screens/397971678_1-Page_Steps_-_1) & [forgot password](https://projects.invisionapp.com/share/W5US9YA4QNY#/screens/397971678_1-Page_Steps_-_LP) (2 tests)** -
For the 1-page “stepped” experience test, no one had a hard time with this but 2 users (of 8) said they would have **preferred the checkout form was on a different page**.
For the “forgot password” test, I asked users to subscribe as if they already have an account but can’t remember their password. **The users who went through the whole “forgot password”  thought it was straightforward.**

4. **[Coded 1-page “stepped” experience](https://slategroup.github.io/slate-prototypes/1-page.html)** - 
Users, specifically older users, had varying degrees of difficulty (8 out of 10 users) logging into their account and subscribing. Because of this, I wondered if I could **test this same flow and set of users with a coded 3-page experience and see if I got the same results.** Accounts are always difficult, especially for older users, but i thought simplifying each step might help.

5. **[Coded 3-page experience](https://slategroup.github.io/slate-prototypes/3-page_plans.html)** - 
4 users (of 10 total) had a bit or a lot of difficulty with this task and only 2 of those users were in the “older” category. From this we can assume that the **3-page experience is much easier to understand for users trying to go from the “create account” form to the “log in” form.**

[See PDF](/img/CS_split_top/Paywall_checkout_user_testing_rounds_1-5_-_Summary.pdf) for more detail descriptions of each test and see coded prototypes [here](https://slategroup.github.io/slate-prototypes/). 

## Decision

Based on the user feedback, I decided to go with the 3-page checkout process with very clear links to “log in” and “create account” to toggle between the two forms. I think this is more easily understood by users, specifically “older” ones (which Slate has more of than “young” ones).

![paywall checkout flow](/img/paywall/paywall_checkout-demo.gif)
<span class="caption">Click thru these mocks <a href="https://www.sketch.com/s/e162d784-4d85-4826-9954-53825ad7d03e/a/mQgwPJ/play">here</a></span>
