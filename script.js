const menuBtn = document.querySelector('.list')
const navMenu = document.querySelector('#nav-menu')
if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('open');
            navMenu.classList.toggle('open');
        });
        document.querySelectorAll('#nav-menu a').forEach(link => {
            link.addEventListener('click', () => {      
                menuBtn.classList.remove('open');
                navMenu.classList.remove('open');
            });
        });
}