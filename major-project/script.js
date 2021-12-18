const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const b1 = document.getElementById('bp1');
const b2 = document.getElementById('bp2');
const rb = document.getElementById('reset');
const mx = document.getElementById('maxi');
mx.value = 10;
function reset() {
  p1.innerHTML = 0;
  p2.innerHTML = 0;
  mx.value = 10;
  p1.classList.remove('green');
  p2.classList.remove('green');
  b1.disabled = false;
  b2.disabled = false;
  mx.disabled = false;
}
function increment(d) {
  mx.disabled = 'disabled';
  if (d.innerHTML !== mx.value) d.innerHTML = +d.innerHTML + 1;
  if (d.innerHTML === mx.value) {
    d.classList.add('green');
    b1.disabled = 'disabled';
    b2.disabled = 'disabled';
  }
}
b1.onclick = () => increment(p1);
b2.onclick = () => increment(p2);
rb.onclick = () => reset();
