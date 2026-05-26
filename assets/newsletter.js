(function () {
  'use strict';

  function handleForm(form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var input = form.querySelector('input[type="email"]');
      if (!input) return;

      var email = input.value.trim();
      var valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!valid) {
        input.classList.add('input-error');
        input.focus();
        input.addEventListener('input', function () {
          input.classList.remove('input-error');
        }, { once: true });
        return;
      }

      // Fade out the form, replace with success message
      form.style.transition = 'opacity 0.3s ease';
      form.style.opacity = '0';

      setTimeout(function () {
        var success = document.createElement('div');
        success.className = 'newsletter-success';
        success.innerHTML =
          '<div class="success-icon">✓</div>' +
          '<p><strong>You\'re on the list!</strong> Confirm your email to start receiving weekly deals.</p>';
        form.parentNode.insertBefore(success, form.nextSibling);
        form.style.display = 'none';
        // Fade in
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            success.style.opacity = '1';
          });
        });
      }, 300);
    });
  }

  function init() {
    document.querySelectorAll('.newsletter-form, .newsletter-form-large').forEach(handleForm);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
