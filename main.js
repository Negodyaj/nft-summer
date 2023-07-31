function toggleNavVisibility() {
  const nav = document.querySelector('header nav');
  const html = document.children[0];
  const body = html.children[1];
  const header = body.children[0];
  //const nav = header.children[1];
  nav.classList.toggle('visible');
  // jQuery
}

const firstCard = document.querySelector('.category-card:first-child');
const marginValue = -270;
const leftCarouselBtn = document.querySelector('.carousel-btn.left');
const rightCarouselBtn = document.querySelector('.carousel-btn.right');
let currentSlide = 0;
const pageWidth = document.body.clientWidth;

function doLeftSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    firstCard.style.marginLeft = marginValue * currentSlide + 'px';
    console.log('<-');
    rightCarouselBtn.classList.remove('disabled');

    if (currentSlide === 0) {
      leftCarouselBtn.classList.add('disabled');
    }
  }
}

function doRightSlide() {
  if (pageWidth > 850 && currentSlide < 5 || pageWidth <= 850 && currentSlide < 8) {
    currentSlide++;
    firstCard.style.marginLeft = marginValue * currentSlide + 'px';
    console.log('->');
    leftCarouselBtn.classList.remove('disabled');

    if (pageWidth > 850 && currentSlide === 5 || pageWidth <= 850 && currentSlide === 8) {
      rightCarouselBtn.classList.add('disabled');
    }
  }
}
