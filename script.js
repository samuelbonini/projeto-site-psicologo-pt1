window.onload = function() {
  document.querySelectorAll('.nome-animado').forEach(function(element) {
      element.style.animationPlayState = 'running';
  });
};

const textElement = document.getElementById('crp');
  const text = textElement.textContent;
  textElement.textContent = '';
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      textElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }

  window.onload = typeWriter;

  document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os elementos que você deseja animar
    const elementsToAnimate = document.querySelectorAll('.hidden');
  
    // Configuração do Intersection Observer
    const observerOptions = {
      root: null, // Observa a viewport
      rootMargin: '0px',
      threshold: 0.1 // Quando 10% do elemento estiver visível, a classe será adicionada
    };
  
    // Função de callback para o Intersection Observer
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Adiciona a classe `visible` ao elemento quando ele entra na viewport
          entry.target.classList.add('visible');
          // Opcional: parar de observar o elemento após a animação
          observer.unobserve(entry.target);
        }
      });
    };
  
    // Cria uma instância do Intersection Observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    // Começa a observar cada elemento
    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });
  });
  
  function initScrollSuave(event) {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
    
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
    
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
    
    
    
    /*FORMA ALTERNATIVA
    const topo = section.offsetTop;
    window.scrollTo ({
      top: topo,
      behavior: 'smooth',
    })
    FORMA ALTERNATIVA*/
    
    }
    
    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection)
    });
    }
    
    initScrollSuave();