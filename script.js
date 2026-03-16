let noClicks = 0;

// Buttons
const noBtn = document.getElementById("noBtn");
const yesBtn = document.querySelector(".buttons button");
const buttonsDiv = document.querySelector(".buttons");

// ----------------------------
// 1️⃣ Floating Hearts Function
// ----------------------------
function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Random heart emoji 💝 or 💖
    heart.textContent = Math.random() > 0.5 ? "💝" : "💖";

    // Random vertical start position
    heart.style.top = Math.random() * window.innerHeight + "px";

    // Random size
    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    // Random animation duration (slower = dreamy)
    const duration = 15 + Math.random() * 10; // 15-25 seconds
    heart.style.animationDuration = duration + "s";

    document.getElementById("hearts").appendChild(heart);

    // Remove after animation
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Create a new heart every 400ms
setInterval(createHeart, 670);

// ----------------------------
// 2️⃣ No Button Interaction (fixed bounds)
// ----------------------------
noBtn.addEventListener("click", () => {

    noClicks++;

    // Button dimensions
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Safe margins so button stays visible
    const safeMargin = 10;
    const maxX = window.innerWidth - btnWidth - safeMargin;
    const maxY = window.innerHeight - btnHeight - safeMargin;

    const x = safeMargin + Math.random() * (maxX - safeMargin);
    const y = safeMargin + Math.random() * (maxY - safeMargin);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    // After 3 clicks
    if(noClicks >= 3){
        noBtn.remove();

        // Change show me to Please? and make it bigger
        yesBtn.textContent = "Please?";
        yesBtn.style.transform = "scale(1.4)";

        // Center the remaining button
        buttonsDiv.style.justifyContent = "center";
    }
});

// ----------------------------
// Show next section
// ----------------------------
function showNext(){
    window.location.href = "section2.html";
}
