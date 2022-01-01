export const createElement = (template) => {
  const element = document.createElement('div');
  element.innerHTML = template;
  return element.firstChild;
};

export const renderPosition = {
  APPEND: 'append',
  PREPEND: 'prepend',
  BEFORE: 'before',
  AFTER: 'after',
};

export const renderComponent = (container, component, position = 'append') => {
  switch (position) {
    case 'append':
      container.append(component.getElement());
      break;
    case 'prepend':
      container.prepend(component.getElement());
      break;
    case 'before':
      container.before(component.getElement());
      break;
    case 'after':
      container.after(component.getElement());
      break;
    default:
      throw new Error('Unknown render position');
  }
};

export const removeComponent = (component) => {
  component.getElement().remove();
  component.removeElement();
};

export const defineCardsCount = (difficulty) => {
  switch (difficulty) {
    case '3x4':
      return 3 * 4;
    case '4x4':
      return 4 * 4;
    default:
      throw new Error('Unknown difficulty');
  }
};
