// IntersectionObserver to reveal elements on scroll
(function() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal-fade, .reveal-up').forEach(function(el) {
    observer.observe(el);
  });
})();

// Optional: improve focus ring visibility for accessibility
document.body.addEventListener('keyup', function(e){
  if (e.key === 'Tab') {
    document.documentElement.classList.add('user-tabbed');
  }
});

// Theme toggle with localStorage
(function() {
  var toggleBtn = document.getElementById('themeToggle');
  var root = document.documentElement;
  var stored = localStorage.getItem('theme');
  if (stored === 'dark') root.classList.add('dark');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function(){
      root.classList.toggle('dark');
      localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
      // swap icon
      toggleBtn.innerHTML = root.classList.contains('dark') ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon-stars"></i>';
    });
    // initial icon state
    toggleBtn.innerHTML = root.classList.contains('dark') ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon-stars"></i>';
  }
})();

// Animate hero text on load
window.addEventListener('load', function(){
  document.querySelectorAll('#home .reveal-up, #home .reveal-fade').forEach(function(el){
    requestAnimationFrame(function(){ el.classList.add('revealed'); });
  });
});

