
  const searchToggle = document.getElementById("searchToggle");
  const nav = document.querySelector(".navbar");

  searchToggle.addEventListener("click", () => {
    nav.classList.toggle("search-mode");
  });

