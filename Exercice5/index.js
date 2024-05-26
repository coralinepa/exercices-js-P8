document.addEventListener("DOMContentLoaded", function () {
  const infoButton = document.getElementById("infoButton");
  const additionalInfo = document.getElementById("additionalInfo");

  if (infoButton && additionalInfo) {
    infoButton.addEventListener("click", function () {
      const isHidden = additionalInfo.classList.contains("hidden");
      additionalInfo.classList.toggle("hidden");
      infoButton.setAttribute("aria-expanded", !isHidden);
    });
  }
});
