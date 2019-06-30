window.onload = function() {
    var elementTarget = document.querySelector("#logo");
    elementTarget.classList.add("logo-show");
}
window.addEventListener("scroll", function() {
    var elementTarget = document.querySelectorAll(".job");
    elementTarget.forEach(el => {
        if (window.scrollY > (el.offsetTop)) {
            if (el.classList.contains('current')) {
                el.classList.add("lift");
            } else {
                el.classList.add("slide-in");
            }
        }

    })
});
