let compliments = [
    "ты самая лучшая! 🌟",
    "ты самая красивая! 💖",
    "ты как лучик солнца! ☀️",
    "ты невероятная! ✨",
    "ты прекрасна! 🌷",
    "ты чудо! 🌸",
    "ты восхитительна! 💫",
    "ты неповторима! 🌺"
];

function generate() {
    let name = document.getElementById("name").value;
    let role = document.getElementById("role").value;
    
    // Проверка на пустое имя
    if (name.trim() === "") {
        name = "дорогая";
    }
    
    let randomText = compliments[Math.floor(Math.random() * compliments.length)];
    let message = `С 8 марта, ${role} ${name}! ${randomText}`;
    
    document.getElementById("output").innerText = message;
    createConfetti();
    
    // Добавляем эффект появления
    let outputDiv = document.getElementById("output");
    outputDiv.style.animation = "none";
    setTimeout(() => {
        outputDiv.style.animation = "slideUp 0.5s ease";
    }, 10);
}

function createConfetti() {
    // Удаляем предыдущее конфетти
    let oldConfetti = document.querySelectorAll('.confetti');
    oldConfetti.forEach(conf => conf.remove());
    
    // Создаем новое конфетти
    for (let i = 0; i < 50; i++) {
        let conf = document.createElement("div");
        conf.className = "confetti";
        
        // Случайное положение по горизонтали
        conf.style.left = Math.random() * 100 + "vw";
        
        // Случайная задержка начала анимации
        conf.style.animationDelay = Math.random() * 5 + "s";
        
        // Случайная продолжительность падения
        conf.style.animationDuration = (Math.random() * 3 + 2) + "s";
        
        // Случайный размер
        let size = Math.random() * 10 + 10;
        conf.style.width = size + "px";
        conf.style.height = size * 1.5 + "px";
        
        document.body.appendChild(conf);
    }
}

// Добавляем возможность нажатия Enter в поле ввода
document.getElementById("name").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        generate();
    }
});



