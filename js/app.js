
// for header sticky
let headerWrap = document.querySelector('.header-wrap');

window.addEventListener('scroll', () => {
    headerWrap.classList.toggle('sticky', window.scrollY > 0);
});

// for top menu
let menuIcon = document.querySelector('.menu-icon');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('active');
};

// for video play section
let box = document.querySelectorAll('.box');
let videoPlaySection = document.querySelector('.video-play-section');
let videoCloseIcon = document.querySelector('.video-close-icon');
let video = document.querySelector('.video');

for(let i = 0; i < box.length; i++){
    box[i].onclick = () => {
        videoPlaySection.classList.add('active');
    };
};

videoCloseIcon.onclick = () => {
    videoPlaySection.classList.remove('active');
    video.src = '';
};
