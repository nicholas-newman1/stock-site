const filterMarketQuotes = (quotes: MarketQuote[]) => {
  return quotes.filter((quote, i) => i < 4);
};

const formatMarketQuoteData = (quotes: MarketQuote[]) => {
  return quotes.map((item) => ({
    symbol: item.ticker,
    price: parseFloat(item.price),
    change: item.changes,
    changesPercentage: parseFloat(item.changesPercentage.replace('(', '')),
  }));
};

export const formatMarketQuotes = (quotes: MarketQuote[]) => {
  return formatMarketQuoteData(filterMarketQuotes(quotes));
};
