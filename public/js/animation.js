window.sr = ScrollReveal();

//Main
sr.reveal('header', {
    duration: 3000,
    origin: 'top',
    distance: '100px',
    reset: true 
});
sr.reveal('#main-content', {
    duration: 3000,
    reset: true
});

//Títulos
sr.reveal('#experience-title', {
    duration: 3000,
    origin: 'left',
    distance: '100px',
    reset: true
});
sr.reveal('#projects-title', {
    duration: 3000,
    origin: 'left',
    distance: '100px',
    reset: true
});
