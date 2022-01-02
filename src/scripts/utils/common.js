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

export const getRandomIntegerNumber = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

export const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length - 1);
  return array[randomIndex];
};

export const getRandomId = () => `${Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))}`;

export const getRandomItemsFromArray = (array, count) => {
  const result = [];

  const pushNewItem = (itemList) => {
    const newItem = getRandomArrayItem(array);

    if (itemList.includes(newItem)) {
      pushNewItem(result);
      return;
    }

    result.push(newItem);
  };

  for (let i = 0; i < count; i++) {
    pushNewItem(result);
  }

  return result;
};

export const getShuffledArray = (array) => {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = getRandomIntegerNumber(0, i);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};
