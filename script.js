// script.js
document.getElementById("formularioNotas").addEventListener("submit", function (e) {
    e.preventDefault();

    const notas = [
        parseFloat(document.getElementById("nota1").value),
        parseFloat(document.getElementById("nota2").value),
        parseFloat(document.getElementById("nota3").value),
    ];

    if (notas.some(isNaN)) {
        alert("Por favor, ingresa todas las notas.");
        return;
    }

    const promedio = (notas.reduce((a, b) => a + b, 0) / notas.length).toFixed(2);
    const resultado = document.getElementById("resultado");
    
    // Limpiar clases anteriores
    resultado.classList.remove("bajo", "medio", "alto");

    // Asignar clase y mensaje según el promedio
    let estado = "";
    if (promedio < 6) {
        resultado.classList.add("bajo");
        estado = "Reprobado ❌";
    } else if (promedio >= 6 && promedio < 8.5) {
        resultado.classList.add("medio");
        estado = "Aprobado 🙂";
    } else {
        resultado.classList.add("alto");
        estado = "Excelente trabajo! 🎉";
    }

    resultado.innerHTML = `
        <p><strong>Promedio:</strong> ${promedio}</p>
        <p><strong>Estado:</strong> ${estado}</p>
    `;
});
