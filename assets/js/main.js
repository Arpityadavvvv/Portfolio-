/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav_menu')    // import type hismjo ise 
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

// menu showing 
if(navToggle)
    {
        navToggle.addEventListener('click',() =>{
            console.log(" toggle is clicked ");
            
            
            navMenu.classList.add('show-menu');
        })
    }


// menu hidding 
if(navClose)
    {
        navClose.addEventListener('click',()=> {
            console.log(" toggle is clicked ");
            navMenu.classList.remove('show-menu');
        })
    }


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link'); 

const linkAction = () => {
    // tum jb bhi kisi link pr clikc kroge to menu bar hat jana chaiyeee 
    const navMenu = document.getElementById('nav_menu');

    navMenu.classList.remove('show-menu');
}

    navLink.forEach(n => n.addEventListener('click',linkAction));    // very imp 
 



/*=============== ADD BLUR HEADER ===============*/

const blurHeader = () =>
    {
        const header = document.getElementById('header');

        this.scrollY >= 50 ? header.classList.add('blur-header')  // agr screen aap 50 pixel se upr tk scroll krchuke ho to yeh add krdega us class ko wrna remove
                           : header.classList.remove('blur-header')
    }

    window .addEventListener('scroll' ,blurHeader);  // screen jb jb scroll hoga yeh call hojayga apne aap




/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {

    e.preventDefault();
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_9s9zvn5','template_n7hed12','#contact-form','4OoEIhkINOv2_HCWB')
    .then(()=> {
        contactMessage.textContent = 'Message sent successfully ✅';

        // remove it after 5 sse 
        setTimeout(() => {
            contactMessage.textContent='';
        },5000)

        // last me sb reset krdo 
        contactForm.reset();
    })
}

contactForm.addEventListener('submit',sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
const scrollUp = document.getElementById('scroll-up')
// when the scroll is higher than 350 vport height 
this.scrollY >= 350 ? scrollUp.classList.add('show-scroll'):scrollUp.classList.remove('show-scroll');

}
window.addEventListener('scroll',scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach (current => {
        const sectionHeight = current.offsetHeight
        sectionTop = current.offsetTop-58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav__menu a[href*='+sectionId + ']');

        if(scrollDown >sectionTop && scrollDown <= sectionaTop + sectionHeight)
            {
                sectionClass.classList.add('active-link');
            }else{
                sectionClass.classList.remove('active-link');
            }
    })
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance : '60px',
    duration: 2500,
    delay:400,
})

sr.reveal(`.home__data, .experience, .skills , .contact__container`)
sr.reveal(`.home__img` ,{delay:600})
sr.reveal(`.home__scroll`,{delay:800})
sr.reveal(`.work__card , .services__card`,{interval:100})
sr.reveal(`.about__content`,{origin:'right'})
sr.reveal(`.about__img`,{origin:'left'})