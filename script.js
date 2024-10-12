document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.cta-btn');

    ctaButtons.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Obrigado por seu interesse! Entraremos em contato em breve.');
        });
    });
});
