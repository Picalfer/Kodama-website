const menuButtons = document.querySelectorAll('.menu-item');
const mobileMenuButtons = document.querySelectorAll('.mobile-menu-item');
const selectCourseButton = document.getElementById('select-course-btn');
const logo = document.getElementById('logo-link');
const mobileLogo = document.getElementById('mobile-logo-link');

logo.addEventListener('click', function (event) {
  event.preventDefault();

  const targetElement = document.getElementById('top-site');

  targetElement.scrollIntoView({ behavior: 'smooth' });
});

mobileLogo.addEventListener('click', function (event) {
  event.preventDefault();

  const targetElement = document.getElementById('top-site');

  targetElement.scrollIntoView({ behavior: 'smooth' });
});

menuButtons.forEach(button => {
  button.classList.add('menu-button-no-scrolled');
});

menuButtons.forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = button.getAttribute('href').substring(1);

    const targetElement = document.getElementById(targetId);

    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

mobileMenuButtons.forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = button.getAttribute('href').substring(1);

    const targetElement = document.getElementById(targetId);

    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

selectCourseButton.addEventListener('click', function (event) {
  event.preventDefault();

  const targetElement = document.getElementById('courses-section');

  targetElement.scrollIntoView({ behavior: 'smooth' });
});

if (window.innerWidth > 600) {
  document.addEventListener('mousemove', function (event) {
    const squares = document.querySelectorAll('.square');
  
    squares.forEach(function (square) {
      const speed = parseInt(square.getAttribute('data-speed'));
      const x = (window.innerWidth - event.pageX * speed) / 100;
      const y = (window.innerHeight - event.pageY * speed) / 100;
  
      square.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    });
  });
}

function toggleAnswer(id) {
  var answer = document.getElementById(id);
  if (answer.style.display === 'none' || answer.style.display === '') {
    answer.style.display = 'block';
  } else {
    answer.style.display = 'none';
  }
}

const bubbles = document.querySelectorAll('.bubble');

bubbles.forEach(bubble => {
  const size = Math.floor(Math.random() * 10) + 2;
  bubble.style.width = size + 'vw';
  bubble.style.height = size + 'vh';
});

document.addEventListener('DOMContentLoaded', function () {
  var menuToggle = document.getElementById('open-menu-btn');
  var mobileMenu = document.getElementById('mobile-menu');
  var closeButton = document.getElementById('close-menu-btn');
  var menuButton = document.getElementById('open-menu-btn');
  var navLinks = document.querySelectorAll('#nav-mobile-menu a');

  function closeMenu() {
    mobileMenu.style.display = 'none';
    menuButton.style.display = 'block';
  }

  function openMenu() {
    mobileMenu.style.display = 'block';
    menuButton.style.display = 'none';
  }

  menuToggle.addEventListener('click', function () {
    openMenu();
  });

  closeButton.addEventListener('click', function () {
    closeMenu();
  });

  mobileLogo.addEventListener('click', function () {
    closeMenu();
  })

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      closeMenu();
    });
  });
});


window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  var logo = document.querySelector('.logo');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add('header-scrolled');
    logo.classList.add('logo-scrolled');

    menuButtons.forEach(button => {
      button.classList.remove('menu-button-no-scrolled');
    });

    menuButtons.forEach(button => {
      button.classList.add('menu-button-scrolled');
    });

  } else {
    header.classList.remove('header-scrolled');
    logo.classList.remove('logo-scrolled');

    menuButtons.forEach(button => {
      button.classList.remove('menu-button-scrolled');
    });

    menuButtons.forEach(button => {
      button.classList.add('menu-button-no-scrolled');
    });
  }
});
