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


 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  focusOnSelect: true
});
		
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

/// btn-size

var mainClass = document.querySelector('.btn-group'),
	result = mainClass.querySelector('.btn-group__result'),
	firstChild = mainClass.firstElementChild,
	lastChild = mainClass.lastElementChild;
	firstChild.onclick = remove;
	lastChild.onclick = add;

	function add(){
		result.innerHTML =  +result.innerHTML  + 1;
	}
	function remove(){
		if(result.innerHTML >= 1) {
			result.innerHTML = +result.innerHTML - 1;
		}
	}