import {
  decimalsToRoundTo,
  roundLocale,
  getChangeColor,
  shortenNumbers,
  replaceNullValues,
} from '../../common/utils/helpers';

// formats the data in the quote to be more readable
export const formatQuoteData = (quote: KeyValueObject) => {
  const { price, change, changesPercentage } = quote;

  // determine number of decimals to round to
  let decimals = typeof change === 'number' ? decimalsToRoundTo(change) : 2;

  // variables to hold formatted values
  let priceStr: string;
  let changeStr: string;
  let changesPercentageStr: string;

  // round price
  if (typeof price === 'number') {
    priceStr = roundLocale(price, decimals, true);
  } else {
    priceStr = 'N/A';
  }

  // round change and add '+' if necessary
  if (typeof change === 'number') {
    changeStr = roundLocale(change, decimals, true);
    if (change > 0) changeStr = '+' + changeStr;
  } else {
    changeStr = 'N/A';
  }

  // round changesPercentage and add '+' if necessary
  if (typeof changesPercentage === 'number') {
    changesPercentageStr = roundLocale(changesPercentage, 2);
    if (changesPercentage > 0)
      changesPercentageStr = '+' + changesPercentageStr;
  } else {
    changesPercentageStr = 'N/A';
  }

  // set formatted price, change, and changesPercentage. Add change color property
  let formattedQuote: KeyValueObject = {
    ...quote,
    price: priceStr,
    change: changeStr,
    changesPercentage: changesPercentageStr,
    color: getChangeColor(change),
  };

  /* replace null values with N/A, large numbers with shortened versions in
  local format */
  formattedQuote = shortenNumbers(replaceNullValues(formattedQuote));

  return formattedQuote;
};
