// Inicializa particles.js
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.3, width: 1 },
        move: { enable: true, speed: 3, direction: "none", random: true }
    }
});

// Atualiza o horário em tempo real (Horário de Brasília)
function updateBrasiliaTime() {
    const options = {
        timeZone: 'America/Sao_Paulo',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    };
    
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('pt-BR', options);
    const [{ value: hours }, , { value: minutes }] = formatter.formatToParts(now);
    
    document.querySelector('.time').textContent = `${hours}:${minutes}`;
}

// Atualiza a cada minuto
setInterval(updateBrasiliaTime, 60000);
updateBrasiliaTime();

// Navegação por scroll
const phoneScreen = document.querySelector('.phone-screen');
const dots = document.querySelectorAll('.dot');

phoneScreen.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.screen-section');
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
        }
    });
});

// Navegação pelos dots
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const sectionId = dot.getAttribute('data-section');
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Efeito de clique nos botões neon
document.querySelectorAll('.neon-button').forEach(button => {
    button.addEventListener('click', (e) => {
        // Efeito visual apenas se não for um link externo
        if (button.getAttribute('href') === '#') {
            e.preventDefault();
            button.style.transform = 'translateY(1px)';
            button.style.boxShadow = 'none';
            setTimeout(() => {
                button.style.transform = 'translateY(-3px)';
                button.style.boxShadow = '0 0 10px currentColor, 0 0 20px currentColor';
            }, 200);
        }
    });
});

// Simulação de status do iPhone
function updatePhoneStatus() {
    // Atualiza sinal (aleatório entre 1-4 barras)
    const signals = ['📶', '📶', '📶', '📶'];
    document.querySelector('.cellular').textContent = signals[Math.floor(Math.random() * signals.length)];
    
    // Atualiza bateria (aleatória entre 80-100%)
    const battery = Math.floor(Math.random() * 21) + 80;
    document.querySelector('.battery').textContent = `🔋 ${battery}%`;
}

// Atualiza a cada 3 minutos
setInterval(updatePhoneStatus, 180000);
updatePhoneStatus();