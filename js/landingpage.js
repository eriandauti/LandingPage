const navcontent = document.querySelector('.navcontent');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    navcontent.style.display = 'flex';
    navcontent.top = '0';
}

function close(){
    navcontent.style.top = '-100%';
}