let btns = document.querySelectorAll('[data-modal]');

for (let index = 0; index < btns.length; index++) {
  btns[index].addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();

    const type = this.dataset.modal;
    const modalTypes = document.querySelectorAll("[data-modal-type='" + type + "']");

    modalTypes.forEach(element => {
      element.classList.toggle('visually-hidden');
      if(element.classList.contains('iframe-map')) {
        element.style.transform = 'translate3d(-50%, -50%, 0)';
        element.style.transition = "1s";
        
      }
      
  });
  
});
}

if (document.querySelector('.index-page')) {
  let leftArrowOfSlider = document.getElementById('left-arrow');
  let rightArrowOfSlider = document.getElementById('right-arrow');

  let sliderTrack = document.getElementById('slider-track');

  let buttonItems = document.getElementsByClassName('button-item');

  let serviceListButtons = document.getElementsByClassName('service-list');
  let caruselItem = document.getElementById('carusel-item-id');

  leftArrowOfSlider.onclick = function (event) {
    event.preventDefault();
    event.stopPropagation();
    sliderTrack.style.transform = 'translateX(0px)';
    buttonItems[0].classList.add('button-current');
    buttonItems[1].classList.remove('button-current');
  }

  rightArrowOfSlider.onclick = function (event) {
    event.preventDefault();
    sliderTrack.style.transform = 'translateX(-620px)';
    buttonItems[0].classList.remove('button-current');
    buttonItems[1].classList.add('button-current');
  }

  buttonItems[0].onclick = function (event) {
    sliderTrack.style.transform = 'translateX(0px)';
    buttonItems[0].classList.add('button-current');
    buttonItems[1].classList.remove('button-current');
  }

  buttonItems[1].onclick = function (event) {
    sliderTrack.style.transform = 'translateX(-620px)';
    buttonItems[0].classList.remove('button-current');
    buttonItems[1].classList.add('button-current');
  }

  buttonItems.onclick = function () {
    console.log(this);
  }

  for (let i = 0; i < serviceListButtons.length; i++) {
    serviceListButtons[i].onclick = function () {
        let shiftY = 0;
        switch (i) {
          case 0: shiftY = caruselItem.offsetHeight / serviceListButtons.length * i;
              caruselItem.style.transform = 'translateY(' + -shiftY + 'px)';
              break;
          case 1: shiftY = caruselItem.offsetHeight / serviceListButtons.length * i;
              caruselItem.style.transform = 'translateY(' + -shiftY + 'px)';
              break;
          case 2: shiftY = caruselItem.offsetHeight / serviceListButtons.length * i;
              caruselItem.style.transform = 'translateY(' + -shiftY + 'px)';
              break;
        }
        for (let i = 0; i < serviceListButtons.length; i++) {
          if (serviceListButtons[i] === this) {
              this.classList.add('active-list-button');
              continue;
            }
          serviceListButtons[i].classList.remove('active-list-button');
        }

    }
  }
}
