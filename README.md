# Personal Engineering Portfolio

A lightweight, responsive portfolio built with plain HTML, CSS, and JavaScript. It is ready to host from the root of a GitHub Pages repository.

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

The target is an Accessibility score of at least 90. No Lighthouse score has been recorded for this project yet.

## Project images and links

The project entries summarize work Cameron has described. The supplied images are stored in `assets/` and loaded with relative paths. Further project details can be added when available. No external project or LinkedIn profile URLs were provided, so the site does not link to invented destinations. The LinkedIn name is shown as plain text until a profile URL is available.

The contact page publishes `cameronwentink@gmail.com`. Its demo form validates fields in the browser but does not send messages; visitors should use the email link.
