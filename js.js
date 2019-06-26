/* var main = document.querySelector('main');
var avocadoLink = document.querySelector('#avocadoLink');
var homeLink = document.querySelector('#homeLink');
avocadoLink.addEventListener("click", () => {
    console.log("avocado clicked");
    main.innerHTML = routes.avocado;
})
homeLink.addEventListener("click", () => {
    console.log("home clicked");
    main.innerHTML = routes.home;
})
var homePage = `
    <form>
    <label>name</label>
    <input type="text">
    <label>expertise</label>
    <select>
    <option value="RPA">RPA</option>
    <option value="WEB">WEB</option>
    <option value="AI">AI</option>
    </select>
    </form>
`;
var avocadoPage = `
    <div>Avocado</div>
`;
var routes = {
    'home': homePage,
    'avocado': avocadoPage
}; */
window.onload = function() {
    var elementTarget = document.querySelector("#logo");
    elementTarget.classList.add("logo-show");
}
window.addEventListener("scroll", function() {
    var elementTarget = document.querySelectorAll(".job");
    elementTarget.forEach(el => {
        if (window.scrollY > (el.offsetTop + el.offsetHeight / 2)) { 
            el.classList.add("slide-in");
        }
    })
});