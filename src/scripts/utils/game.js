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
