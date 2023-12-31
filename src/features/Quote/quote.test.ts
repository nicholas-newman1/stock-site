import {
  roundLocale,
  decimalsToRoundTo,
  getChangeColor,
  replaceNullValues,
  shortenNumbers,
} from '../../common/utils/helpers';
import { formatQuoteData } from './helpers';

describe('formatQuoteData', () => {
  it('should use roundLocale and decimalsToRoundTo(change) to round price', () => {
    const DATA = {
      price: 567.675901,
      change: 2.37,
    };

    const FORMATTED_DATA = {
      price: roundLocale(DATA.price, decimalsToRoundTo(DATA.change), true),
    };

    expect(formatQuoteData(DATA)).toMatchObject(FORMATTED_DATA);
  });

  it('should use roundLocale and decimalsToRoundTo(change) to round change', () => {
    const DATA = { change: -0.0037 };

    const FORMATTED_DATA = {
      change: roundLocale(DATA.change, decimalsToRoundTo(DATA.change), true),
    };

    expect(formatQuoteData(DATA)).toMatchObject(FORMATTED_DATA);
  });

  it('should use roundLocale with decimals = 2 to round changesPercentage', () => {
    const DATA = { changesPercentage: -0.7423 };

    const FORMATTED_DATA = {
      changesPercentage: roundLocale(DATA.changesPercentage, 2),
    };

    expect(formatQuoteData(DATA)).toMatchObject(FORMATTED_DATA);
  });

  it('should not include trailing zeros on changesPercentage', () => {
    const DATA = { changesPercentage: -0.0007423 };

    const FORMATTED_DATA = {
      changesPercentage: roundLocale(DATA.changesPercentage, 2),
    };

    expect(formatQuoteData(DATA)).toMatchObject(FORMATTED_DATA);
  });

  it('should add a + in front of positive change', () => {
    const DATA = { change: 12.7 };

    const FORMATTED_DATA = {
      change:
        '+' + roundLocale(DATA.change, decimalsToRoundTo(DATA.change), true),
    };

    expect(formatQuoteData(DATA)).toMatchObject(FORMATTED_DATA);
  });

  it('should add a + in front of positive changesPercentage', () => {
    const DATA = { changesPercentage: 0.5 };

    const FORMATTED_DATA = {
      changesPercentage: '+' + roundLocale(DATA.changesPercentage, 2),
    };

    expect(formatQuoteData(DATA)).toMatchObject(FORMATTED_DATA);
  });

  it('should replace a price not of type number to be "N/A"', () => {
    const DATA = { price: 'failed' };
    const FORMATTED_DATA = { price: 'N/A' };
    expect(formatQuoteData(DATA)).toMatchObject(FORMATTED_DATA);
  });

  it('should replace a change not of type number to be "N/A"', () => {
    const DATA = { change: undefined };
    const FORMATTED_DATA = { change: 'N/A' };
    expect(formatQuoteData(DATA)).toMatchObject(FORMATTED_DATA);
  });

  it('should replace a changesPercentage not of type number to be "N/A"', () => {
    const DATA = { changesPercentage: false };
    const FORMATTED_DATA = { changesPercentage: 'N/A' };
    expect(formatQuoteData(DATA)).toMatchObject(FORMATTED_DATA);
  });

  it('should use roundLocale with decimals = 2 when change is not of type number', () => {
    const DATA = {
      price: 8.123,
      change: null,
    };

    const FORMATTED_DATA = {
      price: roundLocale(DATA.price, 2, true),
    };

    expect(formatQuoteData(DATA)).toMatchObject(FORMATTED_DATA);
  });

  it('should add a color property using getChangeColor(change)', () => {
    const DATA = { change: 12 };
    const FORMATTED_DATA = { color: getChangeColor(DATA.change) };
    expect(formatQuoteData(DATA)).toMatchObject(FORMATTED_DATA);
  });

  it('should replace null values using replaceNullValues', () => {
    const DATA = { marketCap: null, avgVolume: null };
    const FORMATTED_DATA = replaceNullValues(DATA);
    expect(formatQuoteData(DATA)).toMatchObject(FORMATTED_DATA);
  });

  it('should shorten numbers using shortenNumbers', () => {
    const DATA = { marketCap: 8475884175.423879, avgVolume: 52750916.723629 };
    const FORMATTED_DATA = shortenNumbers(DATA);
    expect(formatQuoteData(DATA)).toMatchObject(FORMATTED_DATA);
  });
});
