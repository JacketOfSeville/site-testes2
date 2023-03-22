var sidebarState = 0;
const sidebar = document.getElementById('sidebar');

function interactNav() {
    if (sidebarState == 1) {
        sidebar.style.width = "200px";
        document.getElementById("main").style.marginLeft = "200px";
        sidebarState = 0;
     } else {
        sidebar.style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        sidebarState = 1;
    }
} 

interactNav();