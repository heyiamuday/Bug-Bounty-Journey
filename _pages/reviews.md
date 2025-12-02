---
layout: archive
title: "Weekly & Quarterly Reviews"
permalink: /reviews/
author_profile: true
---

# 📚 Weekly & Quarterly Reviews

Comprehensive long-form analysis of each week and quarter. These in-depth posts include statistics, learnings, tactical adjustments, and reflections on progress.

---

## 🎯 Filter by Type

- **Weekly Reviews**: Short-form weekly analysis posts
- **Quarterly Wraps**: Deep quarterly summaries and reflections
- **By Quarter**: Filter by Q1, Q2, Q3, or Q4

---

## 📖 All Reviews

{% assign sorted_posts = site.posts | sort: 'date' | reverse %}

{% if sorted_posts.size > 0 %}
  {% assign current_category = "" %}
  
  {% for post in sorted_posts %}
    {% if post.categories contains 'weekly-review' or post.categories contains 'quarter-summary' %}
      
      {% if post.category != current_category %}
        {% if current_category != "" %}
          </div>
        {% endif %}
        
        {% if post.categories contains 'quarterly' %}
          <h2>📊 Quarterly Summaries</h2>
        {% elsif post.categories contains 'weekly-review' %}
          <h2>📝 Weekly Reviews</h2>
        {% endif %}
        
        <div class="reviews-list">
        {% assign current_category = post.category %}
      {% endif %}
      
      <article class="archive__item">
        <h3 class="archive__item-title">
          <a href="{{ post.url | relative_url }}">
            {{ post.title }}
          </a>
        </h3>
        
        <p class="page__meta">
          <i class="far fa-calendar-alt"></i>
          <time datetime="{{ post.date | date_to_xmlschema }}">
            {{ post.date | date: "%B %d, %Y" }}
          </time>
          
          {% if post.quarter %}
            <span class="page__meta-sep">|</span>
            <strong>{{ post.quarter }}</strong>
          {% endif %}
          
          {% if post.week_number %}
            <span class="page__meta-sep">|</span>
            Week {{ post.week_number }}
          {% endif %}
          
          {% if post.categories %}
            <span class="page__meta-sep">|</span>
            {% for category in post.categories %}
              {% if category != 'weekly-review' and category != 'quarter-summary' %}
                <a href="/Bug-Bounty-Journey/categories/#{{ category | slugify }}" class="page__meta-tag">{{ category | replace: '-', ' ' }}</a>
              {% endif %}
            {% endfor %}
          {% endif %}
        </p>
        
        <p class="archive__item-excerpt">
          {{ post.excerpt | truncatewords: 30 }}
        </p>
        
        <a href="{{ post.url | relative_url }}" class="btn btn--primary">
          Read Review <i class="fas fa-arrow-right"></i>
        </a>
      </article>
    {% endif %}
  {% endfor %}
  
  {% if current_category != "" %}</div>{% endif %}
{% else %}
  <p class="notice--info">
    <strong>No reviews yet.</strong> Weekly reviews are published every Sunday. Check back soon! 📖
  </p>
{% endif %}

---

## 📅 Reviews by Quarter

