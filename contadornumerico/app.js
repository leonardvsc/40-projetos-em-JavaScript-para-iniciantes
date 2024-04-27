const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

let count = 0;

function Contador() {
  return {
    iniciar() {
      this.verificarCliques();
    },

    verificarCliques() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("decrease")) count--;
        if (el.classList.contains("reset")) count = 0;
        if (el.classList.contains("increase")) count++;

        if (count > 0) value.style.color = "green";
        if (count < 0) value.style.color = "red";

        value.textContent = count;
      });
    },
  };
}

const contador = Contador();
contador.iniciar();
