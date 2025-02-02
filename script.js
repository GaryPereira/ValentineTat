const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Agapoula please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.noButton');
    const yesButton = document.querySelector('.yesButton');
    console.log(noButton.textContent);
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function nextPage() {
    window.location.href = "yes.html";
}
