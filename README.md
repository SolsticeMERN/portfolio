# Shakil Sarker — Personal Portfolio Website

A premium, modern personal portfolio website built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**, designed following a dark editorial aesthetic inspired by high-end Webflow design systems.

Designed specifically for BDJobs profiles, corporate recruiter reviews, digital marketing roles, banking & institutional opportunities, and academic research presentations.

---

## 🌟 Visual & Architectural Highlights

- **Dark Editorial Aesthetic**: Deep charcoal (`#171A1F`), slate containers (`#20252D`), rich cards (`#292F39`), and selective electric blue accents (`#3478F6`).
- **Signature Eyebrow Styling**: All section labels feature the iconic `/ SECTION_NAME` blue slash prefix matching the design reference.
- **Asymmetrical Editorial Hero**:
  - Confident typography: *"Curious Mind. Purposeful Work. Continuous Growth."*
  - Authentic studio portrait with soft dark edge blending.
  - Interactive portrait switcher (allows toggling between 3 supplied studio portraits live).
  - Editorial quick-info cards (`ABOUT ME`, `MY WORK`, `LOCATION: Bangladesh` + social links).
  - Electric blue circular scroll-down button and CTA actions.
- **Interactive Competency Carousel**:
  - Horizontal scrollable carousel with circular dark prev / blue next buttons.
  - Filter tabs: All, Digital Marketing, Research & Business, Professional Skills.
  - Understated cards with icon badges, scope tags, and micro accent lines.
- **Staggered Project Gallery**:
  - Asymmetrical editorial grid with offset card columns.
  - Rich custom vector mockups representing B2B lead generation, academic research, paid ad architecture, SEO audits, and international client operations.
  - Interactive case study modal detailing Context, Challenge, Methodology, and Outcomes.
- **Dedicated Academic Publication Spotlight**:
  - Highlighted presentation of *"Effect of Student-Centered Teaching on Mathematics Performance at Secondary Level"* (Published 12 September 2024).
  - Direct ResearchGate button, quasi-experimental methodology breakdown, and interactive citation copy button.
- **Extracurricular & Leadership Showcase**:
  - University Men's Cricket & Volleyball captaincy.
  - Trainer for University Women's Volleyball Team.
  - Highlighted 3-consecutive-year university tour coordination (70–80 delegates per year).
  - Debates, school programs, and multi-sport athletic medals and certificates.
- **Academic Foundation**:
  - Refined entries for Master of Arts (MA) and Bachelor of Education (B.Ed.) in Science Education.
- **Contact & Footer System**:
  - Editorial form with live validation and mail client launcher.
  - Copy email button and direct download for official resume.
  - Profile card banner matching the inspiration design with avatar, title, email, location, and social links.
  - Minimal footer with dynamic copyright year and back-to-top button.

---

## 📁 Project Structure

```text
Portfolio/
├── public/
│   ├── favicon.svg                  # Modern vector favicon
│   ├── Shakil_Sarker_Resume.pdf     # Downloadable resume document
│   ├── resume.pdf                   # Alias for resume downloads
│   └── images/
│       ├── portrait-main.png        # Studio portrait 1
│       ├── portrait-2.png           # Studio portrait 2
│       ├── portrait-3.png           # Studio portrait 3
│       └── projects/                # Custom dark UI vector mockups
│           ├── b2b-leadgen.svg
│           ├── meta-google-ads.svg
│           ├── math-research.svg
│           ├── seo-audit.svg
│           └── client-operations.svg
├── src/
│   ├── types/
│   │   └── portfolio.ts             # TypeScript interfaces for all data models
│   ├── data/
│   │   └── portfolioData.ts         # Centralized profile and project content
│   ├── components/
│   │   ├── Navbar.tsx               # Responsive navbar with active state indicator
│   │   ├── Hero.tsx                 # Asymmetric hero with portrait switcher & quick info
│   │   ├── About.tsx                # Narrative, credentials, and entity badges
│   │   ├── Experience.tsx           # Vertical timeline (SJ Innovation & Freelance)
│   │   ├── Skills.tsx               # Carousel and category filter tabs
│   │   ├── Projects.tsx             # Staggered project cards
│   │   ├── ProjectModal.tsx         # Detailed case study dialog
│   │   ├── Research.tsx             # Academic publication spotlight & citation tool
│   │   ├── Leadership.tsx           # Athletics captaincy & tour leadership
│   │   ├── Education.tsx            # MA & B.Ed. credentials
│   │   ├── Contact.tsx              # Contact form & profile banner card
│   │   ├── Footer.tsx               # Minimal footer with back-to-top
│   │   └── LinkedInIcon.tsx         # Pixel-perfect LinkedIn SVG
│   ├── App.tsx                      # Root component with reading progress indicator
│   ├── index.css                    # Tailwind CSS v4 design tokens and styling
│   └── main.tsx                     # React application entry
├── index.html                       # SEO metadata, Open Graph tags & Google Fonts
├── vite.config.ts                   # Vite configuration with Tailwind v4 plugin
└── package.json                     # Project scripts and dependencies
```

---

## 🛠️ Development & Deployment

### Run Locally
```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Start local development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`, ready to deploy to **Vercel**, **Netlify**, **GitHub Pages**, or **Cloudflare Pages**.

---

## ✏️ How to Customize Your Content

All personal details, text, and project information are centralized in:
📂 `src/data/portfolioData.ts`

- **Contact Info & Links**: Edit `email`, `linkedin`, `researchGate`, or `location` in `profileData`.
- **Education Fields**: Update institution names, passing years, or CGPA in `educationData`.
- **Replacing Resume**: Replace `public/Shakil_Sarker_Resume.pdf` with your updated official resume PDF.
- **Portraits**: You can drop any new image into `public/images/` and update paths in `profileData.portraits`.
