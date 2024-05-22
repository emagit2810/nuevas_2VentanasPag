let contenedorNav = document.querySelector('.contenedorPrincipal')  
let botonTur= document.querySelector('#pri > button')
let botonProd = document.querySelector('#sec > button')
const darkModeToggle = document.getElementById('bd-theme');
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

/* swipper *//* swipper */
if (window.location.href === "http://localhost:300/") {
  /* swipper */
var $swiperSelector = $('.swiper-container');

$swiperSelector.each(function(index) {
    var $this = $(this);
    $this.addClass('swiper-slider-' + index);
    
    var dragSize = $this.data('drag-size') ? $this.data('drag-size') : 50;
    var freeMode = $this.data('free-mode') ? $this.data('free-mode') : false;
    var loop = $this.data('loop') ? $this.data('loop') : false;
    var slidesDesktop = $this.data('slides-desktop') ? $this.data('slides-desktop') : 4;
    var slidesTablet = $this.data('slides-tablet') ? $this.data('slides-tablet') : 3;
    var slidesMobile = $this.data('slides-mobile') ? $this.data('slides-mobile') : 2.5;
    var spaceBetween = $this.data('space-between') ? $this.data('space-between'): 20;

    var swiper = new Swiper('.swiper-slider-' + index, {
      direction: 'horizontal',
      loop: loop,
      freeMode: freeMode,
      spaceBetween: spaceBetween,
      breakpoints: {
        1920: {
          slidesPerView: slidesDesktop
        },
        992: {
          slidesPerView: slidesTablet
        },
        320: {
           slidesPerView: slidesMobile
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: dragSize
      }
   });
});
  
}



/* 
botonProd.addEventListener('click', function(){
  contenedorNav.innerHTML = `
  <section id='#navbar2'>
  <div class="container-fluid">
    <div class="row">
      <div class="scrollcards">
        
          <div class="card">
            <img class="card-img-top" src="http://via.placeholder.com/350x150">
            <div class="card-block">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">Text Here</p>
            </div>
          </div>
        
          <div class="card">
            <img class="card-img-top" src="http://via.placeholder.com/350x150">
            <div class="card-block">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">Text Here</p>
            </div>
          </div>
          
          <div class="card">
            <img class="card-img-top" src="http://via.placeholder.com/350x150">
            <div class="card-block">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">Text Here</p>
            </div>
          </div>
        
          <div class="card">
            <img class="card-img-top" src="http://via.placeholder.com/350x150">
            <div class="card-block">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">Text Here</p>
            </div>
          </div>
        
          <div class="card">
            <img class="card-img-top" src="http://via.placeholder.com/350x150">
            <div class="card-block">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">Text Here</p>
            </div>
          </div>
        
          <div class="card">
            <img class="card-img-top" src="http://via.placeholder.com/350x150">
            <div class="card-block">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">Text Here</p>
            </div>
          </div>
        
          <div class="card">
            <img class="card-img-top" src="http://via.placeholder.com/350x150">
            <div class="card-block">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">Text Here</p>
            </div>
          </div>
        
          <div class="card">
            <img class="card-img-top" src="http://via.placeholder.com/350x100">
            <div class="card-block">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">Text Here</p>
            </div>
          </div>
       
        
      </div>
    </div>
   </div>
</section>
  
  `
})

 */
  

