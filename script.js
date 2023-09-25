const textArray = ["Web Developer", "Front-end Developer", "UI/UX Designer", "Power BI Specialist"];
let textIndex = 0;
let charIndex = 0;
const typedTextSpan = document.getElementById("typed-text");
let cursor = document.querySelector(".cursor");

function type() {
    if (charIndex < textArray[textIndex].length) {
        typedTextSpan.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        // Apaga o texto depois de um segundo
        setTimeout(erase, 1000);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 100);
    } else {
        textIndex++;
        if (textIndex >= textArray.length) textIndex = 0;
        setTimeout(type, 500);
    }
}

// Inicia a digitação após 1 segundo
setTimeout(type, 1000);

document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            navLinks.forEach((navLink) => {
                navLink.classList.remove("active");
                if (section.id === navLink.getAttribute("data-section")) {
                    navLink.classList.add("active");
                }
            });
        }
    });
});
/*Este script irá adicionar a classe "active" ao botão de navegação correspondente com base na posição de rolagem da página e na seção em que o usuário se encontra. 
Ele também removerá a classe "active" de todos os outros botões de navegação.
Dessa forma, conforme o usuário rolar pela página, o botão de navegação correspondente à seção em que ele está se tornará "ativo", 
independentemente de quantas seções você tenha.*/

let timeout;
const header = document.getElementById('main-header');

document.addEventListener('scroll', function() {
  header.classList.add('hidden');
  
  clearTimeout(timeout);
  
  timeout = setTimeout(function() {
    header.classList.remove('hidden');
  }, 500); // O cabeçalho ficará escondido após 3 segundos de inatividade do mouse
});

document.getElementsByClassName("cartao").addEventListener("click", function () {  
    style.backgroundColor = "red";
});
