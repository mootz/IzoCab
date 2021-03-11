$(document).ready(function () {
    $('.header__select').niceSelect();
    $('.calc__select').niceSelect();
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

    // custom before on select
    if (document.querySelector('.calc__select')) {
        const currentOnSelectInner = document.querySelector('.color-inner .current');
        const optionsSelectInner = document.querySelectorAll('.color-inner .option');

        optionsSelectInner.forEach(e => {
            e.addEventListener('click', function () {
                let attr = e.getAttribute('data-value');
                currentOnSelectInner.setAttribute('data-value', attr)
            });
        });

        const currentOnSelectOuter = document.querySelector('.color-outer .current');
        const optionsSelectOuter = document.querySelectorAll('.color-outer .option');

        optionsSelectOuter.forEach(e => {
            e.addEventListener('click', function () {
                let attr = e.getAttribute('data-value');
                currentOnSelectOuter.setAttribute('data-value', attr)
            });
        });
    }

    // validation
    if (document.querySelector('.calc')) {
        const fBtn = document.querySelector('.calc__f-check');
        const sBtn = document.querySelector('.calc__s-check');
        const sBtnIcon = document.querySelector('.calc__s-check i');
        const sBtnText = document.querySelector('.calc__s-check span');
        const fItem = document.querySelector('.calc__f-item');
        const sItem = document.querySelector('.calc__s-item');
        const fContent = document.querySelector('.calc__f-item .calc__item-content');
        const sContent = document.querySelector('.calc__s-item .calc__item-content');
        const orderBtns = document.querySelector('.calc__btns')
        let fContentHeight = fContent.clientHeight + 'px';


        let accepted = false;

        fContent.style.height = fContentHeight;

        document.querySelector('input[name="budget"]').addEventListener('input', function () {
            if (document.querySelector('input[name="budget"]').value != 0 && document.querySelector('input[name="size"]').value != 0) {
                sBtnText.innerHTML = 'Заполнить';
                sBtn.classList.add('accept');
                fBtn.classList.add('ready');
                sItem.classList.remove('non-active');
                accepted = true;

                if (window.matchMedia('(max-width: 768px').matches) {
                    sBtn.style.display = 'block';
                    document.querySelector('.calc__s-mobile').style.display = 'none';
                } else {
                    sBtnText.innerHTML = 'Заполнить';
                    fBtn.innerHTML = 'Изменить';
                }
            } else {
                sBtnText.innerHTML = 'Просмотреть';
                sItem.classList.add('non-active');
                sBtn.classList.remove('accept');
                fBtn.classList.remove('accept');

                if (window.matchMedia('(max-width: 768px').matches) {
                    sBtn.style.display = 'none';
                    document.querySelector('.calc__s-mobile').style.display = 'flex';

                    if (document.querySelector('.calc__s-mobile').classList.contains('ready')) {
                        this.classList.remove('ready')
                    }
                }
            }
        });

        document.querySelector('input[name="size"]').addEventListener('input', function () {
            if (document.querySelector('input[name="budget"]').value != 0 && document.querySelector('input[name="size"]').value != 0) {
                sBtnText.innerHTML = 'Заполнить';
                sBtn.classList.add('accept');
                fBtn.classList.add('ready');
                sItem.classList.remove('non-active');
                accepted = true;

                if (window.matchMedia('(max-width: 768px').matches) {
                    sBtn.style.display = 'block';
                    document.querySelector('.calc__s-mobile').style.display = 'none';
                } else {
                    sBtnText.innerHTML = 'Заполнить';
                    fBtn.innerHTML = 'Изменить';
                }

            } else {

                sItem.classList.add('non-active');
                sBtn.classList.remove('accept');
                fBtn.classList.remove('accept');

                if (window.matchMedia('(max-width: 768px').matches) {
                    sBtn.style.display = 'none';
                    document.querySelector('.calc__s-mobile').style.display = 'flex';
                    if (document.querySelector('.calc__s-mobile').classList.contains('ready')) {
                        this.classList.remove('ready')
                    }
                } else {
                    sBtnText.innerHTML = 'Просмотреть';
                }
            }
        });

        document.querySelector('input[name="name"]').addEventListener('input', function () {
            if (document.querySelector('input[name="name"]').value != 0) {
                sBtn.classList.add('ready');
                sItem.classList.remove('non-active');
                accepted = true;

            } else {
                sBtn.classList.remove('ready');

                if (window.matchMedia('(min-width: 768px').matches) {
                    sBtn.innerHTML = 'Просмотреть';
                }
            }
        });

        let fBtnOpen = function () {
            sContent.style.height = '0';
            sItem.classList.remove('active');
            sBtn.classList.remove('disable');
            fBtn.classList.add('disable');
            orderBtns.classList.remove('item-active');

            fContent.style.height = fContentHeight;
            fItem.classList.add('active');

            if (!sItem.classList.contains('non-active')) {
                document.querySelector('.calc__s-mobile').classList.remove('disable');
            }
        };

        let sBtnOpen = function () {
            fContent.style.height = '0';
            fItem.classList.remove('active');
            fBtn.classList.remove('disable');
            sBtn.classList.add('disable');
            if (this.classList.contains('accept')) {
                sBtn.classList.remove('accept');
                sBtn.innerHTML = 'Изменить';
            }
            orderBtns.classList.add('item-active');

            sContent.style.height = sContent.scrollHeight + 'px';
            sItem.classList.add('active');

            if (window.matchMedia('(max-width: 768px').matches) {
                sBtn.style.display = 'none';
                document.querySelector('.calc__s-mobile').style.display = 'flex';

                if (!sItem.classList.contains('non-active')) {
                    document.querySelector('.calc__s-mobile').classList.add('ready');
                    document.querySelector('.calc__s-mobile').classList.add('disable');
                }
            }
        };

        fBtn.addEventListener('click', fBtnOpen);
        sBtn.addEventListener('click', sBtnOpen);
        document.querySelector('.calc__s-mobile').addEventListener('click', sBtnOpen);


        // width btns
        const buttonsOrder = document.querySelector('.calc__btns');
        let widthColumn = document.querySelector('.calc__c-column').clientWidth + 'px';
        buttonsOrder.style.width = widthColumn;
        window.addEventListener("resize", function () {
            widthColumn = document.querySelector('.calc__c-column').clientWidth + 'px';
            buttonsOrder.style.width = widthColumn;
            fContentHeight = fContent.clientHeight + 'px';
        });
    }

    $('input[name="number"]').inputmask({
        mask: '+7 (999) 999-99-99',
        showMaskOnHover: false,
        placeholder: '  ',
    });

});
