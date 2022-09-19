var dogAPIUrl = "https://dog.ceo/api/breeds/image/random";

// global variables
var imageElement;
var loadingElement;

// triggered when the page is loaded
document.addEventListener("DOMContentLoaded", function() {
    // bind function to button
    var btn = document.getElementById('getDogButton');
    btn.addEventListener('click', function() {
        getDog();
    });

    imageElement = document.getElementById("dogImage");
    loadingElement = document.getElementById("dogBouncing");
    

    // binds this function to the "load" event of the <img>
    // when the image loads, hide the animation and show the image
    imageElement.addEventListener("load", function(){
        // hides the loading animation
        loadingElement.classList.add("hidden");
        // shows dog image
        imageElement.classList.remove("hidden");
    });
    
    // loads the first image
    getDog();
});


function getDog(){
    // hide current image
    imageElement.classList.add("hidden");
    // show loading animation
    loadingElement.classList.remove("hidden");

    // get image link from API
    fetch(dogAPIUrl).then(function(response) {
        return response.json();
    }).then(function(data) {
        // sets the img link in the element
        imageElement.src = data.message;
    }).catch(function(data) {
        console.log("Error\nStatus: " + data.status);
    });
}

