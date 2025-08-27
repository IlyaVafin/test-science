const burgerImage = document.querySelector('.header__burger-image')

function toggleMenu(
	buttonSelector,
	menuSelector,
	activeClass = 'active',
	buttonImageSelector,
	buttonImageClose,
	buttonImageOpen,
	overlaySelector
) {
	const button = document.querySelector(buttonSelector)
	const menu = document.querySelector(menuSelector)
	const image = document.querySelector(buttonImageSelector)
	const overlay = document.querySelector(overlaySelector)
	if (!button || !menu) return
	button.addEventListener('click', () => {
		const isActive = menu.classList.toggle(activeClass)
		if (overlay) {
			overlay.classList.toggle(activeClass)
		}
		image.src = isActive ? buttonImageClose : buttonImageOpen
	})
}

toggleMenu(
	'.header__burger-button',
	'.header__nav-mobile',
	'active',
	'.header__burger-image',
	'/images/close-icon.svg',
	'/images/burger-icon.svg',
	'.overlay'
)


