/*=============== SCROLL REVEAL ANIMATION ===============*/
const scrollReveal = () => {
	const sr = ScrollReveal({
		origin: "bottom",
		distance: "60px",
		duration: 1600,
		delay: 200,
		// reset: true
	});

	sr.reveal(`.nav .logo span`, {
		origin: "bottom",
		delay: 200,
	});
	// sr.reveal(`.navbar li`, { origin: 'left', interval: 100 })
	sr.reveal(`.main section div`, {origin: "bottom"});
	sr.reveal(`.about-links a`, {origin: "bottom", interval: 100, dalay: 200});
	sr.reveal(`.footer`, {
		origin: "bottom",
		dalay: 200,
		interval: 100,
	});
};

export default scrollReveal
