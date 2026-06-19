// Skill bars
function animateSkills() {
  document.querySelectorAll('.skill-fill').forEach(el => {
    el.style.width = el.getAttribute('data-width') + '%';
  });
}

// Fade-up on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      if (entry.target.closest('#skills')) animateSkills();
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('.btn-send');
    btn.innerHTML = 'Sent! &nbsp;<i class="bi bi-check2"></i>';
    btn.style.background = '#222'; btn.style.color = '#fff';
    setTimeout(() => {
      btn.innerHTML = 'Send Message &nbsp;<i class="bi bi-send"></i>';
      btn.style.background = ''; btn.style.color = '';
      this.reset();
    }, 3000);
  });
}
