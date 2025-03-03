const allBoxes = document.querySelectorAll(".boxes-container .box");

const boxExpand = (selectedBox) => {
    allBoxes.forEach((box) => {
        const radioInput = box.querySelector("input[type='radio']");
        const isSelected = box === selectedBox;
        box.classList.toggle("row-hidden", !isSelected); // Hide or show box
        radioInput.checked = isSelected;
    });
};

allBoxes.forEach((box) => {
    box.addEventListener("click", () => {
        boxExpand(box);
    });
});
