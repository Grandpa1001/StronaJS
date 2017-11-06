function myFunction() {
  alert("Hey, you!")
  alert("Yes, you!")
  alert("What are you looking at?")
  let txt;
  let wynik = prompt("Ile jest 2 + 2", "wynik");
    if (wynik == 4) {
        txt = "git!";
    } else {
        txt = "źle, pała! siadaj!";
    }
    document.getElementById("demo").innerHTML = txt;
}
