const monthYearEl = document.querySelector('#month-year')
let daysContainer = document.getElementById('calendar-days')
const dayNamesContainer = document.querySelector('.calendar__day-names')
const prevButton = document.querySelector('#prev-btn')
const nextButton = document.querySelector('#next-btn')
const dateInput = document.querySelector('input[type="date"]')
const dateBtn = document.querySelector('#date-btn')
const todayDayTitle = document.querySelector('.calendar__today-date')

const monthNames = [
	'Январь',
	'Февраль',
	'Март',
	'Апрель',
	'Май',
	'Июнь',
	'Июль',
	'Август',
	'Сентябрь',
	'Октябрь',
	'Ноябрь',
	'Декабрь',
]

const monthNamesGenitive = [
	'января',
	'февраля',
	'марта',
	'апреля',
	'мая',
	'июня',
	'июля',
	'августа',
	'сентября',
	'октября',
	'ноября',
	'декабря',
]

const dayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

const currentDate = new Date()

const renderDayNames = () => {
	dayNamesContainer.innerHTML = dayNames
		.map(day => `<span>${day}</span>`)
		.join('')
}

const renderCalendar = () => {
	const year = currentDate.getFullYear()
	const month = currentDate.getMonth()

	monthYearEl.textContent = `${monthNames[month]} ${year}`
	dateInput.value = currentDate.toISOString().split('T')[0]

	const firstDay = (new Date(year, month).getDay() + 6) % 7
	const daysInMonth = 32 - new Date(year, month, 32).getDate()
	const prevMonthDays = new Date(year, month, 0).getDate()

	daysContainer.innerHTML = ''

	for (let i = firstDay - 1; i >= 0; i--) {
		const day = prevMonthDays - i
		daysContainer.innerHTML += `<span class="calendar__day calendar__days-hidden">${day}</span>`
	}

	for (let day = 1; day <= daysInMonth; day++) {
		const isToday =
			day === new Date().getDate() &&
			month === new Date().getMonth() &&
			year === new Date().getFullYear()

		daysContainer.innerHTML += `<span class="${
			isToday ? 'calendar__day today' : 'calendar__day'
		}">${day}</span>`
	}

	const totalCells = firstDay + daysInMonth
	const nextMonthDays = 42 - totalCells
	for (let day = 1; day <= nextMonthDays; day++) {
		daysContainer.innerHTML += `<span class="calendar__day calendar__days-hidden">${day}</span>`
	}

	todayDayTitle.innerHTML = `Мероприятия на <mark>${currentDate.getDate()} ${
		monthNamesGenitive[currentDate.getMonth()]
	}</mark>`
}

const changeMonth = delta => {
	currentDate.setMonth(currentDate.getMonth() + delta)
	renderCalendar()
}

prevButton.addEventListener('click', () => changeMonth(-1))
nextButton.addEventListener('click', () => changeMonth(1))
dateBtn.addEventListener('click', () => {
	dateInput.showPicker?.() || dateInput.click()
})
dateInput.addEventListener('change', e => {
	const selectedDate = new Date(e.target.value)
	if (!isNaN(selectedDate)) {
		currentDate.setFullYear(
			selectedDate.getFullYear(),
			selectedDate.getMonth(),
			selectedDate.getDate()
		)
		renderCalendar()
	}
})

renderDayNames()
renderCalendar()
