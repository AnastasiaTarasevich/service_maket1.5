const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView:1.1,
    dynamicBullets: true,
    dynamicMainBullets: 7,
    spaceBetween:30,
    breakpoints: {
        320: {
          enabled: true,
          loop: true,
          spaceBetween: 16,
          slidesPerView: 1.2,
        },
  
        400: {
            enabled: true,
            loop: true,
            spaceBetween: 16,
            slidesPerView: 1.3,
          },
        450: {
            enabled: true,
            loop: true,
            spaceBetween: 16,
            slidesPerView: 1.4,
          },
        500: {
            enabled: true,
            loop: true,
            spaceBetween: 16,
            slidesPerView: 1.8,
          },  
          576: {
            enabled: true,
            loop: true,
            spaceBetween: 16,
            slidesPerView: 2,
          },
        768: {
          enabled: false,
          loop: false,
          spaceBetween: 0,
          slidesPerView: "auto",
        },
      },
    });
    const revealButton = document.querySelector('.brand__list__reveal-part__button');
    const revealText = document.querySelector('.brand__list__reveal-part__text');
    const revealImage = document.querySelector('.brand__list__reveal-part__img');
    const swiperWrapper = document.querySelector('.brand__list__items-packing.swiper-wrapper');
    revealButton.addEventListener('click', function () {
        if (revealText.textContent === 'Читать далее') {
            revealText.textContent = 'Скрыть';
            revealImage.src = 'img/didi.svg';

            if(window.innerWidth < 1120){
              swiperWrapper.style.height = '350px';
            }
           else{
              swiperWrapper.style.height = '255px';
            }
            
        } else {
            revealText.textContent = 'Читать далее';
            revealImage.src = 'img/expand.svg';
            swiperWrapper.style.height = '170px';
        }
    });
    const imgButtons = document.querySelectorAll('.brand__list__items-switching');

    document.addEventListener('click', function () {
      imgButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.add('clicked');
            setTimeout(() => {
                button.classList.remove('clicked');
            }, 500);
        });
    });
    });    