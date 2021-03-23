const mySwiper = new Swiper('.swiper-container', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},
});

// cart

const cartBtn = document.querySelector('.button-cart');
const modalCart = document.querySelector('#modal-cart');
const modalCloseBtn = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.overlay');


const openModal = function(){
	modalCart.classList.toggle('show');
}

const closeModal = function(){
	modalCart.classList.remove('show');
}

cartBtn.addEventListener('click', openModal);
modalCloseBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// scroll smooth
{
	const scrollLinks = document.querySelectorAll('a.scroll-link');
	for (let i = 0; i< scrollLinks.length; i++) {
		scrollLinks[i].addEventListener('click', function(event) {
			event.preventDefault();
			const id = scrollLinks[i].getAttribute('href');
			document.querySelector(id).scrollIntoView( {
				behavior: 'smooth',
				block: 'start',
			});
		});
	}
}