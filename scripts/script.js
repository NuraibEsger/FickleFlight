const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-menu");

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active")
})

const menuExplore = document.querySelector(".navbar-menu-explore")
const menuSearch = document.querySelector(".navbar-menu-search")
const menuHotels = document.querySelector(".navbar-menu-hotels")

menuExplore.addEventListener("click", ()=>{
    hamburger.classList.remove("active")
})
menuSearch.addEventListener("click", ()=>{
    hamburger.classList.remove("active")
})
menuHotels.addEventListener("click", ()=>{
    hamburger.classList.remove("active")
})