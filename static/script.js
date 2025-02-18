document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("star-btn");
    const invitation = document.getElementById("invitation");
    const customText = document.getElementById("customText");
    
    button.addEventListener("click", function () {
        // Sembunyikan tombol dan teks
        button.style.display = "none";
        customText.style.display = "none"; 

        // Tampilkan undangan
        invitation.classList.remove("hidden");

        // Mulai countdown
        const eventDate = new Date("Feb 21, 2025 19:00:00").getTime();
        startCountdown(eventDate);

        // Efek bintang jatuh
        stars = [];
        createStars();
        animateStars();
    });
});

function startCountdown(targetDate) {
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            document.getElementById("countdown").innerHTML = "Acara telah dimulai!";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Efek Partikel Bintang
const starCanvas = document.getElementById("star-canvas");
const starCtx = starCanvas.getContext("2d");

starCanvas.width = window.innerWidth;
starCanvas.height = window.innerHeight;

let stars = [];

function createStars() {
    for (let i = 0; i < 50; i++) {
        stars.push({
            x: Math.random() * starCanvas.width,
            y: Math.random() * starCanvas.height - starCanvas.height,
            size: Math.random() * 4 + 1,
            speed: Math.random() * 2 + 0.5
        });
    }
}

function drawStars() {
    starCtx.clearRect(0, 0, starCanvas.width, starCanvas.height);
    stars.forEach((star, i) => {
        starCtx.fillStyle = "#ffffff";
        starCtx.beginPath();
        starCtx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        starCtx.fill();
        star.y += star.speed;
        if (star.y > starCanvas.height) stars.splice(i, 1);
    });
}

function animateStars() {
    drawStars();
    requestAnimationFrame(animateStars);
}

document.getElementById("toggleDetailsBtn").addEventListener("click", function () {
    const details = document.getElementById("extraDetails");

    if (details.classList.contains("hidden")) {
        details.classList.remove("hidden");
        details.classList.add("show");
        this.innerText = "Sembunyikan";
    } else {
        details.classList.add("hidden");
        details.classList.remove("show");
        this.innerText = "Lihat Selengkapnya";
    }
});

document.getElementById("toggleDetailsBtn").addEventListener("click", function () {
    stars = []; // Reset bintang
    createStars(); // Buat bintang baru
    animateStars(); // Jalankan animasi bintang
});


document.getElementById("toggleDetailsBtn").addEventListener("click", function () {
    const audio = document.getElementById("bgMusic");
    if (!audio.paused) {
        audio.pause();
    } else {
        audio.play();
    }
});
