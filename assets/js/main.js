const nav = document.getElementById('nav-menu')
const navLink = document.querySelectorAll('.nav-link')
const sections = document.querySelectorAll('section[id]')

/*===== SHOW MENU =====*/
function showMenu() {  
    nav.classList.toggle('show-menu')
}

/*===== REMOVE MENU MOBILE =====*/
function linkActive() {
    nav.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkActive));


/*===== SCROLL SECTIONS ACTIVE LINK =====*/
function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')}
    })
}
window.addEventListener('scroll', scrollActive)


/*===== CHANGE BACKGROUND HEADER =====*/ 
function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*===== SHOW SCROLL TOP =====*/ 
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')
    if (this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


/*===== MIXITUP FILTER PORTFOLIO =====*/ 
const mixer = mixitup('.portfolio-container', {
    selectors:{
        target: '.portfolio-content'
    },
    animation:{
        duration: 400
    }
})

/* Link active portfolio */
const linkPortfolio = document.querySelectorAll('.portfolio-item')

function activePortfolio() {
    if(linkPortfolio){
        linkPortfolio.forEach(l => l.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio')
    }
}
linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio))


/*===== GSAP ANIMATION =====*/ 

gsap.from('.image', {opacity: 0, duration: 2, delay:.5, x:60})
gsap.from('.home-data', {opacity: 0, duration: 2, delay:.8, y:25})
gsap.from('.home-title, .home-name, .home-profesi, .home-btn', {opacity: 0, duration: 2, delay:1, y:25, ease:'expo.out', stagger:.2})
gsap.from('.nav-logo, .nav-toggle', {opacity: 0, duration: 2, delay:1.5, y:25, ease:'expo.out', stagger:.2})
gsap.from('.nav-item', {opacity: 0, duration: 2, delay:1.8, y:25, ease:'expo.out', stagger:.2})
gsap.from('.social-icon', {opacity: 0, duration: 2, delay:2.3, y:25, ease:'expo.out', stagger:.2})

