const items = [
  {
    id:1,
    title:"Buttermilk Pancake",
    category: "Breakfast",
    price: "$15.99",
    img: "./images/item-1.jpeg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, veritatis omnis sit,ate!"
  },
  {
    id:2,
    title:"Burger",
    category: "Breakfast",
    price: "$11.99",
    img: "./images/item-2.jpeg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, veritatis omnis sit,ate!"
  },
  {
    id:3,
    title:"Icecream",
    category: "Breakfast",
    price: "$20.99",
    img: "./images/item-3.jpeg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, veritatis omnis sit,ate!"
  },
];

const menu = document.querySelector(".section-center");

function generateMenuItem(item) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const image = document.createElement("img");
  image.src = item.img;
  image.alt = item.title;
  image.classList.add("photo");

  const itemInfo = document.createElement("div");
  itemInfo.classList.add("item-info");

  const header = document.createElement("header");

  const title = document.createElement("h2");
  title.classList.add("title");
  title.textContent = item.title;

  const price = document.createElement("h4");
  price.classList.add("price");
  price.textContent = item.price;

  header.appendChild(title);
  header.appendChild(price);

  const underline = document.createElement("div");
  underline.classList.add("underline");

  const itemDesc = document.createElement("p");
  itemDesc.classList.add("item-desc");
  itemDesc.textContent = item.desc;

  itemInfo.appendChild(header);
  itemInfo.appendChild(underline);
  itemInfo.appendChild(itemDesc);

  menuItem.appendChild(image);
  menuItem.appendChild(itemInfo);

  return menuItem;
}

function renderMenu(items) {
  items.forEach(item => {
    const menuItem = generateMenuItem(item);
    menu.appendChild(menuItem);
  });
}

renderMenu(items);