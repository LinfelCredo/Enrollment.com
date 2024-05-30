const canvas = document.getElementById('signaturePad');
const context = canvas.getContext('2d');
const clearButton = document.getElementById('clearButton');
const saveButton = document.getElementById('saveButton');

canvas.width = 400;
canvas.height = 200;

let drawing = false;

canvas.addEventListener('mousedown', () => { drawing = true; });
canvas.addEventListener('mouseup', () => { drawing = false; context.beginPath(); });
canvas.addEventListener('mousemove', draw);

function draw(event) {
    if (!drawing) return;

    context.lineWidth = 2;
    context.lineCap = 'round';
    context.strokeStyle = 'black';

    context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    context.stroke();
    context.beginPath();
    context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
}

clearButton.addEventListener('click', () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
});

saveButton.addEventListener('click', () => {
    const dataURL = canvas.toDataURL('image/png');
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'save_signature.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('signature=' + encodeURIComponent(dataURL));
});
