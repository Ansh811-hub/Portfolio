<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:000000,50:232526,100:414345&height=180&section=header&text=Portfolio&fontSize=50&fontColor=ffffff&animation=fadeIn&fontAlignY=40&desc=Ansh%20Bhardwaj%20%E2%80%94%20Backend%20Systems%20Engineer&descAlignY=62&descSize=16" />

[![Live — Vercel](https://img.shields.io/badge/Live-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-amber-three-42.vercel.app)
[![Live — GitHub Pages](https://img.shields.io/badge/Live-GitHub_Pages-232526?style=for-the-badge&logo=github&logoColor=white)](https://ansh811-hub.github.io/Portfolio/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)](#)

</div>

<br/>

## About

Personal portfolio site — dark, minimal, metrics-first. Built to hold up under a recruiter's first 10 seconds: real numbers up top, real projects with problem/approach breakdowns, real certificates, no filler.

No framework, no build step — hand-written HTML/CSS/JS, deployed to both Vercel and GitHub Pages from the same repo.

<br/>

## Sections

| Section | What's there |
|---|---|
| **Hero** | Animated network-graph canvas background, typewriter role line, résumé download |
| **Metrics ticker** | Scrolling strip — P99 latency, hackathon results, students mentored |
| **Work** | 5 project cards (AEGIS, IntelliFlow AI, StartupOps, Meditrack, ECLYPSE) — problem, approach, stack, quantified metrics |
| **Experience** | Timeline: AWS Student Builder Group Leader, HackerRank Campus Technical Lead, GFG Campus Ambassador, AWS Academy Cloud Virtual Intern |
| **Achievements** | Certificate gallery — Far Away 2026, DECODE SIH 2026, Internal SIH-26, Tech Spardha 2k25, Udyamitsav 2026 — plus a certifications table with Credly-verified links |
| **Contact** | Email, LinkedIn, GitHub, LeetCode, Codeforces, GeeksforGeeks |

<br/>

## Interaction design

- 3D pointer-tracked tilt + radial shine on gallery and certification cards
- Scroll-reveal on every major block, with `prefers-reduced-motion` respected throughout
- Hero name splits into per-character animated spans on load
- Canvas-based node graph in the hero reacts to pointer position and scroll depth, fading out as you scroll past the fold

<br/>

## Stack

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=three.js&logoColor=white)

</div>

Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (labels/metrics) — loaded via Google Fonts. `Three.js` r160 loaded from cdnjs for the hero canvas; everything else is dependency-free.

<br/>

## Structure

```
index.html      Page markup — hero, ticker, work, experience, achievements, contact
styles.css       Design tokens (CSS custom properties) + layout + component styles
script.js        Typewriter, hero name split, scroll reveal, 3D tilt, canvas network background
assets/          resume.pdf goes here — not yet added
*.jpg / *.png    Achievement, certificate, and event photos, referenced directly from root
```

<br/>

## Running locally

No build step — clone and open:

```bash
git clone https://github.com/Ansh811-hub/Portfolio.git
cd Portfolio
python3 -m http.server 8000
# visit http://localhost:8000
```

<br/>

## Known gap

`assets/resume.pdf` doesn't exist yet — both "Download résumé" buttons are dead links until it's added.

<br/>

## Contact

<div align="center">

[![LinkedIn](https://img.shields.io/badge/-Connect_on_LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/ansh-bhardwaj-255368324)
[![Email](https://img.shields.io/badge/-Email_Me-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:anshbhardwaj150507@gmail.com)
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Ansh811-hub)

<br/><br/>

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:414345,100:000000&height=90&section=footer" />

</div>
