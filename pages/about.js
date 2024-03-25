document.addEventListener("DOMContentLoaded", function () {
    const userNameElement = document.querySelector(".navbar p");
    const savedName = localStorage.getItem("userName");
  
    if (savedName) {
      userNameElement.textContent = `Hello, ${savedName}`;
    }
  });