//  Toggle class active
const navbarnav = document.querySelector ('.navbar-nav');
// ketika hamburgermenu diklik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarnav.classList.toggle('active');
};
// klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector ('#hamburger-menu');
document.addEventListener ('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
        navbarnav.classList.remove('active')
    }
})

Swal.fire({
    imageUrl: '../img/projects/gambar5.jpg',
    imageHeight: 300,
    imageAlt: 'A tall image'
  })