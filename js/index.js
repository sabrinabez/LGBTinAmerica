var script = document.createElement('script');
 
script.src = "js/jquery.lazylinepainter-1.7.0.js";
document.getElementsByTagName('head')[0].appendChild(script); 

$('.txt').html(function(i, html) {
  var chars = $.trim(html).split("");

  return '<span>' + chars.join('</span><span>') + '</span>';
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

var obj1 = false;

$(window).scroll(function() {
   var hT = $('#logo').offset().top,
       hH = $('#logo').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (((wS+400) > (hT+hH-wH))&& (obj1==false)){
          var $logo = $('#logo');

          /**
           * Setup your Lazy Line element.
           * see README file for more settings
           */

                $logo.lazylinepainter({
                        "svgData": svgData,
                        "strokeWidth": 2,
                        "strokeColor": "#e09b99",
                        'drawSequential': false,
                        'ease': 'easeInOutQuad',
                        'onComplete':true,
                        'speedMultiplier': 5
                });
                $logo.lazylinepainter('paint');
                    obj1 = true;

   }
});



particlesJS({
  "particles": {
    "number": {
      "value": 20,
      "density": {
        "enable": true,
        "value_area": 200
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 20
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 80,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 300,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 12,
      "direction": "top",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 200,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 800,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 800,
        "size": 80,
        "duration": 2,
        "opacity": 0.8,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
})
	var count_particles, stats, update;
	count_particles = document.querySelector('.js-count-particles');
	update = function() { stats.begin(); stats.end();
	if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array)
		{ count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; }
	requestAnimationFrame(update); }; requestAnimationFrame(update);;