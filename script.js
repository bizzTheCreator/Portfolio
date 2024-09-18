//linea sotto pagine corrente in nav bar
const currentUrl = window.location.pathname;
const barLinks = document.querySelectorAll('nav ul li a');

// Controlla ciascun link
barLinks.forEach(link => {
    // Ottieni solo il pathname del link
    const linkPath = new URL(link.href).pathname;
    // Confronta il pathname del link con l'URL corrente
    if (linkPath === currentUrl) {
        link.classList.add('currentPage');
    }
});

document.addEventListener("DOMContentLoaded", function () { //sesegue solo dopo che tutta la pagina é caricata
    const btnHome = document.getElementById('btnHome');
    const contentHome = document.getElementById('contentHome');
    const popupBar = document.getElementById('popupBar');

    if(btnHome){//controlla che gli elementi ci siano nella pagina
        btnHome.addEventListener('click', function () {
            contentHome.classList.add('blur');
            setTimeout(() => {
                popupBar.classList.remove('hidden');
                popupBar.classList.add('show');
            }, 100);
        });
    }
   
});

// document.addEventListener("DOMContentLoaded", function () { 
//     const message = document.getElementById('message');

//     if(message){
//         function autoResize(message) {
//             message.style.height = 'auto';  // Resetta l'altezza
//             message.style.height = message.scrollHeight + 'px';  // Imposta l'altezza in base al contenuto
//         }
//     }

// });


// document.addEventListener("DOMContentLoaded", function () {
//     var cardProg =  document.getElementById("cardProg");

//     if(cardProg){
//         cardProg.addEventListener("click", function () {
//             window.location.href = "competenze.html";
//         });
//     }
    
// });