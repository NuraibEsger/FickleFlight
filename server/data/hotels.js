export let DPopularHotels=[
    {
        id:1,
        typeof:"Deluxe",
        tittle:"Matterhorn Suites",
        img:"assets\images\Matterhorn Suites Image.png",
        price:{amount:575, currency:"USD"},
        review:{
            star:4.5,
            count:60
        },
    },
    {
        id:2,
        typeof:"Deluxe",
        tittle:"Discovery Shores",
        img:"assets\images\Discovery Shores Image.png",
        price:{amount:360, currency:"USD"},
        review:{
            star:4.8,
            count:116
        },
    },
    {
        id:3,
        typeof:"Deluxe",
        tittle:"Arctic Hut ",
        img:"assets\images\Arctic Hut Image.png",
        price:{amount:420, currency:"USD"},
        review:{
            star:4.7,
            count:78
        },
    },{
        id:4,
        typeof:"Deluxe",
        tittle:"Lake Louise Inn",
        img:"assets\images\Lake Louise Image.png",
        price:{amount:224, currency:"USD"},
        review:{
            star:4.6,
            count:63
        },
    }
]

export let DHotel=[
...DPopularHotels,
...DPopularHotels,
...DPopularHotels,
]