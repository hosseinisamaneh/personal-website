// Small interactive features for your website

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Example: Highlight current nav link
const currentLocation = location.href;
const menuItems = document.querySelectorAll("nav ul li a");
menuItems.forEach(item => {
  if (item.href === currentLocation) {
    item.classList.add("active");
  }
});
