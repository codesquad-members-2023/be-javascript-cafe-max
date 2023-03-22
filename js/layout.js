function includeHeader() {
    fetch("../html/header.html")
    .then(file => file.text())
    .then(html => {
        document.querySelector('header').innerHTML = html;
    });
}

includeHeader();
