import baffle from 'baffle';

let c = baffle('.myname span')
  .start()
  .set({
    characters: 'Abcdefghijklmnopqrstuvwxyz',
    speed: 90
  })
  .reveal(
    [1000], [700]
  );

let b = baffle('.profile span')
  .start()
  .set({
    characters: '█▒█ ░▒<<█ █//▓▒ >▓> █░▒/░ ░>▒▓ >/▒ <█>▒ ▒▒░>',
    speed: 90
  })
  .reveal(
    [2000], [1000]
  );

// particles
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value":120, "density": {
        "enable": true, "value_area": 800
      }
    }, 
    "color": {
      "value": "#787878"
    }, 
    "shape": {
      "type":"circle", "stroke": {
        "width": 0, "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg", "width": 100, "height": 100
      }
    }, 
    "opacity": {
      "value":1, "random":true, "anim": {
        "enable": true, "speed": 1, "opacity_min": 0, "sync": false
      }
    },
    "size": {
      "value":1.5, "random":true, "anim": {
        "enable": false, "speed": 4, "size_min": 0.3, "sync": false
      }
    },
    "line_linked": {
      "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1
    },
    "move": {
      "enable":true, "speed":1, "direction":"none", "random":true, "straight":false, "out_mode":"out", "bounce":false, "attract": {
        "enable": false, "rotateX": 600, "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on":"canvas", "events": {
      "onhover": {
        "enable": true, 
        "mode": "bubble"
      },
      "onclick": {
        "enable": true, 
        "mode": 
        "push"
      },
      "resize":true
    },
    "modes": {
      "grab": {
        "distance":400, 
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250, 
        "size": 0, 
        "duration": 2, 
        "opacity": 0, 
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
  "retina_detect":true
});

// DarkMode
function darkMode() {
  let time = new Date(),
      hour = time.getHours(),
      body = document.body;

  if (hour > 7 && hour < 20) {
    // Morning
    body.className += "light_theme";
  } else {
    // Evening
    body.className += "dark_theme";
  }
}

darkMode();