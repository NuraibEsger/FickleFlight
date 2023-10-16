window.onload = function(){
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav')

    menu_btn.addEventListener('click',function(){
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    })
}

const searchReturn = document.querySelector('#return');
const searchOneway = document.querySelector('#one-way')
const searchFormInput = document.querySelector('.search-form-input-row');
const searchForm = document.querySelector('.search-form');


searchReturn.addEventListener("click", function(){
    searchForm.innerHTML += `
    <div class="search-form-input-row">
    <div class="search-form-input-row-dpt">
        <div class="input">
            <div class="label-container"><p class="label-container-text">Departure</p></div>
            <div class="input-text">
                <input class="search-input-text" type="text" placeholder="Singapure (SIN)">
            </div>
        </div>
    </div>
    <div class="search-form-input-row-arr">
        <div class="input">
            <div class="label-container"><p class="label-container-text">Arrival</p></div>
            <div class="input-text">
                <input class="search-input-text" type="text" placeholder="LosAngeles (LA)">
            </div>
        </div>
    </div>
    <div class="search-form-input-row-date">
        <div class="input">
            <div class="label-container"><p class="label-container-text">Date</p></div>
            <div class="input-text">
                <input class="search-input-text" type="date">
            </div>
        </div>
    </div>
</div>
    `;
})
