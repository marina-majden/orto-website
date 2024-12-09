



/* FUNCTION FOR MOBILE NAVIGATION WHICH adds/removes class .mobile from NAVBAR WHEN A USER CLICK NAVBAR-TOGGLE BUTTON */
window.onload = function () {

  let navbarToggle = document.getElementById("navbar-toggle");
  let navbarMobile = document.getElementById("navbar-mobile");
  let navlinks = document.querySelectorAll(".nav-link");

  navbarToggle.onclick = function () {
    navbarMobile.classList.toggle("show");
    navbarToggle.classList.toggle("on");
  };
  navlinks.forEach(function (navlink) {
    navlink.onclick = function () {
      navbarMobile.classList.toggle("show");
      navbarToggle.classList.toggle("on");
    };
  });
};

/* function openDropdown(element) {
  element.classList.toggle('open');
    document.getElementsByTagName('body')[0].classList.toggle('open');
}; */

  new Glide('.glide', {
    type: 'carousel',
autoplay: 2000,
gap: 1,
perView: 1,
breakpoints: {
  600: {
    perView: 1,
  },
  768: {
    perView: 2,
  },
},
peek: {
  before: 200,
  after: 200,
},
bound: true,
loop: true,
focusAt: 'center',

   }).mount();
