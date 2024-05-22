let botonTur= document.querySelector('#pri > button')
let botonProd = document.querySelector('#sec > button')
const body = document.body;

if (window.location.href === "http://localhost:300/") {
  darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
  });
}
let botones= document.querySelectorAll('.botnav1')
botones.forEach(function(boton) {
  boton.addEventListener('mouseover', function() {
    boton.classList.add('botnav2');
    /* boton.style.backgroundColor = '#FFFFFF33';
    boton.style.borderRadius = '30px'; */

  });
});
botones.forEach(function(boton) {
  boton.addEventListener('mouseleave', function() {
    boton.classList.remove('botnav2');

    /* boton.style.backgroundColor = 'none';
    boton.style.borderRadius = '0px'; */
    

  });
});
