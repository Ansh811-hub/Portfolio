# Portfolio — Ansh Bhardwaj

Personal portfolio site. Dark, minimal, metrics-first — built to hold up under a recruiter's first 10 seconds.

**Live:** [portfolio-amber-three-42.vercel.app](https://portfolio-amber-three-42.vercel.app) · [ansh811-hub.github.io/Portfolio](https://ansh811-hub.github.io/Portfolio/)

## What's in it

- Hero with an animated network-graph canvas background and a typewriter role line
- Scrolling metrics ticker (P99 latency, concurrent users, hackathon results)
- Project cards: AEGIS, IntelliFlow AI, StartupOps, Meditrack, ECLYPSE — each with problem/approach and quantified metrics
- Experience timeline: AWS Student Builder Group Leader, HackerRank Campus Technical Lead, GFG Campus Ambassador, AWS Academy Cloud Virtual Intern
- Achievements gallery with certificate images (Far Away 2026, DECODE SIH 2026, Internal SIH-26, Tech Spardha, Udyamitsav) and a certifications table with Credly-verified links
- 3D tilt + shine hover effects on gallery/cert cards, scroll-reveal animations, reduced-motion support throughout

## Stack

Plain HTML/CSS/JS — no framework, no build step. `Three.js` (r160) loaded via CDN for the hero canvas graph; everything else is hand-written vanilla JS (`script.js`) and CSS custom properties (`styles.css`).

## Structure

```
index.html       Page markup
styles.css        Design tokens + layout + component styles
script.js         Typewriter, hero name split, scroll reveal, tilt effect, canvas network background
assets/           (resume.pdf goes here — not yet added)
*.jpg / *.png     Achievement, certificate, and event photos referenced directly from root
```

## Known gap

`assets/resume.pdf` doesn't exist yet, so both "Download résumé" buttons are dead links until it's added.

## Contact

[LinkedIn](https://linkedin.com/in/ansh-bhardwaj-255368324) · [anshbhardwaj150507@gmail.com](mailto:anshbhardwaj150507@gmail.com) · [GitHub](https://github.com/Ansh811-hub)
