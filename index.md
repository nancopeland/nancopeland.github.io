---
layout: layout.njk
title: Index
---

<p class="intro"><strong>Hi, I'm Nan and I'm an interaction designer at <a href="https://slate.com/">Slate</a> in Brooklyn. I enjoy talking to users, working with developers and designing in the browser.</strong></p>

<section class="job-block">
<div class="block">
<p>I’ve worked at <a href="https://slate.com/">Slate Magazine</a> since 2018. I work with developers and product managers to add new features to Slate.com and improve the experience for our readers.</p>

{%- for post in collections.slate -%}
	<a class="project-link" href="{{ post.url }}">{{ post.data.title }}</a>
{%- endfor -%}
</div>

<div class="block">
	<!--<video controls loop>
		<source type="video/mp4" src="img/slate_scroll.mp4"></source>
		<p>Your browser does not support the video element.</p>
	</video>-->
	<img src="img/slate_scroll.gif"/>
</div>
</section>

<p>Before Slate, I was a front-end designer at <a href="https://www.industrydive.com/">Industry Dive</a>, a media startup in Washington, D.C.</p>

<ul class="card-wrapper">
	{%- for post in collections.id -%}
		<li class="card">
			<a href="{{ post.url }}">
				<h2>{{ post.data.title }}</h2>
				<p>{{ post.data.description }}</p>
			</a>
		</li>
	{%- endfor -%}
</ul>

<p>I also took a user experience design class at <a href="https://generalassemb.ly/">General Assembly</a>.</p>

<ul class="card-wrapper">
	{%- for post in collections.ga -%}
		<li class="card">
			<a href="{{ post.url }}">
				<h2>{{ post.data.title }}</h2>
				<p>{{ post.data.description }}</p>
			</a>
		</li>
	{%- endfor -%}
</ul>

<p>My email is <a href="mailto:nmcopeland1@gmail.com">nmcopeland1@gmail.com</a>. You can also follow me on <a href="https://twitter.com/nancopeland">Twitter</a> and <a href="https://www.instagram.com/nancopeland/">Instagram</a>.</p>
