import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';

const colorInput = document.getElementById("colorInput");
const header2 = document.getElementById("header2");

colorInput.addEventListener('input', () => {
    header2.classList.remove('bg-warning');
    header2.style.backgroundColor = colorInput.value;
    console.log(colorInput.value);
});