# React Portfolio

A lightweight React + Vite portfolio built for showcasing work, projects, and contact details. Dark, terminal-inspired theme with a custom "tick line" divider as the signature visual element.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

## Project structure

```
src/
├── components/
│   ├── Hero.jsx        → name, tagline, links
│   ├── Bio.jsx          → about + timeline
│   ├── Projects.jsx     → maps data/projects.js → ProjectCard
│   ├── ProjectCard.jsx  → single project display
│   ├── Interests.jsx    → short personality section
│   └── Footer.jsx       → socials
├── data/
│   └── projects.js      → edit this to add/change projects
├── App.jsx              → assembles the page
├── main.jsx             → React entry point
└── index.css            → design tokens + all styles
```

## Where to make it yours

1. **`src/data/projects.js`** — add real GitHub/live links as you deploy things.
2. **`src/components/Hero.jsx`** — swap the tagline for your own words.
3. **`src/components/Interests.jsx`** — edit the list.
4. **`src/index.css`** — the `:root` block at the top has every color and
   font as a variable. Change them there and the whole site updates.

### Add project screenshots

Put each screenshot in `public/project-images/`, then set its public path in
`src/data/projects.js`:

```js
image: '/project-images/stylemate.png',
```

The current project entries expect `stylemate.png` and
`personal-website-v1.png`. The image is displayed at the top of each project
card and cropped to a consistent preview size.

## Next steps once this feels solid

- Add Framer Motion for scroll-reveal animations on each section
  (`npm install framer-motion`, wrap sections in `<motion.section>`).
- Add a contact form or email link in the footer.
- Once you've covered `useEffect`, consider a small "currently reading /
  currently building" widget that pulls from a JSON file or API.
