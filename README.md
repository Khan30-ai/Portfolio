Act as a Senior Frontend Developer. Build a minimal, dark-themed 404 Error Page component (PageNotFound.jsx) using React and Tailwind CSS. It must seamlessly match the premium "coder website" and terminal/IDE aesthetic we established for the portfolio.

### Design & Theme Specifications:
- Backdrop & Grid: Maintain the solid midnight dark background (#060606) with crisp, high-contrast typography and subtle dark-grey borders (1px solid #27272a).
- Accent Color: Use the same signature terminal green (#10B981) or an amber/red warning color code sparingly for status flags.
- Layout: Perfectly centered, clean layout. Absolutely NO massive cartoonish 3D graphics, generic illustrations, or colorful neon gradient blobs. Keep it strictly alphanumeric and utilitarian.

### Content & Fun Coder Elements:
1. System Status Header: 
   - A clean top-bar tag like: `[SYSTEM_STATUS // FATAL_ERROR]` or `• ERROR_404` with a small red/amber indicator dot.
2. The Headline:
   - Make it punchy and code-centric: `status_code_404: ROUTE_NOT_FOUND` or `panic: segment_fault`.
3. Fun / Subtle Dev Text:
   - Include a short, witty developer message: "Looks like you reached a dead-end abstraction or pushed a broken reference to production. This path doesn't exist in the current build."
4. Interactive Terminal/Code Mockup:
   - Show a small, styled read-only block that looks like a stack trace or terminal log snippet:
     ```bash
     $ GET /invalid-route
     > Checking local routing tables...
     > Error: Mapping failed. Component execution halted.
     ```
5. Navigation Action:
   - A clean monospace link/button to return home safely: `> cd /home` or `[ RETURN_TO_CLUSTER ]` that maps back to the root route (`/`). Ensure it has an explicit cursor-pointer behavior.

### Code Quality:
- Deliver clean, modular React code wrapped with standard HTML5 semantic elements.
- Ensure the code uses absolute vanilla Tailwind CSS utility classes without external heavy animation packages.
- Must be perfectly responsive and light-weight.