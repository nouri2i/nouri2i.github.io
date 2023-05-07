// import countapi from 'countapi-js';

// countapi.visits().then((result) => {
//     console.log(result.value);
// });

let stickyElem = document.querySelector("#navbar");
     
    /* Gets the amount of height
    of the element from the
    viewport and adds the
    pageYOffset to get the height
    relative to the page */
currStickyPos = stickyElem.getBoundingClientRect().top + window.pageYOffset;
    console.log(currStickyPos)
    window.onscroll = function() {
         
        /* Check if the current Y offset
        is greater than the position of
        the element */
        if(window.pageYOffset > currStickyPos) {
            stickyElem.style.position = "fixed";
            stickyElem.style.top = "0px";
        } else {
            stickyElem.style.position = "relative";
            stickyElem.style.top = "initial";
        }
    }
function websiteVisits(response) {
    console.log("testing");
    document.querySelector("#visits").textContent = response.value;
    console.log(response.value);
}
// // 2i colors : 21, 83, 168

const paragraph = document.querySelector('.truncate');

paragraph.addEventListener('click', () => {
  paragraph.classList.toggle('expandable');
  
});
