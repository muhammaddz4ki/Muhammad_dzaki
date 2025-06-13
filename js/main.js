document.addEventListener('DOMContentLoaded', function() {
    /*=============== SHOW MENU ===============*/
    const navMenu = document.getElementById('nav-menu'),
          navToggle = document.getElementById('nav-toggle'),
          navClose = document.getElementById('nav-close');

    if(navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    if(navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    /*=============== REMOVE MENU MOBILE ===============*/
    const navLink = document.querySelectorAll('.nav__link');
    function linkAction() {
        if (navMenu) {
            navMenu.classList.remove('show-menu');
        }
    }
    navLink.forEach(n => n.addEventListener('click', linkAction));

    /*=============== CHANGE BACKGROUND HEADER ===============*/
    function scrollHeader() {
        const header = document.getElementById('header');
        if (header) {
            if(this.scrollY >= 80) header.classList.add('scroll-header');
            else header.classList.remove('scroll-header');
        }
    }
    window.addEventListener('scroll', scrollHeader);

    /*=============== SHOW SCROLL UP ===============*/
    function scrollUp() {
        const scrollUpButton = document.getElementById('scroll-up');
        if (scrollUpButton) {
            if(this.scrollY >= 400) scrollUpButton.classList.add('show-scroll');
            else scrollUpButton.classList.remove('show-scroll');
        }
    }
    window.addEventListener('scroll', scrollUp);

    /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
    const sections = document.querySelectorAll('section[id]');
    function scrollActive() {
        const scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight,
                  sectionTop = current.offsetTop - 100,
                  sectionId = current.getAttribute('id');
            const navMenuItem = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
            if (navMenuItem) {
                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navMenuItem.classList.add('active-link');
                } else {
                    navMenuItem.classList.remove('active-link');
                }
            }
        });
    }
    window.addEventListener('scroll', scrollActive);
    
    /*=============== DARK/LIGHT THEME (ICON LOGIC FIXED) ===============*/
    const themeButton = document.getElementById('theme-toggle');
    const lightThemeClass = 'light-theme';
    const sunIcon = 'ri-sun-line';
    const moonIcon = 'ri-moon-line';

    // Ambil tema yang tersimpan dari localStorage
    const savedTheme = localStorage.getItem('selected-theme');

    // Fungsi untuk menerapkan tema dan ikon yang benar
    const applyTheme = (theme) => {
        if (theme === 'light') {
            // Terapkan tema terang
            document.body.classList.add(lightThemeClass);
            // Tampilkan ikon bulan (untuk beralih ke mode gelap)
            themeButton.classList.remove(sunIcon);
            themeButton.classList.add(moonIcon);
        } else {
            // Terapkan tema gelap (default)
            document.body.classList.remove(lightThemeClass);
            // Tampilkan ikon matahari (untuk beralih ke mode terang)
            themeButton.classList.remove(moonIcon);
            themeButton.classList.add(sunIcon);
        }
    };

    // Terapkan tema yang tersimpan saat halaman pertama kali dimuat
    applyTheme(savedTheme);

    // Event listener untuk tombol tema
    themeButton.addEventListener('click', () => {
        // Cek tema saat ini dengan melihat class pada body
        const currentTheme = document.body.classList.contains(lightThemeClass) ? 'light' : 'dark';
        
        // Tentukan tema baru (kebalikannya)
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        // Terapkan tema baru
        applyTheme(newTheme);
        
        // Simpan tema baru ke localStorage
        localStorage.setItem('selected-theme', newTheme);
    });


    /*=============== SCROLL REVEAL ANIMATION ===============*/
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '30px',
            duration: 2200,
            delay: 200,     
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
        });
        sr.reveal(`.home__subtitle`, { delay: 300, origin: 'left' });
        sr.reveal(`.home__title`, { delay: 400, origin: 'left', distance: '40px' });
        sr.reveal(`.home__description`, { delay: 500, origin: 'left'});
        sr.reveal(`.home__buttons`, { delay: 600, origin: 'left', interval: 100 });
        sr.reveal(`.home__social-link`, { delay: 700, origin: 'bottom', interval: 100, distance: '20px' });
        sr.reveal(`.home__image`, { delay: 400, origin: 'right', distance: '50px' });
        sr.reveal(`.section__subtitle`, { delay: 200, distance: '20px' });
        sr.reveal(`.section__title`, { delay: 300, distance: '25px' });
        sr.reveal(`.about__image`, { origin: 'left', distance: '40px' });
        sr.reveal(`.about__data .section__subtitle`, { origin: 'right', delay: 300});
        sr.reveal(`.about__data .section__title`, { origin: 'right', delay: 400});
        sr.reveal(`.about__info-item`, { origin: 'bottom', interval: 100, delay: 500, distance: '20px' });
        sr.reveal(`.about__description`, { origin: 'right', delay: 500});
        sr.reveal(`.about__buttons`, { origin: 'right', delay: 600, interval: 100});
        sr.reveal(`.skills__group`, { interval: 150, origin: 'bottom', distance: '40px', scale: 0.98 });
        sr.reveal(`.drone-projects__card, .github-projects__card`, {
            interval: 120,
            origin: 'bottom',
            distance: '40px',
            scale: 0.97,
            delay: 300
        });
        sr.reveal(`.contact__content .section__subtitle`, { origin: 'top', delay: 200});
        sr.reveal(`.contact__content .section__title`, { origin: 'top', delay: 300});
        sr.reveal(`.contact__info-item`, { origin: 'bottom', interval: 100, delay: 400, distance: '20px' });
        sr.reveal(`.contact__social-link`, { origin: 'bottom', interval: 100, delay: 500, distance: '20px' });
        sr.reveal(`.contact__form`, { origin: 'right', distance: '40px', delay: 300 });
        sr.reveal(`.footer__content, .footer__links, .footer__newsletter`, {
            origin: 'bottom',
            interval: 100,
            distance: '25px',
            delay: 200
        });
    }

    /*=============== UPDATE CURRENT YEAR ===============*/
    const yearElement = document.getElementById('current-year');
    if(yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Add this to your existing JavaScript

// Animate skills bars on scroll
function animateSkills() {
    const skills = document.querySelectorAll('.skills__progress');
    skills.forEach(skill => {
        const width = skill.style.width;
        skill.style.width = '0';
        setTimeout(() => {
            skill.style.width = width;
        }, 100);
    });
}

// Intersection Observer for skills animation
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}
});
