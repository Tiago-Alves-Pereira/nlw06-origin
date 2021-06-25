const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}

function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  window.scrollY >= navHeight
    ? header.classList.add('scroll')
    : header.classList.remove('scroll')
}

const swiper = new Swiper('.swiper-container', {
  slidesPreview: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: false,
  keyboard: true
})

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 800,
  reset: true
})

scrollReveal.reveal(
  `
  #home .image, #home .text,
  #about .image, #about .text,
  #aervices header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links
  footer .brand, footer .social
  `,
  { interval: 100 }
)

function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  window.scrollY >= 560
    ? backToTopButton.classList.add('show')
    : backToTopButton.classList.remove('show')
}

window.addEventListener('scroll', function () {
  backToTop()
  changeHeaderWhenScroll()
})
