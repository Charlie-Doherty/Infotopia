const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => tab.addEventListener('click', () =>{
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach(tabContent =>{
        tabContent.classList.remove('selected');
    })
    tabs.forEach(tab =>{
        tab.classList.remove('selected');
    })
    target.classList.add('selected');
    tab.classList.add('selected');
}));

const slides = document.querySelectorAll('[data-slide-target]');
const slideContents = document.querySelectorAll('[data-slide-content]');

slides.forEach(slide => slide.addEventListener('click', () =>{
    const target = document.querySelector(slide.dataset.slideTarget);
    slideContents.forEach(slideContent =>{
        slideContent.classList.remove('selected');
    })
    slides.forEach(tab =>{
        slide.classList.remove('selected');
    })
    target.classList.add('selected');
}));