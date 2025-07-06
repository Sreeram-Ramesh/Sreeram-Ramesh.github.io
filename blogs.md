---
title: Blogs
layout: default
---

<div class="blog-index">
  <h1>BLOGS</h1>
  <div class="blog-controls">
    <input type="text" id="blog-search" placeholder="Search blogs...">
    <div class="tag-filters">
      <span class="tag-filter" data-tag="all">All</span>
      <span class="tag-filter" data-tag="research">Research</span>
      <span class="tag-filter" data-tag="tutorial">Tutorial</span>
      <span class="tag-filter" data-tag="off-topic">Off-topic</span>
      <span class="tag-filter" data-tag="physics">Physics</span>
      <span class="tag-filter" data-tag="math">Math</span>
      <span class="tag-filter" data-tag="computer-science">Computer Science</span>
      <span class="tag-filter" data-tag="tips">Tips</span>
    </div>
  </div>
  <div id="blog-list">
    {% for post in site.posts %}
    <div class="blog-card blog-post" data-tags="{{ post.tags | join: ',' }}">
      <div class="blog-card-content">
        <div class="blog-card-meta">
          <span class="blog-date">{{ post.date | date: "%b %d, %Y" }}</span>
          <span class="blog-tags">
            {% for tag in post.tags %}
              <span class="tag-badge tag-{{ tag | slugify }}">{{ tag }}</span>
            {% endfor %}
          </span>
        </div>
        <a href="{{ post.url | relative_url }}" class="blog-title">{{ post.title }}</a>
        {% if post.excerpt %}
        <div class="blog-excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</div>
        {% endif %}
      </div>
    </div>
    {% endfor %}
    <div id="no-results" style="display:none; color:#805ad5; margin-top:2em; text-align:center;">No posts found.</div>
  </div>
</div>
<script src="{{ "/assets/blog-filter.js" | relative_url }}"></script>
