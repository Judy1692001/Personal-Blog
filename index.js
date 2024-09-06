let menuIcon = document.getElementById('menu-icon');

let menuItems = document.getElementById('menu-items');

let closeIcon = document.getElementById('close-icon');

menuIcon.addEventListener('click', function() {
    menuIcon.classList.toggle('hide');
    menuItems.classList.toggle('show'); /* practice more on it */
});

closeIcon.addEventListener('click', function() {
    menuItems.classList.toggle('show');
    menuIcon.classList.toggle('hide');
});