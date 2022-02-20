/*=============== SCROLL REVEAL ANIMATION ===============*/
const scrollReveal = () => {
	const sr = ScrollReveal({
		origin: "top",
		distance: "60px",
		duration: 1600,
		delay: 200,
		reset: true
	});

	sr.reveal(`.nav .logo span`, {
		origin: "left",
		delay: 200,
	});
	// sr.reveal(`.navbar li`, { origin: 'left', interval: 100 })
	sr.reveal(`.main section div`, {origin: "top"});
	sr.reveal(`.about-links a`, {origin: "left", interval: 100, dalay: 200});
	sr.reveal(`.footer`, {
		origin: "right",
		dalay: 200,
		interval: 100,
	});
};

export default scrollReveal
