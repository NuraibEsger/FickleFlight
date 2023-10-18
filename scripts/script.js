window.onload = function(){
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav')

    menu_btn.addEventListener('click',function(){
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    })
}

const searchReturn = document.querySelector('#return');
const searchOneway = document.querySelector('#one-way');
const searchFormInput = document.querySelector('.search-form-input-row');
const searchForm = document.getElementById('search-form-input');
const secondForm = document.getElementById('second-form');


searchReturn.addEventListener("click", function(){
    secondForm.style.display = "flex";
    searchForm.style.flexDirection = "column";
})
searchOneway.addEventListener("click", function(){
    secondForm.style.display = "none";
    searchForm.style.flexDirection = "row";
})
