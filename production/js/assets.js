/// sliders

$('.carousel').owlCarousel({
    autoPlay: 4000,
    navigation: true,
    singleItem:true,
    navigationText : ["",""]
})
$('.carousel-2').owlCarousel({
    autoPlay: 4000,
    navigation: true,
    singleItem:true,
    navigationText : ["",""]
})

//// Accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}