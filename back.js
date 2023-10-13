const authorization =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI5MDY5NzEzOWM0MzAwMTg4MTQ1ZGIiLCJpYXQiOjE2OTcxODc0NzksImV4cCI6MTY5ODM5NzA3OX0.pgc1V46n3rvv8Ju9LgoD2JESTWmvVG_AZua4HzxNVaE";
const URL_API = "https://striveschool-api.herokuapp.com/api/product/";

const myForm = document.getElementById("form");

myForm.addEventListener("submit", function (dress) {
  dress.preventDefault();

  const Name = document.getElementById("name");

  const Description = document.getElementById("description");

  const Brand = document.getElementById("brand");

  const Image = document.getElementById("imageUrl");
  const Price = document.getElementById("price");

  const newDress = {
    name: dressName.value,

    description: dressDescription.value,

    brand: dressBrand.value,

    imageurl: dressImage.value,
    price: dressPrice.value,
  };

  let methodToUse = "POST";

  let urlToUse = "https://striveschool-api.herokuapp.com/api/product/";

  fetch(urlToUse, {
    method: methodTouse,

    body: JSON.stringify(newDress),

    headers: {
      Authorization: apikey,

      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        alert(
          "ERROR: contact your developer and give him some cash so can fix this"
        );
        throw new Error("POST error");
      }
    })

    .catch((err) => {
      console.log("An error occured", err);
    });
});
