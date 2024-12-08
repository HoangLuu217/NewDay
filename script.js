document.getElementById("button").addEventListener("click", () => {
    const animation = document.getElementById("animation");
    const trickText = document.getElementById("trick-text");
    const audio = document.getElementById("audio");

    // Phát âm thanh
    audio.play();

    // Hiện dòng chữ với hiệu ứng
    trickText.style.opacity = 1;
    trickText.style.transform = "scale(1)";

    // Lặp vô hạn tạo chữ "hahaha"
    setInterval(() => {
        const hahaha = document.createElement("div");
        hahaha.classList.add("hahaha");
        hahaha.textContent = "ha ha ha 🤣";
        hahaha.style.left = Math.random() * 100 + "vw";
        hahaha.style.animationDuration = Math.random() * 2 + 3 + "s";
        animation.appendChild(hahaha);

        setTimeout(() => {
            hahaha.remove();
        }, 5000); // Loại bỏ chữ sau 5 giây để tránh tràn bộ nhớ
    }, 200); // Tạo chữ mới sau mỗi 200ms
});
