---
layout: archive
title: "12-Week Challenge Timeline"
permalink: /timeline/
author_profile: true
---

# 📅 Complete Challenge Timeline

This page displays all your daily logs organized by **quarter and week**. Each quarter contains 12 weeks of daily logs (7 days per week = 84 logs per quarter).

---

## 📊 Timeline Overview

```
Q1 (Dec - Feb)  →  Q2 (Mar - May)  →  Q3 (Jun - Aug)  →  Q4 (Sep - Nov)
12 weeks x 7 days = 84 logs per quarter × 4 quarters = 336 total logs
```

---

{% assign quarters = "Q1|Q2|Q3|Q4" | split: "|" %}
{% for quarter in quarters %}

## {{ quarter }}: Quarter Timeline

{% assign quarter_logs = site.logs | where: "quarter", quarter | sort: "date" | reverse %}

{% if quarter_logs.size > 0 %}
  {% assign weeks = "" | split: "" %}
  {% for log in quarter_logs %}
    {% if log.week_number %}
      {% assign weeks = weeks | push: log.week_number | uniq | sort %}
    {% endif %}
  {% endfor %}

  {% assign sorted_weeks = weeks | sort | reverse | uniq %}
  {% for week in sorted_weeks %}
    <h3>Week {{ week }} (7 Days)</h3>
    
    <div class="week-logs">
      {% assign week_logs = quarter_logs | where: "week_number", week | sort: "day_number" %}
      {% for log in week_logs %}
        <article class="archive__item">
          <h4 class="archive__item-title">
            <a href="{{ log.url | relative_url }}">
              <i class="far fa-calendar-day"></i>
              Day {{ log.day_number }}: {{ log.title }}
            </a>
          </h4>
          
          <p class="page__meta">
            <i class="far fa-calendar-alt"></i>
            <time datetime="{{ log.date | date_to_xmlschema }}">
              {{ log.date | date: "%b %d, %Y" }}
            </time>
            
            {% if log.tags %}
              <span class="page__meta-sep">|</span>
              <i class="fas fa-tags"></i>
              {% for tag in log.tags limit: 3 %}
                <a href="/Bug-Bounty-Journey/tags/#{{ tag | slugify }}" class="page__meta-tag">{{ tag }}</a>
                {% if forloop.last == false %}, {% endif %}
              {% endfor %}
            {% endif %}
          </p>
          
          {% if log.excerpt %}
            <p class="archive__item-excerpt">{{ log.excerpt | truncatewords: 20 }}</p>
          {% endif %}
        </article>
      {% endfor %}
    </div>

    ---

  {% endfor %}
{% else %}
  <p class="notice--info">
    <strong>No logs for {{ quarter }} yet.</strong> Start creating your daily logs! 📝
  </p>
{% endif %}

{% endfor %}

---

## 🎯 How to Use This Timeline

### Browse Logs
- Click on any daily log to read the full entry
- Logs are organized by quarter and week for easy navigation
- Each log shows the date, day number, week number, and tags

### Filter by Topic
- Use the [Tags page](/Bug-Bounty-Journey/tags/) to filter logs by security topic
- Tags follow the format: `q1-w12`, `web-app-security`, etc.

### Track Progress
- **Q1 Progress**: Follow your first 12 weeks
- **Q2 Progress**: See how you build on Q1 learnings
- **Q3 Progress**: Reflect on consistency and growth
- **Q4 Progress**: Complete your year-long journey

---

## 📈 Statistics by Quarter

| Quarter | Weeks | Days | Logs | Status |
|---------|-------|------|------|--------|
| **Q1** | 12 | 84 | {% assign q1_count = site.logs | where: "quarter", "Q1" | size %}{{ q1_count }} | {% if q1_count > 0 %}In Progress{% else %}Not Started{% endif %} |
| **Q2** | 12 | 84 | {% assign q2_count = site.logs | where: "quarter", "Q2" | size %}{{ q2_count }} | {% if q2_count > 0 %}In Progress{% else %}Not Started{% endif %} |
| **Q3** | 12 | 84 | {% assign q3_count = site.logs | where: "quarter", "Q3" | size %}{{ q3_count }} | {% if q3_count > 0 %}In Progress{% else %}Not Started{% endif %} |
| **Q4** | 12 | 84 | {% assign q4_count = site.logs | where: "quarter", "Q4" | size %}{{ q4_count }} | {% if q4_count > 0 %}In Progress{% else %}Not Started{% endif %} |
| **TOTAL** | 48 | 336 | {% assign total = site.logs | size %}{{ total }} | {{ total }}/336 Complete |

---

## 📝 Creating New Daily Logs

### File Naming Convention
```
_logs/YYYY-MM-DD-title.md
Example: _logs/2025-12-03-q1-w12-day-002.md
```

### Front Matter Template
```yaml
---
layout: log
title: "Q1 Week 12 Day 2: Title Here"
date: 2025-12-03
author: "Your Name"
quarter: "Q1"
week_number: 12
day_number: 2
tags:
  - q1-w12
  - tag-topic
  - security-area
excerpt: "Brief summary of the day's work and findings."
---
```

### Important Fields
- `quarter`: Q1, Q2, Q3, or Q4
- `week_number`: 12 down to 1 (reverse counting within each quarter)
- `day_number`: 1-7 (daily within each week)
- `tags`: Use `q#-w##` format for filtering

---

## 🔗 Related Pages

- **[Weekly Reviews](/Bug-Bounty-Journey/reviews/)** - Long-form weekly analysis posts
- **[Tags](/Bug-Bounty-Journey/tags/)** - Filter logs by topic
- **[Q1 Dashboard](/Bug-Bounty-Journey/q1/)** - Q1-specific overview
- **[Q2 Dashboard](/Bug-Bounty-Journey/q2/)** - Q2-specific overview
- **[Q3 Dashboard](/Bug-Bounty-Journey/q3/)** - Q3-specific overview
- **[Q4 Dashboard](/Bug-Bounty-Journey/q4/)** - Q4-specific overview

---

<style>
  .week-logs {
    margin-left: 1rem;
    padding-left: 1rem;
    border-left: 3px solid var(--link-color);
  }

  .week-logs .archive__item {
    margin-bottom: 1.5rem;
    padding: 1rem 0;
  }

  .archive__item-title {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  .archive__item-title i {
    margin-right: 0.5rem;
    color: var(--link-color);
  }

  .page__meta {
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
  }

  .archive__item-excerpt {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: var(--text-color-secondary);
  }

  .notice--info {
    padding: 1rem;
    background-color: var(--background-color-secondary);
    border-left: 4px solid #1976d2;
    margin: 1rem 0;
    border-radius: 0.25rem;
  }

  @media (max-width: 767px) {
    .week-logs {
      margin-left: 0;
      padding-left: 0;
      border-left: none;
      border-top: 2px solid var(--link-color);
      padding-top: 1rem;
    }

    .archive__item-title {
      font-size: 1rem;
    }

    .page__meta {
      font-size: 0.75rem;
    }
  }
</style>

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

---

Note on filenames and URLs
- The timeline page uses each log's front matter and `{{ log.url }}` to build links.
- This means you can change filenames (underscores or different ordering) as long as each log file includes the required front matter (date, quarter, week_number, day_number).
- If you want a different public URL than the filename produces, add `slug` and `permalink` in the log front matter (see README / SETUP_GUIDE).
