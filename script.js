const land = document.querySelector('.land');
const runway = document.querySelector('.runway');

let x = 0;
let y = 0;
let landWidth = 30;
let landHeight = 30;
let runwayWidth = 3;
let runwayHeight = 15;

window.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowUp') {
        y -= 10;
        document.querySelector('i').style.top = `${y}px`;
        document.querySelector('i').style.transform = 'rotate(270deg)';
    }
    if (e.code === 'ArrowDown') {
        y += 10;
        document.querySelector('i').style.top = `${y}px`;
        document.querySelector('i').style.transform = 'rotate(90deg)';
    }
    if (e.code === 'ArrowLeft') {
        x -= 10;
        document.querySelector('i').style.left = `${x}px`;
        document.querySelector('i').style.transform = 'rotate(180deg)';
    }
    if (e.code === 'ArrowRight') {
        x += 10;
        document.querySelector('i').style.left = `${x}px`;
        document.querySelector('i').style.transform = 'rotate(0deg)';
    }
    if (e.code === 'Space') {
        runwayHeight += 5;
        runwayWidth += 1;
        runway.style.height = `${runwayHeight}px`;
        runway.style.width = `${runwayWidth}px`;
    }
    if (e.code === 'Backspace') {
        runwayHeight -= 5;
        runwayWidth -= 1;
        runway.style.height = `${runwayHeight}px`;
        runway.style.width = `${runwayWidth}px`;
    }
});