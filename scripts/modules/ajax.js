export default function ajax (){
    function validateForm(nameInput, phoneInput) {
        let valid = true;
      
        if (nameInput.value.trim() === '') {
          nameInput.style.border = '1px solid red';
          valid = false;
        } else {
          nameInput.style.border = ''; // Сброс обводки
        }
      
        if (phoneInput.value.trim() === '') {
          phoneInput.style.border = '1px solid red';
          valid = false;
        } else {
          phoneInput.style.border = ''; // Сброс обводки
        }
      
        return valid;
      }
      
      // Найти все формы на странице
      const forms = document.querySelectorAll('.input-form');
      
      // Назначить обработчик события для каждой формы
      forms.forEach(function(form) {
        const nameInput = form.querySelector('input[placeholder="Ваше Имя"]');
        const phoneInput = form.querySelector('input[placeholder="Номер телефона"]');
        const submitButton = form.querySelector('.btn');
      
        submitButton.addEventListener('click', function(event) {
          event.preventDefault(); // Предотвратить отправку формы по умолчанию
      
          if (validateForm(nameInput, phoneInput)) {
            // Форма валидна, выполните AJAX-запрос
      
            // Создайте объект для AJAX-запроса
            const xhr = new XMLHttpRequest();
            xhr.open('POST', '/ajax/', true);
            xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      
            // Формируйте данные для отправки
            const formData = {
              name: nameInput.value.trim(),
              phone: phoneInput.value.trim(),
            };
      
            // Отправьте JSON-данные на сервер
            xhr.send(JSON.stringify(formData));
      
            // Обработка успешного ответа от сервера
            xhr.onload = function() {
              if (xhr.status === 200) {
                // Ваши действия при успешной отправке
                console.log('Запрос успешно отправлен!');
              } else {
                // Обработка ошибки при отправке
                console.error('Произошла ошибка при отправке запроса');
              }
            };
          }
        });
      });
      
}