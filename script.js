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

document.addEventListener('DOMContentLoaded', function () {
  var menuToggle = document.getElementById('open-menu-btn');
  var mobileMenu = document.getElementById('mobile-menu');
  var closeButton = document.getElementById('close-menu-btn');
  var menuButton = document.getElementById('open-menu-btn');
  var navLinks = document.querySelectorAll('#nav-mobile-menu a');

  function closeMenu() {
    mobileMenu.style.display = 'none';
    menuButton.style.display = 'block';
    document.body.classList.remove('no-scroll'); // Удаляем класс no-scroll
  }

  function openMenu() {
    mobileMenu.style.display = 'block';
    menuButton.style.display = 'none';
    document.body.classList.add('no-scroll'); // Добавляем класс no-scroll
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

// Получаем элементы формы
const courseSelect = document.getElementById('course-select');
const submitForm = document.getElementById('submit-app-content');
const formInputs = document.querySelectorAll('#submit-app-form input');

// Добавляем обработчик события change
courseSelect.addEventListener('change', changeBackground);

// Функция для изменения фона в зависимости от выбранного варианта
function changeBackground() {
  const selectedCourse = courseSelect.value;

  // Определяем цвет фона в зависимости от выбранного курса
  let backgroundColor;
  let inputBackgroundColor;
  let backgroundColorTransparent;
  switch (selectedCourse) {
    case 'figma':
      backgroundColor = '#FFC75C'; // Желтый цвет для Figma
      inputBackgroundColor = '#FFFFE0'; // Более блеклый цвет для областей ввода информации
      backgroundColorTransparent = 'rgba(255, 199, 92, 0.5)';
      break;
    case 'computer-literacy':
      backgroundColor = '#41EAD4'; // Зеленый цвет для Компьютерной грамотности
      inputBackgroundColor = '#E0FFF3'; // Более блеклый цвет для областей ввода информации
      backgroundColorTransparent = 'rgba(65, 234, 212, 0.5)';
      break;
    case 'scratch':
      backgroundColor = '#6E65FF'; // Фиолетовый цвет для Scratch
      inputBackgroundColor = '#F0E7FF'; // Более блеклый цвет для областей ввода информации
      backgroundColorTransparent = 'rgba(110, 101, 255, 0.5)';
      break;
    case 'roblox':
      backgroundColor = '#FF6E6E'; // Красный цвет для Roblox
      inputBackgroundColor = '#FFE0E0'; // Более блеклый цвет для областей ввода информации
      backgroundColorTransparent = 'rgba(255, 110, 110, 0.5)';
      break;
    default:
      backgroundColor = '#ffffff'; // Белый цвет по умолчанию
      inputBackgroundColor = '#f8f9fa'; // Светло-серый цвет для областей ввода информации
      backgroundColorTransparent = 'rgba(255, 255, 255, 0.5)';
  }

  // Устанавливаем цвет фона для элемента выбора курса
  courseSelect.style.backgroundColor = backgroundColor;

  // Устанавливаем цвет фона для всей формы с изменением прозрачности
  submitForm.style.backgroundColor = backgroundColorTransparent;

  // Устанавливаем цвет фона для областей ввода информации
  formInputs.forEach(input => {
    input.style.backgroundColor = inputBackgroundColor;
  });
}
