const menuButton = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuButton && siteNav) {
  const setMenuOpen = (isOpen) => {
    menuButton.setAttribute('aria-expanded', String(isOpen));
    siteNav.classList.toggle('is-open', isOpen);
  };

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    setMenuOpen(!isOpen);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });
}

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = document.querySelector('#form-status');
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');
    [name, email, message].forEach((field) => field.setAttribute('aria-invalid', 'false'));

    if (!name.value.trim()) {
      name.setAttribute('aria-invalid', 'true');
      status.textContent = 'Please enter your name.';
      name.focus();
      return;
    }
    if (!email.value.trim() || !email.validity.valid) {
      email.setAttribute('aria-invalid', 'true');
      status.textContent = 'Please enter a valid email address.';
      email.focus();
      return;
    }
    if (!message.value.trim()) {
      message.setAttribute('aria-invalid', 'true');
      status.textContent = 'Please enter a message.';
      message.focus();
      return;
    }

    status.textContent = 'This demo form cannot send messages. Please use the email link on this page instead.';
  });
}
