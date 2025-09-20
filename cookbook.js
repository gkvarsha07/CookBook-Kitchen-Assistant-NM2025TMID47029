const searchInput = document.getElementById("searchInput");
  const items = document.querySelectorAll(".category, .dish");
  const trendingGrid = document.querySelector(".trending-grid");

  function searchRecipes() {
    let input = searchInput.value.toLowerCase();
    let visibleDishes = 0;

    items.forEach(item => {
      let text = item.innerText.toLowerCase();
      if (text.includes(input)) {
        item.style.display = "";
        if (item.classList.contains("dish")) {
          visibleDishes++;
        }
      } else {
        item.style.display = "none";
      }
    });

    // Apply "small" mode if 1–2 dishes visible
    if (visibleDishes > 0 && visibleDishes <= 2) {
      trendingGrid.classList.add("small");
    } else {
      trendingGrid.classList.remove("small");
    }
  }

  // 🔥 Live search while typing
  searchInput.addEventListener("keyup", searchRecipes);