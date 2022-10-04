const closeBtn = document.querySelector(".close-btn");
const modalBackProject = document.querySelector(".modal__back-project");
const modalContainer = document.querySelector(".modal");
const backProjectBtn = document.querySelector(".btn--back");
const inputRadioButtons = document.querySelectorAll(".input-radio-button");

backProjectBtn.addEventListener("click", function (e) {
  e.preventDefault();
  modalBackProject.classList.remove("u-hide");
  modalContainer.classList.remove("u-hide");
});

closeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("HEllo");
  modalBackProject.classList.add("u-hide");
  modalContainer.classList.add("u-hide");
});

inputRadioButtons.forEach((btn) => {
  btn.addEventListener("change", function () {
    let checked = this;

    inputRadioButtons.forEach((button) => {
      const choosenCard = button.closest(".modal__card");
      if (choosenCard.querySelector(".modal__card--extension")) {
        choosenCard
          .querySelector(".modal__card--extension")
          .classList.add("u-hide");
      }
    });
    checked
      .closest(".modal__card")
      .querySelector(".modal__card--extension")
      ?.classList.remove("u-hide");

    console.log("Ponisti");
  });
});
