import {default as DataRes} from '../view/restoranList';

// Load Navigator
function renderNav(){
    console.log("DOMContentLoaded");
    let page;

    loadNavDekstop();
    function loadNavDekstop() {
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
          if (this.status !== 200) return;

          // Muat daftar tautan menu
          const __navDesktop = document.getElementById("desktop-nav")
          __navDesktop.innerHTML = xhttp.responseText;
          __navDesktop.addEventListener('click', e=>{
            page = e.target.attributes[0].value.substring(1);
            renderPage(page);
          })
        }
      };

      xhttp.open("GET", "nav.html", true);
      xhttp.send();
    }

    //nav mobile
    loadNavMobile();
    function loadNavMobile() {
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
          if (this.status !== 200) return;

          // Muat daftar tautan menu
          const __navMobile = document.getElementById("mobile-nav")
          __navMobile.innerHTML = xhttp.responseText;
          __navMobile.addEventListener('click', e=>{
            page = e.target.attributes[0].value.substring(1);
            renderPage(page);
          })
        }
      };

      xhttp.open("GET", "navMobile.html", true);
      xhttp.send();
    }


    page = window.location.hash.substring(1);
    if(page === '') page = 'home';
    renderPage(page);

    function renderPage(){
      if(page === 'home') DataRes();
    }

};

export {renderNav};