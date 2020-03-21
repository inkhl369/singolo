
const MENU = document.getElementById('menu');
const MENU_ITEM = MENU.querySelectorAll('li');
MENU.addEventListener('click', (evt) => {
    MENU_ITEM.forEach(el => el.querySelector('a').classList.remove('active'));
    evt.target.classList.add('active');
})




const BUTTONS_BOX = document.getElementById('portfolio-button');
const BUTTONS = BUTTONS_BOX.querySelectorAll('button');


BUTTONS_BOX.addEventListener('click', (evt) => {
    BUTTONS.forEach(el => el.classList.remove('active'));

    const IMAGES_BOX = document.getElementById('picture');
    const IMAGES = IMAGES_BOX.querySelectorAll('img');
    const TAB1 = [];
    for (let i = 0; i < IMAGES.length; i++) {
        let currentImage;
        if (i === IMAGES.length - 1) {
            currentImage = IMAGES[0];
        } else {
            currentImage = IMAGES[i + 1];
        }
        TAB1.push(currentImage);
    }
    IMAGES_BOX.innerHTML = '';
    for (let i = 0; i < IMAGES.length; i++) {
        IMAGES_BOX.append(TAB1[i]);
    }

    evt.target.classList.add('active');
})




const left_arrow = document.querySelector(".left-arrow");
const right_arrow = document.querySelector(".right-arrow");
const slides = document.getElementsByClassName("mobile_phone_slides");
const mobile_phone = document.querySelector(".mobile_phone");
let slideIndex = 1;
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
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "";
    if (slideIndex - 1 == 1){
        mobile_phone.classList.add('blue');
    }
    else {
        mobile_phone.classList.remove('blue');
    }
}




let verticalIphoneButton = document.querySelector('.iphone-vertical_button');
let blackScreenVertical = document.querySelector('.mobile_phone_black-screen-vertical');

verticalIphoneButton.addEventListener('click', (event) => {
blackScreenVertical.classList.toggle('screen-on');
});

let horizontalIphoneButton = document.querySelector('.iphone-horizontal_button');
let blackScreenHorizontal = document.querySelector('.mobile_phone_black-screen-horizontal');

horizontalIphoneButton.addEventListener('click', (event) => {
blackScreenHorizontal.classList.toggle('screen-on');
})



document.querySelector('.form').addEventListener('submit', (event) => {
    event.preventDefault();
    let subject = document.querySelector('.subject').value;
    subject = subject === '' ? "Отсутствие темы" : "Тема: " + subject;
    if (document.querySelector('.name').checkValidity() && document.querySelector('.email').checkValidity()){
      document.querySelector('.modal_subject').innerHTML = '';
      document.querySelector('.modal_subject').innerHTML = subject;
      let description = document.querySelector('.form_textarea').value;
      description = description === '' ? "Отсутствие описания проекта" : "Описание проекта: " + description;
      document.querySelector('.modal_description').innerHTML = '';
      document.querySelector('.modal_description').innerHTML = description;
      document.querySelector('.contacts_modal').style.display = "";
    }
  })
  
  document.querySelector('.modal_footer button').addEventListener('click', (event) => {
    subject = '';
    description = '';
    document.querySelector('.subject').value = '';
    document.querySelector('.form_textarea').value = '';
    document.querySelector('.name').value = '';
    document.querySelector('.email').value = '';
    document.querySelector('.contacts_modal').style.display = "none";
  })
  