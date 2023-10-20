let hotels = document.querySelector(".hotel-cards")

async function popHotels(){
    let res = await fetch(("http://localhost:4000/popularhotels"))
    let data = res.json();

    if(!res==ok){
        console.log("Sehvlik");
    }

    if(Array.isArray(data) && data){
        hotels.innerHTML = "";;
        data.forEach(hotel=> {
            hotels.innerHTML += `
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
            `
        }
            
        )
    }
}