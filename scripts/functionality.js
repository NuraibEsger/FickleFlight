let cityContainer = document.querySelector(".cards-container");
let hotels = document.querySelector(".hotel-cards");
let recHotels = document.querySelector(".rec-cards-container");


document.addEventListener("DOMContentLoaded", function(){
    ListCities();
    ListHotels();
    RecommendedHotels();
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
                    <div class="city" style="background: url(${city.image})">
                        <div class="destiantion-details"><p class="destiantion-details-text"></p></div>
                        <div class="city-details">
                            <p class="city-details-text">${city.destinationName}</p>
                            <div class=ct-details">
                                <p class="ct-details-first">FROM</p>
                                <p class="ct-details-second">$${city.destinationPrice}</p>
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

    if (!res.ok) {
        throw new Error("There isn't cities")
    }

    if (Array.isArray(data) && data) {
        hotels.innerHTML = "";
        data.forEach(hotel => {
            hotels.innerHTML += `
            <div class="hotel-col">
                    <div class="hotel-card">
                        <img src="${hotel.img}" alt="">
                        <div class="hotel-details">
                            <div class="hotel-details-row">
                                <p class="hotel-description">${hotel.hotelDescription}</p>
                                <p class="hotel-name">${hotel.hotelName}</p>
                                <p class="hotel-price">$${hotel.hotelPrice}</p>
                            </div>
                            <div class="video-button">
                                <i class="fa-regular fa-circle-play video-play"></i>
                            </div>

                        </div>
                        <div class="hotel-rating">

                            <div class="hotel-star">
                                <i class="fa-solid fa-star star"></i>
                                <p class="star-point">${hotel.hotelRating.starPoint}</p>
                            </div>

                            <p class="hotel-review">${hotel.hotelRating.hotelReview}</p>
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

async function RecommendedHotels() {

    let res = await fetch("http://localhost:4000/cities");
    let data = await res.json();

    if (!res.ok) {
        throw new Error("There isn't cities")
    }

    if (Array.isArray(data) && data) {
        recHotels.innerHTML = "";
        data.forEach(city => {
            recHotels.innerHTML += `
            <div class="rec-card">
                    <div class="rec-card-background" style="background: url(${city.image})"></div>
                    <div class="holiday-details">
                        <div class="frame">
                            <div class="frame-inner">
                                <p class="frame-inner-first">${city.destinationName}</p>
                                <p class="frame-inner-second">4D3N</p>
                            </div>
                            <p class="frame-text">$${city.destinationPrice}</p>
                        </div>
                    </div>
                </div>
        `
        });
    }
}