document.querySelector('.nav-toggle').addEventListener('click', function () {
    this.classList.toggle('open');
    document.querySelector('.site-nav').classList.toggle('open');
});

const images = [...document.querySelectorAll('.profile__columns img')];
const lightbox = document.getElementById('lightbox');

images.forEach(image => {
    image.addEventListener('click', function () {
        lightbox.style.display = 'block';
        let imageSrc = this.getAttribute('src');
        let modalImage = document.createElement('img');
        modalImage.setAttribute('src', imageSrc);
        modalImage.classList.add('lightbox__img');
        lightbox.appendChild(modalImage);
    });
});

document.querySelector('.lightbox__close-icon').addEventListener('click', function () {
    lightbox.removeChild(document.querySelector('.lightbox__img'));
    lightbox.style.display = 'none';
});

document.querySelector('.lightbox__prev-icon').addEventListener('click', function () {
    let image = document.querySelector('.lightbox__img');
    let imageNumber = Number(image.getAttribute('src')[11]);
    imageNumber === 1 ? imageNumber = 6 : imageNumber--;
    image.setAttribute('src', `images/img0${imageNumber}.jpg`);
});

document.querySelector('.lightbox__next-icon').addEventListener('click', function () {
    let image = document.querySelector('.lightbox__img');
    let imageNumber = Number(image.getAttribute('src')[11]);
    imageNumber === 6 ? imageNumber = 1 : imageNumber++;
    image.setAttribute('src', `images/img0${imageNumber}.jpg`);
});

window.addEventListener('scroll', function () {
    if (window.pageYOffset >= 1080) {
        document.querySelector('.page-top').style.display = 'block';
    } else {
        document.querySelector('.page-top').style.display = 'none';
    }
});

$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    $('.nav-toggle.open').removeClass('open');
    $('.site-nav.open').removeClass('open');

    let $href = $.attr(this, 'href');

    $('html, body').animate({
        scrollTop: $($href).offset().top
    }, 750);

    window.location.hash = $href;
});

$('.page-top').on('click', function () {
    $('html, body').animate({
        scrollTop: $('#home').offset().top
    }, 750);

    window.location.hash = $('a[href="#home"]').attr('href');
});

$('header .btn, .about .btn').on('click', function () {
    $('html, body').animate({
        scrollTop: $('#profile').offset().top
    }, 750);

    window.location.hash = $('a[href="#profile"]').attr('href');
});