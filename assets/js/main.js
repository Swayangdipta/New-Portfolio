ScrollReveal({reset: true});
ScrollReveal().reveal('.landing_title',{delay: 300,reset: false,distance: '200%',origin: 'bottom',duration: 1500,scale: 0.5});
ScrollReveal().reveal('.projects_btn',{delay: 1600,scale: 0.5,reset: false});
ScrollReveal().reveal('.scroll_down',{delay: 1800,scale: 0.5,reset: false});
ScrollReveal().reveal('.projects');
ScrollReveal().reveal('.section_title', {delay: 300,reset: false,distance: '80%',origin: 'left'});
ScrollReveal().reveal('.about_left', {delay: 700,scale: 0.5});
ScrollReveal().reveal('.projects_container', {delay: 700});
let items = document.querySelectorAll('.project_card');
let time = 700;
items.forEach(element => {
    ScrollReveal().reveal(element, {delay: time,scale: 0.1});
    time = time + 350;
});
ScrollReveal().reveal('.about_right_title', {delay: 900,scale: 0.5});
ScrollReveal().reveal('.about_bio', {delay: 1200,scale: 0.5,opacity: 0});
let icons = document.querySelectorAll('.social_icons');
let time2 = 1400;

icons.forEach(elm=>{
    ScrollReveal().reveal(elm, {delay: time2,scale: 0.1});
    time2 = time2 + 200;
})

let cards = document.querySelectorAll('.indi_project_card');
let time3 = 700;

cards.forEach(elem => {
    ScrollReveal().reveal(elem, {delay: time3,scale: 0.5});
    time3 = time3 + 200;
});