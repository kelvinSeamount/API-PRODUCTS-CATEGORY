const conTrol = document.querySelector(".form-control");
const cardEl = document.querySelector(".card-text");

conTrol.addEventListener("change", function () {
  cardEl.innerHTML = "Loading Please Wait...";
  cardEl.style.textalign = "center";

  search = cardEl.value;

  fetch(`https://dummyjson.com/products/category/${search}`, {
    method: "GET",
  });
});
