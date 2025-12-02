---
layout: home
author_profile: true
header:
  image: # "/assets/images/home-header.jpg"
  overlay_color: "#000"
  overlay_filter: "0.5"
  caption: "Welcome to My 2026 Bug Bounty Challenge"
excerpt: "12 Week x 4 Quarters Challenge | Security Research | Bug Bounties | Daily Logs & Weekly Reviews"
---

# Welcome to My 2026 Bug Bounty Challenge! 🎯

I'm documenting my comprehensive journey through **4 quarters of 12-week challenges** (reverse counting from Week 12 to Week 1), discovering vulnerabilities, learning advanced security techniques, and building expertise in bug bounty hunting.

## 📊 Challenge Structure

| Metric | Value |
|--------|-------|
| **Challenge Type** | 12 Week x 4 Quarters |
| **Duration** | 48 weeks (approx 1 year) |
| **Current** | Quarter 1, Week 12, Day 2 |
| **Total Weeks** | 48 weeks |
| **Weekly Reviews** | 48 |
| **Documentation** | Daily Logs + Weekly Analysis |

---

## 🚀 Quick Navigation

### Jump Into Content

<div class="feature__wrapper">
  <div class="feature__item">
    <div class="archive__item-teaser">
      <i class="fas fa-calendar-alt"></i>
    </div>
    <div class="archive__item-body">
      <h3 class="archive__item-title">Daily Logs</h3>
      <p class="archive__item-excerpt">Short-form daily entries tracking my progress, findings, and learnings.</p>
      <p><a href="/Bug-Bounty-Journey/timeline/" class="btn btn--primary">View Timeline</a></p>
    </div>
  </div>

  <div class="feature__item">
    <div class="archive__item-teaser">
      <i class="fas fa-newspaper"></i>
    </div>
    <div class="archive__item-body">
      <h3 class="archive__item-title">Weekly Reviews</h3>
      <p class="archive__item-excerpt">Comprehensive long-form analysis of each week's achievements and learnings.</p>
      <p><a href="/Bug-Bounty-Journey/blog/" class="btn btn--primary">Read Reviews</a></p>
    </div>
  </div>

  <div class="feature__item">
    <div class="archive__item-teaser">
      <i class="fas fa-user"></i>
    </div>
    <div class="archive__item-body">
      <h3 class="archive__item-title">About Me</h3>
      <p class="archive__item-excerpt">Learn about my background and what drives this challenge.</p>
      <p><a href="/Bug-Bounty-Journey/about/" class="btn btn--primary">Learn More</a></p>
    </div>
  </div>

  <div class="feature__item">
    <div class="archive__item-teaser">
      <i class="fas fa-list-check"></i>
    </div>
    <div class="archive__item-body">
      <h3 class="archive__item-title">Impossible List</h3>
      <p class="archive__item-excerpt">My ambitious goals and dreams for this challenge and beyond.</p>
      <p><a href="/Bug-Bounty-Journey/impossible-list/" class="btn btn--primary">View Goals</a></p>
    </div>
  </div>

  <div class="feature__item">
    <div class="archive__item-teaser">
      <i class="fas fa-info-circle"></i>
    </div>
    <div class="archive__item-body">
      <h3 class="archive__item-title">Challenge Overview</h3>
      <p class="archive__item-excerpt">Understand the challenge structure, goals, and my daily workflow.</p>
      <p><a href="/Bug-Bounty-Journey/challenge/" class="btn btn--primary">Explore</a></p>
    </div>
  </div>

  <div class="feature__item">
    <div class="archive__item-teaser">
      <i class="fas fa-tags"></i>
    </div>
    <div class="archive__item-body">
      <h3 class="archive__item-title">Browse by Topic</h3>
      <p class="archive__item-excerpt">Filter daily logs and reviews by security topic or theme.</p>
      <p><a href="/Bug-Bounty-Journey/tags/" class="btn btn--primary">View Tags</a></p>
    </div>
  </div>
</div>

---

## 📰 Latest Activity

### Recent Daily Logs

