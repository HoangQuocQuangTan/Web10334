document.querySelector("form").addEventListener("submit", (e) => {
  var operator = document.forms[0]["button"].value;
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  e.preventDefault();
  document.getElementById("result").innerText = eval(a + operator + b);
});
