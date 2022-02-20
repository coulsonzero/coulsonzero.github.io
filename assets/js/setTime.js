/* ========== datetime ========== */
const setTime = () => {
	const d = new Date();
	const datetime = document.querySelector(".icons .datetime");
	datetime.innerHTML = d.toTimeString().substring(0, 8);
};

export default setTime;
