// ----------------------------
// 1️⃣ Floating Hearts Function
// ----------------------------
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Random heart emoji 💝 or 💖
    heart.textContent = Math.random() > 0.5 ? "💝" : "💖";

    // Random vertical start position
    heart.style.top = Math.random() * window.innerHeight + "px";

    // Random animation duration (slower = dreamy)
    const duration = 3 + Math.random() * 10; // 15-25 seconds
    heart.style.animationDuration = duration + "s";

    document.getElementById("hearts").appendChild(heart);

    // Remove after animation
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Create a new heart every 670ms
setInterval(createHeart, 500);

// ----------------------------
// 2️⃣ Show next section
// ----------------------------
function showNext() {
    window.location.href = "section2.html"; // replace with your next section
}
