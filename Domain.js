function showDomainInput() {
    var select = document.getElementById("domain");
    var input = document.getElementById("domainInput");
    if (select.value == "other") {
        input.style.display = "block";
    } else {
        input.style.display = "none";
    }
}
