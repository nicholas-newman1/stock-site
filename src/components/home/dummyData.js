export const dummyForexData = {
  status: true,
  code: 200,
  msg: 'Successfully',
  response: [
    {
      id: '35',
      price: '79.05',
      change: '+0.18',
      chg_per: '+0.23%',
      last_changed: '2020-09-29 09:54:57',
      symbol: 'CAD/JPY',
    },
    {
      id: '373',
      price: '0.6402',
      change: '-0.0005',
      chg_per: '-0.08%',
      last_changed: '2020-09-29 09:54:57',
      symbol: 'CAD/EUR',
    },
    {
      id: '374',
      price: '0.5822',
      change: '-0.0002',
      chg_per: '-0.03%',
      last_changed: '2020-09-29 09:54:57',
      symbol: 'CAD/GBP',
    },
    {
      id: '410',
      price: '0.7487',
      change: '+0.0011',
      chg_per: '+0.15%',
      last_changed: '2020-09-29 09:54:42',
      symbol: 'CAD/USD',
    },
  ],
  info: {
    server_time: '2020-09-29 09:55:02 UTC',
    credit_count: 1,
  },
};

export const dummyCryptoData = {
  status: {
    timestamp: '2020-09-29T20:15:19.411Z',
    error_code: 0,
    error_message: null,
    elapsed: 18,
    credit_count: 1,
    notice: null,
  },
  data: {
    BTC: {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      slug: 'bitcoin',
      num_market_pairs: 9287,
      date_added: '2013-04-28T00:00:00.000Z',
      tags: ['mineable', 'pow', 'sha-256', 'store-of-value', 'state-channels'],
      max_supply: 21000000,
      circulating_supply: 18503431,
      total_supply: 18503431,
      is_active: 1,
      platform: null,
      cmc_rank: 1,
      is_fiat: 0,
      last_updated: '2020-09-29T20:14:36.000Z',
      quote: {
        CAD: {
          price: 14408.399419870615,
          volume_24h: 27546149636.640568,
          percent_change_1h: 0.17537161,
          percent_change_24h: 0.99897782,
          percent_change_7d: 3.00584143,
          market_cap: 266604824486.01593,
          last_updated: '2020-09-29T20:14:00.000Z',
        },
      },
    },
    ETH: {
      id: 1027,
      name: 'Ethereum',
      symbol: 'ETH',
      slug: 'ethereum',
      num_market_pairs: 6034,
      date_added: '2015-08-07T00:00:00.000Z',
      tags: ['mineable', 'pow', 'smart-contracts', 'binance-chain'],
      max_supply: null,
      circulating_supply: 112805358.9365,
      total_supply: 112805358.9365,
      is_active: 1,
      platform: null,
      cmc_rank: 2,
      is_fiat: 0,
      last_updated: '2020-09-29T20:14:27.000Z',
      quote: {
        CAD: {
          price: 478.7813356333549,
          volume_24h: 13985365851.021442,
          percent_change_1h: 0.33815806,
          percent_change_24h: -1.50276507,
          percent_change_7d: 4.70549145,
          market_cap: 54009100418.217476,
          last_updated: '2020-09-29T20:14:00.000Z',
        },
      },
    },
    XRP: {
      id: 52,
      name: 'XRP',
      symbol: 'XRP',
      slug: 'xrp',
      num_market_pairs: 609,
      date_added: '2013-08-04T00:00:00.000Z',
      tags: ['medium-of-exchange', 'enterprise-solutions', 'binance-chain'],
      max_supply: 100000000000,
      circulating_supply: 45136163236,
      total_supply: 99990875769,
      is_active: 1,
      platform: null,
      cmc_rank: 4,
      is_fiat: 0,
      last_updated: '2020-09-29T20:14:09.000Z',
      quote: {
        CAD: {
          price: 10.3229060664836288,
          volume_24h: 1745181974.8966408,
          percent_change_1h: 0.19007472,
          percent_change_24h: -1.64296293,
          percent_change_7d: 4.28424842,
          market_cap: 14574740926.699738,
          last_updated: '2020-09-29T20:14:00.000Z',
        },
      },
    },
  },
};

