const logout = document.getElementById("logout");
const posting = document.getElementById("posting");
const test_bootstrap = document.getElementById("test-bootstrap");

logout.addEventListener("click", function() {
    location.replace("../html/guest-main.html");
});

posting.addEventListener("click", function() {
    location.replace("../html/posting.html");
});

test_bootstrap.addEventListener("click", function(){
    location.replace("../html/test-bootstrap.html");
});

