(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 50) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

})(jQuery); // End of use strict

// Toggle show/hide and go to projects (change project button href to appropriate link)
function projecttoggleA() {
  var a = document.getElementById("ProjectA");
  var b = document.getElementById("ProjectB");
  var c = document.getElementById("ProjectC");
  var ba = document.getElementById("projbtnA");
  var bb = document.getElementById("projbtnB");
  var bc = document.getElementById("projbtnC");
    b.style.display="none";
    c.style.display="none";
    if (a.style.display === "none") {
        a.style.display = "block";
        ba.setAttribute("href", "#ProjectA");
        ba.textContent="Collapse";
        bb.textContent="Check it Out!"
        bc.textContent="Check it Out!"
    } else {
        a.style.display = "none";
        ba.setAttribute("href", "#Project1");
        ba.textContent="Check it Out!"
    }
}
function projecttoggleB() {
  var a = document.getElementById("ProjectA");
  var b = document.getElementById("ProjectB");
  var c = document.getElementById("ProjectC");
  var ba = document.getElementById("projbtnA");
  var bb = document.getElementById("projbtnB");
  var bc = document.getElementById("projbtnC");
    a.style.display="none";
    c.style.display="none";
    if (b.style.display === "none") {
        b.style.display = "block";
        bb.setAttribute("href", "#ProjectB");
        bb.textContent="Collapse";
        ba.textContent="Check it Out!"
        bc.textContent="Check it Out!"
    } else {
        b.style.display = "none";
        bb.setAttribute("href", "#Project2");
        bb.textContent="Check it Out!"
    }
}
function projecttoggleC() {
  var a = document.getElementById("ProjectA");
  var b = document.getElementById("ProjectB");
  var c = document.getElementById("ProjectC");
  var ba = document.getElementById("projbtnA");
  var bb = document.getElementById("projbtnB");
  var bc = document.getElementById("projbtnC");
    a.style.display="none";
    b.style.display="none";
    if (c.style.display === "none") {
        c.style.display = "block";
        bc.setAttribute("href", "#ProjectC");
        bc.textContent="Collapse";
        ba.textContent="Check it Out!"
        bb.textContent="Check it Out!"
    } else {
        c.style.display = "none";
        bc.setAttribute("href", "#Project3");
        bc.textContent="Check it Out!"
    }
}

//For projects via navbar
function projectnavA() {
  var a = document.getElementById("ProjectA");
  var b = document.getElementById("ProjectB");
  var c = document.getElementById("ProjectC");
  var ba = document.getElementById("projbtnA");
  var bb = document.getElementById("projbtnB");
  var bc = document.getElementById("projbtnC");
    a.style.display="block";
    b.style.display="none";
    c.style.display="none";
    ba.textContent="Collapse"
    bb.textContent="Check it Out!"
    bc.textContent="Check it Out!"
}
function projectnavB() {
  var a = document.getElementById("ProjectA");
  var b = document.getElementById("ProjectB");
  var c = document.getElementById("ProjectC");
  var ba = document.getElementById("projbtnA");
  var bb = document.getElementById("projbtnB");
  var bc = document.getElementById("projbtnC");
    a.style.display="none";
    b.style.display="block";
    c.style.display="none";
    ba.textContent="Collapse"
    bb.textContent="Check it Out!"
    bc.textContent="Check it Out!"
}
function projectnavC() {
  var a = document.getElementById("ProjectA");
  var b = document.getElementById("ProjectB");
  var c = document.getElementById("ProjectC");
  var ba = document.getElementById("projbtnA");
  var bb = document.getElementById("projbtnB");
  var bc = document.getElementById("projbtnC");
    a.style.display="none";
    b.style.display="none";
    c.style.display="block";
    ba.textContent="Collapse"
    bb.textContent="Check it Out!"
    bc.textContent="Check it Out!"
}
