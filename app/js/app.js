$(document).ready(function () {
    $('.header__select').niceSelect();
    $.fancybox.defaults.touch = false;


    // mobile dropdown contacts\socials
    const tContact = document.querySelector('.header__t-contact');
    const tSocial = document.querySelector('.header__t-soc');
    const tDdContact = document.querySelector('.header__t-dd-contact--js');
    const tDdSocial = document.querySelector('.header__t-dd-socials--js');
    const tOverall = document.querySelector('.header__top');

    tContact.addEventListener('click', function () {
        if (tContact.classList.contains('active')) {
            tContact.classList.remove('active');
            tSocial.classList.remove('inactive');
            tDdContact.classList.remove('active');
            tOverall.classList.remove('active');
        } else {
            tContact.classList.add('active');
            tSocial.classList.add('inactive');
            tDdContact.classList.add('active');
            tOverall.classList.add('active');

            if (tSocial.classList.contains('active')) {
                tSocial.classList.remove('active');
                tDdSocial.classList.remove('active');
                tContact.classList.remove('inactive');
            }
        }
    });

    tSocial.addEventListener('click', function () {
        if (tSocial.classList.contains('active')) {
            tSocial.classList.remove('active');
            tContact.classList.remove('inactive');
            tDdSocial.classList.remove('active');
            tOverall.classList.remove('active');
        } else {
            tSocial.classList.add('active');
            tContact.classList.add('inactive');
            tDdSocial.classList.add('active');
            tOverall.classList.add('active');

            if (tContact.classList.contains('active')) {
                tContact.classList.remove('active');
                tDdContact.classList.remove('active');
                tSocial.classList.remove('inactive');
            }
        }
    });

    // mobile menu
    const hamBtn = document.querySelector('.header__btn-menu');
    const mobileMenu = document.querySelector('.m-nav')
    hamBtn.addEventListener('click', function () {
        hamBtn.classList.toggle('is-active');
        mobileMenu.classList.toggle('active');
    });


    // first screen slider
    if (document.querySelector('.first__gallery')) {
        const gallerySwiper = new Swiper('.first__container', {
            slidesPerView: 1,

            pagination: {
                el: '.first__pagination',
                type: 'custom',
                renderCustom: function (swiper, current, total) {
                    if (current >= 10) {
                        return `<span class="first__pagination-current">${current}</span> <div class="first__pagination-line"></div> <span class="first__pagination-total">${total}</span>`;
                    } else {
                        return `<span class="first__pagination-current">0${current}</span> <div class="first__pagination-line"></div> <span class="first__pagination-total">0${total}</span>`;
                    }
                },
            },

            navigation: {
                nextEl: '.first__next',
                prevEl: '.first__prev',
            },
        });
    }

});
