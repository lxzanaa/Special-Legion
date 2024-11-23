const leftRange = document.getElementById('left-range');
const rightRange = document.getElementById('right-range');
const leftValue = document.getElementById('left-value');
const rightValue = document.getElementById('right-value');
const leftPrice = document.getElementById('left-price');
const rightPrice = document.getElementById('right-price');

function updateValues() {
    let left = parseInt(leftRange.value);
    let right = parseInt(rightRange.value);

    if (left >= right) {
        left = right - 1;
        leftRange.value = left;
    } else if (right <= left) {
        right = left + 1;
        rightRange.value = right;
    }

    leftValue.textContent = left;
    rightValue.textContent = right;
    leftPrice.value = left;
    rightPrice.value = right;

    const leftPercent = ((left - leftRange.min) / (leftRange.max - leftRange.min)) * 100;
    const rightPercent = ((right - rightRange.min) / (rightRange.max - rightRange.min)) * 100;

    // Set background to only show blue between the two handles
    leftRange.style.background = `linear-gradient(to right, #E6E6E6 ${leftPercent}%, #307FDD ${leftPercent}%, #307FDD ${rightPercent}%, #E6E6E6 ${rightPercent}%)`;
    rightRange.style.background = `linear-gradient(to right, #E6E6E6 ${leftPercent}%, #307FDD ${leftPercent}%, #307FDD ${rightPercent}%, #E6E6E6 ${rightPercent}%)`;

    // Move labels above the sliders
    leftValue.style.left = `calc(${leftPercent}% - 10px)`;
    rightValue.style.left = `calc(${rightPercent}% - 10px)`;
}

function showLabels() {
    leftValue.classList.add('active');
    rightValue.classList.add('active');
}

function hideLabels() {
    leftValue.classList.remove('active');
    rightValue.classList.remove('active');
}

leftRange.addEventListener('input', updateValues);
rightRange.addEventListener('input', updateValues);

leftRange.addEventListener('mousedown', showLabels);
rightRange.addEventListener('mousedown', showLabels);

document.addEventListener('mouseup', hideLabels);
