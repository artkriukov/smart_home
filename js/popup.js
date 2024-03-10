function openPopup(title, description, image) {
    const popupOverlay = document.getElementById("popupOverlay");
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popupTitle");
    const popupDescription = document.getElementById("popupDescription");
    const popupImage = document.getElementById("popupImage");

    popupTitle.textContent = title;
    popupDescription.textContent = description;
    popupImage.src = image;

    // Запрет прокрутки страницы
    document.body.style.overflow = "hidden";

    popupOverlay.style.display = "flex";
}

function closePopup() {
    const popupOverlay = document.getElementById("popupOverlay");

    // Разрешение прокрутки страницы
    document.body.style.overflow = "auto";

    popupOverlay.style.display = "none";
}

// Закрытие попапа при клике на свободной области
document.addEventListener("click", function (event) {
    if (event.target === document.getElementById("popupOverlay")) {
        closePopup();
    }
});