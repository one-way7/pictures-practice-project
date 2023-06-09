const checkTextInputs = (selector, promoSelector) => {
  const inputs = document.querySelectorAll(selector),
    promo = document.querySelector(promoSelector);

  inputs.forEach(input => {
    input.addEventListener('keypress', e => {
      if (e.key.match(/[^а-яё 0-9]/gi)) {
        e.preventDefault();
      }
    });

    input.addEventListener('input', () => {
      if (input.value.match(/[^а-яё 0-9]/i)) {
        input.value = '';
      }
    });
  });
};

export default checkTextInputs;
