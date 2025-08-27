const track = document.querySelector('.slider__track')
const slides = Array.from(document.querySelectorAll('.slide'))
const prevBtn = document.querySelector('.slider__prev')
const nextBtn = document.querySelector('.slider__next')
const pagination = document.querySelector('.slider__pagination')

let currentIndex = 0


slides.forEach((_, index) => {
	const radio = document.createElement('input')
	radio.type = 'radio'
	radio.name = 'slider-pagination'
	radio.addEventListener('click', () => goToSlide(index))
	if (index === 0) radio.checked = true
	pagination.appendChild(radio)
})

const radios = Array.from(
	document.querySelectorAll('.slider__pagination input')
)


function goToSlide(index) {
	if (index < 0) index = slides.length - 1
	if (index >= slides.length) index = 0
	currentIndex = index
	track.style.transform = `translateX(-${100 * index}%)`
	radios[index].checked = true
}


prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1))
nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1))
