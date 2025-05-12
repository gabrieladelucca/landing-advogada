document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute('href'));
      if (destino) {
        destino.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  const form = document.getElementById("meu-formulario");
const status = document.getElementById("form-status");

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
      status.classList.add("success");
      form.reset();
    } else {
      throw new Error();
    }
  } catch (error) {
    status.textContent = "Erro ao enviar. Tente novamente mais tarde.";
    status.classList.add("error");
  }
});

  
