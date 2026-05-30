# Personal Website — EEE Student Portfolio

A minimalist modern personal website for an Electrical & Electronic Engineering student. Built with pure HTML, CSS, and JavaScript — no frameworks, no build tools.

## 📁 File Structure

```
├── index.html          # Single-page website (all sections)
├── css/
│   └── style.css       # Design system + all styles
├── js/
│   └── main.js         # Interactive features
├── assets/             # Images and documents
│   ├── profile.jpg     # Your profile photo (180×180px recommended)
│   ├── project-1.jpg   # Project thumbnails (16:9 aspect ratio)
│   ├── project-2.jpg
│   ├── project-3.jpg
│   ├── project-4.jpg
│   └── cv.pdf          # Your CV/resume file
└── README.md           # This file
```

## 🎨 Design System

The website uses a **"Warm Technical Minimal"** design system:

- **Background**: Warm off-white (`#FAF7F2`) — not pure white, feels approachable
- **Accent**: Deep teal (`#0A7E8C`) — references oscilloscope/PCB aesthetics
- **Typography**: Inter (headings/body) + JetBrains Mono (tech tags)
- **All colors and spacing** are defined as CSS custom properties in `:root`, so you can change the entire look by editing just the variables at the top of `css/style.css`

### How to Change the Accent Color

Open `css/style.css` and find the `:root` block at the top. Change these three values:

```css
--color-accent:          #0A7E8C;   /* Main accent color */
--color-accent-light:    #B8E4E0;   /* Light tint (tags, skill bars) */
--color-accent-hover:    #096B78;   /* Hover state */
```

The entire website will update automatically.

## ✏️ How to Edit Content

All placeholder content is marked with `<!-- TODO -->` comments in `index.html`. Search for `TODO` to find every item that needs replacement.

### Replace Your Name

Search for "Your Name" and replace with your actual name. It appears in:
- `<title>` tag
- `.nav-logo`
- `.hero-greeting`
- Footer copyright

### Replace Personal Information

In the **About** section (`#about`):
- Edit paragraphs to describe your actual background and interests
- Update Quick Facts (location, year, languages)

### Update Skills

In the **Skills** section (`#skills`):
- Edit skill names, `data-target-width` values (percentage), and level labels
- `data-target-width` controls how far the progress bar fills (e.g., `75` = 75%)
- Add/remove `.skill-item` blocks as needed

### Update Projects

In the **Projects** section (`#projects`):
- Replace project titles, descriptions, and tech tags with your real projects
- Add real screenshots/photos to `assets/` and update `<img src>` paths
- Add/remove `.project-card` blocks as needed

### Update Internship Experience

In the **Internship** section (`#internship`):
- Replace company names, dates, descriptions, and highlight tags
- Add/remove `.timeline-item` blocks as needed

### Update Education

In the **Education** section (`#education`):
- Replace university name, degree, dates, GPA, and course tags
- Add/remove `.education-item` blocks as needed

### Add Your Profile Photo

1. Place your photo in `assets/profile.jpg` (recommended: 180×180px, square crop)
2. Remove the `onerror` fallback attribute from the `<img>` tag if you have a real image

### Add Your CV

1. Place your PDF CV in `assets/cv.pdf`
2. The "Download CV" button already links to this path

## 🚀 Deployment to GitHub Pages

1. Create a new GitHub repository (e.g., `yourusername.github.io`)
2. Push all files to the repository:
   ```bash
   cd "/path/to/this/project"
   git init
   git add .
   git commit -m "Initial commit: personal website"
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```
3. Go to **Settings → Pages** in your GitHub repo
4. Set **Source** to "Deploy from a branch" → select `main` branch → `/ (root)`
5. Your site will be live at `https://yourusername.github.io`

## 🧪 Testing Locally

Simply open `index.html` in your browser. No server or build step required.

Test these features:
1. ✅ Navigation links scroll smoothly to each section
2. ✅ Current section is highlighted in the navigation bar (scroll-spy)
3. ✅ Skill progress bars animate when you scroll to the Skills section
4. ✅ Sections fade in as you scroll down
5. ✅ Mobile hamburger menu works (resize window to <768px)
6. ✅ All content is visible and properly spaced at all screen sizes

## 📱 Responsive Breakpoints

| Screen Width | Layout |
|-------------|--------|
| < 768px (Mobile) | Single column, hamburger menu, stacked hero |
| 768px–1023px (Tablet) | Two-column hero, 2-col skill grid |
| ≥ 1024px (Desktop) | Full layout, 3-col skill grid, hover effects |

## ♿ Accessibility

- `lang="en"` set on `<html>`
- `aria-label` on navigation and social links
- `aria-current="section"` dynamically set on active nav links
- `focus-visible` outline styling
- Color contrast meets WCAG AA (teal on off-white: 4.5:1+)
- `prefers-reduced-motion` media query disables animations

## 📝 License

This project is for personal use. Feel free to modify and customize it as you wish.