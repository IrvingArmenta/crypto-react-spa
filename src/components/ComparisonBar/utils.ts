export const getPercentages = (
  positiveBarValue: number,
  negativeBarValue: number
) => {
  const totalValue = positiveBarValue + negativeBarValue;

  const positiveBarPercentage = Number(
    ((positiveBarValue / totalValue) * 100).toFixed(2)
  );

  const negativeBarPercentage = Number(
    ((negativeBarValue / totalValue) * 100).toFixed(2)
  );

  return {
    positiveBarPercentage,
    negativeBarPercentage
  };
};
