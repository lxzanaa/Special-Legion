document.addEventListener('DOMContentLoaded', function () {
    const leftBtn = document.querySelector('.product-list-btn-left');
    const rightBtn = document.querySelector('.product-list-btn-right');
    const itemsContainer = document.querySelector('.product-list__items');
    const itemWidth = document.querySelector('.product-list__item').offsetWidth;
    let currentIndex = 0;

    const totalItems = document.querySelectorAll('.product-list__item').length;

    function moveLeft() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarouselPosition();
        }
    }

    function moveRight() {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
            updateCarouselPosition();
        }
    }

    function updateCarouselPosition() {
        const offset = -currentIndex * (itemWidth + 20); 
        itemsContainer.style.transform = `translateX(${offset}px)`;

        if (currentIndex === 0) {
            leftBtn.style.display = 'none';  
        } else {
            leftBtn.style.display = 'block';
        }

        if (currentIndex === totalItems - 1) {
            rightBtn.style.display = 'none'; 
        } else {
            rightBtn.style.display = 'block';
        }
    }

    updateCarouselPosition();

    leftBtn.addEventListener('click', moveLeft);
    rightBtn.addEventListener('click', moveRight);

    setInterval(function() {
        if (currentIndex < totalItems - 1) {
            moveRight();
        } else {
            currentIndex = 0; 
            updateCarouselPosition();
        }
    }, 10000); 
});
