const A = document.getElementById("a");
const B = document.getElementById("b");
const C = document.getElementById("c");
const calBtn = document.getElementById("cal");
const delBtn = document.getElementById("del");
const result = document.getElementById("result");

let root1, root2;
calBtn.addEventListener("click", () => {
  let delta = B.value * B.value - 4 * A.value * C.value;

  if (delta > 0) {
    root1 = (-B.value + Math.sqrt(delta)) / (2 * A.value);
    root2 = (-B.value - Math.sqrt(delta)) / (2 * A.value);

    result.textContent = `Nghiem cua phuong trinh la: ${root1} va ${root2}`;
  } else if (delta == 0) {
    root1 = root2 = -B.value / (2 * A.value);

    result.textContent = `Nghiem cua phuong trinh la: ${root1} va ${root2}`;
  } else {
    let realPart = (-B.value / (2 * A.value)).toFixed(2);
    let imagPart = (Math.sqrt(-delta) / (2 * A.value)).toFixed(2);
    result.textContent = `Nghiem cua phuong trinh la: ${realPart} + ${imagPart}i va ${realPart} - ${imagPart}i`;
  }
});

delBtn.addEventListener("click", () => {
  A.value = "";
  B.value = "";
  C.value = "";
  result.textContent = "";
});
