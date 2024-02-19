export const removeClassFrom = (arrElements, className) => {
  arrElements.forEach((element) => {
    element.classList.remove(className);
  });
};