### Q1 Reviews
{% assign q1_reviews = site.posts | where: "quarter", "Q1" | sort: 'date' | reverse %}
{% if q1_reviews.size > 0 %}
  <ul>
  {% for post in q1_reviews %}
    {% if post.categories contains 'weekly-review' or post.categories contains 'quarter-summary' %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span class="page__meta">{{ post.date | date: "%b %d, %Y" }}</span>
      </li>
    {% endif %}
  {% endfor %}
  </ul>
{% else %}
  <p class="text-muted">No Q1 reviews yet.</p>
{% endif %}

### Q2 Reviews
{% assign q2_reviews = site.posts | where: "quarter", "Q2" | sort: 'date' | reverse %}
{% if q2_reviews.size > 0 %}
  <ul>
  {% for post in q2_reviews %}
    {% if post.categories contains 'weekly-review' or post.categories contains 'quarter-summary' %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span class="page__meta">{{ post.date | date: "%b %d, %Y" }}</span>
      </li>
    {% endif %}
  {% endfor %}
  </ul>
{% else %}
  <p class="text-muted">No Q2 reviews yet.</p>
{% endif %}

### Q3 Reviews
{% assign q3_reviews = site.posts | where: "quarter", "Q3" | sort: 'date' | reverse %}
{% if q3_reviews.size > 0 %}
  <ul>
  {% for post in q3_reviews %}
    {% if post.categories contains 'weekly-review' or post.categories contains 'quarter-summary' %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span class="page__meta">{{ post.date | date: "%b %d, %Y" }}</span>
      </li>
    {% endif %}
  {% endfor %}
  </ul>
{% else %}
  <p class="text-muted">No Q3 reviews yet.</p>
{% endif %}

### Q4 Reviews
{% assign q4_reviews = site.posts | where: "quarter", "Q4" | sort: 'date' | reverse %}
{% if q4_reviews.size > 0 %}
  <ul>
  {% for post in q4_reviews %}
    {% if post.categories contains 'weekly-review' or post.categories contains 'quarter-summary' %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span class="page__meta">{{ post.date | date: "%b %d, %Y" }}</span>
      </li>
    {% endif %}
  {% endfor %}
  </ul>
{% else %}
  <p class="text-muted">No Q4 reviews yet.</p>
{% endif %}

---

## 🎯 Review Schedule

**Weekly Reviews**: Published every Sunday evening  
- Covers the past 7 days (Q# W## D1-D7)
- Includes statistics, learnings, and tactical adjustments
- 1,500-3,000 word deep-dive analysis

**Quarterly Wraps**: Published at the end of each quarter  
- 12-week comprehensive summary
- Reflection on quarter-specific goals
- Comparison to previous quarters
- Strategic planning for next quarter

---

## 📊 Review Statistics

| Quarter | Weekly Reviews | Quarterly Summary | Total Posts |
|---------|----------------|-------------------|-------------|
| **Q1** | {% assign q1_weekly = site.posts | where: "quarter", "Q1" | where_exp: "post", "post.categories contains 'weekly-review'" | size %}{{ q1_weekly }} | {% assign q1_summary = site.posts | where: "quarter", "Q1" | where_exp: "post", "post.categories contains 'quarter-summary'" | size %}{% if q1_summary > 0 %}Yes{% else %}Coming{% endif %} | {% assign q1_total = site.posts | where: "quarter", "Q1" | size %}{{ q1_total }} |
| **Q2** | {% assign q2_weekly = site.posts | where: "quarter", "Q2" | where_exp: "post", "post.categories contains 'weekly-review'" | size %}{{ q2_weekly }} | {% assign q2_summary = site.posts | where: "quarter", "Q2" | where_exp: "post", "post.categories contains 'quarter-summary'" | size %}{% if q2_summary > 0 %}Yes{% else %}Coming{% endif %} | {% assign q2_total = site.posts | where: "quarter", "Q2" | size %}{{ q2_total }} |
| **Q3** | {% assign q3_weekly = site.posts | where: "quarter", "Q3" | where_exp: "post", "post.categories contains 'weekly-review'" | size %}{{ q3_weekly }} | {% assign q3_summary = site.posts | where: "quarter", "Q3" | where_exp: "post", "post.categories contains 'quarter-summary'" | size %}{% if q3_summary > 0 %}Yes{% else %}Coming{% endif %} | {% assign q3_total = site.posts | where: "quarter", "Q3" | size %}{{ q3_total }} |
| **Q4** | {% assign q4_weekly = site.posts | where: "quarter", "Q4" | where_exp: "post", "post.categories contains 'weekly-review'" | size %}{{ q4_weekly }} | {% assign q4_summary = site.posts | where: "quarter", "Q4" | where_exp: "post", "post.categories contains 'quarter-summary'" | size %}{% if q4_summary > 0 %}Yes{% else %}Coming{% endif %} | {% assign q4_total = site.posts | where: "quarter", "Q4" | size %}{{ q4_total }} |

---

## 🔗 Related Pages

- **[Daily Timeline](/Bug-Bounty-Journey/timeline/)** - All 336 daily log entries
- **[Tags](/Bug-Bounty-Journey/tags/)** - Filter by security topic
- **[Q1 Dashboard](/Bug-Bounty-Journey/q1/)** - Q1 progress and goals
- **[Q2 Dashboard](/Bug-Bounty-Journey/q2/)** - Q2 progress and goals
- **[Q3 Dashboard](/Bug-Bounty-Journey/q3/)** - Q3 progress and goals
- **[Q4 Dashboard](/Bug-Bounty-Journey/q4/)** - Q4 progress and goals

---

<style>
  .reviews-list {
    margin: 2rem 0;
  }

  .reviews-list .archive__item {
    padding: 1.5rem;
    background-color: var(--background-color-secondary);
    border-radius: 0.5rem;
    border-left: 4px solid var(--link-color);
    margin-bottom: 1.5rem;
    transition: all 0.2s ease;
  }

  .reviews-list .archive__item:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateX(4px);
  }

  .reviews-list .archive__item-title {
    font-size: 1.3rem;
    margin-bottom: 0.75rem;
  }

  .reviews-list .page__meta {
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }

  .reviews-list .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media (max-width: 767px) {
    .reviews-list .archive__item {
      padding: 1rem;
    }

    .reviews-list .archive__item-title {
      font-size: 1.1rem;
    }

    .page__meta {
      font-size: 0.75rem;
    }
  }
</style>
