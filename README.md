# Personal Engineering Portfolio

A lightweight, responsive portfolio built with plain HTML, CSS, and JavaScript. It is ready to host from the root of a GitHub Pages repository.

**Live site:** [https://cjwentink2004.github.io/portfolio/](https://cjwentink2004.github.io/portfolio/)

## Pages

- `index.html` — Home
- `about.html` — About me
- `projects.html` — Project cards with local project images
- `skills.html` — Skills by category
- `contact.html` — Email contact prompt and client-side form demo

Shared styling and the small-screen navigation/form behavior live in `style.css` and `script.js`. Project image guidance is in `assets/README.md`.

## Preview locally

Open `index.html` in a browser, or run a local static server from this folder. For example, with Python installed:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`. Stop the server with Ctrl+C.

## Check with Chrome Lighthouse

1. Start the local server as above and open `http://localhost:8000` in Chrome.
2. Open DevTools with F12 or Ctrl+Shift+I, then select the **Lighthouse** panel. If it is not visible, open it from the DevTools `»` menu.
3. Select **Mobile** (and optionally repeat with **Desktop**) and the **Accessibility** category, then choose **Analyze page load**.
4. Review the Accessibility audit details and fix any reported issues. Repeat on `about.html`, `projects.html`, `skills.html`, and `contact.html` as well as the home page.

The target is an Accessibility score of at least 90 on each page. Record each page's Lighthouse Accessibility result in `TESTING.md`; do not treat an unrun audit as a passing score.

## Project images and links

The project entries describe custom jewelry design, CNC workholding, and injection-mold machining. Images are stored in `assets/` and referenced with relative paths. No external project URLs are provided, so project cards omit link lines. The contact page retains the email address and LinkedIn profile link.

The contact page publishes `cameronwentink@gmail.com`. Its demo form validates fields in the browser but does not send messages; visitors should use the email link.
