---
title: Projects
layout: default
---

# Projects

<div class="projects-index">
  <div class="project-controls">
    <input type="text" id="projects-search" placeholder="Search projects..." />
  </div>
  <ul id="project-list">
    {% for project in site.data.projects %}
    <li class="project-item" data-name="{{ project.name | downcase }}">
      <a href="{{ project.url }}">{{ project.name }}</a>
      <span class="project-year">({{ project.year }})</span>
    </li>
    {% endfor %}
  </ul>
  <div id="no-project-results" class="no-results-msg hidden">No projects found.</div>
</div>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    var search = document.getElementById('projects-search');
    var items = document.querySelectorAll('.project-item');
    var noResults = document.getElementById('no-project-results');
    search.addEventListener('input', function() {
      var q = search.value.toLowerCase();
      var any = false;
      items.forEach(function(item) {
        var match = item.getAttribute('data-name').includes(q);
        item.classList.toggle('hidden', !match);
        if (match) any = true;
      });
      noResults.classList.toggle('hidden', any);
    });
  });
</script>
