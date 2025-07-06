document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('blog-search');
  const tagFilters = document.querySelectorAll('.tag-filter');
  const blogPosts = document.querySelectorAll('.blog-post');
  const noResults = document.getElementById('no-results');
  let activeTag = "all";

  function filter() {
    const q = (searchInput.value || "").toLowerCase();
    let anyVisible = false;
    blogPosts.forEach(post => {
      const title = post.querySelector('.blog-title').textContent.toLowerCase();
      const tags = (post.getAttribute('data-tags') || "").toLowerCase().split(',');
      const tagMatch = (activeTag === "all" || tags.includes(activeTag));
      const searchMatch = title.includes(q);
      if (tagMatch && searchMatch) {
        post.style.display = '';
        anyVisible = true;
      } else {
        post.style.display = 'none';
      }
    });
    noResults.style.display = anyVisible ? 'none' : '';
  }

  tagFilters.forEach(tag => {
    tag.addEventListener('click', function() {
      tagFilters.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      activeTag = this.getAttribute('data-tag');
      filter();
    });
  });

  searchInput.addEventListener('input', filter);

  // Default to All active
  tagFilters[0].classList.add('active');
});
