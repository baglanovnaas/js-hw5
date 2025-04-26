document.querySelector('.main-img').addEventListener("click", function() {
    let input = document.querySelector('input');
    let error = document.querySelector('.error');

    error.style.display = 'block';
    input.style.setProperty('border', '2px solid hsl(0, 93%, 68%)', 'important');
});