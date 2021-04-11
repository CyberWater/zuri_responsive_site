const navbar = document.querySelector('.nav-links');
a = navbar.querySelectorAll("a");

a.forEach(function(element) {
    element.addEventListener("click",function() {
    document.querySelector(".nav-link").classList.toggle("show")
    })
})

// hamBuger

const hamburger = document.querySelector(".hamBurger")

hamburger.addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("show")
})