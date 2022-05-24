const menu = [
  {
    id: 1,
    title: "Muffins",
    category: "breakfast",
    price: "$8.99",
    img: "./img/muffins.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "Biryani",
    category: "lunch",
    price: "$10.99",
    img: "./img/biryani-7009127_1920.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "Steak-Dinner",
    category: "dinner",
    price: "$14.99",
    img: "./img/item-10.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "American Delight",
    category: "breakfast",
    price: '$12.99',
    img: "./img/item-8.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "Country Delight",
    category: "lunch",
    price: '$7.99',
    img: "./img/item-4.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "Latte",
    category: "shakes",
    price: '$8.99',
    img: "./img/latte.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "Pancakes",
    category: "breakfast",
    price: "$9.99",
    img: "./img/Pancakes.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "milkshake",
    category: "shakes",
    price: "$11.99",
    img: "./img/milkshake.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "Pizza",
    category: "lunch",
    price: '$10.99',
    img: "./img/pizza-2000615_1920.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Sphagetti",
    category: "dinner",
    price: '$14.99',
    img: "./img/sphagetti.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const menuGrid = document.querySelector('.menu-grid');
const tagBtns = document.querySelectorAll('.tag');

window.addEventListener('DOMContentLoaded', () =>{
   displayMenuItems(menu);
});

tagBtns.forEach((btn) =>{
    btn.addEventListener('click', () =>{
        let filterMenuItems = menu.filter((item) =>{
            if(item.category === btn.dataset.id){
                return item;
            }
            if(btn.dataset.id === 'all'){
                return item;

            }
        })
        displayMenuItems(filterMenuItems);
    } )
})



function displayMenuItems(menuItems){
 let DisplayMenu = menuItems.map((item) =>{
        return `  <div class="menu-item">
            <div class="image-container">
                <img src=${item.img} class="img" alt="">
            </div>
            <div class="menu-details">
                <div class="dish-heading">
                <h5>${item.title}</h5>
                <h5 class="price">${item.price}</h5>    
                </div>
                <div class="dish-details">
                    <p>${item.desc}</p>
                </div>
            </div>
        </div>`
    })
    DisplayMenu = DisplayMenu.join("");
    menuGrid.innerHTML = DisplayMenu;
}

