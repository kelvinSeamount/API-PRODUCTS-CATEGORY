const conTrol = document.querySelector(".form-control");
const cardEl = document.querySelector(".card-text");
const cardContainer = document.querySelector("card-container");

conTrol.addEventListener("change", function () {
  cardEl.innerHTML = "Loading Please Wait...";
  search = cardEl.value;

  fetch(`https://dummyjson.com/products/category/${search}`, {
    method: "GET",
  })
    .then(function (data) {
      return data.json();
    })
    .then(function (response) {
      response.forEach(function (array) {
        const html = `
           <div class="card">
              <img src="${array.images[0]}" alt="img" />
              <p><span>Brand :</span></p>
              <p><span>Category :</span></p>
              <p><span>Description :</span></p>
              <p><span>Price :</span></p>
              <p><span>Rating :</span></p>
              <p><span>Discount Percentage :</span></p>
              <p><span>In Stock :</span></p>
           </div>
        `;
      });
    });
});
