const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");


function resize() {
  const header = canvas.parentElement;
  canvas.width = header.clientWidth;
  canvas.height = header.clientHeight;
}
resize();
window.addEventListener("resize", resize);

const numStars = 200;
const stars = [];

for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2.5 + 0.5,
    vx: (Math.random() * 0.05 + 0.01) * (Math.random() < 0.5 ? -1 : 1),
    vy: (Math.random() * 0.025 + 0.005) * (Math.random() < 0.5 ? -1 : 1),
    baseAlpha: Math.random() * 0.5 + 0.5,
    alpha: 1,
    alphaDir: Math.random() < 0.5 ? 1 : -1,
  });
}

let mouseX = 0;
let mouseY = 0;

window.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  mouseX = (e.clientX - rect.left) / rect.width - 0.5;
  mouseY = (e.clientY - rect.top) / rect.height - 0.5;
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach((star) => {
    star.x += star.vx + mouseX * 0.3;
    star.y += star.vy + mouseY * 0.2;

    if (star.x < 0) star.x = canvas.width;
    if (star.x > canvas.width) star.x = 0;
    if (star.y < 0) star.y = canvas.height;
    if (star.y > canvas.height) star.y = 0;

    star.alpha += 0.01 * star.alphaDir;
    if (star.alpha >= 1) star.alphaDir = -1;
    if (star.alpha <= star.baseAlpha) star.alphaDir = 1;

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha.toFixed(2)})`;
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();
const typewriterElement = document.getElementById("typewriter");
const fullText = "Front-end";
let currentIndex = 0;
function typeWriter() {
  if (currentIndex <= fullText.length) {
    typewriterElement.innerHTML =
      fullText.slice(0, currentIndex) + '<span class="cursor"></span>';
    currentIndex++;
    setTimeout(typeWriter, 150);
  }
}
window.addEventListener("load", () => {
  typeWriter();
});

function traduzir() {
  const idiomaSelecionado = document.getElementById("linguistica").value;
  const titulo = document.getElementById("dev");
  const Sobre = document.getElementById("AbouT");
  const inicio = document.getElementById("Con1");
  const SobRE = document.getElementById("Con2");
  const skills = document.getElementById("Con3");
  const projetos = document.getElementById("Con4");
  const contato = document.getElementById("Con5");
  const entreContato = document.getElementById("entre-contato");

  if (idiomaSelecionado === "pt") {
    titulo.innerHTML = "Desenvolvedor:";
    Sobre.innerHTML = "Sobre";
    inicio.innerHTML = "Inicio";
    SobRE.innerHTML = "Sobre";
    projetos.innerHTML = "Projetos";
    contato.innerHTML = "Contato";
    entreContato.innerHTML = "Entre em contato!"
  } else if (idiomaSelecionado === "ing") {
    titulo.innerHTML = "Developer:";
    Sobre.innerHTML = "About";
    inicio.innerHTML = "Home";
    SobRE.innerHTML = "About";
    projetos.innerHTML = "Projects";
    contato.innerHTML = "Contact";
    entreContato.innerHTML = "Get in Contact          !"
  }
}



  const checkbox = document.getElementById('ModoCor');

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
    document.documentElement.style.setProperty('--fundo-1', '#A488F4')
     document.documentElement.style.setProperty('--fundo-2', '#7C4DFF')
          document.documentElement.style.setProperty('--Txt-Front', '#2E028F')
          document.documentElement.style.setProperty('--Degrade-Bg-1', '#DFE7FF')
        document.documentElement.style.setProperty('--Degrade-Bg-2', '#8286DA')
          document.documentElement.style.setProperty('--Degrade-Bg-3', '#2E315F')
          document.documentElement.style.setProperty('--fundo-footer2', '#C1C8EF')
          document.documentElement.style.setProperty('--fundo-footer2', '#c1c8ef90')
   ;
    } else {
   document.documentElement.style.setProperty('--fundo-1', '#000011')
      document.documentElement.style.setProperty('--fundo-2', '#000000')
      document.documentElement.style.setProperty('--Txt-Front', '#2a04d3')
      document.documentElement.style.setProperty('--Degrade-Bg-1', '#1f1f59')
        document.documentElement.style.setProperty('--Degrade-Bg-2', '#020332')
          document.documentElement.style.setProperty('--Degrade-Bg-3', '#000012')
            document.documentElement.style.setProperty('--fundo-footer2', '#141414')
            document.documentElement.style.setProperty('--fundo-footer2', '#14141490')      ;
    }
  });

