export const scrollInto = (anchors, intoElement) => {
  for (let anchor of anchors) {
    anchor.onclick = (e) => {
      e.preventDefault();
      intoElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };
  }
};
