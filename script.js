document.addEventListener("DOMContentLoaded", function() {
    let btnSurprise = document.getElementById("btnSurprise");
    let surpriseDiv = document.getElementById("surprise");
    let heartContainer = document.getElementById("heart-container");

    // Función para generar un solo corazón
    function createHeart() {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        // Posición aleatoria en la pantalla
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * 100 + "vh";
        heart.style.fontSize = Math.random() * 30 + 10 + "px";

        heartContainer.appendChild(heart);

        // Eliminar corazones después de la animación
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }

    // Función para generar varios corazones al mismo tiempo
    function generateMultipleHearts() {
        for (let i = 0; i < 5; i++) {  // Ahora se generan 5 corazones a la vez
            setTimeout(createHeart, i * 200); // Espaciado entre cada uno
        }
    }

    // Generar corazones en toda la página cada 0.8 segundos
    setInterval(generateMultipleHearts, 800);

    // Mostrar sorpresa al hacer clic en el botón
    btnSurprise.addEventListener("click", function() {
        surpriseDiv.classList.toggle("hidden");

        if (!surpriseDiv.classList.contains("hidden")) {
            btnSurprise.textContent = "💖 Ocultar sorpresa";
        } else {
            btnSurprise.textContent = "🎁 Presiona para ver la sorpresa";
        }
    });
});
