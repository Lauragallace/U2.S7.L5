const authorization =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI5MDY5NzEzOWM0MzAwMTg4MTQ1ZGIiLCJpYXQiOjE2OTcxODc0NzksImV4cCI6MTY5ODM5NzA3OX0.pgc1V46n3rvv8Ju9LgoD2JESTWmvVG_AZua4HzxNVaE";
const URL_API = "https://striveschool-api.herokuapp.com/api/product/";

const renderdress = function (arrayOfDress) {
  const row = document.getElementById("dress-row");

  arrayOfDress.forEach((dress) => {
    const newcol = document.createElement("div");

    newCol.classList.add('col", "col-12", "col-sm-6", "col-md-3');

    newCol.innerHTML = (
      <div class="card">
        <div style="height: 178px;">
          <img
            src={dress.imageUrl}
            class="card-ing-top h-100"
            alt="literally a dress"
          />
        </div>

        <div class="card-body">
          <h5 class="card-title">${dress.name}</h5>

          <p class="card-text">
            <strong>${dress.brand}</strong>
          </p>

          <p class="card-text">${dress.description}</p>

          <p class="card-text">Price: $(.price)&dollar;</p>

          <a
            href="./dettaglio.html?eventId=${
    
    car._id
    
    }"
            class="btn btn-primary"
          >
            DETAILS
          </a>
        </div>
      </div>
    );

    row.appendChild(newcol);
  });
};

const hideSpinner = function () {
  const spinner = document.getElementById("loading-spinner");

  spinner.classList.add("d-none");
};

fetch("https://striveschool-api.herokuapp.com/apt/product/", {
  headers: {
    Authorization: apiKey,
  },
})
  .then((res) => {
    hideSpinner();

    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Cannot contact server");
    }
  })

  .then((cars) => {
    rendercars(cars);
  })
  .catch((err) => {
    hideSpinner();
    console.log("An error occured", err);
  });
