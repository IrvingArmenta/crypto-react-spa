export const getPercentages = (
  positiveBarValue: number,
  negativeBarValue: number,
  totalValue: number
) => {
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
