let navmenu = document.querySelectorAll('#navlinks li');

document.getElementById("menu-toggle").addEventListener("click", () => {
    document.getElementById("menu-toggle").classList.add("close");
    document.getElementById("menu-toggle-close").classList.add("open");
    document.getElementById("navlinks").classList.toggle("mobilemenu");
});
document.getElementById("menu-toggle-close").addEventListener("click", () => {
    document.getElementById("menu-toggle").classList.remove("close");
    document.getElementById("menu-toggle-close").classList.remove("open");
    document.getElementById("navlinks").classList.toggle("mobilemenu");
});

document.querySelectorAll('#navlinks a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        navmenu.forEach(menu => {
            menu.classList.remove("active");
        })

        const targetlistitem = e.target.closest("li");
        targetlistitem.classList.add("active");

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust offset for navbar height
                behavior: 'smooth'
            });
        }

        /*toggle mobie menu*/
        document.getElementById("navlinks").classList.toggle("mobilemenu");
        document.getElementById("menu-toggle").classList.toggle("close");
        document.getElementById("menu-toggle-close").classList.toggle("open");
    });
});