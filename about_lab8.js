const menuButtons = document.querySelectorAll('.menu button');
menuButtons.forEach(button => {
    button.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = '#FF5733';
        event.target.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseout', (event) => {
        if (!event.relatedTarget || !event.target.contains(event.relatedTarget)) {
            
            event.target.style.backgroundColor = '#255459';
            event.target.style.transform = 'scale(1)';
        }
    });
});

const image = document.querySelector('.floating-image-block img');
let isDragging = false;
let offsetX, offsetY;

image.addEventListener('mousedown', (e) => {
    isDragging = true;
    const rect = image.getBoundingClientRect();
    const parentRect = image.closest('.floating-image-block').getBoundingClientRect();

    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    image.style.left = `${rect.left - parentRect.left}px`;
    image.style.top = `${rect.top - parentRect.top}px`;
    image.style.zIndex = 1000;
    image.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const parentRect = image.parentElement.getBoundingClientRect();
        image.style.left = `${e.clientX - parentRect.left - offsetX}px`;
        image.style.top = `${e.clientY - parentRect.top - offsetY}px`;
    }
});

document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        image.style.cursor = 'grab';
    }
});
