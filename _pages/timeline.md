---
layout: archive
title: "Challenge Timeline"
permalink: /timeline/
author_profile: true
---

<h2>Daily Challenge Logs</h2>

<p>Below is the complete chronological timeline of my challenge. Click on any date or title to read the full log entry.</p>

<!-- Timeline Container -->
<div class="timeline">
  {% assign sorted_logs = site.logs | sort: 'date' | reverse %}
  
  {% if sorted_logs.size > 0 %}
    <div class="list__item">
      {% for log in sorted_logs %}
        <article class="archive__item">
          <h3 class="archive__item-title">
            <a href="{{ log.url | relative_url }}">
              {{ log.title }}
            </a>
          </h3>
          <div class="archive__item-excerpt">
            <p class="page__meta">
              <i class="far fa-calendar-alt"></i>
              <time datetime="{{ log.date | date_to_xmlschema }}">
                {{ log.date | date: "%B %d, %Y" }}
              </time>
              
              {% if log.tags %}
                <span class="page__meta-sep">|</span>
                {% for tag in log.tags %}
                  <a href="/Bug-Bounty-Journey/tags/#{{ tag | slugify }}" class="page__meta-tag">{{ tag }}</a>
                  {% if forloop.last == false %}, {% endif %}
                {% endfor %}
              {% endif %}
            </p>
            
            {% if log.excerpt %}
              <p class="archive__item-excerpt">{{ log.excerpt | truncatewords: 30 }}</p>
            {% endif %}
          </div>
        </article>
      {% endfor %}
    </div>
  {% else %}
    <p>No logs yet. Start your challenge today!</p>
  {% endif %}
</div>

<!-- Custom CSS for Timeline (optional) -->
<style>
  .timeline {
    margin-top: 2rem;
  }

  .archive__item {
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--border-color);
  }

  .archive__item:last-child {
    border-bottom: none;
  }

  .archive__item-title {
    margin: 0.5rem 0;
  }

  .archive__item-title a {
    text-decoration: none;
    color: var(--link-color);
  }

  .archive__item-title a:hover {
    text-decoration: underline;
  }

  .page__meta {
    font-size: 0.875rem;
    color: var(--text-color-secondary);
  }

  .page__meta-sep {
    margin: 0 0.5rem;
  }

  .archive__item-excerpt {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    line-height: 1.6;
  }
</style>
