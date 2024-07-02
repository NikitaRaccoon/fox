$(document).ready(function () {

    let burgerMenuLinks = $(document).find('.mobile-menu__nav-item.nested > a');
    let modalItems = $(document).find('.modal-item');
    let overlay = $(document).find('.overlay');
    let body = $(document).find('body');
    let modalTitilePart = "Запишитесь на консультацию по вопросам ";
    let situatuinButtons = $(document).find('.situation__buttons .situation__button');
    let casesButtons = $(document).find('.tabs-buttons a')

    AOS.init({
        offset: 220,
        duration: 600,
        disable: 'mobile',
    });

    $('.header__nav-item.nested').hover(function () { $('.header__nav').addClass('active') }, function () { $('.header__nav').removeClass('active') })

    $(document).on('click', '.business-services__slide-more', function (e) {
        e.preventDefault();
        let t = $(this)
        if (t.hasClass('opened')) {
            t.removeClass('opened')
            t.find('span').text('Что входит в стоимость')
            t.siblings('.business-services__slide-rates').slideUp()
        } else {
            t.addClass('opened')
            t.find('span').text('Скрыть')
            t.siblings('.business-services__slide-rates').slideDown()
        }
    })

    let protectionGroupSlider = new Swiper('.protection__group-slider.swiper', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: '.protection__group-slider .protection__group-nav.mobile .protection__pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.protection__group-slider .protection__button-next',
            prevEl: '.protection__group-slider .protection__button-prev',
        },
        breakpoints: {
            620: {
                spaceBetween: 30,
                navigation: {
                    nextEl: '.protection__group-nav:not(.mobile) .protection__button-next',
                    prevEl: '.protection__group-nav:not(.mobile) .protection__button-prev',
                },
                pagination: {
                    el: '.protection__group-nav:not(.mobile) .protection__pagination',
                    type: 'fraction',
                },
            }
        }

    })

    let tasksSlider = new Swiper('.tasks__slider.swiper', {
        slidesPerView: 'auto',
        spaceBetween: 20,

        navigation: {
            nextEl: '.tasks .tasks__slider-nav .tasks__slider-next',
            prevEl: '.tasks .tasks__slider-nav .tasks__slider-prev',
        },
        pagination: {
            el: '.tasks .tasks__slider-pagination',
            type: 'bullets',
        },

        breakpoints: {
            991: {

                // loop: true,
                pagination: {
                    enabled: false,
                }
            }
        }
    })

    let mainEventsSlider = new Swiper('.events__slider.swiper', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,

        breakpoints: {
            991: {
                navigation: {
                    nextEl: '.events__next',
                    prevEl: '.events__prev',
                }
            }
        }
    })

    let reviewsSlider = new Swiper('.reviews__list.swiper', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
            nextEl: '.reviews__list .tasks__slider-nav .tasks__slider-next',
            prevEl: '.reviews__list .tasks__slider-nav .tasks__slider-prev',
        },
        pagination: {
            el: '.reviews__list .tasks__slider-pagination',
            type: 'bullets',
        },

        breakpoints: {
            991: {
                pagination: {
                    enabled: false,
                }
            }
        }
    })

    let comprehensiveSlider = new Swiper('.comprehensive-protect__slider.swiper', {
        slidesPerView: "auto",
        spaceBetween: 10,

        breakpoints: {
            620: {
                spaceBetween: 30,
            }
        }
    })

    if ($(window).width() > 991) {

        let certificatesSlider1 = new Swiper('.certificates__slider.certificates__slider-1', {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 40,
            navigation: {
                nextEl: '.certificates__slider.certificates__slider-1 .certificates__next',
                prevEl: '.certificates__slider.certificates__slider-1 .certificates__prev',
            },
        })
        let certificatesSlider2 = new Swiper('.certificates__slider.certificates__slider-2', {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 40,
            navigation: {
                nextEl: '.certificates__slider.certificates__slider-2 .certificates__next',
                prevEl: '.certificates__slider.certificates__slider-2 .certificates__prev',
            },
        })
        let certificatesSlider3 = new Swiper('.certificates__slider.certificates__slider-3', {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 40,
            navigation: {
                nextEl: '.certificates__slider.certificates__slider-3 .certificates__next',
                prevEl: '.certificates__slider.certificates__slider-3 .certificates__prev',
            },
        })

        $(document).on('click', '.stages__buttons a', function (e) {
            e.preventDefault()

            $('.stages__buttons a').removeClass('active')
            $(this).addClass('active')

            let stageNumber = $(this).attr('data-stage-number')

            $('[data-stage]').removeClass('active')
            $(`[data-stage=${stageNumber}]`).addClass('active')
        })

        const leadersImgSliderProps = (SliderName) => {
            return {
                centeredSlides: true,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                pagination: {
                    el: `${SliderName} .leaders__pagination`,
                    type: 'bullets',
                },
                navigation: {
                    nextEl: `${SliderName} .tasks__slider-next`,
                    prevEl: `${SliderName} .tasks__slider-prev`,
                },
            }
        }

        let leadersImgSlider_1 = new Swiper('.leaders__slider-inner-1', leadersImgSliderProps('.leaders__slider-inner-1'))
        let leadersImgSlider_2 = new Swiper('.leaders__slider-inner-2', leadersImgSliderProps('.leaders__slider-inner-2'))
    }

    if ($(window).width() < 991) {
        let servicesHeroSlider = new Swiper('.services__list.swiper', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            preventClicksPropagation: false,
            preventClicks: false,
            touchStartForcePreventDefault: true,
            pagination: {
                el: '.services__slider-pagintaion',
                type: 'bullets',
                clickable: true,
            },
            navigation: {
                nextEl: '.services .next-slide',
                prevEl: '.services .prev-slide',
            },

        })

        let pressMobileSlider = new Swiper('.press__mobile-list.swiper', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            pagination: {
                el: '.press__list-pagination',
                type: 'bullets',
                clickable: true,
            },
            navigation: {
                nextEl: '.press-videos__button-next',
                prevEl: '.press-videos__button-prev',
            },
        })

        let taxInfoSlider = new Swiper('.tax-info__slider.swiper', {
            slidesPerView: '1',
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: '.tax-info__slider .swiper-pagination',
                type: 'bullets',
            },
        })

        let protectionServiceSlider = new Swiper('.protection__services.swiper', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            pagination: {
                el: '.protection__services .protection__pagination',
                type: 'bullets',
                clickable: true,
            },
            navigation: {
                nextEl: '.protection__services .protection__button-next',
                prevEl: '.protection__services .protection__button-prev',
            },
        })

        let heroBusinesSlider = new Swiper('.hero__slider-law.swiper', {
            slidesPerView: 'auto',
            spaceBetween: 0,
            breakpoints: {
                620: {
                    spaceBetween: 23,
                }
            }
        })

        let questionsBusinessListSlider = new Swiper('.business-questions__list.swiper', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            pagination: {
                el: '.business-questions__list-pagintation',
                type: 'bullets',
            },
            navigation: {
                nextEl: '.business-questions__list-nav .tasks__slider-next',
                prevEl: '.business-questions__list-nav .tasks__slider-prev',
            },
            breakpoints: {
                620: {
                    spaceBetween: 30,
                }
            }
        })

        let protectionInfoSLider = new Swiper('.protection__info.swiper', {
            slidesPerView: 1,
            centeredSlides: true,
            pagination: {
                el: '.protection__info-pagination',
                type: 'bullets'
            }
        })

        let questionsBusinessTurnsSlider = new Swiper('.business-questions__turns.swiper', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            pagination: {
                el: '.business-questions__turns-pagintation',
                type: 'bullets',
            },
            navigation: {
                nextEl: '.business-questions__turns-nav .tasks__slider-next',
                prevEl: '.business-questions__turns-nav .tasks__slider-prev',
            },
            breakpoints: {
                620: {
                    spaceBetween: 30,
                }
            }
        })

        let buisnessServicesSlider = new Swiper('.business-services__slider.swiper', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            pagination: {
                el: '.business-services__slider-pagination',
                type: 'bullets',
            },
            navigation: {
                nextEl: '.business-services__slider-nav .tasks__slider-next',
                prevEl: '.business-services__slider-nav .tasks__slider-prev',
            },
        })

        let introBusinessList = new Swiper('.intro-business__list.swiper', {
            slidesPerView: 1,
            centeredSlides: true,
            pagination: {
                el: '.intro-business__pagination',
                type: 'bullets',
            }
        })

        let leadersSliderOuter = new Swiper('.leaders__slider-outer.swiper',
            {
                centeredSlides: true,
                pagination: {
                    el: '.leaders__slider-outer .leaders__pagination-mobile',
                    type: 'bullets',
                },
                navigation: {
                    nextEl: '.leaders__slider-outer .tasks__slider-next',
                    prevEl: '.leaders__slider-outer .tasks__slider-prev',
                },
            })

        let leadersCourtSlider = new Swiper('.leaders-court__slider.swiper', {
            slidesPerView: 1,
            centeredSlides: true,
            autoHeight: true,

            pagination: {
                el: '.leaders-court__pagination',
                type: 'bullets',
            },
            navigation: {
                nextEl: '.leaders-court__nav .tasks__slider-next',
                prevEl: '.leaders-court__nav .tasks__slider-prev',
            },

        })


        let servicesOptionalListItems = $('.services__list-item ul .optional')

        $(document).on('click', '.services__list-item ul a', function (e) {
            e.preventDefault()

            let t = $(this)

            if (t.hasClass('hidden')) {
                t.removeClass('hidden')
                t.text('Скрыть')
                servicesOptionalListItems.slideDown()
            } else {
                t.addClass('hidden')
                t.text('Показать еще...')
                servicesOptionalListItems.slideUp()
            }
        })

        $(document).on('click', '.stages__item-wrapper a', function (e) {
            e.preventDefault()

            let t = $(this)

            if ($(this).hasClass('active')) {
                t.removeClass('active')
                t.siblings('.stages__tab-wrapper').slideUp()
            } else {
                t.addClass('active')
                t.siblings('.stages__tab-wrapper').slideDown()
            }
        })

    }

    if ($(window).width() < 620) {

        let heroMobileSlider = new Swiper('.hero__stat.swiper', {
            slidesPerView: 'auto',
            spaceBetween: 63,
        })

        let leadersCorpSlider = new Swiper('.leaders-corporate__images.swiper', {
            slidesPerView: 1,
            centeredSlides: true,
            pagination: {
                el: '.leaders-corporate .leaders-court__pagination',
                type: 'bullets',
            },
            navigation: {
                nextEl: '.leaders-corporate .leaders-court__nav .tasks__slider-next',
                prevEl: '.leaders-corporate .leaders-court__nav .tasks__slider-prev',
            },
        })

        $(document).on('click', '.history__show-more', function (e) {
            e.preventDefault()
            let t = $(this)
            if (t.hasClass('opened')) {
                t.removeClass('opened')
                t.find('span').text('Развернуть всю историю')
                t.siblings('.history__wrapper').find('.history__wrapper-mobile').slideUp()
            } else {
                t.addClass('opened')
                t.find('span').text('Свернуть историю')
                t.siblings('.history__wrapper').find('.history__wrapper-mobile').slideDown()
            }
        })
    }


    burgerMenuLinks.on('click', function (e) {
        e.preventDefault()
        $(this).toggleClass('opened')
        $(this).siblings('.inner-nav-container').slideToggle()
    })

    $(document).on('click', '.header__burger-button', function () {
        if ($('body').hasClass('opened')) {
            burgerMenuLinks.removeClass('opened')
            burgerMenuLinks.siblings('.inner-nav-container').slideUp()

            modalItems.removeClass('active')
            overlay.removeClass('opened')
            body.css('overflow', 'visible')
        }
        $('body').toggleClass('opened')
    })

    $(document).on('change', '#change-massenger', function () {
        let t = $(document).find('#choose-messanger-mark');
        t.removeClass();
        t.addClass($(this).find('option:selected').attr('data-value'));
    })

    let phoneInputMask = new Inputmask("+7 (999) 999-99-99", {
        placeholder: "_",
        clearMaskOnLostFocus: true,
    });

    let InnInputMask = new Inputmask("9 9 9 9 9 9 9 9 9 9 9 9", {
        placeholder: "_",
        clearMaskOnLostFocus: true,
    });

    $(document).on('click', '.tasks__slider-buttons a', function (e) {
        e.preventDefault();
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        let sectionID = $(this).attr('data-id');
        $.ajax({
            url: '/ajax/cases.php',
            method: 'GET',
            dataType: 'html',
            data: {
                sectionID: sectionID,
            },
            success: function (response) {
                tasksSlider.destroy();
                $(document).find('.tasks__slider.swiper > .swiper-wrapper').empty().append(response);
                tasksSlider = new Swiper('.tasks__slider.swiper', {
                    slidesPerView: 'auto',
                    spaceBetween: 20,

                    navigation: {
                        nextEl: '.tasks .tasks__slider-nav .tasks__slider-next',
                        prevEl: '.tasks .tasks__slider-nav .tasks__slider-prev',
                    },
                    pagination: {
                        el: '.tasks .tasks__slider-pagination',
                        type: 'bullets',
                    },

                    breakpoints: {
                        991: {

                            pagination: {
                                enabled: false,
                            }
                        }
                    }
                })
            }
        });
    })

    const taskSliderShowTextHandler = () => {

        $(document).on('click', '.task-slide__situation-button', function (e) {
            e.preventDefault()

            let text = $(this).siblings('.task-slide__situation-text')

            if (text.hasClass('opened')) {
                $(this).text('Развернуть описание')
                text.slideUp().removeClass('opened')
            } else {
                $(this).text('Скрыть опиание')
                text.slideDown().addClass('opened')
            }
        })

        $(document).on('click', '.task-slide__show', function (e) {

            let content = $(this).siblings('.task-slide__content')

            if (content.hasClass('opened')) {
                $(this).text('Развернуть описание')
                content.removeClass('opened').slideUp()
            } else {
                $(this).text('Скрыть опиание')
                content.addClass('opened').slideDown()
            }
            e.preventDefault()
        })

        tasksSlider.on('slideChange', function () {
            $(document).find('.task-slide__content.opened').removeClass('opened').slideUp()
        });
    }
    taskSliderShowTextHandler();

    phoneInputMask.mask($('input[type="tel"]'));
    InnInputMask.mask($('input[type="text"].inn-mask'));

    $(".selector").select2({
        minimumResultsForSearch: -1,
        width: "100%",
    });

    $(document).on('click', '.modal-button', function (e) {
        e.preventDefault()
        let serviceTitle;

        if ($(this).closest('.protection__services-item').find('.protection__services-title').length > 0) {
            serviceTitle = $(this).closest('.protection__services-item').find('.protection__services-title').text();
        }

        let modalType = $(this).attr('modal-type')
        let modalWindow = $(document).find('[data-modal-type=' + modalType + ']')

        body.css('overflow', 'hidden')
        overlay.addClass('opened')
        modalItems.removeClass('active')
        modalWindow.addClass('active')

        if (modalType === 'certificates') {
            $(document).find('.certificates__slider').removeClass('active')
            $(document).find('.' + $(this).attr('data-certificates')).addClass('active')
        }

        if (modalWindow.find('[name="form_text_14"]').length > 0 && serviceTitle != undefined) {
            modalWindow.find('[name="form_text_14"]').val($.trim(serviceTitle));
        }

        if (modalType === "form-comprehensive" && !$(e.target).hasClass('common')) {
            let text = $(this).attr('data-text')
            let modalWindowTitlte = modalWindow.find('.modal-form__title')
            modalWindowTitlte.text(modalTitilePart + text);
        } else if(modalType === "form-comprehensive" && $(e.target).hasClass('common')) {
            let modalWindowTitlte = modalWindow.find('.modal-form__title')
            modalWindowTitlte.text('Запишитесь на консультацию по вопросам юридического сопровождения');
        }
    })

    $(document).on('click', function (e) {
        if (!$(e.target).hasClass('modal-item') && $(e.target).hasClass('overlay') || $(e.target).hasClass('close-btn')) {
            modalItems.removeClass('active')
            overlay.removeClass('opened')
            body.css('overflow', 'visible')
        }

    })

    let scrollHeight = $(window).width() > 991 ? window.screen.height / 2 : 60

    $(window).on('scroll', function () {
        if (window.pageYOffset > scrollHeight) {
            $('.scroll-top').css('display', 'block')
            $('.header').addClass('fixed')
        } else {
            $('.scroll-top').css('display', 'none')
            $('.header').removeClass('fixed')
        }
    })

    $(document).on('click', '.radio-wrapper p', function () {
        let radioId = $(this).attr('data-radio')
        $(`#${radioId}`).prop('checked', true)
    })

    $(document).on('focusin', '.modal__form-input-wrapper input', function () {
        $(this).closest('.modal__form-input-wrapper').addClass('focused')
    })

    $(document).on('focusout', '.modal__form-input-wrapper input', function () {
        if (!$(this).val()) {
            $(this).closest('.modal__form-input-wrapper').removeClass('focused')
        }
    })

    $('.policy input[type="checkbox"]').each(function () {
        let submitButton = $(this).closest('form').find('input[type="submit"')
        if ($(this).is(':checked')) {
            submitButton.attr("disabled", false);
        } else {
            submitButton.attr("disabled", true);
        }
    })

    $(document).on('change', '.policy input[type="checkbox"]', function () {
        let submitButton = $(this).closest('form').find('input[type="submit"')
        if ($(this).is(':checked')) {
            submitButton.attr("disabled", false);
        } else {
            submitButton.attr("disabled", true);
        }
    })

    $(document).on('click', '.situation__buttons .situation__button', function (e) {
        e.preventDefault()
        situatuinButtons.removeClass('active')
        $(this).addClass('active')

        let situationType = $(this).attr('data-situation')

        $(document).find('.situation__wrapper .situation__item').removeClass('active')
        $(document).find(`.${situationType}`).addClass('active')

    })

    $(document).on('click', '.situation__mobile-wrapper a', function (e) {
        e.preventDefault()
        $(this).toggleClass('active')
        $(this).siblings('.situation__mobile-item').slideToggle()
    })

    $(document).on('click', '.tabs-buttons a', function (e) {
        e.preventDefault()
        casesButtons.removeClass('active')
        $(this).addClass('active')

    })

    $(document).on('click', '.case-detail__show-button', function (e) {
        e.preventDefault()
        let t = $(this)

        if (t.hasClass('visible')) {
            t.removeClass('visible')
            t.text('Развернуть описание')
            t.siblings('.case-detail__row-wrapper').slideUp()
        } else {
            t.addClass('visible')
            t.text('Свернуть описание')
            t.siblings('.case-detail__row-wrapper').slideDown()
        }
    })

    $(document).on('click', '.header-dropdown-btn', function (e) {
        e.preventDefault()
        let t = $(this)

        if (t.hasClass('opened')) {
            t.removeClass('opened')
            t.siblings('.header-dropdown').removeClass('opened')
        } else {
            $('.header-dropdown').removeClass('opened')
            $('.header-dropdown-btn').removeClass('opened')
            t.addClass('opened')
            t.siblings('.header-dropdown').addClass('opened')
        }
    })

    $(document).on('click', function (e) {
        console.log($(e.target))
        if (!$(e.target).hasClass('header-dropdown') && !$(e.target).hasClass('header-dropdown-btn')) {
            $('.header-dropdown').removeClass('opened')
            $('.header-dropdown-btn').removeClass('opened')
        }
    })

    !function () { var s, i, c, a, o = { frameRate: 150, animationTime: 500, stepSize: 100, pulseAlgorithm: !0, pulseScale: 4, pulseNormalize: 1, accelerationDelta: 50, accelerationMax: 3, keyboardSupport: !0, arrowScroll: 50, fixedBackground: !0, excluded: "" }, p = o, u = !1, d = !1, n = { x: 0, y: 0 }, f = !1, m = document.documentElement, l = [], h = /^Mac/.test(navigator.platform), w = { left: 37, up: 38, right: 39, down: 40, spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36 }, v = { 37: 1, 38: 1, 39: 1, 40: 1 }; function y() { if (!f && document.body) { f = !0; var e = document.body, t = document.documentElement, o = window.innerHeight, n = e.scrollHeight; if (m = 0 <= document.compatMode.indexOf("CSS") ? t : e, s = e, p.keyboardSupport && Y("keydown", x), top != self) d = !0; else if (Q && o < n && (e.offsetHeight <= o || t.offsetHeight <= o)) { var r, a = document.createElement("div"); a.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + m.scrollHeight + "px", document.body.appendChild(a), c = function () { r = r || setTimeout(function () { u || (a.style.height = "0", a.style.height = m.scrollHeight + "px", r = null) }, 500) }, setTimeout(c, 10), Y("resize", c); if ((i = new R(c)).observe(e, { attributes: !0, childList: !0, characterData: !1 }), m.offsetHeight <= o) { var l = document.createElement("div"); l.style.clear = "both", e.appendChild(l) } } p.fixedBackground || u || (e.style.backgroundAttachment = "scroll", t.style.backgroundAttachment = "scroll") } } var b = [], g = !1, r = Date.now(); function S(d, f, m) { if (function (e, t) { e = 0 < e ? 1 : -1, t = 0 < t ? 1 : -1, n.x === e && n.y === t || (n.x = e, n.y = t, b = [], r = 0) }(f, m), 1 != p.accelerationMax) { var e = Date.now() - r; if (e < p.accelerationDelta) { var t = (1 + 50 / e) / 2; 1 < t && (t = Math.min(t, p.accelerationMax), f *= t, m *= t) } r = Date.now() } if (b.push({ x: f, y: m, lastX: f < 0 ? .99 : -.99, lastY: m < 0 ? .99 : -.99, start: Date.now() }), !g) { var o = q(), h = d === o || d === document.body; null == d.$scrollBehavior && function (e) { var t = M(e); if (null == B[t]) { var o = getComputedStyle(e, "")["scroll-behavior"]; B[t] = "smooth" == o } return B[t] }(d) && (d.$scrollBehavior = d.style.scrollBehavior, d.style.scrollBehavior = "auto"); var w = function (e) { for (var t = Date.now(), o = 0, n = 0, r = 0; r < b.length; r++) { var a = b[r], l = t - a.start, i = l >= p.animationTime, c = i ? 1 : l / p.animationTime; p.pulseAlgorithm && (c = F(c)); var s = a.x * c - a.lastX >> 0, u = a.y * c - a.lastY >> 0; o += s, n += u, a.lastX += s, a.lastY += u, i && (b.splice(r, 1), r--) } h ? window.scrollBy(o, n) : (o && (d.scrollLeft += o), n && (d.scrollTop += n)), f || m || (b = []), b.length ? j(w, d, 1e3 / p.frameRate + 1) : (g = !1, null != d.$scrollBehavior && (d.style.scrollBehavior = d.$scrollBehavior, d.$scrollBehavior = null)) }; j(w, d, 0), g = !0 } } function e(e) { f || y(); var t = e.target; if (e.defaultPrevented || e.ctrlKey) return !0; if (N(s, "embed") || N(t, "embed") && /\.pdf/i.test(t.src) || N(s, "object") || t.shadowRoot) return !0; var o = -e.wheelDeltaX || e.deltaX || 0, n = -e.wheelDeltaY || e.deltaY || 0; h && (e.wheelDeltaX && K(e.wheelDeltaX, 120) && (o = e.wheelDeltaX / Math.abs(e.wheelDeltaX) * -120), e.wheelDeltaY && K(e.wheelDeltaY, 120) && (n = e.wheelDeltaY / Math.abs(e.wheelDeltaY) * -120)), o || n || (n = -e.wheelDelta || 0), 1 === e.deltaMode && (o *= 40, n *= 40); var r = z(t); return r ? !!function (e) { if (!e) return; l.length || (l = [e, e, e]); e = Math.abs(e), l.push(e), l.shift(), clearTimeout(a), a = setTimeout(function () { try { localStorage.SS_deltaBuffer = l.join(",") } catch (e) { } }, 1e3); var t = 120 < e && P(e), o = !P(120) && !P(100) && !t; return e < 50 || o }(n) || (1.2 < Math.abs(o) && (o *= p.stepSize / 120), 1.2 < Math.abs(n) && (n *= p.stepSize / 120), S(r, o, n), e.preventDefault(), void C()) : !d || !W || (Object.defineProperty(e, "target", { value: window.frameElement }), parent.wheel(e)) } function x(e) { var t = e.target, o = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey && e.keyCode !== w.spacebar; document.body.contains(s) || (s = document.activeElement); var n = /^(button|submit|radio|checkbox|file|color|image)$/i; if (e.defaultPrevented || /^(textarea|select|embed|object)$/i.test(t.nodeName) || N(t, "input") && !n.test(t.type) || N(s, "video") || function (e) { var t = e.target, o = !1; if (-1 != document.URL.indexOf("www.youtube.com/watch")) do { if (o = t.classList && t.classList.contains("html5-video-controls")) break } while (t = t.parentNode); return o }(e) || t.isContentEditable || o) return !0; if ((N(t, "button") || N(t, "input") && n.test(t.type)) && e.keyCode === w.spacebar) return !0; if (N(t, "input") && "radio" == t.type && v[e.keyCode]) return !0; var r = 0, a = 0, l = z(s); if (!l) return !d || !W || parent.keydown(e); var i = l.clientHeight; switch (l == document.body && (i = window.innerHeight), e.keyCode) { case w.up: a = -p.arrowScroll; break; case w.down: a = p.arrowScroll; break; case w.spacebar: a = -(e.shiftKey ? 1 : -1) * i * .9; break; case w.pageup: a = .9 * -i; break; case w.pagedown: a = .9 * i; break; case w.home: l == document.body && document.scrollingElement && (l = document.scrollingElement), a = -l.scrollTop; break; case w.end: var c = l.scrollHeight - l.scrollTop - i; a = 0 < c ? 10 + c : 0; break; case w.left: r = -p.arrowScroll; break; case w.right: r = p.arrowScroll; break; default: return !0 }S(l, r, a), e.preventDefault(), C() } function t(e) { s = e.target } var k, D, M = (k = 0, function (e) { return e.uniqueID || (e.uniqueID = k++) }), E = {}, T = {}, B = {}; function C() { clearTimeout(D), D = setInterval(function () { E = T = B = {} }, 1e3) } function H(e, t, o) { for (var n = o ? E : T, r = e.length; r--;)n[M(e[r])] = t; return t } function z(e) { var t = [], o = document.body, n = m.scrollHeight; do { var r = (!1 ? E : T)[M(e)]; if (r) return H(t, r); if (t.push(e), n === e.scrollHeight) { var a = O(m) && O(o) || X(m); if (d && L(m) || !d && a) return H(t, q()) } else if (L(e) && X(e)) return H(t, e) } while (e = e.parentElement) } function L(e) { return e.clientHeight + 10 < e.scrollHeight } function O(e) { return "hidden" !== getComputedStyle(e, "").getPropertyValue("overflow-y") } function X(e) { var t = getComputedStyle(e, "").getPropertyValue("overflow-y"); return "scroll" === t || "auto" === t } function Y(e, t, o) { window.addEventListener(e, t, o || !1) } function A(e, t, o) { window.removeEventListener(e, t, o || !1) } function N(e, t) { return e && (e.nodeName || "").toLowerCase() === t.toLowerCase() } if (window.localStorage && localStorage.SS_deltaBuffer) try { l = localStorage.SS_deltaBuffer.split(",") } catch (e) { } function K(e, t) { return Math.floor(e / t) == e / t } function P(e) { return K(l[0], e) && K(l[1], e) && K(l[2], e) } var $, j = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e, t, o) { window.setTimeout(e, o || 1e3 / 60) }, R = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, q = ($ = document.scrollingElement, function () { if (!$) { var e = document.createElement("div"); e.style.cssText = "height:10000px;width:1px;", document.body.appendChild(e); var t = document.body.scrollTop; document.documentElement.scrollTop, window.scrollBy(0, 3), $ = document.body.scrollTop != t ? document.body : document.documentElement, window.scrollBy(0, -3), document.body.removeChild(e) } return $ }); function V(e) { var t; return ((e *= p.pulseScale) < 1 ? e - (1 - Math.exp(-e)) : (e -= 1, (t = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - t))) * p.pulseNormalize } function F(e) { return 1 <= e ? 1 : e <= 0 ? 0 : (1 == p.pulseNormalize && (p.pulseNormalize /= V(1)), V(e)) } var I = window.navigator.userAgent, _ = /Edge/.test(I), W = /chrome/i.test(I) && !_, U = /safari/i.test(I) && !_, G = /mobile/i.test(I), J = /Windows NT 6.1/i.test(I) && /rv:11/i.test(I), Q = U && (/Version\/8/i.test(I) || /Version\/9/i.test(I)), Z = (W || U || J) && !G, ee = !1; try { window.addEventListener("test", null, Object.defineProperty({}, "passive", { get: function () { ee = !0 } })) } catch (e) { } var te = !!ee && { passive: !1 }, oe = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel"; function ne(e) { for (var t in e) o.hasOwnProperty(t) && (p[t] = e[t]) } oe && Z && (Y(oe, e, te), Y("mousedown", t), Y("load", y)), ne.destroy = function () { i && i.disconnect(), A(oe, e), A("mousedown", t), A("keydown", x), A("resize", c), A("load", y) }, window.SmoothScrollOptions && ne(window.SmoothScrollOptions), "function" == typeof define && define.amd ? define(function () { return ne }) : "object" == typeof exports ? module.exports = ne : window.SmoothScroll = ne }();
})

