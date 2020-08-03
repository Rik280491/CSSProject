const backdrop = document.querySelector(".backdrop");
const selectPlanButtons = document.querySelectorAll(".plan button");
const modal = document.querySelector(".modal");
const closeModalButton = document.querySelector(".modal__action--negative");
const toggleButoon = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");
const ctaButton = document.querySelector(".main-nav__item--cta");

// console.dir(selectPlanButtons)

// see .open in shared.css
for (let i = 0; i < selectPlanButtons.length; i++) {
	selectPlanButtons[i].addEventListener("click", () => {
		// modal.style.display = "block";
		modal.classList.add("open");
		backdrop.style.display = "block";
		setTimeout(() => {
			backdrop.classList.add("open");
		}, 10);
	});
}

const closeModal = () => {
	// modal.style.display = "none";
	if (modal) {
		modal.classList.remove("open");
	}
	backdrop.classList.remove("open");

	setTimeout(() => {
		backdrop.style.display = "none";
	}, 200);
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
	mobileNav.classList.add("open");
	backdrop.style.display = "block";
	setTimeout(() => {
		backdrop.classList.add("open");
	}, 10);
});

// timeout fns implemented for backdrop transition. bit hacky

ctaButton.addEventListener("animationstart", (e) => {
	console.log("start", e);
});

ctaButton.addEventListener("animationend", (e) => {
	console.log("end", e);
});

ctaButton.addEventListener("animationiteration", (e) => {
	console.log("iterate", e);
});
