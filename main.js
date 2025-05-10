function loadComponent(id, file, callback) {
    fetch(file)
      .then(res => res.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;
        if (callback) callback(); // Run callback after load
      })
      .catch(err => console.error(`Error loading ${file}:`, err));
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header", "header.html");
    loadComponent("footer", "footer.html", () => {
      // This runs AFTER footer is loaded
      document.querySelectorAll(".year").forEach(el => {
        el.textContent = new Date().getFullYear();
      });
    });
  });
  