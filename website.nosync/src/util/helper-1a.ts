export const popColors = (colors: string[]) => {
  colors.forEach((color: string) => {
    const elements = document.querySelectorAll(`.bg-${color}`);
    elements.forEach((element: HTMLDivElement) => {
      element.style.display = "none";
    });
  });
};

export const popBorderedColors = (colors: string[]) => {
  colors.forEach((color: string) => {
    const elements = document.querySelectorAll(`.p2-border.bg-${color}`);
    elements.forEach((element: HTMLDivElement) => {
      element.style.display = "none";
    });
  });
};

export const popGradient = () => {
  // get element by id: gradient-circle, then hide it
  const element = document.getElementById("gradient-circle");
  element.remove();
};
