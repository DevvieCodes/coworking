const handleMobileMenu = () => {
	const header = document.querySelector('.header');
	const headerBtn = header.querySelector('.header-btn');
	const body = document.body;

	headerBtn.addEventListener('click', () => {
		header.classList.toggle('active');
		headerBtn.classList.toggle('active');
		body.classList.toggle('overflow-hidden');
	});
};

const handleStickyMenu = () => {
	const header = document.querySelector('.header');
	const scrollPosition = window.screenY || document.documentElement.scrollTop;

	if (scrollPosition > 0) {
		header.classList.add('sticky');
	} else {
		header.classList.remove('sticky');
	}
};

window.addEventListener('scroll', handleStickyMenu);

const initHeroLightbox = () => {
	GLightbox({
		autoplayVideos: true
	});
};

const handleHeroScrollButton = () => {
	const btn = document.querySelector('.hero__btn');
	const parent = btn.closest('.hero');
	const nextSection = parent.nextElementSibling;

	if (!nextSection) {
		return;
	}

	btn.addEventListener('click', () => {
		nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
	});
};

const initCounters = () => {
	new PureCounter({
		selector: ".purecounter",
		start: 0,
		end: 100,
		duration: 2,
		delay: 10,
		once: true,
		pulse: false,
		decimals: 0,
		legacy: true,
		filesizing: false,
		currency: false,
		formater: "us-US",
		separator: false,
	});
};

const initAccordions = () => {
	const accordionContainer = document.querySelector('.accordion-container');

	if (!accordionContainer) {
		return;
	}

	new Accordion(accordionContainer, {
		showMultiple: false,
		duration: 300,
		openOnInit: [0]
	});
};

const initSal = () => sal({ once: true, treshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
	handleMobileMenu();
	handleStickyMenu();
	initHeroLightbox();
	handleHeroScrollButton();
	initCounters();
	initAccordions();
	initSal();
});