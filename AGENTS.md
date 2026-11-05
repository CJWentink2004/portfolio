# AGENTS.md

## Site overview
This is Cameron Wentink's personal engineering portfolio, built as a lightweight static site with five pages:

- `index.html` — introduction and links to the portfolio sections
- `about.html` — education, background, interests, and career direction
- `projects.html` — custom jewelry, CNC workholding, and injection-mold projects
- `skills.html` — CAD, manufacturing, measurement, and programming skills
- `contact.html` — email and LinkedIn links plus a client-side validation demo

## Design direction
- Keep the existing clean, professional engineering-portfolio style.
- Use the established dark navy (`#101d32`), blue (`#1768c4`), pale blue, white, and light gray palette.
- Use the system font stack already in `style.css` (`Segoe UI`, Arial, sans-serif); do not add font downloads.
- Preserve the responsive card layouts, clear spacing, and strong text contrast.

## Implementation rules
- Use plain semantic HTML, CSS, and vanilla JavaScript only. Do not add frameworks or unnecessary dependencies.
- Keep `style.css` as the site's single external stylesheet. Do not add inline styles or inline scripts.
- Use relative paths for internal page links, scripts, stylesheets, and local assets.
- Keep one descriptive `<h1>` per page and use the shared `header`, `nav`, `main`, and `footer` landmarks.
- Give every informative image accurate, descriptive alternative text.
- Keep the mobile menu keyboard-accessible, including Escape-to-close and focus return to its button.
- The contact form is a local validation demo only; keep that limitation clear and retain the email link.
- Do not add project links unless a real destination is supplied; omit the link line when none exists.

## Validation
- Check all five pages for navigation, a single `<h1>`, semantic landmarks, and the single external stylesheet.
- Test responsive layouts at mobile, tablet, and desktop widths; check for horizontal overflow and browser-console errors.
- Test the mobile menu and contact form interactions in a browser.
- Record expected result, actual result, and status for every test in `TESTING.md`. Record Lighthouse Accessibility scores page by page; target at least 90.

## Git workflow
- After each completed task, create a commit with a clear, concise message, then push it to GitHub.
- Do not include unrelated user changes in a commit.
