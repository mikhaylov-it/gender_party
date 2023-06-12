var counterMale = 0;
var counterFemale = 0;
var crownImage = null;

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
}

function incrementClickFemale() {
  counterFemale++;
  updateDisplayFemale(counterFemale);
  updateGenderImages();
}

function updateDisplayMale(maleValue) {
  document.getElementById("maleButton").innerHTML = maleValue;
}

function updateDisplayFemale(femaleValue) {
  document.getElementById("femaleButton").innerHTML = femaleValue;
}


