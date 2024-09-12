/*========Toggle icon navbar=========== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*===============scroll sections active link==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        
        let top = window.scrollY;
        console.log(top);
        
        let offset = sec.offsetTop - 150;
        console.log(offset);
        let height = sec.offsetHeight;
        console.log(height);
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                //links.classList.add('active');
                document.querySelector('header nav a').classList.add('active');
            });      
        }
    });

    /*======Sticky navbar======= */
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);
    /*==============remove toggle icon and navbar when click navbar link(scroll)======== */
    menuIcon.classList.remove('bx-x');  
    navbar.classList.remove('active');

};
/*==============scroll reveal=================*/
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,.about-img, .services-container, .portfolio-box, .contact form',{ origin:
'bottom'});