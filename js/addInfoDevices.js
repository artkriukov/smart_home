async function fetchDevices() {
    try {
        const response = await fetch("devices.json"); 
        const data = await response.json();
        return data.devices;
    } catch (error) {
        console.error("Ошибка при загрузке товаров:", error);
    }
}

function displayDevices(devices) {
    console.log(devices);
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

// Загрузка девайсов и их отображение
fetchDevices().then((devices) => {
    displayDevices(devices);
});
