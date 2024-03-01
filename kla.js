const btns = document.querySelectorAll("button");
const inp = document.getElementById("natija");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    const buttonp = btns[i].textContent;
    if (buttonp === "c") {
      natijatoza();
    } else if (buttonp === "=") {
      natija();
    } else {
      hisob(buttonp);
    }
  });
}

function natijatoza() {
  inp.value = "";
}

function natija() {
  inp.value = eval(inp.value);
}

function hisob(buttonp) {
  inp.value += buttonp;
}

const color = document.querySelector(".color");
const kal = document.querySelector(".kalkulator");

color.addEventListener("input", () => {
  kal.style.background = color.value;
});
