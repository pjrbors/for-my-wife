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
            <p class="gift-title">Flowers for you 🌸</p>
            <p class="gift-message">Just like this flower, my love for you keeps growing every day. May it always remind you of how special you are to me. — always yours, Peejay</p>
        `;
    } else if (choice === 2) {
        // Second gift: silly photo
        result.innerHTML = `
            <img src="https://raw.githubusercontent.com/pjrbors/for-my-wife/main/IMG_20260319_172645.jpg" class="gift-img">
            <p class="gift-title">Hehe gotcha 😛</p>
            <p class="gift-message">Sorry na agad HAHAHHAHA</p>
        `;
    }
    }
