let cityContainer = document.querySelector(".cards-container")
let hotels = document.getElementsByClassName("hotel-cards");

document.addEventListener("DOMContentLoaded", function(){
    ListCities();
    ListHotels();
})

async function ListCities() {

    let res = await fetch("http://localhost:4000/popularcities");
    let data = await res.json();

    if (!res.ok) {
        throw new Error("There isn't cities")
    }

    if (Array.isArray(data) && data) {
        cityContainer.innerHTML = "";
        data.forEach(city => {
            cityContainer.innerHTML += `
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

async function ListHotels() {

    let res = await fetch("http://localhost:4000/hotels/popular");
    let data = await res.json();

    console.log(data)

    if (!res.ok) {
        throw new Error("There isn't cities")
    }

    if (Array.isArray(data) && data) {
        hotels.innerHTML = "";
        data.forEach(city => {
            hotels.innerHTML += `
            <div class="hotel-col">
                    <div class="hotel-card">
                        <img src="./assets/images/Matterhorn Suites Image.png" alt="">
                        <div class="hotel-details">
                            <div class="hotel-details-row">
                                <p class="hotel-description">Deluxe King Room</p>
                                <p class="hotel-name">Lake Louise Inn</p>
                                <p class="hotel-price">$244/night</p>
                            </div>
                            <div class="video-button">
                                <i class="fa-regular fa-circle-play video-play"></i>
                            </div>

                        </div>
                        <div class="hotel-rating">

                            <div class="hotel-star">
                                <i class="fa-solid fa-star star"></i>
                                <p class="star-point">4.6</p>
                            </div>

                            <p class="hotel-review">(63 reviews)</p>
                        </div>
                        <div class="more-detail-button">
                            <p>more details</p>
                        </div>
                    </div>
                </div>
        
        `
        });
    }
}