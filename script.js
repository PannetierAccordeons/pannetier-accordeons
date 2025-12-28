
// Animation simple au clic sur les liens du menu
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        console.log("Navigation vers :", link.textContent);
    });
});



document.addEventListener("DOMContentLoaded", () => {

    const images = [
        "images/fabrication/sommiers.jpg",
        "images/fabrication/SR.jpg",
        "images/fabrication/sommierMD.jpg",
        "images/fabrication/sommierMG.jpg",
        "images/fabrication/ponce.jpg",
        "images/fabrication/filet.jpg",
        "images/fabrication/mecaMD.jpg",
        "images/fabrication/mecaMG.jpg",
        "images/fabrication/mecas.jpg",
        "images/fabrication/sculpture.jpg",
        "images/fabrication/vernis.jpg"
    ];

    let index = 0;

    const photo = document.getElementById("photo-active");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    // Sécurité : on vérifie que le diaporama existe sur la page
    if (!photo || !prevBtn || !nextBtn) {
        return;
    }

    prevBtn.addEventListener("click", () => {
        index--;
        if (index < 0) {
            index = images.length - 1;
        }
        photo.src = images[index];
    });

    nextBtn.addEventListener("click", () => {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        photo.src = images[index];
    });

});

document.addEventListener("DOMContentLoaded", () => {

    const photos = document.querySelectorAll(".photo-cliquable");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    if (!photos.length || !lightbox || !lightboxImg) return;

    photos.forEach(photo => {
        photo.addEventListener("click", () => {
            lightboxImg.src = photo.src;
            lightbox.style.display = "flex";
        });
    });

    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
        lightboxImg.src = "";
    });

});
