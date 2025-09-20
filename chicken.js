  const searchInput = document.querySelector(".search-box input");
  const recipeCards = document.querySelectorAll(".card");

  function searchRecipes() {
    let query = searchInput.value.toLowerCase();
    let visibleCount = 0;

    recipeCards.forEach(card => {
      let text = card.innerText.toLowerCase();
      if (text.includes(query)) {
        card.style.display = "";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    // Optional: if no match, show a message
    if (visibleCount === 0) {
      if (!document.querySelector(".no-results")) {
        const msg = document.createElement("div");
        msg.className = "no-results";
        msg.style.textAlign = "center";
        msg.style.margin = "20px auto";
        msg.style.fontSize = "18px";
        msg.style.color = "#b91c1c";
        msg.innerText = "No recipes found!";
        document.querySelector(".recipes").appendChild(msg);
      }
    } else {
      const msg = document.querySelector(".no-results");
      if (msg) msg.remove();
    }
  }

  // 🔥 Live search as user types
  searchInput.addEventListener("keyup", searchRecipes);