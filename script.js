const sections = ['header', 'about', 'devices', 'use_device', 'download', 'footer'];

sections.forEach(section => {
    fetch(`html/${section}.html`)
        .then(response => response.text())
        .then(data => document.getElementById(section).innerHTML = data);
});
