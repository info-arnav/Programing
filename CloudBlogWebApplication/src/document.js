let array = [];
let value = 0;

fetch("http://localhost:4000/gallery").then((response) =>
  response.text().then((e) => (value = parseInt(e)))
);

for (let i = 0; i < value; i++) {
  array.push(i);
}

array.map(
  (e) =>
    (document.getElementById(
      `bp${i}`
    ).style.backgroundImage = `assets/img/scenery/image${i}.jpg`)
);
