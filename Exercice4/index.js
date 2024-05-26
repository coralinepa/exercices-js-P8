document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("myButton");
  const messageParagraph = document.getElementById("message");

  console.log(button);

  button.addEventListener("click", () => {
    messageParagraph.textContent = "Bonjour, vous avez cliqué sur le bouton !";
  });
});
