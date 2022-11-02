console.log("Hello JavaScript!");

const menuOpenBtn = document.getElementById("menuToggleIcon--menu");
const menuCloseBtn = document.getElementById("menuToggleIcon--close");
const navListContainer = document.getElementById("navListContainer");

[
    menuOpenBtn,
    menuCloseBtn
].forEach((menuBtn) => {
    menuBtn.onclick = function() {
        menuOpenBtn.classList.toggle("hidden");
        menuCloseBtn.classList.toggle("hidden");
        navListContainer.classList.toggle("hidden");
    }
})