document.addEventListener("DOMContentLoaded", () => {

  // toggling restaurants
  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items
  const addPlaces = (e) => {
    e.preventDefault();
    const textInput = document.querySelector('.favorite-input');
    const text = textInput.value;
    console.log("add places");
    const ul = document.getElementById("restaurants");
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
    textInput.value = "";
  };

  const submitFav = document.querySelector("#favorite-form");
  submitFav.addEventListener("submit", addPlaces);
  // document.querySelectorAll("#favorite-form").forEach((button) => {
  //   button.addEventListener("submit", addPlaces);
  // });


  // adding new photos
  const showPhotoForm = (e) => {
    const photoForm = document.querySelector(".photo-form-container");
    photoForm.classList.toggle("hidden");
  };

  const photoFormButton = document.querySelector(".photo-show-button");
  photoFormButton.addEventListener("click", showPhotoForm);

  const addPhoto = (event) => {
    event.preventDefault();
    let ul = document.querySelector(".dog-photos");
    let li = document.createElement('li');
    let img = document.createElement('img');
    img.src = document.querySelector(".photo-url-input").value;
    // img.src = "http://i.imgur.com/T26TiZ1.jpg";

    li.appendChild(img);
    ul.appendChild(li);
  };

  const submitPhotoButton = document.querySelector(".photo-url-submit");
  submitPhotoButton.addEventListener("click", addPhoto);

});
