
  const searchToggle = document.getElementById("searchToggle");
  const nav = document.querySelector(".navbar");

  searchToggle.addEventListener("click", () => {
    nav.classList.toggle("search-mode");
  });

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('searchBar');
  const searchInput = searchForm.querySelector('.search-input');

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();

    if (query) {
      window.location.href = `/listings/search?query=${encodeURIComponent(query)}`;  // 🔧 FIXED
    }
  });
});

