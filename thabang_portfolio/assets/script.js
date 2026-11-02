document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.year').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? '✕' : '☰';
    });
  }

  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const data = new FormData(form);
      const subject = encodeURIComponent(data.get('subject'));
      const body = encodeURIComponent(
        `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`,
      );
      const recipient = 'your.email@example.com'; // Replace with your real email address.

      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    });
  }
});