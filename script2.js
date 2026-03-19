// Open the surprise popup
function openSurprise() {
    document.getElementById("surprisePopup").classList.add("show");
}

// Close the surprise popup
function closeSurprise() {
    const popup = document.getElementById("surprisePopup");

    popup.classList.remove("show");

    // wait for animation before clearing content
    setTimeout(() => {
        document.getElementById("giftResult").innerHTML = "";
    }, 300);
}

// Open a gift based on choice
function openGift(choice) {
    const result = document.getElementById("giftResult");

    if (choice === 1) {
        // First gift: flower with title + message
        result.innerHTML = `
            <img src="https://raw.githubusercontent.com/pjrbors/for-my-wife/main/1773910831618.png" class="gift-img">
            <p class="gift-title">Flowers for you</p>
            <p class="gift-message">You brighten my day every day 🌸</p>
        `;
    } else if (choice === 2) {
        // Second gift: silly photo
        result.innerHTML = `
            <img src="https://raw.githubusercontent.com/pjrbors/for-my-wife/main/photo.png" class="gift-img">
            <p class="gift-title">Hehe got you</p>
            <p class="gift-message">A little silly surprise 😝</p>
        `;
    }
    }
