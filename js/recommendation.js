const graph = createGraph(false);

const items = [
  {
    id: 1,
    title: "Jurassic Park Original Bones Backpak",
    price: "10.99",
    img: "img/bp8uq9jpa-5.jpg",
  },
  {
    id: 2,
    title: "Sonic The hedghog adult unisex gaiter",
    price: "7.49",
    img: "img/ga9llfseg-4.jpg",
  },
  {
    id: 3,
    title: "Star Wars Strom Trooper 7 3D Mug",
    price: "14.99",
    img: "img/abymug362.jpg",
  },
  {
    id: 4,
    title: "Star Wars Boba fett metal keyring",
    price: "7.99",
    img: "img/abykey083.jpg",
  },
  {
    id: 5,
    title: "Jurassic Park Rangers snapback Cap",
    price: "4.99",
    img: "img/sb7ke3jpa-3.jpg",
  },
];

const items2 = [
  {
    id: 2,
    title: "Sonic The hedghog adult unisex gaiter",
    price: "7.49",
    img: "img/ga9llfseg-4.jpg",
  },
  {
    id: 6,
    title: "Pac-Man Maze Safe Ball Bearing Maze Money Box",
    price: "14.99",
    img: "img/gifpal719-1.jpg",
  },
  { id: 7, title: "Harry Potter Glasses & Scar Mens Tshirt", price: "9.49" },
  {
    id: 8,
    title: "Batman Shiny Cape Knee High Socks",
    price: "9.49",
    img: "img/kh101vbtm-1.jpg",
  },
  {
    id: 1,
    title: "Jurassic Park Original Bones Backpak",
    price: "10.99",
    img: "img/bp8uq9jpa-5.jpg",
  },
];

//heo
for (let i = 0; i < items.length; i++) {
  graph.addNode(items[i]);
}

for (let i = 0; i < items.length - 1; i++) {
  graph.addEdge(items[i], items[i + 1]);
}

//vinni
for (let i = 0; i < items2.length; i++) {
  graph.addNode(items2[i]);
}

for (let i = 0; i < items.length - 1; i++) {
  graph.addEdge(items2[i], items2[i + 1]);
}

const recommendation = graph.recommend();
console.log(recommendation);

const allItems = items.concat(items2);
allItems.splice(5, 1);
allItems.pop();
console.log(allItems);
