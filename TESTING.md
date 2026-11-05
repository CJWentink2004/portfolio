# Portfolio Website Testing

## Test setup

The updated source was checked in a local browser preview at `http://127.0.0.1:8765/`. The public site is `https://cjwentink2004.github.io/portfolio/`. The live site was inspected before the local changes and still showed the old project placeholders, so live deployment checks and final live Lighthouse scores are pending.

Every result below records the expected outcome, what was actually observed, and its status. A score is recorded only after an audit has completed.

## Functional tests

| Test case | Expected result | Actual result | Status |
|---|---|---|---|
| Home page (`index.html`) | Loads with the home content and shared navigation. | Loaded in the local browser preview. | PASS |
| About page (`about.html`) | Loads with the about content and shared navigation. | Loaded in the local browser preview. | PASS |
| Projects page (`projects.html`) | Loads with three project cards and their images. | Loaded in the local browser preview; all three project images loaded. | PASS |
| Skills page (`skills.html`) | Loads with the skills content and shared navigation. | Loaded in the local browser preview. | PASS |
| Contact page (`contact.html`) | Loads with contact details, email link, and clearly identified local-only form. | Loaded in the local browser preview; the email link and local-validation notice are present. | PASS |
| Shared navigation | Each page provides relative links to Home, About, Projects, Skills, and Contact. | The five pages loaded and shared navigation was present on each; a mobile Home-to-Projects navigation was followed and closed the menu. | PASS |
| Project content and links | Each project has a complete description; placeholder text and unsupported project links are absent. | Three descriptions explain the design/manufacturing work; project cards contain no placeholder text and no external links. | PASS |
| Project image alternatives | Each project image has accurate, descriptive alternative text. | All three images loaded; their descriptions were checked against the images. | PASS |
| Contact email link | The email link uses the intended `mailto:` address. | The page retained `mailto:cameronwentink@gmail.com`. | PASS |
| Browser console and requests | No JavaScript errors, page errors, or failed local requests occur during testing. | No console errors, page errors, or failed requests occurred during the five-page responsive and interaction checks. | PASS |

## Responsive and interaction tests

| Test case | Expected result | Actual result | Status |
|---|---|---|---|
| Responsive layout | All five pages fit at mobile, tablet, and desktop viewport widths. | Checked each page at 320, 390, 768, 1024, and 1440 pixels wide. | PASS |
| Horizontal overflow | No tested page has horizontal scrolling at the tested widths. | No horizontal overflow was detected on any page at any of the five widths. | PASS |
| Mobile menu open and close | The menu button opens and closes the navigation and keeps `aria-expanded` in sync. | The menu opened, then Escape closed it and reset `aria-expanded`; selecting Projects also closed it. | PASS |
| Escape focus return | Escape closes the open menu and returns focus to the menu button. | Verified that focus returned to the menu button after Escape. | PASS |
| Contact form empty-name validation | Empty name shows a helpful message and focuses the name field. | The form displayed “Please enter your name.” and focused the name field. | PASS |
| Contact form invalid-email validation | Invalid email shows a helpful message and focuses the email field. | The form displayed “Please enter a valid email address.” and focused the email field. | PASS |
| Contact form valid local-only result | Valid fields show that the demo does not send messages. | The form displayed that it cannot send messages and directed visitors to the email link. | PASS |

## Accessibility and document tests

| Test case | Expected result | Actual result | Status |
|---|---|---|---|
| One main heading per page | Each page contains exactly one `<h1>`. | Browser checks found exactly one `<h1>` on each of the five pages. | PASS |
| Semantic landmarks | Each page uses `header`, `nav`, `main`, and `footer`. | All four landmarks were present on all five pages. | PASS |
| Stylesheet and inline styles | Each page uses one external stylesheet and no inline style attributes. | All five pages loaded one external stylesheet; none contained inline style attributes. | PASS |
| Lighthouse Accessibility — Home | Mobile Accessibility score is at least 90/100. | Not yet audited against the updated live deployment. | PENDING |
| Lighthouse Accessibility — About | Mobile Accessibility score is at least 90/100. | Not yet audited against the updated live deployment. | PENDING |
| Lighthouse Accessibility — Projects | Mobile Accessibility score is at least 90/100. | Not yet audited against the updated live deployment. | PENDING |
| Lighthouse Accessibility — Skills | Mobile Accessibility score is at least 90/100. | Not yet audited against the updated live deployment. | PENDING |
| Lighthouse Accessibility — Contact | Mobile Accessibility score is at least 90/100. | Not yet audited against the updated live deployment. | PENDING |
| HTML validation | All five pages pass an HTML validator, or any findings are documented. | A W3C validator run has not yet been completed. | PENDING |
| Live deployment | The public site serves the updated content and assets. | The live site was checked before the updates and still showed the old project placeholders; recheck after deployment. | PENDING |

## Issues and fixes

- Removed the project-page text that said photos/details would be added later, the “No project link provided” labels, and the note below the cards. The cards now omit project link lines because no destinations were supplied.
- Rewrote the three project descriptions and made each image's alternative text more specific to the visible content.
- Removed inline styles and moved the contact profile spacing into `style.css`.
- A pre-fix mobile Lighthouse audit of the published home page scored 95/100 and flagged muted text on the pale section background for insufficient contrast. The shared muted color was darkened from `#65748a` to `#5d6b80`; audit the deployed pages to confirm the final scores.
- Kept the contact form and its visible notice that it validates locally only and does not send messages. The email link remains available.
