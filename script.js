const buttons = document.querySelectorAll(".btnPrimary");
const faceImg = document.querySelector("img");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Update image with fade and zoom animation
    faceImg.classList.remove("show"); // Trigger reflow
    setTimeout(() => {
      faceImg.src = `photo/${btn.dataset.elem}.png`; // Change image based on button
      faceImg.classList.add("show");
    }, 300); // Wait for fade-out before changing image

    // Highlight selected button
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