{% assign sorted_logs = site.logs | sort: 'date' | reverse %}
{% for log in sorted_logs limit: 5 %}
<article class="archive__item">
  <h3 class="archive__item-title">
    <a href="{{ log.url | relative_url }}">{{ log.title }}</a>
  </h3>
  <p class="page__meta">
    <i class="far fa-calendar-alt"></i>
    <time datetime="{{ log.date | date_to_xmlschema }}">{{ log.date | date: "%B %d, %Y" }}</time>
    {% if log.tags %}
      <span class="page__meta-sep">|</span>
      {% for tag in log.tags limit: 3 %}
        <a href="/Bug-Bounty-Journey/tags/#{{ tag | slugify }}" class="page__meta-tag">{{ tag }}</a>
        {% if forloop.last == false %} {% endif %}
      {% endfor %}
    {% endif %}
  </p>
  {% if log.excerpt %}
    <p class="archive__item-excerpt">{{ log.excerpt | truncatewords: 25 }}</p>
  {% endif %}
</article>
{% endfor %}

### Recent Weekly Reviews

{% assign sorted_posts = site.posts | sort: 'date' | reverse %}
{% for post in sorted_posts limit: 3 %}
  {% if post.categories contains 'weekly-review' %}
    <article class="archive__item">
      <h3 class="archive__item-title">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h3>
      <p class="page__meta">
        <i class="far fa-calendar-alt"></i>
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
      </p>
      {% if post.excerpt %}
        <p class="archive__item-excerpt">{{ post.excerpt | truncatewords: 25 }}</p>
      {% endif %}
    </article>
  {% endif %}
{% endfor %}

---

## 🎯 What's This All About?

I'm undertaking a **12-week quarterly challenge** to:

✅ **Master Bug Bounty Hunting** - Develop world-class vulnerability discovery skills  
✅ **Build Consistency** - Prove that daily effort compounds into excellence  
✅ **Share Knowledge** - Document transparently so others can learn  
✅ **Discover Impact** - Find and disclose vulnerabilities that matter  
✅ **Grow Community** - Connect with fellow security researchers  

---

## 🔗 Connect & Follow

Stay updated with my journey:

- **GitHub**: [heyiamuday](https://github.com/heyiamuday)
- **Twitter**: [@YourHandle](https://twitter.com/yourhandle)
- **Email**: your-email@example.com

---

## 📚 Popular Tags

<div class="archive__item-teaser">
{% for tag in site.tags limit: 10 %}
  <a href="/tags/#{{ tag | first | slugify }}" class="page__meta-tag">
    {{ tag | first }} ({{ tag | last | size }})
  </a>
{% endfor %}
</div>

---

## 🚀 Getting Started

**New here?** Start with one of these:

1. **First Time**: [Read the Challenge Overview](/Bug-Bounty-Journey/challenge/)
2. **Curious About Me**: [Check out the About page](/Bug-Bounty-Journey/about/)
3. **Ready to Dive In**: [View the Timeline](/Bug-Bounty-Journey/timeline/)
4. **Want Analysis**: [Read the Latest Weekly Review](/Bug-Bounty-Journey/blog/)

---

**Ready to follow the journey?** [Explore the timeline →](/Bug-Bounty-Journey/timeline/)

*Thank you for visiting my 2026 Bug Bounty Challenge site. Let's discover what's possible when we commit to daily progress! 🎯*

---

<!-- Replace the inline style block that was causing conflicts -->
<style>
  /* Enforce mobile-first grid, then expand at breakpoints.
     This replaces the auto-fit rule that collapsed to one column on desktop. */

  .feature__wrapper {
    display: grid !important;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin: 2rem 0;
    width: 100%;
    padding: 0;
    grid-auto-rows: 1fr; /* equalize row heights */
  }

  .feature__wrapper > .feature__item {
    align-self: stretch;
    width: auto;
  }

  /* Tablet: 2 columns */
  @media (min-width: 768px) and (max-width: 1023px) {
    .feature__wrapper {
      grid-template-columns: repeat(2, minmax(220px, 1fr)) !important;
      gap: 2rem;
    }
  }

  /* Desktop / Laptop: 3 columns (authoritative) */
  @media (min-width: 1024px) {
    /* Target the page content wrapper specifically so this wins */
    .page .page__content .feature__wrapper,
    .page__content .feature__wrapper,
    .feature__wrapper {
      grid-template-columns: repeat(3, minmax(260px, 1fr)) !important;
      gap: 2rem !important;
      grid-auto-rows: 1fr !important;
      display: grid !important;
    }
  }

  .feature__item {
    display: flex;
    flex-direction: column;
    padding: 1.25rem;
    background-color: var(--background-color-secondary);
    border-radius: 0.5rem;
    text-decoration: none;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
    height: 100%;
  }

  .feature__item:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 18px rgba(0,0,0,0.12);
  }
</style>
