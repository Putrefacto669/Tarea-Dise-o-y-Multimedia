const light = document.querySelector('.cursor-light');

document.addEventListener('mousemove', (e) => {
    light.style.left = e.pageX + 'px';
    light.style.top = e.pageY + 'px';
});