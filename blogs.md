---
title: Blogs
layout: default
---

# Blogs

<form id="blog-search-form" action="/blogs.html" method="get">
  <input type="search" id="blog-search" name="q" placeholder="Search blogs..." style="width: 60%; padding: 0.4em; font-size: 1em; border: 1px solid #d1cfc7; border-radius: 4px;" />
  <button type="submit" style="padding: 0.4em 1.2em; margin-left: 0.5em; background: #805ad5; color: #fff; border: none; border-radius: 4px; font-family: inherit;">Search</button>
</form>

<!-- Blog posts will be listed here -->
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <span style="color:#b8b6a8;">({{ post.date | date: "%b %d, %Y" }})</span>
    </li>
  {% endfor %}
</ul>
