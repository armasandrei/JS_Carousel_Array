// OWL , slick, .... Bootstrap
// 1. function
// 2. events
// 3. Arrray, number, String ..
// 4. if/else, for while

const IMAGES = [               //type - Array
"images\661-800x600.jpg",     //HW1:what is const and why CAPS?
"images\691-800x600.jpg",
"images\1051-800x600.jpg"
]

let currentIndex = 0

function showImage( n ) {
    carouselSlides.innerHTML = 
    `
    <img src="${IMAGES[n]}"/>
    `
}

function next() {
    //HW2: boundaries/ limits - if/else
    //HW3*: optimize this 2 lines
    // HW4: create prev() function
    currentIndex++
    showImage(currentIndex)
}
showImage(currentIndex)