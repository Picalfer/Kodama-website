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

// Получаем модальное окно и кнопку закрытия
var figmaModal = document.getElementById("figma-modal");
var span = document.getElementsByClassName("close")[0];

// Функция открытия модального окна
function openFigmaModal() {
  figmaModal.style.display = "block";
}

// Функция закрытия модального окна при клике на крестик
span.onclick = function () {
  figmaModal.style.display = "none";
}

// Закрытие модального окна при клике за его пределами
window.onclick = function (event) {
  if (event.target == figmaModal) {
    figmaModal.style.display = "none";
  }
}

// submit app section
// Получаем элементы формы
const courseSelect = document.getElementById('course-select');
const submitForm = document.getElementById('submit-app-content');
const formInputs = document.querySelectorAll('#submit-app-block input');
const submitAppTitle = document.getElementById('submit-app-title')
const submitAppPhoto = document.getElementById('submit-app-photo')

// Добавляем обработчик события change
courseSelect.addEventListener('change', changeBackground);

// Функция для изменения фона в зависимости от выбранного варианта
function changeBackground() {
  const selectedCourse = courseSelect.value;

  // Определяем цвет фона в зависимости от выбранного курса
  let backgroundColor;
  let inputBackgroundColor;
  let backgroundColorTransparent;
  let titleColor;

  switch (selectedCourse) {
    case 'roblox':
      backgroundColor = '#FFC75C'; // Желтый цвет для Figma
      inputBackgroundColor = '#FFFFE0'; // Более блеклый цвет для областей ввода информации
      backgroundColorTransparent = 'rgba(255, 199, 92, 0.5)';
      titleColor = '#410E6A'
      submitAppPhoto.src = 'res/icon/roblox_submit.png'
      break;
    case 'computer-literacy':
      backgroundColor = '#41EAD4'; // Зеленый цвет для Компьютерной грамотности
      inputBackgroundColor = '#E0FFF3'; // Более блеклый цвет для областей ввода информации
      backgroundColorTransparent = 'rgba(65, 234, 212, 0.5)';
      titleColor = '#410E6A'
      submitAppPhoto.src = 'res/icon/comp_lit_submit.png'
      break;
    case 'scratch':
      backgroundColor = '#6E65FF'; // Фиолетовый цвет для Scratch
      inputBackgroundColor = '#F0E7FF'; // Более блеклый цвет для областей ввода информации
      backgroundColorTransparent = 'rgba(110, 101, 255, 0.5)';
      titleColor = '#FFC75C'
      submitAppPhoto.src = 'res/icon/scratch_submit.png'
      break;
    case 'figma':
      backgroundColor = '#FF6E6E'; // Красный цвет для Roblox
      inputBackgroundColor = '#FFE0E0'; // Более блеклый цвет для областей ввода информации
      backgroundColorTransparent = 'rgba(255, 110, 110, 0.5)';
      titleColor = '#410E6A'
      submitAppPhoto.src = 'res/icon/figma_submit.png'
      break;
    default:
      backgroundColor = '#ffffff'; // Белый цвет по умолчанию
      inputBackgroundColor = '#f8f9fa'; // Светло-серый цвет для областей ввода информации
      backgroundColorTransparent = '#2E3038';
      titleColor = '#410E6A'
      submitAppPhoto.src = 'res/icon/figma_submit.png'
  }

  // Устанавливаем цвет фона для элемента выбора курса
  courseSelect.style.backgroundColor = backgroundColor;

  // Устанавливаем цвет фона для всей формы с изменением прозрачности
  submitForm.style.backgroundColor = backgroundColorTransparent;

  // Устанавливаем цвет фона для областей ввода информации
  formInputs.forEach(input => {
    input.style.backgroundColor = inputBackgroundColor;
  });

  submitAppTitle.style.color = titleColor;
}

document.getElementById('submit-app-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Предотвращаем стандартное поведение формы

  var courseSelect = document.getElementById("course-select");
  var name = document.getElementById("name").value;
  var selectedCourse = courseSelect.options[courseSelect.selectedIndex].text;
  document.getElementById("lead-title").value = name + " " + selectedCourse;

  var formData = new FormData(this);

  fetch('https://kodama.bitrix24.ru/rest/1/aya08q7mvcwmttf6/crm.lead.add.json', {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      // Проверка, что result присутствует и не undefined
      if (data.result !== undefined) {
        showSubmitAppModal("Данные успешно отправлены! ID лида: " + data.result);
      } else {
        showSubmitAppModal("Данные отправлены, но ID лида не получен.");
      }
    })
    .catch(error => {
      // Обработка ошибки
      showSubmitAppModal("Произошла ошибка при отправке данных.");
    });
});

function showSubmitAppModal(message) {
  document.getElementById('submit-app-modal-message').textContent = message;
  document.getElementById('submit-app-modal').style.display = 'flex';
}

function closeSubmitAppModal() {
  document.getElementById('submit-app-modal').style.display = 'none';
}