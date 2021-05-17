import dataSource from '../data/dataSource';

// Get ratings
export default function Ratings(){
    // chaining data.json
    dataSource().then(results=>{
        // Get data id dan rating to Array
        let __ratings = [];
        //loop data restaurants
        results.restaurants.forEach(data=>{
            // push data to array
            __ratings.push(data.id);
            __ratings.push(data.rating);
        });
        // ubah Array __ratings jadi masing2 2 kelompok
        let __ratingsArr = [];
        __ratingsArr.push(__ratings.slice(0,2));
        __ratingsArr.push(__ratings.slice(2,4));
        __ratingsArr.push(__ratings.slice(4,6));
        __ratingsArr.push(__ratings.slice(6,8));
        __ratingsArr.push(__ratings.slice(8,10));
        __ratingsArr.push(__ratings.slice(10,12));
        __ratingsArr.push(__ratings.slice(12,14));
        __ratingsArr.push(__ratings.slice(14,16));
        __ratingsArr.push(__ratings.slice(16,18));

        // ubah __ratingArray to object
        let __ratingsObj = Object.fromEntries(__ratingsArr);
        // loop Object __ratingObj
        for(let __rating in __ratingsObj){
            // Get percentage
            const starPercentage = (__ratingsObj[__rating]/5) * 100;
            // Round to nearest 10
            const starPercentageRounded = `${Math.round(starPercentage/10)*10}%`;

            // Set width of stars-inner to percentage
            document.querySelector(`.rate-${__rating} .stars-inner`).style.width = starPercentageRounded;

            // Add number rating
            document.querySelector(`.rate-${__rating} .number-rating`).innerHTML = __ratingsObj[__rating];
        };
    })
};