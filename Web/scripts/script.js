document.addEventListener('DOMContentLoaded', function() {

  // 1. Fitur Navigasi Menempel (Sticky Navigation)
  const nav = document.querySelector('nav');
  if (nav) {
    const navTop = nav.offsetTop; // Posisi awal navigasi

    window.addEventListener('scroll', function() {
      if (window.scrollY > navTop) {
        nav.classList.add('navbar-scrolled');
      } else {
        nav.classList.remove('navbar-scrolled');
      }
    });
  }

  // 2. Fitur Kartu Muncul Saat Scroll (Fade-in Cards on Scroll)
  const cards = document.querySelectorAll('.card');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // Jika elemen masuk ke dalam viewport
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Hentikan pengamatan setelah animasi berjalan agar tidak berulang
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px',
    threshold: 0.1 // Munculkan saat 10% elemen terlihat
  });

  // Amati setiap kartu
  cards.forEach(card => {
    observer.observe(card);
  });

});