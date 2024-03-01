// Получаем все кнопки меню
const menuButtons = document.querySelectorAll('.header-items a');
const selectCourseButton = document.getElementById('select-course-btn');

// Для каждой кнопки меню добавляем обработчик события при нажатии
menuButtons.forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault(); // Предотвращаем стандартное поведение ссылки

    // Получаем id раздела, к которому нужно прокрутить страницу
    const targetId = button.getAttribute('href').substring(1);

    // Получаем элемент, к которому нужно прокрутить страницу
    const targetElement = document.getElementById(targetId);

    // Плавно прокручиваем страницу к элементу
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

selectCourseButton.addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки

    // Находим элемент, к которому нужно прокрутить страницу (например, с id="courses")
    const targetElement = document.getElementById('courses');

    // Прокручиваем страницу к этому элементу с плавной анимацией
    targetElement.scrollIntoView({ behavior: 'smooth' });
});
