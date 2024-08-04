document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[data-toggle="offcanvas"]');
    const checkbox = document.getElementById("hamburger");
  
    links.forEach(link => {
      link.addEventListener("click", function () {
        if (checkbox) {
          checkbox.checked = false;
        }
      });
    });
  });
  