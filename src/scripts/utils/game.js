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

export const getSecondsFromTime = (time) => {
  const minutes = +time.match(/^\d+/g)[0];
  const seconds = +time.match(/\d+$/g)[0];
  return minutes * 60 + seconds;
};

export const getScore = (allAttempts, failAttempts, seconds) => {
  const result = (allAttempts - failAttempts) * 100 - seconds * 10;

  if (result < 0) {
    return 0;
  }

  return result;
};
