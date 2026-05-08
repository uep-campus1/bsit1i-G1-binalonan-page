document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbar = document.querySelector('#navbarNav');
    const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbar);
    bsCollapse.hide();
  });
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    if (href.startsWith('#')) {
      e.preventDefault();

      const target = document.querySelector(href);

      if (target) {
        const yOffset = -300;
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      }
    }

    const navbar = document.querySelector('#navbarNav');
    const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbar);
    bsCollapse.hide();
  });
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function () {
    
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    
    this.classList.add('active');
    
  });
});