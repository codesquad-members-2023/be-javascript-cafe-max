fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        const container = document.getElementById('navbar-placeholder');
        container.innerHTML = data;
    });
