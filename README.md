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
Portfolio/
├── src/
│   ├── components/
│   │   └── portfolio/
│   │       ├── Navbar.jsx              # Minimal fixed navigation layer with resume download
│   │       ├── HeroSection.jsx          # Alphanumeric main presentation block
│   │       ├── AboutSection.jsx         # System abstraction profile copy
│   │       ├── TechStackSection.jsx     # Structural technology matrix
│   │       ├── EducationSection.jsx     # Academic timelines grid
│   │       ├── ProjectsSection.jsx      # Root component for project portfolio orchestration
│   │       ├── ProjectCard.jsx          # Individual atomic project renderer
│   │       ├── WritingsSection.jsx      # Technical thoughts & Medium deep-dive articles list
│   │       └── ContactFooter.jsx       # Variable-declaration code style contact wrapper
│   ├── pages/
│   │   ├── Home.jsx                    # Root view rendering structural components sequentially
│   │   └── PageNotFound.jsx            # Custom 404 terminal panic page component
│   ├── App.jsx                         # Main app router deployment layout
│   ├── index.css                       # Native CSS layer compiling Tailwind variables
│   └── main.jsx                        # DOM entry point
├── package.json                        # System dependency registry
└── vite.config.js                      # Vite build pipeline matrix
