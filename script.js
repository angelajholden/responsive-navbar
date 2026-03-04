function copyrightDate() {
	const date = document.getElementById("date");
	const year = new Date().getFullYear();
	if (!date) return;
	date.textContent = year;
}

document.addEventListener("DOMContentLoaded", () => {
	copyrightDate();
});
