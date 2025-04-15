document.addEventListener('DOMContentLoaded', function() {

    // --- Atualizar ano no rodapé ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Menu Mobile (Hamburguer) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active'); // Mostra/esconde o menu

            // Opcional: Mudar o ícone do botão (hamburguer/X)
            if (mainNav.classList.contains('active')) {
                menuToggle.setAttribute('aria-expanded', 'true');
                // menuToggle.innerHTML = '&times;'; // Ícone X (opcional)
            } else {
                menuToggle.setAttribute('aria-expanded', 'false');
                // menuToggle.innerHTML = '☰'; // Ícone Hamburguer (opcional)
            }
        });

        // Fechar o menu ao clicar em um link (para SPAs de página única)
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    // menuToggle.innerHTML = '☰'; // Volta para hamburguer (opcional)
                }
            });
        });
    }

    // --- Opcional: Adicionar classe ao header ao rolar a página ---
    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) { // Adiciona a classe após rolar 50px
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }


    // --- Opcional: Animação de "scroll suave" mais robusta (alternativa ao CSS scroll-behavior) ---
    // Se precisar de compatibilidade com navegadores mais antigos ou mais controle
    // const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    // smoothScrollLinks.forEach(link => {
    //     link.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         const targetId = this.getAttribute('href');
    //         const targetElement = document.querySelector(targetId);
    //         if (targetElement) {
    //             const headerOffset = document.querySelector('.main-header')?.offsetHeight || 70; // Ajustar pelo header fixo
    //             const elementPosition = targetElement.getBoundingClientRect().top;
    //             const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    //             window.scrollTo({
    //                 top: offsetPosition,
    //                 behavior: "smooth"
    //             });

    //             // Fecha o menu mobile se estiver aberto após clicar no link
    //             if (mainNav && mainNav.classList.contains('active')) {
    //                  mainNav.classList.remove('active');
    //                  menuToggle.setAttribute('aria-expanded', 'false');
    //             }
    //         }
    //     });
    // });


    // --- Opcional: Adicionar classe 'active' ao link de navegação da seção visível ---
    // Requer um pouco mais de lógica com Intersection Observer para melhor performance
    // Exemplo simples (pode não ser perfeito em todas as situações):
    const sections = document.querySelectorAll('main section[id]');
    const navLi = document.querySelectorAll('.main-nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        const headerOffset = header?.offsetHeight || 70;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerOffset - 50; // Ajuste extra
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            a.classList.remove('active'); // Limpa a classe de todos
            if (a.getAttribute('href') === `#${current}`) {
                a.classList.add('active'); // Adiciona classe ao link atual
            }
        });

        // Caso especial para o topo da página (link 'Início')
         if (pageYOffset < (sections[0].offsetTop - headerOffset - 50)) {
             navLi.forEach(a => a.classList.remove('active'));
             const homeLink = document.querySelector('.main-nav ul li a[href="#hero"]');
             if (homeLink) homeLink.classList.add('active');
         }
    });


    console.log("Landing page carregada e scripts executados.");

}); // Fim do DOMContentLoaded



// Formulário para entrar em contato para mais serviços (inicio) 




document.addEventListener('DOMContentLoaded', function() {

    // [...] Outro código JS que você já tinha (menu, ano, etc.) [...]


    // --- Controle de Exibição do Formulário de Contato ---
    const showFormButton = document.getElementById('show-form-button');
    const contactForm = document.getElementById('contact-form');

    if (showFormButton && contactForm) {
        showFormButton.addEventListener('click', function() {
            // Alterna a classe que esconde/mostra o formulário
            contactForm.classList.toggle('hidden-form');

            // Opcional: Esconder o botão "Deixar Mensagem" após clicar
            // showFormButton.style.display = 'none';

            // Opcional: Mudar o texto do botão (se não for escondê-lo)
            // if (contactForm.classList.contains('hidden-form')) {
            //     showFormButton.textContent = 'Deixar uma Mensagem (Formulário)';
            // } else {
            //     showFormButton.textContent = 'Fechar Formulário';
            // }

            // Opcional: Rolar a página suavemente até o formulário quando ele abrir
             if (!contactForm.classList.contains('hidden-form')) {
                 // Espera um pouco pela animação de transição antes de rolar
                 setTimeout(() => {
                     contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
                 }, 100); // Ajuste o tempo se necessário
             }
        });
    }

    // [...] Restante do seu código JS [...]

    console.log("Landing page carregada e scripts executados. Controle de formulário adicionado.");

}); // Fim do DOMContentLoaded


// Formulário para entrar em contato para mais serviços (fim)