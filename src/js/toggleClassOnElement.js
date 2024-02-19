export const toggleClassOnElement = (element, className) => {
  const hasClass = element.classList.contains(className);

  if (hasClass) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
};
