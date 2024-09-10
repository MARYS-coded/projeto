document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery img");

    images.forEach((img) => {
        img.addEventListener("mouseover", () => {
            img.style.border = "2px solid #4CAF50";
        });

        img.addEventListener("mouseout", () => {
            img.style.border = "none";
        });
    });
});
