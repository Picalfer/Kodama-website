const BITRIX_TOKEN = "6776059462:AAGBGSjQ0y9n4sf3OGRFfPFB7rCjCIF7sok";


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

  if (answer.classList.contains('open')) {
    answer.classList.remove('open');
  } else {
    answer.classList.add('open');
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

// Course modal section

// Получаем модальное окно и кнопку закрытия
var courseModal = document.getElementById("course-modal");
var closeButton = document.getElementsByClassName("close")[0];

// Функция открытия модального окна
function openCourseModal(course) {
  document.body.classList.add('no-scroll');

  const courseModalTitle = document.getElementById('course-modal-title')
  const courseModalSubtitle = document.getElementById('course-modal-subtitle')
  const courseModalDescription = document.getElementById('course-modal-description')
  const courseModalIcon = document.getElementById('course-modal-icon')
  const courseImage1 = document.getElementById('course-image1')
  const courseImage2 = document.getElementById('course-image2')
  const courseFact1 = document.getElementById('course-fact1')
  const courseFact2 = document.getElementById('course-fact2')
  const courseFact3 = document.getElementById('course-fact3')

  switch (course) {
    case 'figma':
      courseModalTitle.textContent = "Графический дизайн";
      courseModalSubtitle.textContent = "в редакторе Figma";
      courseModalDescription.textContent = "Figma — это простая и удобная программа для создания дизайна. Здесь ребенок научится придумывать и рисовать макеты сайтов, приложений и других проектов. Программа работает прямо в браузере, что позволяет легко работать и делиться результатами.";
      courseModalIcon.src = 'res/icon/figma_logo.png';
      courseImage1.src = 'res/icon/course-figma1.png';
      courseImage2.src = 'res/icon/course-figma2.png';
      courseFact1.textContent = 'Идеально подойдет: детям с интересом к дизайну и творчеству.';
      courseFact2.textContent = 'Допустимый возраст: 7-16 лет.';
      courseFact3.textContent = 'Чему научится ребёнок: создавать макеты и прототипы, разрабатывать интерфейсы для веб и мобильных приложений, работать в команде над проектами.';
      break;
    case 'scratch':
      courseModalTitle.textContent = "Создание 2D игр";
      courseModalSubtitle.textContent = "на языке Scratch";
      courseModalDescription.textContent = "Scratch — это визуальная платформа программирования для детей, где они могут создавать игры, мультфильмы и интерактивные истории. Курс помогает развить логическое мышление и креативность, погружая ребёнка в мир программирования в игровой форме.";
      courseModalIcon.src = 'res/icon/scratch_logo.png'
      courseImage1.src = 'res/icon/course-scratch1.png';
      courseImage2.src = 'res/icon/course-scratch2.png';
      courseFact1.textContent = 'Идеально для: детей, увлеченных играми и мультфильмами.';
      courseFact2.textContent = 'Возраст: 8-14 лет.';
      courseFact3.textContent = 'Навыки: логика, креативное мышление, основы программирования.';
      break;
    case 'computer-literacy':
      courseModalTitle.textContent = "Компьютерная";
      courseModalSubtitle.textContent = "грамотность";
      courseModalDescription.textContent = "Курс обучает детей основам работы с компьютером. Ребенок освоит использование офисных программ (Word, PowerPoint), научится пользоваться браузером, электронной почтой, а также узнает основные правила безопасного поведения в интернете. Этот курс поможет детям уверенно пользоваться компьютером в учебе и повседневной жизни.";
      courseModalIcon.src = 'res/icon/comp_lit_logo.png'
      courseImage1.src = 'res/icon/course-comp-lit1.png';
      courseImage2.src = 'res/icon/course-comp-lit2.png';
      courseFact1.textContent = 'Идеально для: начинающих пользователей, которым нужны базовые навыки работы с компьютером.';
      courseFact2.textContent = 'Возраст: 7-14 лет.';
      courseFact3.textContent = 'Навыки: работа с текстами и презентациями, интернет-серфинг, использование электронной почты.';
      break;
    case 'roblox':
      courseModalTitle.textContent = "Создание 3D игр";
      courseModalSubtitle.textContent = "в Roblox";
      courseModalDescription.textContent = "Курс учит детей создавать свои собственные игры и миры в Roblox. Дети изучат основы программирования и дизайна, научатся использовать инструменты Roblox Studio для создания 3D-игр. Курс развивает творческие способности и логическое мышление, позволяя детям воплотить свои идеи в интерактивные проекты.";
      courseModalIcon.src = 'res/icon/roblox_logo.png';
      courseImage1.src = 'res/icon/course-roblox1.png';
      courseImage2.src = 'res/icon/course-roblox2.png';
      courseFact1.textContent = 'Идеально для: детей, интересующихся созданием игр и виртуальных миров.';
      courseFact2.textContent = 'Возраст: 8-14 лет.';
      courseFact3.textContent = 'Навыки: базовое программирование, работа с 3D-графикой, проектирование игровых уровней.';
      break;
    default:
      courseModalTitle.textContent = "";
      courseModalSubtitle.textContent = "";
      courseModalDescription.textContent = "";
      courseModalIcon.src = null;
      courseImage1.src = '';
      courseImage2.src = '';
      courseFact1.textContent = '';
      courseFact2.textContent = '';
      courseFact3.textContent = '';
  }

  courseModal.style.display = "block";
}

// Функция закрытия модального окна при клике на крестик
closeButton.onclick = function () {
  courseModal.style.display = "none";
  document.body.classList.remove('no-scroll');
}

// Закрытие модального окна при клике за его пределами
window.onclick = function (event) {
  if (event.target == courseModal) {
    courseModal.style.display = "none";
    document.body.classList.remove('no-scroll');
  }
}

// Объект для сопоставления заголовков и значений селектора
const courseMapping = {
  "Графический дизайн": "figma",
  "Создание 2D игр": "scratch",
  "Компьютерная": "computer-literacy",
  "Создание 3D игр": "roblox"
};

// Обработчик клика по кнопке "Записаться"
document.querySelector('.apply-button').addEventListener('click', function () {
  // Закрываем модальное окно
  document.getElementById('course-modal').style.display = 'none';

  // Получаем выбранный курс
  const selectedCourseTitle = document.getElementById('course-modal-title').innerText;

  // Прокручиваем страницу к форме
  document.getElementById('submit-app-section').scrollIntoView({ behavior: 'smooth' });

  // Получаем значение селектора на основе заголовка
  const courseSelect = document.getElementById('course-select');
  const courseValue = courseMapping[selectedCourseTitle] || ''; // Если нет совпадений, устанавливаем пустую строку
  courseSelect.value = courseValue;
  changeBackground();

  // Включаем фокус на первом поле ввода
  document.getElementById('name').focus();
});

// Закрытие модального окна при нажатии на крестик
document.querySelector('.close').addEventListener('click', function () {
  document.getElementById('course-modal').style.display = 'none';
});


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
      titleColor = '#410E6A';
      submitAppPhoto.src = 'res/icon/roblox_submit.png';
      break;
    case 'computer-literacy':
      backgroundColor = '#41EAD4'; // Зеленый цвет для Компьютерной грамотности
      inputBackgroundColor = '#E0FFF3'; // Более блеклый цвет для областей ввода информации
      backgroundColorTransparent = 'rgba(65, 234, 212, 0.5)';
      titleColor = '#410E6A';
      submitAppPhoto.src = 'res/icon/comp_lit_submit.png';
      break;
    case 'scratch':
      backgroundColor = '#6E65FF'; // Фиолетовый цвет для Scratch
      inputBackgroundColor = '#F0E7FF'; // Более блеклый цвет для областей ввода информации
      backgroundColorTransparent = 'rgba(110, 101, 255, 0.5)';
      titleColor = '#FFC75C';
      submitAppPhoto.src = 'res/icon/scratch_submit.png';
      break;
    case 'figma':
      backgroundColor = '#FF6E6E'; // Красный цвет для Roblox
      inputBackgroundColor = '#FFE0E0'; // Более блеклый цвет для областей ввода информации
      backgroundColorTransparent = 'rgba(255, 110, 110, 0.5)';
      titleColor = '#410E6A';
      submitAppPhoto.src = 'res/icon/figma_submit.png';
      break;
    default:
      backgroundColor = '#ffffff'; // Белый цвет по умолчанию
      inputBackgroundColor = '#f8f9fa'; // Светло-серый цвет для областей ввода информации
      backgroundColorTransparent = '#2E3038';
      titleColor = '#A4FFDE';
      submitAppPhoto.src = 'res/icon/figma_submit.png';
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
  if (selectedCourse == 'Выберите курс' || selectedCourse == 'Не могу определиться') {
    selectedCourse = 'подобрать курс'
  }
  document.getElementById("lead-title").value = name + " (" + selectedCourse + ")";

  var formData = new FormData(this);

  fetch(BITRIX_TOKEN, {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      // Проверка, что result присутствует и не undefined
      if (data.result !== undefined) {
        showSubmitAppModal("Данные успешно отправлены! ID лида: " + data.result);
      } else {
        showSubmitAppModal("Данные отправлены, но что-то пошло не так...");
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

document.getElementById('show-privacy-policy').addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('privacy-policy-modal').style.display = 'block';
});

document.getElementById('accept-privacy-policy').addEventListener('click', function () {
  document.getElementById('privacy-policy-modal').style.display = 'none';
  var checkbox = document.getElementById('privacy-policy-checkbox');
  checkbox.checked = true;
});

document.getElementById('decline-privacy-policy').addEventListener('click', function () {
  document.getElementById('privacy-policy-modal').style.display = 'none';
  var checkbox = document.getElementById('privacy-policy-checkbox');
  checkbox.checked = false;
});
