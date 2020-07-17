const backdrop = document.querySelector(".backdrop");
const selectPlanButtons = document.querySelectorAll(".plan button");
const modal = document.querySelector(".modal");
const closeModalButton = document.querySelector(".modal__action--negative");
const toggleButoon = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

// console.dir(selectPlanButtons)

// see .open in shared.css
for (let i = 0; i < selectPlanButtons.length; i++) {
	selectPlanButtons[i].addEventListener("click", () => {
		// modal.style.display = "block";
		// backdrop.style.display = "block";
		modal.classList.add("open");
		backdrop.classList.add("open");
	});
}

const closeModal = () => {
	// modal.style.display = "none";
	// backdrop.style.display = "none";
	if (modal) {
		modal.classList.remove("open");
	}
	backdrop.classList.remove("open");
};

if (closeModalButton) {
	closeModalButton.addEventListener("click", closeModal);
}

backdrop.addEventListener("click", () => {
	mobileNav.classList.remove("open");
	closeModal();
});

toggleButoon.addEventListener("click", () => {
	// mobileNav.style.display = "block";
	// backdrop.style.display = "block";
	mobileNav.classList.add("open");
	backdrop.classList.add("open");
});