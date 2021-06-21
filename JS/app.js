const arrows = document.querySelectorAll('.arrow');
const dropdown = document.querySelector('.dropdown');
const lines = document.querySelector('.lines');
const menu = document.querySelector('.mobile-menu');

arrows.forEach(arrow => arrow.addEventListener('click', e =>{
    if(!e.target.classList.contains('rotate')){
        arrows.forEach(arrow => arrow.classList.remove('rotate'));
        dropdown.classList.remove('toggle');
      }
    arrow.classList.toggle('rotate');
    dropdown.classList.toggle('toggle');
}));

lines.addEventListener('click', () =>{
   menu.classList.toggle('open');
   dropdown.classList.remove('toggle');
   arrows.forEach(arrow => arrow.classList.remove('rotate'));
});

window.addEventListener('resize', () =>{
  if(window.innerWidth <= 1200){
    if(!menu.classList.contains('open')){
      dropdown.classList.remove('toggle');
      arrows.forEach(arrow => arrow.classList.remove('rotate'));
    }
  }
});

window.addEventListener('resize', () =>{
  if(window.innerWidth >= 1200){
    if(menu.classList.contains('open')){
      menu.classList.remove('open');
    }
  }
});