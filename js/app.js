const conTrol = document.querySelector(".form-control");
const cardContainer = document.querySelector(".card-container");

conTrol.addEventListener("change", function (event) {
  console.log(event);
  //This clears the container displaying the html content
  cardContainer.innerHTML = "";
  search = event.target.value;

  fetch(`https://dummyjson.com/products/category/${search}`, {
    method: "GET",
  })
    .then(function (data) {
      console.log(data);
      return data.json();
    })
    .then(function (fufilled) {
      fufilled.products.forEach(function (array, index) {
        //Destructing
        const {
          brand,
          category,
          description,
          price,
          rating,
          discountPercentage,
          stock,
        } = array;
        const html = `
            <div class="card">
              <img src="${array.images[0]}" alt="img" />
              <p><span>Brand : </span>${brand}</p>
              <p><span>Category : </span>${category}</p>
              <p><span>Description : </span>${description}</p>
              <p><span>Price : </span>${price}</p>
              <p><span>Rating : </span>${rating}</p>
              <p><span>Discount Percentage : </span> ${discountPercentage}</p>
              <p><span>In Stock : </span>${stock}</p>
            </div>
        `;
        cardContainer.insertAdjacentHTML("beforeend", html);
        cardContainer.style.opacity = 1;
      });
    });
});
