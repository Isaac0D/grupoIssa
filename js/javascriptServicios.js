/*----------------------------------- URL Refresh -----------------------------------*/
window.onload = function() {
    if (window.location.hostname) {
        history.replaceState(null, null, ' ');
    }
}

/*----------------------------------- Page Top -----------------------------------*/
function scrollToTop() {
    window.scrollTo(0, 0);
}
scrollToTop();

/*----------------------------------- Loader -----------------------------------*/
const loaderMinTime = 1000; // 2 segundos

window.addEventListener('load', function () {
    setTimeout(() => {
        tryToHideLoader();
    }, loaderMinTime);
});

const loader = document.getElementById('loader');
const hidden = document.getElementById('hiddenBody');

function tryToHideLoader() {
    loader.classList.add('fade-out');

    // Duración de la transición en ms (debe coincidir con CSS)
    const fadeDuration = 500;

    setTimeout(function () {
        loader.style.display = 'none';
        hidden.style.overflow = 'visible';
        hidden.style.overflowX = 'hidden';

        const homeEls = document.querySelectorAll('.reveal-home');
        homeEls.forEach((el, i) => {
            setTimeout(() => {
                el.classList.add('visible');
            }, i * 150); // efecto en cascada
        });
    }, fadeDuration);
}

/*----------------------------------- nav -----------------------------------*/
// window.addEventListener("scroll", function() {
//     const nav = document.getElementById("myNav");
//     // const container = document.querySelector(".home");
//     const navLogo  = document.querySelector(".logo");
//     const navRepseLogo  = document.querySelector(".repseLogoNav");
//     // const expLogo  = document.querySelector(".expLogo");


//     const navBottom = nav.getBoundingClientRect().bottom;
//     // const containerBottom = container.getBoundingClientRect().bottom;

//     if (navBottom > containerBottom) {
//         nav.classList.add("smaller");
//         navLogo.classList.add("smallerLogo");
//         navRepseLogo.classList.add("smallerRepseLogoNav");
//         // expLogo.classList.add("smallerExpLogo");
//     } else {
//         nav.classList.remove("smaller");
//         navLogo.classList.remove("smallerLogo");
//         navRepseLogo.classList.remove("smallerRepseLogoNav");
//         // expLogo.classList.remove("smallerExpLogo");
//     }
// });

/*----------------------------------- NavScroll -----------------------------------*/
// document.addEventListener("DOMContentLoaded", function() {
//     const navLinks = document.querySelectorAll("nav a");

//     navLinks.forEach(link => {
//         link.addEventListener("click", function(event) {
//             event.preventDefault();
//             const targetId = this.getAttribute("href");
//             const targetElement = document.querySelector(targetId);

//             if (targetElement) {
//                 window.scrollTo({
//                     top: targetElement.offsetTop - 60,
//                     behavior: "smooth"
//                 });
//             }
//         });
//     });
// });

/*-----------------------------------  Menu hamburguesa -----------------------------------*/
document.querySelector('.menu-btn').addEventListener('click', () => {
	event.stopPropagation();
    document.querySelector('.menu').classList.toggle('active');
    document.querySelector('#xham').classList.toggle('activeXHam');
    document.querySelector('#ham').classList.toggle('activeHam');
});

document.querySelector('.menuOp1').addEventListener('click', () => {
	event.stopPropagation();
    document.querySelector('.menu').classList.toggle('active');
    document.querySelector('#xham').classList.toggle('activeXHam');
    document.querySelector('#ham').classList.toggle('activeHam');
});

// document.querySelector('.menuOp2').addEventListener('click', () => {
// 	event.stopPropagation();
//     document.querySelector('.menu').classList.toggle('active');
//     document.querySelector('#xham').classList.toggle('activeXHam');
//     document.querySelector('#ham').classList.toggle('activeHam');
// });
window.onclick = function (e) {
	document.querySelector('.menu').classList.remove('active');
	document.querySelector('#xham').classList.remove('activeXHam');
    document.querySelector('#ham').classList.remove('activeHam');
}