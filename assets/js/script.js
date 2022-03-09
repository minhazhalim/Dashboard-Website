const menuToggleOpen = document.querySelector('.menu-toggle-open');
const menuToggleClose = document.querySelector('.menu-toggle-close');
const navMobileElement = document.querySelector('.nav-mobile');
const bodyElement = document.body;
const themeToggleButton = document.querySelector('.theme-toggle-button');
const currentTheme = localStorage.getItem('currentTheme');
menuToggleOpen.addEventListener('click',() => navMobileElement.classList.add('active'));
menuToggleClose.addEventListener('click',() => navMobileElement.classList.remove('active'));
document.addEventListener('click',element => {
     const dropdown = document.querySelector('.dropdown');
     if(element.target.classList.contains('dropdown-button')){
          dropdown.classList.add('active');
     }else{
          dropdown.classList.remove('active');
     }
});
if(currentTheme){
     bodyElement.classList.add('theme-light');
}
themeToggleButton.addEventListener('click',() => {
     bodyElement.classList.toggle('theme-light');
     if(bodyElement.classList.contains('theme-light')){
          localStorage.setItem('currentTheme','themeActive');
     }else{
          localStorage.removeItem('currentTheme','themeActive');
     }
});