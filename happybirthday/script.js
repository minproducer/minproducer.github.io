// Khởi tạo khi trang load
document.addEventListener('DOMContentLoaded', function () {
    // Hiệu ứng loading
    setTimeout(() => {
        document.getElementById('loadingScreen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loadingScreen').style.display = 'none';
            document.getElementById('mainContent').style.opacity = '1';
            startFireworks();
            animateTitle();
        }, 1000);
    }, 3000);

    // Khởi tạo các event listeners
    initializeEventListeners();
});

// Animate title letters
function animateTitle() {
    const letters = document.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
        letter.style.setProperty('--i', index);
        letter.style.animationDelay = `${index * 0.1}s`;
    });
}

// Pháo hoa
function startFireworks() {
    const fireworksContainer = document.getElementById('fireworks');

    function createFirework() {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * 100 + '%';
        firework.style.top = Math.random() * 100 + '%';
        firework.style.background = getRandomColor();

        fireworksContainer.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 1000);
    }

    // Tạo pháo hoa mỗi 500ms trong 10 giây đầu
    const fireworkInterval = setInterval(createFirework, 500);
    setTimeout(() => {
        clearInterval(fireworkInterval);
    }, 10000);
}

// Màu ngẫu nhiên cho pháo hoa
function getRandomColor() {
    const colors = ['#ff6b6b', '#ffd93d', '#6bcf7f', '#4d96ff', '#9b59b6', '#f39c12'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Khởi tạo event listeners
function initializeEventListeners() {
    // Envelope click
    const envelope = document.getElementById('envelope');
    const letterContent = document.getElementById('letterContent');

    envelope.addEventListener('click', function () {
        const flap = envelope.querySelector('.envelope-flap');
        flap.style.transform = 'rotateX(-180deg)';

        setTimeout(() => {
            letterContent.classList.add('show');
        }, 500);
    });

    // Gift box click
    const giftBox = document.getElementById('giftBox');
    const giftContent = document.getElementById('giftContent');

    giftBox.addEventListener('click', function () {
        const lid = giftBox.querySelector('.box-lid');
        lid.classList.add('open');

        setTimeout(() => {
            giftContent.classList.add('show');
            createConfetti();
        }, 800);
    });

    // Photo gallery hover effects
    const photoItems = document.querySelectorAll('.photo-item');
    photoItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            const caption = this.dataset.caption;
            if (caption) {
                showTooltip(this, caption);
            }
        });

        item.addEventListener('mouseleave', function () {
            hideTooltip();
        });
    });

    // Scroll animations
    window.addEventListener('scroll', handleScrollAnimations);

    // Background music (optional)
    // const bgMusic = document.getElementById('bgMusic');
    // bgMusic.volume = 0.3;
    // bgMusic.play().catch(e => console.log('Audio autoplay prevented'));
}

// Confetti effect
function createConfetti() {
    const colors = ['#ff6b6b', '#ffd93d', '#6bcf7f', '#4d96ff', '#9b59b6'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.zIndex = '1001';
            confetti.style.animation = 'confettiFall 3s linear forwards';

            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }, i * 50);
    }
}

// CSS cho confetti animation
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Tooltip functions
function showTooltip(element, text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = text;
    tooltip.style.cssText = `
        position: absolute;
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 8px 12px;
        border-radius: 5px;
        font-size: 14px;
        z-index: 1000;
        pointer-events: none;
        white-space: nowrap;
    `;

    document.body.appendChild(tooltip);

    const rect = element.getBoundingClientRect();
    tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
}

function hideTooltip() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}

// Scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.wish-card, .photo-item, .gift-item');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Khởi tạo scroll animation styles
document.addEventListener('DOMContentLoaded', function () {
    const style = document.createElement('style');
    style.textContent = `
        .wish-card, .photo-item, .gift-item {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.6s ease;
        }
    `;
    document.head.appendChild(style);
});

// Easter egg - double click anywhere
document.addEventListener('dblclick', function (e) {
    createHeartExplosion(e.clientX, e.clientY);
});

function createHeartExplosion(x, y) {
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            font-size: 20px;
            pointer-events: none;
            z-index: 1000;
            animation: heartExplode 2s ease-out forwards;
        `;

        const angle = (i / 10) * Math.PI * 2;
        const distance = 100;
        const endX = x + Math.cos(angle) * distance;
        const endY = y + Math.sin(angle) * distance;

        heart.style.setProperty('--endX', endX + 'px');
        heart.style.setProperty('--endY', endY + 'px');

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 2000);
    }
}

// CSS cho heart explosion
const heartStyle = document.createElement('style');
heartStyle.textContent = `
    @keyframes heartExplode {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        100% {
            transform: scale(0) translate(var(--endX), var(--endY));
            opacity: 0;
        }
    }
`;
document.head.appendChild(heartStyle);
