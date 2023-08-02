function toggleNavVisibility() {
  const nav = document.querySelector('header nav');
  const html = document.children[0];
  const body = html.children[1];
  const header = body.children[0];
  //const nav = header.children[1];
  nav.classList.toggle('visible');
  // jQuery
}

const categories = [
  {
    id: 1,
    name: 'Art',
    background: './assets/categories/category1.png',
    icon: './assets/icons/PaintBrush.svg',
  },
  {
    id: 2,
    name: 'Collectibles',
    background: './assets/categories/category2.png',
    icon: './assets/icons/Swatches.svg',
  },
  {
    id: 3,
    name: 'Music',
    background: './assets/categories/category3.png',
    icon: './assets/icons/MusicNotes.svg',
  },
  {
    id: 4,
    name: 'Photography',
    background: './assets/categories/category4.png',
    icon: './assets/icons/Camera.svg',
  },
  {
    id: 5,
    name: 'Video',
    background: './assets/categories/category5.png',
    icon: './assets/icons/VideoCamera.svg',
  },
  {
    id: 6,
    name: 'Utility',
    background: './assets/categories/category6.png',
    icon: './assets/icons/MagicWand.svg',
  },
  {
    id: 7,
    name: 'Sport',
    background: './assets/categories/category7.png',
    icon: './assets/icons/Basketball.svg',
  },
  {
    id: 8,
    name: 'Virtual Worlds',
    background: './assets/categories/category8.png',
    icon: './assets/icons/Planet.svg',
  },
];

const categoriesContainer = document.querySelector('.categories-grid');

function renderCategories() {
  for (const item of categories) {
    const newCategory = document.createElement('div');
    categoriesContainer.appendChild(newCategory);
    newCategory.outerHTML = `
      <div class="category-card">
        <div class="top-part">
          <img src="${item.background}" />
          <div class="background"></div>
          <img class="icon" src="${item.icon}" />
        </div>
        <div>${item.name}</div>
      </div>`;
  }
}

renderCategories();


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

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data));

const payload = {
  title: 'foo',
  body: 'bar',
  userId: 1,
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(payload),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));