# Portfolio Website Testing

## 1. Overview

This document records the planned and completed testing for Cameron Wentink's personal portfolio website as part of the NJIT SDET 101 course. It describes the checks used to assess functionality, responsive layout, accessibility, HTML validity, and browser behavior. Results are marked only after they have been performed and verified.

**Live website:** [Portfolio Website](https://cjwentink2004.github.io/portfolio/)

## 2. Functional Testing

Functional testing checks that the five site pages open, navigation points to the intended pages, available project and contact links work, and JavaScript features behave as intended. The JavaScript currently provides a mobile navigation menu, including Escape-to-close behavior, and a demo contact form that validates fields but does not send messages.

## 3. Responsive Design Testing

The website is tested at desktop, tablet, and mobile viewport sizes. These checks assess whether the page layout adapts to different widths, navigation remains usable on small screens, and text, images, and other content fit within the viewport without unwanted horizontal scrolling.

### Responsive Design Test Results

Initial mobile testing was performed at a viewport width of 320px. Text was readable, images displayed correctly, and scrolling worked normally without unwanted horizontal scrolling. Navigation was also tested, and all five pages opened correctly. Additional testing at desktop and tablet viewport sizes remains pending.

## 4. Accessibility Testing

Accessibility testing checks that each page has an appropriate main heading, images have useful alternative text, and site controls can be reached and used with a keyboard. Text readability, color contrast, and accessible names for interactive elements should also be reviewed.

Google Lighthouse accessibility audits are used to evaluate accessibility, with a target score of at least 90. Scores are recorded only after the relevant audit has been performed.

## 5. HTML and Browser Testing

Validate all five HTML files with the [W3C HTML Validator](https://validator.w3.org/). Check the browser console for JavaScript errors. Confirm that the live GitHub Pages site displays the latest committed changes.

## 6. Test Results

Initial testing has been completed for page navigation, mobile layout at 320px wide, and Lighthouse accessibility on the homepage. Other tests remain pending until they are performed and their results recorded.

### Functional Tests

| Test | Expected Result | Actual Result | Status |
|---|---|---|---|
| Home page (`index.html`) loads | Home page content and shared navigation display without errors. | Opened successfully during navigation testing. | PASS |
| About page (`about.html`) loads | About page content and shared navigation display without errors. | Opened successfully during navigation testing. | PASS |
| Projects page (`projects.html`) loads | Projects page and project images display without errors. | Opened successfully during navigation testing. | PASS |
| Skills page (`skills.html`) loads | Skills page content and shared navigation display without errors. | Opened successfully during navigation testing. | PASS |
| Contact page (`contact.html`) loads | Contact page and contact information display without errors. | Opened successfully during navigation testing. | PASS |
| Navigation links | Each navigation link opens the matching Home, About, Projects, Skills, or Contact page. | Navigation between all five pages was tested successfully. | PASS |
| Project links | Any supplied project links open their intended destinations. | Not tested. Current project cards display "No project link provided," so there are no project destination links to verify yet. | PENDING |
| Contact links | Email link opens an email composition action; LinkedIn link opens the intended profile. | Not tested yet. | PENDING |
| Mobile navigation menu | Menu button opens and closes navigation; Escape closes an open menu and returns focus to the button; choosing a link closes the menu. | Not tested yet. | PENDING |
| Demo contact form | Empty or invalid fields show the appropriate validation message and focus the invalid field; valid fields show that the demo cannot send messages. | Not tested yet. | PENDING |

### Responsive Design Tests

| Test | Expected Result | Actual Result | Status |
|---|---|---|---|
| Desktop viewport | Layout uses available desktop width and content remains readable. | Not tested yet. | PENDING |
| Tablet viewport | Layout adjusts to tablet width without clipped or overlapping content. | Not tested yet. | PENDING |
| Mobile viewport | Layout adapts to a narrow screen and navigation remains usable. | Tested at 320px wide. Text was readable, images displayed correctly, and the layout remained usable. | PASS |
| Horizontal overflow | Text, images, and other content fit within the viewport without unwanted horizontal scrolling at tested widths. | No unwanted horizontal scrolling was observed at 320px wide. | PASS |

### Accessibility Tests

| Test | Expected Result | Actual Result | Status |
|---|---|---|---|
| Main heading on each page | Each page has one appropriate `<h1>`. | Not tested yet. | PENDING |
| Image alternative text | Informative images have accurate, useful `alt` text. | Not tested yet. | PENDING |
| Keyboard navigation | Navigation and form controls can be reached and used by keyboard, with visible focus. | Not tested yet. | PENDING |
| Text readability and color contrast | Text is readable and foreground/background contrast is sufficient. | Not fully tested. | PENDING |
| Accessible names | Buttons, links, and other interactive controls have clear accessible names. | Not tested yet. | PENDING |
| Google Lighthouse accessibility audit | Accessibility score is recorded; target is at least 90. | Desktop homepage accessibility score: 100/100. Mobile homepage accessibility score: 99/100. Target achieved on both audits. | PASS |

*Note: Lighthouse scores above apply only to the homepage. The other four pages have not yet been audited.*

### HTML and Browser Tests

| Test | Expected Result | Actual Result | Status |
|---|---|---|---|
| W3C HTML validation | All five HTML files validate without markup errors, or reported issues are documented. | Not tested yet. | PENDING |
| Browser console | No JavaScript errors occur while using the site features. | Not tested yet. | PENDING |
| Live GitHub Pages update | The live site reflects the latest committed project changes. | Not yet verified against the latest committed changes. | PENDING |

## 7. Issues and Fixes

Initial testing found no issues during the reported mobile layout and navigation checks. The desktop homepage accessibility score was 100/100, and the mobile homepage accessibility score was 99/100.

Additional testing remains in progress. Any issues discovered will be documented here along with their fixes.