
var mybutton = document.getElementById("topBtn");


function scrollFunction() {
    if (document.body.scrollTop > 20 || window.pageYOffset || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
});
}



