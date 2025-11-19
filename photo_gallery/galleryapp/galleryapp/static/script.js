document.querySelectorAll(".gallery-img").forEach(img => {
    img.addEventListener("click", () => {
        document.getElementById("popup-img").src = img.src;
        document.getElementById("popup").style.display = "flex";
    });
});

document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("popup").style.display = "none";
});
