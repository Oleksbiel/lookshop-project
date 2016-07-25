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

var acc2 = document.getElementsByClassName("accordion2");
var n;

for (n = 0; n < acc2.length; n++) {
    acc2[n].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}

//// slider range



$('#flat-slider').slider({
  orientation: 'horizontal',
  range:       true,
  values:      [17,67]
});