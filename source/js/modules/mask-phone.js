const inputElement = document.querySelector('[data-mask="phone"]');

const addMaskPhone = () => {
  if (!inputElement) {
    return;
  }

  const phoneOptions = {
    mask: '+{7}(000)000-00-00',
  };

  // eslint-disable-next-line
  IMask(inputElement, phoneOptions);
};

export {addMaskPhone};
