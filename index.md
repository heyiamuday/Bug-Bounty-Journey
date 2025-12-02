---
layout: home
author_profile: true
header:
  image: # "/assets/images/home-header.jpg"
  overlay_color: "#000"
  overlay_filter: "0.5"
  caption: "Welcome to the 365-Day Bug Bounty Challenge"
excerpt: "Documenting my journey from Day 1 to Day 365 | Security Research | Bug Bounties | Daily Logs & Weekly Reviews"
---

# Welcome to My 365-Day Bug Bounty Challenge! 🎯

I'm documenting my comprehensive journey from **Day 1 to Day 365**, discovering vulnerabilities, learning advanced security techniques, and building expertise in bug bounty hunting.

## 📊 Challenge Progress

| Metric | Target | Current |
|--------|--------|---------|
| **Days Completed** | 365 | Ongoing |
| **Vulnerabilities** | 100+ | Tracking |
| **Time Committed** | 1,460+ hours | Tracking |
| **Weekly Reviews** | 52 | Ongoing |
| **Documentation** | 417 posts | Building |

---

## 🚀 Quick Navigation

### Jump Into Content

<div class="feature__wrapper">
  <div class="feature__item">
    <div class="archive__item-teaser">
      <i class="fas fa-calendar-alt"></i>
    </div>
    <div class="archive__item-body">
      <h3 class="archive__item-title">Daily Logs (365 Days)</h3>
      <p class="archive__item-excerpt">Short-form daily entries tracking my progress, findings, and learnings.</p>
      <p><a href="/timeline/" class="btn btn--primary">View Timeline</a></p>
    </div>
  </div>

  <div class="feature__item">
    <div class="archive__item-teaser">
      <i class="fas fa-newspaper"></i>
    </div>
    <div class="archive__item-body">
      <h3 class="archive__item-title">Weekly Reviews (52 Posts)</h3>
      <p class="archive__item-excerpt">Comprehensive long-form analysis of each week's achievements and learnings.</p>
      <p><a href="/blog/" class="btn btn--primary">Read Reviews</a></p>
    </div>
  </div>

  <div class="feature__item">
    <div class="archive__item-teaser">
      <i class="fas fa-user"></i>
    </div>
    <div class="archive__item-body">
      <h3 class="archive__item-title">About Me</h3>
      <p class="archive__item-excerpt">Learn about my background and what drives this 365-day challenge.</p>
      <p><a href="/about/" class="btn btn--primary">Learn More</a></p>
    </div>
  </div>

  <div class="feature__item">
    <div class="archive__item-teaser">
      <i class="fas fa-list-check"></i>
    </div>
    <div class="archive__item-body">
      <h3 class="archive__item-title">Impossible List</h3>
      <p class="archive__item-excerpt">My ambitious goals and dreams for this challenge and beyond.</p>
      <p><a href="/impossible-list/" class="btn btn--primary">View Goals</a></p>
    </div>
  </div>

  <div class="feature__item">
    <div class="archive__item-teaser">
      <i class="fas fa-info-circle"></i>
    </div>
    <div class="archive__item-body">
      <h3 class="archive__item-title">Challenge Overview</h3>
      <p class="archive__item-excerpt">Understand the challenge structure, goals, and my daily workflow.</p>
      <p><a href="/challenge/" class="btn btn--primary">Explore</a></p>
    </div>
  </div>

  <div class="feature__item">
    <div class="archive__item-teaser">
      <i class="fas fa-tags"></i>
    </div>
    <div class="archive__item-body">
      <h3 class="archive__item-title">Browse by Topic</h3>
      <p class="archive__item-excerpt">Filter daily logs and reviews by security topic or theme.</p>
      <p><a href="/tags/" class="btn btn--primary">View Tags</a></p>
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
        <a href="/tags/#{{ tag | slugify }}" class="page__meta-tag">{{ tag }}</a>
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

I'm undertaking a **365-day challenge** to:

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

1. **First Time**: [Read the Challenge Overview](/challenge/)
2. **Curious About Me**: [Check out the About page](/about/)
3. **Ready to Dive In**: [View the 365-Day Timeline](/timeline/)
4. **Want Analysis**: [Read the Latest Weekly Review](/blog/)

---

**Ready to follow the journey?** [Explore the timeline →](/timeline/)

*Thank you for visiting my 365-day challenge site. Let's discover what's possible when we commit to daily progress! 🎯*

---

<style>
  .feature__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
  }

  .feature__item {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    background-color: var(--background-color-secondary);
    border-radius: 0.5rem;
    text-decoration: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .feature__item:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  .archive__item-teaser {
    font-size: 3rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
    text-align: center;
  }

  .archive__item-body h3 {
    margin: 0.5rem 0;
    font-size: 1.25rem;
  }

  .archive__item-body p {
    font-size: 0.9rem;
    margin: 0.5rem 0;
  }

  .btn {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: var(--primary-color);
    color: white;
    text-decoration: none;
    border-radius: 0.25rem;
    transition: background-color 0.2s ease;
    margin-top: 1rem;
  }

  .btn:hover {
    background-color: var(--primary-color-lighter);
  }

  .page__meta-tag {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background-color: var(--background-color-secondary);
    border-radius: 20px;
    text-decoration: none;
    font-size: 0.85rem;
    margin: 0.25rem;
    transition: all 0.2s ease;
  }

  .page__meta-tag:hover {
    background-color: var(--primary-color);
    color: white;
  }
</style>
