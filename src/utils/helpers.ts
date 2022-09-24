export const scrollLeft = (element: HTMLDivElement, px: number) => {
  const currentPosition = element.scrollLeft;

  const scrollTo = currentPosition - px;

  element.scrollTo({
    left: scrollTo,
    behavior: "smooth",
  });
};

export const scrollRight = (element: HTMLDivElement, px: number) => {
  const currentPosition = element.scrollLeft;

  const scrollTo = currentPosition + px;

  element.scrollTo({
    left: scrollTo,
    behavior: "smooth",
  });
};
