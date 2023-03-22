function loadHTML(file, elementId) {
    fetch(file)
        .then(res => {
            return res.text();
        })
        .then(html => {
            document.getElementsByClassName(elementId)[0].innerHTML = html;
        });
}