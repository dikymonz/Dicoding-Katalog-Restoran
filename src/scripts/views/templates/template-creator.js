import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <div class="box">
    <div class="image">
      <img class="lazyload" data-src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL_MEDIUM + resto.pictureId : 'https://picsum.photos/id/666/605/450?grayscale'}" class="thumb-res" alt="${resto.name}" crossorigin="anonymous">
      <span class="location">${resto.city}</span>
    </div>
    <div tabindex="0" class="content">
      <h2 class="title-res">${resto.name}</h2>
      <div class="icons">
        <div class="icon">
          <i class="fas fa-map-marker-alt"></i>
          <span class="loc-res">${resto.address}</span>
        </div>
      </div>
      <div class="stars">
        <i class="fas fa-star"></i>
        <span class="rate-res">${resto.rating}</span>
      </div>
      <p class="desc-res">${resto.description}</p>
      <div tabindex="0" class="category-container">
        <h2 class="category-heading">Categories</h2>
        <div class="categories">
          ${resto.categories.map((category) => `<div class="category"><span class="category-name">${category.name}</span></div>`).join('')}
        </div>
      </div>
    </div>
  </div>
  <div tabindex="0" class="menu-list"> 
      <h2 class="menu-text"> List Menu </h2> 
      <div class="menu-container">
        <div class="food-menu">
          <h2 class="menu-heading">Foods</h2>
          <ul class="food-list">
            ${resto.menus.foods.map((food) => `<li class="food-item">${food.name}</li>`).join('')}
          </ul>
        </div>
        <div class="drink-menu">
          <h2 class="menu-heading">Drinks</h2>
          <ul class="drink-list">
            ${resto.menus.drinks.map((drink) => `<li class="drink-item">${drink.name}</li>`).join('')}
          </ul>
        </div>
      </div>
      </div>
`;

const createReviewTemplate = (resto) => `
    ${resto.customerReviews.map((review) => `
        <div tabindex="0" class="swiper-slide slide">
            <h2>${review.name}</2>
            <div class="user">
                <img class="lazyload" src="images/review_people.png" alt="" crossorigin="anonymous">
                <div class="user-info">
                    <h3>${review.review}</h3>
                    <div class="stars">
                        <h4>${review.date}</h4>
                    </div>
                </div>
            </div>
        </div>
    `).join('')}`;

const createRestoItemTemplate = (resto) => `
    <div class="box" >
      <div class="image">
            <img class="lazyload" data-src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL_MEDIUM + resto.pictureId : 'https://picsum.photos/id/666/605/450?grayscale'}" class="thumb-res" alt="${resto.name}" crossorigin="anonymous">
          <span class="location">${resto.city}</span>
            </div>
          <div class="content">
          <h1 class="resto__title">${resto.name ? resto.name : '-'}</h1>
            <div class="icons">
              <div class="icon"> <i class="fas fa-map-marker-alt"></i> <span class="loc-res">${resto.city}</span>
              </div>
            </div>
            <div class="stars">
              <i class="fas fa-star"></i>
              <span class="rate-res">${resto.rating ? resto.rating : '-'}</span>
            </div>
            <p class="desc-res">${resto.description ? resto.description : '-'} </p>
            <a class="btnd" href="#/detail/${resto.id}" tabindex="0" aria-label="${resto.name}, ${resto.city}" title="Detail">
  <i class="fas fa-eye"></i>
  <span>Details</span>
</a>
        </div>
         </div>
    `;
const createLikeButtonTemplate = () => `
  <button tabindex="0" aria-label="Tambahkan ke favorite?" id="likeButton" class="like-button" >
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button tabindex="0" aria-label="Hapus dari favorite?" id="likeButton" class="like-button-un" >
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createReviewTemplate,
};
