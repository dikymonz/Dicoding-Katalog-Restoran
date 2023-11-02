import RestauranSource from '../../data/restaurant-source';
import {
  setHomeButtonFunctionality,
} from '../../utils/button-func';
import {
  createRestoItemTemplate,
} from '../templates/template-creator';

const Home = {
  async render() {
    return `<section class="hero" id="home">
    <div class="content">
    <h3>Good Food <span>  Is A good </span> Mood!</h3>
    <h2 class="hero__tagline">
    Welcome to KyKoi Kitchen, a place where Koi magic meets authentic Indonesian flavors.!
    </h2>
    <a href="#resto" tabindex="0" role="button" id="btn_explore" class="btn" title="Explore Now"
      aria-label="Tombol explore now">
      explore
      now </a>
  </div>
</section>
<!-- end -->

<!-- resto -->
<section class="list-resto" id="resto">
  <h1 class="heading"> Explore <span> Restaurant</span> </h1>
  <div class="box-container" id="resto-content" >

  </div>
</section>

<!-- end ->
        `;
  },

  async afterRender() {
    const restos = await RestauranSource.daftarResto();
    const restoContainer = document.querySelector('#resto-content');
    restos.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
    setHomeButtonFunctionality();
    const detailButtons = document.querySelectorAll('.btnd');
    detailButtons.forEach((button) => {
      button.addEventListener('keydown', (event) => {
        if (event.code === 'Enter' || event.code === 'Space') {
          event.preventDefault();
          const restoId = button.getAttribute('href').split('/').pop();
          window.location.href = `#/detail/${restoId}`;
        }
      });
    });
  },

};

export default Home;
