$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

// let dots = document.querySelectorAll('.btn-slider__point');
// let slides = documet.querySelectorAll('.slider__item');
// let prevBtn = document.querySelector('.btn-slider__button--left');
// let nextBtn = document.querySelector('.btn-slider__button--right');
// let sliderIndex = 1;

// showActiveSlide(sliderIndex);

// function showActiveSlide (n){
// 	if (n < 1){
// 		sliderIndex = slides.length;
// 	} else if (n > slides.length){
// 		sliderIndex = 1;
// 	}

// 	for (let i = 0; i < slides.length; i++){
// 		slides[i].style.border = "2px solid #dddddd";
// 	}
// 	for(let i = 0; i < dots.length; i++){
// 		dots[i].classList.remove('btn-slider__point-checked');
// 	}

// 	slides[sliderIndex - 1].style.border = "2px solid $pink";
// 	dots[sliderIndex - 1].classList.add('btn-slider__point-checked');
// }

// function plusSlides(n){
// 	showActiveSlide (sliderIndex += n);
// }

const slider = {
	data() {
		return {
			slides: [],
		}
	},
	methods: {
		prevSlide(){
			console.log(hyu);
			console.log(slides);
		},
		nextSlide() {
			console.log(slides);
		}
	},
}



Vue.createApp(slider).mount('#slider');
