// templateImageAPI
fetch(
  "https://pixabay.com/api/?key=22160511-699828bb83b8e126269067de3&image_type=photo&q="
)
  .then((response) => response.json())
  .then((response) => {
    const images = response.hits;
    let cards = "";
    images.forEach((m) => (cards += showCards(m)));
    const imagesContainer = document.querySelector(".image-container");
    imagesContainer.innerHTML = cards;
  });

// getInputUser
const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", function () {
  const inputKeyword = document.querySelector(".input-keyword");
  fetch(
    "https://pixabay.com/api/?key=22160511-699828bb83b8e126269067de3&image_type=photo&q=" +
      inputKeyword.value
  )
    .then((response) => response.json())
    .then((response) => {
      const images = response.hits;
      let cards = "";
      images.forEach((m) => (cards += showCards(m)));
      const imagesContainer = document.querySelector(".image-container");
      imagesContainer.innerHTML = cards;
    });
});

function showCards(m) {
  return `<div class="col-md-4 my-3">
            <div class="card">
              <img src="${m.largeImageURL}" class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title text-primary"><strong>Photo By : ${m.user}</strong></h5>
                <h6 class="card-subtitle mb-2 text-muted">Likes : ${m.likes}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Downloads : ${m.downloads}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Comments : ${m.comments}</h6>
                <span class="badge badge-info">${m.tags}</span>
              </div>
            </div>
          </div>`;
}