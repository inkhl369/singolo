
const MENU = document.getElementById('menu');
const MENU_N = MENU.querySelectorAll('li');
MENU.addEventListener('click', (evt) => {
    MENU_N.forEach(el => el.querySelector('a').classList.remove('active'));
    evt.target.classList.add('active');
})




const BUTTON = document.getElementById('portfolio-button');
const BUTTONS = BUTTON.querySelectorAll('button');


BUTTON.addEventListener('click', (evt) => {
    BUTTONS.forEach(el => el.classList.remove('active'));

    const IMAGES_BOX = document.getElementById('picture');
    const IMAGES = IMAGES_BOX.querySelectorAll('img');
    const TAB1 = [];
    for (var i = 0; i < IMAGES.length; i++) {
        var currentImage;
        if (i === IMAGES.length - 1) {
            currentImage = IMAGES[0];
        } else {
            currentImage = IMAGES[i + 1];
        }
        TAB1.push(currentImage);
    }
    IMAGES_BOX.insideHTML = '';
    for (var i = 0; i < IMAGES.length; i++) {
        IMAGES_BOX.append(TAB1[i]);
    }

    evt.target.classList.add('active');
})

/////


const left_arrow = document.querySelector(".left-arrow");
const right_arrow = document.querySelector(".right-arrow");
const slides = document.getElementsByClassName("mobile_phone_slides");
const mobile_phone = document.querySelector(".mobile_phone");
var slideIndex = 1;
showSlides(slideIndex);
left_arrow.addEventListener('click', (e) => {
  plusSlides(-1);
});
right_arrow.addEventListener('click', (e) => {
  plusSlides(1);
});
function plusSlides(n) {
  showSlides(slideIndex += n);
  blackScreenHorizontal.classList.remove('screen-on');
  blackScreenVertical.classList.remove('screen-on');
}
function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "";
    if (slideIndex - 1 !== 1){
        mobile_phone.classList.remove('blue');
    }
    else {
        mobile_phone.classList.add('blue');
    }
}




var verticalIphoneButton = document.querySelector('.iphone-vertical_button');
var blackScreenVertical = document.querySelector('.mobile_phone_black-screen-vertical');

verticalIphoneButton.addEventListener('click', (event) => {
blackScreenVertical.classList.toggle('screen-on');
});

var horizontalIphoneButton = document.querySelector('.iphone-horizontal_button');
var blackScreenHorizontal = document.querySelector('.mobile_phone_black-screen-horizontal');

horizontalIphoneButton.addEventListener('click', (event) => {
blackScreenHorizontal.classList.toggle('screen-on');
})



document.querySelector('.form').addEventListener('submit', (event) => {
    event.preventDefault();
    var str = document.querySelector('.subject').value;
    str = str === '' ? "Отсутствие темы" : "Тема: " +  str;
    if (document.querySelector('.name').checkValidity() && document.querySelector('.email').checkValidity()){
      document.querySelector('.modal_subject').innerHTML = '';
      document.querySelector('.modal_subject').innerHTML = str;
      let content = document.querySelector('.form_textarea').value;
      content = content === '' ? "Отсутствие описания проекта" : "Описание проекта: " + content;
      document.querySelector('.modal_description').innerHTML = '';
      document.querySelector('.modal_description').innerHTML = content;
      document.querySelector('.contacts_modal').style.display = "";
    }
  })
  
  document.querySelector('.modal_footer button').addEventListener('click', (event) => {
    str = '';
    content = '';
    document.querySelector('.subject').value = '';
    document.querySelector('.form_textarea').value = '';
    document.querySelector('.name').value = '';
    document.querySelector('.email').value = '';
    document.querySelector('.contacts_modal').style.display = "none";
  })
  