export const dummyNewsData = {
  totalArticles: 1367,
  articles: [
    {
      title:
        'Applying for new COVID-19 benefits? Why you might wait a bit longer this time',
      description:
        'Added screening measures are being implemented in hopes of weeding out anyone who applies for the federal government’s three new COVID-19 benefits but isn’t actually eligible, a measure that comes after concerns that some individuals may have previously tried scamming the system.',
      content:
        'TORONTO -- Added screening measures are being implemented in hopes of weeding out anyone who applies for the federal government’s three new COVID-19 benefits but isn’t actually eligible, a measure that comes after concerns that some individuals may h... [5404 chars]',
      url:
        'https://www.ctvnews.ca/politics/applying-for-new-covid-19-benefits-why-you-might-wait-a-bit-longer-this-time-1.5130937',
      image:
        'https://www.ctvnews.ca/polopoly_fs/1.5122343.1601238172!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg',
      publishedAt: '2020-10-02T22:39:00Z',
      source: {
        name: 'CTV News',
        url: 'https://www.ctvnews.ca',
      },
    },
    {
      title:
        'Province imposes new COVID-19 limits on restaurants and gyms in Mississauga, Brampton and Caledon',
      description:
        'Ontario Premier Doug Ford announced new restrictions on restaurants, bars, banquet halls and fitness centres on Friday (Oct. 2) in three COVID-19 hot spots in the province – including Peel Region.',
      content:
        'Ontario Premier Doug Ford announced new restrictions on restaurants, bars, banquet halls and fitness centres on Friday (Oct. 2) in three COVID-19 hot spots in the province – including Peel Region.\nAs of 12:01 a.m. on Oct. 3, maximum occupancy at rest... [2072 chars]',
      url:
        'https://www.bramptonguardian.com/news-story/10215131-province-imposes-new-covid-19-limits-on-restaurants-and-gyms-in-mississauga-brampton-and-caledon/',
      image:
        'https://dynamicmedia.zuza.com/zz/m/original_/d/9/d921025d-9d91-4c8e-a2bf-fac81112b7fa/ET TCDSB funding2_Super_Portrait.jpg',
      publishedAt: '2020-10-02T22:13:47Z',
      source: {
        name: 'Brampton Guardian',
        url: 'https://www.bramptonguardian.com',
      },
    },
    {
      title:
        'Flight attendant shares a tearful message on her last flight before being furloughed',
      description:
        '40,000 airline employees have been furloughed because of the coronavirus.',
      content:
        'This website uses cookies in order to enhance your experience. Please review our Privacy Policy to learn how we may use cookies and how you can change your browser settings to disable cookies. By continuing to use this website without changing your s... [43 chars]',
      url:
        'https://www.upworthy.com/flight-attendant-tearful-message-passengers-furlough',
      image:
        'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yNDQ1NjM1MC9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTYzMDQ5NDUzMH0.RXGLVTHBlPXpM_lI6OJL0PeFgD4LYvhoutB6EJRtFUI/img.jpg?width=1200&coordinates=0%2C15%2C0%2C15&height=600',
      publishedAt: '2020-10-02T21:45:00Z',
      source: {
        name: 'Upworthy',
        url: 'https://www.upworthy.com',
      },
    },
    {
      title:
        'Crush it: Bank of Canada Governor Tiff Macklem says a crisis is no time for half measures',
      description:
        'In an exclusive interview, the 59-year-old discusses what he learned from tackling previous financial crises and how his career prepared him for running the central bank at this moment',
      content:
        'Get full access to globeandmail.com\nJust $1.99 per week for the first 24 weeks\nJust $1.99 per week for the first 24 weeks...',
      url:
        'https://www.theglobeandmail.com/business/article-crushing-it-bank-of-canada-governor-tiff-macklem-says-a-crisis-is-no/',
      image:
        'https://www.theglobeandmail.com/resizer/zl9MlWY0mozxASpjpFcfEQrEdug=/1200x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/tgam/ZV5W7ZI22ZG3VJVHLR6TZS5FPI.jpg',
      publishedAt: '2020-10-02T21:19:17Z',
      source: {
        name: 'The Globe and Mail',
        url: 'https://www.theglobeandmail.com',
      },
    },
    {
      title:
        'North American stock markets partially recover from uncertainty over Trump COVID test',
      description:
        'North American stock markets partially recovered from deep early losses caused by uncertainty after U.S. President Donald Trump said he tested positive for the coronavirus.',
      content:
        'TORONTO -- North American stock markets partially recovered on Friday from deep early losses caused by uncertainty after U.S. President Donald Trump said he had tested positive for the coronavirus.\nMarkets nosedived after Trump tweeted that he and hi... [3273 chars]',
      url:
        'https://www.ctvnews.ca/business/north-american-stock-markets-partially-recover-from-uncertainty-over-trump-covid-test-1.5129640',
      image:
        'https://www.ctvnews.ca/polopoly_fs/1.4996181.1592925513!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg',
      publishedAt: '2020-10-02T20:54:00Z',
      source: {
        name: 'CTV News',
        url: 'https://www.ctvnews.ca',
      },
    },
    {
      title: 'COVID-19 Cases up in Midwestern Ontario',
      description:
        'Your Local News Network serving London, Windsor, Chatham, Sarnia and Midwestern Ontario',
      content:
        'Nasal swabs in test tubes. File photo courtesy of © Can Stock Photo / ayo88.\nShare via: Facebook\nTwitter\nLinkedIn\nMore\nOn Friday, the Grey Bruce Public Health Unit reported three new cases of COVID-19 confirmed in the past 24 hours, with another case... [284 chars]',
      url:
        'https://blackburnnews.com/coronavirus/2020/10/02/covid-19-cases-midwestern-ontario/',
      image:
        'https://blackburnnews.com/wp-content/uploads/2020/06/canstockphoto81456790-400x250.jpg',
      publishedAt: '2020-10-02T20:37:00Z',
      source: {
        name: 'BlackburnNews.com',
        url: 'https://blackburnnews.com',
      },
    },
    {
      title: 'OC Transpo bus driver tests positive for COVID-19',
      description:
        'In a memo, Transportation Services General Manager John Manconi says the employee last worked on Sept. 24 and has been self-isolating at home since.',
      content:
        'OTTAWA -- An OC Transpo bus driver has tested positive for COVID-19.\nIn a memo, Transportation Services General Manager John Manconi says the employee last worked on Sept. 24 and has been self-isolating at home since.\nOC Transpo is working directly w... [409 chars]',
      url:
        'https://ottawa.ctvnews.ca/oc-transpo-bus-driver-tests-positive-for-covid-19-1.5130667',
      image:
        'https://www.ctvnews.ca/polopoly_fs/1.4463842.1560378451!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg',
      publishedAt: '2020-10-02T20:11:00Z',
      source: {
        name: 'CTV News Ottawa',
        url: 'https://ottawa.ctvnews.ca',
      },
    },
    {
      title: 'Hudson’s Bay is closing its Downtown Winnipeg store',
      description:
        "The Hudson’s Bay will be closing its 'landmark' Downtown Winnipeg location in February 2021.",
      content:
        "WINNIPEG -- The Hudson’s Bay Company will be closing its 'landmark' Downtown Winnipeg location in February 2021.\nAccording to a statement from a spokesperson for HBC, this decision comes amid shifting consumer behaviours and changes to how and where ... [1466 chars]",
      url:
        'https://winnipeg.ctvnews.ca/hudson-s-bay-is-closing-its-downtown-winnipeg-store-1.5130596',
      image:
        'https://www.ctvnews.ca/polopoly_fs/1.5130597.1601667615!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg',
      publishedAt: '2020-10-02T19:30:00Z',
      source: {
        name: 'CTV News Winnipeg',
        url: 'https://winnipeg.ctvnews.ca',
      },
    },
    {
      title:
        'Masks, gloves go in the garbage, not recycling, cities tell residents',
      description:
        'Several Ontario cities are reminding residents to throw their disposable masks, gloves and wipes in the garbage, not the recycling bin.',
      content:
        'Denise Paglinawan, The Canadian Press\nSeveral Ontario cities are reminding residents to throw their disposable masks, gloves and wipes in the garbage, not the recycling bin.\nYork Region - which includes Markham, Richmond Hill and Vaughan - said resid... [2092 chars]',
      url:
        'https://www.cp24.com/news/masks-gloves-go-in-the-garbage-not-recycling-cities-tell-residents-1.5130594',
      image:
        'https://www.cp24.com/polopoly_fs/1.5130598.1601666708!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg',
      publishedAt: '2020-10-02T19:25:00Z',
      source: {
        name: "CP24 Toronto's Breaking News",
        url: 'https://www.cp24.com',
      },
    },
    {
      title:
        'Feds top up relief fund with $600 million to help small- and medium-sized businesses',
      description:
        'The federal government is adding $600 million to a fund to help small- and medium-sized businesses weather the COVID-19 pandemic, Economic Development Minister Melanie Joly said Friday.',
      content:
        'Jim Bronskill, The Canadian Press\nOTTAWA - The federal government is adding $600 million to a fund to help small- and medium-sized businesses weather the COVID-19 pandemic, Economic Development Minister Melanie Joly said Friday.\nThe announcement brin... [2583 chars]',
      url:
        'https://www.cp24.com/news/feds-top-up-relief-fund-with-600-million-to-help-small-and-medium-sized-businesses-1.5130536',
      image:
        'https://www.cp24.com/polopoly_fs/1.5130543.1601664679!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg',
      publishedAt: '2020-10-02T18:51:00Z',
      source: {
        name: "CP24 Toronto's Breaking News",
        url: 'https://www.cp24.com',
      },
    },
  ],
};
