document.addEventListener("DOMContentLoaded", function() {
    const gameItems = document.querySelectorAll(".game-item");

    gameItems.forEach(item => {
        item.addEventListener("click", function() {
            const gamePage = this.getAttribute("data-game");
            if (gamePage) {
                window.location.href = gamePage;
            }
        });

        item.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-10px)";
            this.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
        });

        item.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0)";
            this.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        });
    });
});
