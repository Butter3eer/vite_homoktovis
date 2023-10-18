import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");

let katt1 = 0;
let katt2 = 0;
let katt3 = 0;
let katt4 = 0;
let katt5 = 0;

img1.addEventListener("click", () => {
    katt1++;
    img1.alt = katt1.toString();
});
img2.addEventListener("click", () => {
    katt2++;
    img2.alt = katt2.toString();
});
img3.addEventListener("click", () => {
    katt3++;
    img3.alt = katt3.toString();
});
img4.addEventListener("click", () => {
    katt4++;
    img4.alt = katt4.toString();
});
img5.addEventListener("click", () => {
    katt5++;
    img5.alt = katt5.toString();
});