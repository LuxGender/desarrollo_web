const imagenes = document.querySelectorAll(".content-img img");
const modal = document.getElementById("modal");
const imagenAmpliada = document.getElementById("imagenAmpliada");
const closeBtn = document.getElementById("close");

imagenes.forEach((imagen) => {
  imagen.addEventListener("click", () => {
    modal.style.display = "block";
    imagenAmpliada.src = imagen.src;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
