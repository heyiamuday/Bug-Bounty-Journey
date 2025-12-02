---
layout: archive
title: "Weekly Reviews & Blog Archive"
permalink: /blog/
author_profile: true
---

<h2>Weekly Reviews - Long-Form Blog Posts</h2>

<p>This is my collection of comprehensive weekly reviews from the 365-day bug bounty challenge. Each week features in-depth analysis, statistics, learnings, and tactical adjustments.</p>

<div class="posts">
  {% assign sorted_posts = site.posts | sort: 'date' | reverse %}
  
  {% if sorted_posts.size > 0 %}
    {% for post in sorted_posts %}
      {% if post.categories contains 'weekly-review' %}
        <article class="archive__item">
          <h3 class="archive__item-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h3>
          <div class="archive__item-meta">
            <p class="page__meta">
              <i class="far fa-calendar-alt"></i>
              <time datetime="{{ post.date | date_to_xmlschema }}">
                {{ post.date | date: "%B %d, %Y" }}
              </time>
              
              {% if post.read_time %}
                <span class="page__meta-sep">|</span>
                <i class="far fa-clock"></i>
                {% include read-time.html %}
              {% endif %}

              {% if post.tags %}
                <span class="page__meta-sep">|</span>
                {% for tag in post.tags %}
                  <a href="/tags/#{{ tag | slugify }}" class="page__meta-tag">{{ tag }}</a>
                  {% if forloop.last == false %}, {% endif %}
                {% endfor %}
              {% endif %}
            </p>
          </div>
          
          {% if post.excerpt %}
            <p class="archive__item-excerpt">{{ post.excerpt | truncatewords: 50 }}</p>
          {% endif %}
          
          <p>
            <a href="{{ post.url | relative_url }}" class="btn btn--primary">Read More →</a>
          </p>
        </article>
      {% endif %}
    {% endfor %}
  {% else %}
    <p>No weekly reviews published yet. Check back soon!</p>
  {% endif %}
</div>

---

## Browse by Week

<div class="week-navigation">
  {% assign sorted_posts = site.posts | where: 'categories', 'weekly-review' | sort: 'date' | reverse %}
  {% for post in sorted_posts limit: 10 %}
    <a href="{{ post.url | relative_url }}" class="week-link">
      <span class="week-number">{{ post.date | date: "%U" }}</span>
      <span class="week-title">{{ post.title }}</span>
    </a>
  {% endfor %}
</div>

---

## Statistics

<div class="stats-container">
  <div class="stat-item">
    <h4>Total Reviews</h4>
    <p class="stat-value">{{ site.posts | where: 'categories', 'weekly-review' | size }}</p>
  </div>
  
  <div class="stat-item">
    <h4>Most Recent</h4>
    <p class="stat-value">
      {% assign latest = site.posts | where: 'categories', 'weekly-review' | first %}
      {{ latest.date | date: "%B %Y" }}
    </p>
  </div>
</div>

---

## Tips for Reading

- **Start with the latest** review to see current progress
- **Use tags** to filter by topic (e.g., `week-01`, `reflection`)
- **Check the timeline** link in each review to see daily logs from that week
- **Subscribe** to get notifications of new reviews

---

<style>
  .posts {
    margin-top: 2rem;
  }

  .archive__item {
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--border-color);
  }

  .archive__item:last-child {
    border-bottom: none;
  }

  .archive__item-title {
    margin: 0.5rem 0;
    font-size: 1.5rem;
  }

  .archive__item-title a {
    text-decoration: none;
    color: var(--link-color);
  }

  .archive__item-title a:hover {
    text-decoration: underline;
  }

  .archive__item-meta {
    margin: 0.5rem 0 1rem;
  }

  .page__meta {
    font-size: 0.875rem;
    color: var(--text-color-secondary);
    margin: 0;
  }

  .page__meta-sep {
    margin: 0 0.5rem;
  }

  .page__meta-tag {
    display: inline-block;
    padding: 0.25rem 0.5rem;
    background-color: var(--background-color-secondary);
    border-radius: 0.25rem;
    text-decoration: none;
    font-size: 0.8rem;
    margin: 0 0.25rem;
  }

  .page__meta-tag:hover {
    background-color: var(--primary-color);
    color: white;
  }

  .archive__item-excerpt {
    margin: 1rem 0;
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .btn {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: var(--primary-color);
    color: white;
    text-decoration: none;
    border-radius: 0.25rem;
    transition: background-color 0.2s ease;
    font-size: 0.9rem;
  }

  .btn:hover {
    background-color: var(--primary-color-lighter);
  }

  .week-navigation {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
    margin: 2rem 0;
  }

  .week-link {
    display: block;
    padding: 1rem;
    background-color: var(--background-color-secondary);
    border-radius: 0.5rem;
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .week-link:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-2px);
  }

  .week-number {
    display: block;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .week-title {
    display: block;
    font-size: 0.9rem;
    line-height: 1.4;
  }

  .stats-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
    padding: 2rem;
    background-color: var(--background-color-secondary);
    border-radius: 0.5rem;
  }

  .stat-item {
    text-align: center;
  }

  .stat-item h4 {
    margin: 0;
    font-size: 0.9rem;
    color: var(--text-color-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .stat-value {
    margin: 0.5rem 0 0;
    font-size: 2rem;
    font-weight: bold;
    color: var(--primary-color);
  }
</style>
