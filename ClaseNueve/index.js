//eventos
// 1. Click
document.getElementById("btnClick").addEventListener("click", () => {
  alert("¡Click detectado!");
});

// 2. Doble click
document.getElementById("btnDblClick").addEventListener("dblclick", () => {
  alert("¡Doble click detectado!");
});

// 3. Mouseover
document.getElementById("hoverBox").addEventListener("mouseover", () => {
  console.log("Mouse encima del div");
});

// 4. Mouseout
document.getElementById("hoverBox").addEventListener("mouseout", () => {
  console.log("Mouse salió del div");
});

// 5. Keydown
document.getElementById("tecladoInput").addEventListener("keydown", (e) => {
  console.log("Tecla presionada:", e.key);
});

// 6. Keyup
document.getElementById("tecladoInput").addEventListener("keyup", () => {
  console.log("Tecla soltada");
});

// 7. Input
document.getElementById("tecladoInput").addEventListener("input", (e) => {
  console.log("Escribiendo:", e.target.value);
});

// 8. Change
document.getElementById("selectColor").addEventListener("change", (e) => {
  console.log("Color seleccionado:", e.target.value);
});

// 9. Submit
document.getElementById("miFormulario").addEventListener("submit", (e) => {
  e.preventDefault(); // Evita el envío
  console.log("Formulario enviado");
});

// 10. Focus
document.getElementById("tecladoInput").addEventListener("focus", () => {
  console.log("Campo enfocado");
});

// 11. Blur
document.getElementById("inputBlur").addEventListener("blur", () => {
  console.log("Perdió el foco");
});

// 12. Validación email en blur
document.getElementById("emailInput").addEventListener("blur", (e) => {
  if (!e.target.value.includes("@")) {
    alert("Correo inválido");
  }
});

// 13. Hover con cambio de color
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => hoverBox.style.background = "green");
hoverBox.addEventListener("mouseout", () => hoverBox.style.background = "skyblue");

// 14. Context menu (click derecho)
document.getElementById("contexto").addEventListener("contextmenu", (e) => {
  e.preventDefault();
  alert("¡Click derecho desactivado!");
});

// 15. Scroll
window.addEventListener("scroll", () => {
  console.log("Scroll detectado");
});

// 16. Resize
window.addEventListener("resize", () => {
  console.log("Ventana redimensionada:", window.innerWidth, "x", window.innerHeight);
});

// 17. Load
window.addEventListener("load", () => {
  console.log("Todo cargado");
});

// 18. Before unload
window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = '';
});

// 19. Mouseenter (sin propagación)
document.getElementById("mouseEnter").addEventListener("mouseenter", () => {
  console.log("Entraste al div sin burbujear");
});

// 20. Enter en input
document.getElementById("enterInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    alert("¡Presionaste Enter!");
  }
});
