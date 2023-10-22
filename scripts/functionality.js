let cityContainer = document.querySelector(".cards-container")

document.addEventListener("DOMContentLoaded", function(){
    ListCities();
})

async function ListCities() {
    let res = await fetch("http://localhost:5501/popularcities");
    let data = await res.json();
    if (!res.ok) {
        throw new Error("There isn't city!")
    }

    if (Array.isArray(data) && data) {
        cardContainer.innerHTML = "";
        data.forEach(city => {
            cardContainer.innerHTML += `
                <div class="col">
                    <div class="city">
                        <div class="destiantion-details"><p class="destiantion-details-text"></p></div>
                        <div class="city-details">
                            <p class="city-details-text">${city.destinationName}</p>
                            <div class=ct-details">
                                <p class="ct-details-first">FROM</p>
                                <p class="ct-details-second">$699</p>
                            </div>
                        </div>
                    </div>
                </div>
        `
        });
    }
}