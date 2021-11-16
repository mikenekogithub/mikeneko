const menuList = document.querySelector('.menuList');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    menuList.style.display = 'flex';
    menuList.style.top = '0';
}
function close(){
  menuList.style.top = '-100%';
}
