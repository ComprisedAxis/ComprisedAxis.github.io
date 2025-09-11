// Hamburger Menu Toggle
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Scroll to top on reload (override browser behavior)
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('beforeunload', function () {
  window.scrollTo(0, 0);
});

// Back to Top Button Logic
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.remove('opacity-0', 'pointer-events-none');
  } else {
    backToTopButton.classList.add('opacity-0', 'pointer-events-none');
  }
});

backToTopButton.addEventListener('click', () => {
  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', () => {
  const scroller = document.getElementById('project-scroller');
  const wrapper  = scroller.parentElement;

  function updateFade() {
    // if scrolled to (or past) the end, hide fade
    if (scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 1) {
      wrapper.classList.add('no-fade');
    } else {
      wrapper.classList.remove('no-fade');
    }
  }

  // run on scroll and on init (in case it’s already fully visible)
  scroller.addEventListener('scroll', updateFade);
  updateFade();
});