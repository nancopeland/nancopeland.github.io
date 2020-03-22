---
layout: layout.njk
title: Index
---

<div class="intro">
	<p><strong>Nan Copeland</strong> is a designer living in Brooklyn. Currently, she is an interaction designer at <a href="https://slate.com/">Slate</a>.</p>
	<p>She enjoys talking to users, data visualization and designing in the browser.</p>
</div>

<p>Here are some projects she has worked on at <a href="https://slate.com/">Slate</a>...</p>

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

<p>Before Slate, she was a front-end designer at <a href="https://www.industrydive.com/">Industry Dive</a>, a media startup in Washington, D.C.</p>

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

<p>She also took a user experience design class at <a href="https://generalassemb.ly/">General Assembly</a>.</p>

<ul class="card-wrapper">
	<li class="card">
		<h2>GIG iOS app</h2>
		<p>GIG is an app for going to concerts with your friends. It was created because I thought there was a void in the market for a service that allows you to plan, buy and attend concerts with your friends easily.</p>
	</li>
</ul>

<p>Her email is <a href="mailto:nmcopeland1@gmail.com">nmcopeland1@gmail.com</a>. You can also follow her on <a href="https://twitter.com/nancopeland">Twitter</a> and <a href="https://www.instagram.com/nancopeland/">Instagram</a>.</p>
