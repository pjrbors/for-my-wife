function openSurprise() {
    document.getElementById("surprisePopup").classList.add("show");
}

function closeSurprise() {
    const popup = document.getElementById("surprisePopup");

    popup.classList.remove("show");

    // wait for animation before clearing content
    setTimeout(() => {
        document.getElementById("giftResult").innerHTML = "";
    }, 300);
}

function openGift(choice) {
    const result = document.getElementById("giftResult");

    if (choice === 1) {
        result.innerHTML = `
            <img src="https://raw.githubusercontent.com/pjrbors/for-my-wife/main/1773910831618.png" class="gift-img">
            <p>For you 🌸</p>
        `;
    } else if (choice === 2) {
        result.innerHTML = `
            <img src="https://raw.githubusercontent.com/pjrbors/for-my-wife/main/IMG_20260319_172645.jpg" class="gift-img">
            <p>Hehe got you 😝</p>
        `;
    }
}
