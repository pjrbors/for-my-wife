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
            <img src="https://raw.githubusercontent.com/pjrbors/for-my-wife/main/flower.png" class="gift-img">
            <p>For you 🌸</p>
        `;
    } else if (choice === 2) {
        result.innerHTML = `
            <img src="https://raw.githubusercontent.com/pjrbors/for-my-wife/main/photo.png" class="gift-img">
            <p>Hehe got you 😝</p>
        `;
    }
}
