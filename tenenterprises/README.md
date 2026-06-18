# Ten Enterprises — Site Guide

## Folder Structure

```
tenenterprises/
├── index.html          ← Home page
├── portfolio.html      ← All portfolio projects
├── blog.html           ← All blog posts
├── blog/
│   └── example-post.html   ← Template for each blog post
├── css/
│   └── style.css       ← All styling (do not need to edit)
├── js/
│   └── main.js         ← Site logic (do not need to edit)
├── data/
│   ├── posts.json      ← YOUR BLOG POSTS (edit this to add posts)
│   └── portfolio.json  ← YOUR PORTFOLIO (edit this to add projects)
├── images/
│   ├── logo.jpg        ← Your logo
│   ├── blog/           ← Put blog post images here
│   └── portfolio/      ← Put portfolio screenshots here
└── audio/              ← Put your voice recordings here (.mp3)
```

---

## How to Add a New Blog Post

### Step 1 — Open `data/posts.json`
Add a new entry at the top of the array. Copy this format:

```json
{
  "slug": "my-post-title",
  "title": "My Post Title",
  "date": "18 June 2026",
  "excerpt": "Two sentences that summarise what this post is about.",
  "image": "/images/blog/my-post-title.jpg",
  "audio": "/audio/my-post-title.mp3",
  "content": "Full post content goes here."
}
```

### Step 2 — Add your image
Put the post photo in `/images/blog/` and name it to match the slug.
Example: slug is `my-post-title` → image is `my-post-title.jpg`

### Step 3 — Add your audio
Put your voice recording (.mp3) in `/audio/` and name it to match the slug.
Example: slug is `my-post-title` → audio is `my-post-title.mp3`

### Step 4 — Create the post HTML file
Duplicate `/blog/example-post.html`
Rename it to `/blog/my-post-title.html`
Update the title, date, content, and audio src inside the file.

### Step 5 — Deploy
Upload the updated files to Cloudflare Pages. Done.

---

## How to Add a Portfolio Project

Open `data/portfolio.json` and add a new entry:

```json
{
  "title": "Client Website Name",
  "type": "Web Development",
  "description": "One or two sentences about what you built and what it does.",
  "image": "/images/portfolio/client-name.jpg",
  "url": "https://clientwebsite.com"
}
```

Put the screenshot in `/images/portfolio/` and name it to match.

---

## Colours Used

- Black: `#0A0A0A`
- Blue (accent): `#1A6BFF`
- White: `#FFFFFF`
- Light grey: `#F5F5F5`

---

## Contact Details in the Site

The WhatsApp number used is: **+237 679 764 991**
To change it, search for `wa.me/237679764991` in any HTML file and replace it.

---

Built by Ten Enterprises. 2026.
