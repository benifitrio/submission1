export default function styleJs(){
    // Get element
    const barsBtn = document.querySelector('.burger');
    const sidenav =document.querySelector('.sidenav');
    const btnClose = document.querySelector('.fa-times');
    const btnUp = document.querySelector('.scrollToTop');

    // Add event klik bars open navigation
    barsBtn.addEventListener('click', e=>{
        sidenav.classList.toggle('open');
        barsBtn.classList.toggle('hidden');
    });
    // Add event klik close navigation
    btnClose.addEventListener('click', e=>{
        e.preventDefault();
        sidenav.classList.remove('open');
        barsBtn.classList.remove('hidden');
    })

    //Scroll smooth
    btnUp.onclick = () =>{
        scrollTo(document.documentElement, 5, 1000, () => { console.log("Done with scrolling !!!!")})
    }

    function scrollTo(element, to = 0, duration= 1000, scrollToDone = null) {
        const start = element.scrollTop;
        const change = to - start;
        const increment = 20;
        let currentTime = 0;

        const animateScroll = (() => {

          currentTime += increment;

          const val = Math.easeInOutQuad(currentTime, start, change, duration);

          element.scrollTop = val;

          if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        } else {
            if (scrollToDone) scrollToDone();
        }
        });

        animateScroll();
      }

      Math.easeInOutQuad = function (t, b, c, d) {

        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
      };

    window.addEventListener('scroll', e => {
        if(document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100){
            btnUp.style.display = "block";
        }else{
            btnUp.style.display = "";
        }
    });

    //mode dark
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');

    // check local storage for theme
    if(currentTheme){
        document.documentElement.setAttribute('data-theme', currentTheme);
        if(currentTheme === 'dark'){
            toggleSwitch.checked = true;
        }
    };

    function switchTheme(e){
        if(e.target.checked){
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    };
    toggleSwitch.addEventListener('change', switchTheme);
};
