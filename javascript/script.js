const menu = document.getElementById("menu");
const overlay = document.getElementById("over");
const sidebar = document.getElementById("sidebars");

// Sidebar ochish
menu.addEventListener("click", () => {
  sidebar.classList.add("active");
  sidebar.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

// Overlay bosilganda sidebar yopish
overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");

  // 300ms kutish (animatsiya uchun), keyin yashirish
  setTimeout(() => {
    sidebar.classList.add("hidden");
    overlay.classList.add("hidden");
  }, 300);
});
