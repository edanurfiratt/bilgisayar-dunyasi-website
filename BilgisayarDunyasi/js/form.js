/**
 * Form doğrulama ve gönderim geri bildirimi (js-form sınıfına sahip her form için)
 * NOT: Şu an gerçek bir sunucuya gönderim yapılmıyor. Bir e-posta servisi
 * (ör. Formspree, kendi backend'iniz) bağlandığında fetch() ile POST edilebilir.
 */
(function () {
  const forms = document.querySelectorAll('.js-form');

  forms.forEach((form) => {
    const successBox = form.querySelector('.form-success');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const requiredFields = form.querySelectorAll('[required]');
      let valid = true;

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          valid = false;
          field.style.borderColor = 'var(--color-danger)';
        } else {
          field.style.borderColor = '';
        }
      });

      if (!valid) return;

      if (successBox) {
        successBox.classList.add('is-visible');
      }

      form.reset();

      setTimeout(() => {
        if (successBox) successBox.classList.remove('is-visible');
      }, 6000);
    });
  });
})();
