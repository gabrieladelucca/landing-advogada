// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Manipulação do formulário de contato
const form = document.getElementById("meu-formulario");
const status = document.getElementById("form-status");

if (form && status) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        status.textContent = "Mensagem enviada com sucesso!";
        status.className = "form-status success";
        form.reset();
      } else {
        throw new Error();
      }
    } catch (error) {
      status.textContent = "Erro ao enviar. Tente novamente mais tarde.";
      status.className = "form-status error";
    }
  });
}

// Animação de entrada das seções ao rolar
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});

// Botão de voltar ao topo
const btnTopo = document.querySelector('.btn-topo');

if (btnTopo) {
  window.addEventListener('scroll', () => {
    btnTopo.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
}
