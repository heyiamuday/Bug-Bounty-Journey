---
layout: archive
permalink: /tags/
title: "Browse by Topic"
author_profile: true
---

<h1>Tags & Topics</h1>

<p>Explore the challenge entries by security topics and themes. Click on any tag to filter the content.</p>

<!-- Tag Cloud -->
<div class="tag-cloud">
  {% for tag in site.tags %}
    <a href="#{{ tag | first | slugify }}" class="tag-link" style="font-size: {{ tag | last | size | times: 100 | divided_by: site.tags.size | plus: 85 }}%">
      {{ tag | first }} <span class="tag-count">({{ tag | last | size }})</span>
    </a>
  {% endfor %}
</div>

<!-- Tags List -->
<div class="tags-list">
  {% for tag in site.tags %}
    <h2 id="{{ tag | first | slugify }}" class="tag-heading">{{ tag | first }}</h2>
    <ul class="tags-posts-list">
      {% assign sorted_posts = tag | last | sort: 'date' | reverse %}
      {% for post in sorted_posts %}
        <li>
          <span class="post-date">{{ post.date | date: "%B %d, %Y" }}</span>
          <a href="{{ post.url | relative_url }}" class="post-link">{{ post.title }}</a>
        </li>
      {% endfor %}
    </ul>
  {% endfor %}
</div>

<style>
  .tag-cloud {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 2rem 0;
    justify-content: center;
    padding: 2rem;
    background: var(--background-color-secondary);
    border-radius: 0.5rem;
  }

  .tag-link {
    text-decoration: none;
    color: var(--link-color);
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    transition: all 0.3s ease;
    display: inline-block;
  }

  .tag-link:hover {
    background-color: var(--link-color);
    color: white;
    transform: scale(1.1);
  }

  .tag-count {
    font-size: 0.8em;
    opacity: 0.7;
    margin-left: 0.25rem;
  }

  .tags-list {
    margin-top: 3rem;
  }

  .tag-heading {
    padding-top: 1rem;
    margin-top: 2rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--link-color);
    color: var(--link-color);
  }

  .tags-posts-list {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
  }

  .tags-posts-list li {
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--border-color);
    display: flex;
    gap: 1rem;
  }

  .tags-posts-list li:last-child {
    border-bottom: none;
  }

  .post-date {
    flex-shrink: 0;
    color: var(--text-color-secondary);
    font-size: 0.9rem;
    min-width: 120px;
  }

  .post-link {
    flex-grow: 1;
    color: var(--link-color);
    text-decoration: none;
  }

  .post-link:hover {
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    .tag-cloud {
      justify-content: flex-start;
      gap: 0.5rem;
    }

    .tags-posts-list li {
      flex-direction: column;
      gap: 0;
    }

    .post-date {
      min-width: auto;
    }
  }
</style>
