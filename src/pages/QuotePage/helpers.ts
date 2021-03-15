export const isStock = (exchange: string) => {
  return (
    ['INDEX', 'ETF', 'MUTUAL_FUND', 'FOREX', 'CRYPTO', 'COMMODITY'].findIndex(
      (item) => item === exchange
    ) === -1
  );
};
