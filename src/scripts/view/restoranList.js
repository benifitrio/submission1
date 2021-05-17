//import data.json fetch
import dataSource from '../data/dataSource';

export default function DataResto(){
    restoranList();
    function restoranList(){
        const results = dataSource();
        results.then( data=>{
            // Get element body content
            const __bodyContent  = document.getElementById('content');
            let __content = "";
            data.restaurants.forEach(data=>{
                let __description = data.description.substring(0,150);
                __content +=`
                <div class="col">
                <a href="" tabindex="0">
                    <div class="card" >
                        <div class="card-img">
                            <img src="${data.pictureId}" alt="restoran ${data.name}">
                            <div class="rating rate-${data.id}" >
                                <div class="stars-outer">
                                    <div class="stars-inner"></div>
                                </div>
                                <span class="number-rating" aria-label="rating restoran ${data.name} ${data.rating}"></span>
                            </div>
                            <span class="city">${data.city}</span>
                        </div>
                        <div class="description">
                            <h4 class="title">${data.name}</h4>
                            <p class="subtitle">${__description}...</p>
                        </div>
                    </div>
                    </a>
                </div>`;
            });

            __bodyContent.innerHTML = __content;
        });
    }
};