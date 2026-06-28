# Arshi Khan // Full-Stack Engineer
> A clean, utilitarian, and terminal-inspired engineering portfolio. High-contrast layout, minimal footprint, and zero AI-generated design tropes.

This repository houses the complete frontend codebase for my personal engineering portfolio. The interface mimics a premium IDE/terminal dashboard with subtle grid partitions, a high-contrast dark color palette, and code-based interactive blocks.

---

## 🛠️ Tech Stack & System Architecture

### Frontend & Core Layout
* **Framework:** React 19 (Vite-driven build architecture)
* **Styling:** Tailwind CSS v4 (Using pure CSS variables mapped natively within `@theme`)
* **Iconography:** Lucide React (Crisp, vector-based glyphs)
* **Routing:** React Router DOM v6

### Design Pattern Specifications
* **Colorway:** Deep Midnight Black (`#060606`) background paired with clean Slate/Zinc typography (`#f4f4f5`) and custom structural border lines (`#27272a`).
* **Accentuation:** Low-overhead Terminal Green (`#10B981`) selectively used for execution indicators and hover interactions.
* **Typography:** Strict sans/mono hybrid stack featuring **Inter** for structural headers and text layout, alongside **JetBrains Mono** for status logs and variables.

---

## 📂 Project Structure

```bash
Directory structure:
└── khan30-ai-portfolio/
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── src/
        ├── App.css
        ├── App.jsx
        ├── Home.jsx
        ├── index.css
        ├── main.jsx
        └── components/
            ├── ScrollToTop.jsx
            └── sections/
                ├── About.jsx
                ├── ContactFooter.jsx
                ├── Education.jsx
                ├── GridSection.jsx
                ├── Hero.jsx
                ├── Navbar.jsx
                ├── ProjectCard.jsx
                ├── ProjectSection.jsx
                ├── TechStack.jsx
                └── Writing.jsx
