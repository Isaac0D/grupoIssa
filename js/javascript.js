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
// window.addEventListener('load', function() {
//     var loader = document.getElementById('loader');
//     var hidden = document.getElementById('hiddenBody');

//     setTimeout(function() {
//         loader.classList.add('ocultar');
//         loader.addEventListener('transitionend', function() {
//             loader.style.display = 'none';
//         });
//         hidden.style.overflow = 'visible';
//         hidden.style.overflowX = 'hidden';
//     }, 0);
// });


// Tiempo mínimo que el loader será visible (ms)
const loaderMinTime = 0; // 2 segundos

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
window.addEventListener("scroll", function() {
    const nav = document.getElementById("myNav");
    const container = document.querySelector(".home");
    const navLogo  = document.querySelector(".logo");
    
    const navBottom = nav.getBoundingClientRect().bottom;
    const containerBottom = container.getBoundingClientRect().bottom;
    
    if (navBottom > containerBottom) {
        nav.classList.add("smaller");
        navLogo.classList.add("smallerLogo");
    } else {
        nav.classList.remove("smaller");
        navLogo.classList.remove("smallerLogo");
    }
});

/*----------------------------------- NavScroll -----------------------------------*/ 
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });
});

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

document.querySelector('.menuOp2').addEventListener('click', () => {
	event.stopPropagation();
    document.querySelector('.menu').classList.toggle('active');
    document.querySelector('#xham').classList.toggle('activeXHam');
    document.querySelector('#ham').classList.toggle('activeHam');
});
window.onclick = function (e) {
	document.querySelector('.menu').classList.remove('active');
	document.querySelector('#xham').classList.remove('activeXHam');
    document.querySelector('#ham').classList.remove('activeHam');
}

/*----------------------------------- animations -----------------------------------*/ 
document.addEventListener('DOMContentLoaded', function () {
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Si solo quieres que la animación se dispare una vez
            observer.unobserve(entry.target);
        }
        });
    }, {
        threshold: 0.7 // 10% del elemento visible activa la animación
    });

    revealElements.forEach(el => observer.observe(el));
});


/*----------------------------------- contacto -----------------------------------*/
$(function(){

    $.fn.validate = function( options ) {
        // parametros       
        var id_msg_error = options.css.id_msg_error; 
        var class_error = options.css.class_error; 
        var msg_error = '';
        
        // Defino el ID del formulario
        var frmId = "#"+$(this).attr("id");  
        
        // Oculto el div de error        
        $(id_msg_error).css("display","none");

        // ejecuto las reglas
        $(frmId).submit(function(event){

            // Elimino las clases de error
            $(frmId+' *').removeClass(class_error);

            // Obtengo las reglas
            reglas = options.reglas;

            // Ejecuto las reglas
            for (var key in reglas) 
            {   
                var arr = reglas[key];          // regla y parametros            
                var regla = arr.split('|');     // Array de parametros
                var obj = $("#"+key);           // Campo actual

                // Campos de texto  
                if (regla[0]=='text')
                {                      
                    if ($.trim(obj.val())=='')
                    {
                        msg_error = "El campo "+key+" no puede estar vacio. <br>";
                        obj.focus();
                        obj.addClass(class_error);
                        $(id_msg_error).css("display","block");
                        $(id_msg_error).html(msg_error);
                        return false;
                    }

                    // Valido largo minimo
                    if (regla[1])
                    {                   
                        if (obj.val().length < regla[1])
                        {
                            msg_error = "El campo "+key+" debe tener un mínimo de "+regla[1]+ " caracteres. <br>";
                            obj.focus();
                            obj.addClass(class_error);
                            $(id_msg_error).css("display","block");
                            $(id_msg_error).html(msg_error);
                            return false;
                        }
                    }

                    // Valido largo maximo
                    if (regla[2])
                    {                   
                        if (obj.val().length > regla[2])
                        {
                            msg_error = "El campo "+key+" debe tener un máximo de "+regla[2]+ " caracteres. <br>";
                            obj.focus();
                            obj.addClass(class_error);
                            $(id_msg_error).css("display","block");
                            $(id_msg_error).html(msg_error);
                            return false;
                        }
                    }
                }

                // Campos de email  
                if (regla[0]=='email')
                {                 
                    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
                    if (!pattern.test(obj.val()))
                    {
                        msg_error = "El campo de "+key+" debe ser un correo valido. <br>";
                        obj.focus();
                        obj.addClass(class_error);
                        $(id_msg_error).css("display","block");
                        $(id_msg_error).html(msg_error);
                        return false;
                    }
                }
            }     
        return true;
        });
    }
});