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
    blueresume();
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
    blueresume();
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
    blueresume();
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
    blueresume();
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
    blueresume();
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
    blueresume();
}

//Change looks of resume depending on if projects are toggled
function blueresume() {
  var activeprojectA = document.getElementById("ProjectA");
  var activeprojectB = document.getElementById("ProjectB");
  var activeprojectC = document.getElementById("ProjectC");
  var resume1 = document.getElementById("Resume");
  var resume2 = document.getElementById("Resume2");
  var resumestart1 = document.getElementById("resumetrianglewhite");
  var resumestart2 = document.getElementById("resumetriangleblue");
  var projtriangle = document.getElementById("projecttriangle");
  var resumeend1 = document.getElementById("restriangle1");
  var resumeend2 = document.getElementById("restriangle2");
  
  if (activeprojectA.style.display=="block" || activeprojectB.style.display=="block" || activeprojectC.style.display=="block") {
    resume1.style.display="none";
    resume2.style.display="block";
    resumestart1.style.display = "none";
    resumestart2.style.display = "block";
    projtriangle.style.display = "block";
    resumeend1.style.display = "none";
    resumeend2.style.display = "block";
  } else {
    resume1.style.display="block";
    resume2.style.display="none";
    resumestart1.style.display = "block";
    resumestart2.style.display = "none";
    projtriangle.style.display = "none";
    resumeend1.style.display = "block";
    resumeend2.style.display = "none";
  }
}
