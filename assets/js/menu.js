const items = [
    {
        name: "Bucket Briyani",
        detail: "Biryani",
        image: "assets/img/menu/bucket_biryani.png",
    },
    {
        name: "Chicken Dum Briyani",
        detail: "Biryani",
        image: "assets/img/menu/chicken_bri.png",
    },
    {
        name: "Mutton Dum Briyani",
        detail: "Briyani",
        image: "assets/img/menu/mutton_bri.png",
    },
    {
        name: "Egg Briyani",
        detail: "Briyani",
        image: "assets/img/menu/egg_bri.png",
    },
    {
        name: "Brinjal Salan",
        detail: "Side Dish",
        image: "assets/img/menu/brinjal.png",
    },
    {
        name: "Raitha",
        detail: "Side Dish",
        image: "assets/img/menu/raitha.png",
    },
    {
        name: "Chicken 65 Boneless",
        detail: "Delicious Chicken 65",
        image: "assets/img/menu/chicken65.png",
    },
    {
      name: "Bread Halwa",
      detail: "Desert",
      image: "assets/img/menu/bread_halwa.png",
    },
    {
        name: "Boondi Raitha",
        detail: "Desert",
        image: "assets/img/menu/boondi_raitha.png",
    },
  ];
  
const container = document.querySelector('#menuContainer');

items.forEach(item => {
  const menuContent = document.createElement('div');
  menuContent.className = 'menu__content';

  menuContent.innerHTML = 
  `
  <img src=${item.image} class="menu__img">
    <div class="menu__content__text">
        <h3 class="menu__name">${item.name}</h3>
        <span class="menu__detail">${item.detail}</span>
        <div class="order__btn__container">
            <a href="https://order.chefbhaibiryani.com/home/" target="_blank" class="button menu__button">
                <i class='bx bx-cart-alt'></i>
                <span>Order now</span>
            </a>
            <div class="delivery__btn__container">
                <a href="https://www.swiggy.com/direct/brand/589856?source=swiggy-direct&subSource=generic" target="_blank" class="swiggy__btn button menu__button">
                    <!-- <img src="assets/img/delivery-partner/swiggy.svg" width="13px" height="auto" /> -->
                    <span>Swiggy</span>
                </a>
                <a href="https://link.zomato.com/xqzv/rshare?id=9325551730563a99" target="_blank" class="zomato__btn button menu__button">
                    <!-- <img src="assets/img/delivery-partner/zomato-seeklogo.svg" width="" height="auto" /> -->
                    <span>Zomato</span>
                </a>
            </div>
        </div>
    </div>
  
  `;

  container.appendChild(menuContent);
});
