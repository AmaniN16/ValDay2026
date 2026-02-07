const body = document.getElementById('buttonwrapper');
const button = document.getElementById('no-button');
const height = body.clientHeight;
const width = body.clientWidth;
const why_no = document.getElementById('why-say-no');
const yes_arrow = document.getElementById('click-yes');

yes_arrow.style.display = 'none';
why_no.style.display = 'none';
let clickCount = 0;

body.addEventListener('click', (event) => {
    clickCount++;
    console.log(`${clickCount} try`);
    if (clickCount === 3) {
        if (why_no.style.display === 'none') {
            why_no.style.display = '';
        }
    } else if (clickCount >= 5) {
        why_no.style.display = 'none';
        button.style.display = 'none';
        yes_arrow.style.display = '';
    }

    const newTop = Math.floor((Math.random() * Math.min(height, window.innerHeight || 0)) + 1);
    const newLeft = Math.floor((Math.random() * Math.min(width, window.innerWidth || 0)) + 1);

    button.style.top = `${newTop}px`;
    button.style.left = `${newLeft}px`;
})