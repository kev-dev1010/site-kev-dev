import { router } from './js/router.js';
import { loadComponent } from './js/loadComponent.js';

document.addEventListener('DOMContentLoaded', () => {
  // Carrega componentes fixos
  loadComponent('header', '/src/components/header.html');
  loadComponent('footer', '/src/components/footer.html');

  // Inicia o roteador
  router();

  // Intercepta cliques nos links para navegar sem recarregar a página
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      const url = e.target.getAttribute('href');
      history.pushState(null, null, url);
      router();
    }
  });

  // Garante funcionamento com os botões de "voltar" e "avançar"
  window.addEventListener('popstate', router);
});
