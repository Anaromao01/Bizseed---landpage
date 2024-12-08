const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });

 
 
 // Seleciona o botão pelo seletor
 const voltarTopo = document.querySelector('.voltar-topo');

 // Função para verificar a rolagem da página
 function verificarScroll() {
     if (window.scrollY > 300) {
         voltarTopo.classList.add('visivel'); // Mostra o botão
     } else {
         voltarTopo.classList.remove('visivel'); // Esconde o botão
     }
 }

 // Adiciona o evento de scroll
 window.addEventListener('scroll', verificarScroll);

 // Garante que o botão volte suavemente ao topo ao ser clicado
 voltarTopo.addEventListener('click', (e) => {
     e.preventDefault(); // Evita comportamento padrão do link
     window.scrollTo({
         top: 0,
         behavior: 'smooth' // Faz o scroll suave
     });
 });

 // Executa a verificação inicial ao carregar a página
 verificarScroll();
