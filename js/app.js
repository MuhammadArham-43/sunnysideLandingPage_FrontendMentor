let navbar = document.getElementsByTagName("nav");
let navbarHeight = (navbar[0].getBoundingClientRect().height);

let sidebar = document.getElementById("sidebar");

window.addEventListener("onload", function() {
    sidebar.classList.remove("showSidebar");
})

let hamburgerIcon = document.getElementById("sidebarBtn");
hamburgerIcon.addEventListener("click", function() {
    sidebar.classList.toggle("showSidebar");
})
