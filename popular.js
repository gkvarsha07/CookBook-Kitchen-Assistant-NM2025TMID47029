    function searchRecipes() {
      const input = document.getElementById("searchInput").value.toLowerCase();
      const cards = document.querySelectorAll(".card");

      cards.forEach(card => {
        const title = card.querySelector("h3").innerText.toLowerCase();
        const desc = card.querySelector("p").innerText.toLowerCase();

        if (title.includes(input) || desc.includes(input)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    }

    // Also allow live search while typing
    document.getElementById("searchInput").addEventListener("keyup", searchRecipes);