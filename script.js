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

document.addEventListener("DOMContentLoaded", function () {
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
    
      const result = await response.json();
      console.log("Resposta do Formspree:", result);
    
      if (response.ok) {
        status.textContent = "Mensagem enviada com sucesso!";
        status.className = "form-status success";
        form.reset();
      } else {
        status.textContent = result.error || "Erro ao enviar. Tente novamente.";
        status.className = "form-status error";
      }
    } catch (error) {
      console.error("Erro no envio:", error);
      status.textContent = "Erro ao enviar. Tente novamente mais tarde.";
      status.className = "form-status error";
    }


  });
});
