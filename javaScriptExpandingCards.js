const panels = document.querySelectorAll(".panel");

// for (let i = 0; i < panels.length; i++) {
//     console.log(" prin intermediul acestui for clasic, in consola o sa vad fiecare div in parte, in momentul in care dau refresh in pagina", panels[i])
// }
// for (const panel of panels) {
//     console.log(" ce avem aici", panel)

// // Definirea funcției
// const printPanel = panel => {
//     console.log(panel);
//     console.log(printPanel);
// };

// // Apelarea funcției
// printPanel(panels);
// console.log(printPanel);
// console.log(printPanel())

// }
// panels.forEach(panel => {
//     console.log("ce mai e si aici", panel)

// })
panels.forEach(panel => {

    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
    })
})


function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove("active")
    })
}
