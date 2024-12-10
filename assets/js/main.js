



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
    startAt: 0,
    perView: 3,
    focusAt: 'center',
    gap: 5,
    autoplay: 3000,
    loop: 'true',
    animationTimingFunc: 'ease-in-out',
    animationDuration: 800,
    dragThreshold: false,
       }).mount();
    