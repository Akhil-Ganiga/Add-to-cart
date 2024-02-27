document.addEventListener("DOMContentLoaded", function () {
  // Get the all cart rows
  const cartRows = document.querySelectorAll(".cartRow");

  // Add event listener to the each row
  cartRows.forEach((row) => {
    // Get the radio button and row content for each row
    const radioBtn = row.querySelector('input[type="radio"]');
    const rowContent = row.querySelector(".rowContent");

    // Add the click event listener to row title
    row.querySelector(".rowTitle").addEventListener("click", () => {
      // Check the radio button and display content for the clicked row
      radioBtn.checked = true;
      rowContent.style.display = "block";

      // Uncheck the radio butns and hide content for other rows
      cartRows.forEach((otherRow) => {
        if (otherRow !== row) {
          otherRow.querySelector('input[type="radio"]').checked = false;
          otherRow.querySelector(".rowContent").style.display = "none";
          otherRow.classList.remove("active"); // Remove 'active' class from other rows
        }
      });

      row.classList.add("active");
    });

    // Show  the content for the first row when page loads
    if (radioBtn.checked) {
      rowContent.style.display = "block";
      row.classList.add("active"); // Add 'active' class to the first row
    }
  });
});
