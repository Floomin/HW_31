const block = document.querySelector('.block');

/**
 * The getRandomColor function generates a random RGB color value.
 * @returns The function getRandomColor() returns a random RGB color in the format "rgb(color1, color2,
 * color3)", where color1, color2, and color3 are random integers between 0 and 255.
 */
function getRandomColor() {
    const color1 = Math.floor(Math.random() * 256);
    const color2 = Math.floor(Math.random() * 256);
    const color3 = Math.floor(Math.random() * 256);

    return `rgb(${color1}, ${color2}, ${color3})`;
}

/**
 * The function `changeColor` changes the background color of an element to a randomly generated color.
 */
function changeColor() {
    block.style.backgroundColor = getRandomColor();
}

/**
 * The `moveBlock` function sets a random position for a block element within the window boundaries.
 */
function moveBlock() {
    const maxHeight = window.innerHeight - block.offsetHeight;
    const maxWidth = window.innerWidth - block.offsetWidth;

    const randomLeft = Math.floor(Math.random() * maxWidth);
    const randomTop = Math.floor(Math.random() * maxHeight);

    block.style.left = `${randomLeft}px`;
    block.style.top = `${randomTop}px`;
}

setInterval(changeColor, 900);

setInterval(moveBlock, 910);