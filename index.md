---
layout: layout.njk
title: Index
---

<p class="intro"><strong>Hi, I'm Nan and I'm an interaction designer at <a href="https://slate.com/">Slate</a> in Brooklyn. I enjoy talking to users, working with developers and designing in the browser.</strong></p>

<p>Here are some projects I've worked on at <a href="https://slate.com/">Slate</a>...</p>

<ul class="card-wrapper">
	{%- for post in collections.slate -%}
		<li class="card">
			<a href="{{ post.url }}">
				<h2>{{ post.data.title }}</h2>
				<p>{{ post.data.description }}</p>
			</a>
		</li>
	{%- endfor -%}
</ul>

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
