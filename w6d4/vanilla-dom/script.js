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

  document.querySelectorAll("#favorite-form").forEach((button) => {
    button.addEventListener("submit", addPlaces);
  });


  // adding new photos

  // --- your code here!



});
