
const button = document.getElementById("celebrateBtn");
const fireworks = document.getElementById("fireworks");
const heading = document.getElementById("heading");
const message = document.getElementById("message");

const colors = [
    "#FFD700",
    "#FF4500",
    "#00FFFF",
    "#FF69B4",
    "#7CFC00",
    "#3b5696"
];



function createFirework(x, y) {

    for (let i = 0; i < 60; i++) {

        const particle = document.createElement("div");

        particle.className = "firework";

        // Star pattern
        particle.innerHTML = Math.random() > 0.5 ? "✨" : "✦";

        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 250 + 100;

        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;

        particle.style.left = x + "px";
        particle.style.top = y + "px";

        particle.style.setProperty("--x", moveX + "px");
        particle.style.setProperty("--y", moveY + "px");

        particle.style.color = "#FFD700";
        particle.style.fontSize = (Math.random() * 18 + 12) + "px";

        particle.style.textShadow =
            "0 0 10px #FFD700, 0 0 25px orange";

        fireworks.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 1800);
    }
}


button.addEventListener("click", () => {

    heading.textContent = "HAPPY DIWALI";

    heading.classList.add("celebrating");

    message.textContent =
        "🪔 May your life be filled with happiness, success and prosperity! 🪔";

    button.textContent = "✨ Celebrate Again!";

    // Multiple fireworks
    for (let i = 0; i < 42; i++) {

        setTimeout(() => {

            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;

            createFirework(x, y);

        }, i * 400);
    }
});
