$('.banner-slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  // adaptiveHeight: true
});

var tabTriggerEl = document.getElementById('myTab');
var tab = new bootstrap.Tab(tabTriggerEl);

tabTriggerEl.addEventListener('shown.bs.tab', function (event) {
  tabTriggerEl.querySelectorAll('.nav-link').forEach(function (link) {
    link.classList.remove('active');
  });

  event.target.classList.add('active');
});
