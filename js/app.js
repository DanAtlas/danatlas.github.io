$(window).on('load', function () {
	$('.myname').append('<span>Dias Abishev</span>');
	let c = baffle('.myname span')
    .start()
    .set({
      characters: 'Abcdefghijklmnopqrstuvwxyz',
      speed: 90
    })
    .reveal(
      [1000], [700]
    );

  $('.profile').append('<span>Front-end</span><span>Developer</span>');
  let b = baffle('.profile span')
    .start()
    .set({
      characters: '█▒█ ░▒<<█ █//▓▒ >▓> █░▒/░ ░>▒▓ >/▒ <█>▒ ▒▒░>',
      speed: 90
    })
    .reveal(
      [2000], [1000]
    );
});

// DarkMode
function darkMode() {
  let time = new Date(),
    	hour = time.getHours();

  if (hour > 7 && hour < 20) {
    // Morning
    document.body.style.background = "-webkit-linear-gradient(top, rgba(250,250,250,1) 0%, rgba(243,243,243,1) 47%, rgba(232,232,232,1) 100%)";
    document.body.style.color = "var(--dark)";
  } else {
    // Evening
    document.body.style.background = "var(--bg-dark)";
    document.body.style.color = "var(--white)";
    document.querySelector('h1').style.cssText = "text-shadow: 1px 1px 20px rgba(255, 255, 255, 0.5);";
    var myTitles = document.querySelectorAll('h3');
    for (let myTitle of myTitles) {
	    myTitle.style.cssText += "background-image: unset; -webkit-text-fill-color: unset; -webkit-background-clip: unset; background-clip: unset;"
	  }
    var myLinks = document.querySelectorAll('a');
    for (let myLink of myLinks) {
	    myLink.style.cssText = "color: var(--white); background-image: unset; -webkit-text-fill-color: unset; -webkit-background-clip: unset; background-clip: unset"
	  }
  }
}

darkMode();

// particles
particlesJS("particles-js", {"particles":{"number":{"value":160,"density":{"enable":true,"value_area":800}},"color":{"value":"#555560"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":1.5,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;