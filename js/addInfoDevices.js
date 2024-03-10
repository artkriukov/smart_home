async function fetchDevices() {
    try {
        const response = await fetch("../devices.json"); 
        const data = await response.json();
        return data.devices;
    } catch (error) {
        console.error("Ошибка при загрузке товаров:", error);
    }
}

function displayDevices(devices) {
    const devicesContainer = document.querySelector(".devices__items");

    devices.forEach((device) => {
        const deviceItem = document.createElement("li");

        const deviceCard = document.createElement("div");
        deviceCard.classList.add("devices-card");

        const image = document.createElement("img");
        image.src = device.image;
        image.alt = device.name;

        const content = document.createElement("div");
        content.classList.add("devices_content");

        const title = document.createElement("h3");
        title.classList.add("devices_title");
        title.textContent = device.name;

        const description = document.createElement("p");
        description.classList.add("devices_text");
        description.textContent = device.description;

        const button = document.createElement("button");
        button.type = "button";
        button.classList.add("button");
        button.textContent = "Подробнее";
        button.onclick = () => openPopup(device.name, device.description, device.image);

        content.appendChild(title);
        content.appendChild(description);

        deviceCard.appendChild(image);
        deviceCard.appendChild(content);
        deviceCard.appendChild(button);

        deviceItem.appendChild(deviceCard);

        devicesContainer.appendChild(deviceItem);
    });
}

function openPopup(title, description, image) {
    const popupOverlay = document.getElementById("popupOverlay");
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popupTitle");
    const popupDescription = document.getElementById("popupDescription");
    const popupImage = document.getElementById("popupImage");

    popupTitle.textContent = title;
    popupDescription.textContent = description;
    popupImage.src = image;

    popupOverlay.style.display = "flex";
}

function closePopup() {
    const popupOverlay = document.getElementById("popupOverlay");

    popupOverlay.style.display = "none";
}

// Загрузка девайсов и их отображение
fetchDevices().then((devices) => {
    displayDevices(devices);
});
