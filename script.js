// Получаем все кнопки меню
const menuButtons = document.querySelectorAll('.menu a');
const selectCourseButton = document.getElementById('select-course-btn');
const logo = document.getElementById('logo-link');

logo.addEventListener('click', function (event) {
  event.preventDefault();

  const targetElement = document.getElementById('top-site');

  targetElement.scrollIntoView({ behavior: 'smooth' });
});


menuButtons.forEach(button => {
  button.classList.add('menu-button-no-scrolled');
});

// Для каждой кнопки меню добавляем обработчик события при нажатии
menuButtons.forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault(); // Предотвращаем стандартное поведение ссылки

    // Получаем id раздела, к которому нужно прокрутить страницу
    const targetId = button.getAttribute('href').substring(1);

    // Получаем элемент, к которому нужно прокрутить страницу
    const targetElement = document.getElementById(targetId);

    // Плавно прокручиваем страницу к элементу
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

selectCourseButton.addEventListener('click', function (event) {
  event.preventDefault();

  const targetElement = document.getElementById('courses');

  targetElement.scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('mousemove', function (event) {
  const squares = document.querySelectorAll('.square');

  squares.forEach(function (square) {
    const speed = parseInt(square.getAttribute('data-speed'));
    const x = (window.innerWidth - event.pageX * speed) / 100;
    const y = (window.innerHeight - event.pageY * speed) / 100;

    square.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
  });
});

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
  var menuToggle = document.getElementById('menu-toggle');
  var mobileMenu = document.getElementById('mobile-menu');
  var closeButton = document.getElementById('close-menu-btn');
  var menuButton = document.getElementById('menu-btn');
  var navLinks = document.querySelectorAll('#nav-mobile-menu a');

  // Функция для закрытия меню
  function closeMenu() {
    mobileMenu.style.display = 'none';
    menuButton.style.display = 'block';
  }

  // Функция для открытия меню
  function openMenu() {
    mobileMenu.style.display = 'block';
    menuButton.style.display = 'none';
  }

  // Привязываем событие клика к кнопке открытия меню
  menuToggle.addEventListener('click', function () {
    openMenu();
  });

  // Привязываем событие клика к кнопке закрытия меню
  closeButton.addEventListener('click', function () {
    closeMenu();
  });

  // Привязываем событие клика к каждой ссылке в меню
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
