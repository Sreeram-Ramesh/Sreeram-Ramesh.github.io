---
title: Projects
layout: default
---

# Projects

<form id="projects-search-form" action="/projects.html" method="get">
  <input type="search" id="projects-search" name="q" placeholder="Search projects..." style="width: 60%; padding: 0.4em; font-size: 1em; border: 1px solid #d1cfc7; border-radius: 4px;" />
  <button type="submit" style="padding: 0.4em 1.2em; margin-left: 0.5em; background: #805ad5; color: #fff; border: none; border-radius: 4px; font-family: inherit;">Search</button>
</form>

<!-- Projects list here -->
<ul>
  {% for project in site.data.projects %}
    <li>
      <a href="{{ project.url }}">{{ project.name }}</a>
      <span style="color:#b8b6a8;">({{ project.year }})</span>
    </li>
  {% endfor %}
</ul>
