var counterMale = 0;
var counterFemale = 0;
var crownImage = null;

// Функция для получения текущих значений из базы данных и обновления кнопок
function getCounterValues() {
  // Отправка AJAX-запроса на сервер для получения значений "Мальчик" и "Девочка"
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'get_counter_values.php', true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      var counters = JSON.parse(xhr.responseText);
      counterMale = counters.male;
      counterFemale = counters.female;
      
      // Обновление значений на кнопках и изображений
      updateDisplayMale(counterMale);
      updateDisplayFemale(counterFemale);
      updateGenderImages();
    }
  };
  xhr.send();
}

function updateGenderImages() {
  const maleContainer = document.getElementById('maleWin');
  const femaleContainer = document.getElementById('femaleWin');

  if (crownImage) {
    crownImage.remove();
  }

  if (counterMale > counterFemale) {
    crownImage = document.createElement('img');
    crownImage.src = 'crown.png';
    crownImage.alt = 'Описание изображения';

    maleContainer.appendChild(crownImage);
  } else if (counterMale < counterFemale) {
    crownImage = document.createElement('img');
    crownImage.src = 'crown.png';
    crownImage.alt = 'Описание изображения';

    femaleContainer.appendChild(crownImage);
  } else {
    if (crownImage) {
      crownImage.remove();
    }
  }
}

function incrementClickMale() {
  counterMale++;
  updateDisplayMale(counterMale);
  updateGenderImages();
  
  // Отправка AJAX-запроса на сервер для обновления значения "Мальчик"
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'update_counter.php', true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onload = function() {
    if (xhr.status === 200) {
      updateDisplayMale(parseInt(xhr.responseText));
    }
  };
  xhr.send('maleButton=1');
}

function incrementClickFemale() {
  counterFemale++;
  updateDisplayFemale(counterFemale);
  updateGenderImages();
  
  // Отправка AJAX-запроса на сервер для обновления значения "Девочка"
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'update_counter.php', true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onload = function() {
    if (xhr.status === 200) {
      updateDisplayFemale(parseInt(xhr.responseText));
    }
  };
  xhr.send('femaleButton=1');
}

function updateDisplayMale(maleValue) {
  document.getElementById("maleButton").innerHTML = maleValue;
}

function updateDisplayFemale(femaleValue) {
  document.getElementById("femaleButton").innerHTML = femaleValue;
}

// Вызов функции при загрузке страницы для получения начальных значений из базы данных
document.addEventListener("DOMContentLoaded", getCounterValues);
