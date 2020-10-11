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

export const dummyIndexData = [
  {
    symbol: '^DJI',
    name: 'Dow Jones Industrial Average',
    price: 27682.81,
    changesPercentage: -0.48,
    change: -0.0003,
    dayLow: 27382.94,
    dayHigh: 27861.43,
    yearHigh: 29568.57,
    yearLow: 18213.65,
    marketCap: null,
    priceAvg50: 27865.229,
    priceAvg200: 25570.92,
    volume: 395815614,
    avgVolume: 401258750,
    exchange: 'INDEX',
    open: 27536.39,
    previousClose: 27816.9,
    eps: null,
    pe: null,
    earningsAnnouncement: null,
    sharesOutstanding: null,
    timestamp: 1601749130,
  },
  {
    symbol: '^GSPC',
    name: 'S&P 500',
    price: 3348.44,
    changesPercentage: -0.96,
    change: -32.36,
    dayLow: 3323.69,
    dayHigh: 3369.1,
    yearHigh: 3588.11,
    yearLow: 2191.86,
    marketCap: null,
    priceAvg50: 3387.2488,
    priceAvg200: 3079.139,
    volume: 2350090813,
    avgVolume: 4266899375,
    exchange: 'INDEX',
    open: 3338.94,
    previousClose: 3380.8,
    eps: null,
    pe: null,
    earningsAnnouncement: null,
    sharesOutstanding: null,
    timestamp: 1601749130,
  },
  {
    symbol: '^GSPTSE',
    name: 'S&P/TSX Composite index',
    price: 16199.25,
    changesPercentage: 0.09,
    change: 14.71,
    dayLow: 16005.7,
    dayHigh: 16213.89,
    yearHigh: 17970.5,
    yearLow: 11172.7,
    marketCap: null,
    priceAvg50: 16365.637,
    priceAvg200: 15307.438,
    volume: 188127891,
    avgVolume: 209475400,
    exchange: 'INDEX',
    open: 16021.55,
    previousClose: 16184.54,
    eps: null,
    pe: null,
    earningsAnnouncement: null,
    sharesOutstanding: null,
    timestamp: 1601749130,
  },
  {
    symbol: '^IXIC',
    name: 'NASDAQ Composite',
    price: 11075.017,
    changesPercentage: -2.22,
    change: -251.483,
    dayLow: 11033.692,
    dayHigh: 11244.87,
    yearHigh: 12074.06,
    yearLow: 6631.42,
    marketCap: null,
    priceAvg50: 11198.702,
    priceAvg200: 9823.169,
    volume: 3302264838,
    avgVolume: 3966695937,
    exchange: 'INDEX',
    open: 11082.5,
    previousClose: 11326.5,
    eps: null,
    pe: null,
    earningsAnnouncement: null,
    sharesOutstanding: null,
    timestamp: 1601749130,
  },
];

export const dummyQuoteData = [
  {
    symbol: 'AMZN',
    name: 'Amazon.com, Inc.',
    price: 3125,
    changesPercentage: -2.99,
    change: -96.26,
    dayLow: 3123.295,
    dayHigh: 3195.7964542,
    yearHigh: 3552.25,
    yearLow: 1626.03,
    marketCap: 1565281222656,
    priceAvg50: 3217.8823,
    priceAvg200: 2729.357,
    volume: 5360007,
    avgVolume: 5071692,
    exchange: 'NASDAQ',
    open: 3153.63,
    previousClose: 3221.26,
    eps: 26.037,
    pe: 120.02151,
    earningsAnnouncement: '2020-07-30T16:08:00.000+0000',
    sharesOutstanding: 500110111,
    timestamp: 1601804178,
  },
];

export const dummyStockNews = [
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-06 00:00:00',
    title:
      'Will Amazon’s “Climate Pledge Friendly” Label Transform Online Shopping?',
    image:
      'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f7c06933885aa6c98ac7ccb%2F0x0.jpg',
    site: 'https://www.forbes.com',
    text:
      'Amazon has announced a new initiative that identifies products as “Climate Pledge Friendly”. However, Amazon’s website makes is difficult for shoppers to find such products. Without mainstreaming the climate information on its website, the new initiative is unlikely to transform online shopping.',
    url:
      'https://www.forbes.com/sites/prakashdolsak/2020/10/06/will-amazons-climate-pledge-friendly-label-transform-online-shopping/',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-05 20:25:00',
    title: 'Amazon.com Inc. stock outperforms market on strong trading day',
    image: 'https://images.mktw.net/im-215086/social',
    site: 'marketwatch',
    text:
      'Shares of Amazon.com Inc. rallied 2.37% to $3,199.20 Monday, on what proved to be an all-around positive trading session for the stock market, with the S&P...',
    url:
      'https://www.marketwatch.com/story/amazon-com-inc-stock-outperforms-market-on-strong-trading-day-01601929537',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-05 19:44:03',
    title: "Film Review: 'Time' a terrific look at the pull of loss",
    image:
      'https://s.abcnews.com/images/Entertainment/WireAP_94514377eaa5467f99642f5f6870f4f8_16x9_992.jpg',
    site: 'abcnews',
    text: 'There is an unrushed quality to the new documentary “Time.”',
    url:
      'https://abcnews.go.com/Entertainment/wireStory/film-review-time-terrific-pull-loss-73436400',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-05 19:15:19',
    title: '8 early Prime Day deals you can buy today',
    image:
      'https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/article-images/2018/07/amazon-prime-day-2018-kbs.jpg',
    site: 'https://www.windowscentral.com',
    text:
      'Prime Day may not be until next week, but there are already deals live at Amazon on products like mesh Wi-Fi routers, smart TVs, and more to save on while we wait for the main event.',
    url: 'https://www.windowscentral.com/early-prime-day-deals-buy-today',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-05 19:00:06',
    title:
      'Walmart and Instacart Team Up To Fight Amazon and 16 More Big Business Moves in 2020',
    image:
      'https://cdn.gobankingrates.com/wp-content/uploads/2020/03/Walmart-Store-building-sign-shutterstock_1465828520-1024x576.jpg',
    site: 'https://www.gobankingrates.com',
    text: 'The major mergers, acquisitions and IPOs of the year so far.',
    url:
      'https://www.gobankingrates.com/money/business/biggest-business-moves-2020/',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-05 18:43:25',
    title:
      "Protesters March to Bezos' Mansion to Demand Higher Wages, Protections",
    image: 'https://media.breitbart.com/media/2019/05/Jeff-Bezos-640x335.jpg',
    site: 'https://www.breitbart.com',
    text:
      "Activists marched to Amazon founder Jeff Bezos' California mansion Sunday to protest the company's working conditions during the pandemic.",
    url:
      'https://www.breitbart.com/health/2020/10/05/video-protesters-march-to-jeff-bezos-mansion-to-demand-higher-wages-coronavirus-protections/',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-05 18:10:11',
    title:
      'Boost your outdoor food prep with an early Prime Day deal on a smoker',
    image:
      'https://bgr.com/wp-content/uploads/2020/10/masterbuilt-e1601914259690.jpg?quality=70&strip=all',
    site: 'https://bgr.com',
    text:
      'It’s never a bad time to be grilling meats, which is why the latest deal on a smoker makes so much sense. Amazon has some of the best deals of the season out right now as it ramps up coverage…',
    url:
      'https://bgr.com/2020/10/05/boost-your-outdoor-food-prep-with-an-early-prime-day-deal-on-a-smoker/',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-05 16:24:23',
    title:
      'Fired Amazon Employee Arrested After Amazon Reported Him to Federal Bureau of Investigation',
    image: 'https://mw3.wsj.net/mw5/content/logos/mw_logo_social.png',
    site: 'marketwatch',
    text:
      'Amazon.com, Inc. (NASDAQ:AMZN): What: Amazon reported Vu Anh Nguyen to authorities in July 2020 for falsely issuing refunds for products ordered on...',
    url:
      'https://www.marketwatch.com/press-release/fired-amazon-employee-arrested-after-amazon-reported-him-to-federal-bureau-of-investigation-2020-10-05',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-05 16:00:44',
    title: 'Welcome to the Blumhouse: The Lie/Black Box review – subtle scares',
    image:
      'https://i.guim.co.uk/img/media/4712b0bdc41ec929bb9ac887e5b87d3d5b1a6541/0_0_2560_1536/master/2560.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=ccafe85c43636ff5b5efaee8a64a0420',
    site: 'theguardian',
    text:
      'The horror hit factory creeps on to streaming platform Amazon with two studies in psychological unsettlement',
    url:
      'https://www.theguardian.com/film/2020/oct/05/welcome-to-the-blumhouse-the-lie-black-box',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-05 15:16:50',
    title:
      'Early Prime Day deal saves you up to $730 on a stunning Sony 4K smart TV',
    image:
      'https://bgr.com/wp-content/uploads/2019/11/sony-tv-e1573666260148.jpg?quality=70&strip=all',
    site: 'https://bgr.com',
    text:
      'Prime Day TV deals are always among the most popular sales each year during Amazon’s big annual blowout sales event, and we don’t expect 2020 to be any different. That said, there are s…',
    url: 'https://bgr.com/2020/10/05/prime-day-tv-deals-sony-4k-smart-tv/',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-05 14:28:15',
    title:
      'Smartphone Accessories: Tribit StormBox Micro Speaker $38 (24% off), more - 9to5Toys',
    image:
      'https://9to5toys.com/wp-content/uploads/sites/5/2020/06/Tribit-StormBox-Micro-1.jpg?quality=82&strip=all',
    site: 'https://9to5toys.com',
    text:
      'Tribit Direct (100% positive all-time feedback from 7,200+) via Amazon is currently offering its StormBox Micro Bluetooth Speaker for $38.24 shipped. Typically fetching $50, today’s offer saves you 24%, beats our previous mention by $2, and matches the Amazon all-time low. Tribit’s compact Bluetooth speaker delivers an IP67 water-resistant form-factor to ensure you can rock […]',
    url: 'https://9to5toys.com/2020/10/05/tribit-stormbox-micro-speaker/',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-05 14:19:31',
    title:
      'Walmart signs trio of drone deals as it races to play catch-up with Amazon',
    image:
      'https://image.cnbcfm.com/api/v1/image/106727509-1601649586895-Drone-Image-Original.jpg?v=1601649640',
    site: 'cnbc',
    text:
      'Walmart has struck deals with three drone operators to test how the technology could be used to expand on-demand deliveries and help it better compete with Amazon.',
    url:
      'https://www.cnbc.com/2020/10/05/walmart-signs-drone-deals-as-it-races-to-play-catch-up-with-amazon.html',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-05 14:08:53',
    title:
      "With one month until the presidential election, Piper Sandler analyst plots S&P 500's key levels",
    image:
      'https://image.cnbcfm.com/api/v1/image/106555823-1590693491745gettyimages-1227198519.jpeg?v=1601671734',
    site: 'cnbc',
    text:
      'Uncertainty in Washington is keeping Wall Street on edge. Piper Sandler chief market technician Craig Johnson charts the S&P 500 and how it could swing from now until Election Day.',
    url:
      'https://www.cnbc.com/2020/10/05/presidential-election-and-markets-key-levels-for-sp-500-and-stocks-.html',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-05 14:00:21',
    title:
      'More Games, More Talent, and More Control for Fans—Amazon Delivers the Future of Football with TNF on Prime Video',
    image: 'https://mw3.wsj.net/mw5/content/logos/mw_logo_social.png',
    site: 'marketwatch',
    text:
      '(NASDAQ: AMZN) — Today, Amazon announced a slate of new features and original programming for Thursday Night Football (TNF) Presented by Bud Light Platinum...',
    url:
      'https://www.marketwatch.com/press-release/more-games-more-talent-and-more-control-for-fansamazon-delivers-the-future-of-football-with-tnf-on-prime-video-2020-10-05',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-05 12:13:38',
    title: 'Pandemic pushes start of holiday shopping earlier than ever',
    image:
      'https://s.abcnews.com/images/Travel/WireAP_80f44ef02c584094bdf73c8da3273676_16x9_992.jpg',
    site: 'abcnews',
    text:
      'Add last-minute holiday shopping to the list of time-honored traditions being upended by the coronavirus pandemic',
    url:
      'https://abcnews.go.com/Travel/wireStory/pandemic-pushes-start-holiday-shopping-earlier-73427489',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-05 10:43:02',
    title:
      'Internet of Robotic Things  Market Global Demand Analysis with Top Countries Data, Market Size, Growth, Opportunities, Top Key Players and Forecast to 2026',
    image: 'https://mw3.wsj.net/mw5/content/logos/mw_logo_social.png',
    site: 'marketwatch',
    text:
      'Oct 05, 2020 (The Expresswire) --\nGlobal “Internet of Robotic Things Market" 2020 Research Report provides key analysis on the market status of the Internet...',
    url:
      'https://www.marketwatch.com/press-release/internet-of-robotic-things-market-global-demand-analysis-with-top-countries-data-market-size-growth-opportunities-top-key-players-and-forecast-to-2026-2020-10-05',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-05 10:19:47',
    title: 'Smart Retail: Technologies and Global Markets',
    image: 'https://mw3.wsj.net/mw5/content/logos/mw_logo_social.png',
    site: 'marketwatch',
    text:
      'New York, Oct 05, 2020 (GLOBE NEWSWIRE via COMTEX) --\nNew York, Oct. 05, 2020 (GLOBE NEWSWIRE) -- Reportlinker.com announces the release of the report "Smart...',
    url:
      'https://www.marketwatch.com/press-release/smart-retail-technologies-and-global-markets-2020-10-05',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-05 10:05:30',
    title: '16 of the best early Prime Day deals you can buy right now',
    image:
      'https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2020/04/amazon-prime-day-packages.jpg',
    site: 'https://www.androidcentral.com',
    text:
      "Amazon Prime Day is just a week away, but you can already start saving with these awesome pre-Prime Day deals. Some of these deal won't be available for much longer!",
    url:
      'https://www.androidcentral.com/16-best-early-prime-day-deals-you-can-buy-now',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-05 09:24:45',
    title:
      'Worldwide Subscription e-Commerce Industry to 2024 - Growing Usage of Mobile Devices is Driving the Market',
    image: 'https://mw3.wsj.net/mw5/content/logos/mw_logo_social.png',
    site: 'marketwatch',
    text:
      'Dublin, Oct 05, 2020 (GLOBE NEWSWIRE via COMTEX) --\nDublin, Oct. 05, 2020 (GLOBE NEWSWIRE) -- The "Global Subscription e-Commerce Market: Size and Forecasts...',
    url:
      'https://www.marketwatch.com/press-release/worldwide-subscription-e-commerce-industry-to-2024---growing-usage-of-mobile-devices-is-driving-the-market-2020-10-05',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-05 09:00:03',
    title: 'The new Amazon Echo has a slight audio edge over the Nest Audio',
    image:
      'https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2020/10/amazon-echo-4th-gen-2.jpeg',
    site: 'https://www.androidcentral.com',
    text:
      'Amazon and Google are releasing new smart speakers this October just a couple of weeks apart, both hoping to dominate Black Friday sales and holiday wish lists. But which speaker makes the best updates over the last generation to be worth upgrading your current smart speaker? We break down all the features and specs you need to know.',
    url: 'https://www.androidcentral.com/nest-audio-vs-amazon-echo-4th-gen',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-05 09:00:00',
    title:
      'Darkstore’s New Service Pitches Two-Hour Delivery for Consumer Goods',
    image: 'https://images.wsj.net/im-240134/social',
    site: 'wsj',
    text:
      'Darkstore, a behind-the-scenes fulfillment company, has released its first consumer-facing app, promising two-hour delivery of products from sneakers to olive oil.',
    url:
      'https://www.wsj.com/articles/darkstores-new-service-pitches-two-hour-delivery-for-consumer-goods-11601888400',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-05 08:46:59',
    title:
      "Over 1 lakh local shops, kiranas to participate in Amazon India's Great Indian Festival sale",
    image:
      'https://images.yourstory.com/cs/5/a09f22505c6411ea9c48a10bad99c62f/Imagef3wi-1598537170946.jpg?fm=png&auto=format',
    site: 'https://yourstory.com',
    text:
      "More than 20,000 offline retailers and kiranas from ''Local Shops on Amazon'' programme will participate in the ''Great Indian Festival'' for the first time, Amazon India said in a statement.",
    url:
      'https://yourstory.com/2020/10/local-shops-kiranas-participate-amazon-great-indian-festive-sale',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-05 08:30:02',
    title:
      'Predictive and Prescriptive Analytics Market Growth and Technology Advancements 2020 – Oracle Corporation, SAP SE, International Business Machines Corporation',
    image: 'https://mw3.wsj.net/mw5/content/logos/mw_logo_social.png',
    site: 'marketwatch',
    text:
      "Oct 05, 2020 (Market Insight Reports) --\nThe report provides a detailed assessment of the 'Global Predictive &amp; Prescriptive Analytics Market’. This...",
    url:
      'https://www.marketwatch.com/press-release/predictive-and-prescriptive-analytics-market-growth-and-technology-advancements-2020-oracle-corporation-sap-se-international-business-machines-corporation-2020-10-05',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-05 07:09:51',
    title:
      'El paraguas invertido y otras 11 cosas que necesitas para días de lluvia',
    image:
      'https://ep00.epimg.net/elpais/imagenes/2020/10/02/escaparate/1601655022_175384_1601655590_rrss_normal.jpg',
    site: 'https://elpais.com',
    text:
      'Soluciones para protegerse de la lluvia y el viento en distintas situaciones',
    url:
      'https://elpais.com/elpais/2020/10/02/escaparate/1601655022_175384.html',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-05 07:01:29',
    title: 'Amazon holiday gift guides arrive alongside new perks - 9to5Toys',
    image:
      'https://9to5toys.com/wp-content/uploads/sites/5/2020/10/amazon-holiday-gift-guides.jpg?quality=82&strip=all',
    site: 'https://9to5toys.com',
    text:
      'Amazon holiday gift guides arrive alongside new perks in lead up to Prime Day including added bonuses for credit card holders and more.',
    url: 'https://9to5toys.com/2020/10/05/amazon-holiday-gift-guides/',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-05 05:30:18',
    title:
      'Global Context Aware Computing Market 2020 Top countries data  Industry Size, Future Trends, Growth Key Factors, Demand, Business Share, Sales & Income, Manufacture Players, Application, Scope, and Opportunities Analysis by Outlook By 360 Market Updates',
    image: 'https://mw3.wsj.net/mw5/content/logos/mw_logo_social.png',
    site: 'marketwatch',
    text:
      'Oct 05, 2020 (The Expresswire) --\nGlobal “Context Aware Computing Market” Size report 2020 - 2024 gives complete analysis of industry position and viewpoint...',
    url:
      'https://www.marketwatch.com/press-release/global-context-aware-computing-market-2020-top-countries-data-industry-size-future-trends-growth-key-factors-demand-business-share-sales-income-manufacture-players-application-scope-and-opportunities-analysis-by-outlook-by-360-market-updates-2020-10-05',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-05 05:12:13',
    title: "Protesters march to Jeff Bezos' $165million Beverly Hills mansion",
    image:
      'https://i.dailymail.co.uk/1s/2020/10/05/06/33988266-0-image-a-170_1601874678497.jpg',
    site: 'https://www.dailymail.co.uk',
    text:
      "Demonstrators on Sunday marched through Beverly Hills, California, to protest in front of Amazon CEO Jeff Bezos' mansion to demand labor and climate reforms after 20,000 staffers had COVID-19",
    url:
      'https://www.dailymail.co.uk/news/article-8805177/Protesters-march-Jeff-Bezos-156million-Beverly-Hills-mansion.html',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-05 04:35:11',
    title:
      'Data Protection as a Service (DPaaS) Market 2020 Industry Trends, Size, Growth Insight, Share, Emerging Technologies, Share, Competitive, Regional, And Global Industry Forecast To 2025',
    image: 'https://mw3.wsj.net/mw5/content/logos/mw_logo_social.png',
    site: 'marketwatch',
    text:
      'Oct 05, 2020 (The Expresswire) --\nGlobal "Data Protection as a Service (DPaaS) Market" (2020) thoroughly scrutinizes the effects of a wide range of factors...',
    url:
      'https://www.marketwatch.com/press-release/data-protection-as-a-service-dpaas-market-2020-industry-trends-size-growth-insight-share-emerging-technologies-share-competitive-regional-and-global-industry-forecast-to-2025-2020-10-05',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-05 03:13:38',
    title:
      'Washington Real Estate Investment Trust: DC Metro Stability And Redevelopments Will Fuel Long-Term Growth (NYSE:WRE)',
    image:
      'https://static3.seekingalpha.com/assets/og_image_192-59bfd51c9fe6af025b2f9f96c807e46f8e2f06c5ae787b15bf1423e6c676d4db.png',
    site: 'seekingalpha',
    text:
      'Washington DC is the most stable sector in the country, as the federal government is the largest employer.',
    url:
      'https://seekingalpha.com/article/4377530-washington-real-estate-investment-trust-dc-metro-stability-and-redevelopments-will-fuel-long',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-05 03:07:31',
    title:
      "Over 1 lakh local shops, kiranas to facilitate Amazon India's delivery this festive season",
    image:
      'https://cdn.zeebiz.com/sites/default/files/2020/10/05/130238-amazon-reuters1.jpg',
    site: 'https://www.zeebiz.com',
    text:
      'E-commerce major Amazon India on Sunday said it has enabled over one lakh local shops, kiranas and neighbourhood stores across the country through its various initiatives to facilitate delivery of packages this festive season',
    url:
      'https://www.zeebiz.com/small-business/news-over-1-lakh-local-shops-kiranas-to-facilitate-amazon-indias-delivery-this-festive-season-136430',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-05 00:00:00',
    title:
      'Data Center Market In Europe Will Showcase Neutral Impact During 2020-2024 | Increasing Adoption of Cloud-based Storage Services to Boost the Market Growth | Technavio',
    image:
      'https://mms.businesswire.com/media/20201004005005/en/826996/23/IRTNTR41316.jpg',
    site: 'businesswire',
    text:
      'The Data Center Market in Europe will grow by USD 70.95 bn during 2020-2024',
    url:
      'https://www.businesswire.com/news/home/20201004005005/en/Data-Center-Market-In-Europe-Will-Showcase-Neutral-Impact-During-2020-2024-Increasing-Adoption-of-Cloud-based-Storage-Services-to-Boost-the-Market-Growth-Technavio',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-04 19:00:00',
    title: 'Make any Amazon Echo more kid-friendly with one setting',
    image:
      'https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2018/12/echo-dot-3rd-gen-desk-cropped.jpg',
    site: 'https://www.androidcentral.com',
    text:
      'The Amazon Echo Dot Kids Edition is tempting, but it uses the older 2nd-gen Echo Dot. Fortunately, the 3rd-gen can be converted to perform just like it.',
    url:
      'https://www.androidcentral.com/how-turn-amazon-echo-dot-echo-dot-kids-edition',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-04 17:00:00',
    title:
      'Make your Amazon Echo Dot Kids Edition work for you with Parent Dashboard',
    image:
      'https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2020/09/echo-dot-kids-edition-panda.jpg',
    site: 'https://www.androidcentral.com',
    text:
      "The Amazon Echo Dot Kids Edition may be capable of some impressive parental controls, but those controls are all administrated through Amazon FreeTime and its Parent Dashboard. Here's how to control your kid's Echo Dot experience.",
    url:
      'https://www.androidcentral.com/how-use-freetime-your-echo-dot-kids-edition',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-04 16:42:04',
    title: 'The Boys Season 2 Ratings Rival Netflix Shows',
    image:
      'https://static2.srcdn.com/wordpress/wp-content/uploads/2020/09/the-boys-1564564650-1.jpg',
    site: 'https://screenrant.com',
    text: 'Viewers watched 891 million minutes this week.',
    url:
      'https://screenrant.com/boys-season-2-streaming-ratings-rival-netflix/',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-04 15:49:26',
    title:
      'Over 1 lakh local shops, kiranas to participate in Amazon India’s festive sales',
    image:
      'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/10/04/Pictures/office-photo-company-bengaluru-pictured-amazon-inside_f45f860c-0658-11eb-b559-b799cd4220ef.jpg',
    site: 'https://www.hindustantimes.com',
    text:
      'More than 20,000 offline retailers, kiranas and local shops from ‘‘Local Shops on Amazon’‘ programme will participate in ‘‘Great Indian Festival’‘ for the first time, selling various items like daily essentials, large appliances and home decor products, a statement said.',
    url:
      'https://www.hindustantimes.com/business-news/over-1-lakh-local-shops-kiranas-to-participate-in-amazon-india-s-festive-sales/story-7kF36goaRQln5tSbt16NHN.html',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-04 15:47:07',
    title: 'Opportunities In India E-Commerce',
    image:
      'https://static3.seekingalpha.com/assets/og_image_192-59bfd51c9fe6af025b2f9f96c807e46f8e2f06c5ae787b15bf1423e6c676d4db.png',
    site: 'seekingalpha',
    text:
      'India’s e-commerce industry is growing rapidly and there is plenty of room left for growth. Growth drivers include rising internet penetration, incomes, and the rise of vernacular e-commerce platforms.',
    url:
      'https://seekingalpha.com/article/4377492-opportunities-in-india-e-commerce',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-04 14:00:00',
    title:
      'Inside Amazon\'s "whirlwind courtship" of Whole Foods, as told by the grocery chain\'s founder John Mackey',
    image: 'https://i.insider.com/5f76189e0ab50d00184ad9f1',
    site: 'https://www.businessinsider.com.au',
    text:
      'Locked in a battle for the soul of his grocery chain, Whole Foods Market founder and CEO John Mackey awoke one morning in 2017 with a single question on his mind: “What about Amazon?”',
    url:
      'https://www.businessinsider.com.au/amazon-whole-foods-merger-courtship-john-mackey-jeff-bezos-2020-10',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-04 13:54:00',
    title:
      'Amazon onboards 1 lakh local shops, kiranas to deliver orders this festive season',
    image:
      'https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/amazon_505_041020072501.jpg',
    site: 'https://m.businesstoday.in',
    text:
      'The programme, launched in April this year, now has more than 20,000 retailers in 400 cities, including Meerut, Ludhiana, Saharanpur, Surat, Indore, Ernakulum and Kanchipuram',
    url:
      'https://m.businesstoday.in/story/amazon-onboards-1-lakh-local-shops-kiranas-to-deliver-order-this-festive-season/1/417727.html',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-04 13:10:55',
    title:
      'Amazon Teams Up With Universal, Warner To Remaster Thousands of Songs',
    image:
      'https://www.smarteranalyst.com/wp-content/uploads/2016/12/Amazon13.jpg',
    site: 'https://www.smarteranalyst.com',
    text:
      'Amazon Music (AMZN) has announced a partnership with Universal Music Group and Warner Music Group to remaster thousands of songs and albums to Ultra High',
    url:
      'https://www.smarteranalyst.com/yahoo/amazon-teams-up-with-universal-warner-to-remaster-thousands-of-songs/',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-04 12:49:00',
    title:
      "Over 1 lakh local shops, kiranas to participate in Amazon India's festive sales | Business",
    image:
      'https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/10_08_2020_12_44_16_0394766.jpg?width=920&format=jpeg',
    site: 'https://www.devdiscourse.com',
    text:
      "Amazon India on Sunday said it has enabled over one lakh local shops, kiranas and neighbourhood stores across the country through its various initiatives, a move that will help serve more customers this festive season  More than 20,000 offline retailers, kiranas and local shops from ''Local Shops on Amazon'' programme will participate in ''Great Indian Festival'' for the first time, selling various items like daily essentials, large appliances and home decor products, a statement said.",
    url:
      'https://www.devdiscourse.com/article/business/1238602-over-1-lakh-local-shops-kiranas-to-participate-in-amazon-indias-festive-sales',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-04 11:43:49',
    title:
      'Smart Speaker Market Share, Trend, Opportunity, Affect On Demand By COVID-19 Pandemic And Forecast 2020-2025',
    image: 'https://mw3.wsj.net/mw5/content/logos/mw_logo_social.png',
    site: 'marketwatch',
    text:
      'Oct 04, 2020 (AmericaNewsHour) -- Global Smart Speaker Market AnalysisAccording to Verified Market Research, the global Smart speaker Market was valued at...',
    url:
      'https://www.marketwatch.com/press-release/smart-speaker-market-share-trend-opportunity-affect-on-demand-by-covid-19-pandemic-and-forecast-2020-2025-2020-10-04',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-04 11:40:01',
    title:
      'Amazon Great Indian Festival: E-commerce giant is doing this for the first time for delivery of packages',
    image:
      'https://cdn.zeebiz.com/sites/default/files/2020/10/04/130232-ama.jpg',
    site: 'https://www.zeebiz.com',
    text:
      "More than 20,000 offline retailers, kiranas and local shops from 'Local Shops on Amazon' programme will participate in 'Great Indian Festival' for the first time.",
    url:
      'https://www.zeebiz.com/companies/news-amazon-great-indian-festival-e-commerce-giant-is-this-for-the-first-time-for-delivery-of-packages-136424',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-04 11:15:07',
    title:
      "Over 1 lakh local shops, kiranas to facilitate Amazon India's delivery this festive season | Business",
    image:
      'https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/imagegallery/29_02_2020_19_18_04_5779125.jpg?width=920&format=jpeg',
    site: 'https://www.devdiscourse.com',
    text:
      'With this, Flipkart has significantly expanded its kirana onboarding programme to make deliveries to customers in more than 850 cities, it had said.  E-commerce companies see a large chunk of their business coming in during the festive sales and they make significant investments ahead of time to ramp up their capacity to be able to handle the spike in orders.',
    url:
      'https://www.devdiscourse.com/article/business/1238509-over-1-lakh-local-shops-kiranas-to-facilitate-amazon-indias-delivery-this-festive-season',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-04 11:15:00',
    title: "What the future holds for tech's billion-dollar headquarters",
    image:
      'https://image-prod.iol.co.za/resize/1992x366?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/b83988b9-2619-5825-a456-19992263f2ce&operation=CROP&offset=0x60&resize=1991x1120&webp=false',
    site: 'https://www.iol.co.za',
    text:
      'Over the past decade, tech giants have invested in real estate and proper headquarters.',
    url:
      'https://www.iol.co.za/technology/software-and-internet/what-the-future-holds-for-techs-billion-dollar-headquarters-8c9be759-cd66-411f-b859-a4731ede7526',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-04 11:00:25',
    title:
      "Over 1 lakh local shops, kiranas to facilitate Amazon India's delivery this festive season",
    image:
      'https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/09/amazon-5-1601454661.jpg',
    site: 'https://www.indiatvnews.com',
    text:
      'E-commerce major Amazon India on Sunday said it has enabled over one lakh local shops, kiranas and neighbourhood stores across the country through its various initiatives to facilitate the delivery of packages this festive season.',
    url:
      'https://www.indiatvnews.com/business/news-amazon-india-festive-season-delivery-over-1-lakh-local-shops-kiranas-654265',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-04 10:51:35',
    title:
      "1 lakh local shops, kiranas to facilitate Amazon's delivery this festive season",
    image:
      'https://images.livemint.com/img/2020/10/04/600x338/amazon_prime-U20573096912s3B--621x414@LiveMint_1601808481962.JPG',
    site: 'https://www.livemint.com',
    text:
      "More than 20,000 offline retailers, kiranas and local shops from 'Local Shops on Amazon' programme will participate in 'Great Indian Festival' for the first time, selling various items like daily essentials, large appliances and home décor products",
    url:
      'https://www.livemint.com/industry/retail/over-1-lakh-local-shops-kiranas-to-facilitate-amazon-india-s-delivery-this-fest-11601808106855.html',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-04 10:39:01',
    title:
      "Wall Street's top analysts are unanimously bullish on stocks like Amazon and CarMax",
    image:
      'https://image.cnbcfm.com/api/v1/image/104611305-GettyImages-468267204.jpg?v=1601475681',
    site: 'cnbc',
    text:
      "TipRanks analyst ranking service pinpoints Wall Street's best-performing stocks, like Amazon and CarMax.",
    url:
      'https://www.cnbc.com/2020/10/04/analysts-are-bullish-on-stocks-like-amazon-and-carmax.html',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-04 10:02:11',
    title: 'How Amazon Luna is positioned for the cloud gaming arena',
    image:
      'https://cdn.slashgear.com/wp-content/uploads/2020/10/amazon-luna-cloud-1.jpg',
    site: 'https://www.slashgear.com',
    text:
      'With Amazon’s annual hardware event Fall Devices & Services came the announcement of its cloud gaming service, which looks to take on the big guns like Google Stadia, Nvidia GeForce Now, Micro…',
    url:
      'https://www.slashgear.com/how-amazon-luna-is-positioned-for-the-cloud-gaming-arena-04640927/',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-04 10:00:00',
    title: 'Launching an eCommerce site? Take this $20 virtual course first',
    image: 'https://images.mktw.net/im-240179/social',
    site: 'marketwatch',
    text:
      'With coronavirus eCommerce spikes, this course bundle teaches you how to sell',
    url:
      'https://www.marketwatch.com/story/launching-an-ecommerce-site-take-this-20-virtual-course-first-01601677201',
  },
  {
    symbol: 'AMZN',
    publishedDate: '2020-10-04 09:30:00',
    title:
      'The Stock Market’s Leaders Appear Most Vulnerable to Biden’s Tax Plan',
    image: 'https://images.wsj.net/im-234791/social',
    site: 'wsj',
    text:
      'Major U.S. technology sectors could take a disproportionate hit to earnings  from Joe Biden’s tax proposals, analysts say.',
    url:
      'https://www.wsj.com/articles/the-stock-markets-leaders-appear-most-vulnerable-to-bidens-tax-plan-11601803801',
  },
];

export const dummyIntradayData = [
  {
    date: '2020-10-02 16:00:00',
    open: 3127.25,
    low: 3125.28,
    high: 3127.3,
    close: 3125.28,
    volume: 5160757,
  },
  {
    date: '2020-10-02 15:59:00',
    open: 3127.35,
    low: 3126.64,
    high: 3128,
    close: 3127.25,
    volume: 5108347,
  },
  {
    date: '2020-10-02 15:58:00',
    open: 3128.41,
    low: 3126.13,
    high: 3128.57,
    close: 3127.35,
    volume: 5080184,
  },
  {
    date: '2020-10-02 15:57:00',
    open: 3128.44,
    low: 3127.94,
    high: 3130.26,
    close: 3128.41,
    volume: 5050446,
  },
  {
    date: '2020-10-02 15:56:00',
    open: 3131.695,
    low: 3127.8,
    high: 3131.695,
    close: 3128.44,
    volume: 5030208,
  },
  {
    date: '2020-10-02 15:55:00',
    open: 3131.02,
    low: 3130.09,
    high: 3132.28,
    close: 3131.695,
    volume: 4992856,
  },
  {
    date: '2020-10-02 15:54:00',
    open: 3131.79,
    low: 3130.8,
    high: 3132.92,
    close: 3131.02,
    volume: 4976143,
  },
  {
    date: '2020-10-02 15:53:00',
    open: 3134.26,
    low: 3131.45,
    high: 3134.26,
    close: 3131.79,
    volume: 4955149,
  },
  {
    date: '2020-10-02 15:52:00',
    open: 3133.89,
    low: 3133.17,
    high: 3135.12,
    close: 3134.26,
    volume: 4935078,
  },
  {
    date: '2020-10-02 15:51:00',
    open: 3136.84,
    low: 3133.04,
    high: 3136.84,
    close: 3133.89,
    volume: 4920336,
  },
  {
    date: '2020-10-02 15:50:00',
    open: 3137,
    low: 3136.06,
    high: 3138.55,
    close: 3136.84,
    volume: 4893549,
  },
  {
    date: '2020-10-02 15:49:00',
    open: 3137.2424,
    low: 3137,
    high: 3137.47,
    close: 3137,
    volume: 4877020,
  },
  {
    date: '2020-10-02 15:48:00',
    open: 3136.2,
    low: 3135,
    high: 3137.53,
    close: 3137.2424,
    volume: 4867949,
  },
  {
    date: '2020-10-02 15:47:00',
    open: 3137.235,
    low: 3136.2,
    high: 3137.955,
    close: 3136.2,
    volume: 4856677,
  },
  {
    date: '2020-10-02 15:46:00',
    open: 3139.98,
    low: 3137.2,
    high: 3139.98,
    close: 3137.235,
    volume: 4846008,
  },
  {
    date: '2020-10-02 15:45:00',
    open: 3139,
    low: 3138.83,
    high: 3139.98,
    close: 3139.98,
    volume: 4835630,
  },
  {
    date: '2020-10-02 15:44:00',
    open: 3138.155,
    low: 3138.155,
    high: 3140.129,
    close: 3139,
    volume: 4825445,
  },
  {
    date: '2020-10-02 15:43:00',
    open: 3136.25,
    low: 3133.7,
    high: 3138.155,
    close: 3138.155,
    volume: 4811951,
  },
  {
    date: '2020-10-02 15:42:00',
    open: 3139.82,
    low: 3135.98,
    high: 3140.2,
    close: 3136.25,
    volume: 4798635,
  },
  {
    date: '2020-10-02 15:41:00',
    open: 3139.55,
    low: 3138.84,
    high: 3140.13,
    close: 3139.82,
    volume: 4785064,
  },
  {
    date: '2020-10-02 15:40:00',
    open: 3139.33,
    low: 3138.775,
    high: 3140.09,
    close: 3139.55,
    volume: 4775587,
  },
  {
    date: '2020-10-02 15:39:00',
    open: 3141.56,
    low: 3139.33,
    high: 3142.99,
    close: 3139.33,
    volume: 4767494,
  },
  {
    date: '2020-10-02 15:38:00',
    open: 3140.95,
    low: 3140.95,
    high: 3144,
    close: 3141.56,
    volume: 4755351,
  },
  {
    date: '2020-10-02 15:37:00',
    open: 3139.7192,
    low: 3139.7192,
    high: 3141.7,
    close: 3140.95,
    volume: 4740043,
  },
  {
    date: '2020-10-02 15:36:00',
    open: 3138.67,
    low: 3138.66,
    high: 3140,
    close: 3139.7192,
    volume: 4726348,
  },
  {
    date: '2020-10-02 15:35:00',
    open: 3138.2,
    low: 3138.06,
    high: 3139.28,
    close: 3138.67,
    volume: 4716206,
  },
  {
    date: '2020-10-02 15:34:00',
    open: 3135.765,
    low: 3135.765,
    high: 3139.45,
    close: 3138.2,
    volume: 4708644,
  },
  {
    date: '2020-10-02 15:33:00',
    open: 3135.9,
    low: 3132.875,
    high: 3136.185,
    close: 3135.765,
    volume: 4695144,
  },
  {
    date: '2020-10-02 15:32:00',
    open: 3135.83,
    low: 3135.83,
    high: 3137.44,
    close: 3135.9,
    volume: 4684388,
  },
  {
    date: '2020-10-02 15:31:00',
    open: 3135.01,
    low: 3134.25,
    high: 3136.44,
    close: 3135.83,
    volume: 4676984,
  },
  {
    date: '2020-10-02 15:30:00',
    open: 3136.69,
    low: 3135.01,
    high: 3136.69,
    close: 3135.01,
    volume: 4666269,
  },
  {
    date: '2020-10-02 15:29:00',
    open: 3136.97,
    low: 3135.41,
    high: 3136.97,
    close: 3136.69,
    volume: 4660076,
  },
  {
    date: '2020-10-02 15:28:00',
    open: 3136.92,
    low: 3135.2524,
    high: 3138.2,
    close: 3136.97,
    volume: 4654886,
  },
  {
    date: '2020-10-02 15:27:00',
    open: 3137.02,
    low: 3135.44,
    high: 3137.02,
    close: 3136.92,
    volume: 4649358,
  },
  {
    date: '2020-10-02 15:26:00',
    open: 3134.28,
    low: 3134.28,
    high: 3137.98,
    close: 3137.02,
    volume: 4642624,
  },
  {
    date: '2020-10-02 15:25:00',
    open: 3136.42,
    low: 3134.28,
    high: 3136.71,
    close: 3134.28,
    volume: 4637064,
  },
  {
    date: '2020-10-02 15:24:00',
    open: 3137.68,
    low: 3136.01,
    high: 3138.2,
    close: 3136.42,
    volume: 4627895,
  },
  {
    date: '2020-10-02 15:23:00',
    open: 3139.98,
    low: 3136.23,
    high: 3140.14,
    close: 3137.68,
    volume: 4617884,
  },
  {
    date: '2020-10-02 15:22:00',
    open: 3140.8,
    low: 3137.4,
    high: 3140.8,
    close: 3139.98,
    volume: 4609196,
  },
  {
    date: '2020-10-02 15:21:00',
    open: 3138.35,
    low: 3136.91,
    high: 3140.8,
    close: 3140.8,
    volume: 4594108,
  },
  {
    date: '2020-10-02 15:20:00',
    open: 3134.56,
    low: 3134.56,
    high: 3138.35,
    close: 3138.35,
    volume: 4580043,
  },
  {
    date: '2020-10-02 15:19:00',
    open: 3134.62,
    low: 3132.81,
    high: 3134.62,
    close: 3134.56,
    volume: 4567463,
  },
  {
    date: '2020-10-02 15:18:00',
    open: 3134.3474,
    low: 3134.3474,
    high: 3135.495,
    close: 3134.62,
    volume: 4561246,
  },
  {
    date: '2020-10-02 15:17:00',
    open: 3130.6702,
    low: 3130.3098,
    high: 3135,
    close: 3134.3474,
    volume: 4552956,
  },
  {
    date: '2020-10-02 15:16:00',
    open: 3132.11,
    low: 3130.6548,
    high: 3132.11,
    close: 3130.6702,
    volume: 4544364,
  },
  {
    date: '2020-10-02 15:15:00',
    open: 3133,
    low: 3131.51,
    high: 3133,
    close: 3132.11,
    volume: 4535963,
  },
  {
    date: '2020-10-02 15:14:00',
    open: 3134.34,
    low: 3133,
    high: 3134.34,
    close: 3133,
    volume: 4529601,
  },
  {
    date: '2020-10-02 15:13:00',
    open: 3132.71,
    low: 3129.79,
    high: 3136.79,
    close: 3133.18,
    volume: 4522180,
  },
  {
    date: '2020-10-02 15:12:00',
    open: 3137.81,
    low: 3132.71,
    high: 3141.72,
    close: 3132.71,
    volume: 4507391,
  },
  {
    date: '2020-10-02 15:11:00',
    open: 3132.67,
    low: 3132.67,
    high: 3137.925,
    close: 3137.81,
    volume: 4485841,
  },
  {
    date: '2020-10-02 15:10:00',
    open: 3135.45,
    low: 3131.95,
    high: 3135.88,
    close: 3132.67,
    volume: 4477077,
  },
  {
    date: '2020-10-02 15:09:00',
    open: 3137.7,
    low: 3132.45,
    high: 3137.7,
    close: 3135.45,
    volume: 4471724,
  },
  {
    date: '2020-10-02 15:08:00',
    open: 3135.24,
    low: 3135.24,
    high: 3138.33,
    close: 3137.7,
    volume: 4464157,
  },
  {
    date: '2020-10-02 15:07:00',
    open: 3134.71,
    low: 3133.08,
    high: 3136.06,
    close: 3135.24,
    volume: 4458153,
  },
  {
    date: '2020-10-02 15:06:00',
    open: 3137.7,
    low: 3133,
    high: 3137.87,
    close: 3134.71,
    volume: 4452399,
  },
  {
    date: '2020-10-02 15:05:00',
    open: 3135.7,
    low: 3135.63,
    high: 3137.7,
    close: 3137.7,
    volume: 4444233,
  },
  {
    date: '2020-10-02 15:04:00',
    open: 3131.51,
    low: 3131.51,
    high: 3136.06,
    close: 3135.7,
    volume: 4435196,
  },
  {
    date: '2020-10-02 15:03:00',
    open: 3131,
    low: 3129.2,
    high: 3132.125,
    close: 3131.51,
    volume: 4428617,
  },
  {
    date: '2020-10-02 15:02:00',
    open: 3134.55,
    low: 3131,
    high: 3135.2146,
    close: 3131,
    volume: 4421367,
  },
  {
    date: '2020-10-02 15:01:00',
    open: 3136.05,
    low: 3134.55,
    high: 3136.845,
    close: 3134.55,
    volume: 4414470,
  },
  {
    date: '2020-10-02 15:00:00',
    open: 3133.855,
    low: 3133.855,
    high: 3137.16,
    close: 3136.05,
    volume: 4405733,
  },
  {
    date: '2020-10-02 14:59:00',
    open: 3135,
    low: 3133.855,
    high: 3135.98,
    close: 3133.855,
    volume: 4398503,
  },
  {
    date: '2020-10-02 14:58:00',
    open: 3136.3975,
    low: 3134,
    high: 3136.55,
    close: 3135,
    volume: 4392850,
  },
  {
    date: '2020-10-02 14:57:00',
    open: 3137.94,
    low: 3136.17,
    high: 3138.8,
    close: 3136.3975,
    volume: 4384523,
  },
  {
    date: '2020-10-02 14:56:00',
    open: 3131.7,
    low: 3131.7,
    high: 3139,
    close: 3137.94,
    volume: 4377147,
  },
  {
    date: '2020-10-02 14:55:00',
    open: 3130.13,
    low: 3129.47,
    high: 3131.7,
    close: 3131.7,
    volume: 4352536,
  },
  {
    date: '2020-10-02 14:54:00',
    open: 3128.45,
    low: 3127.01,
    high: 3130.13,
    close: 3130.13,
    volume: 4348720,
  },
  {
    date: '2020-10-02 14:53:00',
    open: 3128.01,
    low: 3128.01,
    high: 3128.715,
    close: 3128.45,
    volume: 4338724,
  },
  {
    date: '2020-10-02 14:52:00',
    open: 3129.8,
    low: 3128.01,
    high: 3129.8,
    close: 3128.01,
    volume: 4335306,
  },
  {
    date: '2020-10-02 14:51:00',
    open: 3133.42,
    low: 3129.8,
    high: 3133.42,
    close: 3129.8,
    volume: 4329697,
  },
  {
    date: '2020-10-02 14:50:00',
    open: 3129.42,
    low: 3129.42,
    high: 3133.475,
    close: 3133.42,
    volume: 4322852,
  },
  {
    date: '2020-10-02 14:49:00',
    open: 3132.29,
    low: 3126.25,
    high: 3132.29,
    close: 3129.42,
    volume: 4315309,
  },
  {
    date: '2020-10-02 14:48:00',
    open: 3135.46,
    low: 3131,
    high: 3135.46,
    close: 3132.29,
    volume: 4296396,
  },
  {
    date: '2020-10-02 14:47:00',
    open: 3130.38,
    low: 3129.055,
    high: 3135.905,
    close: 3135.46,
    volume: 4289617,
  },
  {
    date: '2020-10-02 14:46:00',
    open: 3130.01,
    low: 3130.01,
    high: 3130.38,
    close: 3130.38,
    volume: 4280792,
  },
  {
    date: '2020-10-02 14:45:00',
    open: 3133.781,
    low: 3130.01,
    high: 3133.781,
    close: 3130.01,
    volume: 4275900,
  },
  {
    date: '2020-10-02 14:44:00',
    open: 3132.5984,
    low: 3132.055,
    high: 3134.2,
    close: 3133.781,
    volume: 4267282,
  },
  {
    date: '2020-10-02 14:43:00',
    open: 3132.9998,
    low: 3131.52,
    high: 3133,
    close: 3132.5984,
    volume: 4260547,
  },
  {
    date: '2020-10-02 14:42:00',
    open: 3130.0217,
    low: 3127.8,
    high: 3133.09,
    close: 3132.9998,
    volume: 4255901,
  },
  {
    date: '2020-10-02 14:41:00',
    open: 3129.17,
    low: 3129.17,
    high: 3131.08,
    close: 3130.0217,
    volume: 4246814,
  },
  {
    date: '2020-10-02 14:40:00',
    open: 3133.12,
    low: 3129.01,
    high: 3133.12,
    close: 3129.17,
    volume: 4238334,
  },
  {
    date: '2020-10-02 14:39:00',
    open: 3133.175,
    low: 3131.0513,
    high: 3133.175,
    close: 3133.12,
    volume: 4228750,
  },
  {
    date: '2020-10-02 14:38:00',
    open: 3132.79,
    low: 3131.035,
    high: 3133.6099,
    close: 3133.175,
    volume: 4222558,
  },
  {
    date: '2020-10-02 14:37:00',
    open: 3129.55,
    low: 3127.68,
    high: 3132.99,
    close: 3132.79,
    volume: 4217678,
  },
  {
    date: '2020-10-02 14:36:00',
    open: 3132.72,
    low: 3129.34,
    high: 3132.72,
    close: 3129.55,
    volume: 4206343,
  },
  {
    date: '2020-10-02 14:35:00',
    open: 3132.61,
    low: 3131.29,
    high: 3134.48,
    close: 3132.72,
    volume: 4194084,
  },
  {
    date: '2020-10-02 14:34:00',
    open: 3132.63,
    low: 3130,
    high: 3132.63,
    close: 3132.61,
    volume: 4183796,
  },
  {
    date: '2020-10-02 14:33:00',
    open: 3133.3882,
    low: 3131.7,
    high: 3134.35,
    close: 3132.63,
    volume: 4168248,
  },
  {
    date: '2020-10-02 14:32:00',
    open: 3138.91,
    low: 3132.34,
    high: 3138.91,
    close: 3133.3882,
    volume: 4155682,
  },
  {
    date: '2020-10-02 14:31:00',
    open: 3136.29,
    low: 3136.29,
    high: 3138.91,
    close: 3138.91,
    volume: 4137635,
  },
  {
    date: '2020-10-02 14:30:00',
    open: 3137.48,
    low: 3135.49,
    high: 3137.86,
    close: 3136.29,
    volume: 4130166,
  },
  {
    date: '2020-10-02 14:29:00',
    open: 3137.31,
    low: 3137.01,
    high: 3138,
    close: 3137.48,
    volume: 4123743,
  },
  {
    date: '2020-10-02 14:28:00',
    open: 3137.16,
    low: 3136.245,
    high: 3137.31,
    close: 3137.31,
    volume: 4118782,
  },
  {
    date: '2020-10-02 14:27:00',
    open: 3137.1577,
    low: 3136.43,
    high: 3138.24,
    close: 3137.16,
    volume: 4112546,
  },
  {
    date: '2020-10-02 14:26:00',
    open: 3140,
    low: 3137,
    high: 3141.15,
    close: 3137.1577,
    volume: 4108668,
  },
  {
    date: '2020-10-02 14:25:00',
    open: 3141.13,
    low: 3138.94,
    high: 3141.13,
    close: 3140,
    volume: 4099684,
  },
  {
    date: '2020-10-02 14:24:00',
    open: 3139.625,
    low: 3138.51,
    high: 3141.13,
    close: 3141.13,
    volume: 4095616,
  },
  {
    date: '2020-10-02 14:23:00',
    open: 3140,
    low: 3138.48,
    high: 3141.67,
    close: 3139.625,
    volume: 4090626,
  },
  {
    date: '2020-10-02 14:22:00',
    open: 3141.955,
    low: 3140,
    high: 3142.53,
    close: 3140,
    volume: 4084966,
  },
  {
    date: '2020-10-02 14:21:00',
    open: 3141.18,
    low: 3139,
    high: 3142.4546,
    close: 3141.955,
    volume: 4080042,
  },
  {
    date: '2020-10-02 14:20:00',
    open: 3139.5,
    low: 3139,
    high: 3141.18,
    close: 3141.18,
    volume: 4071347,
  },
  {
    date: '2020-10-02 14:19:00',
    open: 3140.515,
    low: 3139.5,
    high: 3142.115,
    close: 3139.5,
    volume: 4065168,
  },
  {
    date: '2020-10-02 14:18:00',
    open: 3142.7,
    low: 3140.11,
    high: 3142.7,
    close: 3140.515,
    volume: 4057285,
  },
  {
    date: '2020-10-02 14:17:00',
    open: 3142.155,
    low: 3142.155,
    high: 3142.7,
    close: 3142.7,
    volume: 4048480,
  },
  {
    date: '2020-10-02 14:16:00',
    open: 3141.055,
    low: 3141.055,
    high: 3142.155,
    close: 3142.155,
    volume: 4034629,
  },
  {
    date: '2020-10-02 14:15:00',
    open: 3141.64,
    low: 3141.055,
    high: 3142.12,
    close: 3141.055,
    volume: 4028941,
  },
  {
    date: '2020-10-02 14:14:00',
    open: 3148.53,
    low: 3141.595,
    high: 3149.06,
    close: 3141.64,
    volume: 4019673,
  },
  {
    date: '2020-10-02 14:13:00',
    open: 3148.7573,
    low: 3148.27,
    high: 3149.98,
    close: 3148.53,
    volume: 4009974,
  },
  {
    date: '2020-10-02 14:12:00',
    open: 3147.1,
    low: 3147.1,
    high: 3148.7573,
    close: 3148.7573,
    volume: 4002960,
  },
  {
    date: '2020-10-02 14:11:00',
    open: 3148.1,
    low: 3146.78,
    high: 3148.1,
    close: 3147.1,
    volume: 3997395,
  },
  {
    date: '2020-10-02 14:10:00',
    open: 3147.07,
    low: 3147.07,
    high: 3149.09,
    close: 3148.1,
    volume: 3992605,
  },
  {
    date: '2020-10-02 14:09:00',
    open: 3148.43,
    low: 3147.07,
    high: 3149.3552,
    close: 3147.07,
    volume: 3986596,
  },
  {
    date: '2020-10-02 14:08:00',
    open: 3150.65,
    low: 3148.43,
    high: 3151.28,
    close: 3148.43,
    volume: 3979922,
  },
  {
    date: '2020-10-02 14:07:00',
    open: 3149.455,
    low: 3148.26,
    high: 3151.01,
    close: 3150.65,
    volume: 3975443,
  },
  {
    date: '2020-10-02 14:06:00',
    open: 3147.135,
    low: 3147.135,
    high: 3149.98,
    close: 3149.455,
    volume: 3961536,
  },
  {
    date: '2020-10-02 14:05:00',
    open: 3149,
    low: 3147.135,
    high: 3149,
    close: 3147.135,
    volume: 3954287,
  },
  {
    date: '2020-10-02 14:04:00',
    open: 3148.6,
    low: 3146.56,
    high: 3149,
    close: 3149,
    volume: 3947469,
  },
  {
    date: '2020-10-02 14:03:00',
    open: 3147.13,
    low: 3147.13,
    high: 3148.6,
    close: 3148.6,
    volume: 3939507,
  },
  {
    date: '2020-10-02 14:02:00',
    open: 3145.4,
    low: 3145.37,
    high: 3146.6,
    close: 3146.6,
    volume: 3934256,
  },
  {
    date: '2020-10-02 14:01:00',
    open: 3142.4,
    low: 3142.4,
    high: 3146.17,
    close: 3145.4,
    volume: 3930148,
  },
  {
    date: '2020-10-02 14:00:00',
    open: 3143.09,
    low: 3142.4,
    high: 3146.23,
    close: 3142.4,
    volume: 3924294,
  },
  {
    date: '2020-10-02 13:59:00',
    open: 3142,
    low: 3140.38,
    high: 3143.09,
    close: 3143.09,
    volume: 3913156,
  },
  {
    date: '2020-10-02 13:58:00',
    open: 3141.31,
    low: 3140.316,
    high: 3142,
    close: 3142,
    volume: 3910246,
  },
  {
    date: '2020-10-02 13:57:00',
    open: 3139.96,
    low: 3139.12,
    high: 3141.49,
    close: 3141.31,
    volume: 3906102,
  },
  {
    date: '2020-10-02 13:56:00',
    open: 3142.71,
    low: 3139,
    high: 3142.71,
    close: 3139.96,
    volume: 3902279,
  },
  {
    date: '2020-10-02 13:55:00',
    open: 3141.1248,
    low: 3141.1248,
    high: 3142.71,
    close: 3142.71,
    volume: 3893371,
  },
  {
    date: '2020-10-02 13:54:00',
    open: 3140.98,
    low: 3140.89,
    high: 3141.1248,
    close: 3141.1248,
    volume: 3888670,
  },
  {
    date: '2020-10-02 13:53:00',
    open: 3138,
    low: 3138,
    high: 3140.98,
    close: 3140.98,
    volume: 3883357,
  },
  {
    date: '2020-10-02 13:52:00',
    open: 3136.47,
    low: 3136.47,
    high: 3138.12,
    close: 3138,
    volume: 3876892,
  },
  {
    date: '2020-10-02 13:51:00',
    open: 3138.385,
    low: 3136.47,
    high: 3139.105,
    close: 3136.47,
    volume: 3871212,
  },
  {
    date: '2020-10-02 13:50:00',
    open: 3141.08,
    low: 3138.385,
    high: 3141.13,
    close: 3138.385,
    volume: 3861027,
  },
  {
    date: '2020-10-02 13:49:00',
    open: 3141.8699,
    low: 3140.46,
    high: 3141.8699,
    close: 3141.08,
    volume: 3854335,
  },
  {
    date: '2020-10-02 13:48:00',
    open: 3138.76,
    low: 3138.6,
    high: 3143.35,
    close: 3141.8699,
    volume: 3850549,
  },
  {
    date: '2020-10-02 13:47:00',
    open: 3140.79,
    low: 3138.24,
    high: 3140.79,
    close: 3138.76,
    volume: 3841985,
  },
  {
    date: '2020-10-02 13:46:00',
    open: 3139.93,
    low: 3139,
    high: 3141.39,
    close: 3140.79,
    volume: 3834665,
  },
  {
    date: '2020-10-02 13:45:00',
    open: 3138.61,
    low: 3138.53,
    high: 3140.4275,
    close: 3139.93,
    volume: 3827091,
  },
  {
    date: '2020-10-02 13:44:00',
    open: 3140.01,
    low: 3138.61,
    high: 3142.3098,
    close: 3138.61,
    volume: 3821236,
  },
  {
    date: '2020-10-02 13:43:00',
    open: 3140.365,
    low: 3140,
    high: 3141.59,
    close: 3140.01,
    volume: 3811773,
  },
  {
    date: '2020-10-02 13:42:00',
    open: 3140.78,
    low: 3139.605,
    high: 3142.58,
    close: 3140.365,
    volume: 3805502,
  },
  {
    date: '2020-10-02 13:41:00',
    open: 3148.12,
    low: 3140,
    high: 3148.73,
    close: 3140.78,
    volume: 3793606,
  },
  {
    date: '2020-10-02 13:40:00',
    open: 3147.13,
    low: 3146.7,
    high: 3148.12,
    close: 3148.12,
    volume: 3772191,
  },
  {
    date: '2020-10-02 13:39:00',
    open: 3146.82,
    low: 3146.82,
    high: 3147.13,
    close: 3147.13,
    volume: 3769298,
  },
  {
    date: '2020-10-02 13:38:00',
    open: 3147.56,
    low: 3146.82,
    high: 3148.75,
    close: 3146.82,
    volume: 3766232,
  },
  {
    date: '2020-10-02 13:37:00',
    open: 3147.75,
    low: 3147.56,
    high: 3147.75,
    close: 3147.56,
    volume: 3760121,
  },
  {
    date: '2020-10-02 13:36:00',
    open: 3143.994,
    low: 3143.52,
    high: 3147.98,
    close: 3147.75,
    volume: 3758434,
  },
  {
    date: '2020-10-02 13:35:00',
    open: 3143.71,
    low: 3143.71,
    high: 3146,
    close: 3143.994,
    volume: 3749692,
  },
  {
    date: '2020-10-02 13:34:00',
    open: 3146.03,
    low: 3143.71,
    high: 3147.89,
    close: 3143.71,
    volume: 3743074,
  },
  {
    date: '2020-10-02 13:33:00',
    open: 3149.19,
    low: 3145.14,
    high: 3149.428,
    close: 3146.03,
    volume: 3739278,
  },
  {
    date: '2020-10-02 13:32:00',
    open: 3148.98,
    low: 3148.98,
    high: 3152.88,
    close: 3149.19,
    volume: 3732941,
  },
  {
    date: '2020-10-02 13:31:00',
    open: 3147.865,
    low: 3146.78,
    high: 3148.99,
    close: 3148.98,
    volume: 3721308,
  },
  {
    date: '2020-10-02 13:30:00',
    open: 3146.555,
    low: 3146.555,
    high: 3148.487,
    close: 3147.865,
    volume: 3714731,
  },
  {
    date: '2020-10-02 13:29:00',
    open: 3148.126,
    low: 3143.94,
    high: 3148.126,
    close: 3146.555,
    volume: 3710490,
  },
  {
    date: '2020-10-02 13:28:00',
    open: 3149.76,
    low: 3147.91,
    high: 3150.53,
    close: 3148.126,
    volume: 3701543,
  },
  {
    date: '2020-10-02 13:27:00',
    open: 3146.89,
    low: 3145.92,
    high: 3149.76,
    close: 3149.76,
    volume: 3694281,
  },
  {
    date: '2020-10-02 13:26:00',
    open: 3147.4,
    low: 3146.1018,
    high: 3147.5298,
    close: 3146.89,
    volume: 3683181,
  },
  {
    date: '2020-10-02 13:25:00',
    open: 3144.86,
    low: 3144.74,
    high: 3147.4202,
    close: 3147.4,
    volume: 3674738,
  },
  {
    date: '2020-10-02 13:24:00',
    open: 3143,
    low: 3142.48,
    high: 3144.91,
    close: 3144.86,
    volume: 3664840,
  },
  {
    date: '2020-10-02 13:23:00',
    open: 3143.29,
    low: 3141.59,
    high: 3143.355,
    close: 3143,
    volume: 3657975,
  },
  {
    date: '2020-10-02 13:22:00',
    open: 3143.62,
    low: 3143.29,
    high: 3144.99,
    close: 3143.29,
    volume: 3651937,
  },
  {
    date: '2020-10-02 13:21:00',
    open: 3142.2307,
    low: 3141,
    high: 3143.62,
    close: 3143.62,
    volume: 3643959,
  },
  {
    date: '2020-10-02 13:20:00',
    open: 3136.01,
    low: 3136.01,
    high: 3142.2307,
    close: 3142.2307,
    volume: 3635953,
  },
  {
    date: '2020-10-02 13:19:00',
    open: 3139.76,
    low: 3135.75,
    high: 3139.76,
    close: 3136.01,
    volume: 3626198,
  },
  {
    date: '2020-10-02 13:18:00',
    open: 3140.86,
    low: 3139.76,
    high: 3140.86,
    close: 3139.76,
    volume: 3614234,
  },
  {
    date: '2020-10-02 13:17:00',
    open: 3139.63,
    low: 3138.705,
    high: 3140.86,
    close: 3140.86,
    volume: 3611552,
  },
  {
    date: '2020-10-02 13:16:00',
    open: 3142.23,
    low: 3139.18,
    high: 3142.23,
    close: 3139.63,
    volume: 3607559,
  },
  {
    date: '2020-10-02 13:15:00',
    open: 3141.155,
    low: 3141.155,
    high: 3143.99,
    close: 3142.23,
    volume: 3601857,
  },
  {
    date: '2020-10-02 13:14:00',
    open: 3136.36,
    low: 3136.36,
    high: 3141.155,
    close: 3141.155,
    volume: 3595376,
  },
  {
    date: '2020-10-02 13:13:00',
    open: 3145.4,
    low: 3136.36,
    high: 3145.4,
    close: 3136.36,
    volume: 3585707,
  },
  {
    date: '2020-10-02 13:12:00',
    open: 3145.94,
    low: 3145.4,
    high: 3146.03,
    close: 3145.4,
    volume: 3574318,
  },
  {
    date: '2020-10-02 13:11:00',
    open: 3141.61,
    low: 3141.61,
    high: 3146.68,
    close: 3145.94,
    volume: 3569568,
  },
  {
    date: '2020-10-02 13:10:00',
    open: 3141.5862,
    low: 3141.5862,
    high: 3143.54,
    close: 3141.61,
    volume: 3563269,
  },
  {
    date: '2020-10-02 13:09:00',
    open: 3137.7,
    low: 3137.7,
    high: 3141.5862,
    close: 3141.5862,
    volume: 3556247,
  },
  {
    date: '2020-10-02 13:08:00',
    open: 3137.59,
    low: 3137.19,
    high: 3139.264,
    close: 3137.7,
    volume: 3549429,
  },
  {
    date: '2020-10-02 13:07:00',
    open: 3136.9624,
    low: 3136.22,
    high: 3137.59,
    close: 3137.59,
    volume: 3542229,
  },
  {
    date: '2020-10-02 13:06:00',
    open: 3140.32,
    low: 3136.36,
    high: 3140.32,
    close: 3136.9624,
    volume: 3531648,
  },
  {
    date: '2020-10-02 13:05:00',
    open: 3142.41,
    low: 3140.32,
    high: 3143,
    close: 3140.32,
    volume: 3509012,
  },
  {
    date: '2020-10-02 13:04:00',
    open: 3141.53,
    low: 3139.01,
    high: 3142.41,
    close: 3142.41,
    volume: 3501390,
  },
  {
    date: '2020-10-02 13:03:00',
    open: 3142.215,
    low: 3141.53,
    high: 3145.2383,
    close: 3141.53,
    volume: 3483862,
  },
  {
    date: '2020-10-02 13:02:00',
    open: 3145.575,
    low: 3140.681,
    high: 3145.575,
    close: 3142.215,
    volume: 3476980,
  },
  {
    date: '2020-10-02 13:01:00',
    open: 3144.62,
    low: 3144.62,
    high: 3145.78,
    close: 3145.575,
    volume: 3465748,
  },
  {
    date: '2020-10-02 13:00:00',
    open: 3147.12,
    low: 3142.56,
    high: 3147.12,
    close: 3144.62,
    volume: 3460380,
  },
  {
    date: '2020-10-02 12:59:00',
    open: 3147.92,
    low: 3147.12,
    high: 3149.66,
    close: 3147.12,
    volume: 3446340,
  },
  {
    date: '2020-10-02 12:58:00',
    open: 3146.36,
    low: 3146.36,
    high: 3150.39,
    close: 3147.92,
    volume: 3441078,
  },
  {
    date: '2020-10-02 12:57:00',
    open: 3148.99,
    low: 3146.19,
    high: 3148.99,
    close: 3146.36,
    volume: 3434007,
  },
  {
    date: '2020-10-02 12:56:00',
    open: 3149.16,
    low: 3148.15,
    high: 3149.16,
    close: 3148.99,
    volume: 3425976,
  },
  {
    date: '2020-10-02 12:55:00',
    open: 3146.43,
    low: 3146.43,
    high: 3149.71,
    close: 3149.16,
    volume: 3419235,
  },
  {
    date: '2020-10-02 12:54:00',
    open: 3151.5,
    low: 3146.43,
    high: 3151.5,
    close: 3146.43,
    volume: 3414380,
  },
  {
    date: '2020-10-02 12:53:00',
    open: 3148.485,
    low: 3148.485,
    high: 3151.5,
    close: 3151.5,
    volume: 3409027,
  },
  {
    date: '2020-10-02 12:52:00',
    open: 3147.03,
    low: 3147.03,
    high: 3148.485,
    close: 3148.485,
    volume: 3405053,
  },
  {
    date: '2020-10-02 12:51:00',
    open: 3151.46,
    low: 3143.39,
    high: 3151.46,
    close: 3145.85,
    volume: 3401940,
  },
  {
    date: '2020-10-02 12:50:00',
    open: 3148.89,
    low: 3148.89,
    high: 3152.23,
    close: 3151.46,
    volume: 3392706,
  },
  {
    date: '2020-10-02 12:49:00',
    open: 3151.25,
    low: 3147.9685,
    high: 3151.87,
    close: 3148.89,
    volume: 3388275,
  },
  {
    date: '2020-10-02 12:48:00',
    open: 3149.7908,
    low: 3149.7908,
    high: 3151.52,
    close: 3151.25,
    volume: 3381091,
  },
  {
    date: '2020-10-02 12:47:00',
    open: 3151.99,
    low: 3149.7908,
    high: 3153.94,
    close: 3149.7908,
    volume: 3377028,
  },
  {
    date: '2020-10-02 12:46:00',
    open: 3152.64,
    low: 3149.77,
    high: 3154.47,
    close: 3151.99,
    volume: 3368492,
  },
  {
    date: '2020-10-02 12:45:00',
    open: 3153.2,
    low: 3151.9,
    high: 3153.64,
    close: 3152.64,
    volume: 3357268,
  },
  {
    date: '2020-10-02 12:44:00',
    open: 3150.2,
    low: 3150.2,
    high: 3154.04,
    close: 3153.2,
    volume: 3353662,
  },
  {
    date: '2020-10-02 12:43:00',
    open: 3153.44,
    low: 3150.2,
    high: 3153.793,
    close: 3150.2,
    volume: 3342485,
  },
  {
    date: '2020-10-02 12:42:00',
    open: 3154.52,
    low: 3153,
    high: 3154.52,
    close: 3153.44,
    volume: 3334661,
  },
  {
    date: '2020-10-02 12:41:00',
    open: 3157,
    low: 3154.2,
    high: 3157,
    close: 3154.52,
    volume: 3328704,
  },
  {
    date: '2020-10-02 12:40:00',
    open: 3155.1,
    low: 3154.25,
    high: 3157,
    close: 3157,
    volume: 3316587,
  },
  {
    date: '2020-10-02 12:39:00',
    open: 3152.01,
    low: 3152.01,
    high: 3155.1,
    close: 3155.1,
    volume: 3306022,
  },
  {
    date: '2020-10-02 12:38:00',
    open: 3149.89,
    low: 3149.5647,
    high: 3152.8699,
    close: 3152.01,
    volume: 3292971,
  },
  {
    date: '2020-10-02 12:37:00',
    open: 3148.5999,
    low: 3145.08,
    high: 3149.89,
    close: 3149.89,
    volume: 3284389,
  },
  {
    date: '2020-10-02 12:36:00',
    open: 3146.22,
    low: 3144.5798,
    high: 3148.5999,
    close: 3148.5999,
    volume: 3275578,
  },
  {
    date: '2020-10-02 12:35:00',
    open: 3145.56,
    low: 3144.245,
    high: 3147.4,
    close: 3146.22,
    volume: 3268107,
  },
  {
    date: '2020-10-02 12:34:00',
    open: 3144.51,
    low: 3140.93,
    high: 3146.21,
    close: 3145.56,
    volume: 3256490,
  },
  {
    date: '2020-10-02 12:33:00',
    open: 3147.47,
    low: 3143.19,
    high: 3148.895,
    close: 3144.51,
    volume: 3244627,
  },
  {
    date: '2020-10-02 12:32:00',
    open: 3157.505,
    low: 3147.47,
    high: 3157.505,
    close: 3147.47,
    volume: 3227744,
  },
  {
    date: '2020-10-02 12:31:00',
    open: 3154.655,
    low: 3154.37,
    high: 3159.57,
    close: 3157.505,
    volume: 3210526,
  },
  {
    date: '2020-10-02 12:30:00',
    open: 3157.205,
    low: 3154.395,
    high: 3157.205,
    close: 3154.655,
    volume: 3199232,
  },
  {
    date: '2020-10-02 12:29:00',
    open: 3159.68,
    low: 3156.17,
    high: 3159.876,
    close: 3157.205,
    volume: 3185060,
  },
  {
    date: '2020-10-02 12:28:00',
    open: 3158.41,
    low: 3156.56,
    high: 3160.29,
    close: 3159.68,
    volume: 3174867,
  },
  {
    date: '2020-10-02 12:27:00',
    open: 3156.005,
    low: 3154.56,
    high: 3160.03,
    close: 3158.41,
    volume: 3165460,
  },
  {
    date: '2020-10-02 12:26:00',
    open: 3156.02,
    low: 3155.04,
    high: 3156.12,
    close: 3156.005,
    volume: 3146003,
  },
  {
    date: '2020-10-02 12:25:00',
    open: 3157.19,
    low: 3153.33,
    high: 3158.06,
    close: 3156.02,
    volume: 3135483,
  },
  {
    date: '2020-10-02 12:24:00',
    open: 3155.925,
    low: 3155.925,
    high: 3158.56,
    close: 3157.19,
    volume: 3121680,
  },
  {
    date: '2020-10-02 12:23:00',
    open: 3157.87,
    low: 3155.925,
    high: 3158.38,
    close: 3155.925,
    volume: 3111931,
  },
  {
    date: '2020-10-02 12:22:00',
    open: 3159.83,
    low: 3157.12,
    high: 3160.395,
    close: 3157.87,
    volume: 3099419,
  },
  {
    date: '2020-10-02 12:21:00',
    open: 3159.84,
    low: 3157.94,
    high: 3161.95,
    close: 3159.83,
    volume: 3086950,
  },
  {
    date: '2020-10-02 12:20:00',
    open: 3156.42,
    low: 3156.01,
    high: 3160.48,
    close: 3159.84,
    volume: 3063440,
  },
  {
    date: '2020-10-02 12:19:00',
    open: 3153.8,
    low: 3153.8,
    high: 3160.05,
    close: 3156.42,
    volume: 3041823,
  },
  {
    date: '2020-10-02 12:18:00',
    open: 3154.895,
    low: 3151.48,
    high: 3156.41,
    close: 3153.8,
    volume: 3010144,
  },
  {
    date: '2020-10-02 12:17:00',
    open: 3151.36,
    low: 3151.36,
    high: 3156.67,
    close: 3154.895,
    volume: 2988706,
  },
  {
    date: '2020-10-02 12:16:00',
    open: 3152.36,
    low: 3147.15,
    high: 3152.36,
    close: 3151.36,
    volume: 2963476,
  },
  {
    date: '2020-10-02 12:15:00',
    open: 3153.4,
    low: 3151.65,
    high: 3155.555,
    close: 3152.36,
    volume: 2937188,
  },
  {
    date: '2020-10-02 12:14:00',
    open: 3148.39,
    low: 3144.32,
    high: 3153.4,
    close: 3153.4,
    volume: 2894752,
  },
  {
    date: '2020-10-02 12:13:00',
    open: 3143.56,
    low: 3142.47,
    high: 3148.39,
    close: 3148.39,
    volume: 2879377,
  },
  {
    date: '2020-10-02 12:12:00',
    open: 3143,
    low: 3143,
    high: 3145.4563,
    close: 3143.56,
    volume: 2853686,
  },
  {
    date: '2020-10-02 12:11:00',
    open: 3139.5637,
    low: 3139.335,
    high: 3144.98,
    close: 3143,
    volume: 2830270,
  },
  {
    date: '2020-10-02 12:10:00',
    open: 3138.49,
    low: 3137.57,
    high: 3139.74,
    close: 3139.5637,
    volume: 2807640,
  },
  {
    date: '2020-10-02 12:09:00',
    open: 3134.8,
    low: 3134.8,
    high: 3139.99,
    close: 3138.49,
    volume: 2781896,
  },
  {
    date: '2020-10-02 12:08:00',
    open: 3132.255,
    low: 3129.59,
    high: 3134.8,
    close: 3134.8,
    volume: 2749545,
  },
  {
    date: '2020-10-02 12:07:00',
    open: 3126.31,
    low: 3125,
    high: 3132.255,
    close: 3132.255,
    volume: 2723470,
  },
  {
    date: '2020-10-02 12:06:00',
    open: 3128.93,
    low: 3123.71,
    high: 3128.93,
    close: 3126.31,
    volume: 2686542,
  },
  {
    date: '2020-10-02 12:05:00',
    open: 3130.97,
    low: 3128,
    high: 3133.22,
    close: 3128.93,
    volume: 2650878,
  },
  {
    date: '2020-10-02 12:04:00',
    open: 3132.22,
    low: 3130.97,
    high: 3134.22,
    close: 3130.97,
    volume: 2626474,
  },
  {
    date: '2020-10-02 12:03:00',
    open: 3130.51,
    low: 3130,
    high: 3133.95,
    close: 3132.22,
    volume: 2606489,
  },
  {
    date: '2020-10-02 12:02:00',
    open: 3139.205,
    low: 3130.41,
    high: 3139.205,
    close: 3130.51,
    volume: 2584221,
  },
  {
    date: '2020-10-02 12:01:00',
    open: 3140.32,
    low: 3138.11,
    high: 3140.32,
    close: 3139.205,
    volume: 2545614,
  },
  {
    date: '2020-10-02 12:00:00',
    open: 3144.555,
    low: 3140.32,
    high: 3145.33,
    close: 3140.32,
    volume: 2519194,
  },
  {
    date: '2020-10-02 11:59:00',
    open: 3141.46,
    low: 3141.46,
    high: 3144.555,
    close: 3144.555,
    volume: 2495186,
  },
  {
    date: '2020-10-02 11:58:00',
    open: 3143.005,
    low: 3141.46,
    high: 3144.57,
    close: 3141.46,
    volume: 2482405,
  },
  {
    date: '2020-10-02 11:57:00',
    open: 3145.07,
    low: 3141.12,
    high: 3147.1213,
    close: 3143.005,
    volume: 2468095,
  },
  {
    date: '2020-10-02 11:56:00',
    open: 3145,
    low: 3143.73,
    high: 3147.375,
    close: 3145.07,
    volume: 2448980,
  },
  {
    date: '2020-10-02 11:55:00',
    open: 3149.35,
    low: 3145,
    high: 3149.35,
    close: 3145,
    volume: 2430408,
  },
  {
    date: '2020-10-02 11:54:00',
    open: 3155.73,
    low: 3149.35,
    high: 3155.73,
    close: 3149.35,
    volume: 2405194,
  },
  {
    date: '2020-10-02 11:53:00',
    open: 3155.8,
    low: 3154.7,
    high: 3157.51,
    close: 3155.73,
    volume: 2378273,
  },
  {
    date: '2020-10-02 11:52:00',
    open: 3157.56,
    low: 3155.8,
    high: 3159.81,
    close: 3155.8,
    volume: 2369262,
  },
  {
    date: '2020-10-02 11:51:00',
    open: 3157.1504,
    low: 3156.14,
    high: 3160.62,
    close: 3157.56,
    volume: 2360880,
  },
  {
    date: '2020-10-02 11:50:00',
    open: 3159.52,
    low: 3156.87,
    high: 3159.52,
    close: 3157.1504,
    volume: 2348869,
  },
  {
    date: '2020-10-02 11:49:00',
    open: 3158.596,
    low: 3158.39,
    high: 3160.089,
    close: 3159.52,
    volume: 2338954,
  },
  {
    date: '2020-10-02 11:48:00',
    open: 3158.605,
    low: 3157.51,
    high: 3159.15,
    close: 3158.596,
    volume: 2331475,
  },
  {
    date: '2020-10-02 11:47:00',
    open: 3160.74,
    low: 3158.605,
    high: 3160.74,
    close: 3158.605,
    volume: 2320004,
  },
  {
    date: '2020-10-02 11:46:00',
    open: 3159.7,
    low: 3156.1401,
    high: 3160.74,
    close: 3160.74,
    volume: 2310400,
  },
  {
    date: '2020-10-02 11:45:00',
    open: 3157.13,
    low: 3157.13,
    high: 3160.74,
    close: 3159.7,
    volume: 2296809,
  },
  {
    date: '2020-10-02 11:44:00',
    open: 3155.7,
    low: 3155.7,
    high: 3159.88,
    close: 3157.13,
    volume: 2284861,
  },
  {
    date: '2020-10-02 11:43:00',
    open: 3152.555,
    low: 3152.555,
    high: 3158.46,
    close: 3155.7,
    volume: 2262034,
  },
  {
    date: '2020-10-02 11:42:00',
    open: 3153.56,
    low: 3152.16,
    high: 3155,
    close: 3152.555,
    volume: 2250997,
  },
  {
    date: '2020-10-02 11:41:00',
    open: 3152,
    low: 3152,
    high: 3156.47,
    close: 3152.01,
    volume: 2239291,
  },
  {
    date: '2020-10-02 11:40:00',
    open: 3155.445,
    low: 3152,
    high: 3155.99,
    close: 3152,
    volume: 2219603,
  },
  {
    date: '2020-10-02 11:39:00',
    open: 3154.3,
    low: 3152.07,
    high: 3155.445,
    close: 3155.445,
    volume: 2200750,
  },
  {
    date: '2020-10-02 11:38:00',
    open: 3158.04,
    low: 3154.3,
    high: 3159.5,
    close: 3154.3,
    volume: 2185919,
  },
  {
    date: '2020-10-02 11:37:00',
    open: 3158.11,
    low: 3155.01,
    high: 3159.76,
    close: 3158.04,
    volume: 2169641,
  },
  {
    date: '2020-10-02 11:36:00',
    open: 3157.06,
    low: 3156.665,
    high: 3158.67,
    close: 3158.11,
    volume: 2147513,
  },
  {
    date: '2020-10-02 11:35:00',
    open: 3157.765,
    low: 3157.06,
    high: 3159.285,
    close: 3157.06,
    volume: 2128622,
  },
  {
    date: '2020-10-02 11:34:00',
    open: 3162.04,
    low: 3157.62,
    high: 3162.04,
    close: 3157.765,
    volume: 2105304,
  },
  {
    date: '2020-10-02 11:33:00',
    open: 3161.9,
    low: 3158.89,
    high: 3162.28,
    close: 3162.04,
    volume: 2083332,
  },
  {
    date: '2020-10-02 11:32:00',
    open: 3163.56,
    low: 3161.9,
    high: 3165.65,
    close: 3161.9,
    volume: 2057531,
  },
  {
    date: '2020-10-02 11:31:00',
    open: 3171.44,
    low: 3163.56,
    high: 3171.44,
    close: 3163.56,
    volume: 2035947,
  },
  {
    date: '2020-10-02 11:30:00',
    open: 3171.735,
    low: 3171.44,
    high: 3172.89,
    close: 3171.44,
    volume: 1998472,
  },
  {
    date: '2020-10-02 11:29:00',
    open: 3173.22,
    low: 3171.735,
    high: 3173.22,
    close: 3171.735,
    volume: 1990290,
  },
  {
    date: '2020-10-02 11:28:00',
    open: 3172,
    low: 3171.68,
    high: 3173.84,
    close: 3173.22,
    volume: 1985422,
  },
  {
    date: '2020-10-02 11:27:00',
    open: 3176,
    low: 3172,
    high: 3176,
    close: 3172,
    volume: 1980236,
  },
  {
    date: '2020-10-02 11:26:00',
    open: 3175.5,
    low: 3173.58,
    high: 3176,
    close: 3176,
    volume: 1965117,
  },
  {
    date: '2020-10-02 11:25:00',
    open: 3177.28,
    low: 3174.7,
    high: 3177.28,
    close: 3175.5,
    volume: 1949821,
  },
  {
    date: '2020-10-02 11:24:00',
    open: 3179.11,
    low: 3177.28,
    high: 3179.11,
    close: 3177.28,
    volume: 1935810,
  },
  {
    date: '2020-10-02 11:23:00',
    open: 3179.6917,
    low: 3179.11,
    high: 3179.6917,
    close: 3179.11,
    volume: 1929259,
  },
  {
    date: '2020-10-02 11:22:00',
    open: 3182.1963,
    low: 3178.32,
    high: 3182.1963,
    close: 3179.6917,
    volume: 1927459,
  },
  {
    date: '2020-10-02 11:21:00',
    open: 3183.8816,
    low: 3180.36,
    high: 3183.8816,
    close: 3182.1963,
    volume: 1918568,
  },
  {
    date: '2020-10-02 11:20:00',
    open: 3176.385,
    low: 3176.385,
    high: 3184.2417,
    close: 3183.8816,
    volume: 1909985,
  },
  {
    date: '2020-10-02 11:19:00',
    open: 3180.65,
    low: 3176.12,
    high: 3180.65,
    close: 3176.385,
    volume: 1894377,
  },
  {
    date: '2020-10-02 11:18:00',
    open: 3178.59,
    low: 3176.49,
    high: 3180.65,
    close: 3180.65,
    volume: 1887821,
  },
  {
    date: '2020-10-02 11:17:00',
    open: 3177.34,
    low: 3177.34,
    high: 3178.68,
    close: 3178.59,
    volume: 1880854,
  },
  {
    date: '2020-10-02 11:16:00',
    open: 3177.815,
    low: 3176.54,
    high: 3179.615,
    close: 3177.34,
    volume: 1873259,
  },
  {
    date: '2020-10-02 11:15:00',
    open: 3177.99,
    low: 3177.51,
    high: 3178.7864,
    close: 3177.815,
    volume: 1860228,
  },
  {
    date: '2020-10-02 11:14:00',
    open: 3180,
    low: 3177.4666,
    high: 3180.14,
    close: 3177.99,
    volume: 1854299,
  },
  {
    date: '2020-10-02 11:13:00',
    open: 3180.7,
    low: 3180,
    high: 3180.87,
    close: 3180,
    volume: 1845663,
  },
  {
    date: '2020-10-02 11:12:00',
    open: 3181.145,
    low: 3180,
    high: 3181.145,
    close: 3180.7,
    volume: 1842505,
  },
  {
    date: '2020-10-02 11:11:00',
    open: 3181.9,
    low: 3181.0518,
    high: 3182.2737,
    close: 3181.145,
    volume: 1836986,
  },
  {
    date: '2020-10-02 11:10:00',
    open: 3179.17,
    low: 3179.17,
    high: 3185,
    close: 3181.9,
    volume: 1833624,
  },
  {
    date: '2020-10-02 11:09:00',
    open: 3178.86,
    low: 3178.86,
    high: 3179.405,
    close: 3179.17,
    volume: 1826930,
  },
  {
    date: '2020-10-02 11:08:00',
    open: 3179.62,
    low: 3178.38,
    high: 3179.62,
    close: 3178.86,
    volume: 1823488,
  },
  {
    date: '2020-10-02 11:07:00',
    open: 3176.952,
    low: 3176.952,
    high: 3181.51,
    close: 3179.62,
    volume: 1819519,
  },
  {
    date: '2020-10-02 11:06:00',
    open: 3180.58,
    low: 3173.03,
    high: 3180.58,
    close: 3176.952,
    volume: 1812101,
  },
  {
    date: '2020-10-02 11:05:00',
    open: 3183.9536,
    low: 3180.58,
    high: 3184.67,
    close: 3180.58,
    volume: 1787722,
  },
  {
    date: '2020-10-02 11:04:00',
    open: 3184.15,
    low: 3183.04,
    high: 3184.565,
    close: 3183.9536,
    volume: 1776167,
  },
  {
    date: '2020-10-02 11:03:00',
    open: 3179.08,
    low: 3179.08,
    high: 3184.15,
    close: 3184.15,
    volume: 1772964,
  },
  {
    date: '2020-10-02 11:02:00',
    open: 3180.05,
    low: 3178.725,
    high: 3180.855,
    close: 3179.08,
    volume: 1768851,
  },
  {
    date: '2020-10-02 11:01:00',
    open: 3185.57,
    low: 3179.31,
    high: 3185.57,
    close: 3180.05,
    volume: 1762727,
  },
  {
    date: '2020-10-02 11:00:00',
    open: 3185.38,
    low: 3185.38,
    high: 3186,
    close: 3185.57,
    volume: 1748692,
  },
  {
    date: '2020-10-02 10:59:00',
    open: 3184.7,
    low: 3183.97,
    high: 3185.38,
    close: 3185.38,
    volume: 1742925,
  },
  {
    date: '2020-10-02 10:58:00',
    open: 3185,
    low: 3184.7,
    high: 3186,
    close: 3184.7,
    volume: 1738501,
  },
  {
    date: '2020-10-02 10:57:00',
    open: 3183.59,
    low: 3183.091,
    high: 3185,
    close: 3185,
    volume: 1733745,
  },
  {
    date: '2020-10-02 10:56:00',
    open: 3178.1301,
    low: 3177.69,
    high: 3184,
    close: 3183.59,
    volume: 1725545,
  },
  {
    date: '2020-10-02 10:55:00',
    open: 3183.46,
    low: 3178.1301,
    high: 3183.46,
    close: 3178.1301,
    volume: 1712791,
  },
  {
    date: '2020-10-02 10:54:00',
    open: 3178.9324,
    low: 3178.9324,
    high: 3183.46,
    close: 3183.46,
    volume: 1704901,
  },
  {
    date: '2020-10-02 10:53:00',
    open: 3178.49,
    low: 3178.49,
    high: 3178.9324,
    close: 3178.9324,
    volume: 1696891,
  },
  {
    date: '2020-10-02 10:52:00',
    open: 3178,
    low: 3177.43,
    high: 3179.55,
    close: 3178.49,
    volume: 1691621,
  },
  {
    date: '2020-10-02 10:51:00',
    open: 3182.6,
    low: 3178,
    high: 3182.6,
    close: 3178,
    volume: 1686082,
  },
  {
    date: '2020-10-02 10:50:00',
    open: 3183,
    low: 3181.5781,
    high: 3183,
    close: 3182.6,
    volume: 1678176,
  },
  {
    date: '2020-10-02 10:49:00',
    open: 3182.5,
    low: 3182.41,
    high: 3183,
    close: 3183,
    volume: 1672306,
  },
  {
    date: '2020-10-02 10:48:00',
    open: 3181.2524,
    low: 3181.02,
    high: 3183.62,
    close: 3182.5,
    volume: 1668784,
  },
  {
    date: '2020-10-02 10:47:00',
    open: 3179.5,
    low: 3179.5,
    high: 3181.2524,
    close: 3181.2524,
    volume: 1658037,
  },
  {
    date: '2020-10-02 10:46:00',
    open: 3178,
    low: 3177.82,
    high: 3180,
    close: 3179.5,
    volume: 1649112,
  },
  {
    date: '2020-10-02 10:45:00',
    open: 3180.91,
    low: 3178,
    high: 3181.73,
    close: 3178,
    volume: 1638424,
  },
  {
    date: '2020-10-02 10:44:00',
    open: 3178.305,
    low: 3178.2986,
    high: 3180.91,
    close: 3180.91,
    volume: 1627234,
  },
  {
    date: '2020-10-02 10:43:00',
    open: 3177.995,
    low: 3177,
    high: 3181,
    close: 3178.305,
    volume: 1621250,
  },
  {
    date: '2020-10-02 10:42:00',
    open: 3179.156,
    low: 3176.7383,
    high: 3179.156,
    close: 3177.995,
    volume: 1610751,
  },
  {
    date: '2020-10-02 10:41:00',
    open: 3181.71,
    low: 3178.313,
    high: 3181.71,
    close: 3179.156,
    volume: 1596129,
  },
  {
    date: '2020-10-02 10:40:00',
    open: 3184.17,
    low: 3181.47,
    high: 3184.17,
    close: 3181.71,
    volume: 1575540,
  },
  {
    date: '2020-10-02 10:39:00',
    open: 3186.71,
    low: 3184,
    high: 3188.3672,
    close: 3184.17,
    volume: 1564003,
  },
  {
    date: '2020-10-02 10:38:00',
    open: 3186.58,
    low: 3186.58,
    high: 3187.8499,
    close: 3186.71,
    volume: 1554573,
  },
  {
    date: '2020-10-02 10:37:00',
    open: 3185,
    low: 3185,
    high: 3187.93,
    close: 3186.58,
    volume: 1549893,
  },
  {
    date: '2020-10-02 10:36:00',
    open: 3190,
    low: 3185,
    high: 3191.945,
    close: 3185,
    volume: 1543316,
  },
  {
    date: '2020-10-02 10:35:00',
    open: 3187.36,
    low: 3187.36,
    high: 3190,
    close: 3190,
    volume: 1524636,
  },
  {
    date: '2020-10-02 10:34:00',
    open: 3188.32,
    low: 3184.495,
    high: 3188.32,
    close: 3187.36,
    volume: 1518389,
  },
  {
    date: '2020-10-02 10:33:00',
    open: 3190.062,
    low: 3187.45,
    high: 3190.062,
    close: 3188.32,
    volume: 1511192,
  },
  {
    date: '2020-10-02 10:32:00',
    open: 3190.71,
    low: 3190.062,
    high: 3190.71,
    close: 3190.062,
    volume: 1505079,
  },
  {
    date: '2020-10-02 10:31:00',
    open: 3191.732,
    low: 3187.51,
    high: 3192.135,
    close: 3188.35,
    volume: 1499812,
  },
  {
    date: '2020-10-02 10:30:00',
    open: 3192.58,
    low: 3190.1377,
    high: 3192.58,
    close: 3191.732,
    volume: 1491336,
  },
  {
    date: '2020-10-02 10:29:00',
    open: 3185.71,
    low: 3185.71,
    high: 3192.58,
    close: 3192.58,
    volume: 1482893,
  },
  {
    date: '2020-10-02 10:28:00',
    open: 3187.65,
    low: 3185.43,
    high: 3187.65,
    close: 3185.71,
    volume: 1472311,
  },
  {
    date: '2020-10-02 10:27:00',
    open: 3183.4,
    low: 3183.4,
    high: 3188.54,
    close: 3187.65,
    volume: 1465041,
  },
  {
    date: '2020-10-02 10:26:00',
    open: 3183.45,
    low: 3183.4,
    high: 3185.85,
    close: 3183.4,
    volume: 1458311,
  },
  {
    date: '2020-10-02 10:25:00',
    open: 3184,
    low: 3181.035,
    high: 3184,
    close: 3183.45,
    volume: 1450288,
  },
  {
    date: '2020-10-02 10:24:00',
    open: 3193.91,
    low: 3184,
    high: 3193.91,
    close: 3184,
    volume: 1438083,
  },
  {
    date: '2020-10-02 10:23:00',
    open: 3193.23,
    low: 3193.135,
    high: 3193.91,
    close: 3193.91,
    volume: 1423736,
  },
  {
    date: '2020-10-02 10:22:00',
    open: 3191.55,
    low: 3190,
    high: 3193.2896,
    close: 3193.23,
    volume: 1418665,
  },
  {
    date: '2020-10-02 10:21:00',
    open: 3190,
    low: 3189.23,
    high: 3191.55,
    close: 3191.55,
    volume: 1407812,
  },
  {
    date: '2020-10-02 10:20:00',
    open: 3189.73,
    low: 3187.94,
    high: 3192.49,
    close: 3190,
    volume: 1401175,
  },
  {
    date: '2020-10-02 10:19:00',
    open: 3187.27,
    low: 3187.27,
    high: 3189.73,
    close: 3189.73,
    volume: 1393651,
  },
  {
    date: '2020-10-02 10:18:00',
    open: 3188.1,
    low: 3187.04,
    high: 3188.615,
    close: 3187.27,
    volume: 1384688,
  },
  {
    date: '2020-10-02 10:17:00',
    open: 3190.3,
    low: 3187,
    high: 3190.3,
    close: 3188.1,
    volume: 1370993,
  },
  {
    date: '2020-10-02 10:16:00',
    open: 3192.438,
    low: 3188.52,
    high: 3192.438,
    close: 3190.3,
    volume: 1361949,
  },
  {
    date: '2020-10-02 10:15:00',
    open: 3195.02,
    low: 3191.49,
    high: 3195.02,
    close: 3192.438,
    volume: 1350064,
  },
  {
    date: '2020-10-02 10:14:00',
    open: 3188.355,
    low: 3188.355,
    high: 3195.02,
    close: 3195.02,
    volume: 1339954,
  },
  {
    date: '2020-10-02 10:13:00',
    open: 3187.2156,
    low: 3187.2156,
    high: 3188.355,
    close: 3188.355,
    volume: 1319309,
  },
  {
    date: '2020-10-02 10:12:00',
    open: 3187.87,
    low: 3187.02,
    high: 3190.223,
    close: 3187.2156,
    volume: 1312944,
  },
  {
    date: '2020-10-02 10:11:00',
    open: 3188.1694,
    low: 3187.87,
    high: 3192,
    close: 3187.87,
    volume: 1305600,
  },
  {
    date: '2020-10-02 10:10:00',
    open: 3189.983,
    low: 3188.1694,
    high: 3190.8,
    close: 3188.1694,
    volume: 1289340,
  },
  {
    date: '2020-10-02 10:09:00',
    open: 3190.11,
    low: 3187.25,
    high: 3190.67,
    close: 3189.983,
    volume: 1270419,
  },
  {
    date: '2020-10-02 10:08:00',
    open: 3191,
    low: 3190,
    high: 3192.9126,
    close: 3190.11,
    volume: 1251714,
  },
  {
    date: '2020-10-02 10:07:00',
    open: 3190.718,
    low: 3190.718,
    high: 3194.24,
    close: 3191,
    volume: 1236564,
  },
  {
    date: '2020-10-02 10:06:00',
    open: 3185.765,
    low: 3185.765,
    high: 3193.62,
    close: 3190.718,
    volume: 1216871,
  },
  {
    date: '2020-10-02 10:05:00',
    open: 3184.12,
    low: 3181.5,
    high: 3185.765,
    close: 3185.765,
    volume: 1188581,
  },
  {
    date: '2020-10-02 10:04:00',
    open: 3180.92,
    low: 3180.92,
    high: 3186.23,
    close: 3184.12,
    volume: 1175536,
  },
  {
    date: '2020-10-02 10:03:00',
    open: 3187.5798,
    low: 3180.92,
    high: 3187.5798,
    close: 3180.92,
    volume: 1162095,
  },
  {
    date: '2020-10-02 10:02:00',
    open: 3184.01,
    low: 3184.01,
    high: 3187.5798,
    close: 3187.5798,
    volume: 1145078,
  },
  {
    date: '2020-10-02 10:01:00',
    open: 3181.575,
    low: 3177.98,
    high: 3184.01,
    close: 3184.01,
    volume: 1122138,
  },
  {
    date: '2020-10-02 10:00:00',
    open: 3178.61,
    low: 3177.605,
    high: 3181.575,
    close: 3181.575,
    volume: 1102577,
  },
  {
    date: '2020-10-02 09:59:00',
    open: 3173,
    low: 3173,
    high: 3178.6594,
    close: 3178.61,
    volume: 1082424,
  },
  {
    date: '2020-10-02 09:58:00',
    open: 3172,
    low: 3171.005,
    high: 3173,
    close: 3173,
    volume: 1072837,
  },
  {
    date: '2020-10-02 09:57:00',
    open: 3170.4011,
    low: 3170.4011,
    high: 3173.3528,
    close: 3172,
    volume: 1066346,
  },
  {
    date: '2020-10-02 09:56:00',
    open: 3176.775,
    low: 3170.23,
    high: 3176.775,
    close: 3170.4011,
    volume: 1052984,
  },
  {
    date: '2020-10-02 09:55:00',
    open: 3173,
    low: 3173,
    high: 3178.018,
    close: 3176.775,
    volume: 1040657,
  },
  {
    date: '2020-10-02 09:54:00',
    open: 3170.385,
    low: 3169.59,
    high: 3174.499,
    close: 3173,
    volume: 1029616,
  },
  {
    date: '2020-10-02 09:53:00',
    open: 3171.405,
    low: 3170.29,
    high: 3172.11,
    close: 3170.385,
    volume: 1015911,
  },
  {
    date: '2020-10-02 09:52:00',
    open: 3174.4775,
    low: 3170.74,
    high: 3177,
    close: 3171.405,
    volume: 999568,
  },
  {
    date: '2020-10-02 09:51:00',
    open: 3179.9326,
    low: 3172.55,
    high: 3180.99,
    close: 3174.4775,
    volume: 979175,
  },
  {
    date: '2020-10-02 09:50:00',
    open: 3187,
    low: 3178.01,
    high: 3187,
    close: 3179.9326,
    volume: 954988,
  },
  {
    date: '2020-10-02 09:49:00',
    open: 3184.83,
    low: 3184.83,
    high: 3188.27,
    close: 3187,
    volume: 928214,
  },
  {
    date: '2020-10-02 09:48:00',
    open: 3182.4495,
    low: 3180.87,
    high: 3184.83,
    close: 3184.83,
    volume: 902791,
  },
  {
    date: '2020-10-02 09:47:00',
    open: 3175.11,
    low: 3175.11,
    high: 3183.5095,
    close: 3182.4495,
    volume: 881584,
  },
  {
    date: '2020-10-02 09:46:00',
    open: 3175.45,
    low: 3174.39,
    high: 3177.495,
    close: 3175.11,
    volume: 844720,
  },
  {
    date: '2020-10-02 09:45:00',
    open: 3167.38,
    low: 3167.38,
    high: 3175.9,
    close: 3175.45,
    volume: 816090,
  },
  {
    date: '2020-10-02 09:44:00',
    open: 3165.83,
    low: 3164,
    high: 3167.69,
    close: 3167.38,
    volume: 771437,
  },
  {
    date: '2020-10-02 09:43:00',
    open: 3165.5427,
    low: 3165.5356,
    high: 3168.04,
    close: 3165.83,
    volume: 752887,
  },
  {
    date: '2020-10-02 09:42:00',
    open: 3165.83,
    low: 3164.02,
    high: 3169.43,
    close: 3165.5427,
    volume: 736823,
  },
  {
    date: '2020-10-02 09:41:00',
    open: 3171.575,
    low: 3165.65,
    high: 3173.6802,
    close: 3165.83,
    volume: 719180,
  },
  {
    date: '2020-10-02 09:40:00',
    open: 3172.07,
    low: 3166.63,
    high: 3172.07,
    close: 3171.575,
    volume: 683101,
  },
  {
    date: '2020-10-02 09:39:00',
    open: 3170,
    low: 3167.73,
    high: 3172.07,
    close: 3172.07,
    volume: 652093,
  },
  {
    date: '2020-10-02 09:38:00',
    open: 3164.24,
    low: 3162,
    high: 3170,
    close: 3170,
    volume: 605193,
  },
  {
    date: '2020-10-02 09:37:00',
    open: 3152.23,
    low: 3151.12,
    high: 3164.24,
    close: 3164.24,
    volume: 558162,
  },
  {
    date: '2020-10-02 09:36:00',
    open: 3149.538,
    low: 3148.113,
    high: 3158.1804,
    close: 3152.23,
    volume: 514096,
  },
  {
    date: '2020-10-02 09:35:00',
    open: 3158.907,
    low: 3149.538,
    high: 3158.907,
    close: 3149.538,
    volume: 470710,
  },
  {
    date: '2020-10-02 09:34:00',
    open: 3159.76,
    low: 3156.985,
    high: 3159.9136,
    close: 3158.907,
    volume: 425950,
  },
  {
    date: '2020-10-02 09:33:00',
    open: 3161.43,
    low: 3159.76,
    high: 3165.1,
    close: 3159.76,
    volume: 389485,
  },
  {
    date: '2020-10-02 09:32:00',
    open: 3158.34,
    low: 3157.195,
    high: 3165,
    close: 3161.43,
    volume: 358338,
  },
  {
    date: '2020-10-02 09:31:00',
    open: 3221.26,
    low: 3152.11,
    high: 3221.26,
    close: 3158.34,
    volume: 318594,
  },
  {
    date: '2020-10-02 09:30:00',
    open: 3221.26,
    low: 3221.26,
    high: 3221.26,
    close: 3221.26,
    volume: 4847723,
  },
  {
    date: '2020-10-01 16:00:00',
    open: 3217.71,
    low: 3217.71,
    high: 3222.97,
    close: 3222.1,
    volume: 4674888,
  },
  {
    date: '2020-10-01 15:59:00',
    open: 3218.585,
    low: 3216.52,
    high: 3218.87,
    close: 3217.71,
    volume: 4621380,
  },
  {
    date: '2020-10-01 15:58:00',
    open: 3217.62,
    low: 3217.62,
    high: 3218.92,
    close: 3218.585,
    volume: 4583517,
  },
  {
    date: '2020-10-01 15:57:00',
    open: 3216.67,
    low: 3216.228,
    high: 3218.475,
    close: 3217.62,
    volume: 4561253,
  },
  {
    date: '2020-10-01 15:56:00',
    open: 3219.9,
    low: 3216.67,
    high: 3220.13,
    close: 3216.67,
    volume: 4542126,
  },
  {
    date: '2020-10-01 15:55:00',
    open: 3220.5,
    low: 3219.4,
    high: 3221.2,
    close: 3219.9,
    volume: 4506926,
  },
  {
    date: '2020-10-01 15:54:00',
    open: 3219.52,
    low: 3218.215,
    high: 3220.5,
    close: 3220.5,
    volume: 4491256,
  },
  {
    date: '2020-10-01 15:53:00',
    open: 3219.84,
    low: 3218.6543,
    high: 3220.095,
    close: 3219.52,
    volume: 4457738,
  },
  {
    date: '2020-10-01 15:52:00',
    open: 3219.49,
    low: 3218.1272,
    high: 3220.155,
    close: 3219.84,
    volume: 4442700,
  },
];

export const dummyFiveDayData = [
  {
    date: '2020-10-09 16:00:00',
    open: 3285.3,
    low: 3284.85,
    high: 3288.35,
    close: 3288.35,
    volume: 4525595,
  },
  {
    date: '2020-10-09 15:55:00',
    open: 3283.96,
    low: 3282.97,
    high: 3285.8684,
    close: 3285.3,
    volume: 4325396,
  },
  {
    date: '2020-10-09 15:50:00',
    open: 3281.525,
    low: 3279.29,
    high: 3284.295,
    close: 3283.96,
    volume: 4205794,
  },
  {
    date: '2020-10-09 15:45:00',
    open: 3280,
    low: 3279.3726,
    high: 3281.525,
    close: 3281.525,
    volume: 4135467,
  },
  {
    date: '2020-10-09 15:40:00',
    open: 3279.67,
    low: 3279.03,
    high: 3282,
    close: 3280,
    volume: 4088933,
  },
  {
    date: '2020-10-09 15:35:00',
    open: 3284,
    low: 3279.67,
    high: 3284,
    close: 3279.67,
    volume: 4042906,
  },
  {
    date: '2020-10-09 15:30:00',
    open: 3281.36,
    low: 3281.36,
    high: 3284.07,
    close: 3284,
    volume: 3997298,
  },
  {
    date: '2020-10-09 15:25:00',
    open: 3280.04,
    low: 3280.04,
    high: 3283.585,
    close: 3281.36,
    volume: 3953804,
  },
  {
    date: '2020-10-09 15:20:00',
    open: 3279.9211,
    low: 3279.9211,
    high: 3280.49,
    close: 3280.04,
    volume: 3902095,
  },
  {
    date: '2020-10-09 15:15:00',
    open: 3277.618,
    low: 3277.43,
    high: 3281.43,
    close: 3279.23,
    volume: 3860982,
  },
  {
    date: '2020-10-09 15:10:00',
    open: 3278.755,
    low: 3275.95,
    high: 3279.237,
    close: 3277.618,
    volume: 3815640,
  },
  {
    date: '2020-10-09 15:05:00',
    open: 3280.875,
    low: 3278,
    high: 3281.63,
    close: 3278.755,
    volume: 3767166,
  },
  {
    date: '2020-10-09 15:00:00',
    open: 3281.4314,
    low: 3280,
    high: 3281.55,
    close: 3280.875,
    volume: 3730153,
  },
  {
    date: '2020-10-09 14:55:00',
    open: 3280.25,
    low: 3279.545,
    high: 3282,
    close: 3281.4314,
    volume: 3708910,
  },
  {
    date: '2020-10-09 14:50:00',
    open: 3285.32,
    low: 3280.25,
    high: 3285.32,
    close: 3280.25,
    volume: 3673591,
  },
  {
    date: '2020-10-09 14:45:00',
    open: 3284.25,
    low: 3278.38,
    high: 3285.32,
    close: 3285.32,
    volume: 3642167,
  },
  {
    date: '2020-10-09 14:40:00',
    open: 3282.65,
    low: 3282.65,
    high: 3285,
    close: 3284.25,
    volume: 3570882,
  },
  {
    date: '2020-10-09 14:35:00',
    open: 3281.79,
    low: 3281.4182,
    high: 3283.7983,
    close: 3282.65,
    volume: 3543529,
  },
  {
    date: '2020-10-09 14:30:00',
    open: 3282.3,
    low: 3280.03,
    high: 3282.52,
    close: 3281.79,
    volume: 3514130,
  },
  {
    date: '2020-10-09 14:25:00',
    open: 3279.83,
    low: 3279.47,
    high: 3283.915,
    close: 3282.3,
    volume: 3484250,
  },
  {
    date: '2020-10-09 14:20:00',
    open: 3283.01,
    low: 3279.83,
    high: 3283.01,
    close: 3279.83,
    volume: 3454947,
  },
  {
    date: '2020-10-09 14:15:00',
    open: 3283.9673,
    low: 3279.68,
    high: 3284.6,
    close: 3283.01,
    volume: 3418869,
  },
  {
    date: '2020-10-09 14:10:00',
    open: 3284.74,
    low: 3283.9673,
    high: 3285.88,
    close: 3283.9673,
    volume: 3380576,
  },
  {
    date: '2020-10-09 14:05:00',
    open: 3280.73,
    low: 3280.29,
    high: 3284.14,
    close: 3284,
    volume: 3304397,
  },
  {
    date: '2020-10-09 14:00:00',
    open: 3277.9,
    low: 3277.9,
    high: 3280.73,
    close: 3280.73,
    volume: 3243600,
  },
  {
    date: '2020-10-09 13:55:00',
    open: 3276.415,
    low: 3275.825,
    high: 3278.1,
    close: 3277.9,
    volume: 3190874,
  },
  {
    date: '2020-10-09 13:50:00',
    open: 3274.395,
    low: 3273.17,
    high: 3277.21,
    close: 3276.415,
    volume: 3147490,
  },
  {
    date: '2020-10-09 13:45:00',
    open: 3273.43,
    low: 3271.6,
    high: 3274.395,
    close: 3274.395,
    volume: 3108079,
  },
  {
    date: '2020-10-09 13:40:00',
    open: 3272.5757,
    low: 3271.02,
    high: 3274.25,
    close: 3273.43,
    volume: 3085037,
  },
  {
    date: '2020-10-09 13:35:00',
    open: 3272.715,
    low: 3269.51,
    high: 3272.88,
    close: 3272.5757,
    volume: 3060665,
  },
  {
    date: '2020-10-09 13:30:00',
    open: 3271.61,
    low: 3270.43,
    high: 3274.32,
    close: 3272.715,
    volume: 3029429,
  },
  {
    date: '2020-10-09 13:25:00',
    open: 3274.023,
    low: 3271.61,
    high: 3274.0857,
    close: 3271.61,
    volume: 3001027,
  },
  {
    date: '2020-10-09 13:20:00',
    open: 3274.27,
    low: 3272.22,
    high: 3274.7,
    close: 3274.023,
    volume: 2980002,
  },
  {
    date: '2020-10-09 13:15:00',
    open: 3277,
    low: 3273.6702,
    high: 3278.35,
    close: 3274.27,
    volume: 2945491,
  },
  {
    date: '2020-10-09 13:10:00',
    open: 3276.55,
    low: 3274.17,
    high: 3278.355,
    close: 3277,
    volume: 2920362,
  },
  {
    date: '2020-10-09 13:05:00',
    open: 3273.71,
    low: 3273.3726,
    high: 3277.33,
    close: 3276.55,
    volume: 2875802,
  },
  {
    date: '2020-10-09 13:00:00',
    open: 3273.31,
    low: 3273.31,
    high: 3274.7275,
    close: 3273.71,
    volume: 2834137,
  },
  {
    date: '2020-10-09 12:55:00',
    open: 3268.99,
    low: 3268.41,
    high: 3274.11,
    close: 3274.11,
    volume: 2800112,
  },
  {
    date: '2020-10-09 12:50:00',
    open: 3276.78,
    low: 3267.67,
    high: 3276.78,
    close: 3268.99,
    volume: 2757118,
  },
  {
    date: '2020-10-09 12:45:00',
    open: 3275.99,
    low: 3273.1,
    high: 3277,
    close: 3276.78,
    volume: 2703549,
  },
  {
    date: '2020-10-09 12:40:00',
    open: 3274.08,
    low: 3274.08,
    high: 3277.6,
    close: 3275.99,
    volume: 2663614,
  },
  {
    date: '2020-10-09 12:35:00',
    open: 3271.94,
    low: 3271.54,
    high: 3276.65,
    close: 3274.08,
    volume: 2632758,
  },
  {
    date: '2020-10-09 12:30:00',
    open: 3276.99,
    low: 3271.03,
    high: 3278.467,
    close: 3271.94,
    volume: 2591112,
  },
  {
    date: '2020-10-09 12:25:00',
    open: 3272.77,
    low: 3272.0508,
    high: 3279,
    close: 3276.99,
    volume: 2513469,
  },
  {
    date: '2020-10-09 12:20:00',
    open: 3274.67,
    low: 3271.93,
    high: 3278.175,
    close: 3272.77,
    volume: 2455770,
  },
  {
    date: '2020-10-09 12:15:00',
    open: 3268.49,
    low: 3268.17,
    high: 3274.67,
    close: 3274.67,
    volume: 2364323,
  },
  {
    date: '2020-10-09 12:10:00',
    open: 3263.66,
    low: 3263.41,
    high: 3268.49,
    close: 3268.49,
    volume: 2291275,
  },
  {
    date: '2020-10-09 12:05:00',
    open: 3262.3774,
    low: 3260.29,
    high: 3265.34,
    close: 3263.66,
    volume: 2239968,
  },
  {
    date: '2020-10-09 12:00:00',
    open: 3261.3,
    low: 3257.24,
    high: 3263,
    close: 3262.3774,
    volume: 2186640,
  },
  {
    date: '2020-10-09 11:55:00',
    open: 3259.9238,
    low: 3256.31,
    high: 3262.1,
    close: 3261.3,
    volume: 2128029,
  },
  {
    date: '2020-10-09 11:50:00',
    open: 3259.3,
    low: 3258.22,
    high: 3260,
    close: 3259.9238,
    volume: 2051296,
  },
  {
    date: '2020-10-09 11:45:00',
    open: 3254.86,
    low: 3254,
    high: 3256.559,
    close: 3254,
    volume: 1996474,
  },
  {
    date: '2020-10-09 11:40:00',
    open: 3256,
    low: 3253.3,
    high: 3257.38,
    close: 3254.86,
    volume: 1946850,
  },
  {
    date: '2020-10-09 11:35:00',
    open: 3252.77,
    low: 3252.52,
    high: 3256,
    close: 3256,
    volume: 1914478,
  },
  {
    date: '2020-10-09 11:30:00',
    open: 3247.3,
    low: 3247.3,
    high: 3254.495,
    close: 3252.77,
    volume: 1867435,
  },
  {
    date: '2020-10-09 11:25:00',
    open: 3249.3,
    low: 3247.0989,
    high: 3251,
    close: 3247.3,
    volume: 1819209,
  },
  {
    date: '2020-10-09 11:20:00',
    open: 3253.03,
    low: 3248.9482,
    high: 3253.3,
    close: 3249.3,
    volume: 1779268,
  },
  {
    date: '2020-10-09 11:15:00',
    open: 3254.3398,
    low: 3249.99,
    high: 3254.3398,
    close: 3253.03,
    volume: 1739942,
  },
  {
    date: '2020-10-09 11:10:00',
    open: 3254.145,
    low: 3252.63,
    high: 3254.93,
    close: 3254.3398,
    volume: 1694130,
  },
  {
    date: '2020-10-09 11:05:00',
    open: 3244.71,
    low: 3244.71,
    high: 3254.145,
    close: 3254.145,
    volume: 1633946,
  },
  {
    date: '2020-10-09 11:00:00',
    open: 3245.535,
    low: 3244.71,
    high: 3247.2693,
    close: 3244.71,
    volume: 1548992,
  },
  {
    date: '2020-10-09 10:55:00',
    open: 3247.68,
    low: 3243.41,
    high: 3247.68,
    close: 3245.535,
    volume: 1523208,
  },
  {
    date: '2020-10-09 10:50:00',
    open: 3242.7568,
    low: 3242.7568,
    high: 3248.27,
    close: 3247.68,
    volume: 1487861,
  },
  {
    date: '2020-10-09 10:45:00',
    open: 3238.15,
    low: 3237,
    high: 3244.48,
    close: 3242.7568,
    volume: 1415664,
  },
  {
    date: '2020-10-09 10:40:00',
    open: 3240.8335,
    low: 3238.15,
    high: 3240.8335,
    close: 3238.15,
    volume: 1360395,
  },
  {
    date: '2020-10-09 10:35:00',
    open: 3231.3,
    low: 3231.3,
    high: 3240.63,
    close: 3238.91,
    volume: 1322956,
  },
  {
    date: '2020-10-09 10:30:00',
    open: 3234.89,
    low: 3227.94,
    high: 3234.89,
    close: 3231.3,
    volume: 1250027,
  },
  {
    date: '2020-10-09 10:25:00',
    open: 3233.36,
    low: 3228.015,
    high: 3234.89,
    close: 3234.89,
    volume: 1199430,
  },
  {
    date: '2020-10-09 10:20:00',
    open: 3236.6602,
    low: 3230.2,
    high: 3238.63,
    close: 3233.36,
    volume: 1145604,
  },
  {
    date: '2020-10-09 10:15:00',
    open: 3233.0466,
    low: 3230.71,
    high: 3236.6602,
    close: 3236.6602,
    volume: 1092205,
  },
  {
    date: '2020-10-09 10:10:00',
    open: 3244,
    low: 3229.6,
    high: 3244,
    close: 3233.0466,
    volume: 1034323,
  },
  {
    date: '2020-10-09 10:05:00',
    open: 3243.3794,
    low: 3241.11,
    high: 3246.52,
    close: 3244,
    volume: 929891,
  },
  {
    date: '2020-10-09 10:00:00',
    open: 3231.715,
    low: 3230.96,
    high: 3243.3794,
    close: 3243.3794,
    volume: 821429,
  },
  {
    date: '2020-10-09 09:55:00',
    open: 3225.95,
    low: 3225.9,
    high: 3233.5566,
    close: 3231.715,
    volume: 701679,
  },
  {
    date: '2020-10-09 09:50:00',
    open: 3219.38,
    low: 3218.12,
    high: 3225.95,
    close: 3225.95,
    volume: 547394,
  },
  {
    date: '2020-10-09 09:45:00',
    open: 3211.9006,
    low: 3211.9006,
    high: 3222.855,
    close: 3219.38,
    volume: 455814,
  },
  {
    date: '2020-10-09 09:40:00',
    open: 3211.04,
    low: 3210.7124,
    high: 3217.68,
    close: 3211.9006,
    volume: 334505,
  },
  {
    date: '2020-10-09 09:35:00',
    open: 3190.55,
    low: 3190.55,
    high: 3211.66,
    close: 3211.04,
    volume: 208407,
  },
  {
    date: '2020-10-09 09:30:00',
    open: 3190.55,
    low: 3190.55,
    high: 3190.55,
    close: 3190.55,
    volume: 3174114,
  },
  {
    date: '2020-10-08 16:00:00',
    open: 3189.03,
    low: 3189.03,
    high: 3191.965,
    close: 3191.37,
    volume: 2954128,
  },
  {
    date: '2020-10-08 15:55:00',
    open: 3192.2175,
    low: 3189.03,
    high: 3192.76,
    close: 3189.03,
    volume: 2882348,
  },
  {
    date: '2020-10-08 15:50:00',
    open: 3191.98,
    low: 3189.9229,
    high: 3192.5,
    close: 3192.5,
    volume: 2839791,
  },
  {
    date: '2020-10-08 15:45:00',
    open: 3190.47,
    low: 3187.59,
    high: 3191.98,
    close: 3191.98,
    volume: 2812193,
  },
  {
    date: '2020-10-08 15:40:00',
    open: 3192.32,
    low: 3187.97,
    high: 3192.32,
    close: 3190.47,
    volume: 2790179,
  },
  {
    date: '2020-10-08 15:35:00',
    open: 3191.74,
    low: 3189.87,
    high: 3192.51,
    close: 3192.32,
    volume: 2767560,
  },
  {
    date: '2020-10-08 15:30:00',
    open: 3191.325,
    low: 3190.85,
    high: 3193.84,
    close: 3191.74,
    volume: 2740448,
  },
  {
    date: '2020-10-08 15:25:00',
    open: 3188.08,
    low: 3186.5,
    high: 3192.7,
    close: 3191.325,
    volume: 2718599,
  },
  {
    date: '2020-10-08 15:20:00',
    open: 3190.36,
    low: 3187.855,
    high: 3191.505,
    close: 3188.08,
    volume: 2695975,
  },
  {
    date: '2020-10-08 15:15:00',
    open: 3188.51,
    low: 3187.9,
    high: 3193.14,
    close: 3190.36,
    volume: 2674352,
  },
  {
    date: '2020-10-08 15:10:00',
    open: 3189.7676,
    low: 3187.45,
    high: 3190.32,
    close: 3188.51,
    volume: 2652457,
  },
  {
    date: '2020-10-08 15:05:00',
    open: 3193.65,
    low: 3187.77,
    high: 3195.07,
    close: 3189.7676,
    volume: 2635365,
  },
  {
    date: '2020-10-08 15:00:00',
    open: 3193.34,
    low: 3190.99,
    high: 3194.14,
    close: 3193.65,
    volume: 2610697,
  },
  {
    date: '2020-10-08 14:55:00',
    open: 3196.78,
    low: 3193.04,
    high: 3196.78,
    close: 3193.34,
    volume: 2589443,
  },
  {
    date: '2020-10-08 14:50:00',
    open: 3196.0186,
    low: 3194.14,
    high: 3196.82,
    close: 3196.78,
    volume: 2579990,
  },
  {
    date: '2020-10-08 14:45:00',
    open: 3193.955,
    low: 3193.955,
    high: 3196.34,
    close: 3196.0186,
    volume: 2560460,
  },
  {
    date: '2020-10-08 14:40:00',
    open: 3194.195,
    low: 3191.795,
    high: 3194.71,
    close: 3194.71,
    volume: 2538282,
  },
  {
    date: '2020-10-08 14:35:00',
    open: 3191.31,
    low: 3190.82,
    high: 3195,
    close: 3194.195,
    volume: 2522567,
  },
  {
    date: '2020-10-08 14:30:00',
    open: 3191.61,
    low: 3187.98,
    high: 3191.61,
    close: 3191.31,
    volume: 2502071,
  },
  {
    date: '2020-10-08 14:25:00',
    open: 3191.075,
    low: 3189,
    high: 3193.67,
    close: 3191.61,
    volume: 2471880,
  },
  {
    date: '2020-10-08 14:20:00',
    open: 3188.0574,
    low: 3188.0574,
    high: 3192.69,
    close: 3191.075,
    volume: 2450157,
  },
  {
    date: '2020-10-08 14:15:00',
    open: 3189.922,
    low: 3188.0574,
    high: 3190.675,
    close: 3188.0574,
    volume: 2417785,
  },
  {
    date: '2020-10-08 14:10:00',
    open: 3183.39,
    low: 3183.0342,
    high: 3190.24,
    close: 3189.922,
    volume: 2401312,
  },
  {
    date: '2020-10-08 14:05:00',
    open: 3184.495,
    low: 3182.28,
    high: 3185.484,
    close: 3183.39,
    volume: 2374091,
  },
  {
    date: '2020-10-08 14:00:00',
    open: 3190.76,
    low: 3184.495,
    high: 3190.76,
    close: 3184.495,
    volume: 2330374,
  },
  {
    date: '2020-10-08 13:55:00',
    open: 3191.14,
    low: 3189.457,
    high: 3191.16,
    close: 3190.76,
    volume: 2310967,
  },
  {
    date: '2020-10-08 13:50:00',
    open: 3192.02,
    low: 3188.035,
    high: 3192.02,
    close: 3191.14,
    volume: 2300418,
  },
  {
    date: '2020-10-08 13:45:00',
    open: 3191.81,
    low: 3189.68,
    high: 3193.69,
    close: 3192.02,
    volume: 2281285,
  },
  {
    date: '2020-10-08 13:40:00',
    open: 3189.39,
    low: 3189.28,
    high: 3193.48,
    close: 3191.81,
    volume: 2262732,
  },
  {
    date: '2020-10-08 13:35:00',
    open: 3191.6118,
    low: 3189.39,
    high: 3194.175,
    close: 3189.39,
    volume: 2245994,
  },
  {
    date: '2020-10-08 13:30:00',
    open: 3192.1,
    low: 3191.15,
    high: 3193.52,
    close: 3192.56,
    volume: 2224871,
  },
  {
    date: '2020-10-08 13:25:00',
    open: 3195.15,
    low: 3191.1,
    high: 3195.15,
    close: 3192.1,
    volume: 2206615,
  },
  {
    date: '2020-10-08 13:20:00',
    open: 3196.34,
    low: 3194.7075,
    high: 3197.857,
    close: 3195.15,
    volume: 2189943,
  },
  {
    date: '2020-10-08 13:15:00',
    open: 3199.2,
    low: 3195.83,
    high: 3199.2,
    close: 3196.34,
    volume: 2175633,
  },
  {
    date: '2020-10-08 13:10:00',
    open: 3197.25,
    low: 3196.46,
    high: 3199.235,
    close: 3199.2,
    volume: 2163142,
  },
  {
    date: '2020-10-08 13:05:00',
    open: 3200,
    low: 3196.9907,
    high: 3201.83,
    close: 3197.25,
    volume: 2149435,
  },
  {
    date: '2020-10-08 13:00:00',
    open: 3202.7466,
    low: 3197.82,
    high: 3203.95,
    close: 3200,
    volume: 2130941,
  },
  {
    date: '2020-10-08 12:55:00',
    open: 3202.43,
    low: 3201.01,
    high: 3203.76,
    close: 3202.7466,
    volume: 2099712,
  },
  {
    date: '2020-10-08 12:50:00',
    open: 3198.5,
    low: 3198.5,
    high: 3203.73,
    close: 3202.43,
    volume: 2081420,
  },
  {
    date: '2020-10-08 12:45:00',
    open: 3197.62,
    low: 3197.18,
    high: 3199.49,
    close: 3198.5,
    volume: 2048191,
  },
  {
    date: '2020-10-08 12:40:00',
    open: 3198.6187,
    low: 3197,
    high: 3199.2905,
    close: 3197.62,
    volume: 2034215,
  },
  {
    date: '2020-10-08 12:35:00',
    open: 3198.0237,
    low: 3197.73,
    high: 3200.86,
    close: 3198.6187,
    volume: 2024368,
  },
  {
    date: '2020-10-08 12:30:00',
    open: 3198.54,
    low: 3197.84,
    high: 3200.61,
    close: 3198.0237,
    volume: 2008216,
  },
  {
    date: '2020-10-08 12:25:00',
    open: 3198.13,
    low: 3196.1802,
    high: 3198.54,
    close: 3198.54,
    volume: 1983842,
  },
  {
    date: '2020-10-08 12:20:00',
    open: 3198.1658,
    low: 3194.91,
    high: 3198.19,
    close: 3197,
    volume: 1968422,
  },
  {
    date: '2020-10-08 12:15:00',
    open: 3198.695,
    low: 3196,
    high: 3198.695,
    close: 3198.1658,
    volume: 1950949,
  },
  {
    date: '2020-10-08 12:10:00',
    open: 3191.773,
    low: 3191.773,
    high: 3199.21,
    close: 3198.695,
    volume: 1929443,
  },
  {
    date: '2020-10-08 12:05:00',
    open: 3188.18,
    low: 3187.5,
    high: 3192.26,
    close: 3191.773,
    volume: 1891101,
  },
  {
    date: '2020-10-08 12:00:00',
    open: 3187.47,
    low: 3185.8,
    high: 3191,
    close: 3188.18,
    volume: 1871311,
  },
  {
    date: '2020-10-08 11:55:00',
    open: 3191.51,
    low: 3186.2283,
    high: 3191.9185,
    close: 3187.47,
    volume: 1853011,
  },
  {
    date: '2020-10-08 11:50:00',
    open: 3192.9863,
    low: 3188.71,
    high: 3193,
    close: 3191.51,
    volume: 1838154,
  },
  {
    date: '2020-10-08 11:45:00',
    open: 3191.405,
    low: 3190,
    high: 3193.206,
    close: 3192.9863,
    volume: 1811207,
  },
  {
    date: '2020-10-08 11:40:00',
    open: 3184.83,
    low: 3184.8215,
    high: 3192.14,
    close: 3191.405,
    volume: 1787416,
  },
  {
    date: '2020-10-08 11:35:00',
    open: 3194.45,
    low: 3184,
    high: 3194.72,
    close: 3184.83,
    volume: 1755580,
  },
  {
    date: '2020-10-08 11:30:00',
    open: 3197.64,
    low: 3190,
    high: 3197.64,
    close: 3194.45,
    volume: 1712977,
  },
  {
    date: '2020-10-08 11:25:00',
    open: 3197.225,
    low: 3192.52,
    high: 3200.72,
    close: 3197.64,
    volume: 1684205,
  },
  {
    date: '2020-10-08 11:20:00',
    open: 3201.52,
    low: 3196.42,
    high: 3203.5,
    close: 3197.225,
    volume: 1638859,
  },
  {
    date: '2020-10-08 11:15:00',
    open: 3199.98,
    low: 3199.47,
    high: 3201.81,
    close: 3201.52,
    volume: 1593457,
  },
  {
    date: '2020-10-08 11:10:00',
    open: 3193.35,
    low: 3192.62,
    high: 3200.78,
    close: 3197.5232,
    volume: 1557721,
  },
  {
    date: '2020-10-08 11:05:00',
    open: 3189.085,
    low: 3188.5,
    high: 3193.35,
    close: 3193.35,
    volume: 1501048,
  },
  {
    date: '2020-10-08 11:00:00',
    open: 3185,
    low: 3184.125,
    high: 3189.58,
    close: 3189.085,
    volume: 1473263,
  },
  {
    date: '2020-10-08 10:55:00',
    open: 3187.08,
    low: 3185,
    high: 3193,
    close: 3185,
    volume: 1447128,
  },
  {
    date: '2020-10-08 10:50:00',
    open: 3191.19,
    low: 3186.51,
    high: 3193.0083,
    close: 3187.08,
    volume: 1408315,
  },
  {
    date: '2020-10-08 10:45:00',
    open: 3192.1934,
    low: 3188.93,
    high: 3193.3335,
    close: 3191.19,
    volume: 1373022,
  },
  {
    date: '2020-10-08 10:40:00',
    open: 3186.4,
    low: 3186.28,
    high: 3192.1934,
    close: 3192.1934,
    volume: 1331984,
  },
  {
    date: '2020-10-08 10:35:00',
    open: 3178.85,
    low: 3178.85,
    high: 3188.3083,
    close: 3186.4,
    volume: 1288795,
  },
  {
    date: '2020-10-08 10:30:00',
    open: 3186.5,
    low: 3175.285,
    high: 3187.34,
    close: 3178.85,
    volume: 1225874,
  },
  {
    date: '2020-10-08 10:25:00',
    open: 3186.1475,
    low: 3183.88,
    high: 3189.3,
    close: 3186.5,
    volume: 1141403,
  },
  {
    date: '2020-10-08 10:20:00',
    open: 3193.008,
    low: 3183.38,
    high: 3193.008,
    close: 3186.1475,
    volume: 1104506,
  },
  {
    date: '2020-10-08 10:15:00',
    open: 3189.6,
    low: 3189.6,
    high: 3197.35,
    close: 3193.008,
    volume: 1047536,
  },
  {
    date: '2020-10-08 10:10:00',
    open: 3191,
    low: 3185.77,
    high: 3191.72,
    close: 3189.6,
    volume: 997785,
  },
  {
    date: '2020-10-08 10:05:00',
    open: 3200.38,
    low: 3184.62,
    high: 3200.38,
    close: 3191,
    volume: 948566,
  },
  {
    date: '2020-10-08 10:00:00',
    open: 3201.63,
    low: 3197.9072,
    high: 3207.0125,
    close: 3199.275,
    volume: 859246,
  },
  {
    date: '2020-10-08 09:55:00',
    open: 3190,
    low: 3190,
    high: 3201.7966,
    close: 3201.63,
    volume: 776940,
  },
  {
    date: '2020-10-08 09:50:00',
    open: 3204.5,
    low: 3190,
    high: 3211.4307,
    close: 3190,
    volume: 641267,
  },
  {
    date: '2020-10-08 09:45:00',
    open: 3211.71,
    low: 3201.56,
    high: 3215,
    close: 3204.5,
    volume: 479999,
  },
  {
    date: '2020-10-08 09:40:00',
    open: 3218.11,
    low: 3208.47,
    high: 3218.18,
    close: 3211.71,
    volume: 393640,
  },
  {
    date: '2020-10-08 09:35:00',
    open: 3195.69,
    low: 3195.69,
    high: 3233,
    close: 3218.11,
    volume: 289983,
  },
  {
    date: '2020-10-08 09:30:00',
    open: 3195.69,
    low: 3195.69,
    high: 3195.69,
    close: 3195.69,
    volume: 4309439,
  },
  {
    date: '2020-10-07 16:00:00',
    open: 3198.15,
    low: 3193.69,
    high: 3200,
    close: 3195.47,
    volume: 4043427,
  },
  {
    date: '2020-10-07 15:55:00',
    open: 3193.34,
    low: 3191.8801,
    high: 3198.73,
    close: 3198.15,
    volume: 3854485,
  },
  {
    date: '2020-10-07 15:50:00',
    open: 3192.29,
    low: 3190.5,
    high: 3193.34,
    close: 3193.34,
    volume: 3742984,
  },
  {
    date: '2020-10-07 15:45:00',
    open: 3189.46,
    low: 3189.2285,
    high: 3193.325,
    close: 3192.29,
    volume: 3683576,
  },
  {
    date: '2020-10-07 15:40:00',
    open: 3187,
    low: 3186.06,
    high: 3190,
    close: 3189.46,
    volume: 3618751,
  },
  {
    date: '2020-10-07 15:35:00',
    open: 3186.255,
    low: 3186.17,
    high: 3189.99,
    close: 3187,
    volume: 3564226,
  },
  {
    date: '2020-10-07 15:30:00',
    open: 3185.88,
    low: 3184.27,
    high: 3187.99,
    close: 3186.255,
    volume: 3517429,
  },
  {
    date: '2020-10-07 15:25:00',
    open: 3187.52,
    low: 3183.95,
    high: 3188.02,
    close: 3185.88,
    volume: 3441394,
  },
  {
    date: '2020-10-07 15:20:00',
    open: 3190.24,
    low: 3186.77,
    high: 3190.25,
    close: 3187.52,
    volume: 3402675,
  },
  {
    date: '2020-10-07 15:15:00',
    open: 3189.2043,
    low: 3187.925,
    high: 3190.14,
    close: 3188.99,
    volume: 3345880,
  },
  {
    date: '2020-10-07 15:10:00',
    open: 3184.645,
    low: 3184.64,
    high: 3189.2043,
    close: 3189.2043,
    volume: 3302009,
  },
  {
    date: '2020-10-07 15:05:00',
    open: 3185.81,
    low: 3184.42,
    high: 3187.46,
    close: 3184.645,
    volume: 3256402,
  },
  {
    date: '2020-10-07 15:00:00',
    open: 3184.23,
    low: 3183.39,
    high: 3186.22,
    close: 3185.81,
    volume: 3213389,
  },
  {
    date: '2020-10-07 14:55:00',
    open: 3183.7803,
    low: 3182.63,
    high: 3184.68,
    close: 3184.23,
    volume: 3185933,
  },
  {
    date: '2020-10-07 14:50:00',
    open: 3178.855,
    low: 3178.57,
    high: 3184.41,
    close: 3183.7803,
    volume: 3154564,
  },
  {
    date: '2020-10-07 14:45:00',
    open: 3182.16,
    low: 3175,
    high: 3182.655,
    close: 3178.855,
    volume: 3125488,
  },
  {
    date: '2020-10-07 14:40:00',
    open: 3182.34,
    low: 3180.52,
    high: 3183.23,
    close: 3182.16,
    volume: 3020629,
  },
  {
    date: '2020-10-07 14:35:00',
    open: 3182.38,
    low: 3182.16,
    high: 3184.8,
    close: 3182.34,
    volume: 2991795,
  },
  {
    date: '2020-10-07 14:30:00',
    open: 3184.64,
    low: 3181.08,
    high: 3185.395,
    close: 3182.38,
    volume: 2967541,
  },
  {
    date: '2020-10-07 14:25:00',
    open: 3180,
    low: 3180,
    high: 3184.64,
    close: 3184.64,
    volume: 2940644,
  },
  {
    date: '2020-10-07 14:20:00',
    open: 3174.88,
    low: 3174.88,
    high: 3180,
    close: 3180,
    volume: 2896583,
  },
  {
    date: '2020-10-07 14:15:00',
    open: 3177,
    low: 3174.3,
    high: 3177.92,
    close: 3174.88,
    volume: 2865015,
  },
  {
    date: '2020-10-07 14:10:00',
    open: 3174.0115,
    low: 3173.77,
    high: 3177.93,
    close: 3177,
    volume: 2842789,
  },
  {
    date: '2020-10-07 14:05:00',
    open: 3174.315,
    low: 3174.315,
    high: 3179.69,
    close: 3176.53,
    volume: 2811069,
  },
  {
    date: '2020-10-07 14:00:00',
    open: 3179.65,
    low: 3173.98,
    high: 3179.65,
    close: 3174.315,
    volume: 2783609,
  },
  {
    date: '2020-10-07 13:55:00',
    open: 3180,
    low: 3178.01,
    high: 3180.075,
    close: 3179.65,
    volume: 2754463,
  },
  {
    date: '2020-10-07 13:50:00',
    open: 3179.9,
    low: 3179.9,
    high: 3181.43,
    close: 3180,
    volume: 2734973,
  },
  {
    date: '2020-10-07 13:45:00',
    open: 3175.46,
    low: 3175.46,
    high: 3180,
    close: 3179.9,
    volume: 2699848,
  },
  {
    date: '2020-10-07 13:40:00',
    open: 3174.96,
    low: 3174.96,
    high: 3177.1,
    close: 3175.46,
    volume: 2651893,
  },
  {
    date: '2020-10-07 13:35:00',
    open: 3176.08,
    low: 3174.96,
    high: 3177,
    close: 3174.96,
    volume: 2631672,
  },
  {
    date: '2020-10-07 13:30:00',
    open: 3177.31,
    low: 3175.56,
    high: 3177.74,
    close: 3176.08,
    volume: 2611733,
  },
  {
    date: '2020-10-07 13:25:00',
    open: 3176.3706,
    low: 3173.996,
    high: 3177.4,
    close: 3177.31,
    volume: 2593679,
  },
  {
    date: '2020-10-07 13:20:00',
    open: 3174.67,
    low: 3172.8108,
    high: 3176.54,
    close: 3176.3706,
    volume: 2577223,
  },
  {
    date: '2020-10-07 13:15:00',
    open: 3174.45,
    low: 3171.57,
    high: 3176.64,
    close: 3174.67,
    volume: 2555041,
  },
  {
    date: '2020-10-07 13:10:00',
    open: 3177,
    low: 3173.8,
    high: 3177.34,
    close: 3174.45,
    volume: 2534688,
  },
  {
    date: '2020-10-07 13:05:00',
    open: 3174.751,
    low: 3173.48,
    high: 3177.34,
    close: 3177,
    volume: 2515454,
  },
  {
    date: '2020-10-07 13:00:00',
    open: 3173.41,
    low: 3172.99,
    high: 3175.4,
    close: 3174.751,
    volume: 2471753,
  },
  {
    date: '2020-10-07 12:55:00',
    open: 3172.82,
    low: 3170.52,
    high: 3175.03,
    close: 3170.52,
    volume: 2451277,
  },
  {
    date: '2020-10-07 12:50:00',
    open: 3169.92,
    low: 3169.7063,
    high: 3173.75,
    close: 3172.82,
    volume: 2422768,
  },
  {
    date: '2020-10-07 12:45:00',
    open: 3169.6787,
    low: 3169.24,
    high: 3171.23,
    close: 3169.92,
    volume: 2400243,
  },
  {
    date: '2020-10-07 12:40:00',
    open: 3171.55,
    low: 3166.945,
    high: 3171.55,
    close: 3169.6787,
    volume: 2387287,
  },
  {
    date: '2020-10-07 12:35:00',
    open: 3165.8772,
    low: 3164,
    high: 3173.0652,
    close: 3171.55,
    volume: 2363265,
  },
  {
    date: '2020-10-07 12:30:00',
    open: 3171.99,
    low: 3158.18,
    high: 3173.26,
    close: 3165.8772,
    volume: 2319335,
  },
  {
    date: '2020-10-07 12:25:00',
    open: 3173.675,
    low: 3171.433,
    high: 3174.96,
    close: 3171.99,
    volume: 2262821,
  },
  {
    date: '2020-10-07 12:20:00',
    open: 3176.45,
    low: 3171,
    high: 3177.6626,
    close: 3173.675,
    volume: 2240583,
  },
  {
    date: '2020-10-07 12:15:00',
    open: 3169.56,
    low: 3169.379,
    high: 3176.84,
    close: 3176.45,
    volume: 2183624,
  },
  {
    date: '2020-10-07 12:10:00',
    open: 3167.315,
    low: 3166.899,
    high: 3171.0935,
    close: 3169.56,
    volume: 2102171,
  },
  {
    date: '2020-10-07 12:05:00',
    open: 3167.84,
    low: 3167.315,
    high: 3171.37,
    close: 3167.315,
    volume: 2071726,
  },
  {
    date: '2020-10-07 12:00:00',
    open: 3167,
    low: 3165.4136,
    high: 3168.845,
    close: 3167.84,
    volume: 2023486,
  },
  {
    date: '2020-10-07 11:55:00',
    open: 3167.415,
    low: 3165.865,
    high: 3168.9,
    close: 3167,
    volume: 1996004,
  },
  {
    date: '2020-10-07 11:50:00',
    open: 3164.75,
    low: 3164.75,
    high: 3168.265,
    close: 3167.415,
    volume: 1967299,
  },
  {
    date: '2020-10-07 11:45:00',
    open: 3163.8,
    low: 3160.53,
    high: 3166.14,
    close: 3163.1543,
    volume: 1919202,
  },
  {
    date: '2020-10-07 11:40:00',
    open: 3166.715,
    low: 3161.665,
    high: 3166.715,
    close: 3163.8,
    volume: 1892743,
  },
  {
    date: '2020-10-07 11:35:00',
    open: 3163.04,
    low: 3163.04,
    high: 3167.15,
    close: 3166.715,
    volume: 1855991,
  },
  {
    date: '2020-10-07 11:30:00',
    open: 3158.55,
    low: 3158.55,
    high: 3163.72,
    close: 3163.04,
    volume: 1805385,
  },
  {
    date: '2020-10-07 11:25:00',
    open: 3158.61,
    low: 3154.1326,
    high: 3159.72,
    close: 3158.55,
    volume: 1774501,
  },
  {
    date: '2020-10-07 11:20:00',
    open: 3160.7,
    low: 3157.26,
    high: 3160.7,
    close: 3158.61,
    volume: 1744685,
  },
  {
    date: '2020-10-07 11:15:00',
    open: 3160.38,
    low: 3160.38,
    high: 3163.9,
    close: 3160.7,
    volume: 1702728,
  },
  {
    date: '2020-10-07 11:10:00',
    open: 3160.33,
    low: 3158.87,
    high: 3165,
    close: 3160.38,
    volume: 1676203,
  },
  {
    date: '2020-10-07 11:05:00',
    open: 3159.43,
    low: 3156.314,
    high: 3161.13,
    close: 3160.33,
    volume: 1625469,
  },
  {
    date: '2020-10-07 11:00:00',
    open: 3156.84,
    low: 3155.605,
    high: 3159.43,
    close: 3159.43,
    volume: 1586360,
  },
  {
    date: '2020-10-07 10:55:00',
    open: 3147.69,
    low: 3147.69,
    high: 3156.84,
    close: 3156.84,
    volume: 1547784,
  },
  {
    date: '2020-10-07 10:50:00',
    open: 3144.78,
    low: 3141.9,
    high: 3149.48,
    close: 3147.69,
    volume: 1502670,
  },
  {
    date: '2020-10-07 10:45:00',
    open: 3147.19,
    low: 3142.5862,
    high: 3147.19,
    close: 3144.78,
    volume: 1468427,
  },
  {
    date: '2020-10-07 10:40:00',
    open: 3147.37,
    low: 3146.03,
    high: 3150,
    close: 3147.19,
    volume: 1430368,
  },
  {
    date: '2020-10-07 10:35:00',
    open: 3142.83,
    low: 3140.3,
    high: 3155,
    close: 3151.54,
    volume: 1396222,
  },
  {
    date: '2020-10-07 10:30:00',
    open: 3150.625,
    low: 3142.83,
    high: 3152.09,
    close: 3142.83,
    volume: 1334790,
  },
  {
    date: '2020-10-07 10:25:00',
    open: 3153,
    low: 3149.9749,
    high: 3157.9,
    close: 3150.625,
    volume: 1267157,
  },
  {
    date: '2020-10-07 10:20:00',
    open: 3154.18,
    low: 3149.59,
    high: 3155.84,
    close: 3153,
    volume: 1218731,
  },
  {
    date: '2020-10-07 10:15:00',
    open: 3164.53,
    low: 3153.493,
    high: 3164.53,
    close: 3154.18,
    volume: 1150530,
  },
  {
    date: '2020-10-07 10:10:00',
    open: 3159.27,
    low: 3155.8,
    high: 3164.53,
    close: 3164.53,
    volume: 1081597,
  },
  {
    date: '2020-10-07 10:05:00',
    open: 3163.3,
    low: 3155.3694,
    high: 3163.79,
    close: 3159.27,
    volume: 999160,
  },
  {
    date: '2020-10-07 10:00:00',
    open: 3166.1736,
    low: 3163.3,
    high: 3172.5605,
    close: 3163.3,
    volume: 911249,
  },
  {
    date: '2020-10-07 09:55:00',
    open: 3164.865,
    low: 3162.1245,
    high: 3168,
    close: 3166.1736,
    volume: 807788,
  },
  {
    date: '2020-10-07 09:50:00',
    open: 3161.345,
    low: 3160.68,
    high: 3166.775,
    close: 3164.865,
    volume: 739155,
  },
  {
    date: '2020-10-07 09:45:00',
    open: 3149.4,
    low: 3149.4,
    high: 3166.18,
    close: 3161.345,
    volume: 640980,
  },
  {
    date: '2020-10-07 09:40:00',
    open: 3152.8098,
    low: 3148,
    high: 3156.62,
    close: 3149.4,
    volume: 496160,
  },
  {
    date: '2020-10-07 09:35:00',
    open: 3099.96,
    low: 3099.96,
    high: 3154,
    close: 3152.8098,
    volume: 372776,
  },
  {
    date: '2020-10-07 09:30:00',
    open: 3099.96,
    low: 3099.96,
    high: 3099.96,
    close: 3099.96,
    volume: 4887235,
  },
  {
    date: '2020-10-06 16:00:00',
    open: 3093.015,
    low: 3093.015,
    high: 3106.56,
    close: 3102,
    volume: 4679024,
  },
  {
    date: '2020-10-06 15:55:00',
    open: 3092.15,
    low: 3091.665,
    high: 3093.75,
    close: 3093.015,
    volume: 4487285,
  },
  {
    date: '2020-10-06 15:50:00',
    open: 3101.4014,
    low: 3091.44,
    high: 3101.74,
    close: 3092.85,
    volume: 4361385,
  },
  {
    date: '2020-10-06 15:45:00',
    open: 3108.06,
    low: 3099,
    high: 3108.06,
    close: 3101.4014,
    volume: 4247285,
  },
  {
    date: '2020-10-06 15:40:00',
    open: 3118.33,
    low: 3104.64,
    high: 3118.33,
    close: 3108.06,
    volume: 4153051,
  },
  {
    date: '2020-10-06 15:35:00',
    open: 3113.185,
    low: 3111.25,
    high: 3118.33,
    close: 3118.33,
    volume: 4062249,
  },
  {
    date: '2020-10-06 15:30:00',
    open: 3102.75,
    low: 3100.62,
    high: 3114.2825,
    close: 3113.185,
    volume: 3996495,
  },
  {
    date: '2020-10-06 15:25:00',
    open: 3108.38,
    low: 3100.355,
    high: 3111.48,
    close: 3102.75,
    volume: 3894985,
  },
  {
    date: '2020-10-06 15:20:00',
    open: 3115.62,
    low: 3106.83,
    high: 3119,
    close: 3108.38,
    volume: 3823552,
  },
  {
    date: '2020-10-06 15:15:00',
    open: 3106.91,
    low: 3105.145,
    high: 3118.025,
    close: 3115.62,
    volume: 3705290,
  },
  {
    date: '2020-10-06 15:10:00',
    open: 3118.535,
    low: 3093.33,
    high: 3118.535,
    close: 3106.91,
    volume: 3608647,
  },
  {
    date: '2020-10-06 15:05:00',
    open: 3124,
    low: 3115.05,
    high: 3127.8198,
    close: 3118.535,
    volume: 3438732,
  },
  {
    date: '2020-10-06 15:00:00',
    open: 3125,
    low: 3109.325,
    high: 3131.99,
    close: 3124,
    volume: 3320489,
  },
  {
    date: '2020-10-06 14:55:00',
    open: 3152.83,
    low: 3125,
    high: 3152.83,
    close: 3125,
    volume: 3112277,
  },
  {
    date: '2020-10-06 14:50:00',
    open: 3166.9749,
    low: 3152.83,
    high: 3170.73,
    close: 3152.83,
    volume: 2938829,
  },
  {
    date: '2020-10-06 14:45:00',
    open: 3164,
    low: 3164,
    high: 3166.9749,
    close: 3166.9749,
    volume: 2855102,
  },
  {
    date: '2020-10-06 14:40:00',
    open: 3160.66,
    low: 3160.66,
    high: 3163,
    close: 3163,
    volume: 2816773,
  },
  {
    date: '2020-10-06 14:35:00',
    open: 3157.4,
    low: 3157.37,
    high: 3160.89,
    close: 3160.66,
    volume: 2787702,
  },
  {
    date: '2020-10-06 14:30:00',
    open: 3157,
    low: 3157,
    high: 3161.01,
    close: 3157.4,
    volume: 2763076,
  },
  {
    date: '2020-10-06 14:25:00',
    open: 3158.2,
    low: 3157,
    high: 3159,
    close: 3157,
    volume: 2731536,
  },
  {
    date: '2020-10-06 14:20:00',
    open: 3158,
    low: 3155.2,
    high: 3159.93,
    close: 3158.2,
    volume: 2701041,
  },
  {
    date: '2020-10-06 14:15:00',
    open: 3156.37,
    low: 3155.8442,
    high: 3158,
    close: 3158,
    volume: 2667715,
  },
  {
    date: '2020-10-06 14:10:00',
    open: 3155.31,
    low: 3155.31,
    high: 3159.2122,
    close: 3156.37,
    volume: 2645951,
  },
  {
    date: '2020-10-06 14:05:00',
    open: 3155.27,
    low: 3153,
    high: 3155.8,
    close: 3155.31,
    volume: 2612776,
  },
  {
    date: '2020-10-06 14:00:00',
    open: 3153.5,
    low: 3152.1,
    high: 3155.27,
    close: 3155.27,
    volume: 2595587,
  },
  {
    date: '2020-10-06 13:55:00',
    open: 3153.21,
    low: 3152.41,
    high: 3156,
    close: 3153.5,
    volume: 2582856,
  },
  {
    date: '2020-10-06 13:50:00',
    open: 3153.6,
    low: 3150.509,
    high: 3155.72,
    close: 3153.21,
    volume: 2567437,
  },
  {
    date: '2020-10-06 13:45:00',
    open: 3151.06,
    low: 3151,
    high: 3157,
    close: 3153.6,
    volume: 2536124,
  },
  {
    date: '2020-10-06 13:40:00',
    open: 3150.805,
    low: 3148.5,
    high: 3151.06,
    close: 3151.06,
    volume: 2497138,
  },
  {
    date: '2020-10-06 13:35:00',
    open: 3149.69,
    low: 3149.69,
    high: 3151,
    close: 3150.805,
    volume: 2476870,
  },
  {
    date: '2020-10-06 13:30:00',
    open: 3153.04,
    low: 3150.27,
    high: 3153.29,
    close: 3152.14,
    volume: 2456155,
  },
  {
    date: '2020-10-06 13:25:00',
    open: 3152.2,
    low: 3150,
    high: 3154.9,
    close: 3153.04,
    volume: 2441225,
  },
  {
    date: '2020-10-06 13:20:00',
    open: 3153.28,
    low: 3152.0427,
    high: 3153.405,
    close: 3152.2,
    volume: 2414047,
  },
  {
    date: '2020-10-06 13:15:00',
    open: 3157.56,
    low: 3153.28,
    high: 3157.56,
    close: 3153.28,
    volume: 2401283,
  },
  {
    date: '2020-10-06 13:10:00',
    open: 3149.4973,
    low: 3149.07,
    high: 3157.56,
    close: 3157.56,
    volume: 2377423,
  },
  {
    date: '2020-10-06 13:05:00',
    open: 3152.99,
    low: 3149.4973,
    high: 3153.47,
    close: 3149.4973,
    volume: 2350093,
  },
  {
    date: '2020-10-06 13:00:00',
    open: 3154.86,
    low: 3152.233,
    high: 3154.87,
    close: 3152.99,
    volume: 2328002,
  },
  {
    date: '2020-10-06 12:55:00',
    open: 3152.18,
    low: 3152.18,
    high: 3155.99,
    close: 3154.86,
    volume: 2309782,
  },
  {
    date: '2020-10-06 12:50:00',
    open: 3147.73,
    low: 3145.92,
    high: 3152.21,
    close: 3152.18,
    volume: 2279544,
  },
  {
    date: '2020-10-06 12:45:00',
    open: 3145.01,
    low: 3143.76,
    high: 3147.73,
    close: 3147.73,
    volume: 2253694,
  },
  {
    date: '2020-10-06 12:40:00',
    open: 3144.6707,
    low: 3144.4895,
    high: 3147.4902,
    close: 3145.01,
    volume: 2241161,
  },
  {
    date: '2020-10-06 12:35:00',
    open: 3148.73,
    low: 3144.6707,
    high: 3151,
    close: 3144.6707,
    volume: 2225233,
  },
  {
    date: '2020-10-06 12:30:00',
    open: 3146.77,
    low: 3146.21,
    high: 3149.2,
    close: 3148.73,
    volume: 2188155,
  },
  {
    date: '2020-10-06 12:25:00',
    open: 3144.05,
    low: 3144.05,
    high: 3146.77,
    close: 3146.77,
    volume: 2160769,
  },
  {
    date: '2020-10-06 12:20:00',
    open: 3143.38,
    low: 3143.38,
    high: 3145.4,
    close: 3143.98,
    volume: 2131724,
  },
  {
    date: '2020-10-06 12:15:00',
    open: 3142.65,
    low: 3140.6223,
    high: 3143.59,
    close: 3143.38,
    volume: 2102960,
  },
  {
    date: '2020-10-06 12:10:00',
    open: 3138.53,
    low: 3135.21,
    high: 3142.65,
    close: 3142.65,
    volume: 2083505,
  },
  {
    date: '2020-10-06 12:05:00',
    open: 3135.14,
    low: 3134.78,
    high: 3140.295,
    close: 3138.53,
    volume: 2047715,
  },
  {
    date: '2020-10-06 12:00:00',
    open: 3133.4983,
    low: 3131.835,
    high: 3136.75,
    close: 3135.14,
    volume: 2015748,
  },
  {
    date: '2020-10-06 11:55:00',
    open: 3134.66,
    low: 3129,
    high: 3136,
    close: 3133.4983,
    volume: 1990427,
  },
  {
    date: '2020-10-06 11:50:00',
    open: 3144.89,
    low: 3134.66,
    high: 3144.89,
    close: 3134.66,
    volume: 1934148,
  },
  {
    date: '2020-10-06 11:45:00',
    open: 3143.305,
    low: 3141.5,
    high: 3144.89,
    close: 3144.89,
    volume: 1884566,
  },
  {
    date: '2020-10-06 11:40:00',
    open: 3138.255,
    low: 3138.255,
    high: 3143.305,
    close: 3143.305,
    volume: 1852303,
  },
  {
    date: '2020-10-06 11:35:00',
    open: 3135.12,
    low: 3134.46,
    high: 3139.33,
    close: 3138.255,
    volume: 1812356,
  },
  {
    date: '2020-10-06 11:30:00',
    open: 3135.96,
    low: 3133.39,
    high: 3137.1953,
    close: 3135.12,
    volume: 1762869,
  },
  {
    date: '2020-10-06 11:25:00',
    open: 3142.3,
    low: 3135.96,
    high: 3143.87,
    close: 3135.96,
    volume: 1694203,
  },
  {
    date: '2020-10-06 11:20:00',
    open: 3146.3,
    low: 3141.25,
    high: 3148.66,
    close: 3142.3,
    volume: 1634354,
  },
  {
    date: '2020-10-06 11:15:00',
    open: 3147.635,
    low: 3146.3,
    high: 3150.8992,
    close: 3146.3,
    volume: 1577777,
  },
  {
    date: '2020-10-06 11:10:00',
    open: 3156.42,
    low: 3149.91,
    high: 3157.69,
    close: 3149.91,
    volume: 1518259,
  },
  {
    date: '2020-10-06 11:05:00',
    open: 3155.6,
    low: 3154.225,
    high: 3160,
    close: 3156.42,
    volume: 1474265,
  },
  {
    date: '2020-10-06 11:00:00',
    open: 3157.38,
    low: 3153.16,
    high: 3159,
    close: 3155.6,
    volume: 1446541,
  },
  {
    date: '2020-10-06 10:55:00',
    open: 3154.205,
    low: 3154.205,
    high: 3161.59,
    close: 3157.38,
    volume: 1419740,
  },
  {
    date: '2020-10-06 10:50:00',
    open: 3153.17,
    low: 3148.09,
    high: 3155.9675,
    close: 3154.205,
    volume: 1379698,
  },
  {
    date: '2020-10-06 10:45:00',
    open: 3160.105,
    low: 3150.995,
    high: 3167.345,
    close: 3153.17,
    volume: 1323632,
  },
  {
    date: '2020-10-06 10:40:00',
    open: 3161.88,
    low: 3156.42,
    high: 3162.46,
    close: 3160.105,
    volume: 1245283,
  },
  {
    date: '2020-10-06 10:35:00',
    open: 3165.942,
    low: 3161.35,
    high: 3166.57,
    close: 3161.88,
    volume: 1208112,
  },
  {
    date: '2020-10-06 10:30:00',
    open: 3165.55,
    low: 3162,
    high: 3167.355,
    close: 3165.942,
    volume: 1170333,
  },
  {
    date: '2020-10-06 10:25:00',
    open: 3169,
    low: 3165.01,
    high: 3169.292,
    close: 3165.55,
    volume: 1126475,
  },
  {
    date: '2020-10-06 10:20:00',
    open: 3166.65,
    low: 3161.43,
    high: 3169.69,
    close: 3169,
    volume: 1079235,
  },
  {
    date: '2020-10-06 10:15:00',
    open: 3162.4,
    low: 3161.69,
    high: 3167.65,
    close: 3166.65,
    volume: 1027828,
  },
  {
    date: '2020-10-06 10:10:00',
    open: 3161.36,
    low: 3156.776,
    high: 3162.4,
    close: 3162.4,
    volume: 954926,
  },
  {
    date: '2020-10-06 10:05:00',
    open: 3165.975,
    low: 3161.36,
    high: 3165.975,
    close: 3161.36,
    volume: 907888,
  },
  {
    date: '2020-10-06 10:00:00',
    open: 3149.77,
    low: 3147.93,
    high: 3154.46,
    close: 3154.46,
    volume: 809986,
  },
  {
    date: '2020-10-06 09:55:00',
    open: 3158.66,
    low: 3147.6,
    high: 3160.49,
    close: 3149.77,
    volume: 717947,
  },
  {
    date: '2020-10-06 09:50:00',
    open: 3165.13,
    low: 3154.0503,
    high: 3165.13,
    close: 3158.66,
    volume: 576871,
  },
  {
    date: '2020-10-06 09:45:00',
    open: 3170.9,
    low: 3159.03,
    high: 3174.9,
    close: 3165.13,
    volume: 474850,
  },
  {
    date: '2020-10-06 09:40:00',
    open: 3174.79,
    low: 3168.695,
    high: 3176.9692,
    close: 3170.9,
    volume: 358657,
  },
  {
    date: '2020-10-06 09:35:00',
    open: 3199.2,
    low: 3162.96,
    high: 3199.2,
    close: 3174.79,
    volume: 268598,
  },
  {
    date: '2020-10-06 09:30:00',
    open: 3199.2,
    low: 3199.2,
    high: 3199.2,
    close: 3199.2,
    volume: 3579855,
  },
  {
    date: '2020-10-05 16:00:00',
    open: 3199.83,
    low: 3198.15,
    high: 3202.5,
    close: 3200.93,
    volume: 3353295,
  },
  {
    date: '2020-10-05 15:55:00',
    open: 3194.89,
    low: 3194.89,
    high: 3199.83,
    close: 3199.83,
    volume: 3194033,
  },
  {
    date: '2020-10-05 15:50:00',
    open: 3194.305,
    low: 3190.5525,
    high: 3195.252,
    close: 3194.89,
    volume: 3115732,
  },
  {
    date: '2020-10-05 15:45:00',
    open: 3194.18,
    low: 3192.59,
    high: 3196.2,
    close: 3194.305,
    volume: 3072397,
  },
  {
    date: '2020-10-05 15:40:00',
    open: 3195.98,
    low: 3194.18,
    high: 3197.77,
    close: 3194.18,
    volume: 3017157,
  },
  {
    date: '2020-10-05 15:35:00',
    open: 3193.75,
    low: 3192.48,
    high: 3198,
    close: 3195.98,
    volume: 2979325,
  },
  {
    date: '2020-10-05 15:30:00',
    open: 3193.74,
    low: 3190.78,
    high: 3195.025,
    close: 3193.75,
    volume: 2932041,
  },
  {
    date: '2020-10-05 15:25:00',
    open: 3193.74,
    low: 3192.525,
    high: 3195.6577,
    close: 3193.74,
    volume: 2895325,
  },
  {
    date: '2020-10-05 15:20:00',
    open: 3193.01,
    low: 3190.76,
    high: 3194.01,
    close: 3193.74,
    volume: 2855414,
  },
  {
    date: '2020-10-05 15:15:00',
    open: 3191.404,
    low: 3189.57,
    high: 3194.5789,
    close: 3190.47,
    volume: 2801502,
  },
  {
    date: '2020-10-05 15:10:00',
    open: 3187.615,
    low: 3187.12,
    high: 3191.78,
    close: 3191.404,
    volume: 2743997,
  },
  {
    date: '2020-10-05 15:05:00',
    open: 3188.47,
    low: 3185.5022,
    high: 3188.995,
    close: 3187.615,
    volume: 2701074,
  },
  {
    date: '2020-10-05 15:00:00',
    open: 3181.57,
    low: 3180.71,
    high: 3189.01,
    close: 3188.47,
    volume: 2630334,
  },
  {
    date: '2020-10-05 14:55:00',
    open: 3177.67,
    low: 3177.19,
    high: 3181.57,
    close: 3181.57,
    volume: 2561534,
  },
  {
    date: '2020-10-05 14:50:00',
    open: 3176.295,
    low: 3175.13,
    high: 3178.6685,
    close: 3177.67,
    volume: 2527871,
  },
  {
    date: '2020-10-05 14:45:00',
    open: 3174.29,
    low: 3174.29,
    high: 3177.67,
    close: 3176.295,
    volume: 2479767,
  },
  {
    date: '2020-10-05 14:40:00',
    open: 3170.3,
    low: 3169.8848,
    high: 3174.29,
    close: 3174.29,
    volume: 2442889,
  },
  {
    date: '2020-10-05 14:35:00',
    open: 3166.415,
    low: 3166.415,
    high: 3170.91,
    close: 3170.3,
    volume: 2419910,
  },
  {
    date: '2020-10-05 14:30:00',
    open: 3169.271,
    low: 3163.7017,
    high: 3169.384,
    close: 3166.415,
    volume: 2402848,
  },
  {
    date: '2020-10-05 14:25:00',
    open: 3167.4534,
    low: 3166,
    high: 3170.53,
    close: 3169.271,
    volume: 2382571,
  },
  {
    date: '2020-10-05 14:20:00',
    open: 3166.11,
    low: 3165,
    high: 3169.98,
    close: 3167.4534,
    volume: 2360670,
  },
  {
    date: '2020-10-05 14:15:00',
    open: 3163.83,
    low: 3163.83,
    high: 3167.9326,
    close: 3166.11,
    volume: 2341194,
  },
  {
    date: '2020-10-05 14:10:00',
    open: 3160.52,
    low: 3160,
    high: 3164,
    close: 3163.83,
    volume: 2311510,
  },
  {
    date: '2020-10-05 14:05:00',
    open: 3167.035,
    low: 3158,
    high: 3167.035,
    close: 3159.2742,
    volume: 2284616,
  },
  {
    date: '2020-10-05 14:00:00',
    open: 3167.3618,
    low: 3162.82,
    high: 3167.69,
    close: 3167.035,
    volume: 2245800,
  },
  {
    date: '2020-10-05 13:55:00',
    open: 3167.635,
    low: 3166.9402,
    high: 3168.83,
    close: 3167.3618,
    volume: 2211015,
  },
  {
    date: '2020-10-05 13:50:00',
    open: 3170.98,
    low: 3166.04,
    high: 3171.34,
    close: 3167.635,
    volume: 2195141,
  },
  {
    date: '2020-10-05 13:45:00',
    open: 3175.38,
    low: 3169.99,
    high: 3175.48,
    close: 3170.98,
    volume: 2170093,
  },
  {
    date: '2020-10-05 13:40:00',
    open: 3176.495,
    low: 3173.01,
    high: 3176.81,
    close: 3175.38,
    volume: 2134144,
  },
  {
    date: '2020-10-05 13:35:00',
    open: 3179.185,
    low: 3174.21,
    high: 3179.47,
    close: 3176.495,
    volume: 2119367,
  },
  {
    date: '2020-10-05 13:30:00',
    open: 3178,
    low: 3177.11,
    high: 3180.0273,
    close: 3179.185,
    volume: 2094337,
  },
  {
    date: '2020-10-05 13:25:00',
    open: 3180.6301,
    low: 3176.23,
    high: 3180.855,
    close: 3178,
    volume: 2081493,
  },
  {
    date: '2020-10-05 13:20:00',
    open: 3183.42,
    low: 3180,
    high: 3184.72,
    close: 3180.6301,
    volume: 2062308,
  },
  {
    date: '2020-10-05 13:15:00',
    open: 3181.625,
    low: 3181.57,
    high: 3183.63,
    close: 3183.42,
    volume: 2041613,
  },
  {
    date: '2020-10-05 13:10:00',
    open: 3181.026,
    low: 3181.026,
    high: 3183.375,
    close: 3181.625,
    volume: 2024353,
  },
  {
    date: '2020-10-05 13:05:00',
    open: 3180.5498,
    low: 3178.58,
    high: 3182.09,
    close: 3181.026,
    volume: 2004525,
  },
  {
    date: '2020-10-05 13:00:00',
    open: 3178.9,
    low: 3178.01,
    high: 3180.81,
    close: 3180.5498,
    volume: 1982249,
  },
  {
    date: '2020-10-05 12:55:00',
    open: 3177.46,
    low: 3176.6,
    high: 3179.99,
    close: 3179.1658,
    volume: 1967486,
  },
  {
    date: '2020-10-05 12:50:00',
    open: 3178.39,
    low: 3176.225,
    high: 3178.39,
    close: 3177.46,
    volume: 1952671,
  },
  {
    date: '2020-10-05 12:45:00',
    open: 3177.59,
    low: 3175.28,
    high: 3179.26,
    close: 3178.39,
    volume: 1938975,
  },
  {
    date: '2020-10-05 12:40:00',
    open: 3180.5398,
    low: 3177.11,
    high: 3181.77,
    close: 3177.59,
    volume: 1920104,
  },
  {
    date: '2020-10-05 12:35:00',
    open: 3178.38,
    low: 3177.62,
    high: 3180.5398,
    close: 3180.5398,
    volume: 1903299,
  },
  {
    date: '2020-10-05 12:30:00',
    open: 3177.416,
    low: 3176.6316,
    high: 3179.515,
    close: 3178.38,
    volume: 1891335,
  },
  {
    date: '2020-10-05 12:25:00',
    open: 3177.2676,
    low: 3175.55,
    high: 3178.61,
    close: 3177.416,
    volume: 1875112,
  },
  {
    date: '2020-10-05 12:20:00',
    open: 3176.52,
    low: 3174,
    high: 3177.415,
    close: 3177.2676,
    volume: 1856448,
  },
  {
    date: '2020-10-05 12:15:00',
    open: 3175.91,
    low: 3175.73,
    high: 3178.22,
    close: 3176.52,
    volume: 1838166,
  },
  {
    date: '2020-10-05 12:10:00',
    open: 3171.4783,
    low: 3171.4783,
    high: 3176.85,
    close: 3175.91,
    volume: 1816035,
  },
  {
    date: '2020-10-05 12:05:00',
    open: 3170.5,
    low: 3169.8416,
    high: 3173.34,
    close: 3171.4783,
    volume: 1794817,
  },
  {
    date: '2020-10-05 12:00:00',
    open: 3166.485,
    low: 3165.285,
    high: 3171.32,
    close: 3170.5,
    volume: 1770037,
  },
  {
    date: '2020-10-05 11:55:00',
    open: 3174,
    low: 3166.485,
    high: 3174,
    close: 3166.485,
    volume: 1727538,
  },
  {
    date: '2020-10-05 11:50:00',
    open: 3173.69,
    low: 3172.925,
    high: 3175.4778,
    close: 3174,
    volume: 1683761,
  },
  {
    date: '2020-10-05 11:45:00',
    open: 3178.99,
    low: 3174.06,
    high: 3178.99,
    close: 3175.34,
    volume: 1652913,
  },
  {
    date: '2020-10-05 11:40:00',
    open: 3182.346,
    low: 3178.99,
    high: 3183.99,
    close: 3178.99,
    volume: 1615799,
  },
  {
    date: '2020-10-05 11:35:00',
    open: 3185.3088,
    low: 3181.125,
    high: 3185.535,
    close: 3182.346,
    volume: 1595734,
  },
  {
    date: '2020-10-05 11:30:00',
    open: 3184.425,
    low: 3180.56,
    high: 3186.29,
    close: 3185.3088,
    volume: 1579500,
  },
  {
    date: '2020-10-05 11:25:00',
    open: 3182.37,
    low: 3182.37,
    high: 3186.29,
    close: 3184.425,
    volume: 1552892,
  },
  {
    date: '2020-10-05 11:20:00',
    open: 3175,
    low: 3174.0671,
    high: 3182.78,
    close: 3182.37,
    volume: 1515091,
  },
  {
    date: '2020-10-05 11:15:00',
    open: 3179.28,
    low: 3175,
    high: 3181.37,
    close: 3175,
    volume: 1481613,
  },
  {
    date: '2020-10-05 11:10:00',
    open: 3182.83,
    low: 3175.74,
    high: 3182.83,
    close: 3179.28,
    volume: 1459807,
  },
  {
    date: '2020-10-05 11:05:00',
    open: 3182,
    low: 3178.75,
    high: 3182.84,
    close: 3182.83,
    volume: 1426249,
  },
  {
    date: '2020-10-05 11:00:00',
    open: 3183.08,
    low: 3182,
    high: 3185.985,
    close: 3182,
    volume: 1377479,
  },
  {
    date: '2020-10-05 10:55:00',
    open: 3189.53,
    low: 3181.79,
    high: 3189.53,
    close: 3183.08,
    volume: 1345582,
  },
  {
    date: '2020-10-05 10:50:00',
    open: 3192.5906,
    low: 3184.39,
    high: 3192.5906,
    close: 3189.53,
    volume: 1298672,
  },
  {
    date: '2020-10-05 10:45:00',
    open: 3185.56,
    low: 3185,
    high: 3192.5906,
    close: 3192.5906,
    volume: 1254437,
  },
  {
    date: '2020-10-05 10:40:00',
    open: 3186.235,
    low: 3184.01,
    high: 3187.75,
    close: 3185.56,
    volume: 1196024,
  },
  {
    date: '2020-10-05 10:35:00',
    open: 3178.58,
    low: 3176.17,
    high: 3183.9,
    close: 3183.9,
    volume: 1129385,
  },
  {
    date: '2020-10-05 10:30:00',
    open: 3174.98,
    low: 3174.72,
    high: 3181.12,
    close: 3178.58,
    volume: 1083679,
  },
  {
    date: '2020-10-05 10:25:00',
    open: 3181.525,
    low: 3174.44,
    high: 3185,
    close: 3174.98,
    volume: 1047622,
  },
  {
    date: '2020-10-05 10:20:00',
    open: 3180.4226,
    low: 3179.505,
    high: 3183.57,
    close: 3181.525,
    volume: 972205,
  },
  {
    date: '2020-10-05 10:15:00',
    open: 3168.57,
    low: 3168.57,
    high: 3181,
    close: 3180.4226,
    volume: 901472,
  },
  {
    date: '2020-10-05 10:10:00',
    open: 3172,
    low: 3167.62,
    high: 3173.55,
    close: 3168.57,
    volume: 826701,
  },
  {
    date: '2020-10-05 10:05:00',
    open: 3156.54,
    low: 3156.54,
    high: 3173.2234,
    close: 3172,
    volume: 768077,
  },
  {
    date: '2020-10-05 10:00:00',
    open: 3154.84,
    low: 3150.56,
    high: 3157.575,
    close: 3156.54,
    volume: 640369,
  },
  {
    date: '2020-10-05 09:55:00',
    open: 3150,
    low: 3150,
    high: 3156.16,
    close: 3154.84,
    volume: 598340,
  },
  {
    date: '2020-10-05 09:50:00',
    open: 3154.78,
    low: 3150,
    high: 3157.05,
    close: 3150,
    volume: 528241,
  },
  {
    date: '2020-10-05 09:45:00',
    open: 3146.01,
    low: 3143.855,
    high: 3155.9717,
    close: 3154.78,
    volume: 442524,
  },
  {
    date: '2020-10-05 09:40:00',
    open: 3148.14,
    low: 3142.7,
    high: 3149.69,
    close: 3146.01,
    volume: 330480,
  },
  {
    date: '2020-10-05 09:35:00',
    open: 3125,
    low: 3125,
    high: 3150.64,
    close: 3148.14,
    volume: 240131,
  },
  {
    date: '2020-10-05 09:30:00',
    open: 3125,
    low: 3125,
    high: 3125,
    close: 3125,
    volume: 5605301,
  },
  {
    date: '2020-10-02 16:00:00',
    open: 3131.695,
    low: 3125.28,
    high: 3131.695,
    close: 3125.28,
    volume: 5160757,
  },
  {
    date: '2020-10-02 15:55:00',
    open: 3136.84,
    low: 3130.09,
    high: 3136.84,
    close: 3131.695,
    volume: 4992856,
  },
  {
    date: '2020-10-02 15:50:00',
    open: 3139.98,
    low: 3135,
    high: 3139.98,
    close: 3136.84,
    volume: 4893549,
  },
  {
    date: '2020-10-02 15:45:00',
    open: 3139.55,
    low: 3133.7,
    high: 3140.2,
    close: 3139.98,
    volume: 4835630,
  },
  {
    date: '2020-10-02 15:40:00',
    open: 3138.67,
    low: 3138.66,
    high: 3144,
    close: 3139.55,
    volume: 4775587,
  },
];

export const dummyOneMonthData = [
  {
    date: '2020-10-09 16:00:00',
    open: 3279.9211,
    low: 3279.03,
    high: 3288.35,
    close: 3288.35,
    volume: 4525595,
  },
  {
    date: '2020-10-09 15:00:00',
    open: 3284.74,
    low: 3278.38,
    high: 3285.88,
    close: 3280.875,
    volume: 3730153,
  },
  {
    date: '2020-10-09 14:00:00',
    open: 3273.71,
    low: 3269.51,
    high: 3280.73,
    close: 3280.73,
    volume: 3243600,
  },
  {
    date: '2020-10-09 13:00:00',
    open: 3273.31,
    low: 3273.31,
    high: 3274.7275,
    close: 3273.71,
    volume: 2834137,
  },
  {
    date: '2020-10-09 12:00:00',
    open: 3259.3,
    low: 3256.31,
    high: 3263,
    close: 3262.3774,
    volume: 2186640,
  },
  {
    date: '2020-10-09 11:00:00',
    open: 3240.8335,
    low: 3237,
    high: 3248.27,
    close: 3244.71,
    volume: 1548992,
  },
  {
    date: '2020-10-09 10:00:00',
    open: 3190.55,
    low: 3190.55,
    high: 3243.3794,
    close: 3243.3794,
    volume: 821429,
  },
  {
    date: '2020-10-08 16:00:00',
    open: 3192.2175,
    low: 3189.03,
    high: 3192.76,
    close: 3191.37,
    volume: 2954128,
  },
  {
    date: '2020-10-08 15:00:00',
    open: 3193.955,
    low: 3190.99,
    high: 3196.82,
    close: 3193.65,
    volume: 2610697,
  },
  {
    date: '2020-10-08 14:00:00',
    open: 3191.6118,
    low: 3184.495,
    high: 3194.175,
    close: 3184.495,
    volume: 2330374,
  },
  {
    date: '2020-10-08 13:00:00',
    open: 3198.13,
    low: 3196.1802,
    high: 3203.95,
    close: 3200,
    volume: 2130941,
  },
  {
    date: '2020-10-08 12:00:00',
    open: 3199.98,
    low: 3184,
    high: 3203.5,
    close: 3188.18,
    volume: 1871311,
  },
  {
    date: '2020-10-08 11:00:00',
    open: 3200.38,
    low: 3175.285,
    high: 3200.38,
    close: 3189.085,
    volume: 1473263,
  },
  {
    date: '2020-10-08 10:00:00',
    open: 3195.69,
    low: 3190,
    high: 3233,
    close: 3199.275,
    volume: 859246,
  },
  {
    date: '2020-10-07 16:00:00',
    open: 3190.24,
    low: 3183.95,
    high: 3200,
    close: 3195.47,
    volume: 4043427,
  },
  {
    date: '2020-10-07 15:00:00',
    open: 3174.0115,
    low: 3173.77,
    high: 3186.22,
    close: 3185.81,
    volume: 3213389,
  },
  {
    date: '2020-10-07 14:00:00',
    open: 3174.751,
    low: 3171.57,
    high: 3181.43,
    close: 3174.315,
    volume: 2783609,
  },
  {
    date: '2020-10-07 13:00:00',
    open: 3173.41,
    low: 3172.99,
    high: 3175.4,
    close: 3174.751,
    volume: 2471753,
  },
  {
    date: '2020-10-07 12:00:00',
    open: 3164.75,
    low: 3164.75,
    high: 3168.9,
    close: 3167.84,
    volume: 2023486,
  },
  {
    date: '2020-10-07 11:00:00',
    open: 3147.37,
    low: 3141.9,
    high: 3159.43,
    close: 3159.43,
    volume: 1586360,
  },
  {
    date: '2020-10-07 10:00:00',
    open: 3099.96,
    low: 3099.96,
    high: 3172.5605,
    close: 3163.3,
    volume: 911249,
  },
  {
    date: '2020-10-06 16:00:00',
    open: 3092.15,
    low: 3091.665,
    high: 3106.56,
    close: 3102,
    volume: 4679024,
  },
  {
    date: '2020-10-06 15:00:00',
    open: 3164,
    low: 3109.325,
    high: 3170.73,
    close: 3124,
    volume: 3320489,
  },
  {
    date: '2020-10-06 14:00:00',
    open: 3149.69,
    low: 3148.5,
    high: 3157,
    close: 3155.27,
    volume: 2595587,
  },
  {
    date: '2020-10-06 13:00:00',
    open: 3144.05,
    low: 3143.76,
    high: 3155.99,
    close: 3152.99,
    volume: 2328002,
  },
  {
    date: '2020-10-06 12:00:00',
    open: 3147.635,
    low: 3129,
    high: 3150.8992,
    close: 3135.14,
    volume: 2015748,
  },
  {
    date: '2020-10-06 11:00:00',
    open: 3165.975,
    low: 3148.09,
    high: 3169.69,
    close: 3155.6,
    volume: 1446541,
  },
  {
    date: '2020-10-06 10:00:00',
    open: 3199.2,
    low: 3147.6,
    high: 3199.2,
    close: 3154.46,
    volume: 809986,
  },
  {
    date: '2020-10-05 16:00:00',
    open: 3193.01,
    low: 3190.5525,
    high: 3202.5,
    close: 3200.93,
    volume: 3353295,
  },
  {
    date: '2020-10-05 15:00:00',
    open: 3160.52,
    low: 3160,
    high: 3189.01,
    close: 3188.47,
    volume: 2630334,
  },
  {
    date: '2020-10-05 14:00:00',
    open: 3180.5498,
    low: 3162.82,
    high: 3184.72,
    close: 3167.035,
    volume: 2245800,
  },
  {
    date: '2020-10-05 13:00:00',
    open: 3178.9,
    low: 3178.01,
    high: 3180.81,
    close: 3180.5498,
    volume: 1982249,
  },
  {
    date: '2020-10-05 12:00:00',
    open: 3173.69,
    low: 3165.285,
    high: 3175.4778,
    close: 3170.5,
    volume: 1770037,
  },
  {
    date: '2020-10-05 11:00:00',
    open: 3186.235,
    low: 3181.79,
    high: 3192.5906,
    close: 3182,
    volume: 1377479,
  },
  {
    date: '2020-10-05 10:00:00',
    open: 3125,
    low: 3125,
    high: 3157.575,
    close: 3156.54,
    volume: 640369,
  },
  {
    date: '2020-10-02 16:00:00',
    open: 3134.34,
    low: 3125.28,
    high: 3144,
    close: 3125.28,
    volume: 5160757,
  },
  {
    date: '2020-10-02 15:00:00',
    open: 3147.13,
    low: 3126.25,
    high: 3151.28,
    close: 3136.05,
    volume: 4405733,
  },
  {
    date: '2020-10-02 14:00:00',
    open: 3144.62,
    low: 3135.75,
    high: 3152.88,
    close: 3142.4,
    volume: 3924294,
  },
  {
    date: '2020-10-02 13:00:00',
    open: 3147.03,
    low: 3142.56,
    high: 3151.5,
    close: 3144.62,
    volume: 3460380,
  },
  {
    date: '2020-10-02 12:00:00',
    open: 3153.56,
    low: 3140.32,
    high: 3160.74,
    close: 3140.32,
    volume: 2519194,
  },
  {
    date: '2020-10-02 11:00:00',
    open: 3190.71,
    low: 3176.7383,
    high: 3191.945,
    close: 3185.57,
    volume: 1748692,
  },
  {
    date: '2020-10-02 10:00:00',
    open: 3221.26,
    low: 3148.113,
    high: 3221.26,
    close: 3181.575,
    volume: 1102577,
  },
  {
    date: '2020-10-01 16:00:00',
    open: 3216.69,
    low: 3214.77,
    high: 3222.97,
    close: 3222.1,
    volume: 4674888,
  },
  {
    date: '2020-10-01 15:00:00',
    open: 3202.24,
    low: 3200.19,
    high: 3213.36,
    close: 3211.733,
    volume: 3684338,
  },
  {
    date: '2020-10-01 14:00:00',
    open: 3203.28,
    low: 3198.53,
    high: 3210,
    close: 3200.56,
    volume: 3022299,
  },
  {
    date: '2020-10-01 13:00:00',
    open: 3186.368,
    low: 3185.19,
    high: 3202.66,
    close: 3201.285,
    volume: 2532134,
  },
  {
    date: '2020-10-01 12:00:00',
    open: 3187.79,
    low: 3179.155,
    high: 3205.725,
    close: 3194.91,
    volume: 2105977,
  },
  {
    date: '2020-10-01 11:00:00',
    open: 3189.6,
    low: 3172.2007,
    high: 3195.925,
    close: 3188.99,
    volume: 1522887,
  },
  {
    date: '2020-10-01 10:00:00',
    open: 3192.1865,
    low: 3187,
    high: 3195.1626,
    close: 3189.6,
    volume: 741180,
  },
  {
    date: '2020-09-30 16:00:00',
    open: 3151.805,
    low: 3134.26,
    high: 3162.97,
    close: 3149.64,
    volume: 4292217,
  },
  {
    date: '2020-09-30 15:00:00',
    open: 3192.6375,
    low: 3146.17,
    high: 3199.79,
    close: 3167.1145,
    volume: 3423061,
  },
  {
    date: '2020-09-30 14:00:00',
    open: 3187.85,
    low: 3173.25,
    high: 3192.06,
    close: 3187.5,
    volume: 2723279,
  },
  {
    date: '2020-09-30 13:00:00',
    open: 3189.322,
    low: 3186.94,
    high: 3191.875,
    close: 3187.85,
    volume: 2253062,
  },
  {
    date: '2020-09-30 12:00:00',
    open: 3208.14,
    low: 3206.81,
    high: 3212.88,
    close: 3208.75,
    volume: 1820230,
  },
  {
    date: '2020-09-30 11:00:00',
    open: 3199.145,
    low: 3188.87,
    high: 3203.32,
    close: 3191.4685,
    volume: 1286507,
  },
  {
    date: '2020-09-30 10:00:00',
    open: 3144.88,
    low: 3141.14,
    high: 3163.64,
    close: 3161,
    volume: 472775,
  },
  {
    date: '2020-09-29 16:00:00',
    open: 3150.63,
    low: 3143.48,
    high: 3151,
    close: 3146.74,
    volume: 3157773,
  },
  {
    date: '2020-09-29 15:00:00',
    open: 3159.43,
    low: 3156.55,
    high: 3163.455,
    close: 3156.55,
    volume: 2535148,
  },
  {
    date: '2020-09-29 14:00:00',
    open: 3165,
    low: 3162,
    high: 3166.39,
    close: 3162,
    volume: 2161112,
  },
  {
    date: '2020-09-29 13:00:00',
    open: 3161.41,
    low: 3161.037,
    high: 3168.3677,
    close: 3166.38,
    volume: 1877784,
  },
  {
    date: '2020-09-29 12:00:00',
    open: 3165.25,
    low: 3159.86,
    high: 3176.345,
    close: 3164.015,
    volume: 1631447,
  },
  {
    date: '2020-09-29 11:00:00',
    open: 3168.1726,
    low: 3154.001,
    high: 3181.505,
    close: 3165.26,
    volume: 1179593,
  },
  {
    date: '2020-09-29 10:00:00',
    open: 3174.05,
    low: 3159.9,
    high: 3187.54,
    close: 3163.43,
    volume: 632745,
  },
  {
    date: '2020-09-28 16:00:00',
    open: 3168.98,
    low: 3159.9585,
    high: 3173.99,
    close: 3173.8,
    volume: 3703583,
  },
  {
    date: '2020-09-28 15:00:00',
    open: 3160.72,
    low: 3154.45,
    high: 3167.33,
    close: 3165.48,
    volume: 3001609,
  },
  {
    date: '2020-09-28 14:00:00',
    open: 3142.98,
    low: 3139.33,
    high: 3164.95,
    close: 3162.83,
    volume: 2620698,
  },
  {
    date: '2020-09-28 13:00:00',
    open: 3140,
    low: 3140,
    high: 3143.6243,
    close: 3142.98,
    volume: 2225468,
  },
  {
    date: '2020-09-28 12:00:00',
    open: 3140.4226,
    low: 3136.01,
    high: 3144.015,
    close: 3137.02,
    volume: 1852231,
  },
  {
    date: '2020-09-28 11:00:00',
    open: 3145.9924,
    low: 3135.86,
    high: 3148.95,
    close: 3135.86,
    volume: 1504982,
  },
  {
    date: '2020-09-28 10:00:00',
    open: 3095.13,
    low: 3095.13,
    high: 3155.9,
    close: 3140,
    volume: 817035,
  },
  {
    date: '2020-09-25 16:00:00',
    open: 3093.63,
    low: 3087.6401,
    high: 3101.3015,
    close: 3098.45,
    volume: 4122262,
  },
  {
    date: '2020-09-25 15:00:00',
    open: 3068.8472,
    low: 3065.2,
    high: 3085.89,
    close: 3083.25,
    volume: 3148169,
  },
  {
    date: '2020-09-25 14:00:00',
    open: 3049.995,
    low: 3048.17,
    high: 3068.885,
    close: 3066.85,
    volume: 2595771,
  },
  {
    date: '2020-09-25 13:00:00',
    open: 3050.7,
    low: 3048.97,
    high: 3051,
    close: 3049.995,
    volume: 2215156,
  },
  {
    date: '2020-09-25 12:00:00',
    open: 3037.68,
    low: 3034.48,
    high: 3043.73,
    close: 3038.01,
    volume: 1947456,
  },
  {
    date: '2020-09-25 11:00:00',
    open: 3025.39,
    low: 3025.39,
    high: 3041.27,
    close: 3039,
    volume: 1410289,
  },
  {
    date: '2020-09-25 10:00:00',
    open: 3019.79,
    low: 3011.54,
    high: 3053.02,
    close: 3026.465,
    volume: 700264,
  },
  {
    date: '2020-09-24 16:00:00',
    open: 3020.03,
    low: 3017.145,
    high: 3030.31,
    close: 3017.145,
    volume: 5226037,
  },
  {
    date: '2020-09-24 15:00:00',
    open: 3043.07,
    low: 3005.05,
    high: 3043.07,
    close: 3005.05,
    volume: 4388075,
  },
  {
    date: '2020-09-24 14:00:00',
    open: 3052,
    low: 3045.6394,
    high: 3068,
    close: 3045.6394,
    volume: 3814683,
  },
  {
    date: '2020-09-24 13:00:00',
    open: 3053.8,
    low: 3030.9678,
    high: 3055.4507,
    close: 3043.19,
    volume: 3366074,
  },
  {
    date: '2020-09-24 12:00:00',
    open: 3039.7085,
    low: 3034.335,
    high: 3061.735,
    close: 3050.2253,
    volume: 2999694,
  },
  {
    date: '2020-09-24 11:00:00',
    open: 3050.33,
    low: 2993.05,
    high: 3067.5,
    close: 3036.3,
    volume: 2318667,
  },
  {
    date: '2020-09-24 10:00:00',
    open: 2999.86,
    low: 2965.422,
    high: 3037.71,
    close: 3018.8,
    volume: 1009057,
  },
  {
    date: '2020-09-23 16:00:00',
    open: 3004.455,
    low: 2993.46,
    high: 3013.68,
    close: 3001.99,
    volume: 5170407,
  },
  {
    date: '2020-09-23 15:00:00',
    open: 3029.6306,
    low: 3004.555,
    high: 3031.03,
    close: 3009.12,
    volume: 4003680,
  },
  {
    date: '2020-09-23 14:00:00',
    open: 3056.38,
    low: 3043.14,
    high: 3068.45,
    close: 3044.65,
    volume: 3240215,
  },
  {
    date: '2020-09-23 13:00:00',
    open: 3054.0234,
    low: 3052.16,
    high: 3068.17,
    close: 3058.51,
    volume: 2853771,
  },
  {
    date: '2020-09-23 12:00:00',
    open: 3061.08,
    low: 3053.75,
    high: 3064.45,
    close: 3054.0234,
    volume: 2405966,
  },
  {
    date: '2020-09-23 11:00:00',
    open: 3083,
    low: 3074.125,
    high: 3088.94,
    close: 3077.0295,
    volume: 1838269,
  },
  {
    date: '2020-09-23 10:00:00',
    open: 3101.315,
    low: 3068.46,
    high: 3105,
    close: 3076.66,
    volume: 1027837,
  },
  {
    date: '2020-09-22 16:00:00',
    open: 3095.136,
    low: 3095.136,
    high: 3133.555,
    close: 3131.7996,
    volume: 6550004,
  },
  {
    date: '2020-09-22 15:00:00',
    open: 3103.26,
    low: 3092.11,
    high: 3103.45,
    close: 3095.136,
    volume: 5409186,
  },
  {
    date: '2020-09-22 14:00:00',
    open: 3088.754,
    low: 3086.5532,
    high: 3093.94,
    close: 3093.94,
    volume: 4474924,
  },
  {
    date: '2020-09-22 13:00:00',
    open: 3071.98,
    low: 3064.26,
    high: 3081.2563,
    close: 3071.105,
    volume: 3918038,
  },
  {
    date: '2020-09-22 12:00:00',
    open: 3036.47,
    low: 3030.765,
    high: 3049.28,
    close: 3047.99,
    volume: 3118777,
  },
  {
    date: '2020-09-22 11:00:00',
    open: 3038.3,
    low: 3034.001,
    high: 3057.78,
    close: 3037.694,
    volume: 2480138,
  },
  {
    date: '2020-09-22 10:00:00',
    open: 2960.47,
    low: 2960.47,
    high: 3034.9,
    close: 3032.38,
    volume: 1302832,
  },
  {
    date: '2020-09-21 16:00:00',
    open: 2909.9878,
    low: 2907.49,
    high: 2961.7,
    close: 2960.04,
    volume: 5622917,
  },
  {
    date: '2020-09-21 15:00:00',
    open: 2891.45,
    low: 2884.869,
    high: 2903.99,
    close: 2901.99,
    volume: 4536653,
  },
  {
    date: '2020-09-21 14:00:00',
    open: 2896.65,
    low: 2895.16,
    high: 2926.69,
    close: 2901.9,
    volume: 3994509,
  },
  {
    date: '2020-09-21 13:00:00',
    open: 2903.52,
    low: 2889.11,
    high: 2911.0315,
    close: 2896.1,
    volume: 3437433,
  },
  {
    date: '2020-09-21 12:00:00',
    open: 2904.2,
    low: 2903.52,
    high: 2904.2,
    close: 2903.52,
    volume: 2926680,
  },
  {
    date: '2020-09-21 11:00:00',
    open: 2884.74,
    low: 2873.39,
    high: 2886.985,
    close: 2885.6,
    volume: 2293197,
  },
  {
    date: '2020-09-21 10:00:00',
    open: 2909.515,
    low: 2909.515,
    high: 2945.32,
    close: 2922.05,
    volume: 1061148,
  },
  {
    date: '2020-09-18 16:00:00',
    open: 2940,
    low: 2936.65,
    high: 2959.93,
    close: 2954.57,
    volume: 6968809,
  },
  {
    date: '2020-09-18 15:00:00',
    open: 2921.11,
    low: 2920.34,
    high: 2938.5,
    close: 2933.85,
    volume: 5771272,
  },
  {
    date: '2020-09-18 14:00:00',
    open: 2930.7063,
    low: 2906.55,
    high: 2936.515,
    close: 2935.14,
    volume: 5069700,
  },
  {
    date: '2020-09-18 13:00:00',
    open: 2964.5063,
    low: 2928.13,
    high: 2970.32,
    close: 2937.99,
    volume: 4109212,
  },
  {
    date: '2020-09-18 12:00:00',
    open: 2965.607,
    low: 2944,
    high: 2973,
    close: 2962.7,
    volume: 3303730,
  },
  {
    date: '2020-09-18 11:00:00',
    open: 2976.36,
    low: 2963,
    high: 2976.36,
    close: 2965.607,
    volume: 2369960,
  },
  {
    date: '2020-09-18 10:00:00',
    open: 3017.31,
    low: 2992.515,
    high: 3019.31,
    close: 3002.0288,
    volume: 1129443,
  },
  {
    date: '2020-09-17 16:00:00',
    open: 2985.8167,
    low: 2977.3,
    high: 3011.95,
    close: 3007.16,
    volume: 5934219,
  },
  {
    date: '2020-09-17 15:00:00',
    open: 2985.02,
    low: 2984.87,
    high: 2985.8167,
    close: 2985.8167,
    volume: 4988143,
  },
  {
    date: '2020-09-17 14:00:00',
    open: 2998.45,
    low: 2986.0234,
    high: 2998.45,
    close: 2986.5,
    volume: 4546864,
  },
  {
    date: '2020-09-17 13:00:00',
    open: 2989.0532,
    low: 2976,
    high: 2992.64,
    close: 2991.935,
    volume: 4092932,
  },
  {
    date: '2020-09-17 12:00:00',
    open: 3008.01,
    low: 2990,
    high: 3015.13,
    close: 2991.43,
    volume: 3347130,
  },
  {
    date: '2020-09-17 11:00:00',
    open: 3003.925,
    low: 2982.03,
    high: 3029.432,
    close: 3001.45,
    volume: 2616049,
  },
  {
    date: '2020-09-17 10:00:00',
    open: 3078.1,
    low: 2994.33,
    high: 3078.1,
    close: 3009.3296,
    volume: 1324358,
  },
  {
    date: '2020-09-16 16:00:00',
    open: 3094.06,
    low: 3074.21,
    high: 3108.1826,
    close: 3076.8071,
    volume: 3973953,
  },
  {
    date: '2020-09-16 15:00:00',
    open: 3140.55,
    low: 3121.54,
    high: 3144.385,
    close: 3126.8157,
    volume: 2726743,
  },
  {
    date: '2020-09-16 14:00:00',
    open: 3127.73,
    low: 3119.925,
    high: 3130.43,
    close: 3130.3943,
    volume: 2221055,
  },
  {
    date: '2020-09-16 13:00:00',
    open: 3139.515,
    low: 3122.09,
    high: 3139.99,
    close: 3133.68,
    volume: 1955403,
  },
  {
    date: '2020-09-16 12:00:00',
    open: 3133.26,
    low: 3124.55,
    high: 3153.8875,
    close: 3137.77,
    volume: 1687359,
  },
  {
    date: '2020-09-16 11:00:00',
    open: 3160.4048,
    low: 3119.495,
    high: 3163.557,
    close: 3134.37,
    volume: 1286610,
  },
  {
    date: '2020-09-16 10:00:00',
    open: 3148.405,
    low: 3146.32,
    high: 3160.9485,
    close: 3160.4048,
    volume: 631166,
  },
  {
    date: '2020-09-15 16:00:00',
    open: 3146.99,
    low: 3139,
    high: 3158.12,
    close: 3156.41,
    volume: 3607517,
  },
  {
    date: '2020-09-15 15:00:00',
    open: 3148,
    low: 3137.21,
    high: 3157,
    close: 3153.55,
    volume: 2955290,
  },
  {
    date: '2020-09-15 14:00:00',
    open: 3154.7,
    low: 3147.305,
    high: 3157.505,
    close: 3149,
    volume: 2648445,
  },
  {
    date: '2020-09-15 13:00:00',
    open: 3150,
    low: 3150,
    high: 3156.05,
    close: 3154.7,
    volume: 2394745,
  },
  {
    date: '2020-09-15 12:00:00',
    open: 3141.36,
    low: 3131.0322,
    high: 3142.7449,
    close: 3139.0024,
    volume: 2057506,
  },
  {
    date: '2020-09-15 11:00:00',
    open: 3128,
    low: 3110,
    high: 3131.6472,
    close: 3123.37,
    volume: 1605088,
  },
  {
    date: '2020-09-15 10:00:00',
    open: 3102.97,
    low: 3102.97,
    high: 3161.93,
    close: 3160.99,
    volume: 741529,
  },
  {
    date: '2020-09-14 16:00:00',
    open: 3111.75,
    low: 3099,
    high: 3111.75,
    close: 3101.51,
    volume: 4170806,
  },
  {
    date: '2020-09-14 15:00:00',
    open: 3104.92,
    low: 3102.05,
    high: 3118.16,
    close: 3118.16,
    volume: 3354202,
  },
  {
    date: '2020-09-14 14:00:00',
    open: 3112.9,
    low: 3096.52,
    high: 3119.6614,
    close: 3113.805,
    volume: 2778938,
  },
  {
    date: '2020-09-14 13:00:00',
    open: 3139.95,
    low: 3119.88,
    high: 3146.7778,
    close: 3126.0735,
    volume: 2177958,
  },
  {
    date: '2020-09-14 12:00:00',
    open: 3168.06,
    low: 3163.61,
    high: 3179.23,
    close: 3165.5,
    volume: 1633722,
  },
  {
    date: '2020-09-14 11:00:00',
    open: 3159.088,
    low: 3158.42,
    high: 3186.9,
    close: 3174.66,
    volume: 1326748,
  },
  {
    date: '2020-09-14 10:00:00',
    open: 3116.22,
    low: 3116.22,
    high: 3178.77,
    close: 3157.08,
    volume: 704968,
  },
  {
    date: '2020-09-11 16:00:00',
    open: 3108.54,
    low: 3106.98,
    high: 3119.23,
    close: 3117.6199,
    volume: 4791635,
  },
  {
    date: '2020-09-11 15:00:00',
    open: 3112.9,
    low: 3107.375,
    high: 3124,
    close: 3110.05,
    volume: 3967424,
  },
  {
    date: '2020-09-11 14:00:00',
    open: 3094.645,
    low: 3092.15,
    high: 3113.43,
    close: 3092.15,
    volume: 3271226,
  },
  {
    date: '2020-09-11 13:00:00',
    open: 3146.9321,
    low: 3111.525,
    high: 3154.89,
    close: 3111.525,
    volume: 2492644,
  },
  {
    date: '2020-09-11 12:00:00',
    open: 3176.465,
    low: 3147,
    high: 3180.34,
    close: 3147,
    volume: 1833800,
  },
  {
    date: '2020-09-11 11:00:00',
    open: 3171.19,
    low: 3143.8027,
    high: 3190,
    close: 3176.0967,
    volume: 1392317,
  },
  {
    date: '2020-09-11 10:00:00',
    open: 3175.11,
    low: 3146,
    high: 3217.3408,
    close: 3150.4,
    volume: 741557,
  },
  {
    date: '2020-09-10 16:00:00',
    open: 3182.74,
    low: 3173.33,
    high: 3198.89,
    close: 3177.22,
    volume: 4985828,
  },
  {
    date: '2020-09-10 15:00:00',
    open: 3238.8,
    low: 3194.01,
    high: 3238.8,
    close: 3210.68,
    volume: 4027543,
  },
  {
    date: '2020-09-10 14:00:00',
    open: 3281.76,
    low: 3250.2832,
    high: 3290.93,
    close: 3256.125,
    volume: 3207505,
  },
  {
    date: '2020-09-10 13:00:00',
    open: 3304.65,
    low: 3264.78,
    high: 3307.88,
    close: 3282.37,
    volume: 2809497,
  },
  {
    date: '2020-09-10 12:00:00',
    open: 3305.89,
    low: 3298.36,
    high: 3307.7263,
    close: 3304.65,
    volume: 2364842,
  },
  {
    date: '2020-09-10 11:00:00',
    open: 3318.02,
    low: 3293.14,
    high: 3327.4,
    close: 3293.14,
    volume: 1777130,
  },
  {
    date: '2020-09-10 10:00:00',
    open: 3327.57,
    low: 3308.47,
    high: 3337.79,
    close: 3328.44,
    volume: 839930,
  },
  {
    date: '2020-09-09 16:00:00',
    open: 3284.38,
    low: 3266.6,
    high: 3303.175,
    close: 3266.6,
    volume: 4723606,
  },
  {
    date: '2020-09-09 15:00:00',
    open: 3287.2825,
    low: 3283.54,
    high: 3289.37,
    close: 3284.38,
    volume: 4033935,
  },
  {
    date: '2020-09-09 14:00:00',
    open: 3262.63,
    low: 3262.44,
    high: 3281.0046,
    close: 3270,
    volume: 3533185,
  },
  {
    date: '2020-09-09 13:00:00',
    open: 3284.4531,
    low: 3283.8,
    high: 3295.33,
    close: 3292.33,
    volume: 3079670,
  },
  {
    date: '2020-09-09 12:00:00',
    open: 3264.0276,
    low: 3252.155,
    high: 3275.59,
    close: 3272.3398,
    volume: 2632725,
  },
  {
    date: '2020-09-09 11:00:00',
    open: 3225.04,
    low: 3221.84,
    high: 3274.99,
    close: 3267.84,
    volume: 2060224,
  },
  {
    date: '2020-09-09 10:00:00',
    open: 3149.84,
    low: 3149.84,
    high: 3222.17,
    close: 3198.695,
    volume: 977376,
  },
  {
    date: '2020-09-08 16:00:00',
    open: 3173.67,
    low: 3144.02,
    high: 3176.558,
    close: 3144.02,
    volume: 5608283,
  },
  {
    date: '2020-09-08 15:00:00',
    open: 3178.8655,
    low: 3141.7002,
    high: 3182.9648,
    close: 3160.6326,
    volume: 4652194,
  },
  {
    date: '2020-09-08 14:00:00',
    open: 3193.27,
    low: 3184.06,
    high: 3216.01,
    close: 3206.545,
    volume: 3938390,
  },
  {
    date: '2020-09-08 13:00:00',
    open: 3196.51,
    low: 3185,
    high: 3208.6567,
    close: 3205.53,
    volume: 3542911,
  },
  {
    date: '2020-09-08 12:00:00',
    open: 3214.05,
    low: 3174.01,
    high: 3229.775,
    close: 3195.46,
    volume: 3136565,
  },
  {
    date: '2020-09-08 11:00:00',
    open: 3218.3,
    low: 3214.05,
    high: 3223.9,
    close: 3214.05,
    volume: 2505551,
  },
  {
    date: '2020-09-08 10:00:00',
    open: 3170,
    low: 3155.185,
    high: 3205.57,
    close: 3200.9512,
    volume: 1457878,
  },
  {
    date: '2020-09-04 16:00:00',
    open: 3295.985,
    low: 3293.44,
    high: 3301.53,
    close: 3296.745,
    volume: 8404120,
  },
  {
    date: '2020-09-04 15:00:00',
    open: 3276.27,
    low: 3276.0032,
    high: 3318.715,
    close: 3317.27,
    volume: 7302906,
  },
  {
    date: '2020-09-04 14:00:00',
    open: 3217.21,
    low: 3212.7,
    high: 3248.01,
    close: 3247.5532,
    volume: 6477663,
  },
  {
    date: '2020-09-04 13:00:00',
    open: 3240.6328,
    low: 3240.37,
    high: 3286.94,
    close: 3263.34,
    volume: 5905176,
  },
  {
    date: '2020-09-04 12:00:00',
    open: 3173,
    low: 3163.02,
    high: 3268.5488,
    close: 3255.1921,
    volume: 5145986,
  },
  {
    date: '2020-09-04 11:00:00',
    open: 3281.5,
    low: 3113.5,
    high: 3285.98,
    close: 3177.0789,
    volume: 3783829,
  },
  {
    date: '2020-09-04 10:00:00',
    open: 3368,
    low: 3260.85,
    high: 3381.3813,
    close: 3271.76,
    volume: 1458903,
  },
  {
    date: '2020-09-03 16:00:00',
    open: 3324.45,
    low: 3303,
    high: 3377.54,
    close: 3371.675,
    volume: 7512448,
  },
  {
    date: '2020-09-03 15:00:00',
    open: 3351.225,
    low: 3332.0588,
    high: 3358.55,
    close: 3334.01,
    volume: 5596061,
  },
  {
    date: '2020-09-03 14:00:00',
    open: 3341.87,
    low: 3335,
    high: 3376.27,
    close: 3350.94,
    volume: 5003992,
  },
  {
    date: '2020-09-03 13:00:00',
    open: 3368.9983,
    low: 3346.2378,
    high: 3380.446,
    close: 3351.69,
    volume: 4425537,
  },
  {
    date: '2020-09-03 12:00:00',
    open: 3386.38,
    low: 3365.869,
    high: 3393.5063,
    close: 3368.9983,
    volume: 3662245,
  },
  {
    date: '2020-09-03 11:00:00',
    open: 3402.54,
    low: 3360.82,
    high: 3410,
    close: 3407.19,
    volume: 2486301,
  },
  {
    date: '2020-09-03 10:00:00',
    open: 3458.17,
    low: 3441.978,
    high: 3478.445,
    close: 3468.99,
    volume: 1008811,
  },
  {
    date: '2020-09-02 16:00:00',
    open: 3521.83,
    low: 3521.83,
    high: 3534.455,
    close: 3533.31,
    volume: 3627782,
  },
  {
    date: '2020-09-02 15:00:00',
    open: 3523.503,
    low: 3521.83,
    high: 3526.54,
    close: 3521.83,
    volume: 2974586,
  },
  {
    date: '2020-09-02 14:00:00',
    open: 3531.9,
    low: 3525.1045,
    high: 3532.15,
    close: 3525.399,
    volume: 2743276,
  },
  {
    date: '2020-09-02 13:00:00',
    open: 3515.01,
    low: 3510.04,
    high: 3518,
    close: 3511.5076,
    volume: 2397614,
  },
  {
    date: '2020-09-02 12:00:00',
    open: 3503.775,
    low: 3487.4956,
    high: 3516.67,
    close: 3503.2947,
    volume: 2123989,
  },
  {
    date: '2020-09-02 11:00:00',
    open: 3518.915,
    low: 3515,
    high: 3535.01,
    close: 3525.25,
    volume: 1567443,
  },
  {
    date: '2020-09-02 10:00:00',
    open: 3499.12,
    low: 3499.12,
    high: 3552.25,
    close: 3511.5,
    volume: 866783,
  },
  {
    date: '2020-09-01 16:00:00',
    open: 3496.09,
    low: 3492.51,
    high: 3501.88,
    close: 3500,
    volume: 3210899,
  },
  {
    date: '2020-09-01 15:00:00',
    open: 3498.89,
    low: 3491.6,
    high: 3501.48,
    close: 3498.79,
    volume: 2804498,
  },
  {
    date: '2020-09-01 14:00:00',
    open: 3489.17,
    low: 3489.17,
    high: 3503.45,
    close: 3499.48,
    volume: 2571770,
  },
  {
    date: '2020-09-01 13:00:00',
    open: 3496.5,
    low: 3486.3,
    high: 3496.5,
    close: 3492.1472,
    volume: 2296028,
  },
  {
    date: '2020-09-01 12:00:00',
    open: 3483.56,
    low: 3483.56,
    high: 3503,
    close: 3487.89,
    volume: 1931385,
  },
  {
    date: '2020-09-01 11:00:00',
    open: 3487.9,
    low: 3478.01,
    high: 3487.9,
    close: 3483.56,
    volume: 1510454,
  },
  {
    date: '2020-09-01 10:00:00',
    open: 3476.446,
    low: 3472.81,
    high: 3501.8235,
    close: 3498.71,
    volume: 884768,
  },
  {
    date: '2020-08-31 16:00:00',
    open: 3482,
    low: 3452.04,
    high: 3484.79,
    close: 3452.5,
    volume: 3741556,
  },
  {
    date: '2020-08-31 15:00:00',
    open: 3482.68,
    low: 3476,
    high: 3488.4,
    close: 3487.813,
    volume: 3041394,
  },
  {
    date: '2020-08-31 14:00:00',
    open: 3482,
    low: 3481.105,
    high: 3484.729,
    close: 3482.68,
    volume: 2798916,
  },
  {
    date: '2020-08-31 13:00:00',
    open: 3476.875,
    low: 3475.45,
    high: 3479.85,
    close: 3479.4,
    volume: 2472799,
  },
];

export const dummyDailyData = {
  symbol: 'AMZN',
  historical: [
    {
      date: '2020-10-09',
      close: 3286.649902,
    },
    {
      date: '2020-10-08',
      close: 3190.550049,
    },
    {
      date: '2020-10-07',
      close: 3195.689941,
    },
    {
      date: '2020-10-06',
      close: 3099.959961,
    },
    {
      date: '2020-10-05',
      close: 3199.199951,
    },
    {
      date: '2020-10-02',
      close: 3125,
    },
    {
      date: '2020-10-01',
      close: 3221.26001,
    },
    {
      date: '2020-09-30',
      close: 3148.72998,
    },
    {
      date: '2020-09-29',
      close: 3144.879883,
    },
    {
      date: '2020-09-28',
      close: 3174.050049,
    },
    {
      date: '2020-09-25',
      close: 3095.129883,
    },
    {
      date: '2020-09-24',
      close: 3019.790039,
    },
    {
      date: '2020-09-23',
      close: 2999.860107,
    },
    {
      date: '2020-09-22',
      close: 3128.98999,
    },
    {
      date: '2020-09-21',
      close: 2960.469971,
    },
    {
      date: '2020-09-18',
      close: 2954.909912,
    },
    {
      date: '2020-09-17',
      close: 3008.72998,
    },
    {
      date: '2020-09-16',
      close: 3078.100098,
    },
    {
      date: '2020-09-15',
      close: 3156.129883,
    },
    {
      date: '2020-09-14',
      close: 3102.969971,
    },
    {
      date: '2020-09-11',
      close: 3116.219971,
    },
    {
      date: '2020-09-10',
      close: 3175.110107,
    },
    {
      date: '2020-09-09',
      close: 3268.610107,
    },
    {
      date: '2020-09-08',
      close: 3149.840088,
    },
    {
      date: '2020-09-04',
      close: 3294.620117,
    },
    {
      date: '2020-09-03',
      close: 3368,
    },
    {
      date: '2020-09-02',
      close: 3531.449951,
    },
    {
      date: '2020-09-01',
      close: 3499.120117,
    },
    {
      date: '2020-08-31',
      close: 3450.959961,
    },
    {
      date: '2020-08-28',
      close: 3401.800049,
    },
    {
      date: '2020-08-27',
      close: 3400,
    },
    {
      date: '2020-08-26',
      close: 3441.850098,
    },
    {
      date: '2020-08-25',
      close: 3346.48999,
    },
    {
      date: '2020-08-24',
      close: 3307.459961,
    },
    {
      date: '2020-08-21',
      close: 3284.719971,
    },
    {
      date: '2020-08-20',
      close: 3297.370117,
    },
    {
      date: '2020-08-19',
      close: 3260.47998,
    },
    {
      date: '2020-08-18',
      close: 3312.48999,
    },
    {
      date: '2020-08-17',
      close: 3182.409912,
    },
    {
      date: '2020-08-14',
      close: 3148.02002,
    },
    {
      date: '2020-08-13',
      close: 3161.02002,
    },
    {
      date: '2020-08-12',
      close: 3162.23999,
    },
    {
      date: '2020-08-11',
      close: 3080.669922,
    },
    {
      date: '2020-08-10',
      close: 3148.159912,
    },
    {
      date: '2020-08-07',
      close: 3167.46,
    },
    {
      date: '2020-08-06',
      close: 3225,
    },
    {
      date: '2020-08-05',
      close: 3205.03,
    },
    {
      date: '2020-08-04',
      close: 3138.8301,
    },
    {
      date: '2020-08-03',
      close: 3111.8899,
    },
    {
      date: '2020-07-31',
      close: 3164.6799,
    },
    {
      date: '2020-07-30',
      close: 3051.8799,
    },
    {
      date: '2020-07-29',
      close: 3033.53,
    },
    {
      date: '2020-07-28',
      close: 3000.3301,
    },
    {
      date: '2020-07-27',
      close: 3055.21,
    },
    {
      date: '2020-07-24',
      close: 3008.9099,
    },
    {
      date: '2020-07-23',
      close: 2986.55,
    },
    {
      date: '2020-07-22',
      close: 3099.9099,
    },
    {
      date: '2020-07-21',
      close: 3138.29,
    },
    {
      date: '2020-07-20',
      close: 3196.8401,
    },
    {
      date: '2020-07-17',
      close: 2961.97,
    },
    {
      date: '2020-07-16',
      close: 2999.8999,
    },
    {
      date: '2020-07-15',
      close: 3008.8701,
    },
    {
      date: '2020-07-14',
      close: 3084,
    },
    {
      date: '2020-07-13',
      close: 3104,
    },
    {
      date: '2020-07-10',
      close: 3200,
    },
    {
      date: '2020-07-09',
      close: 3182.6299,
    },
    {
      date: '2020-07-08',
      close: 3081.1101,
    },
    {
      date: '2020-07-07',
      close: 3000.1201,
    },
    {
      date: '2020-07-06',
      close: 3057.04,
    },
    {
      date: '2020-07-02',
      close: 2890.3,
    },
    {
      date: '2020-07-01',
      close: 2878.7,
    },
    {
      date: '2020-06-30',
      close: 2758.8201,
    },
    {
      date: '2020-06-29',
      close: 2680.3799,
    },
    {
      date: '2020-06-26',
      close: 2692.8701,
    },
    {
      date: '2020-06-25',
      close: 2754.5801,
    },
    {
      date: '2020-06-24',
      close: 2734.3999,
    },
    {
      date: '2020-06-23',
      close: 2764.4099,
    },
    {
      date: '2020-06-22',
      close: 2713.8201,
    },
    {
      date: '2020-06-19',
      close: 2675.01,
    },
    {
      date: '2020-06-18',
      close: 2653.98,
    },
    {
      date: '2020-06-17',
      close: 2640.98,
    },
    {
      date: '2020-06-16',
      close: 2615.27,
    },
    {
      date: '2020-06-15',
      close: 2572.6799,
    },
    {
      date: '2020-06-12',
      close: 2545.02,
    },
    {
      date: '2020-06-11',
      close: 2557.96,
    },
    {
      date: '2020-06-10',
      close: 2647.45,
    },
    {
      date: '2020-06-09',
      close: 2600.8601,
    },
    {
      date: '2020-06-08',
      close: 2524.0601,
    },
    {
      date: '2020-06-05',
      close: 2483,
    },
    {
      date: '2020-06-04',
      close: 2460.6001,
    },
    {
      date: '2020-06-03',
      close: 2478.3999,
    },
    {
      date: '2020-06-02',
      close: 2472.4099,
    },
    {
      date: '2020-06-01',
      close: 2471.04,
    },
    {
      date: '2020-05-29',
      close: 2442.3701,
    },
    {
      date: '2020-05-28',
      close: 2401.1001,
    },
    {
      date: '2020-05-27',
      close: 2410.3899,
    },
    {
      date: '2020-05-26',
      close: 2421.8601,
    },
    {
      date: '2020-05-22',
      close: 2436.8799,
    },
    {
      date: '2020-05-21',
      close: 2446.74,
    },
    {
      date: '2020-05-20',
      close: 2497.9399,
    },
    {
      date: '2020-05-19',
      close: 2449.3301,
    },
    {
      date: '2020-05-18',
      close: 2426.26,
    },
    {
      date: '2020-05-15',
      close: 2409.78,
    },
    {
      date: '2020-05-14',
      close: 2388.8501,
    },
    {
      date: '2020-05-13',
      close: 2367.9199,
    },
    {
      date: '2020-05-12',
      close: 2356.95,
    },
    {
      date: '2020-05-11',
      close: 2409,
    },
    {
      date: '2020-05-08',
      close: 2379.6101,
    },
    {
      date: '2020-05-07',
      close: 2367.6101,
    },
    {
      date: '2020-05-06',
      close: 2351.26,
    },
    {
      date: '2020-05-05',
      close: 2317.8,
    },
    {
      date: '2020-05-04',
      close: 2315.99,
    },
    {
      date: '2020-05-01',
      close: 2286.04,
    },
    {
      date: '2020-04-30',
      close: 2474,
    },
    {
      date: '2020-04-29',
      close: 2372.71,
    },
    {
      date: '2020-04-28',
      close: 2314.0801,
    },
    {
      date: '2020-04-27',
      close: 2376,
    },
    {
      date: '2020-04-24',
      close: 2410.22,
    },
    {
      date: '2020-04-23',
      close: 2399.45,
    },
    {
      date: '2020-04-22',
      close: 2363.49,
    },
    {
      date: '2020-04-21',
      close: 2328.1201,
    },
    {
      date: '2020-04-20',
      close: 2393.6101,
    },
    {
      date: '2020-04-17',
      close: 2375,
    },
    {
      date: '2020-04-16',
      close: 2408.1899,
    },
    {
      date: '2020-04-15',
      close: 2307.6799,
    },
    {
      date: '2020-04-14',
      close: 2283.3201,
    },
    {
      date: '2020-04-13',
      close: 2168.8701,
    },
    {
      date: '2020-04-09',
      close: 2042.76,
    },
    {
      date: '2020-04-08',
      close: 2043,
    },
    {
      date: '2020-04-07',
      close: 2011.6,
    },
    {
      date: '2020-04-06',
      close: 1997.59,
    },
    {
      date: '2020-04-03',
      close: 1906.59,
    },
    {
      date: '2020-04-02',
      close: 1918.83,
    },
    {
      date: '2020-04-01',
      close: 1907.7,
    },
    {
      date: '2020-03-31',
      close: 1949.72,
    },
    {
      date: '2020-03-30',
      close: 1963.95,
    },
    {
      date: '2020-03-27',
      close: 1900.1,
    },
    {
      date: '2020-03-26',
      close: 1955.49,
    },
    {
      date: '2020-03-25',
      close: 1885.84,
    },
    {
      date: '2020-03-24',
      close: 1940.1,
    },
    {
      date: '2020-03-23',
      close: 1902.83,
    },
    {
      date: '2020-03-20',
      close: 1846.09,
    },
    {
      date: '2020-03-19',
      close: 1880.9301,
    },
    {
      date: '2020-03-18',
      close: 1830,
    },
    {
      date: '2020-03-17',
      close: 1807.84,
    },
    {
      date: '2020-03-16',
      close: 1689.15,
    },
    {
      date: '2020-03-13',
      close: 1785,
    },
    {
      date: '2020-03-12',
      close: 1676.61,
    },
    {
      date: '2020-03-11',
      close: 1820.86,
    },
    {
      date: '2020-03-10',
      close: 1891.8199,
    },
    {
      date: '2020-03-09',
      close: 1800.61,
    },
    {
      date: '2020-03-06',
      close: 1901.09,
    },
    {
      date: '2020-03-05',
      close: 1924.03,
    },
    {
      date: '2020-03-04',
      close: 1975.83,
    },
    {
      date: '2020-03-03',
      close: 1908.99,
    },
    {
      date: '2020-03-02',
      close: 1953.95,
    },
    {
      date: '2020-02-28',
      close: 1883.75,
    },
    {
      date: '2020-02-27',
      close: 1884.3,
    },
    {
      date: '2020-02-26',
      close: 1979.59,
    },
    {
      date: '2020-02-25',
      close: 1972.74,
    },
    {
      date: '2020-02-24',
      close: 2009.29,
    },
    {
      date: '2020-02-21',
      close: 2095.97,
    },
    {
      date: '2020-02-20',
      close: 2153.1001,
    },
    {
      date: '2020-02-19',
      close: 2170.22,
    },
    {
      date: '2020-02-18',
      close: 2155.6699,
    },
    {
      date: '2020-02-14',
      close: 2134.8701,
    },
    {
      date: '2020-02-13',
      close: 2149.8701,
    },
    {
      date: '2020-02-12',
      close: 2160,
    },
    {
      date: '2020-02-11',
      close: 2150.8,
    },
    {
      date: '2020-02-10',
      close: 2133.9099,
    },
    {
      date: '2020-02-07',
      close: 2079.28,
    },
    {
      date: '2020-02-06',
      close: 2050.23,
    },
    {
      date: '2020-02-05',
      close: 2039.87,
    },
    {
      date: '2020-02-04',
      close: 2049.6699,
    },
    {
      date: '2020-02-03',
      close: 2004.2,
    },
    {
      date: '2020-01-31',
      close: 2008.72,
    },
    {
      date: '2020-01-30',
      close: 1870.6801,
    },
    {
      date: '2020-01-29',
      close: 1858,
    },
    {
      date: '2020-01-28',
      close: 1853.25,
    },
    {
      date: '2020-01-27',
      close: 1828.34,
    },
    {
      date: '2020-01-24',
      close: 1861.64,
    },
    {
      date: '2020-01-23',
      close: 1884.58,
    },
    {
      date: '2020-01-22',
      close: 1887.46,
    },
    {
      date: '2020-01-21',
      close: 1892,
    },
    {
      date: '2020-01-17',
      close: 1864.72,
    },
    {
      date: '2020-01-16',
      close: 1877.9399,
    },
    {
      date: '2020-01-15',
      close: 1862.02,
    },
    {
      date: '2020-01-14',
      close: 1869.4399,
    },
    {
      date: '2020-01-13',
      close: 1891.3,
    },
    {
      date: '2020-01-10',
      close: 1883.16,
    },
    {
      date: '2020-01-09',
      close: 1901.05,
    },
    {
      date: '2020-01-08',
      close: 1891.97,
    },
    {
      date: '2020-01-07',
      close: 1906.86,
    },
    {
      date: '2020-01-06',
      close: 1902.88,
    },
    {
      date: '2020-01-03',
      close: 1874.97,
    },
    {
      date: '2020-01-02',
      close: 1898.01,
    },
    {
      date: '2019-12-31',
      close: 1847.84,
    },
    {
      date: '2019-12-30',
      close: 1846.89,
    },
    {
      date: '2019-12-27',
      close: 1869.8,
    },
    {
      date: '2019-12-26',
      close: 1868.77,
    },
    {
      date: '2019-12-24',
      close: 1789.21,
    },
    {
      date: '2019-12-23',
      close: 1793,
    },
    {
      date: '2019-12-20',
      close: 1786.5,
    },
    {
      date: '2019-12-19',
      close: 1792.28,
    },
    {
      date: '2019-12-18',
      close: 1784.03,
    },
    {
      date: '2019-12-17',
      close: 1790.66,
    },
    {
      date: '2019-12-16',
      close: 1769.21,
    },
    {
      date: '2019-12-13',
      close: 1760.9399,
    },
    {
      date: '2019-12-12',
      close: 1760.33,
    },
    {
      date: '2019-12-11',
      close: 1748.72,
    },
    {
      date: '2019-12-10',
      close: 1739.21,
    },
    {
      date: '2019-12-09',
      close: 1749.51,
    },
    {
      date: '2019-12-06',
      close: 1751.6,
    },
    {
      date: '2019-12-05',
      close: 1740.48,
    },
    {
      date: '2019-12-04',
      close: 1760.6899,
    },
    {
      date: '2019-12-03',
      close: 1769.96,
    },
    {
      date: '2019-12-02',
      close: 1781.6,
    },
    {
      date: '2019-11-29',
      close: 1800.8,
    },
    {
      date: '2019-11-27',
      close: 1818.51,
    },
    {
      date: '2019-11-26',
      close: 1796.9399,
    },
    {
      date: '2019-11-25',
      close: 1773.84,
    },
    {
      date: '2019-11-22',
      close: 1745.72,
    },
    {
      date: '2019-11-21',
      close: 1734.71,
    },
    {
      date: '2019-11-20',
      close: 1745.53,
    },
    {
      date: '2019-11-19',
      close: 1752.79,
    },
    {
      date: '2019-11-18',
      close: 1752.53,
    },
    {
      date: '2019-11-15',
      close: 1739.49,
    },
    {
      date: '2019-11-14',
      close: 1754.6,
    },
    {
      date: '2019-11-13',
      close: 1753.11,
    },
    {
      date: '2019-11-12',
      close: 1778,
    },
    {
      date: '2019-11-11',
      close: 1771.65,
    },
    {
      date: '2019-11-08',
      close: 1785.88,
    },
    {
      date: '2019-11-07',
      close: 1788.2,
    },
    {
      date: '2019-11-06',
      close: 1795.77,
    },
    {
      date: '2019-11-05',
      close: 1801.71,
    },
    {
      date: '2019-11-04',
      close: 1804.66,
    },
    {
      date: '2019-11-01',
      close: 1791.4399,
    },
    {
      date: '2019-10-31',
      close: 1776.66,
    },
    {
      date: '2019-10-30',
      close: 1779.99,
    },
    {
      date: '2019-10-29',
      close: 1762.71,
    },
    {
      date: '2019-10-28',
      close: 1777.08,
    },
    {
      date: '2019-10-25',
      close: 1761.33,
    },
    {
      date: '2019-10-24',
      close: 1780.78,
    },
    {
      date: '2019-10-23',
      close: 1762.17,
    },
    {
      date: '2019-10-22',
      close: 1765.73,
    },
    {
      date: '2019-10-21',
      close: 1785.66,
    },
    {
      date: '2019-10-18',
      close: 1757.51,
    },
    {
      date: '2019-10-17',
      close: 1787.48,
    },
    {
      date: '2019-10-16',
      close: 1777.4301,
    },
    {
      date: '2019-10-15',
      close: 1767.38,
    },
    {
      date: '2019-10-14',
      close: 1736.4301,
    },
    {
      date: '2019-10-11',
      close: 1731.92,
    },
    {
      date: '2019-10-10',
      close: 1720.26,
    },
    {
      date: '2019-10-09',
      close: 1721.99,
    },
    {
      date: '2019-10-08',
      close: 1705.51,
    },
    {
      date: '2019-10-07',
      close: 1732.66,
    },
    {
      date: '2019-10-04',
      close: 1739.65,
    },
    {
      date: '2019-10-03',
      close: 1724.42,
    },
    {
      date: '2019-10-02',
      close: 1713.23,
    },
    {
      date: '2019-10-01',
      close: 1735.65,
    },
    {
      date: '2019-09-30',
      close: 1735.91,
    },
    {
      date: '2019-09-27',
      close: 1725.45,
    },
    {
      date: '2019-09-26',
      close: 1739.84,
    },
    {
      date: '2019-09-25',
      close: 1768.33,
    },
    {
      date: '2019-09-24',
      close: 1741.61,
    },
    {
      date: '2019-09-23',
      close: 1785.3,
    },
    {
      date: '2019-09-20',
      close: 1794.16,
    },
    {
      date: '2019-09-19',
      close: 1821.5,
    },
    {
      date: '2019-09-18',
      close: 1817.46,
    },
    {
      date: '2019-09-17',
      close: 1822.55,
    },
    {
      date: '2019-09-16',
      close: 1807.84,
    },
    {
      date: '2019-09-13',
      close: 1839.34,
    },
    {
      date: '2019-09-12',
      close: 1843.55,
    },
    {
      date: '2019-09-11',
      close: 1822.99,
    },
    {
      date: '2019-09-10',
      close: 1820.55,
    },
    {
      date: '2019-09-09',
      close: 1831.35,
    },
    {
      date: '2019-09-06',
      close: 1833.51,
    },
    {
      date: '2019-09-05',
      close: 1840.72,
    },
    {
      date: '2019-09-04',
      close: 1800.62,
    },
    {
      date: '2019-09-03',
      close: 1789.84,
    },
    {
      date: '2019-08-30',
      close: 1776.29,
    },
    {
      date: '2019-08-29',
      close: 1786.4,
    },
    {
      date: '2019-08-28',
      close: 1764.25,
    },
    {
      date: '2019-08-27',
      close: 1761.83,
    },
    {
      date: '2019-08-26',
      close: 1768.87,
    },
    {
      date: '2019-08-23',
      close: 1749.62,
    },
    {
      date: '2019-08-22',
      close: 1804.66,
    },
    {
      date: '2019-08-21',
      close: 1823.54,
    },
    {
      date: '2019-08-20',
      close: 1801.38,
    },
    {
      date: '2019-08-19',
      close: 1816.12,
    },
    {
      date: '2019-08-16',
      close: 1792.5699,
    },
    {
      date: '2019-08-15',
      close: 1776.12,
    },
    {
      date: '2019-08-14',
      close: 1762.96,
    },
    {
      date: '2019-08-13',
      close: 1824.34,
    },
    {
      date: '2019-08-12',
      close: 1784.92,
    },
    {
      date: '2019-08-09',
      close: 1807.58,
    },
    {
      date: '2019-08-08',
      close: 1832.89,
    },
    {
      date: '2019-08-07',
      close: 1793.4,
    },
    {
      date: '2019-08-06',
      close: 1787.83,
    },
    {
      date: '2019-08-05',
      close: 1765.13,
    },
    {
      date: '2019-08-02',
      close: 1823.24,
    },
    {
      date: '2019-08-01',
      close: 1855.3199,
    },
    {
      date: '2019-07-31',
      close: 1866.78,
    },
    {
      date: '2019-07-30',
      close: 1898.53,
    },
    {
      date: '2019-07-29',
      close: 1912.45,
    },
    {
      date: '2019-07-26',
      close: 1943.05,
    },
    {
      date: '2019-07-25',
      close: 1973.8199,
    },
    {
      date: '2019-07-24',
      close: 2000.8101,
    },
    {
      date: '2019-07-23',
      close: 1994.49,
    },
    {
      date: '2019-07-22',
      close: 1985.63,
    },
    {
      date: '2019-07-19',
      close: 1964.52,
    },
    {
      date: '2019-07-18',
      close: 1977.9,
    },
    {
      date: '2019-07-17',
      close: 1992.03,
    },
    {
      date: '2019-07-16',
      close: 2009.9,
    },
    {
      date: '2019-07-15',
      close: 2020.99,
    },
    {
      date: '2019-07-12',
      close: 2011,
    },
    {
      date: '2019-07-11',
      close: 2001.0699,
    },
    {
      date: '2019-07-10',
      close: 2017.41,
    },
    {
      date: '2019-07-09',
      close: 1988.3,
    },
    {
      date: '2019-07-08',
      close: 1952.3199,
    },
    {
      date: '2019-07-05',
      close: 1942.91,
    },
    {
      date: '2019-07-03',
      close: 1939,
    },
    {
      date: '2019-07-02',
      close: 1934.3101,
    },
    {
      date: '2019-07-01',
      close: 1922.1899,
    },
    {
      date: '2019-06-28',
      close: 1893.63,
    },
    {
      date: '2019-06-27',
      close: 1904.28,
    },
    {
      date: '2019-06-26',
      close: 1897.83,
    },
    {
      date: '2019-06-25',
      close: 1878.27,
    },
    {
      date: '2019-06-24',
      close: 1913.9,
    },
    {
      date: '2019-06-21',
      close: 1911.3,
    },
    {
      date: '2019-06-20',
      close: 1918.1899,
    },
    {
      date: '2019-06-19',
      close: 1908.79,
    },
    {
      date: '2019-06-18',
      close: 1901.37,
    },
    {
      date: '2019-06-17',
      close: 1886.03,
    },
    {
      date: '2019-06-14',
      close: 1869.67,
    },
    {
      date: '2019-06-13',
      close: 1870.3,
    },
    {
      date: '2019-06-12',
      close: 1855.3199,
    },
    {
      date: '2019-06-11',
      close: 1863.7,
    },
    {
      date: '2019-06-10',
      close: 1860.63,
    },
    {
      date: '2019-06-07',
      close: 1804.03,
    },
    {
      date: '2019-06-06',
      close: 1754.36,
    },
    {
      date: '2019-06-05',
      close: 1738.5,
    },
    {
      date: '2019-06-04',
      close: 1729.5601,
    },
    {
      date: '2019-06-03',
      close: 1692.6899,
    },
    {
      date: '2019-05-31',
      close: 1775.0699,
    },
    {
      date: '2019-05-30',
      close: 1816.3199,
    },
    {
      date: '2019-05-29',
      close: 1819.1899,
    },
    {
      date: '2019-05-28',
      close: 1836.4301,
    },
    {
      date: '2019-05-24',
      close: 1823.28,
    },
    {
      date: '2019-05-23',
      close: 1815.48,
    },
    {
      date: '2019-05-22',
      close: 1859.6801,
    },
    {
      date: '2019-05-21',
      close: 1857.52,
    },
    {
      date: '2019-05-20',
      close: 1858.97,
    },
    {
      date: '2019-05-17',
      close: 1869,
    },
    {
      date: '2019-05-16',
      close: 1907.5699,
    },
    {
      date: '2019-05-15',
      close: 1871.15,
    },
    {
      date: '2019-05-14',
      close: 1840.12,
    },
    {
      date: '2019-05-13',
      close: 1822.6801,
    },
    {
      date: '2019-05-10',
      close: 1889.98,
    },
    {
      date: '2019-05-09',
      close: 1899.87,
    },
    {
      date: '2019-05-08',
      close: 1917.77,
    },
    {
      date: '2019-05-07',
      close: 1921,
    },
    {
      date: '2019-05-06',
      close: 1950.55,
    },
    {
      date: '2019-05-03',
      close: 1962.46,
    },
    {
      date: '2019-05-02',
      close: 1900.8199,
    },
    {
      date: '2019-05-01',
      close: 1911.52,
    },
    {
      date: '2019-04-30',
      close: 1926.52,
    },
    {
      date: '2019-04-29',
      close: 1938.4301,
    },
    {
      date: '2019-04-26',
      close: 1950.63,
    },
    {
      date: '2019-04-25',
      close: 1902.25,
    },
    {
      date: '2019-04-24',
      close: 1901.75,
    },
    {
      date: '2019-04-23',
      close: 1923.77,
    },
    {
      date: '2019-04-22',
      close: 1887.3101,
    },
    {
      date: '2019-04-18',
      close: 1861.6899,
    },
    {
      date: '2019-04-17',
      close: 1864.8199,
    },
    {
      date: '2019-04-16',
      close: 1863.04,
    },
    {
      date: '2019-04-15',
      close: 1844.87,
    },
    {
      date: '2019-04-12',
      close: 1843.0601,
    },
    {
      date: '2019-04-11',
      close: 1844.0699,
    },
    {
      date: '2019-04-10',
      close: 1847.33,
    },
    {
      date: '2019-04-09',
      close: 1835.84,
    },
    {
      date: '2019-04-08',
      close: 1849.86,
    },
    {
      date: '2019-04-05',
      close: 1837.28,
    },
    {
      date: '2019-04-04',
      close: 1818.86,
    },
    {
      date: '2019-04-03',
      close: 1820.7,
    },
    {
      date: '2019-04-02',
      close: 1813.98,
    },
    {
      date: '2019-04-01',
      close: 1814.1899,
    },
    {
      date: '2019-03-29',
      close: 1780.75,
    },
    {
      date: '2019-03-28',
      close: 1773.42,
    },
    {
      date: '2019-03-27',
      close: 1765.7,
    },
    {
      date: '2019-03-26',
      close: 1783.76,
    },
    {
      date: '2019-03-25',
      close: 1774.26,
    },
    {
      date: '2019-03-22',
      close: 1764.77,
    },
    {
      date: '2019-03-21',
      close: 1819.26,
    },
    {
      date: '2019-03-20',
      close: 1797.27,
    },
    {
      date: '2019-03-19',
      close: 1761.85,
    },
    {
      date: '2019-03-18',
      close: 1742.15,
    },
    {
      date: '2019-03-15',
      close: 1712.36,
    },
    {
      date: '2019-03-14',
      close: 1686.22,
    },
    {
      date: '2019-03-13',
      close: 1690.8101,
    },
    {
      date: '2019-03-12',
      close: 1673.1,
    },
    {
      date: '2019-03-11',
      close: 1670.62,
    },
    {
      date: '2019-03-08',
      close: 1620.8,
    },
    {
      date: '2019-03-07',
      close: 1625.95,
    },
    {
      date: '2019-03-06',
      close: 1668.95,
    },
    {
      date: '2019-03-05',
      close: 1692.4301,
    },
    {
      date: '2019-03-04',
      close: 1696.17,
    },
    {
      date: '2019-03-01',
      close: 1671.73,
    },
    {
      date: '2019-02-28',
      close: 1639.83,
    },
    {
      date: '2019-02-27',
      close: 1641.09,
    },
    {
      date: '2019-02-26',
      close: 1636.4,
    },
    {
      date: '2019-02-25',
      close: 1633,
    },
    {
      date: '2019-02-22',
      close: 1631.5601,
    },
    {
      date: '2019-02-21',
      close: 1619.4399,
    },
    {
      date: '2019-02-20',
      close: 1622.1,
    },
    {
      date: '2019-02-19',
      close: 1627.58,
    },
    {
      date: '2019-02-15',
      close: 1607.95,
    },
    {
      date: '2019-02-14',
      close: 1622.65,
    },
    {
      date: '2019-02-13',
      close: 1640,
    },
    {
      date: '2019-02-12',
      close: 1638.01,
    },
    {
      date: '2019-02-11',
      close: 1591,
    },
    {
      date: '2019-02-08',
      close: 1588.22,
    },
    {
      date: '2019-02-07',
      close: 1614.37,
    },
    {
      date: '2019-02-06',
      close: 1640.26,
    },
    {
      date: '2019-02-05',
      close: 1658.8101,
    },
    {
      date: '2019-02-04',
      close: 1633.3101,
    },
    {
      date: '2019-02-01',
      close: 1626.23,
    },
    {
      date: '2019-01-31',
      close: 1718.73,
    },
    {
      date: '2019-01-30',
      close: 1670.4301,
    },
    {
      date: '2019-01-29',
      close: 1593.88,
    },
    {
      date: '2019-01-28',
      close: 1637.89,
    },
    {
      date: '2019-01-25',
      close: 1670.5699,
    },
    {
      date: '2019-01-24',
      close: 1654.9301,
    },
    {
      date: '2019-01-23',
      close: 1640.02,
    },
    {
      date: '2019-01-22',
      close: 1632.17,
    },
    {
      date: '2019-01-18',
      close: 1696.2,
    },
    {
      date: '2019-01-17',
      close: 1693.22,
    },
    {
      date: '2019-01-16',
      close: 1683.78,
    },
    {
      date: '2019-01-15',
      close: 1674.5601,
    },
    {
      date: '2019-01-14',
      close: 1617.21,
    },
    {
      date: '2019-01-11',
      close: 1640.5601,
    },
    {
      date: '2019-01-10',
      close: 1656.22,
    },
    {
      date: '2019-01-09',
      close: 1659.42,
    },
    {
      date: '2019-01-08',
      close: 1656.58,
    },
    {
      date: '2019-01-07',
      close: 1629.51,
    },
    {
      date: '2019-01-04',
      close: 1575.39,
    },
    {
      date: '2019-01-03',
      close: 1500.28,
    },
    {
      date: '2019-01-02',
      close: 1539.13,
    },
    {
      date: '2018-12-31',
      close: 1501.97,
    },
    {
      date: '2018-12-28',
      close: 1478.02,
    },
    {
      date: '2018-12-27',
      close: 1461.64,
    },
    {
      date: '2018-12-26',
      close: 1470.9,
    },
    {
      date: '2018-12-24',
      close: 1343.96,
    },
    {
      date: '2018-12-21',
      close: 1377.45,
    },
    {
      date: '2018-12-20',
      close: 1460.83,
    },
    {
      date: '2018-12-19',
      close: 1495.08,
    },
    {
      date: '2018-12-18',
      close: 1551.48,
    },
    {
      date: '2018-12-17',
      close: 1520.91,
    },
    {
      date: '2018-12-14',
      close: 1591.91,
    },
    {
      date: '2018-12-13',
      close: 1658.38,
    },
    {
      date: '2018-12-12',
      close: 1663.54,
    },
    {
      date: '2018-12-11',
      close: 1643.24,
    },
    {
      date: '2018-12-10',
      close: 1641.03,
    },
    {
      date: '2018-12-07',
      close: 1629.13,
    },
    {
      date: '2018-12-06',
      close: 1699.1899,
    },
    {
      date: '2018-12-04',
      close: 1668.4,
    },
    {
      date: '2018-12-03',
      close: 1772.36,
    },
    {
      date: '2018-11-30',
      close: 1690.17,
    },
    {
      date: '2018-11-29',
      close: 1673.5699,
    },
    {
      date: '2018-11-28',
      close: 1677.75,
    },
    {
      date: '2018-11-27',
      close: 1581.42,
    },
    {
      date: '2018-11-26',
      close: 1581.33,
    },
    {
      date: '2018-11-23',
      close: 1502.0601,
    },
    {
      date: '2018-11-21',
      close: 1516.73,
    },
    {
      date: '2018-11-20',
      close: 1495.46,
    },
    {
      date: '2018-11-19',
      close: 1512.29,
    },
    {
      date: '2018-11-16',
      close: 1593.41,
    },
    {
      date: '2018-11-15',
      close: 1619.4399,
    },
    {
      date: '2018-11-14',
      close: 1599.01,
    },
    {
      date: '2018-11-13',
      close: 1631.17,
    },
    {
      date: '2018-11-12',
      close: 1636.85,
    },
    {
      date: '2018-11-09',
      close: 1712.4301,
    },
    {
      date: '2018-11-08',
      close: 1754.91,
    },
    {
      date: '2018-11-07',
      close: 1755.49,
    },
    {
      date: '2018-11-06',
      close: 1642.8101,
    },
    {
      date: '2018-11-05',
      close: 1627.8,
    },
    {
      date: '2018-11-02',
      close: 1665.53,
    },
    {
      date: '2018-11-01',
      close: 1665.53,
    },
    {
      date: '2018-10-31',
      close: 1598.01,
    },
    {
      date: '2018-10-30',
      close: 1530.42,
    },
    {
      date: '2018-10-29',
      close: 1538.88,
    },
    {
      date: '2018-10-26',
      close: 1642.8101,
    },
    {
      date: '2018-10-25',
      close: 1782.17,
    },
    {
      date: '2018-10-24',
      close: 1664.2,
    },
    {
      date: '2018-10-23',
      close: 1768.7,
    },
    {
      date: '2018-10-22',
      close: 1789.3,
    },
    {
      date: '2018-10-19',
      close: 1764.03,
    },
    {
      date: '2018-10-18',
      close: 1770.72,
    },
    {
      date: '2018-10-17',
      close: 1831.73,
    },
    {
      date: '2018-10-16',
      close: 1819.96,
    },
    {
      date: '2018-10-15',
      close: 1760.95,
    },
    {
      date: '2018-10-12',
      close: 1788.61,
    },
    {
      date: '2018-10-11',
      close: 1719.36,
    },
    {
      date: '2018-10-10',
      close: 1755.25,
    },
    {
      date: '2018-10-09',
      close: 1870.3199,
    },
    {
      date: '2018-10-08',
      close: 1864.42,
    },
    {
      date: '2018-10-05',
      close: 1889.65,
    },
    {
      date: '2018-10-04',
      close: 1909.42,
    },
    {
      date: '2018-10-03',
      close: 1952.76,
    },
    {
      date: '2018-10-02',
      close: 1971.3101,
    },
    {
      date: '2018-10-01',
      close: 2004.36,
    },
    {
      date: '2018-09-28',
      close: 2003,
    },
    {
      date: '2018-09-27',
      close: 2012.98,
    },
    {
      date: '2018-09-26',
      close: 1974.85,
    },
    {
      date: '2018-09-25',
      close: 1974.55,
    },
    {
      date: '2018-09-24',
      close: 1934.36,
    },
    {
      date: '2018-09-21',
      close: 1915.01,
    },
    {
      date: '2018-09-20',
      close: 1944.3,
    },
    {
      date: '2018-09-19',
      close: 1926.42,
    },
    {
      date: '2018-09-18',
      close: 1941.05,
    },
    {
      date: '2018-09-17',
      close: 1908.03,
    },
    {
      date: '2018-09-14',
      close: 1970.1899,
    },
    {
      date: '2018-09-13',
      close: 1989.87,
    },
    {
      date: '2018-09-12',
      close: 1990,
    },
    {
      date: '2018-09-11',
      close: 1987.15,
    },
    {
      date: '2018-09-10',
      close: 1939.01,
    },
    {
      date: '2018-09-07',
      close: 1952.0699,
    },
    {
      date: '2018-09-06',
      close: 1958.3101,
    },
    {
      date: '2018-09-05',
      close: 1994.8199,
    },
    {
      date: '2018-09-04',
      close: 2039.51,
    },
    {
      date: '2018-08-31',
      close: 2012.71,
    },
    {
      date: '2018-08-30',
      close: 2002.38,
    },
    {
      date: '2018-08-29',
      close: 1998.1,
    },
    {
      date: '2018-08-28',
      close: 1932.8199,
    },
    {
      date: '2018-08-27',
      close: 1927.6801,
    },
    {
      date: '2018-08-24',
      close: 1905.39,
    },
    {
      date: '2018-08-23',
      close: 1902.9,
    },
    {
      date: '2018-08-22',
      close: 1904.9,
    },
    {
      date: '2018-08-21',
      close: 1883.42,
    },
    {
      date: '2018-08-20',
      close: 1876.71,
    },
    {
      date: '2018-08-17',
      close: 1882.22,
    },
    {
      date: '2018-08-16',
      close: 1886.52,
    },
    {
      date: '2018-08-15',
      close: 1882.62,
    },
    {
      date: '2018-08-14',
      close: 1919.65,
    },
    {
      date: '2018-08-13',
      close: 1896.2,
    },
    {
      date: '2018-08-10',
      close: 1886.3,
    },
    {
      date: '2018-08-09',
      close: 1898.52,
    },
    {
      date: '2018-08-08',
      close: 1886.52,
    },
    {
      date: '2018-08-07',
      close: 1862.48,
    },
    {
      date: '2018-08-06',
      close: 1847.75,
    },
    {
      date: '2018-08-03',
      close: 1823.29,
    },
    {
      date: '2018-08-02',
      close: 1834.33,
    },
    {
      date: '2018-08-01',
      close: 1797.17,
    },
    {
      date: '2018-07-31',
      close: 1777.4399,
    },
    {
      date: '2018-07-30',
      close: 1779.22,
    },
    {
      date: '2018-07-27',
      close: 1817.27,
    },
    {
      date: '2018-07-26',
      close: 1808,
    },
    {
      date: '2018-07-25',
      close: 1863.61,
    },
    {
      date: '2018-07-24',
      close: 1829.24,
    },
    {
      date: '2018-07-23',
      close: 1802,
    },
    {
      date: '2018-07-20',
      close: 1813.7,
    },
    {
      date: '2018-07-19',
      close: 1812.97,
    },
    {
      date: '2018-07-18',
      close: 1842.92,
    },
    {
      date: '2018-07-17',
      close: 1843.9301,
    },
    {
      date: '2018-07-16',
      close: 1822.49,
    },
    {
      date: '2018-07-13',
      close: 1813.03,
    },
    {
      date: '2018-07-12',
      close: 1796.62,
    },
    {
      date: '2018-07-11',
      close: 1755,
    },
    {
      date: '2018-07-10',
      close: 1743.0699,
    },
    {
      date: '2018-07-09',
      close: 1739.02,
    },
    {
      date: '2018-07-06',
      close: 1710.63,
    },
    {
      date: '2018-07-05',
      close: 1699.73,
    },
    {
      date: '2018-07-03',
      close: 1693.96,
    },
    {
      date: '2018-07-02',
      close: 1713.78,
    },
    {
      date: '2018-06-29',
      close: 1699.8,
    },
    {
      date: '2018-06-28',
      close: 1701.45,
    },
    {
      date: '2018-06-27',
      close: 1660.51,
    },
    {
      date: '2018-06-26',
      close: 1691.09,
    },
    {
      date: '2018-06-25',
      close: 1663.15,
    },
    {
      date: '2018-06-22',
      close: 1715.67,
    },
    {
      date: '2018-06-21',
      close: 1730.22,
    },
    {
      date: '2018-06-20',
      close: 1750.08,
    },
    {
      date: '2018-06-19',
      close: 1734.78,
    },
    {
      date: '2018-06-18',
      close: 1723.79,
    },
    {
      date: '2018-06-15',
      close: 1715.97,
    },
    {
      date: '2018-06-14',
      close: 1723.86,
    },
    {
      date: '2018-06-13',
      close: 1704.86,
    },
    {
      date: '2018-06-12',
      close: 1698.75,
    },
    {
      date: '2018-06-11',
      close: 1689.12,
    },
    {
      date: '2018-06-08',
      close: 1683.99,
    },
    {
      date: '2018-06-07',
      close: 1689.3,
    },
    {
      date: '2018-06-06',
      close: 1695.75,
    },
    {
      date: '2018-06-05',
      close: 1696.35,
    },
    {
      date: '2018-06-04',
      close: 1665.27,
    },
    {
      date: '2018-06-01',
      close: 1641.54,
    },
    {
      date: '2018-05-31',
      close: 1629.62,
    },
    {
      date: '2018-05-30',
      close: 1624.89,
    },
    {
      date: '2018-05-29',
      close: 1612.87,
    },
    {
      date: '2018-05-25',
      close: 1610.15,
    },
    {
      date: '2018-05-24',
      close: 1603.0699,
    },
    {
      date: '2018-05-23',
      close: 1601.86,
    },
    {
      date: '2018-05-22',
      close: 1581.4,
    },
    {
      date: '2018-05-21',
      close: 1585.46,
    },
    {
      date: '2018-05-18',
      close: 1574.37,
    },
    {
      date: '2018-05-17',
      close: 1581.76,
    },
    {
      date: '2018-05-16',
      close: 1587.28,
    },
    {
      date: '2018-05-15',
      close: 1576.12,
    },
    {
      date: '2018-05-14',
      close: 1601.54,
    },
    {
      date: '2018-05-11',
      close: 1602.91,
    },
    {
      date: '2018-05-10',
      close: 1609.08,
    },
    {
      date: '2018-05-09',
      close: 1608,
    },
    {
      date: '2018-05-08',
      close: 1592.39,
    },
    {
      date: '2018-05-07',
      close: 1600.14,
    },
    {
      date: '2018-05-04',
      close: 1580.95,
    },
    {
      date: '2018-05-03',
      close: 1572.08,
    },
    {
      date: '2018-05-02',
      close: 1569.6801,
    },
    {
      date: '2018-05-01',
      close: 1582.26,
    },
    {
      date: '2018-04-30',
      close: 1566.13,
    },
    {
      date: '2018-04-27',
      close: 1572.62,
    },
    {
      date: '2018-04-26',
      close: 1517.96,
    },
    {
      date: '2018-04-25',
      close: 1460.17,
    },
    {
      date: '2018-04-24',
      close: 1460.09,
    },
    {
      date: '2018-04-23',
      close: 1517.86,
    },
    {
      date: '2018-04-20',
      close: 1527.49,
    },
    {
      date: '2018-04-19',
      close: 1556.91,
    },
    {
      date: '2018-04-18',
      close: 1527.84,
    },
    {
      date: '2018-04-17',
      close: 1503.83,
    },
    {
      date: '2018-04-16',
      close: 1441.5,
    },
    {
      date: '2018-04-13',
      close: 1430.79,
    },
    {
      date: '2018-04-12',
      close: 1448.5,
    },
    {
      date: '2018-04-11',
      close: 1427.05,
    },
    {
      date: '2018-04-10',
      close: 1436.22,
    },
    {
      date: '2018-04-09',
      close: 1406.08,
    },
    {
      date: '2018-04-06',
      close: 1405.23,
    },
    {
      date: '2018-04-05',
      close: 1451.75,
    },
    {
      date: '2018-04-04',
      close: 1410.5699,
    },
    {
      date: '2018-04-03',
      close: 1392.05,
    },
    {
      date: '2018-04-02',
      close: 1371.99,
    },
    {
      date: '2018-03-29',
      close: 1447.34,
    },
    {
      date: '2018-03-28',
      close: 1431.42,
    },
    {
      date: '2018-03-27',
      close: 1497.05,
    },
    {
      date: '2018-03-26',
      close: 1555.86,
    },
    {
      date: '2018-03-23',
      close: 1495.5601,
    },
    {
      date: '2018-03-22',
      close: 1544.92,
    },
    {
      date: '2018-03-21',
      close: 1581.86,
    },
    {
      date: '2018-03-20',
      close: 1586.51,
    },
    {
      date: '2018-03-19',
      close: 1544.9301,
    },
    {
      date: '2018-03-16',
      close: 1571.6801,
    },
    {
      date: '2018-03-15',
      close: 1582.3199,
    },
    {
      date: '2018-03-14',
      close: 1591,
    },
    {
      date: '2018-03-13',
      close: 1588.1801,
    },
    {
      date: '2018-03-12',
      close: 1598.39,
    },
    {
      date: '2018-03-09',
      close: 1578.89,
    },
    {
      date: '2018-03-08',
      close: 1551.86,
    },
    {
      date: '2018-03-07',
      close: 1545,
    },
    {
      date: '2018-03-06',
      close: 1537.64,
    },
    {
      date: '2018-03-05',
      close: 1523.61,
    },
    {
      date: '2018-03-02',
      close: 1500.25,
    },
    {
      date: '2018-03-01',
      close: 1493.45,
    },
    {
      date: '2018-02-28',
      close: 1512.45,
    },
    {
      date: '2018-02-27',
      close: 1511.98,
    },
    {
      date: '2018-02-26',
      close: 1521.95,
    },
    {
      date: '2018-02-23',
      close: 1500,
    },
    {
      date: '2018-02-22',
      close: 1485.34,
    },
    {
      date: '2018-02-21',
      close: 1482.92,
    },
    {
      date: '2018-02-20',
      close: 1468.35,
    },
    {
      date: '2018-02-16',
      close: 1448.6899,
    },
    {
      date: '2018-02-15',
      close: 1461.76,
    },
    {
      date: '2018-02-14',
      close: 1451.05,
    },
    {
      date: '2018-02-13',
      close: 1414.51,
    },
    {
      date: '2018-02-12',
      close: 1386.23,
    },
    {
      date: '2018-02-09',
      close: 1339.6,
    },
    {
      date: '2018-02-08',
      close: 1350.5,
    },
    {
      date: '2018-02-07',
      close: 1416.78,
    },
    {
      date: '2018-02-06',
      close: 1442.84,
    },
    {
      date: '2018-02-05',
      close: 1390,
    },
    {
      date: '2018-02-02',
      close: 1429.95,
    },
    {
      date: '2018-02-01',
      close: 1390,
    },
    {
      date: '2018-01-31',
      close: 1450.89,
    },
    {
      date: '2018-01-30',
      close: 1437.8199,
    },
    {
      date: '2018-01-29',
      close: 1417.6801,
    },
    {
      date: '2018-01-26',
      close: 1402.05,
    },
    {
      date: '2018-01-25',
      close: 1377.95,
    },
    {
      date: '2018-01-24',
      close: 1357.51,
    },
    {
      date: '2018-01-23',
      close: 1362.54,
    },
    {
      date: '2018-01-22',
      close: 1327.3101,
    },
    {
      date: '2018-01-19',
      close: 1294.58,
    },
    {
      date: '2018-01-18',
      close: 1293.3199,
    },
    {
      date: '2018-01-17',
      close: 1295,
    },
    {
      date: '2018-01-16',
      close: 1304.86,
    },
    {
      date: '2018-01-12',
      close: 1305.2,
    },
    {
      date: '2018-01-11',
      close: 1276.6801,
    },
    {
      date: '2018-01-10',
      close: 1254.33,
    },
    {
      date: '2018-01-09',
      close: 1252.7,
    },
    {
      date: '2018-01-08',
      close: 1246.87,
    },
    {
      date: '2018-01-05',
      close: 1229.14,
    },
    {
      date: '2018-01-04',
      close: 1209.59,
    },
    {
      date: '2018-01-03',
      close: 1204.2,
    },
    {
      date: '2018-01-02',
      close: 1189.01,
    },
    {
      date: '2017-12-29',
      close: 1169.47,
    },
    {
      date: '2017-12-28',
      close: 1186.1,
    },
    {
      date: '2017-12-27',
      close: 1182.26,
    },
    {
      date: '2017-12-26',
      close: 1176.76,
    },
    {
      date: '2017-12-22',
      close: 1168.36,
    },
    {
      date: '2017-12-21',
      close: 1174.76,
    },
    {
      date: '2017-12-20',
      close: 1177.62,
    },
    {
      date: '2017-12-19',
      close: 1187.38,
    },
    {
      date: '2017-12-18',
      close: 1190.58,
    },
    {
      date: '2017-12-15',
      close: 1179.14,
    },
    {
      date: '2017-12-14',
      close: 1174.26,
    },
    {
      date: '2017-12-13',
      close: 1164.13,
    },
    {
      date: '2017-12-12',
      close: 1165.08,
    },
    {
      date: '2017-12-11',
      close: 1168.92,
    },
    {
      date: '2017-12-08',
      close: 1162,
    },
    {
      date: '2017-12-07',
      close: 1159.79,
    },
    {
      date: '2017-12-06',
      close: 1152.35,
    },
    {
      date: '2017-12-05',
      close: 1141.5699,
    },
    {
      date: '2017-12-04',
      close: 1133.95,
    },
    {
      date: '2017-12-01',
      close: 1162.35,
    },
    {
      date: '2017-11-30',
      close: 1176.75,
    },
    {
      date: '2017-11-29',
      close: 1161.27,
    },
    {
      date: '2017-11-28',
      close: 1193.6,
    },
    {
      date: '2017-11-27',
      close: 1195.83,
    },
    {
      date: '2017-11-24',
      close: 1186,
    },
    {
      date: '2017-11-22',
      close: 1156.16,
    },
    {
      date: '2017-11-21',
      close: 1139.49,
    },
    {
      date: '2017-11-20',
      close: 1126.3101,
    },
    {
      date: '2017-11-17',
      close: 1129.88,
    },
    {
      date: '2017-11-16',
      close: 1137.29,
    },
    {
      date: '2017-11-15',
      close: 1126.6899,
    },
    {
      date: '2017-11-14',
      close: 1136.84,
    },
    {
      date: '2017-11-13',
      close: 1129.17,
    },
    {
      date: '2017-11-10',
      close: 1125.35,
    },
    {
      date: '2017-11-09',
      close: 1129.13,
    },
    {
      date: '2017-11-08',
      close: 1132.88,
    },
    {
      date: '2017-11-07',
      close: 1123.17,
    },
    {
      date: '2017-11-06',
      close: 1120.66,
    },
    {
      date: '2017-11-03',
      close: 1111.6,
    },
    {
      date: '2017-11-02',
      close: 1094.22,
    },
    {
      date: '2017-11-01',
      close: 1103.6801,
    },
    {
      date: '2017-10-31',
      close: 1105.28,
    },
    {
      date: '2017-10-30',
      close: 1110.85,
    },
    {
      date: '2017-10-27',
      close: 1100.95,
    },
    {
      date: '2017-10-26',
      close: 972.43,
    },
    {
      date: '2017-10-25',
      close: 972.91,
    },
    {
      date: '2017-10-24',
      close: 975.9,
    },
    {
      date: '2017-10-23',
      close: 966.3,
    },
    {
      date: '2017-10-20',
      close: 982.91,
    },
    {
      date: '2017-10-19',
      close: 986.61,
    },
    {
      date: '2017-10-18',
      close: 997,
    },
    {
      date: '2017-10-17',
      close: 1009.13,
    },
    {
      date: '2017-10-16',
      close: 1006.34,
    },
    {
      date: '2017-10-13',
      close: 1002.94,
    },
    {
      date: '2017-10-12',
      close: 1000.93,
    },
    {
      date: '2017-10-11',
      close: 995,
    },
    {
      date: '2017-10-10',
      close: 987.2,
    },
    {
      date: '2017-10-09',
      close: 990.99,
    },
    {
      date: '2017-10-06',
      close: 989.58,
    },
    {
      date: '2017-10-05',
      close: 980.85,
    },
    {
      date: '2017-10-04',
      close: 965.45,
    },
    {
      date: '2017-10-03',
      close: 957.1,
    },
    {
      date: '2017-10-02',
      close: 959.19,
    },
    {
      date: '2017-09-29',
      close: 961.35,
    },
    {
      date: '2017-09-28',
      close: 956.4,
    },
    {
      date: '2017-09-27',
      close: 950.87,
    },
    {
      date: '2017-09-26',
      close: 938.6,
    },
    {
      date: '2017-09-25',
      close: 939.79,
    },
    {
      date: '2017-09-22',
      close: 955.1,
    },
    {
      date: '2017-09-21',
      close: 964.65,
    },
    {
      date: '2017-09-20',
      close: 973.21,
    },
    {
      date: '2017-09-19',
      close: 969.86,
    },
    {
      date: '2017-09-18',
      close: 974.19,
    },
    {
      date: '2017-09-15',
      close: 986.79,
    },
    {
      date: '2017-09-14',
      close: 992.21,
    },
    {
      date: '2017-09-13',
      close: 999.6,
    },
    {
      date: '2017-09-12',
      close: 982.58,
    },
    {
      date: '2017-09-11',
      close: 977.96,
    },
    {
      date: '2017-09-08',
      close: 965.9,
    },
    {
      date: '2017-09-07',
      close: 979.47,
    },
    {
      date: '2017-09-06',
      close: 967.8,
    },
    {
      date: '2017-09-05',
      close: 965.27,
    },
    {
      date: '2017-09-01',
      close: 978.25,
    },
    {
      date: '2017-08-31',
      close: 980.6,
    },
    {
      date: '2017-08-30',
      close: 967.59,
    },
    {
      date: '2017-08-29',
      close: 954.06,
    },
    {
      date: '2017-08-28',
      close: 946.02,
    },
    {
      date: '2017-08-25',
      close: 945.26,
    },
    {
      date: '2017-08-24',
      close: 952.45,
    },
    {
      date: '2017-08-23',
      close: 958,
    },
    {
      date: '2017-08-22',
      close: 966.9,
    },
    {
      date: '2017-08-21',
      close: 953.29,
    },
    {
      date: '2017-08-18',
      close: 958.47,
    },
    {
      date: '2017-08-17',
      close: 960.57,
    },
    {
      date: '2017-08-16',
      close: 978.18,
    },
    {
      date: '2017-08-15',
      close: 982.74,
    },
    {
      date: '2017-08-14',
      close: 983.3,
    },
    {
      date: '2017-08-11',
      close: 967.99,
    },
    {
      date: '2017-08-10',
      close: 956.92,
    },
    {
      date: '2017-08-09',
      close: 982.01,
    },
    {
      date: '2017-08-08',
      close: 989.84,
    },
    {
      date: '2017-08-07',
      close: 992.27,
    },
    {
      date: '2017-08-04',
      close: 987.58,
    },
    {
      date: '2017-08-03',
      close: 986.92,
    },
    {
      date: '2017-08-02',
      close: 995.89,
    },
    {
      date: '2017-08-01',
      close: 996.19,
    },
    {
      date: '2017-07-31',
      close: 987.78,
    },
    {
      date: '2017-07-28',
      close: 1020.04,
    },
    {
      date: '2017-07-27',
      close: 1046,
    },
    {
      date: '2017-07-26',
      close: 1052.8,
    },
    {
      date: '2017-07-25',
      close: 1039.87,
    },
    {
      date: '2017-07-24',
      close: 1038.95,
    },
    {
      date: '2017-07-21',
      close: 1025.67,
    },
    {
      date: '2017-07-20',
      close: 1028.7,
    },
    {
      date: '2017-07-19',
      close: 1026.87,
    },
    {
      date: '2017-07-18',
      close: 1024.45,
    },
    {
      date: '2017-07-17',
      close: 1010.04,
    },
    {
      date: '2017-07-14',
      close: 1001.81,
    },
    {
      date: '2017-07-13',
      close: 1000.63,
    },
    {
      date: '2017-07-12',
      close: 1006.51,
    },
    {
      date: '2017-07-11',
      close: 994.13,
    },
    {
      date: '2017-07-10',
      close: 996.47,
    },
    {
      date: '2017-07-07',
      close: 978.76,
    },
    {
      date: '2017-07-06',
      close: 965.14,
    },
    {
      date: '2017-07-05',
      close: 971.4,
    },
    {
      date: '2017-07-03',
      close: 953.66,
    },
    {
      date: '2017-06-30',
      close: 968,
    },
    {
      date: '2017-06-29',
      close: 975.93,
    },
    {
      date: '2017-06-28',
      close: 990.33,
    },
    {
      date: '2017-06-27',
      close: 976.78,
    },
    {
      date: '2017-06-26',
      close: 993.98,
    },
    {
      date: '2017-06-23',
      close: 1003.74,
    },
    {
      date: '2017-06-22',
      close: 1001.3,
    },
    {
      date: '2017-06-21',
      close: 1002.23,
    },
    {
      date: '2017-06-20',
      close: 992.59,
    },
    {
      date: '2017-06-19',
      close: 995.17,
    },
    {
      date: '2017-06-16',
      close: 987.71,
    },
    {
      date: '2017-06-15',
      close: 964.17,
    },
    {
      date: '2017-06-14',
      close: 976.47,
    },
    {
      date: '2017-06-13',
      close: 980.79,
    },
    {
      date: '2017-06-12',
      close: 964.91,
    },
    {
      date: '2017-06-09',
      close: 978.31,
    },
    {
      date: '2017-06-08',
      close: 1010.27,
    },
    {
      date: '2017-06-07',
      close: 1010.07,
    },
    {
      date: '2017-06-06',
      close: 1003,
    },
    {
      date: '2017-06-05',
      close: 1011.34,
    },
    {
      date: '2017-06-02',
      close: 1006.73,
    },
    {
      date: '2017-06-01',
      close: 995.95,
    },
    {
      date: '2017-05-31',
      close: 994.62,
    },
    {
      date: '2017-05-30',
      close: 996.7,
    },
    {
      date: '2017-05-26',
      close: 995.78,
    },
    {
      date: '2017-05-25',
      close: 993.38,
    },
    {
      date: '2017-05-24',
      close: 980.35,
    },
    {
      date: '2017-05-23',
      close: 971.54,
    },
    {
      date: '2017-05-22',
      close: 970.67,
    },
    {
      date: '2017-05-19',
      close: 959.84,
    },
    {
      date: '2017-05-18',
      close: 958.49,
    },
    {
      date: '2017-05-17',
      close: 944.76,
    },
    {
      date: '2017-05-16',
      close: 966.07,
    },
    {
      date: '2017-05-15',
      close: 957.97,
    },
    {
      date: '2017-05-12',
      close: 961.35,
    },
    {
      date: '2017-05-11',
      close: 947.62,
    },
    {
      date: '2017-05-10',
      close: 948.95,
    },
    {
      date: '2017-05-09',
      close: 952.82,
    },
    {
      date: '2017-05-08',
      close: 949.04,
    },
    {
      date: '2017-05-05',
      close: 934.15,
    },
    {
      date: '2017-05-04',
      close: 937.53,
    },
    {
      date: '2017-05-03',
      close: 941.03,
    },
    {
      date: '2017-05-02',
      close: 946.94,
    },
    {
      date: '2017-05-01',
      close: 948.23,
    },
    {
      date: '2017-04-28',
      close: 924.99,
    },
    {
      date: '2017-04-27',
      close: 918.38,
    },
    {
      date: '2017-04-26',
      close: 909.29,
    },
    {
      date: '2017-04-25',
      close: 907.62,
    },
    {
      date: '2017-04-24',
      close: 907.41,
    },
    {
      date: '2017-04-21',
      close: 898.53,
    },
    {
      date: '2017-04-20',
      close: 902.06,
    },
    {
      date: '2017-04-19',
      close: 899.2,
    },
    {
      date: '2017-04-18',
      close: 903.78,
    },
    {
      date: '2017-04-17',
      close: 901.99,
    },
    {
      date: '2017-04-13',
      close: 884.67,
    },
    {
      date: '2017-04-12',
      close: 896.23,
    },
    {
      date: '2017-04-11',
      close: 902.36,
    },
    {
      date: '2017-04-10',
      close: 907.04,
    },
    {
      date: '2017-04-07',
      close: 894.88,
    },
    {
      date: '2017-04-06',
      close: 898.28,
    },
    {
      date: '2017-04-05',
      close: 909.28,
    },
    {
      date: '2017-04-04',
      close: 906.83,
    },
    {
      date: '2017-04-03',
      close: 891.51,
    },
    {
      date: '2017-03-31',
      close: 886.54,
    },
    {
      date: '2017-03-30',
      close: 876.34,
    },
    {
      date: '2017-03-29',
      close: 874.32,
    },
    {
      date: '2017-03-28',
      close: 856,
    },
    {
      date: '2017-03-27',
      close: 846.82,
    },
    {
      date: '2017-03-24',
      close: 845.61,
    },
    {
      date: '2017-03-23',
      close: 847.38,
    },
    {
      date: '2017-03-22',
      close: 848.06,
    },
    {
      date: '2017-03-21',
      close: 843.2,
    },
    {
      date: '2017-03-20',
      close: 856.97,
    },
    {
      date: '2017-03-17',
      close: 852.31,
    },
    {
      date: '2017-03-16',
      close: 853.42,
    },
    {
      date: '2017-03-15',
      close: 852.97,
    },
    {
      date: '2017-03-14',
      close: 852.53,
    },
    {
      date: '2017-03-13',
      close: 854.59,
    },
    {
      date: '2017-03-10',
      close: 852.46,
    },
    {
      date: '2017-03-09',
      close: 853,
    },
    {
      date: '2017-03-08',
      close: 850.5,
    },
    {
      date: '2017-03-07',
      close: 846.02,
    },
    {
      date: '2017-03-06',
      close: 846.61,
    },
    {
      date: '2017-03-03',
      close: 849.88,
    },
    {
      date: '2017-03-02',
      close: 848.91,
    },
    {
      date: '2017-03-01',
      close: 853.08,
    },
    {
      date: '2017-02-28',
      close: 845.04,
    },
    {
      date: '2017-02-27',
      close: 848.64,
    },
    {
      date: '2017-02-24',
      close: 845.24,
    },
    {
      date: '2017-02-23',
      close: 852.19,
    },
    {
      date: '2017-02-22',
      close: 855.61,
    },
    {
      date: '2017-02-21',
      close: 856.44,
    },
    {
      date: '2017-02-17',
      close: 845.07,
    },
    {
      date: '2017-02-16',
      close: 844.14,
    },
    {
      date: '2017-02-15',
      close: 842.7,
    },
    {
      date: '2017-02-14',
      close: 836.39,
    },
    {
      date: '2017-02-13',
      close: 836.53,
    },
    {
      date: '2017-02-10',
      close: 827.46,
    },
    {
      date: '2017-02-09',
      close: 821.36,
    },
    {
      date: '2017-02-08',
      close: 819.71,
    },
    {
      date: '2017-02-07',
      close: 812.5,
    },
    {
      date: '2017-02-06',
      close: 807.64,
    },
    {
      date: '2017-02-03',
      close: 810.2,
    },
    {
      date: '2017-02-02',
      close: 839.95,
    },
    {
      date: '2017-02-01',
      close: 832.35,
    },
    {
      date: '2017-01-31',
      close: 823.48,
    },
    {
      date: '2017-01-30',
      close: 830.38,
    },
    {
      date: '2017-01-27',
      close: 835.77,
    },
    {
      date: '2017-01-26',
      close: 839.15,
    },
    {
      date: '2017-01-25',
      close: 836.52,
    },
    {
      date: '2017-01-24',
      close: 822.44,
    },
    {
      date: '2017-01-23',
      close: 817.88,
    },
    {
      date: '2017-01-20',
      close: 808.33,
    },
    {
      date: '2017-01-19',
      close: 809.04,
    },
    {
      date: '2017-01-18',
      close: 807.48,
    },
    {
      date: '2017-01-17',
      close: 809.72,
    },
    {
      date: '2017-01-13',
      close: 817.14,
    },
    {
      date: '2017-01-12',
      close: 813.64,
    },
    {
      date: '2017-01-11',
      close: 799.02,
    },
    {
      date: '2017-01-10',
      close: 795.9,
    },
    {
      date: '2017-01-09',
      close: 796.92,
    },
    {
      date: '2017-01-06',
      close: 795.99,
    },
    {
      date: '2017-01-05',
      close: 780.45,
    },
    {
      date: '2017-01-04',
      close: 757.18,
    },
    {
      date: '2017-01-03',
      close: 753.67,
    },
    {
      date: '2016-12-30',
      close: 749.87,
    },
    {
      date: '2016-12-29',
      close: 765.15,
    },
    {
      date: '2016-12-28',
      close: 772.13,
    },
    {
      date: '2016-12-27',
      close: 771.4,
    },
    {
      date: '2016-12-23',
      close: 760.59,
    },
    {
      date: '2016-12-22',
      close: 766.34,
    },
    {
      date: '2016-12-21',
      close: 770.6,
    },
    {
      date: '2016-12-20',
      close: 771.22,
    },
    {
      date: '2016-12-19',
      close: 766,
    },
    {
      date: '2016-12-16',
      close: 757.77,
    },
    {
      date: '2016-12-15',
      close: 761,
    },
    {
      date: '2016-12-14',
      close: 768.82,
    },
    {
      date: '2016-12-13',
      close: 774.34,
    },
    {
      date: '2016-12-12',
      close: 760.12,
    },
    {
      date: '2016-12-09',
      close: 768.66,
    },
    {
      date: '2016-12-08',
      close: 767.33,
    },
    {
      date: '2016-12-07',
      close: 770.42,
    },
    {
      date: '2016-12-06',
      close: 764.72,
    },
    {
      date: '2016-12-05',
      close: 759.36,
    },
    {
      date: '2016-12-02',
      close: 740.34,
    },
    {
      date: '2016-12-01',
      close: 743.65,
    },
    {
      date: '2016-11-30',
      close: 750.57,
    },
    {
      date: '2016-11-29',
      close: 762.52,
    },
    {
      date: '2016-11-28',
      close: 766.77,
    },
    {
      date: '2016-11-25',
      close: 780.37,
    },
    {
      date: '2016-11-23',
      close: 780.12,
    },
    {
      date: '2016-11-22',
      close: 785.33,
    },
    {
      date: '2016-11-21',
      close: 780,
    },
    {
      date: '2016-11-18',
      close: 760.16,
    },
    {
      date: '2016-11-17',
      close: 756.4,
    },
    {
      date: '2016-11-16',
      close: 746.49,
    },
    {
      date: '2016-11-15',
      close: 743.24,
    },
    {
      date: '2016-11-14',
      close: 719.07,
    },
    {
      date: '2016-11-11',
      close: 739.01,
    },
    {
      date: '2016-11-10',
      close: 742.38,
    },
    {
      date: '2016-11-09',
      close: 771.88,
    },
    {
      date: '2016-11-08',
      close: 787.75,
    },
    {
      date: '2016-11-07',
      close: 784.93,
    },
    {
      date: '2016-11-04',
      close: 755.05,
    },
    {
      date: '2016-11-03',
      close: 767.03,
    },
    {
      date: '2016-11-02',
      close: 765.56,
    },
    {
      date: '2016-11-01',
      close: 785.41,
    },
    {
      date: '2016-10-31',
      close: 789.82,
    },
    {
      date: '2016-10-28',
      close: 776.32,
    },
    {
      date: '2016-10-27',
      close: 818.36,
    },
    {
      date: '2016-10-26',
      close: 822.59,
    },
    {
      date: '2016-10-25',
      close: 835.18,
    },
    {
      date: '2016-10-24',
      close: 838.09,
    },
    {
      date: '2016-10-21',
      close: 818.99,
    },
    {
      date: '2016-10-20',
      close: 810.32,
    },
    {
      date: '2016-10-19',
      close: 817.69,
    },
    {
      date: '2016-10-18',
      close: 817.65,
    },
    {
      date: '2016-10-17',
      close: 812.95,
    },
    {
      date: '2016-10-14',
      close: 822.96,
    },
    {
      date: '2016-10-13',
      close: 829.28,
    },
    {
      date: '2016-10-12',
      close: 834.09,
    },
    {
      date: '2016-10-11',
      close: 831,
    },
    {
      date: '2016-10-10',
      close: 841.71,
    },
    {
      date: '2016-10-07',
      close: 839.43,
    },
    {
      date: '2016-10-06',
      close: 841.66,
    },
    {
      date: '2016-10-05',
      close: 844.36,
    },
    {
      date: '2016-10-04',
      close: 834.03,
    },
    {
      date: '2016-10-03',
      close: 836.74,
    },
    {
      date: '2016-09-30',
      close: 837.31,
    },
    {
      date: '2016-09-29',
      close: 829.05,
    },
    {
      date: '2016-09-28',
      close: 828.72,
    },
    {
      date: '2016-09-27',
      close: 816.11,
    },
    {
      date: '2016-09-26',
      close: 799.16,
    },
    {
      date: '2016-09-23',
      close: 805.75,
    },
    {
      date: '2016-09-22',
      close: 804.7,
    },
    {
      date: '2016-09-21',
      close: 789.74,
    },
    {
      date: '2016-09-20',
      close: 780.22,
    },
    {
      date: '2016-09-19',
      close: 775.1,
    },
    {
      date: '2016-09-16',
      close: 778.52,
    },
    {
      date: '2016-09-15',
      close: 769.69,
    },
    {
      date: '2016-09-14',
      close: 761.09,
    },
    {
      date: '2016-09-13',
      close: 761.01,
    },
    {
      date: '2016-09-12',
      close: 771.49,
    },
    {
      date: '2016-09-09',
      close: 760.14,
    },
    {
      date: '2016-09-08',
      close: 784.06,
    },
    {
      date: '2016-09-07',
      close: 784.48,
    },
    {
      date: '2016-09-06',
      close: 788.87,
    },
    {
      date: '2016-09-02',
      close: 772.44,
    },
    {
      date: '2016-09-01',
      close: 770.62,
    },
    {
      date: '2016-08-31',
      close: 769.16,
    },
    {
      date: '2016-08-30',
      close: 767.58,
    },
    {
      date: '2016-08-29',
      close: 771.29,
    },
    {
      date: '2016-08-26',
      close: 769,
    },
    {
      date: '2016-08-25',
      close: 759.22,
    },
    {
      date: '2016-08-24',
      close: 757.25,
    },
    {
      date: '2016-08-23',
      close: 762.45,
    },
    {
      date: '2016-08-22',
      close: 759.48,
    },
    {
      date: '2016-08-19',
      close: 757.31,
    },
    {
      date: '2016-08-18',
      close: 764.46,
    },
    {
      date: '2016-08-17',
      close: 764.63,
    },
    {
      date: '2016-08-16',
      close: 764.04,
    },
    {
      date: '2016-08-15',
      close: 768.49,
    },
    {
      date: '2016-08-12',
      close: 772.56,
    },
    {
      date: '2016-08-11',
      close: 771.24,
    },
    {
      date: '2016-08-10',
      close: 768.56,
    },
    {
      date: '2016-08-09',
      close: 768.31,
    },
    {
      date: '2016-08-08',
      close: 766.56,
    },
    {
      date: '2016-08-05',
      close: 765.98,
    },
    {
      date: '2016-08-04',
      close: 760.77,
    },
    {
      date: '2016-08-03',
      close: 754.64,
    },
    {
      date: '2016-08-02',
      close: 760.58,
    },
    {
      date: '2016-08-01',
      close: 767.74,
    },
    {
      date: '2016-07-29',
      close: 758.81,
    },
    {
      date: '2016-07-28',
      close: 752.61,
    },
    {
      date: '2016-07-27',
      close: 736.67,
    },
    {
      date: '2016-07-26',
      close: 735.59,
    },
    {
      date: '2016-07-25',
      close: 739.61,
    },
    {
      date: '2016-07-22',
      close: 744.86,
    },
    {
      date: '2016-07-21',
      close: 744.43,
    },
    {
      date: '2016-07-20',
      close: 745.72,
    },
    {
      date: '2016-07-19',
      close: 739.95,
    },
    {
      date: '2016-07-18',
      close: 736.07,
    },
    {
      date: '2016-07-15',
      close: 735.44,
    },
    {
      date: '2016-07-14',
      close: 741.2,
    },
    {
      date: '2016-07-13',
      close: 742.63,
    },
    {
      date: '2016-07-12',
      close: 748.21,
    },
    {
      date: '2016-07-11',
      close: 753.78,
    },
    {
      date: '2016-07-08',
      close: 745.81,
    },
    {
      date: '2016-07-07',
      close: 736.57,
    },
    {
      date: '2016-07-06',
      close: 737.61,
    },
    {
      date: '2016-07-05',
      close: 728.1,
    },
    {
      date: '2016-07-01',
      close: 725.68,
    },
    {
      date: '2016-06-30',
      close: 715.62,
    },
    {
      date: '2016-06-29',
      close: 715.6,
    },
    {
      date: '2016-06-28',
      close: 707.95,
    },
    {
      date: '2016-06-27',
      close: 691.36,
    },
    {
      date: '2016-06-24',
      close: 698.96,
    },
    {
      date: '2016-06-23',
      close: 722.08,
    },
    {
      date: '2016-06-22',
      close: 710.6,
    },
    {
      date: '2016-06-21',
      close: 715.82,
    },
    {
      date: '2016-06-20',
      close: 714.01,
    },
    {
      date: '2016-06-17',
      close: 706.39,
    },
    {
      date: '2016-06-16',
      close: 717.51,
    },
    {
      date: '2016-06-15',
      close: 714.26,
    },
    {
      date: '2016-06-14',
      close: 719.3,
    },
    {
      date: '2016-06-13',
      close: 715.24,
    },
    {
      date: '2016-06-10',
      close: 717.91,
    },
    {
      date: '2016-06-09',
      close: 727.65,
    },
    {
      date: '2016-06-08',
      close: 726.64,
    },
    {
      date: '2016-06-07',
      close: 723.74,
    },
    {
      date: '2016-06-06',
      close: 726.73,
    },
    {
      date: '2016-06-03',
      close: 725.54,
    },
    {
      date: '2016-06-02',
      close: 728.24,
    },
    {
      date: '2016-06-01',
      close: 719.44,
    },
    {
      date: '2016-05-31',
      close: 722.79,
    },
    {
      date: '2016-05-27',
      close: 712.24,
    },
    {
      date: '2016-05-26',
      close: 714.91,
    },
    {
      date: '2016-05-25',
      close: 708.35,
    },
    {
      date: '2016-05-24',
      close: 704.2,
    },
    {
      date: '2016-05-23',
      close: 696.75,
    },
    {
      date: '2016-05-20',
      close: 702.8,
    },
    {
      date: '2016-05-19',
      close: 698.52,
    },
    {
      date: '2016-05-18',
      close: 697.45,
    },
    {
      date: '2016-05-17',
      close: 695.27,
    },
    {
      date: '2016-05-16',
      close: 710.66,
    },
    {
      date: '2016-05-13',
      close: 709.92,
    },
    {
      date: '2016-05-12',
      close: 717.93,
    },
    {
      date: '2016-05-11',
      close: 713.23,
    },
    {
      date: '2016-05-10',
      close: 703.07,
    },
    {
      date: '2016-05-09',
      close: 679.75,
    },
    {
      date: '2016-05-06',
      close: 673.95,
    },
    {
      date: '2016-05-05',
      close: 659.09,
    },
    {
      date: '2016-05-04',
      close: 670.9,
    },
    {
      date: '2016-05-03',
      close: 671.32,
    },
    {
      date: '2016-05-02',
      close: 683.85,
    },
    {
      date: '2016-04-29',
      close: 659.59,
    },
    {
      date: '2016-04-28',
      close: 602,
    },
    {
      date: '2016-04-27',
      close: 606.57,
    },
    {
      date: '2016-04-26',
      close: 616.88,
    },
    {
      date: '2016-04-25',
      close: 626.2,
    },
    {
      date: '2016-04-22',
      close: 620.5,
    },
    {
      date: '2016-04-21',
      close: 631,
    },
    {
      date: '2016-04-20',
      close: 632.99,
    },
    {
      date: '2016-04-19',
      close: 627.9,
    },
    {
      date: '2016-04-18',
      close: 635.35,
    },
    {
      date: '2016-04-15',
      close: 625.89,
    },
    {
      date: '2016-04-14',
      close: 620.75,
    },
    {
      date: '2016-04-13',
      close: 614.82,
    },
    {
      date: '2016-04-12',
      close: 603.17,
    },
    {
      date: '2016-04-11',
      close: 595.93,
    },
    {
      date: '2016-04-08',
      close: 594.6,
    },
    {
      date: '2016-04-07',
      close: 591.43,
    },
    {
      date: '2016-04-06',
      close: 602.08,
    },
    {
      date: '2016-04-05',
      close: 586.14,
    },
    {
      date: '2016-04-04',
      close: 593.19,
    },
    {
      date: '2016-04-01',
      close: 598.5,
    },
    {
      date: '2016-03-31',
      close: 593.64,
    },
    {
      date: '2016-03-30',
      close: 598.69,
    },
    {
      date: '2016-03-29',
      close: 593.86,
    },
    {
      date: '2016-03-28',
      close: 579.87,
    },
    {
      date: '2016-03-24',
      close: 582.95,
    },
    {
      date: '2016-03-23',
      close: 569.63,
    },
    {
      date: '2016-03-22',
      close: 560.48,
    },
    {
      date: '2016-03-21',
      close: 553.98,
    },
    {
      date: '2016-03-18',
      close: 552.08,
    },
    {
      date: '2016-03-17',
      close: 559.44,
    },
    {
      date: '2016-03-16',
      close: 574.27,
    },
    {
      date: '2016-03-15',
      close: 577.02,
    },
    {
      date: '2016-03-14',
      close: 573.37,
    },
    {
      date: '2016-03-11',
      close: 569.61,
    },
    {
      date: '2016-03-10',
      close: 558.93,
    },
    {
      date: '2016-03-09',
      close: 559.47,
    },
    {
      date: '2016-03-08',
      close: 560.26,
    },
    {
      date: '2016-03-07',
      close: 562.8,
    },
    {
      date: '2016-03-04',
      close: 575.14,
    },
    {
      date: '2016-03-03',
      close: 577.49,
    },
    {
      date: '2016-03-02',
      close: 580.21,
    },
    {
      date: '2016-03-01',
      close: 579.04,
    },
    {
      date: '2016-02-29',
      close: 552.52,
    },
    {
      date: '2016-02-26',
      close: 555.23,
    },
    {
      date: '2016-02-25',
      close: 555.15,
    },
    {
      date: '2016-02-24',
      close: 554.04,
    },
    {
      date: '2016-02-23',
      close: 552.94,
    },
    {
      date: '2016-02-22',
      close: 559.5,
    },
    {
      date: '2016-02-19',
      close: 534.9,
    },
    {
      date: '2016-02-18',
      close: 525,
    },
    {
      date: '2016-02-17',
      close: 534.1,
    },
    {
      date: '2016-02-16',
      close: 521.1,
    },
    {
      date: '2016-02-12',
      close: 507.08,
    },
    {
      date: '2016-02-11',
      close: 503.82,
    },
    {
      date: '2016-02-10',
      close: 490.48,
    },
    {
      date: '2016-02-09',
      close: 482.07,
    },
    {
      date: '2016-02-08',
      close: 488.1,
    },
    {
      date: '2016-02-05',
      close: 502.13,
    },
    {
      date: '2016-02-04',
      close: 536.26,
    },
    {
      date: '2016-02-03',
      close: 531.07,
    },
    {
      date: '2016-02-02',
      close: 552.1,
    },
    {
      date: '2016-02-01',
      close: 574.81,
    },
    {
      date: '2016-01-29',
      close: 587,
    },
    {
      date: '2016-01-28',
      close: 635.35,
    },
    {
      date: '2016-01-27',
      close: 583.35,
    },
    {
      date: '2016-01-26',
      close: 601.25,
    },
    {
      date: '2016-01-25',
      close: 596.53,
    },
    {
      date: '2016-01-22',
      close: 596.38,
    },
    {
      date: '2016-01-21',
      close: 575.02,
    },
    {
      date: '2016-01-20',
      close: 571.77,
    },
    {
      date: '2016-01-19',
      close: 574.48,
    },
    {
      date: '2016-01-15',
      close: 570.18,
    },
    {
      date: '2016-01-14',
      close: 593,
    },
    {
      date: '2016-01-13',
      close: 581.81,
    },
    {
      date: '2016-01-12',
      close: 617.89,
    },
    {
      date: '2016-01-11',
      close: 617.74,
    },
    {
      date: '2016-01-08',
      close: 607.05,
    },
    {
      date: '2016-01-07',
      close: 607.94,
    },
    {
      date: '2016-01-06',
      close: 632.65,
    },
    {
      date: '2016-01-05',
      close: 633.79,
    },
    {
      date: '2016-01-04',
      close: 636.99,
    },
    {
      date: '2015-12-31',
      close: 675.89,
    },
    {
      date: '2015-12-30',
      close: 689.07,
    },
    {
      date: '2015-12-29',
      close: 693.97,
    },
    {
      date: '2015-12-28',
      close: 675.2,
    },
    {
      date: '2015-12-24',
      close: 662.79,
    },
    {
      date: '2015-12-23',
      close: 663.7,
    },
    {
      date: '2015-12-22',
      close: 663.15,
    },
    {
      date: '2015-12-21',
      close: 664.51,
    },
    {
      date: '2015-12-18',
      close: 664.14,
    },
    {
      date: '2015-12-17',
      close: 670.65,
    },
    {
      date: '2015-12-16',
      close: 675.77,
    },
    {
      date: '2015-12-15',
      close: 658.64,
    },
    {
      date: '2015-12-14',
      close: 657.91,
    },
    {
      date: '2015-12-11',
      close: 640.15,
    },
    {
      date: '2015-12-10',
      close: 662.32,
    },
    {
      date: '2015-12-09',
      close: 664.79,
    },
    {
      date: '2015-12-08',
      close: 677.33,
    },
    {
      date: '2015-12-07',
      close: 669.83,
    },
    {
      date: '2015-12-04',
      close: 672.64,
    },
    {
      date: '2015-12-03',
      close: 666.25,
    },
    {
      date: '2015-12-02',
      close: 676.01,
    },
    {
      date: '2015-12-01',
      close: 679.06,
    },
    {
      date: '2015-11-30',
      close: 664.8,
    },
    {
      date: '2015-11-27',
      close: 673.26,
    },
    {
      date: '2015-11-25',
      close: 675.34,
    },
    {
      date: '2015-11-24',
      close: 671.15,
    },
    {
      date: '2015-11-23',
      close: 678.99,
    },
    {
      date: '2015-11-20',
      close: 668.45,
    },
    {
      date: '2015-11-19',
      close: 661.27,
    },
    {
      date: '2015-11-18',
      close: 663.54,
    },
    {
      date: '2015-11-17',
      close: 643.3,
    },
    {
      date: '2015-11-16',
      close: 647.81,
    },
    {
      date: '2015-11-13',
      close: 642.35,
    },
    {
      date: '2015-11-12',
      close: 665.6,
    },
    {
      date: '2015-11-11',
      close: 673.25,
    },
    {
      date: '2015-11-10',
      close: 659.68,
    },
    {
      date: '2015-11-09',
      close: 655.49,
    },
    {
      date: '2015-11-06',
      close: 659.37,
    },
    {
      date: '2015-11-05',
      close: 655.65,
    },
    {
      date: '2015-11-04',
      close: 640.95,
    },
    {
      date: '2015-11-03',
      close: 625.31,
    },
    {
      date: '2015-11-02',
      close: 628.35,
    },
    {
      date: '2015-10-30',
      close: 625.9,
    },
    {
      date: '2015-10-29',
      close: 626.55,
    },
    {
      date: '2015-10-28',
      close: 617.1,
    },
    {
      date: '2015-10-27',
      close: 611.01,
    },
    {
      date: '2015-10-26',
      close: 608.61,
    },
    {
      date: '2015-10-23',
      close: 599.03,
    },
    {
      date: '2015-10-22',
      close: 563.91,
    },
    {
      date: '2015-10-21',
      close: 555.77,
    },
    {
      date: '2015-10-20',
      close: 560.88,
    },
    {
      date: '2015-10-19',
      close: 573.15,
    },
    {
      date: '2015-10-16',
      close: 570.76,
    },
    {
      date: '2015-10-15',
      close: 562.44,
    },
    {
      date: '2015-10-14',
      close: 544.83,
    },
    {
      date: '2015-10-13',
      close: 548.9,
    },
    {
      date: '2015-10-12',
      close: 550.19,
    },
    {
      date: '2015-10-09',
      close: 539.8,
    },
    {
      date: '2015-10-08',
      close: 533.16,
    },
    {
      date: '2015-10-07',
      close: 541.94,
    },
    {
      date: '2015-10-06',
      close: 537.48,
    },
    {
      date: '2015-10-05',
      close: 543.68,
    },
    {
      date: '2015-10-02',
      close: 532.54,
    },
    {
      date: '2015-10-01',
      close: 520.72,
    },
    {
      date: '2015-09-30',
      close: 511.89,
    },
    {
      date: '2015-09-29',
      close: 496.07,
    },
    {
      date: '2015-09-28',
      close: 504.06,
    },
    {
      date: '2015-09-25',
      close: 524.25,
    },
    {
      date: '2015-09-24',
      close: 533.75,
    },
    {
      date: '2015-09-23',
      close: 536.07,
    },
    {
      date: '2015-09-22',
      close: 538.4,
    },
    {
      date: '2015-09-21',
      close: 548.39,
    },
    {
      date: '2015-09-18',
      close: 540.26,
    },
    {
      date: '2015-09-17',
      close: 538.87,
    },
    {
      date: '2015-09-16',
      close: 527.39,
    },
    {
      date: '2015-09-15',
      close: 522.37,
    },
    {
      date: '2015-09-14',
      close: 521.38,
    },
    {
      date: '2015-09-11',
      close: 529.44,
    },
    {
      date: '2015-09-10',
      close: 522.24,
    },
    {
      date: '2015-09-09',
      close: 516.89,
    },
    {
      date: '2015-09-08',
      close: 517.54,
    },
    {
      date: '2015-09-04',
      close: 499,
    },
    {
      date: '2015-09-03',
      close: 504.72,
    },
    {
      date: '2015-09-02',
      close: 510.55,
    },
    {
      date: '2015-09-01',
      close: 496.54,
    },
    {
      date: '2015-08-31',
      close: 512.89,
    },
    {
      date: '2015-08-28',
      close: 518.01,
    },
    {
      date: '2015-08-27',
      close: 518.37,
    },
    {
      date: '2015-08-26',
      close: 500.77,
    },
    {
      date: '2015-08-25',
      close: 466.37,
    },
    {
      date: '2015-08-24',
      close: 463.37,
    },
    {
      date: '2015-08-21',
      close: 494.47,
    },
    {
      date: '2015-08-20',
      close: 515.78,
    },
    {
      date: '2015-08-19',
      close: 532.92,
    },
    {
      date: '2015-08-18',
      close: 535.02,
    },
    {
      date: '2015-08-17',
      close: 535.22,
    },
    {
      date: '2015-08-14',
      close: 531.52,
    },
    {
      date: '2015-08-13',
      close: 529.66,
    },
    {
      date: '2015-08-12',
      close: 525.91,
    },
    {
      date: '2015-08-11',
      close: 527.46,
    },
    {
      date: '2015-08-10',
      close: 524,
    },
    {
      date: '2015-08-07',
      close: 522.62,
    },
    {
      date: '2015-08-06',
      close: 529.46,
    },
    {
      date: '2015-08-05',
      close: 537.01,
    },
    {
      date: '2015-08-04',
      close: 531.9,
    },
    {
      date: '2015-08-03',
      close: 535.03,
    },
    {
      date: '2015-07-31',
      close: 536.15,
    },
    {
      date: '2015-07-30',
      close: 536.76,
    },
    {
      date: '2015-07-29',
      close: 529,
    },
    {
      date: '2015-07-28',
      close: 526.03,
    },
    {
      date: '2015-07-27',
      close: 531.41,
    },
    {
      date: '2015-07-24',
      close: 529.42,
    },
    {
      date: '2015-07-23',
      close: 482.18,
    },
    {
      date: '2015-07-22',
      close: 488.27,
    },
    {
      date: '2015-07-21',
      close: 488,
    },
    {
      date: '2015-07-20',
      close: 488.1,
    },
    {
      date: '2015-07-17',
      close: 483.01,
    },
    {
      date: '2015-07-16',
      close: 475.48,
    },
    {
      date: '2015-07-15',
      close: 461.19,
    },
    {
      date: '2015-07-14',
      close: 465.57,
    },
    {
      date: '2015-07-13',
      close: 455.57,
    },
    {
      date: '2015-07-10',
      close: 443.51,
    },
    {
      date: '2015-07-09',
      close: 434.39,
    },
    {
      date: '2015-07-08',
      close: 429.7,
    },
    {
      date: '2015-07-07',
      close: 436.72,
    },
    {
      date: '2015-07-06',
      close: 436.04,
    },
    {
      date: '2015-07-02',
      close: 437.71,
    },
    {
      date: '2015-07-01',
      close: 437.39,
    },
    {
      date: '2015-06-30',
      close: 434.09,
    },
    {
      date: '2015-06-29',
      close: 429.86,
    },
    {
      date: '2015-06-26',
      close: 438.1,
    },
    {
      date: '2015-06-25',
      close: 440.1,
    },
    {
      date: '2015-06-24',
      close: 440.84,
    },
    {
      date: '2015-06-23',
      close: 445.99,
    },
    {
      date: '2015-06-22',
      close: 436.29,
    },
    {
      date: '2015-06-19',
      close: 434.92,
    },
    {
      date: '2015-06-18',
      close: 439.39,
    },
    {
      date: '2015-06-17',
      close: 427.81,
    },
    {
      date: '2015-06-16',
      close: 427.26,
    },
    {
      date: '2015-06-15',
      close: 423.67,
    },
    {
      date: '2015-06-12',
      close: 429.92,
    },
    {
      date: '2015-06-11',
      close: 432.97,
    },
    {
      date: '2015-06-10',
      close: 430.77,
    },
    {
      date: '2015-06-09',
      close: 425.48,
    },
    {
      date: '2015-06-08',
      close: 423.5,
    },
    {
      date: '2015-06-05',
      close: 426.95,
    },
    {
      date: '2015-06-04',
      close: 430.78,
    },
    {
      date: '2015-06-03',
      close: 436.59,
    },
    {
      date: '2015-06-02',
      close: 430.99,
    },
    {
      date: '2015-06-01',
      close: 430.92,
    },
    {
      date: '2015-05-29',
      close: 429.23,
    },
    {
      date: '2015-05-28',
      close: 426.57,
    },
    {
      date: '2015-05-27',
      close: 431.42,
    },
    {
      date: '2015-05-26',
      close: 425.47,
    },
    {
      date: '2015-05-22',
      close: 427.63,
    },
    {
      date: '2015-05-21',
      close: 431.63,
    },
    {
      date: '2015-05-20',
      close: 423.86,
    },
    {
      date: '2015-05-19',
      close: 421.71,
    },
    {
      date: '2015-05-18',
      close: 425.24,
    },
    {
      date: '2015-05-15',
      close: 426,
    },
    {
      date: '2015-05-14',
      close: 432.28,
    },
    {
      date: '2015-05-13',
      close: 426.87,
    },
    {
      date: '2015-05-12',
      close: 431.02,
    },
    {
      date: '2015-05-11',
      close: 432.85,
    },
    {
      date: '2015-05-08',
      close: 433.69,
    },
    {
      date: '2015-05-07',
      close: 426.88,
    },
    {
      date: '2015-05-06',
      close: 419.1,
    },
    {
      date: '2015-05-05',
      close: 421.19,
    },
    {
      date: '2015-05-04',
      close: 423.04,
    },
    {
      date: '2015-05-01',
      close: 422.87,
    },
    {
      date: '2015-04-30',
      close: 421.78,
    },
    {
      date: '2015-04-29',
      close: 429.37,
    },
    {
      date: '2015-04-28',
      close: 429.31,
    },
    {
      date: '2015-04-27',
      close: 438.56,
    },
    {
      date: '2015-04-24',
      close: 445.1,
    },
    {
      date: '2015-04-23',
      close: 389.99,
    },
    {
      date: '2015-04-22',
      close: 389.8,
    },
    {
      date: '2015-04-21',
      close: 391.18,
    },
    {
      date: '2015-04-20',
      close: 389.51,
    },
    {
      date: '2015-04-17',
      close: 375.56,
    },
    {
      date: '2015-04-16',
      close: 386.04,
    },
    {
      date: '2015-04-15',
      close: 383.45,
    },
    {
      date: '2015-04-14',
      close: 385.11,
    },
    {
      date: '2015-04-13',
      close: 382.36,
    },
    {
      date: '2015-04-10',
      close: 382.65,
    },
    {
      date: '2015-04-09',
      close: 383.54,
    },
    {
      date: '2015-04-08',
      close: 381.2,
    },
    {
      date: '2015-04-07',
      close: 374.41,
    },
    {
      date: '2015-04-06',
      close: 377.04,
    },
    {
      date: '2015-04-02',
      close: 372.25,
    },
    {
      date: '2015-04-01',
      close: 370.26,
    },
    {
      date: '2015-03-31',
      close: 372.1,
    },
    {
      date: '2015-03-30',
      close: 374.59,
    },
    {
      date: '2015-03-27',
      close: 370.56,
    },
    {
      date: '2015-03-26',
      close: 367.35,
    },
    {
      date: '2015-03-25',
      close: 370.96,
    },
    {
      date: '2015-03-24',
      close: 374.09,
    },
    {
      date: '2015-03-23',
      close: 375.11,
    },
    {
      date: '2015-03-20',
      close: 378.49,
    },
    {
      date: '2015-03-19',
      close: 373.24,
    },
    {
      date: '2015-03-18',
      close: 375.14,
    },
    {
      date: '2015-03-17',
      close: 371.92,
    },
    {
      date: '2015-03-16',
      close: 373.35,
    },
    {
      date: '2015-03-13',
      close: 370.58,
    },
    {
      date: '2015-03-12',
      close: 374.24,
    },
    {
      date: '2015-03-11',
      close: 366.37,
    },
    {
      date: '2015-03-10',
      close: 369.51,
    },
    {
      date: '2015-03-09',
      close: 378.56,
    },
    {
      date: '2015-03-06',
      close: 380.09,
    },
    {
      date: '2015-03-05',
      close: 387.83,
    },
    {
      date: '2015-03-04',
      close: 382.72,
    },
    {
      date: '2015-03-03',
      close: 384.61,
    },
    {
      date: '2015-03-02',
      close: 385.66,
    },
    {
      date: '2015-02-27',
      close: 380.16,
    },
    {
      date: '2015-02-26',
      close: 384.8,
    },
    {
      date: '2015-02-25',
      close: 385.37,
    },
    {
      date: '2015-02-24',
      close: 378.59,
    },
    {
      date: '2015-02-23',
      close: 380.14,
    },
    {
      date: '2015-02-20',
      close: 383.66,
    },
    {
      date: '2015-02-19',
      close: 379,
    },
    {
      date: '2015-02-18',
      close: 373.37,
    },
    {
      date: '2015-02-17',
      close: 375.43,
    },
    {
      date: '2015-02-13',
      close: 381.83,
    },
    {
      date: '2015-02-12',
      close: 377.17,
    },
    {
      date: '2015-02-11',
      close: 375.14,
    },
    {
      date: '2015-02-10',
      close: 373,
    },
    {
      date: '2015-02-09',
      close: 370.56,
    },
    {
      date: '2015-02-06',
      close: 374.28,
    },
    {
      date: '2015-02-05',
      close: 373.89,
    },
    {
      date: '2015-02-04',
      close: 364.75,
    },
    {
      date: '2015-02-03',
      close: 363.55,
    },
    {
      date: '2015-02-02',
      close: 364.47,
    },
    {
      date: '2015-01-30',
      close: 354.53,
    },
    {
      date: '2015-01-29',
      close: 311.78,
    },
    {
      date: '2015-01-28',
      close: 303.91,
    },
    {
      date: '2015-01-27',
      close: 306.75,
    },
    {
      date: '2015-01-26',
      close: 309.66,
    },
    {
      date: '2015-01-23',
      close: 312.39,
    },
    {
      date: '2015-01-22',
      close: 310.32,
    },
    {
      date: '2015-01-21',
      close: 297.25,
    },
    {
      date: '2015-01-20',
      close: 289.44,
    },
    {
      date: '2015-01-16',
      close: 290.74,
    },
    {
      date: '2015-01-15',
      close: 286.95,
    },
    {
      date: '2015-01-14',
      close: 293.27,
    },
    {
      date: '2015-01-13',
      close: 294.74,
    },
    {
      date: '2015-01-12',
      close: 291.41,
    },
    {
      date: '2015-01-09',
      close: 296.93,
    },
    {
      date: '2015-01-08',
      close: 300.46,
    },
    {
      date: '2015-01-07',
      close: 298.42,
    },
    {
      date: '2015-01-06',
      close: 295.29,
    },
    {
      date: '2015-01-05',
      close: 302.19,
    },
    {
      date: '2015-01-02',
      close: 308.52,
    },
    {
      date: '2014-12-31',
      close: 310.35,
    },
    {
      date: '2014-12-30',
      close: 310.3,
    },
    {
      date: '2014-12-29',
      close: 312.04,
    },
    {
      date: '2014-12-26',
      close: 309.09,
    },
    {
      date: '2014-12-24',
      close: 303.03,
    },
    {
      date: '2014-12-23',
      close: 306.29,
    },
    {
      date: '2014-12-22',
      close: 306.54,
    },
    {
      date: '2014-12-19',
      close: 299.9,
    },
    {
      date: '2014-12-18',
      close: 297.73,
    },
    {
      date: '2014-12-17',
      close: 298.88,
    },
    {
      date: '2014-12-16',
      close: 295.06,
    },
    {
      date: '2014-12-15',
      close: 306.07,
    },
    {
      date: '2014-12-12',
      close: 307.32,
    },
    {
      date: '2014-12-11',
      close: 307.36,
    },
    {
      date: '2014-12-10',
      close: 305.84,
    },
    {
      date: '2014-12-09',
      close: 312.5,
    },
    {
      date: '2014-12-08',
      close: 306.64,
    },
    {
      date: '2014-12-05',
      close: 312.63,
    },
    {
      date: '2014-12-04',
      close: 316.93,
    },
    {
      date: '2014-12-03',
      close: 316.5,
    },
    {
      date: '2014-12-02',
      close: 326.31,
    },
    {
      date: '2014-12-01',
      close: 326,
    },
    {
      date: '2014-11-28',
      close: 338.64,
    },
    {
      date: '2014-11-26',
      close: 333.57,
    },
    {
      date: '2014-11-25',
      close: 335.04,
    },
    {
      date: '2014-11-24',
      close: 335.64,
    },
    {
      date: '2014-11-21',
      close: 332.63,
    },
    {
      date: '2014-11-20',
      close: 330.54,
    },
    {
      date: '2014-11-19',
      close: 326.54,
    },
    {
      date: '2014-11-18',
      close: 324.93,
    },
    {
      date: '2014-11-17',
      close: 323.05,
    },
    {
      date: '2014-11-14',
      close: 327.82,
    },
    {
      date: '2014-11-13',
      close: 316.48,
    },
    {
      date: '2014-11-12',
      close: 311.51,
    },
    {
      date: '2014-11-11',
      close: 312.01,
    },
    {
      date: '2014-11-10',
      close: 305.11,
    },
    {
      date: '2014-11-07',
      close: 299.86,
    },
    {
      date: '2014-11-06',
      close: 296.64,
    },
    {
      date: '2014-11-05',
      close: 296.52,
    },
    {
      date: '2014-11-04',
      close: 302.81,
    },
    {
      date: '2014-11-03',
      close: 305.72,
    },
    {
      date: '2014-10-31',
      close: 305.46,
    },
    {
      date: '2014-10-30',
      close: 299.07,
    },
    {
      date: '2014-10-29',
      close: 294.12,
    },
    {
      date: '2014-10-28',
      close: 295.59,
    },
    {
      date: '2014-10-27',
      close: 289.97,
    },
    {
      date: '2014-10-24',
      close: 287.06,
    },
    {
      date: '2014-10-23',
      close: 313.18,
    },
    {
      date: '2014-10-22',
      close: 312.97,
    },
    {
      date: '2014-10-21',
      close: 315.33,
    },
    {
      date: '2014-10-20',
      close: 306.21,
    },
    {
      date: '2014-10-17',
      close: 303.64,
    },
    {
      date: '2014-10-16',
      close: 302.86,
    },
    {
      date: '2014-10-15',
      close: 305.97,
    },
    {
      date: '2014-10-14',
      close: 308.31,
    },
    {
      date: '2014-10-13',
      close: 306.45,
    },
    {
      date: '2014-10-10',
      close: 311.39,
    },
    {
      date: '2014-10-09',
      close: 315.37,
    },
    {
      date: '2014-10-08',
      close: 322.7,
    },
    {
      date: '2014-10-07',
      close: 316.98,
    },
    {
      date: '2014-10-06',
      close: 322.2,
    },
    {
      date: '2014-10-03',
      close: 322.74,
    },
    {
      date: '2014-10-02',
      close: 318.41,
    },
    {
      date: '2014-10-01',
      close: 317.46,
    },
    {
      date: '2014-09-30',
      close: 322.44,
    },
    {
      date: '2014-09-29',
      close: 321.82,
    },
    {
      date: '2014-09-26',
      close: 323.21,
    },
    {
      date: '2014-09-25',
      close: 321.93,
    },
    {
      date: '2014-09-24',
      close: 328.21,
    },
    {
      date: '2014-09-23',
      close: 323.63,
    },
    {
      date: '2014-09-22',
      close: 324.5,
    },
    {
      date: '2014-09-19',
      close: 331.32,
    },
    {
      date: '2014-09-18',
      close: 325,
    },
    {
      date: '2014-09-17',
      close: 324,
    },
    {
      date: '2014-09-16',
      close: 327.76,
    },
    {
      date: '2014-09-15',
      close: 323.89,
    },
    {
      date: '2014-09-12',
      close: 331.19,
    },
    {
      date: '2014-09-11',
      close: 330.52,
    },
    {
      date: '2014-09-10',
      close: 331.33,
    },
    {
      date: '2014-09-09',
      close: 329.75,
    },
    {
      date: '2014-09-08',
      close: 342.34,
    },
    {
      date: '2014-09-05',
      close: 346.38,
    },
    {
      date: '2014-09-04',
      close: 345.95,
    },
    {
      date: '2014-09-03',
      close: 339,
    },
    {
      date: '2014-09-02',
      close: 342.38,
    },
    {
      date: '2014-08-29',
      close: 339.04,
    },
    {
      date: '2014-08-28',
      close: 340.02,
    },
    {
      date: '2014-08-27',
      close: 343.18,
    },
    {
      date: '2014-08-26',
      close: 341.83,
    },
    {
      date: '2014-08-25',
      close: 334.02,
    },
    {
      date: '2014-08-22',
      close: 331.59,
    },
    {
      date: '2014-08-21',
      close: 332.91,
    },
    {
      date: '2014-08-20',
      close: 335.78,
    },
    {
      date: '2014-08-19',
      close: 335.13,
    },
    {
      date: '2014-08-18',
      close: 334.53,
    },
    {
      date: '2014-08-15',
      close: 333.63,
    },
    {
      date: '2014-08-14',
      close: 333.21,
    },
    {
      date: '2014-08-13',
      close: 326.28,
    },
    {
      date: '2014-08-12',
      close: 319.32,
    },
    {
      date: '2014-08-11',
      close: 318.33,
    },
    {
      date: '2014-08-08',
      close: 316.8,
    },
    {
      date: '2014-08-07',
      close: 311.45,
    },
    {
      date: '2014-08-06',
      close: 313.89,
    },
    {
      date: '2014-08-05',
      close: 312.32,
    },
    {
      date: '2014-08-04',
      close: 313.65,
    },
    {
      date: '2014-08-01',
      close: 307.06,
    },
    {
      date: '2014-07-31',
      close: 312.99,
    },
    {
      date: '2014-07-30',
      close: 322.51,
    },
    {
      date: '2014-07-29',
      close: 320,
    },
    {
      date: '2014-07-28',
      close: 320.41,
    },
    {
      date: '2014-07-25',
      close: 324.01,
    },
    {
      date: '2014-07-24',
      close: 358.61,
    },
    {
      date: '2014-07-23',
      close: 358.14,
    },
    {
      date: '2014-07-22',
      close: 360.84,
    },
    {
      date: '2014-07-21',
      close: 359.76,
    },
    {
      date: '2014-07-18',
      close: 358.66,
    },
    {
      date: '2014-07-17',
      close: 352.45,
    },
    {
      date: '2014-07-16',
      close: 355.9,
    },
    {
      date: '2014-07-15',
      close: 354.44,
    },
    {
      date: '2014-07-14',
      close: 355.32,
    },
    {
      date: '2014-07-11',
      close: 346.2,
    },
    {
      date: '2014-07-10',
      close: 327.92,
    },
    {
      date: '2014-07-09',
      close: 329.97,
    },
    {
      date: '2014-07-08',
      close: 323.81,
    },
    {
      date: '2014-07-07',
      close: 333.55,
    },
    {
      date: '2014-07-03',
      close: 337.49,
    },
    {
      date: '2014-07-02',
      close: 332.85,
    },
    {
      date: '2014-07-01',
      close: 332.39,
    },
    {
      date: '2014-06-30',
      close: 324.78,
    },
    {
      date: '2014-06-27',
      close: 324.57,
    },
    {
      date: '2014-06-26',
      close: 325.69,
    },
    {
      date: '2014-06-25',
      close: 327.44,
    },
    {
      date: '2014-06-24',
      close: 324.16,
    },
    {
      date: '2014-06-23',
      close: 327.24,
    },
    {
      date: '2014-06-20',
      close: 324.2,
    },
    {
      date: '2014-06-19',
      close: 327,
    },
    {
      date: '2014-06-18',
      close: 334.38,
    },
    {
      date: '2014-06-17',
      close: 325.62,
    },
    {
      date: '2014-06-16',
      close: 327.62,
    },
    {
      date: '2014-06-13',
      close: 326.27,
    },
    {
      date: '2014-06-12',
      close: 325.91,
    },
    {
      date: '2014-06-11',
      close: 335.2,
    },
    {
      date: '2014-06-10',
      close: 332.41,
    },
    {
      date: '2014-06-09',
      close: 327.5,
    },
    {
      date: '2014-06-06',
      close: 329.67,
    },
    {
      date: '2014-06-05',
      close: 323.57,
    },
    {
      date: '2014-06-04',
      close: 306.78,
    },
    {
      date: '2014-06-03',
      close: 307.19,
    },
    {
      date: '2014-06-02',
      close: 308.84,
    },
    {
      date: '2014-05-30',
      close: 312.55,
    },
    {
      date: '2014-05-29',
      close: 313.78,
    },
    {
      date: '2014-05-28',
      close: 310.16,
    },
    {
      date: '2014-05-27',
      close: 310.82,
    },
    {
      date: '2014-05-23',
      close: 312.24,
    },
    {
      date: '2014-05-22',
      close: 304.91,
    },
    {
      date: '2014-05-21',
      close: 305.01,
    },
    {
      date: '2014-05-20',
      close: 301.19,
    },
    {
      date: '2014-05-19',
      close: 296.76,
    },
    {
      date: '2014-05-16',
      close: 297.7,
    },
    {
      date: '2014-05-15',
      close: 295.19,
    },
    {
      date: '2014-05-14',
      close: 297.62,
    },
    {
      date: '2014-05-13',
      close: 304.64,
    },
    {
      date: '2014-05-12',
      close: 302.86,
    },
    {
      date: '2014-05-09',
      close: 292.24,
    },
    {
      date: '2014-05-08',
      close: 288.32,
    },
    {
      date: '2014-05-07',
      close: 292.71,
    },
    {
      date: '2014-05-06',
      close: 297.38,
    },
    {
      date: '2014-05-05',
      close: 310.05,
    },
    {
      date: '2014-05-02',
      close: 308.01,
    },
    {
      date: '2014-05-01',
      close: 307.89,
    },
    {
      date: '2014-04-30',
      close: 304.13,
    },
    {
      date: '2014-04-29',
      close: 300.38,
    },
    {
      date: '2014-04-28',
      close: 296.58,
    },
    {
      date: '2014-04-25',
      close: 303.83,
    },
    {
      date: '2014-04-24',
      close: 337.15,
    },
    {
      date: '2014-04-23',
      close: 324.58,
    },
    {
      date: '2014-04-22',
      close: 329.32,
    },
    {
      date: '2014-04-21',
      close: 330.87,
    },
    {
      date: '2014-04-17',
      close: 324.91,
    },
    {
      date: '2014-04-16',
      close: 323.68,
    },
    {
      date: '2014-04-15',
      close: 316.08,
    },
    {
      date: '2014-04-14',
      close: 315.91,
    },
    {
      date: '2014-04-11',
      close: 311.73,
    },
    {
      date: '2014-04-10',
      close: 317.11,
    },
    {
      date: '2014-04-09',
      close: 331.81,
    },
    {
      date: '2014-04-08',
      close: 327.07,
    },
    {
      date: '2014-04-07',
      close: 317.76,
    },
    {
      date: '2014-04-04',
      close: 323,
    },
    {
      date: '2014-04-03',
      close: 333.62,
    },
    {
      date: '2014-04-02',
      close: 341.96,
    },
    {
      date: '2014-04-01',
      close: 342.99,
    },
    {
      date: '2014-03-31',
      close: 336.37,
    },
    {
      date: '2014-03-28',
      close: 338.29,
    },
    {
      date: '2014-03-27',
      close: 338.47,
    },
    {
      date: '2014-03-26',
      close: 343.41,
    },
    {
      date: '2014-03-25',
      close: 354.71,
    },
    {
      date: '2014-03-24',
      close: 351.85,
    },
    {
      date: '2014-03-21',
      close: 360.62,
    },
    {
      date: '2014-03-20',
      close: 368.97,
    },
    {
      date: '2014-03-19',
      close: 373.23,
    },
    {
      date: '2014-03-18',
      close: 378.77,
    },
    {
      date: '2014-03-17',
      close: 375.04,
    },
    {
      date: '2014-03-14',
      close: 373.74,
    },
    {
      date: '2014-03-13',
      close: 371.51,
    },
    {
      date: '2014-03-12',
      close: 370.64,
    },
    {
      date: '2014-03-11',
      close: 368.82,
    },
    {
      date: '2014-03-10',
      close: 370.53,
    },
    {
      date: '2014-03-07',
      close: 372.06,
    },
    {
      date: '2014-03-06',
      close: 372.16,
    },
    {
      date: '2014-03-05',
      close: 372.37,
    },
    {
      date: '2014-03-04',
      close: 363.9,
    },
    {
      date: '2014-03-03',
      close: 359.78,
    },
    {
      date: '2014-02-28',
      close: 362.1,
    },
    {
      date: '2014-02-27',
      close: 360.13,
    },
    {
      date: '2014-02-26',
      close: 359.8,
    },
    {
      date: '2014-02-25',
      close: 358.32,
    },
    {
      date: '2014-02-24',
      close: 351.78,
    },
    {
      date: '2014-02-21',
      close: 346.76,
    },
    {
      date: '2014-02-20',
      close: 349.8,
    },
    {
      date: '2014-02-19',
      close: 347.38,
    },
    {
      date: '2014-02-18',
      close: 353.65,
    },
    {
      date: '2014-02-14',
      close: 357.35,
    },
    {
      date: '2014-02-13',
      close: 357.2,
    },
    {
      date: '2014-02-12',
      close: 349.25,
    },
    {
      date: '2014-02-11',
      close: 361.79,
    },
    {
      date: '2014-02-10',
      close: 360.87,
    },
    {
      date: '2014-02-07',
      close: 361.08,
    },
    {
      date: '2014-02-06',
      close: 354.59,
    },
    {
      date: '2014-02-05',
      close: 346.45,
    },
    {
      date: '2014-02-04',
      close: 347.95,
    },
    {
      date: '2014-02-03',
      close: 346.15,
    },
    {
      date: '2014-01-31',
      close: 358.69,
    },
    {
      date: '2014-01-30',
      close: 403.01,
    },
    {
      date: '2014-01-29',
      close: 384.2,
    },
    {
      date: '2014-01-28',
      close: 394.43,
    },
    {
      date: '2014-01-27',
      close: 386.28,
    },
    {
      date: '2014-01-24',
      close: 387.6,
    },
    {
      date: '2014-01-23',
      close: 399.87,
    },
    {
      date: '2014-01-22',
      close: 404.54,
    },
    {
      date: '2014-01-21',
      close: 407.05,
    },
    {
      date: '2014-01-17',
      close: 399.61,
    },
    {
      date: '2014-01-16',
      close: 395.8,
    },
    {
      date: '2014-01-15',
      close: 395.87,
    },
    {
      date: '2014-01-14',
      close: 397.54,
    },
    {
      date: '2014-01-13',
      close: 390.98,
    },
    {
      date: '2014-01-10',
      close: 397.66,
    },
    {
      date: '2014-01-09',
      close: 401.01,
    },
    {
      date: '2014-01-08',
      close: 401.92,
    },
    {
      date: '2014-01-07',
      close: 398.03,
    },
    {
      date: '2014-01-06',
      close: 393.63,
    },
    {
      date: '2014-01-03',
      close: 396.44,
    },
    {
      date: '2014-01-02',
      close: 397.97,
    },
    {
      date: '2013-12-31',
      close: 398.79,
    },
    {
      date: '2013-12-30',
      close: 393.37,
    },
    {
      date: '2013-12-27',
      close: 398.08,
    },
    {
      date: '2013-12-26',
      close: 404.39,
    },
    {
      date: '2013-12-24',
      close: 399.2,
    },
    {
      date: '2013-12-23',
      close: 402.92,
    },
    {
      date: '2013-12-20',
      close: 402.2,
    },
    {
      date: '2013-12-19',
      close: 395.19,
    },
    {
      date: '2013-12-18',
      close: 395.96,
    },
    {
      date: '2013-12-17',
      close: 387.65,
    },
    {
      date: '2013-12-16',
      close: 388.97,
    },
    {
      date: '2013-12-13',
      close: 384.24,
    },
    {
      date: '2013-12-12',
      close: 381.25,
    },
    {
      date: '2013-12-11',
      close: 382.19,
    },
    {
      date: '2013-12-10',
      close: 387.78,
    },
    {
      date: '2013-12-09',
      close: 384.89,
    },
    {
      date: '2013-12-06',
      close: 386.95,
    },
    {
      date: '2013-12-05',
      close: 384.49,
    },
    {
      date: '2013-12-04',
      close: 385.96,
    },
    {
      date: '2013-12-03',
      close: 384.66,
    },
    {
      date: '2013-12-02',
      close: 392.3,
    },
    {
      date: '2013-11-29',
      close: 393.62,
    },
    {
      date: '2013-11-27',
      close: 386.71,
    },
    {
      date: '2013-11-26',
      close: 381.37,
    },
    {
      date: '2013-11-25',
      close: 376.64,
    },
    {
      date: '2013-11-22',
      close: 372.31,
    },
    {
      date: '2013-11-21',
      close: 368.92,
    },
    {
      date: '2013-11-20',
      close: 362.57,
    },
    {
      date: '2013-11-19',
      close: 364.94,
    },
    {
      date: '2013-11-18',
      close: 366.18,
    },
    {
      date: '2013-11-15',
      close: 369.17,
    },
    {
      date: '2013-11-14',
      close: 367.4,
    },
    {
      date: '2013-11-13',
      close: 356.22,
    },
    {
      date: '2013-11-12',
      close: 349.53,
    },
    {
      date: '2013-11-11',
      close: 354.38,
    },
    {
      date: '2013-11-08',
      close: 350.31,
    },
    {
      date: '2013-11-07',
      close: 343.56,
    },
    {
      date: '2013-11-06',
      close: 356.18,
    },
    {
      date: '2013-11-05',
      close: 358.89,
    },
    {
      date: '2013-11-04',
      close: 358.74,
    },
    {
      date: '2013-11-01',
      close: 359,
    },
    {
      date: '2013-10-31',
      close: 364.03,
    },
    {
      date: '2013-10-30',
      close: 361.08,
    },
    {
      date: '2013-10-29',
      close: 362.7,
    },
    {
      date: '2013-10-28',
      close: 358.16,
    },
    {
      date: '2013-10-25',
      close: 363.39,
    },
    {
      date: '2013-10-24',
      close: 332.21,
    },
    {
      date: '2013-10-23',
      close: 326.76,
    },
    {
      date: '2013-10-22',
      close: 332.54,
    },
    {
      date: '2013-10-21',
      close: 326.44,
    },
    {
      date: '2013-10-18',
      close: 328.93,
    },
    {
      date: '2013-10-17',
      close: 310.77,
    },
    {
      date: '2013-10-16',
      close: 310.49,
    },
    {
      date: '2013-10-15',
      close: 306.4,
    },
    {
      date: '2013-10-14',
      close: 310.7,
    },
    {
      date: '2013-10-11',
      close: 310.89,
    },
    {
      date: '2013-10-10',
      close: 305.17,
    },
    {
      date: '2013-10-09',
      close: 298.23,
    },
    {
      date: '2013-10-08',
      close: 303.23,
    },
    {
      date: '2013-10-07',
      close: 310.03,
    },
    {
      date: '2013-10-04',
      close: 319.04,
    },
    {
      date: '2013-10-03',
      close: 314.76,
    },
    {
      date: '2013-10-02',
      close: 320.51,
    },
    {
      date: '2013-10-01',
      close: 320.95,
    },
    {
      date: '2013-09-30',
      close: 312.64,
    },
    {
      date: '2013-09-27',
      close: 316.01,
    },
    {
      date: '2013-09-26',
      close: 318.12,
    },
    {
      date: '2013-09-25',
      close: 312.65,
    },
    {
      date: '2013-09-24',
      close: 314.13,
    },
    {
      date: '2013-09-23',
      close: 311.49,
    },
    {
      date: '2013-09-20',
      close: 316.34,
    },
    {
      date: '2013-09-19',
      close: 312.06,
    },
    {
      date: '2013-09-18',
      close: 312.03,
    },
    {
      date: '2013-09-17',
      close: 304.17,
    },
    {
      date: '2013-09-16',
      close: 296.06,
    },
    {
      date: '2013-09-13',
      close: 297.92,
    },
    {
      date: '2013-09-12',
      close: 298.86,
    },
    {
      date: '2013-09-11',
      close: 299.64,
    },
    {
      date: '2013-09-10',
      close: 300.36,
    },
    {
      date: '2013-09-09',
      close: 299.71,
    },
    {
      date: '2013-09-06',
      close: 295.86,
    },
    {
      date: '2013-09-05',
      close: 294.1,
    },
    {
      date: '2013-09-04',
      close: 293.64,
    },
    {
      date: '2013-09-03',
      close: 288.8,
    },
    {
      date: '2013-08-30',
      close: 280.98,
    },
    {
      date: '2013-08-29',
      close: 283.98,
    },
    {
      date: '2013-08-28',
      close: 281.58,
    },
    {
      date: '2013-08-27',
      close: 280.93,
    },
    {
      date: '2013-08-26',
      close: 286.21,
    },
    {
      date: '2013-08-23',
      close: 290.01,
    },
    {
      date: '2013-08-22',
      close: 289.73,
    },
    {
      date: '2013-08-21',
      close: 284.57,
    },
    {
      date: '2013-08-20',
      close: 287.09,
    },
    {
      date: '2013-08-19',
      close: 285.57,
    },
    {
      date: '2013-08-16',
      close: 284.82,
    },
    {
      date: '2013-08-15',
      close: 286.47,
    },
    {
      date: '2013-08-14',
      close: 291.34,
    },
    {
      date: '2013-08-13',
      close: 293.97,
    },
    {
      date: '2013-08-12',
      close: 296.69,
    },
    {
      date: '2013-08-09',
      close: 297.26,
    },
    {
      date: '2013-08-08',
      close: 295.74,
    },
    {
      date: '2013-08-07',
      close: 296.91,
    },
    {
      date: '2013-08-06',
      close: 300.75,
    },
    {
      date: '2013-08-05',
      close: 300.99,
    },
    {
      date: '2013-08-02',
      close: 304.21,
    },
    {
      date: '2013-08-01',
      close: 305.57,
    },
    {
      date: '2013-07-31',
      close: 301.22,
    },
    {
      date: '2013-07-30',
      close: 302.41,
    },
    {
      date: '2013-07-29',
      close: 306.1,
    },
    {
      date: '2013-07-26',
      close: 312.01,
    },
    {
      date: '2013-07-25',
      close: 303.4,
    },
    {
      date: '2013-07-24',
      close: 298.94,
    },
    {
      date: '2013-07-23',
      close: 301.06,
    },
    {
      date: '2013-07-22',
      close: 303.48,
    },
    {
      date: '2013-07-19',
      close: 305.23,
    },
    {
      date: '2013-07-18',
      close: 304.11,
    },
    {
      date: '2013-07-17',
      close: 308.69,
    },
    {
      date: '2013-07-16',
      close: 306.87,
    },
    {
      date: '2013-07-15',
      close: 306.57,
    },
    {
      date: '2013-07-12',
      close: 307.55,
    },
    {
      date: '2013-07-11',
      close: 299.66,
    },
    {
      date: '2013-07-10',
      close: 292.33,
    },
    {
      date: '2013-07-09',
      close: 291.53,
    },
    {
      date: '2013-07-08',
      close: 290.59,
    },
    {
      date: '2013-07-05',
      close: 285.88,
    },
    {
      date: '2013-07-03',
      close: 284.03,
    },
    {
      date: '2013-07-02',
      close: 283.73,
    },
    {
      date: '2013-07-01',
      close: 282.1,
    },
    {
      date: '2013-06-28',
      close: 277.69,
    },
    {
      date: '2013-06-27',
      close: 277.55,
    },
    {
      date: '2013-06-26',
      close: 277.57,
    },
    {
      date: '2013-06-25',
      close: 272.09,
    },
    {
      date: '2013-06-24',
      close: 270.61,
    },
    {
      date: '2013-06-21',
      close: 273.36,
    },
    {
      date: '2013-06-20',
      close: 273.44,
    },
    {
      date: '2013-06-19',
      close: 278.16,
    },
    {
      date: '2013-06-18',
      close: 281.76,
    },
    {
      date: '2013-06-17',
      close: 278.06,
    },
    {
      date: '2013-06-14',
      close: 273.99,
    },
    {
      date: '2013-06-13',
      close: 275.79,
    },
    {
      date: '2013-06-12',
      close: 271.67,
    },
    {
      date: '2013-06-11',
      close: 274.78,
    },
    {
      date: '2013-06-10',
      close: 281.07,
    },
    {
      date: '2013-06-07',
      close: 276.87,
    },
    {
      date: '2013-06-06',
      close: 267.83,
    },
    {
      date: '2013-06-05',
      close: 267.17,
    },
    {
      date: '2013-06-04',
      close: 265.7,
    },
    {
      date: '2013-06-03',
      close: 266.88,
    },
    {
      date: '2013-05-31',
      close: 269.2,
    },
    {
      date: '2013-05-30',
      close: 266.83,
    },
    {
      date: '2013-05-29',
      close: 265.53,
    },
    {
      date: '2013-05-28',
      close: 267.29,
    },
    {
      date: '2013-05-24',
      close: 261.74,
    },
    {
      date: '2013-05-23',
      close: 261.8,
    },
    {
      date: '2013-05-22',
      close: 262.96,
    },
    {
      date: '2013-05-21',
      close: 268.86,
    },
    {
      date: '2013-05-20',
      close: 267.63,
    },
    {
      date: '2013-05-17',
      close: 269.9,
    },
    {
      date: '2013-05-16',
      close: 264.12,
    },
    {
      date: '2013-05-15',
      close: 266.56,
    },
    {
      date: '2013-05-14',
      close: 268.33,
    },
    {
      date: '2013-05-13',
      close: 264.51,
    },
    {
      date: '2013-05-10',
      close: 263.63,
    },
    {
      date: '2013-05-09',
      close: 260.16,
    },
    {
      date: '2013-05-08',
      close: 258.68,
    },
    {
      date: '2013-05-07',
      close: 257.73,
    },
    {
      date: '2013-05-06',
      close: 255.72,
    },
    {
      date: '2013-05-03',
      close: 258.05,
    },
    {
      date: '2013-05-02',
      close: 252.55,
    },
    {
      date: '2013-05-01',
      close: 248.23,
    },
    {
      date: '2013-04-30',
      close: 253.81,
    },
    {
      date: '2013-04-29',
      close: 249.74,
    },
    {
      date: '2013-04-26',
      close: 254.81,
    },
    {
      date: '2013-04-25',
      close: 274.7,
    },
    {
      date: '2013-04-24',
      close: 268.78,
    },
    {
      date: '2013-04-23',
      close: 268.9,
    },
    {
      date: '2013-04-22',
      close: 263.55,
    },
    {
      date: '2013-04-19',
      close: 260.32,
    },
    {
      date: '2013-04-18',
      close: 259.42,
    },
    {
      date: '2013-04-17',
      close: 267.4,
    },
    {
      date: '2013-04-16',
      close: 272.34,
    },
    {
      date: '2013-04-15',
      close: 267.72,
    },
    {
      date: '2013-04-12',
      close: 272.87,
    },
    {
      date: '2013-04-11',
      close: 269.85,
    },
    {
      date: '2013-04-10',
      close: 264.77,
    },
    {
      date: '2013-04-09',
      close: 261.14,
    },
    {
      date: '2013-04-08',
      close: 258.95,
    },
    {
      date: '2013-04-05',
      close: 255.48,
    },
    {
      date: '2013-04-04',
      close: 259.08,
    },
    {
      date: '2013-04-03',
      close: 259.03,
    },
    {
      date: '2013-04-02',
      close: 263.32,
    },
    {
      date: '2013-04-01',
      close: 261.61,
    },
    {
      date: '2013-03-28',
      close: 266.49,
    },
    {
      date: '2013-03-27',
      close: 265.3,
    },
    {
      date: '2013-03-26',
      close: 260.31,
    },
    {
      date: '2013-03-25',
      close: 256.02,
    },
    {
      date: '2013-03-22',
      close: 257.75,
    },
    {
      date: '2013-03-21',
      close: 253.39,
    },
    {
      date: '2013-03-20',
      close: 257.28,
    },
    {
      date: '2013-03-19',
      close: 256.41,
    },
    {
      date: '2013-03-18',
      close: 257.89,
    },
    {
      date: '2013-03-15',
      close: 261.82,
    },
    {
      date: '2013-03-14',
      close: 265.74,
    },
    {
      date: '2013-03-13',
      close: 275.1,
    },
    {
      date: '2013-03-12',
      close: 274.13,
    },
    {
      date: '2013-03-11',
      close: 271.24,
    },
    {
      date: '2013-03-08',
      close: 274.19,
    },
    {
      date: '2013-03-07',
      close: 273.88,
    },
    {
      date: '2013-03-06',
      close: 273.79,
    },
    {
      date: '2013-03-05',
      close: 275.59,
    },
    {
      date: '2013-03-04',
      close: 273.11,
    },
    {
      date: '2013-03-01',
      close: 265.74,
    },
    {
      date: '2013-02-28',
      close: 264.27,
    },
    {
      date: '2013-02-27',
      close: 263.25,
    },
    {
      date: '2013-02-26',
      close: 259.36,
    },
    {
      date: '2013-02-25',
      close: 259.87,
    },
    {
      date: '2013-02-22',
      close: 265.42,
    },
    {
      date: '2013-02-21',
      close: 265.94,
    },
    {
      date: '2013-02-20',
      close: 266.41,
    },
    {
      date: '2013-02-19',
      close: 269.75,
    },
    {
      date: '2013-02-15',
      close: 265.09,
    },
    {
      date: '2013-02-14',
      close: 269.24,
    },
    {
      date: '2013-02-13',
      close: 269.47,
    },
    {
      date: '2013-02-12',
      close: 258.7,
    },
    {
      date: '2013-02-11',
      close: 257.21,
    },
    {
      date: '2013-02-08',
      close: 261.95,
    },
    {
      date: '2013-02-07',
      close: 260.23,
    },
    {
      date: '2013-02-06',
      close: 262.22,
    },
    {
      date: '2013-02-05',
      close: 266.89,
    },
    {
      date: '2013-02-04',
      close: 259.98,
    },
    {
      date: '2013-02-01',
      close: 265,
    },
    {
      date: '2013-01-31',
      close: 265.5,
    },
    {
      date: '2013-01-30',
      close: 272.76,
    },
    {
      date: '2013-01-29',
      close: 260.35,
    },
    {
      date: '2013-01-28',
      close: 276.04,
    },
    {
      date: '2013-01-25',
      close: 283.99,
    },
    {
      date: '2013-01-24',
      close: 273.46,
    },
    {
      date: '2013-01-23',
      close: 268.11,
    },
    {
      date: '2013-01-22',
      close: 270.19,
    },
    {
      date: '2013-01-18',
      close: 272.12,
    },
    {
      date: '2013-01-17',
      close: 270.48,
    },
    {
      date: '2013-01-16',
      close: 268.93,
    },
    {
      date: '2013-01-15',
      close: 271.9,
    },
    {
      date: '2013-01-14',
      close: 272.73,
    },
    {
      date: '2013-01-11',
      close: 267.94,
    },
    {
      date: '2013-01-10',
      close: 265.34,
    },
    {
      date: '2013-01-09',
      close: 266.35,
    },
    {
      date: '2013-01-08',
      close: 266.38,
    },
    {
      date: '2013-01-07',
      close: 268.46,
    },
    {
      date: '2013-01-04',
      close: 259.15,
    },
    {
      date: '2013-01-03',
      close: 258.48,
    },
    {
      date: '2013-01-02',
      close: 257.31,
    },
    {
      date: '2012-12-31',
      close: 250.87,
    },
    {
      date: '2012-12-28',
      close: 245.18,
    },
    {
      date: '2012-12-27',
      close: 248.31,
    },
    {
      date: '2012-12-26',
      close: 248.63,
    },
    {
      date: '2012-12-24',
      close: 258.62,
    },
    {
      date: '2012-12-21',
      close: 256.92,
    },
    {
      date: '2012-12-20',
      close: 261.5,
    },
    {
      date: '2012-12-19',
      close: 257.99,
    },
    {
      date: '2012-12-18',
      close: 260.4,
    },
    {
      date: '2012-12-17',
      close: 253.86,
    },
    {
      date: '2012-12-14',
      close: 249.19,
    },
    {
      date: '2012-12-13',
      close: 251.25,
    },
    {
      date: '2012-12-12',
      close: 251.76,
    },
    {
      date: '2012-12-11',
      close: 250.69,
    },
    {
      date: '2012-12-10',
      close: 247.77,
    },
    {
      date: '2012-12-07',
      close: 253.27,
    },
    {
      date: '2012-12-06',
      close: 253.37,
    },
    {
      date: '2012-12-05',
      close: 253.96,
    },
    {
      date: '2012-12-04',
      close: 252.49,
    },
    {
      date: '2012-12-03',
      close: 250.33,
    },
    {
      date: '2012-11-30',
      close: 252.05,
    },
    {
      date: '2012-11-29',
      close: 251.27,
    },
    {
      date: '2012-11-28',
      close: 247.11,
    },
    {
      date: '2012-11-27',
      close: 243.4,
    },
    {
      date: '2012-11-26',
      close: 243.62,
    },
    {
      date: '2012-11-23',
      close: 239.88,
    },
    {
      date: '2012-11-21',
      close: 238.03,
    },
    {
      date: '2012-11-20',
      close: 233.78,
    },
    {
      date: '2012-11-19',
      close: 229.71,
    },
    {
      date: '2012-11-16',
      close: 225.23,
    },
    {
      date: '2012-11-15',
      close: 220.6,
    },
    {
      date: '2012-11-14',
      close: 222.95,
    },
    {
      date: '2012-11-13',
      close: 226.6,
    },
    {
      date: '2012-11-12',
      close: 226.47,
    },
    {
      date: '2012-11-09',
      close: 226.31,
    },
    {
      date: '2012-11-08',
      close: 227.35,
    },
    {
      date: '2012-11-07',
      close: 232.06,
    },
    {
      date: '2012-11-06',
      close: 237.56,
    },
    {
      date: '2012-11-05',
      close: 234.33,
    },
    {
      date: '2012-11-02',
      close: 232.42,
    },
    {
      date: '2012-11-01',
      close: 232.14,
    },
    {
      date: '2012-10-31',
      close: 232.89,
    },
    {
      date: '2012-10-26',
      close: 238.24,
    },
    {
      date: '2012-10-25',
      close: 222.92,
    },
    {
      date: '2012-10-24',
      close: 228.49,
    },
    {
      date: '2012-10-23',
      close: 234.31,
    },
    {
      date: '2012-10-22',
      close: 233.78,
    },
    {
      date: '2012-10-19',
      close: 240,
    },
    {
      date: '2012-10-18',
      close: 244.85,
    },
    {
      date: '2012-10-17',
      close: 247.49,
    },
    {
      date: '2012-10-16',
      close: 243.94,
    },
    {
      date: '2012-10-15',
      close: 244.18,
    },
    {
      date: '2012-10-12',
      close: 242.36,
    },
    {
      date: '2012-10-11',
      close: 244.22,
    },
    {
      date: '2012-10-10',
      close: 244.99,
    },
    {
      date: '2012-10-09',
      close: 250.96,
    },
    {
      date: '2012-10-08',
      close: 259.06,
    },
    {
      date: '2012-10-05',
      close: 258.51,
    },
    {
      date: '2012-10-04',
      close: 260.47,
    },
    {
      date: '2012-10-03',
      close: 255.92,
    },
    {
      date: '2012-10-02',
      close: 250.6,
    },
    {
      date: '2012-10-01',
      close: 252.01,
    },
    {
      date: '2012-09-28',
      close: 254.32,
    },
    {
      date: '2012-09-27',
      close: 256.59,
    },
    {
      date: '2012-09-26',
      close: 249.67,
    },
    {
      date: '2012-09-25',
      close: 252.46,
    },
    {
      date: '2012-09-24',
      close: 254.8,
    },
    {
      date: '2012-09-21',
      close: 257.47,
    },
    {
      date: '2012-09-20',
      close: 260.81,
    },
    {
      date: '2012-09-19',
      close: 261.68,
    },
    {
      date: '2012-09-18',
      close: 258.75,
    },
    {
      date: '2012-09-17',
      close: 258,
    },
    {
      date: '2012-09-14',
      close: 261.27,
    },
    {
      date: '2012-09-13',
      close: 260.24,
    },
    {
      date: '2012-09-12',
      close: 255.63,
    },
    {
      date: '2012-09-11',
      close: 255.67,
    },
    {
      date: '2012-09-10',
      close: 257.09,
    },
    {
      date: '2012-09-07',
      close: 259.14,
    },
    {
      date: '2012-09-06',
      close: 251.38,
    },
    {
      date: '2012-09-05',
      close: 246.22,
    },
    {
      date: '2012-09-04',
      close: 247.88,
    },
    {
      date: '2012-08-31',
      close: 248.27,
    },
    {
      date: '2012-08-30',
      close: 246.22,
    },
    {
      date: '2012-08-29',
      close: 247.12,
    },
    {
      date: '2012-08-28',
      close: 246.11,
    },
    {
      date: '2012-08-27',
      close: 243.92,
    },
    {
      date: '2012-08-24',
      close: 245.74,
    },
    {
      date: '2012-08-23',
      close: 241.2,
    },
    {
      date: '2012-08-22',
      close: 243.1,
    },
    {
      date: '2012-08-21',
      close: 239.45,
    },
    {
      date: '2012-08-20',
      close: 240.35,
    },
    {
      date: '2012-08-17',
      close: 241.17,
    },
    {
      date: '2012-08-16',
      close: 241.55,
    },
    {
      date: '2012-08-15',
      close: 237.42,
    },
    {
      date: '2012-08-14',
      close: 233.19,
    },
    {
      date: '2012-08-13',
      close: 232.44,
    },
    {
      date: '2012-08-10',
      close: 232.75,
    },
    {
      date: '2012-08-09',
      close: 234.06,
    },
    {
      date: '2012-08-08',
      close: 234.38,
    },
    {
      date: '2012-08-07',
      close: 236.56,
    },
    {
      date: '2012-08-06',
      close: 233.99,
    },
    {
      date: '2012-08-03',
      close: 234.97,
    },
    {
      date: '2012-08-02',
      close: 230.81,
    },
    {
      date: '2012-08-01',
      close: 232.09,
    },
    {
      date: '2012-07-31',
      close: 233.3,
    },
    {
      date: '2012-07-30',
      close: 236.09,
    },
    {
      date: '2012-07-27',
      close: 237.32,
    },
    {
      date: '2012-07-26',
      close: 220.01,
    },
    {
      date: '2012-07-25',
      close: 217.05,
    },
    {
      date: '2012-07-24',
      close: 223.04,
    },
    {
      date: '2012-07-23',
      close: 226.01,
    },
    {
      date: '2012-07-20',
      close: 228.29,
    },
    {
      date: '2012-07-19',
      close: 226.17,
    },
    {
      date: '2012-07-18',
      close: 217.47,
    },
    {
      date: '2012-07-17',
      close: 216.93,
    },
    {
      date: '2012-07-16',
      close: 216.01,
    },
    {
      date: '2012-07-13',
      close: 218.39,
    },
    {
      date: '2012-07-12',
      close: 215.36,
    },
    {
      date: '2012-07-11',
      close: 218.37,
    },
    {
      date: '2012-07-10',
      close: 219.5,
    },
    {
      date: '2012-07-09',
      close: 225.05,
    },
    {
      date: '2012-07-06',
      close: 225.05,
    },
    {
      date: '2012-07-05',
      close: 227.06,
    },
    {
      date: '2012-07-03',
      close: 229.53,
    },
    {
      date: '2012-07-02',
      close: 229.32,
    },
    {
      date: '2012-06-29',
      close: 228.35,
    },
    {
      date: '2012-06-28',
      close: 221.31,
    },
    {
      date: '2012-06-27',
      close: 225.62,
    },
    {
      date: '2012-06-26',
      close: 225.61,
    },
    {
      date: '2012-06-25',
      close: 220.07,
    },
    {
      date: '2012-06-22',
      close: 222.16,
    },
    {
      date: '2012-06-21',
      close: 220.57,
    },
    {
      date: '2012-06-20',
      close: 223.02,
    },
    {
      date: '2012-06-19',
      close: 224.03,
    },
    {
      date: '2012-06-18',
      close: 222.66,
    },
    {
      date: '2012-06-15',
      close: 218.35,
    },
    {
      date: '2012-06-14',
      close: 214.45,
    },
    {
      date: '2012-06-13',
      close: 214.73,
    },
    {
      date: '2012-06-12',
      close: 216.42,
    },
    {
      date: '2012-06-11',
      close: 216.5,
    },
    {
      date: '2012-06-08',
      close: 218.48,
    },
    {
      date: '2012-06-07',
      close: 218.8,
    },
    {
      date: '2012-06-06',
      close: 217.64,
    },
    {
      date: '2012-06-05',
      close: 213.21,
    },
    {
      date: '2012-06-04',
      close: 214.57,
    },
    {
      date: '2012-06-01',
      close: 208.22,
    },
    {
      date: '2012-05-31',
      close: 212.91,
    },
    {
      date: '2012-05-30',
      close: 209.23,
    },
    {
      date: '2012-05-29',
      close: 214.75,
    },
    {
      date: '2012-05-25',
      close: 212.89,
    },
    {
      date: '2012-05-24',
      close: 215.24,
    },
    {
      date: '2012-05-23',
      close: 217.28,
    },
    {
      date: '2012-05-22',
      close: 215.33,
    },
    {
      date: '2012-05-21',
      close: 218.11,
    },
    {
      date: '2012-05-18',
      close: 213.85,
    },
    {
      date: '2012-05-17',
      close: 218.36,
    },
    {
      date: '2012-05-16',
      close: 224.06,
    },
    {
      date: '2012-05-15',
      close: 224.39,
    },
    {
      date: '2012-05-14',
      close: 222.93,
    },
    {
      date: '2012-05-11',
      close: 227.68,
    },
    {
      date: '2012-05-10',
      close: 226.69,
    },
    {
      date: '2012-05-09',
      close: 222.98,
    },
    {
      date: '2012-05-08',
      close: 223.9,
    },
    {
      date: '2012-05-07',
      close: 225.16,
    },
    {
      date: '2012-05-04',
      close: 223.99,
    },
    {
      date: '2012-05-03',
      close: 229.45,
    },
    {
      date: '2012-05-02',
      close: 230.25,
    },
    {
      date: '2012-05-01',
      close: 230.04,
    },
    {
      date: '2012-04-30',
      close: 231.9,
    },
    {
      date: '2012-04-27',
      close: 226.85,
    },
    {
      date: '2012-04-26',
      close: 195.99,
    },
    {
      date: '2012-04-25',
      close: 194.42,
    },
    {
      date: '2012-04-24',
      close: 190.33,
    },
    {
      date: '2012-04-23',
      close: 188.24,
    },
    {
      date: '2012-04-20',
      close: 189.98,
    },
    {
      date: '2012-04-19',
      close: 191.1,
    },
    {
      date: '2012-04-18',
      close: 191.07,
    },
    {
      date: '2012-04-17',
      close: 188.39,
    },
    {
      date: '2012-04-16',
      close: 185.5,
    },
    {
      date: '2012-04-13',
      close: 188.46,
    },
    {
      date: '2012-04-12',
      close: 190.69,
    },
    {
      date: '2012-04-11',
      close: 187.97,
    },
    {
      date: '2012-04-10',
      close: 186.98,
    },
    {
      date: '2012-04-09',
      close: 191.87,
    },
    {
      date: '2012-04-05',
      close: 194.39,
    },
    {
      date: '2012-04-04',
      close: 193.99,
    },
    {
      date: '2012-04-03',
      close: 199.66,
    },
    {
      date: '2012-04-02',
      close: 198.05,
    },
    {
      date: '2012-03-30',
      close: 202.51,
    },
    {
      date: '2012-03-29',
      close: 204.61,
    },
    {
      date: '2012-03-28',
      close: 201.16,
    },
    {
      date: '2012-03-27',
      close: 205.44,
    },
    {
      date: '2012-03-26',
      close: 202.87,
    },
    {
      date: '2012-03-23',
      close: 195.04,
    },
    {
      date: '2012-03-22',
      close: 192.4,
    },
    {
      date: '2012-03-21',
      close: 191.73,
    },
    {
      date: '2012-03-20',
      close: 192.33,
    },
    {
      date: '2012-03-19',
      close: 185.52,
    },
    {
      date: '2012-03-16',
      close: 185.05,
    },
    {
      date: '2012-03-15',
      close: 184.43,
    },
    {
      date: '2012-03-14',
      close: 182.26,
    },
    {
      date: '2012-03-13',
      close: 184.59,
    },
    {
      date: '2012-03-12',
      close: 183.39,
    },
    {
      date: '2012-03-09',
      close: 184.32,
    },
    {
      date: '2012-03-08',
      close: 187.64,
    },
    {
      date: '2012-03-07',
      close: 183.77,
    },
    {
      date: '2012-03-06',
      close: 181.09,
    },
    {
      date: '2012-03-05',
      close: 180.26,
    },
    {
      date: '2012-03-02',
      close: 179.3,
    },
    {
      date: '2012-03-01',
      close: 180.04,
    },
    {
      date: '2012-02-29',
      close: 179.69,
    },
    {
      date: '2012-02-28',
      close: 183.8,
    },
    {
      date: '2012-02-27',
      close: 178.53,
    },
    {
      date: '2012-02-24',
      close: 179.13,
    },
    {
      date: '2012-02-23',
      close: 178.89,
    },
    {
      date: '2012-02-22',
      close: 180.58,
    },
    {
      date: '2012-02-21',
      close: 182.26,
    },
    {
      date: '2012-02-17',
      close: 182.5,
    },
    {
      date: '2012-02-16',
      close: 179.93,
    },
    {
      date: '2012-02-15',
      close: 184.47,
    },
    {
      date: '2012-02-14',
      close: 191.3,
    },
    {
      date: '2012-02-13',
      close: 191.59,
    },
    {
      date: '2012-02-10',
      close: 185.54,
    },
    {
      date: '2012-02-09',
      close: 184.98,
    },
    {
      date: '2012-02-08',
      close: 185.48,
    },
    {
      date: '2012-02-07',
      close: 184.19,
    },
    {
      date: '2012-02-06',
      close: 183.14,
    },
    {
      date: '2012-02-03',
      close: 187.68,
    },
    {
      date: '2012-02-02',
      close: 181.72,
    },
    {
      date: '2012-02-01',
      close: 179.46,
    },
    {
      date: '2012-01-31',
      close: 194.44,
    },
    {
      date: '2012-01-30',
      close: 192.15,
    },
    {
      date: '2012-01-27',
      close: 195.37,
    },
    {
      date: '2012-01-26',
      close: 193.32,
    },
    {
      date: '2012-01-25',
      close: 187.8,
    },
    {
      date: '2012-01-24',
      close: 187,
    },
    {
      date: '2012-01-23',
      close: 186.09,
    },
    {
      date: '2012-01-20',
      close: 190.93,
    },
    {
      date: '2012-01-19',
      close: 194.45,
    },
    {
      date: '2012-01-18',
      close: 189.44,
    },
    {
      date: '2012-01-17',
      close: 181.66,
    },
    {
      date: '2012-01-13',
      close: 178.42,
    },
    {
      date: '2012-01-12',
      close: 175.93,
    },
    {
      date: '2012-01-11',
      close: 178.9,
    },
    {
      date: '2012-01-10',
      close: 179.34,
    },
    {
      date: '2012-01-09',
      close: 178.56,
    },
    {
      date: '2012-01-06',
      close: 182.61,
    },
    {
      date: '2012-01-05',
      close: 177.61,
    },
    {
      date: '2012-01-04',
      close: 177.51,
    },
    {
      date: '2012-01-03',
      close: 179.03,
    },
    {
      date: '2011-12-30',
      close: 173.1,
    },
    {
      date: '2011-12-29',
      close: 173.86,
    },
    {
      date: '2011-12-28',
      close: 173.89,
    },
    {
      date: '2011-12-27',
      close: 176.27,
    },
    {
      date: '2011-12-23',
      close: 177.28,
    },
    {
      date: '2011-12-22',
      close: 179.03,
    },
    {
      date: '2011-12-21',
      close: 174.35,
    },
    {
      date: '2011-12-20',
      close: 182.52,
    },
    {
      date: '2011-12-19',
      close: 179.33,
    },
    {
      date: '2011-12-16',
      close: 181.26,
    },
    {
      date: '2011-12-15',
      close: 181.26,
    },
    {
      date: '2011-12-14',
      close: 180.21,
    },
    {
      date: '2011-12-13',
      close: 180.51,
    },
    {
      date: '2011-12-12',
      close: 189.52,
    },
    {
      date: '2011-12-09',
      close: 193.03,
    },
    {
      date: '2011-12-08',
      close: 190.48,
    },
    {
      date: '2011-12-07',
      close: 195.32,
    },
    {
      date: '2011-12-06',
      close: 191.99,
    },
    {
      date: '2011-12-05',
      close: 196.24,
    },
    {
      date: '2011-12-02',
      close: 196.03,
    },
    {
      date: '2011-12-01',
      close: 197.13,
    },
    {
      date: '2011-11-30',
      close: 192.29,
    },
    {
      date: '2011-11-29',
      close: 188.39,
    },
    {
      date: '2011-11-28',
      close: 194.15,
    },
    {
      date: '2011-11-25',
      close: 182.4,
    },
    {
      date: '2011-11-23',
      close: 188.99,
    },
    {
      date: '2011-11-22',
      close: 192.34,
    },
    {
      date: '2011-11-21',
      close: 189.25,
    },
    {
      date: '2011-11-18',
      close: 197.14,
    },
    {
      date: '2011-11-17',
      close: 204.52,
    },
    {
      date: '2011-11-16',
      close: 211.99,
    },
    {
      date: '2011-11-15',
      close: 217.83,
    },
    {
      date: '2011-11-14',
      close: 218.93,
    },
    {
      date: '2011-11-11',
      close: 217.39,
    },
    {
      date: '2011-11-10',
      close: 210.79,
    },
    {
      date: '2011-11-09',
      close: 211.22,
    },
    {
      date: '2011-11-08',
      close: 217.99,
    },
    {
      date: '2011-11-07',
      close: 217,
    },
    {
      date: '2011-11-04',
      close: 216.48,
    },
    {
      date: '2011-11-03',
      close: 218.29,
    },
    {
      date: '2011-11-02',
      close: 215.62,
    },
    {
      date: '2011-11-01',
      close: 212.1,
    },
    {
      date: '2011-10-31',
      close: 213.51,
    },
    {
      date: '2011-10-28',
      close: 217.32,
    },
    {
      date: '2011-10-27',
      close: 206.78,
    },
    {
      date: '2011-10-26',
      close: 198.4,
    },
    {
      date: '2011-10-25',
      close: 227.15,
    },
    {
      date: '2011-10-24',
      close: 237.61,
    },
    {
      date: '2011-10-21',
      close: 234.78,
    },
    {
      date: '2011-10-20',
      close: 233.61,
    },
    {
      date: '2011-10-19',
      close: 231.53,
    },
    {
      date: '2011-10-18',
      close: 243.88,
    },
    {
      date: '2011-10-17',
      close: 242.33,
    },
    {
      date: '2011-10-14',
      close: 246.71,
    },
    {
      date: '2011-10-13',
      close: 236.15,
    },
    {
      date: '2011-10-12',
      close: 236.81,
    },
    {
      date: '2011-10-11',
      close: 235.48,
    },
    {
      date: '2011-10-10',
      close: 231.32,
    },
    {
      date: '2011-10-07',
      close: 224.74,
    },
    {
      date: '2011-10-06',
      close: 221.51,
    },
    {
      date: '2011-10-05',
      close: 219.5,
    },
    {
      date: '2011-10-04',
      close: 212.5,
    },
    {
      date: '2011-10-03',
      close: 211.98,
    },
    {
      date: '2011-09-30',
      close: 216.23,
    },
    {
      date: '2011-09-29',
      close: 222.44,
    },
    {
      date: '2011-09-28',
      close: 229.71,
    },
    {
      date: '2011-09-27',
      close: 224.21,
    },
    {
      date: '2011-09-26',
      close: 229.85,
    },
    {
      date: '2011-09-23',
      close: 223.61,
    },
    {
      date: '2011-09-22',
      close: 223.23,
    },
    {
      date: '2011-09-21',
      close: 231.87,
    },
    {
      date: '2011-09-20',
      close: 233.25,
    },
    {
      date: '2011-09-19',
      close: 241.69,
    },
    {
      date: '2011-09-16',
      close: 239.3,
    },
    {
      date: '2011-09-15',
      close: 226.78,
    },
    {
      date: '2011-09-14',
      close: 222.57,
    },
    {
      date: '2011-09-13',
      close: 219.53,
    },
    {
      date: '2011-09-12',
      close: 216.56,
    },
    {
      date: '2011-09-09',
      close: 211.39,
    },
    {
      date: '2011-09-08',
      close: 217.26,
    },
    {
      date: '2011-09-07',
      close: 219.9,
    },
    {
      date: '2011-09-06',
      close: 216.18,
    },
    {
      date: '2011-09-02',
      close: 210,
    },
    {
      date: '2011-09-01',
      close: 212.54,
    },
    {
      date: '2011-08-31',
      close: 215.23,
    },
    {
      date: '2011-08-30',
      close: 210.92,
    },
    {
      date: '2011-08-29',
      close: 206.53,
    },
    {
      date: '2011-08-26',
      close: 199.27,
    },
    {
      date: '2011-08-25',
      close: 192.03,
    },
    {
      date: '2011-08-24',
      close: 193.73,
    },
    {
      date: '2011-08-23',
      close: 193.55,
    },
    {
      date: '2011-08-22',
      close: 177.54,
    },
    {
      date: '2011-08-19',
      close: 178.93,
    },
    {
      date: '2011-08-18',
      close: 182.52,
    },
    {
      date: '2011-08-17',
      close: 195.93,
    },
    {
      date: '2011-08-16',
      close: 197.68,
    },
    {
      date: '2011-08-15',
      close: 202.95,
    },
    {
      date: '2011-08-12',
      close: 202.3,
    },
    {
      date: '2011-08-11',
      close: 198.36,
    },
    {
      date: '2011-08-10',
      close: 194.13,
    },
    {
      date: '2011-08-09',
      close: 205.09,
    },
    {
      date: '2011-08-08',
      close: 193.7,
    },
    {
      date: '2011-08-05',
      close: 202.7,
    },
    {
      date: '2011-08-04',
      close: 201.48,
    },
    {
      date: '2011-08-03',
      close: 209.96,
    },
    {
      date: '2011-08-02',
      close: 211.7,
    },
    {
      date: '2011-08-01',
      close: 221.32,
    },
    {
      date: '2011-07-29',
      close: 222.52,
    },
    {
      date: '2011-07-28',
      close: 223.9,
    },
    {
      date: '2011-07-27',
      close: 222.52,
    },
    {
      date: '2011-07-26',
      close: 214.18,
    },
    {
      date: '2011-07-25',
      close: 213.49,
    },
    {
      date: '2011-07-22',
      close: 216.52,
    },
    {
      date: '2011-07-21',
      close: 213.21,
    },
    {
      date: '2011-07-20',
      close: 215.55,
    },
    {
      date: '2011-07-19',
      close: 218.06,
    },
    {
      date: '2011-07-18',
      close: 211.53,
    },
    {
      date: '2011-07-15',
      close: 212.87,
    },
    {
      date: '2011-07-14',
      close: 210.38,
    },
    {
      date: '2011-07-13',
      close: 213.5,
    },
    {
      date: '2011-07-12',
      close: 211.23,
    },
    {
      date: '2011-07-11',
      close: 212.55,
    },
    {
      date: '2011-07-08',
      close: 218.28,
    },
    {
      date: '2011-07-07',
      close: 216.74,
    },
    {
      date: '2011-07-06',
      close: 214.19,
    },
    {
      date: '2011-07-05',
      close: 213.19,
    },
    {
      date: '2011-07-01',
      close: 209.49,
    },
    {
      date: '2011-06-30',
      close: 204.49,
    },
    {
      date: '2011-06-29',
      close: 204.18,
    },
    {
      date: '2011-06-28',
      close: 202.35,
    },
    {
      date: '2011-06-27',
      close: 201.25,
    },
    {
      date: '2011-06-24',
      close: 192.55,
    },
    {
      date: '2011-06-23',
      close: 194.16,
    },
    {
      date: '2011-06-22',
      close: 191.63,
    },
    {
      date: '2011-06-21',
      close: 194.23,
    },
    {
      date: '2011-06-20',
      close: 187.72,
    },
    {
      date: '2011-06-17',
      close: 186.37,
    },
    {
      date: '2011-06-16',
      close: 183.65,
    },
    {
      date: '2011-06-15',
      close: 185.98,
    },
    {
      date: '2011-06-14',
      close: 189.96,
    },
    {
      date: '2011-06-13',
      close: 186.29,
    },
    {
      date: '2011-06-10',
      close: 186.53,
    },
    {
      date: '2011-06-09',
      close: 189.68,
    },
    {
      date: '2011-06-08',
      close: 188.05,
    },
    {
      date: '2011-06-07',
      close: 187.55,
    },
    {
      date: '2011-06-06',
      close: 185.69,
    },
    {
      date: '2011-06-03',
      close: 188.32,
    },
    {
      date: '2011-06-02',
      close: 193.65,
    },
    {
      date: '2011-06-01',
      close: 192.4,
    },
    {
      date: '2011-05-31',
      close: 196.69,
    },
    {
      date: '2011-05-27',
      close: 194.13,
    },
    {
      date: '2011-05-26',
      close: 195,
    },
    {
      date: '2011-05-25',
      close: 192.26,
    },
    {
      date: '2011-05-24',
      close: 193.27,
    },
    {
      date: '2011-05-23',
      close: 196.22,
    },
    {
      date: '2011-05-20',
      close: 198.65,
    },
    {
      date: '2011-05-19',
      close: 198.8,
    },
    {
      date: '2011-05-18',
      close: 197.09,
    },
    {
      date: '2011-05-17',
      close: 194.81,
    },
    {
      date: '2011-05-16',
      close: 192.51,
    },
    {
      date: '2011-05-13',
      close: 202.56,
    },
    {
      date: '2011-05-12',
      close: 206.07,
    },
    {
      date: '2011-05-11',
      close: 204.38,
    },
    {
      date: '2011-05-10',
      close: 203.94,
    },
    {
      date: '2011-05-09',
      close: 200.8,
    },
    {
      date: '2011-05-06',
      close: 197.6,
    },
    {
      date: '2011-05-05',
      close: 197.11,
    },
    {
      date: '2011-05-04',
      close: 199.97,
    },
    {
      date: '2011-05-03',
      close: 198.45,
    },
    {
      date: '2011-05-02',
      close: 201.19,
    },
    {
      date: '2011-04-29',
      close: 195.81,
    },
    {
      date: '2011-04-28',
      close: 195.07,
    },
    {
      date: '2011-04-27',
      close: 196.63,
    },
    {
      date: '2011-04-26',
      close: 182.3,
    },
    {
      date: '2011-04-25',
      close: 185.42,
    },
    {
      date: '2011-04-21',
      close: 185.89,
    },
    {
      date: '2011-04-20',
      close: 183.87,
    },
    {
      date: '2011-04-19',
      close: 178.82,
    },
    {
      date: '2011-04-18',
      close: 178.34,
    },
    {
      date: '2011-04-15',
      close: 180.01,
    },
    {
      date: '2011-04-14',
      close: 181.82,
    },
    {
      date: '2011-04-13',
      close: 182.29,
    },
    {
      date: '2011-04-12',
      close: 180.48,
    },
    {
      date: '2011-04-11',
      close: 184.04,
    },
    {
      date: '2011-04-08',
      close: 184.71,
    },
    {
      date: '2011-04-07',
      close: 184.91,
    },
    {
      date: '2011-04-06',
      close: 182.76,
    },
    {
      date: '2011-04-05',
      close: 185.29,
    },
    {
      date: '2011-04-04',
      close: 182.94,
    },
    {
      date: '2011-04-01',
      close: 180.13,
    },
    {
      date: '2011-03-31',
      close: 180.13,
    },
    {
      date: '2011-03-30',
      close: 179.42,
    },
    {
      date: '2011-03-29',
      close: 174.62,
    },
    {
      date: '2011-03-28',
      close: 169.35,
    },
    {
      date: '2011-03-25',
      close: 170.98,
    },
    {
      date: '2011-03-24',
      close: 171.1,
    },
    {
      date: '2011-03-23',
      close: 165.32,
    },
    {
      date: '2011-03-22',
      close: 162.6,
    },
    {
      date: '2011-03-21',
      close: 164.52,
    },
    {
      date: '2011-03-18',
      close: 161.82,
    },
    {
      date: '2011-03-17',
      close: 160.97,
    },
    {
      date: '2011-03-16',
      close: 164.7,
    },
    {
      date: '2011-03-15',
      close: 165.08,
    },
    {
      date: '2011-03-14',
      close: 166.73,
    },
    {
      date: '2011-03-11',
      close: 168.07,
    },
    {
      date: '2011-03-10',
      close: 166.14,
    },
    {
      date: '2011-03-09',
      close: 169.05,
    },
    {
      date: '2011-03-08',
      close: 166.89,
    },
    {
      date: '2011-03-07',
      close: 169.08,
    },
    {
      date: '2011-03-04',
      close: 171.67,
    },
    {
      date: '2011-03-03',
      close: 172.79,
    },
    {
      date: '2011-03-02',
      close: 172.02,
    },
    {
      date: '2011-03-01',
      close: 169.44,
    },
    {
      date: '2011-02-28',
      close: 173.29,
    },
    {
      date: '2011-02-25',
      close: 177.24,
    },
    {
      date: '2011-02-24',
      close: 177.75,
    },
    {
      date: '2011-02-23',
      close: 176.68,
    },
    {
      date: '2011-02-22',
      close: 180.42,
    },
    {
      date: '2011-02-18',
      close: 186.5,
    },
    {
      date: '2011-02-17',
      close: 187.76,
    },
    {
      date: '2011-02-16',
      close: 186.62,
    },
    {
      date: '2011-02-15',
      close: 189.03,
    },
    {
      date: '2011-02-14',
      close: 190.42,
    },
    {
      date: '2011-02-11',
      close: 189.25,
    },
    {
      date: '2011-02-10',
      close: 186.21,
    },
    {
      date: '2011-02-09',
      close: 185.3,
    },
    {
      date: '2011-02-08',
      close: 183.06,
    },
    {
      date: '2011-02-07',
      close: 176.43,
    },
    {
      date: '2011-02-04',
      close: 175.93,
    },
    {
      date: '2011-02-03',
      close: 173.71,
    },
    {
      date: '2011-02-02',
      close: 173.53,
    },
    {
      date: '2011-02-01',
      close: 172.11,
    },
    {
      date: '2011-01-31',
      close: 169.64,
    },
    {
      date: '2011-01-28',
      close: 171.14,
    },
    {
      date: '2011-01-27',
      close: 184.45,
    },
    {
      date: '2011-01-26',
      close: 175.39,
    },
    {
      date: '2011-01-25',
      close: 176.7,
    },
    {
      date: '2011-01-24',
      close: 176.85,
    },
    {
      date: '2011-01-21',
      close: 177.42,
    },
    {
      date: '2011-01-20',
      close: 181.96,
    },
    {
      date: '2011-01-19',
      close: 186.87,
    },
    {
      date: '2011-01-18',
      close: 191.25,
    },
    {
      date: '2011-01-14',
      close: 188.75,
    },
    {
      date: '2011-01-13',
      close: 185.53,
    },
    {
      date: '2011-01-12',
      close: 184.08,
    },
    {
      date: '2011-01-11',
      close: 184.34,
    },
    {
      date: '2011-01-10',
      close: 184.68,
    },
    {
      date: '2011-01-07',
      close: 185.49,
    },
    {
      date: '2011-01-06',
      close: 185.86,
    },
    {
      date: '2011-01-05',
      close: 187.42,
    },
    {
      date: '2011-01-04',
      close: 185.01,
    },
    {
      date: '2011-01-03',
      close: 184.22,
    },
    {
      date: '2010-12-31',
      close: 180,
    },
    {
      date: '2010-12-30',
      close: 182.75,
    },
    {
      date: '2010-12-29',
      close: 183.37,
    },
    {
      date: '2010-12-28',
      close: 181.09,
    },
    {
      date: '2010-12-27',
      close: 182.14,
    },
    {
      date: '2010-12-23',
      close: 182.59,
    },
    {
      date: '2010-12-22',
      close: 184.76,
    },
    {
      date: '2010-12-21',
      close: 184.75,
    },
    {
      date: '2010-12-20',
      close: 183.29,
    },
    {
      date: '2010-12-17',
      close: 177.58,
    },
    {
      date: '2010-12-16',
      close: 178.04,
    },
    {
      date: '2010-12-15',
      close: 175.57,
    },
    {
      date: '2010-12-14',
      close: 173.94,
    },
    {
      date: '2010-12-13',
      close: 174.25,
    },
    {
      date: '2010-12-10',
      close: 175.62,
    },
    {
      date: '2010-12-09',
      close: 174.85,
    },
    {
      date: '2010-12-08',
      close: 176.29,
    },
    {
      date: '2010-12-07',
      close: 176.77,
    },
    {
      date: '2010-12-06',
      close: 178.05,
    },
    {
      date: '2010-12-03',
      close: 175.68,
    },
    {
      date: '2010-12-02',
      close: 176.53,
    },
    {
      date: '2010-12-01',
      close: 176.55,
    },
    {
      date: '2010-11-30',
      close: 175.4,
    },
    {
      date: '2010-11-29',
      close: 179.49,
    },
    {
      date: '2010-11-26',
      close: 177.2,
    },
    {
      date: '2010-11-24',
      close: 177.25,
    },
    {
      date: '2010-11-23',
      close: 168.2,
    },
    {
      date: '2010-11-22',
      close: 170.39,
    },
    {
      date: '2010-11-19',
      close: 164.82,
    },
    {
      date: '2010-11-18',
      close: 164.17,
    },
    {
      date: '2010-11-17',
      close: 158.35,
    },
    {
      date: '2010-11-16',
      close: 157.78,
    },
    {
      date: '2010-11-15',
      close: 158.9,
    },
    {
      date: '2010-11-12',
      close: 165.68,
    },
    {
      date: '2010-11-11',
      close: 170.37,
    },
    {
      date: '2010-11-10',
      close: 173.33,
    },
    {
      date: '2010-11-09',
      close: 170.27,
    },
    {
      date: '2010-11-08',
      close: 171.99,
    },
    {
      date: '2010-11-05',
      close: 170.77,
    },
    {
      date: '2010-11-04',
      close: 168.93,
    },
    {
      date: '2010-11-03',
      close: 168.47,
    },
    {
      date: '2010-11-02',
      close: 164.61,
    },
    {
      date: '2010-11-01',
      close: 162.58,
    },
    {
      date: '2010-10-29',
      close: 165.23,
    },
    {
      date: '2010-10-28',
      close: 166.84,
    },
    {
      date: '2010-10-27',
      close: 167.51,
    },
    {
      date: '2010-10-26',
      close: 169.95,
    },
    {
      date: '2010-10-25',
      close: 169,
    },
    {
      date: '2010-10-22',
      close: 169.13,
    },
    {
      date: '2010-10-21',
      close: 164.97,
    },
    {
      date: '2010-10-20',
      close: 158.67,
    },
    {
      date: '2010-10-19',
      close: 158.67,
    },
    {
      date: '2010-10-18',
      close: 163.56,
    },
    {
      date: '2010-10-15',
      close: 164.64,
    },
    {
      date: '2010-10-14',
      close: 155.53,
    },
    {
      date: '2010-10-13',
      close: 155.17,
    },
    {
      date: '2010-10-12',
      close: 156.48,
    },
    {
      date: '2010-10-11',
      close: 153.03,
    },
    {
      date: '2010-10-08',
      close: 155.55,
    },
    {
      date: '2010-10-07',
      close: 156.27,
    },
    {
      date: '2010-10-06',
      close: 155.4,
    },
    {
      date: '2010-10-05',
      close: 160.87,
    },
    {
      date: '2010-10-04',
      close: 155.39,
    },
    {
      date: '2010-10-01',
      close: 153.71,
    },
    {
      date: '2010-09-30',
      close: 157.06,
    },
    {
      date: '2010-09-29',
      close: 158.99,
    },
    {
      date: '2010-09-28',
      close: 159.7,
    },
    {
      date: '2010-09-27',
      close: 159.37,
    },
    {
      date: '2010-09-24',
      close: 160.73,
    },
    {
      date: '2010-09-23',
      close: 152.85,
    },
    {
      date: '2010-09-22',
      close: 151.83,
    },
    {
      date: '2010-09-21',
      close: 150.73,
    },
    {
      date: '2010-09-20',
      close: 151.3,
    },
    {
      date: '2010-09-17',
      close: 148.32,
    },
    {
      date: '2010-09-16',
      close: 148.13,
    },
    {
      date: '2010-09-15',
      close: 145.45,
    },
    {
      date: '2010-09-14',
      close: 145.75,
    },
    {
      date: '2010-09-13',
      close: 145.07,
    },
    {
      date: '2010-09-10',
      close: 142.44,
    },
    {
      date: '2010-09-09',
      close: 140.38,
    },
    {
      date: '2010-09-08',
      close: 139.14,
    },
    {
      date: '2010-09-07',
      close: 137.22,
    },
    {
      date: '2010-09-03',
      close: 138.79,
    },
    {
      date: '2010-09-02',
      close: 135.21,
    },
    {
      date: '2010-09-01',
      close: 132.49,
    },
    {
      date: '2010-08-31',
      close: 124.83,
    },
    {
      date: '2010-08-30',
      close: 123.79,
    },
    {
      date: '2010-08-27',
      close: 126.64,
    },
    {
      date: '2010-08-26',
      close: 124.86,
    },
    {
      date: '2010-08-25',
      close: 126.85,
    },
    {
      date: '2010-08-24',
      close: 124.53,
    },
    {
      date: '2010-08-23',
      close: 126.6,
    },
    {
      date: '2010-08-20',
      close: 127.76,
    },
    {
      date: '2010-08-19',
      close: 127.57,
    },
    {
      date: '2010-08-18',
      close: 129.65,
    },
    {
      date: '2010-08-17',
      close: 128.86,
    },
    {
      date: '2010-08-16',
      close: 126.07,
    },
    {
      date: '2010-08-13',
      close: 124.69,
    },
    {
      date: '2010-08-12',
      close: 126.56,
    },
    {
      date: '2010-08-11',
      close: 125.89,
    },
    {
      date: '2010-08-10',
      close: 130,
    },
    {
      date: '2010-08-09',
      close: 128.83,
    },
    {
      date: '2010-08-06',
      close: 128.32,
    },
    {
      date: '2010-08-05',
      close: 127.83,
    },
    {
      date: '2010-08-04',
      close: 127.58,
    },
    {
      date: '2010-08-03',
      close: 122.42,
    },
    {
      date: '2010-08-02',
      close: 120.07,
    },
    {
      date: '2010-07-30',
      close: 117.89,
    },
    {
      date: '2010-07-29',
      close: 116.86,
    },
    {
      date: '2010-07-28',
      close: 117.13,
    },
    {
      date: '2010-07-27',
      close: 117.13,
    },
    {
      date: '2010-07-26',
      close: 118.4,
    },
    {
      date: '2010-07-23',
      close: 118.87,
    },
    {
      date: '2010-07-22',
      close: 120.07,
    },
    {
      date: '2010-07-21',
      close: 117.43,
    },
    {
      date: '2010-07-20',
      close: 120.1,
    },
    {
      date: '2010-07-19',
      close: 119.94,
    },
    {
      date: '2010-07-16',
      close: 118.49,
    },
    {
      date: '2010-07-15',
      close: 122.06,
    },
    {
      date: '2010-07-14',
      close: 123.3,
    },
    {
      date: '2010-07-13',
      close: 123.65,
    },
    {
      date: '2010-07-12',
      close: 119.51,
    },
    {
      date: '2010-07-09',
      close: 117.26,
    },
    {
      date: '2010-07-08',
      close: 116.22,
    },
    {
      date: '2010-07-07',
      close: 113.43,
    },
    {
      date: '2010-07-06',
      close: 110.06,
    },
    {
      date: '2010-07-02',
      close: 109.14,
    },
    {
      date: '2010-07-01',
      close: 110.96,
    },
    {
      date: '2010-06-30',
      close: 109.26,
    },
    {
      date: '2010-06-29',
      close: 108.61,
    },
    {
      date: '2010-06-28',
      close: 117.8,
    },
    {
      date: '2010-06-25',
      close: 121,
    },
    {
      date: '2010-06-24',
      close: 118.33,
    },
    {
      date: '2010-06-23',
      close: 121.45,
    },
    {
      date: '2010-06-22',
      close: 122.31,
    },
    {
      date: '2010-06-21',
      close: 122.55,
    },
    {
      date: '2010-06-18',
      close: 125.83,
    },
    {
      date: '2010-06-17',
      close: 125.89,
    },
    {
      date: '2010-06-16',
      close: 126.9,
    },
    {
      date: '2010-06-15',
      close: 126.84,
    },
    {
      date: '2010-06-14',
      close: 123.83,
    },
    {
      date: '2010-06-11',
      close: 123.03,
    },
    {
      date: '2010-06-10',
      close: 123.21,
    },
    {
      date: '2010-06-09',
      close: 117.91,
    },
    {
      date: '2010-06-08',
      close: 118.84,
    },
    {
      date: '2010-06-07',
      close: 122.01,
    },
    {
      date: '2010-06-04',
      close: 122.77,
    },
    {
      date: '2010-06-03',
      close: 128.76,
    },
    {
      date: '2010-06-02',
      close: 126.31,
    },
    {
      date: '2010-06-01',
      close: 123.24,
    },
    {
      date: '2010-05-28',
      close: 125.46,
    },
    {
      date: '2010-05-27',
      close: 126.7,
    },
    {
      date: '2010-05-26',
      close: 123.21,
    },
    {
      date: '2010-05-25',
      close: 124.86,
    },
    {
      date: '2010-05-24',
      close: 122.12,
    },
    {
      date: '2010-05-21',
      close: 122.72,
    },
    {
      date: '2010-05-20',
      close: 119.71,
    },
    {
      date: '2010-05-19',
      close: 124.59,
    },
    {
      date: '2010-05-18',
      close: 126.28,
    },
    {
      date: '2010-05-17',
      close: 128.91,
    },
    {
      date: '2010-05-14',
      close: 128.53,
    },
    {
      date: '2010-05-13',
      close: 131.47,
    },
    {
      date: '2010-05-12',
      close: 133.87,
    },
    {
      date: '2010-05-11',
      close: 130.46,
    },
    {
      date: '2010-05-10',
      close: 131.29,
    },
    {
      date: '2010-05-07',
      close: 124.98,
    },
    {
      date: '2010-05-06',
      close: 128.71,
    },
    {
      date: '2010-05-05',
      close: 130.93,
    },
    {
      date: '2010-05-04',
      close: 129.83,
    },
    {
      date: '2010-05-03',
      close: 137.49,
    },
    {
      date: '2010-04-30',
      close: 137.1,
    },
    {
      date: '2010-04-29',
      close: 141.73,
    },
    {
      date: '2010-04-28',
      close: 139.35,
    },
    {
      date: '2010-04-27',
      close: 142.02,
    },
    {
      date: '2010-04-26',
      close: 147.11,
    },
    {
      date: '2010-04-23',
      close: 143.63,
    },
    {
      date: '2010-04-22',
      close: 150.09,
    },
    {
      date: '2010-04-21',
      close: 146.43,
    },
    {
      date: '2010-04-20',
      close: 144.2,
    },
    {
      date: '2010-04-19',
      close: 142.43,
    },
    {
      date: '2010-04-16',
      close: 142.17,
    },
    {
      date: '2010-04-15',
      close: 145.82,
    },
    {
      date: '2010-04-14',
      close: 144.28,
    },
    {
      date: '2010-04-13',
      close: 140.16,
    },
    {
      date: '2010-04-12',
      close: 141.2,
    },
    {
      date: '2010-04-09',
      close: 140.06,
    },
    {
      date: '2010-04-08',
      close: 140.96,
    },
    {
      date: '2010-04-07',
      close: 134.87,
    },
    {
      date: '2010-04-06',
      close: 135.56,
    },
    {
      date: '2010-04-05',
      close: 131.49,
    },
    {
      date: '2010-04-01',
      close: 131.81,
    },
    {
      date: '2010-03-31',
      close: 135.77,
    },
    {
      date: '2010-03-30',
      close: 136.58,
    },
    {
      date: '2010-03-29',
      close: 135.12,
    },
    {
      date: '2010-03-26',
      close: 135.06,
    },
    {
      date: '2010-03-25',
      close: 134.73,
    },
    {
      date: '2010-03-24',
      close: 128.04,
    },
    {
      date: '2010-03-23',
      close: 129.26,
    },
    {
      date: '2010-03-22',
      close: 130.47,
    },
    {
      date: '2010-03-19',
      close: 130.35,
    },
    {
      date: '2010-03-18',
      close: 132.76,
    },
    {
      date: '2010-03-17',
      close: 131.34,
    },
    {
      date: '2010-03-16',
      close: 131.79,
    },
    {
      date: '2010-03-15',
      close: 131.13,
    },
    {
      date: '2010-03-12',
      close: 131.82,
    },
    {
      date: '2010-03-11',
      close: 133.58,
    },
    {
      date: '2010-03-10',
      close: 130.51,
    },
    {
      date: '2010-03-09',
      close: 128.82,
    },
    {
      date: '2010-03-08',
      close: 130.11,
    },
    {
      date: '2010-03-05',
      close: 128.91,
    },
    {
      date: '2010-03-04',
      close: 128.53,
    },
    {
      date: '2010-03-03',
      close: 125.89,
    },
    {
      date: '2010-03-02',
      close: 125.53,
    },
    {
      date: '2010-03-01',
      close: 124.54,
    },
    {
      date: '2010-02-26',
      close: 118.4,
    },
    {
      date: '2010-02-25',
      close: 118.2,
    },
    {
      date: '2010-02-24',
      close: 119.72,
    },
    {
      date: '2010-02-23',
      close: 117.24,
    },
    {
      date: '2010-02-22',
      close: 118.01,
    },
    {
      date: '2010-02-19',
      close: 117.52,
    },
    {
      date: '2010-02-18',
      close: 118.08,
    },
    {
      date: '2010-02-17',
      close: 116.31,
    },
    {
      date: '2010-02-16',
      close: 117.53,
    },
    {
      date: '2010-02-12',
      close: 119.66,
    },
    {
      date: '2010-02-11',
      close: 120.09,
    },
    {
      date: '2010-02-10',
      close: 117.36,
    },
    {
      date: '2010-02-09',
      close: 118.03,
    },
    {
      date: '2010-02-08',
      close: 116.83,
    },
    {
      date: '2010-02-05',
      close: 117.39,
    },
    {
      date: '2010-02-04',
      close: 115.94,
    },
    {
      date: '2010-02-03',
      close: 119.1,
    },
    {
      date: '2010-02-02',
      close: 118.12,
    },
    {
      date: '2010-02-01',
      close: 118.87,
    },
    {
      date: '2010-01-29',
      close: 125.41,
    },
    {
      date: '2010-01-28',
      close: 126.03,
    },
    {
      date: '2010-01-27',
      close: 122.75,
    },
    {
      date: '2010-01-26',
      close: 119.48,
    },
    {
      date: '2010-01-25',
      close: 120.31,
    },
    {
      date: '2010-01-22',
      close: 121.43,
    },
    {
      date: '2010-01-21',
      close: 126.62,
    },
    {
      date: '2010-01-20',
      close: 125.78,
    },
    {
      date: '2010-01-19',
      close: 127.61,
    },
    {
      date: '2010-01-15',
      close: 127.14,
    },
    {
      date: '2010-01-14',
      close: 127.35,
    },
    {
      date: '2010-01-13',
      close: 129.11,
    },
    {
      date: '2010-01-12',
      close: 127.35,
    },
    {
      date: '2010-01-11',
      close: 130.31,
    },
    {
      date: '2010-01-08',
      close: 133.52,
    },
    {
      date: '2010-01-07',
      close: 130,
    },
    {
      date: '2010-01-06',
      close: 132.25,
    },
    {
      date: '2010-01-05',
      close: 134.69,
    },
    {
      date: '2010-01-04',
      close: 133.9,
    },
    {
      date: '2009-12-31',
      close: 134.52,
    },
    {
      date: '2009-12-30',
      close: 136.49,
    },
    {
      date: '2009-12-29',
      close: 139.41,
    },
    {
      date: '2009-12-28',
      close: 139.31,
    },
    {
      date: '2009-12-24',
      close: 138.47,
    },
    {
      date: '2009-12-23',
      close: 138.94,
    },
    {
      date: '2009-12-22',
      close: 133.75,
    },
    {
      date: '2009-12-21',
      close: 132.79,
    },
    {
      date: '2009-12-18',
      close: 128.48,
    },
    {
      date: '2009-12-17',
      close: 126.91,
    },
    {
      date: '2009-12-16',
      close: 128.36,
    },
    {
      date: '2009-12-15',
      close: 130.23,
    },
    {
      date: '2009-12-14',
      close: 131.38,
    },
    {
      date: '2009-12-11',
      close: 134.15,
    },
    {
      date: '2009-12-10',
      close: 135.38,
    },
    {
      date: '2009-12-09',
      close: 131.31,
    },
    {
      date: '2009-12-08',
      close: 134.11,
    },
    {
      date: '2009-12-07',
      close: 134.21,
    },
    {
      date: '2009-12-04',
      close: 137.58,
    },
    {
      date: '2009-12-03',
      close: 141.17,
    },
    {
      date: '2009-12-02',
      close: 142.25,
    },
    {
      date: '2009-12-01',
      close: 138.5,
    },
    {
      date: '2009-11-30',
      close: 135.91,
    },
    {
      date: '2009-11-27',
      close: 131.74,
    },
    {
      date: '2009-11-25',
      close: 134.03,
    },
    {
      date: '2009-11-24',
      close: 132.94,
    },
    {
      date: '2009-11-23',
      close: 133,
    },
    {
      date: '2009-11-20',
      close: 129.66,
    },
    {
      date: '2009-11-19',
      close: 128.99,
    },
    {
      date: '2009-11-18',
      close: 131.29,
    },
    {
      date: '2009-11-17',
      close: 131.25,
    },
    {
      date: '2009-11-16',
      close: 131.59,
    },
    {
      date: '2009-11-13',
      close: 132.97,
    },
    {
      date: '2009-11-12',
      close: 130.53,
    },
    {
      date: '2009-11-11',
      close: 129.91,
    },
    {
      date: '2009-11-10',
      close: 130.15,
    },
    {
      date: '2009-11-09',
      close: 126.67,
    },
    {
      date: '2009-11-06',
      close: 126.2,
    },
    {
      date: '2009-11-05',
      close: 120.61,
    },
    {
      date: '2009-11-04',
      close: 117.1,
    },
    {
      date: '2009-11-03',
      close: 118.37,
    },
    {
      date: '2009-11-02',
      close: 118.84,
    },
    {
      date: '2009-10-30',
      close: 118.81,
    },
    {
      date: '2009-10-29',
      close: 122.58,
    },
    {
      date: '2009-10-28',
      close: 121.64,
    },
    {
      date: '2009-10-27',
      close: 122.07,
    },
    {
      date: '2009-10-26',
      close: 124.64,
    },
    {
      date: '2009-10-23',
      close: 118.49,
    },
    {
      date: '2009-10-22',
      close: 93.45,
    },
    {
      date: '2009-10-21',
      close: 93.42,
    },
    {
      date: '2009-10-20',
      close: 94.98,
    },
    {
      date: '2009-10-19',
      close: 94.68,
    },
    {
      date: '2009-10-16',
      close: 95.32,
    },
    {
      date: '2009-10-15',
      close: 96.01,
    },
    {
      date: '2009-10-14',
      close: 97.46,
    },
    {
      date: '2009-10-13',
      close: 94.83,
    },
    {
      date: '2009-10-12',
      close: 93.6,
    },
    {
      date: '2009-10-09',
      close: 95.71,
    },
    {
      date: '2009-10-08',
      close: 95.22,
    },
    {
      date: '2009-10-07',
      close: 93.97,
    },
    {
      date: '2009-10-06',
      close: 90.91,
    },
    {
      date: '2009-10-05',
      close: 88.67,
    },
    {
      date: '2009-10-02',
      close: 89.85,
    },
    {
      date: '2009-10-01',
      close: 91.04,
    },
    {
      date: '2009-09-30',
      close: 93.36,
    },
    {
      date: '2009-09-29',
      close: 91.72,
    },
    {
      date: '2009-09-28',
      close: 92.21,
    },
    {
      date: '2009-09-25',
      close: 90.52,
    },
    {
      date: '2009-09-24',
      close: 92.11,
    },
    {
      date: '2009-09-23',
      close: 92.38,
    },
    {
      date: '2009-09-22',
      close: 93.75,
    },
    {
      date: '2009-09-21',
      close: 90.56,
    },
    {
      date: '2009-09-18',
      close: 90.28,
    },
    {
      date: '2009-09-17',
      close: 90.44,
    },
    {
      date: '2009-09-16',
      close: 90.7,
    },
    {
      date: '2009-09-15',
      close: 83.55,
    },
    {
      date: '2009-09-14',
      close: 83.86,
    },
    {
      date: '2009-09-11',
      close: 84.54,
    },
    {
      date: '2009-09-10',
      close: 83.85,
    },
    {
      date: '2009-09-09',
      close: 82.24,
    },
    {
      date: '2009-09-08',
      close: 80.9,
    },
    {
      date: '2009-09-04',
      close: 78.87,
    },
    {
      date: '2009-09-03',
      close: 78.46,
    },
    {
      date: '2009-09-02',
      close: 78.14,
    },
    {
      date: '2009-09-01',
      close: 79.16,
    },
    {
      date: '2009-08-31',
      close: 81.19,
    },
    {
      date: '2009-08-28',
      close: 82.76,
    },
    {
      date: '2009-08-27',
      close: 84.31,
    },
    {
      date: '2009-08-26',
      close: 84,
    },
    {
      date: '2009-08-25',
      close: 84.19,
    },
    {
      date: '2009-08-24',
      close: 84.5,
    },
    {
      date: '2009-08-21',
      close: 85,
    },
    {
      date: '2009-08-20',
      close: 84.09,
    },
    {
      date: '2009-08-19',
      close: 83,
    },
    {
      date: '2009-08-18',
      close: 82.12,
    },
    {
      date: '2009-08-17',
      close: 81.06,
    },
    {
      date: '2009-08-14',
      close: 83.58,
    },
    {
      date: '2009-08-13',
      close: 84.6,
    },
    {
      date: '2009-08-12',
      close: 85.96,
    },
    {
      date: '2009-08-11',
      close: 83.56,
    },
    {
      date: '2009-08-10',
      close: 84.44,
    },
    {
      date: '2009-08-07',
      close: 85.32,
    },
    {
      date: '2009-08-06',
      close: 84.47,
    },
    {
      date: '2009-08-05',
      close: 84.29,
    },
    {
      date: '2009-08-04',
      close: 85.8,
    },
    {
      date: '2009-08-03',
      close: 87.44,
    },
    {
      date: '2009-07-31',
      close: 85.76,
    },
    {
      date: '2009-07-30',
      close: 86.09,
    },
    {
      date: '2009-07-29',
      close: 84.34,
    },
    {
      date: '2009-07-28',
      close: 84.98,
    },
    {
      date: '2009-07-27',
      close: 84.24,
    },
    {
      date: '2009-07-24',
      close: 86.49,
    },
    {
      date: '2009-07-23',
      close: 93.87,
    },
    {
      date: '2009-07-22',
      close: 88.79,
    },
    {
      date: '2009-07-21',
      close: 89.01,
    },
    {
      date: '2009-07-20',
      close: 88.23,
    },
    {
      date: '2009-07-17',
      close: 85.85,
    },
    {
      date: '2009-07-16',
      close: 86.11,
    },
    {
      date: '2009-07-15',
      close: 84.55,
    },
    {
      date: '2009-07-14',
      close: 81.95,
    },
    {
      date: '2009-07-13',
      close: 81.47,
    },
    {
      date: '2009-07-10',
      close: 77.63,
    },
    {
      date: '2009-07-09',
      close: 78.1,
    },
    {
      date: '2009-07-08',
      close: 77.36,
    },
    {
      date: '2009-07-07',
      close: 75.63,
    },
    {
      date: '2009-07-06',
      close: 78.1,
    },
    {
      date: '2009-07-02',
      close: 79.32,
    },
    {
      date: '2009-07-01',
      close: 81.6,
    },
    {
      date: '2009-06-30',
      close: 83.66,
    },
    {
      date: '2009-06-29',
      close: 83.03,
    },
    {
      date: '2009-06-26',
      close: 83.88,
    },
    {
      date: '2009-06-25',
      close: 82.2,
    },
    {
      date: '2009-06-24',
      close: 79.27,
    },
    {
      date: '2009-06-23',
      close: 77.68,
    },
    {
      date: '2009-06-22',
      close: 79.15,
    },
    {
      date: '2009-06-19',
      close: 82.96,
    },
    {
      date: '2009-06-18',
      close: 81.6,
    },
    {
      date: '2009-06-17',
      close: 82.65,
    },
    {
      date: '2009-06-16',
      close: 82.15,
    },
    {
      date: '2009-06-15',
      close: 83.18,
    },
    {
      date: '2009-06-12',
      close: 84.08,
    },
    {
      date: '2009-06-11',
      close: 85.69,
    },
    {
      date: '2009-06-10',
      close: 86.59,
    },
    {
      date: '2009-06-09',
      close: 87.08,
    },
    {
      date: '2009-06-08',
      close: 86.36,
    },
    {
      date: '2009-06-05',
      close: 87.56,
    },
    {
      date: '2009-06-04',
      close: 85.52,
    },
    {
      date: '2009-06-03',
      close: 85.68,
    },
    {
      date: '2009-06-02',
      close: 84.93,
    },
    {
      date: '2009-06-01',
      close: 83.05,
    },
    {
      date: '2009-05-29',
      close: 77.99,
    },
    {
      date: '2009-05-28',
      close: 77.65,
    },
    {
      date: '2009-05-27',
      close: 77.1,
    },
    {
      date: '2009-05-26',
      close: 78.39,
    },
    {
      date: '2009-05-22',
      close: 75.64,
    },
    {
      date: '2009-05-21',
      close: 75.96,
    },
    {
      date: '2009-05-20',
      close: 77.97,
    },
    {
      date: '2009-05-19',
      close: 77.87,
    },
    {
      date: '2009-05-18',
      close: 75.95,
    },
    {
      date: '2009-05-15',
      close: 73.6,
    },
    {
      date: '2009-05-14',
      close: 75.11,
    },
    {
      date: '2009-05-13',
      close: 74.19,
    },
    {
      date: '2009-05-12',
      close: 77.93,
    },
    {
      date: '2009-05-11',
      close: 78.61,
    },
    {
      date: '2009-05-08',
      close: 77.95,
    },
    {
      date: '2009-05-07',
      close: 79.28,
    },
    {
      date: '2009-05-06',
      close: 81.99,
    },
    {
      date: '2009-05-05',
      close: 81.9,
    },
    {
      date: '2009-05-04',
      close: 79.77,
    },
    {
      date: '2009-05-01',
      close: 78.96,
    },
    {
      date: '2009-04-30',
      close: 80.52,
    },
    {
      date: '2009-04-29',
      close: 79.79,
    },
    {
      date: '2009-04-28',
      close: 82.4,
    },
    {
      date: '2009-04-27',
      close: 83.12,
    },
    {
      date: '2009-04-24',
      close: 84.46,
    },
    {
      date: '2009-04-23',
      close: 80.61,
    },
    {
      date: '2009-04-22',
      close: 79.2,
    },
    {
      date: '2009-04-21',
      close: 78.74,
    },
    {
      date: '2009-04-20',
      close: 77.57,
    },
    {
      date: '2009-04-17',
      close: 78.05,
    },
    {
      date: '2009-04-16',
      close: 77.25,
    },
    {
      date: '2009-04-15',
      close: 74.71,
    },
    {
      date: '2009-04-14',
      close: 77.22,
    },
    {
      date: '2009-04-13',
      close: 78.94,
    },
    {
      date: '2009-04-09',
      close: 79.77,
    },
    {
      date: '2009-04-08',
      close: 76.98,
    },
    {
      date: '2009-04-07',
      close: 75.51,
    },
    {
      date: '2009-04-06',
      close: 77.99,
    },
    {
      date: '2009-04-03',
      close: 78.17,
    },
    {
      date: '2009-04-02',
      close: 76.34,
    },
    {
      date: '2009-04-01',
      close: 73.5,
    },
    {
      date: '2009-03-31',
      close: 73.44,
    },
    {
      date: '2009-03-30',
      close: 71.44,
    },
    {
      date: '2009-03-27',
      close: 70.52,
    },
    {
      date: '2009-03-26',
      close: 73.69,
    },
    {
      date: '2009-03-25',
      close: 72.4,
    },
    {
      date: '2009-03-24',
      close: 72.81,
    },
    {
      date: '2009-03-23',
      close: 75.58,
    },
    {
      date: '2009-03-20',
      close: 69.96,
    },
    {
      date: '2009-03-19',
      close: 70.1,
    },
    {
      date: '2009-03-18',
      close: 71.25,
    },
    {
      date: '2009-03-17',
      close: 71.35,
    },
    {
      date: '2009-03-16',
      close: 66.98,
    },
    {
      date: '2009-03-13',
      close: 68.63,
    },
    {
      date: '2009-03-12',
      close: 69.58,
    },
    {
      date: '2009-03-11',
      close: 68.54,
    },
    {
      date: '2009-03-10',
      close: 65.71,
    },
    {
      date: '2009-03-09',
      close: 60.49,
    },
    {
      date: '2009-03-06',
      close: 61.69,
    },
    {
      date: '2009-03-05',
      close: 64.77,
    },
    {
      date: '2009-03-04',
      close: 64.81,
    },
    {
      date: '2009-03-03',
      close: 61.7,
    },
    {
      date: '2009-03-02',
      close: 61.99,
    },
    {
      date: '2009-02-27',
      close: 64.79,
    },
    {
      date: '2009-02-26',
      close: 62.34,
    },
    {
      date: '2009-02-25',
      close: 63.71,
    },
    {
      date: '2009-02-24',
      close: 65.6,
    },
    {
      date: '2009-02-23',
      close: 61.71,
    },
    {
      date: '2009-02-20',
      close: 63.86,
    },
    {
      date: '2009-02-19',
      close: 61.95,
    },
    {
      date: '2009-02-18',
      close: 62.35,
    },
    {
      date: '2009-02-17',
      close: 61.67,
    },
    {
      date: '2009-02-13',
      close: 63.26,
    },
    {
      date: '2009-02-12',
      close: 63.96,
    },
    {
      date: '2009-02-11',
      close: 64.35,
    },
    {
      date: '2009-02-10',
      close: 63.31,
    },
    {
      date: '2009-02-09',
      close: 66.71,
    },
    {
      date: '2009-02-06',
      close: 66.55,
    },
    {
      date: '2009-02-05',
      close: 63.18,
    },
    {
      date: '2009-02-04',
      close: 61.06,
    },
    {
      date: '2009-02-03',
      close: 63.59,
    },
    {
      date: '2009-02-02',
      close: 61.15,
    },
    {
      date: '2009-01-30',
      close: 58.82,
    },
    {
      date: '2009-01-29',
      close: 50,
    },
    {
      date: '2009-01-28',
      close: 50.36,
    },
    {
      date: '2009-01-27',
      close: 48.44,
    },
    {
      date: '2009-01-26',
      close: 49.63,
    },
    {
      date: '2009-01-23',
      close: 50.63,
    },
    {
      date: '2009-01-22',
      close: 49.94,
    },
    {
      date: '2009-01-21',
      close: 50.54,
    },
    {
      date: '2009-01-20',
      close: 48.44,
    },
    {
      date: '2009-01-16',
      close: 51.59,
    },
    {
      date: '2009-01-15',
      close: 51.44,
    },
    {
      date: '2009-01-14',
      close: 48.49,
    },
    {
      date: '2009-01-13',
      close: 51.45,
    },
    {
      date: '2009-01-12',
      close: 51.92,
    },
    {
      date: '2009-01-09',
      close: 55.51,
    },
    {
      date: '2009-01-08',
      close: 57.16,
    },
    {
      date: '2009-01-07',
      close: 56.2,
    },
    {
      date: '2009-01-06',
      close: 57.36,
    },
    {
      date: '2009-01-05',
      close: 54.06,
    },
    {
      date: '2009-01-02',
      close: 54.36,
    },
    {
      date: '2008-12-31',
      close: 51.28,
    },
    {
      date: '2008-12-30',
      close: 50.76,
    },
    {
      date: '2008-12-29',
      close: 49.4,
    },
    {
      date: '2008-12-26',
      close: 51.78,
    },
    {
      date: '2008-12-24',
      close: 51.44,
    },
    {
      date: '2008-12-23',
      close: 51.08,
    },
    {
      date: '2008-12-22',
      close: 49.84,
    },
    {
      date: '2008-12-19',
      close: 51.56,
    },
    {
      date: '2008-12-18',
      close: 52.08,
    },
    {
      date: '2008-12-17',
      close: 53.18,
    },
    {
      date: '2008-12-16',
      close: 52.63,
    },
    {
      date: '2008-12-15',
      close: 48.85,
    },
    {
      date: '2008-12-12',
      close: 51.25,
    },
    {
      date: '2008-12-11',
      close: 48.25,
    },
    {
      date: '2008-12-10',
      close: 49.7,
    },
    {
      date: '2008-12-09',
      close: 51.25,
    },
    {
      date: '2008-12-08',
      close: 51.41,
    },
    {
      date: '2008-12-05',
      close: 48.26,
    },
    {
      date: '2008-12-04',
      close: 47.32,
    },
    {
      date: '2008-12-03',
      close: 45.21,
    },
    {
      date: '2008-12-02',
      close: 41.19,
    },
    {
      date: '2008-12-01',
      close: 40.47,
    },
    {
      date: '2008-11-28',
      close: 42.7,
    },
    {
      date: '2008-11-26',
      close: 43.96,
    },
    {
      date: '2008-11-25',
      close: 42.19,
    },
    {
      date: '2008-11-24',
      close: 42.5,
    },
    {
      date: '2008-11-21',
      close: 37.87,
    },
    {
      date: '2008-11-20',
      close: 35.03,
    },
    {
      date: '2008-11-19',
      close: 35.84,
    },
    {
      date: '2008-11-18',
      close: 38.44,
    },
    {
      date: '2008-11-17',
      close: 39.69,
    },
    {
      date: '2008-11-14',
      close: 41.75,
    },
    {
      date: '2008-11-13',
      close: 44.93,
    },
    {
      date: '2008-11-12',
      close: 41.56,
    },
    {
      date: '2008-11-11',
      close: 46.3,
    },
    {
      date: '2008-11-10',
      close: 48.46,
    },
    {
      date: '2008-11-07',
      close: 49.21,
    },
    {
      date: '2008-11-06',
      close: 47.22,
    },
    {
      date: '2008-11-05',
      close: 51.98,
    },
    {
      date: '2008-11-04',
      close: 58.45,
    },
    {
      date: '2008-11-03',
      close: 55.77,
    },
    {
      date: '2008-10-31',
      close: 57.24,
    },
    {
      date: '2008-10-30',
      close: 56.71,
    },
    {
      date: '2008-10-29',
      close: 56.89,
    },
    {
      date: '2008-10-28',
      close: 56.04,
    },
    {
      date: '2008-10-27',
      close: 49.58,
    },
    {
      date: '2008-10-24',
      close: 48.96,
    },
    {
      date: '2008-10-23',
      close: 50.32,
    },
    {
      date: '2008-10-22',
      close: 49.99,
    },
    {
      date: '2008-10-21',
      close: 50.23,
    },
    {
      date: '2008-10-20',
      close: 52.97,
    },
    {
      date: '2008-10-17',
      close: 50.65,
    },
    {
      date: '2008-10-16',
      close: 50.29,
    },
    {
      date: '2008-10-15',
      close: 48.72,
    },
    {
      date: '2008-10-14',
      close: 55.86,
    },
    {
      date: '2008-10-13',
      close: 62.02,
    },
    {
      date: '2008-10-10',
      close: 56.25,
    },
    {
      date: '2008-10-09',
      close: 56,
    },
    {
      date: '2008-10-08',
      close: 61.02,
    },
    {
      date: '2008-10-07',
      close: 58.52,
    },
    {
      date: '2008-10-06',
      close: 65.23,
    },
    {
      date: '2008-10-03',
      close: 67,
    },
    {
      date: '2008-10-02',
      close: 67.36,
    },
    {
      date: '2008-10-01',
      close: 69.58,
    },
    {
      date: '2008-09-30',
      close: 72.76,
    },
    {
      date: '2008-09-29',
      close: 63.35,
    },
    {
      date: '2008-09-26',
      close: 70.7,
    },
    {
      date: '2008-09-25',
      close: 72.08,
    },
    {
      date: '2008-09-24',
      close: 69.96,
    },
    {
      date: '2008-09-23',
      close: 71.76,
    },
    {
      date: '2008-09-22',
      close: 74.93,
    },
    {
      date: '2008-09-19',
      close: 81,
    },
    {
      date: '2008-09-18',
      close: 76.5,
    },
    {
      date: '2008-09-17',
      close: 71.54,
    },
    {
      date: '2008-09-16',
      close: 78.73,
    },
    {
      date: '2008-09-15',
      close: 77.34,
    },
    {
      date: '2008-09-12',
      close: 78.3,
    },
    {
      date: '2008-09-11',
      close: 79.51,
    },
    {
      date: '2008-09-10',
      close: 76.74,
    },
    {
      date: '2008-09-09',
      close: 79.04,
    },
    {
      date: '2008-09-08',
      close: 81.16,
    },
    {
      date: '2008-09-05',
      close: 79.19,
    },
    {
      date: '2008-09-04',
      close: 78.03,
    },
    {
      date: '2008-09-03',
      close: 80.77,
    },
    {
      date: '2008-09-02',
      close: 81.41,
    },
    {
      date: '2008-08-29',
      close: 80.81,
    },
    {
      date: '2008-08-28',
      close: 83.42,
    },
    {
      date: '2008-08-27',
      close: 81.73,
    },
    {
      date: '2008-08-26',
      close: 81.76,
    },
    {
      date: '2008-08-25',
      close: 82.85,
    },
    {
      date: '2008-08-22',
      close: 85.26,
    },
    {
      date: '2008-08-21',
      close: 83.26,
    },
    {
      date: '2008-08-20',
      close: 82.13,
    },
    {
      date: '2008-08-19',
      close: 81.29,
    },
    {
      date: '2008-08-18',
      close: 83.11,
    },
    {
      date: '2008-08-15',
      close: 86.4,
    },
    {
      date: '2008-08-14',
      close: 88.03,
    },
    {
      date: '2008-08-13',
      close: 86.69,
    },
    {
      date: '2008-08-12',
      close: 87.25,
    },
    {
      date: '2008-08-11',
      close: 88.09,
    },
    {
      date: '2008-08-08',
      close: 80.51,
    },
    {
      date: '2008-08-07',
      close: 76.95,
    },
    {
      date: '2008-08-06',
      close: 78.09,
    },
    {
      date: '2008-08-05',
      close: 79.11,
    },
    {
      date: '2008-08-04',
      close: 75.71,
    },
    {
      date: '2008-08-01',
      close: 75.75,
    },
    {
      date: '2008-07-31',
      close: 76.34,
    },
    {
      date: '2008-07-30',
      close: 78.21,
    },
    {
      date: '2008-07-29',
      close: 78.21,
    },
    {
      date: '2008-07-28',
      close: 75.98,
    },
    {
      date: '2008-07-25',
      close: 78.31,
    },
    {
      date: '2008-07-24',
      close: 78.72,
    },
    {
      date: '2008-07-23',
      close: 70.54,
    },
    {
      date: '2008-07-22',
      close: 67.97,
    },
    {
      date: '2008-07-21',
      close: 68.48,
    },
    {
      date: '2008-07-18',
      close: 69.12,
    },
    {
      date: '2008-07-17',
      close: 72.11,
    },
    {
      date: '2008-07-16',
      close: 71.84,
    },
    {
      date: '2008-07-15',
      close: 67.03,
    },
    {
      date: '2008-07-14',
      close: 66.28,
    },
    {
      date: '2008-07-11',
      close: 68.54,
    },
    {
      date: '2008-07-10',
      close: 70.63,
    },
    {
      date: '2008-07-09',
      close: 70.61,
    },
    {
      date: '2008-07-08',
      close: 75.04,
    },
    {
      date: '2008-07-07',
      close: 72.49,
    },
    {
      date: '2008-07-03',
      close: 72,
    },
    {
      date: '2008-07-02',
      close: 71.44,
    },
    {
      date: '2008-07-01',
      close: 73.62,
    },
    {
      date: '2008-06-30',
      close: 73.33,
    },
    {
      date: '2008-06-27',
      close: 74.66,
    },
    {
      date: '2008-06-26',
      close: 76.3,
    },
    {
      date: '2008-06-25',
      close: 80.51,
    },
    {
      date: '2008-06-24',
      close: 79.64,
    },
    {
      date: '2008-06-23',
      close: 80.68,
    },
    {
      date: '2008-06-20',
      close: 81.1,
    },
    {
      date: '2008-06-19',
      close: 84.26,
    },
    {
      date: '2008-06-18',
      close: 82.52,
    },
    {
      date: '2008-06-17',
      close: 82.97,
    },
    {
      date: '2008-06-16',
      close: 81.7,
    },
    {
      date: '2008-06-13',
      close: 79.17,
    },
    {
      date: '2008-06-12',
      close: 76.15,
    },
    {
      date: '2008-06-11',
      close: 77.28,
    },
    {
      date: '2008-06-10',
      close: 79.62,
    },
    {
      date: '2008-06-09',
      close: 79.43,
    },
    {
      date: '2008-06-06',
      close: 80.63,
    },
    {
      date: '2008-06-05',
      close: 84.51,
    },
    {
      date: '2008-06-04',
      close: 81.5,
    },
    {
      date: '2008-06-03',
      close: 80.11,
    },
    {
      date: '2008-06-02',
      close: 80.23,
    },
    {
      date: '2008-05-30',
      close: 81.62,
    },
    {
      date: '2008-05-29',
      close: 80.35,
    },
    {
      date: '2008-05-28',
      close: 80.08,
    },
    {
      date: '2008-05-27',
      close: 80.62,
    },
    {
      date: '2008-05-23',
      close: 78.35,
    },
    {
      date: '2008-05-22',
      close: 79.26,
    },
    {
      date: '2008-05-21',
      close: 78.3,
    },
    {
      date: '2008-05-20',
      close: 80.72,
    },
    {
      date: '2008-05-19',
      close: 82.29,
    },
    {
      date: '2008-05-16',
      close: 76.46,
    },
    {
      date: '2008-05-15',
      close: 76.12,
    },
    {
      date: '2008-05-14',
      close: 74.2,
    },
    {
      date: '2008-05-13',
      close: 74.56,
    },
    {
      date: '2008-05-12',
      close: 74.53,
    },
    {
      date: '2008-05-09',
      close: 72.41,
    },
    {
      date: '2008-05-08',
      close: 72.79,
    },
    {
      date: '2008-05-07',
      close: 73.18,
    },
    {
      date: '2008-05-06',
      close: 75.71,
    },
    {
      date: '2008-05-05',
      close: 75.92,
    },
    {
      date: '2008-05-02',
      close: 77.31,
    },
    {
      date: '2008-05-01',
      close: 79.36,
    },
    {
      date: '2008-04-30',
      close: 78.63,
    },
    {
      date: '2008-04-29',
      close: 80.74,
    },
    {
      date: '2008-04-28',
      close: 81.97,
    },
    {
      date: '2008-04-25',
      close: 80.86,
    },
    {
      date: '2008-04-24',
      close: 77.69,
    },
    {
      date: '2008-04-23',
      close: 81,
    },
    {
      date: '2008-04-22',
      close: 79.6,
    },
    {
      date: '2008-04-21',
      close: 80.18,
    },
    {
      date: '2008-04-18',
      close: 80.1,
    },
    {
      date: '2008-04-17',
      close: 74.04,
    },
    {
      date: '2008-04-16',
      close: 74.59,
    },
    {
      date: '2008-04-15',
      close: 72.5,
    },
    {
      date: '2008-04-14',
      close: 72.61,
    },
    {
      date: '2008-04-11',
      close: 71.99,
    },
    {
      date: '2008-04-10',
      close: 74.83,
    },
    {
      date: '2008-04-09',
      close: 74.39,
    },
    {
      date: '2008-04-08',
      close: 77.3,
    },
    {
      date: '2008-04-07',
      close: 76.9,
    },
    {
      date: '2008-04-04',
      close: 76.87,
    },
    {
      date: '2008-04-03',
      close: 74.94,
    },
    {
      date: '2008-04-02',
      close: 77.37,
    },
    {
      date: '2008-04-01',
      close: 76.7,
    },
    {
      date: '2008-03-31',
      close: 71.3,
    },
    {
      date: '2008-03-28',
      close: 69.76,
    },
    {
      date: '2008-03-27',
      close: 70.8,
    },
    {
      date: '2008-03-26',
      close: 73.8,
    },
    {
      date: '2008-03-25',
      close: 75.17,
    },
    {
      date: '2008-03-24',
      close: 75.95,
    },
    {
      date: '2008-03-20',
      close: 73.19,
    },
    {
      date: '2008-03-19',
      close: 70.17,
    },
    {
      date: '2008-03-18',
      close: 71.7,
    },
    {
      date: '2008-03-17',
      close: 66.53,
    },
    {
      date: '2008-03-14',
      close: 68.22,
    },
    {
      date: '2008-03-13',
      close: 68.32,
    },
    {
      date: '2008-03-12',
      close: 66.51,
    },
    {
      date: '2008-03-11',
      close: 67.15,
    },
    {
      date: '2008-03-10',
      close: 63.47,
    },
    {
      date: '2008-03-07',
      close: 64.09,
    },
    {
      date: '2008-03-06',
      close: 62.74,
    },
    {
      date: '2008-03-05',
      close: 64.99,
    },
    {
      date: '2008-03-04',
      close: 65.34,
    },
    {
      date: '2008-03-03',
      close: 62.43,
    },
    {
      date: '2008-02-29',
      close: 64.47,
    },
    {
      date: '2008-02-28',
      close: 67.85,
    },
    {
      date: '2008-02-27',
      close: 70.87,
    },
    {
      date: '2008-02-26',
      close: 71.69,
    },
    {
      date: '2008-02-25',
      close: 73.27,
    },
    {
      date: '2008-02-22',
      close: 72.08,
    },
    {
      date: '2008-02-21',
      close: 69.9,
    },
    {
      date: '2008-02-20',
      close: 73.64,
    },
    {
      date: '2008-02-19',
      close: 72.08,
    },
    {
      date: '2008-02-15',
      close: 72.96,
    },
    {
      date: '2008-02-14',
      close: 75.8,
    },
    {
      date: '2008-02-13',
      close: 77.73,
    },
    {
      date: '2008-02-12',
      close: 74.45,
    },
    {
      date: '2008-02-11',
      close: 75.19,
    },
    {
      date: '2008-02-08',
      close: 73.5,
    },
    {
      date: '2008-02-07',
      close: 70.91,
    },
    {
      date: '2008-02-06',
      close: 68.49,
    },
    {
      date: '2008-02-05',
      close: 72.09,
    },
    {
      date: '2008-02-04',
      close: 73.95,
    },
    {
      date: '2008-02-01',
      close: 74.63,
    },
    {
      date: '2008-01-31',
      close: 77.7,
    },
    {
      date: '2008-01-30',
      close: 74.21,
    },
    {
      date: '2008-01-29',
      close: 73.95,
    },
    {
      date: '2008-01-28',
      close: 75.82,
    },
    {
      date: '2008-01-25',
      close: 77.6,
    },
    {
      date: '2008-01-24',
      close: 77.67,
    },
    {
      date: '2008-01-23',
      close: 73.97,
    },
    {
      date: '2008-01-22',
      close: 78.48,
    },
    {
      date: '2008-01-18',
      close: 79.76,
    },
    {
      date: '2008-01-17',
      close: 80.12,
    },
    {
      date: '2008-01-16',
      close: 80.35,
    },
    {
      date: '2008-01-15',
      close: 80.24,
    },
    {
      date: '2008-01-14',
      close: 82.87,
    },
    {
      date: '2008-01-11',
      close: 81.08,
    },
    {
      date: '2008-01-10',
      close: 84.26,
    },
    {
      date: '2008-01-09',
      close: 85.22,
    },
    {
      date: '2008-01-08',
      close: 87.88,
    },
    {
      date: '2008-01-07',
      close: 88.82,
    },
    {
      date: '2008-01-04',
      close: 88.79,
    },
    {
      date: '2008-01-03',
      close: 95.21,
    },
    {
      date: '2008-01-02',
      close: 96.25,
    },
    {
      date: '2007-12-31',
      close: 92.64,
    },
    {
      date: '2007-12-28',
      close: 94.45,
    },
    {
      date: '2007-12-27',
      close: 94.25,
    },
    {
      date: '2007-12-26',
      close: 92.85,
    },
    {
      date: '2007-12-24',
      close: 91.01,
    },
    {
      date: '2007-12-21',
      close: 91.26,
    },
    {
      date: '2007-12-20',
      close: 90.58,
    },
    {
      date: '2007-12-19',
      close: 89.38,
    },
    {
      date: '2007-12-18',
      close: 86.89,
    },
    {
      date: '2007-12-17',
      close: 85.09,
    },
    {
      date: '2007-12-14',
      close: 89.08,
    },
    {
      date: '2007-12-13',
      close: 92.4,
    },
    {
      date: '2007-12-12',
      close: 91.28,
    },
    {
      date: '2007-12-11',
      close: 90.75,
    },
    {
      date: '2007-12-10',
      close: 93.02,
    },
    {
      date: '2007-12-07',
      close: 94.31,
    },
    {
      date: '2007-12-06',
      close: 94.21,
    },
    {
      date: '2007-12-05',
      close: 93.19,
    },
    {
      date: '2007-12-04',
      close: 94.41,
    },
    {
      date: '2007-12-03',
      close: 90.91,
    },
    {
      date: '2007-11-30',
      close: 90.56,
    },
    {
      date: '2007-11-29',
      close: 89.15,
    },
    {
      date: '2007-11-28',
      close: 90.3,
    },
    {
      date: '2007-11-27',
      close: 85.59,
    },
    {
      date: '2007-11-26',
      close: 81.3,
    },
    {
      date: '2007-11-23',
      close: 81.43,
    },
    {
      date: '2007-11-21',
      close: 79.76,
    },
    {
      date: '2007-11-20',
      close: 80.39,
    },
    {
      date: '2007-11-19',
      close: 79.18,
    },
    {
      date: '2007-11-16',
      close: 78.6,
    },
    {
      date: '2007-11-15',
      close: 77.85,
    },
    {
      date: '2007-11-14',
      close: 78.51,
    },
    {
      date: '2007-11-13',
      close: 79.86,
    },
    {
      date: '2007-11-12',
      close: 77,
    },
    {
      date: '2007-11-09',
      close: 78.89,
    },
    {
      date: '2007-11-08',
      close: 83.58,
    },
    {
      date: '2007-11-07',
      close: 87.04,
    },
    {
      date: '2007-11-06',
      close: 87.27,
    },
    {
      date: '2007-11-05',
      close: 84.37,
    },
    {
      date: '2007-11-02',
      close: 85.98,
    },
    {
      date: '2007-11-01',
      close: 87.65,
    },
    {
      date: '2007-10-31',
      close: 89.15,
    },
    {
      date: '2007-10-30',
      close: 88.24,
    },
    {
      date: '2007-10-29',
      close: 90.1,
    },
    {
      date: '2007-10-26',
      close: 90,
    },
    {
      date: '2007-10-25',
      close: 88.21,
    },
    {
      date: '2007-10-24',
      close: 88.73,
    },
    {
      date: '2007-10-23',
      close: 100.82,
    },
    {
      date: '2007-10-22',
      close: 91.29,
    },
    {
      date: '2007-10-19',
      close: 89.76,
    },
    {
      date: '2007-10-18',
      close: 89.85,
    },
    {
      date: '2007-10-17',
      close: 90.55,
    },
    {
      date: '2007-10-16',
      close: 89.53,
    },
    {
      date: '2007-10-15',
      close: 90.53,
    },
    {
      date: '2007-10-12',
      close: 92.37,
    },
    {
      date: '2007-10-11',
      close: 89.34,
    },
    {
      date: '2007-10-10',
      close: 94.66,
    },
    {
      date: '2007-10-09',
      close: 95.32,
    },
    {
      date: '2007-10-08',
      close: 95.85,
    },
    {
      date: '2007-10-05',
      close: 93.43,
    },
    {
      date: '2007-10-04',
      close: 92.26,
    },
    {
      date: '2007-10-03',
      close: 92.46,
    },
    {
      date: '2007-10-02',
      close: 92.36,
    },
    {
      date: '2007-10-01',
      close: 93.41,
    },
    {
      date: '2007-09-28',
      close: 93.15,
    },
    {
      date: '2007-09-27',
      close: 93.38,
    },
    {
      date: '2007-09-26',
      close: 93.43,
    },
    {
      date: '2007-09-25',
      close: 93.48,
    },
    {
      date: '2007-09-24',
      close: 92.59,
    },
    {
      date: '2007-09-21',
      close: 91.3,
    },
    {
      date: '2007-09-20',
      close: 89.65,
    },
    {
      date: '2007-09-19',
      close: 89,
    },
    {
      date: '2007-09-18',
      close: 88.75,
    },
    {
      date: '2007-09-17',
      close: 86.91,
    },
    {
      date: '2007-09-14',
      close: 87.77,
    },
    {
      date: '2007-09-13',
      close: 87.26,
    },
    {
      date: '2007-09-12',
      close: 87.3,
    },
    {
      date: '2007-09-11',
      close: 86.28,
    },
    {
      date: '2007-09-10',
      close: 83.34,
    },
    {
      date: '2007-09-07',
      close: 84.52,
    },
    {
      date: '2007-09-06',
      close: 86.21,
    },
    {
      date: '2007-09-05',
      close: 83.75,
    },
    {
      date: '2007-09-04',
      close: 82.7,
    },
    {
      date: '2007-08-31',
      close: 79.91,
    },
    {
      date: '2007-08-30',
      close: 78.68,
    },
    {
      date: '2007-08-29',
      close: 79.05,
    },
    {
      date: '2007-08-28',
      close: 76.22,
    },
    {
      date: '2007-08-27',
      close: 78.65,
    },
    {
      date: '2007-08-24',
      close: 79.25,
    },
    {
      date: '2007-08-23',
      close: 77.3,
    },
    {
      date: '2007-08-22',
      close: 78.5,
    },
    {
      date: '2007-08-21',
      close: 77.49,
    },
    {
      date: '2007-08-20',
      close: 74.7,
    },
    {
      date: '2007-08-17',
      close: 75.02,
    },
    {
      date: '2007-08-16',
      close: 72.79,
    },
    {
      date: '2007-08-15',
      close: 72.38,
    },
    {
      date: '2007-08-14',
      close: 73.45,
    },
    {
      date: '2007-08-13',
      close: 74.87,
    },
    {
      date: '2007-08-10',
      close: 74.78,
    },
    {
      date: '2007-08-09',
      close: 74.11,
    },
    {
      date: '2007-08-08',
      close: 77.78,
    },
    {
      date: '2007-08-07',
      close: 79.14,
    },
    {
      date: '2007-08-06',
      close: 79,
    },
    {
      date: '2007-08-03',
      close: 76.8,
    },
    {
      date: '2007-08-02',
      close: 79.71,
    },
    {
      date: '2007-08-01',
      close: 77.31,
    },
    {
      date: '2007-07-31',
      close: 78.54,
    },
    {
      date: '2007-07-30',
      close: 82.7,
    },
    {
      date: '2007-07-27',
      close: 84.04,
    },
    {
      date: '2007-07-26',
      close: 84.01,
    },
    {
      date: '2007-07-25',
      close: 86.18,
    },
    {
      date: '2007-07-24',
      close: 69.25,
    },
    {
      date: '2007-07-23',
      close: 71.74,
    },
    {
      date: '2007-07-20',
      close: 71.63,
    },
    {
      date: '2007-07-19',
      close: 73.35,
    },
    {
      date: '2007-07-18',
      close: 73.32,
    },
    {
      date: '2007-07-17',
      close: 73.79,
    },
    {
      date: '2007-07-16',
      close: 73.69,
    },
    {
      date: '2007-07-13',
      close: 75.1,
    },
    {
      date: '2007-07-12',
      close: 72.79,
    },
    {
      date: '2007-07-11',
      close: 70.73,
    },
    {
      date: '2007-07-10',
      close: 70.28,
    },
    {
      date: '2007-07-09',
      close: 72.07,
    },
    {
      date: '2007-07-06',
      close: 68.97,
    },
    {
      date: '2007-07-05',
      close: 68.73,
    },
    {
      date: '2007-07-03',
      close: 69.45,
    },
    {
      date: '2007-07-02',
      close: 69.61,
    },
    {
      date: '2007-06-29',
      close: 68.41,
    },
    {
      date: '2007-06-28',
      close: 68.89,
    },
    {
      date: '2007-06-27',
      close: 68.14,
    },
    {
      date: '2007-06-26',
      close: 67.48,
    },
    {
      date: '2007-06-25',
      close: 68.66,
    },
    {
      date: '2007-06-22',
      close: 68.86,
    },
    {
      date: '2007-06-21',
      close: 69.67,
    },
    {
      date: '2007-06-20',
      close: 69.1,
    },
    {
      date: '2007-06-19',
      close: 69.81,
    },
    {
      date: '2007-06-18',
      close: 71.83,
    },
    {
      date: '2007-06-15',
      close: 72.4,
    },
    {
      date: '2007-06-14',
      close: 71.94,
    },
    {
      date: '2007-06-13',
      close: 70.89,
    },
    {
      date: '2007-06-12',
      close: 70.07,
    },
    {
      date: '2007-06-11',
      close: 71.17,
    },
    {
      date: '2007-06-08',
      close: 73.24,
    },
    {
      date: '2007-06-07',
      close: 72.04,
    },
    {
      date: '2007-06-06',
      close: 72.29,
    },
    {
      date: '2007-06-05',
      close: 73.65,
    },
    {
      date: '2007-06-04',
      close: 70.42,
    },
    {
      date: '2007-06-01',
      close: 68.58,
    },
    {
      date: '2007-05-31',
      close: 69.14,
    },
    {
      date: '2007-05-30',
      close: 69.86,
    },
    {
      date: '2007-05-29',
      close: 69.63,
    },
    {
      date: '2007-05-25',
      close: 68.55,
    },
    {
      date: '2007-05-24',
      close: 69.35,
    },
    {
      date: '2007-05-23',
      close: 69,
    },
    {
      date: '2007-05-22',
      close: 68.88,
    },
    {
      date: '2007-05-21',
      close: 68.3,
    },
    {
      date: '2007-05-18',
      close: 63.3,
    },
    {
      date: '2007-05-17',
      close: 62.17,
    },
    {
      date: '2007-05-16',
      close: 63.22,
    },
    {
      date: '2007-05-15',
      close: 60.58,
    },
    {
      date: '2007-05-14',
      close: 61.7,
    },
    {
      date: '2007-05-11',
      close: 61.56,
    },
    {
      date: '2007-05-10',
      close: 60.92,
    },
    {
      date: '2007-05-09',
      close: 62.85,
    },
    {
      date: '2007-05-08',
      close: 61.83,
    },
    {
      date: '2007-05-07',
      close: 60.82,
    },
    {
      date: '2007-05-04',
      close: 63.23,
    },
    {
      date: '2007-05-03',
      close: 62.19,
    },
    {
      date: '2007-05-02',
      close: 61.18,
    },
    {
      date: '2007-05-01',
      close: 62.04,
    },
    {
      date: '2007-04-30',
      close: 61.33,
    },
    {
      date: '2007-04-27',
      close: 62.6,
    },
    {
      date: '2007-04-26',
      close: 62.78,
    },
    {
      date: '2007-04-25',
      close: 56.81,
    },
    {
      date: '2007-04-24',
      close: 44.75,
    },
    {
      date: '2007-04-23',
      close: 44.77,
    },
    {
      date: '2007-04-20',
      close: 44.95,
    },
    {
      date: '2007-04-19',
      close: 44.64,
    },
    {
      date: '2007-04-18',
      close: 44.99,
    },
    {
      date: '2007-04-17',
      close: 45.07,
    },
    {
      date: '2007-04-16',
      close: 45.2,
    },
    {
      date: '2007-04-13',
      close: 42.41,
    },
    {
      date: '2007-04-12',
      close: 42.27,
    },
    {
      date: '2007-04-11',
      close: 41.68,
    },
    {
      date: '2007-04-10',
      close: 41.86,
    },
    {
      date: '2007-04-09',
      close: 41.66,
    },
    {
      date: '2007-04-05',
      close: 41.68,
    },
    {
      date: '2007-04-04',
      close: 41.53,
    },
    {
      date: '2007-04-03',
      close: 41.19,
    },
    {
      date: '2007-04-02',
      close: 40.42,
    },
    {
      date: '2007-03-30',
      close: 39.79,
    },
    {
      date: '2007-03-29',
      close: 39.81,
    },
    {
      date: '2007-03-28',
      close: 39.34,
    },
    {
      date: '2007-03-27',
      close: 39.37,
    },
    {
      date: '2007-03-26',
      close: 39.01,
    },
    {
      date: '2007-03-23',
      close: 38.98,
    },
    {
      date: '2007-03-22',
      close: 39.49,
    },
    {
      date: '2007-03-21',
      close: 39.8,
    },
    {
      date: '2007-03-20',
      close: 38.58,
    },
    {
      date: '2007-03-19',
      close: 38.45,
    },
    {
      date: '2007-03-16',
      close: 37.85,
    },
    {
      date: '2007-03-15',
      close: 37.78,
    },
    {
      date: '2007-03-14',
      close: 38.08,
    },
    {
      date: '2007-03-13',
      close: 37.82,
    },
    {
      date: '2007-03-12',
      close: 38.81,
    },
    {
      date: '2007-03-09',
      close: 38.84,
    },
    {
      date: '2007-03-08',
      close: 38.1,
    },
    {
      date: '2007-03-07',
      close: 38.36,
    },
    {
      date: '2007-03-06',
      close: 38.58,
    },
    {
      date: '2007-03-05',
      close: 37.05,
    },
    {
      date: '2007-03-02',
      close: 37.69,
    },
    {
      date: '2007-03-01',
      close: 38.85,
    },
    {
      date: '2007-02-28',
      close: 39.14,
    },
    {
      date: '2007-02-27',
      close: 38.83,
    },
    {
      date: '2007-02-26',
      close: 40.88,
    },
    {
      date: '2007-02-23',
      close: 40.78,
    },
    {
      date: '2007-02-22',
      close: 41,
    },
    {
      date: '2007-02-21',
      close: 41.26,
    },
    {
      date: '2007-02-20',
      close: 41.51,
    },
    {
      date: '2007-02-16',
      close: 40.33,
    },
    {
      date: '2007-02-15',
      close: 40.06,
    },
    {
      date: '2007-02-14',
      close: 40.14,
    },
    {
      date: '2007-02-13',
      close: 39.31,
    },
    {
      date: '2007-02-12',
      close: 38.85,
    },
    {
      date: '2007-02-09',
      close: 38.72,
    },
    {
      date: '2007-02-08',
      close: 39.1,
    },
    {
      date: '2007-02-07',
      close: 38.98,
    },
    {
      date: '2007-02-06',
      close: 38.27,
    },
    {
      date: '2007-02-05',
      close: 37.16,
    },
    {
      date: '2007-02-02',
      close: 37.39,
    },
    {
      date: '2007-02-01',
      close: 38.7,
    },
    {
      date: '2007-01-31',
      close: 37.67,
    },
    {
      date: '2007-01-30',
      close: 37.05,
    },
    {
      date: '2007-01-29',
      close: 37.43,
    },
    {
      date: '2007-01-26',
      close: 36.85,
    },
    {
      date: '2007-01-25',
      close: 37.08,
    },
    {
      date: '2007-01-24',
      close: 37.26,
    },
    {
      date: '2007-01-23',
      close: 36.43,
    },
    {
      date: '2007-01-22',
      close: 36.95,
    },
    {
      date: '2007-01-19',
      close: 37.02,
    },
    {
      date: '2007-01-18',
      close: 36.98,
    },
    {
      date: '2007-01-17',
      close: 37.88,
    },
    {
      date: '2007-01-16',
      close: 38.66,
    },
    {
      date: '2007-01-12',
      close: 38.2,
    },
    {
      date: '2007-01-11',
      close: 37.4,
    },
    {
      date: '2007-01-10',
      close: 37.15,
    },
    {
      date: '2007-01-09',
      close: 37.78,
    },
    {
      date: '2007-01-08',
      close: 37.5,
    },
    {
      date: '2007-01-05',
      close: 38.37,
    },
    {
      date: '2007-01-04',
      close: 38.9,
    },
    {
      date: '2007-01-03',
      close: 38.7,
    },
    {
      date: '2006-12-29',
      close: 39.46,
    },
    {
      date: '2006-12-28',
      close: 40.21,
    },
    {
      date: '2006-12-27',
      close: 40.29,
    },
    {
      date: '2006-12-26',
      close: 39.8,
    },
    {
      date: '2006-12-22',
      close: 40.24,
    },
    {
      date: '2006-12-21',
      close: 39.89,
    },
    {
      date: '2006-12-20',
      close: 40.01,
    },
    {
      date: '2006-12-19',
      close: 39.42,
    },
    {
      date: '2006-12-18',
      close: 39.26,
    },
    {
      date: '2006-12-15',
      close: 40.01,
    },
    {
      date: '2006-12-14',
      close: 39.02,
    },
    {
      date: '2006-12-13',
      close: 38.5,
    },
    {
      date: '2006-12-12',
      close: 38.46,
    },
    {
      date: '2006-12-11',
      close: 38.69,
    },
    {
      date: '2006-12-08',
      close: 38.46,
    },
    {
      date: '2006-12-07',
      close: 38.12,
    },
    {
      date: '2006-12-06',
      close: 38.9,
    },
    {
      date: '2006-12-05',
      close: 38.98,
    },
    {
      date: '2006-12-04',
      close: 39.1,
    },
    {
      date: '2006-12-01',
      close: 39.41,
    },
    {
      date: '2006-11-30',
      close: 40.34,
    },
    {
      date: '2006-11-29',
      close: 40.63,
    },
    {
      date: '2006-11-28',
      close: 40.92,
    },
    {
      date: '2006-11-27',
      close: 40.85,
    },
    {
      date: '2006-11-24',
      close: 42.41,
    },
    {
      date: '2006-11-22',
      close: 42.96,
    },
    {
      date: '2006-11-21',
      close: 42.54,
    },
    {
      date: '2006-11-20',
      close: 42.44,
    },
    {
      date: '2006-11-17',
      close: 42.55,
    },
    {
      date: '2006-11-16',
      close: 42.84,
    },
    {
      date: '2006-11-15',
      close: 42.6,
    },
    {
      date: '2006-11-14',
      close: 41.51,
    },
    {
      date: '2006-11-13',
      close: 39.99,
    },
    {
      date: '2006-11-10',
      close: 39.26,
    },
    {
      date: '2006-11-09',
      close: 38.84,
    },
    {
      date: '2006-11-08',
      close: 39.47,
    },
    {
      date: '2006-11-07',
      close: 38.77,
    },
    {
      date: '2006-11-06',
      close: 38.21,
    },
    {
      date: '2006-11-03',
      close: 37.46,
    },
    {
      date: '2006-11-02',
      close: 37.45,
    },
    {
      date: '2006-11-01',
      close: 37.56,
    },
    {
      date: '2006-10-31',
      close: 38.09,
    },
    {
      date: '2006-10-30',
      close: 38.15,
    },
    {
      date: '2006-10-27',
      close: 38.24,
    },
    {
      date: '2006-10-26',
      close: 38.3,
    },
    {
      date: '2006-10-25',
      close: 37.68,
    },
    {
      date: '2006-10-24',
      close: 33.63,
    },
    {
      date: '2006-10-23',
      close: 32.88,
    },
    {
      date: '2006-10-20',
      close: 32.57,
    },
    {
      date: '2006-10-19',
      close: 32.54,
    },
    {
      date: '2006-10-18',
      close: 32.31,
    },
    {
      date: '2006-10-17',
      close: 32.47,
    },
    {
      date: '2006-10-16',
      close: 32.6,
    },
    {
      date: '2006-10-13',
      close: 33.32,
    },
    {
      date: '2006-10-12',
      close: 33.55,
    },
    {
      date: '2006-10-11',
      close: 32.91,
    },
    {
      date: '2006-10-10',
      close: 32.62,
    },
    {
      date: '2006-10-09',
      close: 33.38,
    },
    {
      date: '2006-10-06',
      close: 32.59,
    },
    {
      date: '2006-10-05',
      close: 33.32,
    },
    {
      date: '2006-10-04',
      close: 32.76,
    },
    {
      date: '2006-10-03',
      close: 31.7,
    },
    {
      date: '2006-10-02',
      close: 30.87,
    },
    {
      date: '2006-09-29',
      close: 32.12,
    },
    {
      date: '2006-09-28',
      close: 31.84,
    },
    {
      date: '2006-09-27',
      close: 32.33,
    },
    {
      date: '2006-09-26',
      close: 32.5,
    },
    {
      date: '2006-09-25',
      close: 31.79,
    },
    {
      date: '2006-09-22',
      close: 30.84,
    },
    {
      date: '2006-09-21',
      close: 30.22,
    },
    {
      date: '2006-09-20',
      close: 32.12,
    },
    {
      date: '2006-09-19',
      close: 31.58,
    },
    {
      date: '2006-09-18',
      close: 32.08,
    },
    {
      date: '2006-09-15',
      close: 32.52,
    },
    {
      date: '2006-09-14',
      close: 31.65,
    },
    {
      date: '2006-09-13',
      close: 31.67,
    },
    {
      date: '2006-09-12',
      close: 31.72,
    },
    {
      date: '2006-09-11',
      close: 30.79,
    },
    {
      date: '2006-09-08',
      close: 30.51,
    },
    {
      date: '2006-09-07',
      close: 29.73,
    },
    {
      date: '2006-09-06',
      close: 30.8,
    },
    {
      date: '2006-09-05',
      close: 32.23,
    },
    {
      date: '2006-09-01',
      close: 31.76,
    },
    {
      date: '2006-08-31',
      close: 30.83,
    },
    {
      date: '2006-08-30',
      close: 30.67,
    },
    {
      date: '2006-08-29',
      close: 29.52,
    },
    {
      date: '2006-08-28',
      close: 28.91,
    },
    {
      date: '2006-08-25',
      close: 28.03,
    },
    {
      date: '2006-08-24',
      close: 27.97,
    },
    {
      date: '2006-08-23',
      close: 28.14,
    },
    {
      date: '2006-08-22',
      close: 28.37,
    },
    {
      date: '2006-08-21',
      close: 28.13,
    },
    {
      date: '2006-08-18',
      close: 29.12,
    },
    {
      date: '2006-08-17',
      close: 29.09,
    },
    {
      date: '2006-08-16',
      close: 27.95,
    },
    {
      date: '2006-08-15',
      close: 27.77,
    },
    {
      date: '2006-08-14',
      close: 26.53,
    },
    {
      date: '2006-08-11',
      close: 26.07,
    },
    {
      date: '2006-08-10',
      close: 26.49,
    },
    {
      date: '2006-08-09',
      close: 26.21,
    },
    {
      date: '2006-08-08',
      close: 26.36,
    },
    {
      date: '2006-08-07',
      close: 26.78,
    },
    {
      date: '2006-08-04',
      close: 27.29,
    },
    {
      date: '2006-08-03',
      close: 26.69,
    },
    {
      date: '2006-08-02',
      close: 26.09,
    },
    {
      date: '2006-08-01',
      close: 26.32,
    },
    {
      date: '2006-07-31',
      close: 26.89,
    },
    {
      date: '2006-07-28',
      close: 27.17,
    },
    {
      date: '2006-07-27',
      close: 26.56,
    },
    {
      date: '2006-07-26',
      close: 26.26,
    },
    {
      date: '2006-07-25',
      close: 33.59,
    },
    {
      date: '2006-07-24',
      close: 34.31,
    },
    {
      date: '2006-07-21',
      close: 33.19,
    },
    {
      date: '2006-07-20',
      close: 34.18,
    },
    {
      date: '2006-07-19',
      close: 34.48,
    },
    {
      date: '2006-07-18',
      close: 33.49,
    },
    {
      date: '2006-07-17',
      close: 33.67,
    },
    {
      date: '2006-07-14',
      close: 32.92,
    },
    {
      date: '2006-07-13',
      close: 33.73,
    },
    {
      date: '2006-07-12',
      close: 34.63,
    },
    {
      date: '2006-07-11',
      close: 35.66,
    },
    {
      date: '2006-07-10',
      close: 35.79,
    },
    {
      date: '2006-07-07',
      close: 36.11,
    },
    {
      date: '2006-07-06',
      close: 36.8,
    },
    {
      date: '2006-07-05',
      close: 37.11,
    },
    {
      date: '2006-07-03',
      close: 38.61,
    },
    {
      date: '2006-06-30',
      close: 38.68,
    },
    {
      date: '2006-06-29',
      close: 38.52,
    },
    {
      date: '2006-06-28',
      close: 36.7,
    },
    {
      date: '2006-06-27',
      close: 36.48,
    },
    {
      date: '2006-06-26',
      close: 36.77,
    },
    {
      date: '2006-06-23',
      close: 36.55,
    },
    {
      date: '2006-06-22',
      close: 36.37,
    },
    {
      date: '2006-06-21',
      close: 36.65,
    },
    {
      date: '2006-06-20',
      close: 35.48,
    },
    {
      date: '2006-06-19',
      close: 35.07,
    },
    {
      date: '2006-06-16',
      close: 35.09,
    },
    {
      date: '2006-06-15',
      close: 34.96,
    },
    {
      date: '2006-06-14',
      close: 33.68,
    },
    {
      date: '2006-06-13',
      close: 33.47,
    },
    {
      date: '2006-06-12',
      close: 33.6,
    },
    {
      date: '2006-06-09',
      close: 33.78,
    },
    {
      date: '2006-06-08',
      close: 33.55,
    },
    {
      date: '2006-06-07',
      close: 33.77,
    },
    {
      date: '2006-06-06',
      close: 33.41,
    },
    {
      date: '2006-06-05',
      close: 33.49,
    },
    {
      date: '2006-06-02',
      close: 34.76,
    },
    {
      date: '2006-06-01',
      close: 35.07,
    },
    {
      date: '2006-05-31',
      close: 34.61,
    },
    {
      date: '2006-05-30',
      close: 34.64,
    },
    {
      date: '2006-05-26',
      close: 36.07,
    },
    {
      date: '2006-05-25',
      close: 35.63,
    },
    {
      date: '2006-05-24',
      close: 35.19,
    },
    {
      date: '2006-05-23',
      close: 33.76,
    },
    {
      date: '2006-05-22',
      close: 34.83,
    },
    {
      date: '2006-05-19',
      close: 33.94,
    },
    {
      date: '2006-05-18',
      close: 32.61,
    },
    {
      date: '2006-05-17',
      close: 31.61,
    },
    {
      date: '2006-05-16',
      close: 32.76,
    },
    {
      date: '2006-05-15',
      close: 32.78,
    },
    {
      date: '2006-05-12',
      close: 32.73,
    },
    {
      date: '2006-05-11',
      close: 33.53,
    },
    {
      date: '2006-05-10',
      close: 34.16,
    },
    {
      date: '2006-05-09',
      close: 34.84,
    },
    {
      date: '2006-05-08',
      close: 34.69,
    },
    {
      date: '2006-05-05',
      close: 35.04,
    },
    {
      date: '2006-05-04',
      close: 34.47,
    },
    {
      date: '2006-05-03',
      close: 33.96,
    },
    {
      date: '2006-05-02',
      close: 34.38,
    },
    {
      date: '2006-05-01',
      close: 34.59,
    },
    {
      date: '2006-04-28',
      close: 35.21,
    },
    {
      date: '2006-04-27',
      close: 35.74,
    },
    {
      date: '2006-04-26',
      close: 35.79,
    },
    {
      date: '2006-04-25',
      close: 35.55,
    },
    {
      date: '2006-04-24',
      close: 35.79,
    },
    {
      date: '2006-04-21',
      close: 36.03,
    },
    {
      date: '2006-04-20',
      close: 36.34,
    },
    {
      date: '2006-04-19',
      close: 36.89,
    },
    {
      date: '2006-04-18',
      close: 36.28,
    },
    {
      date: '2006-04-17',
      close: 35.27,
    },
    {
      date: '2006-04-13',
      close: 36.62,
    },
    {
      date: '2006-04-12',
      close: 36.13,
    },
    {
      date: '2006-04-11',
      close: 36.06,
    },
    {
      date: '2006-04-10',
      close: 36.61,
    },
    {
      date: '2006-04-07',
      close: 37.09,
    },
    {
      date: '2006-04-06',
      close: 38.51,
    },
    {
      date: '2006-04-05',
      close: 37.34,
    },
    {
      date: '2006-04-04',
      close: 36.77,
    },
    {
      date: '2006-04-03',
      close: 36.14,
    },
    {
      date: '2006-03-31',
      close: 36.53,
    },
    {
      date: '2006-03-30',
      close: 36.67,
    },
    {
      date: '2006-03-29',
      close: 36.32,
    },
    {
      date: '2006-03-28',
      close: 35.69,
    },
    {
      date: '2006-03-27',
      close: 35.25,
    },
    {
      date: '2006-03-24',
      close: 35.47,
    },
    {
      date: '2006-03-23',
      close: 35.68,
    },
    {
      date: '2006-03-22',
      close: 36,
    },
    {
      date: '2006-03-21',
      close: 35.92,
    },
    {
      date: '2006-03-20',
      close: 36.23,
    },
    {
      date: '2006-03-17',
      close: 35.99,
    },
    {
      date: '2006-03-16',
      close: 36.77,
    },
    {
      date: '2006-03-15',
      close: 36.89,
    },
    {
      date: '2006-03-14',
      close: 36.91,
    },
    {
      date: '2006-03-13',
      close: 36.19,
    },
    {
      date: '2006-03-10',
      close: 36.22,
    },
    {
      date: '2006-03-09',
      close: 36.12,
    },
    {
      date: '2006-03-08',
      close: 36.81,
    },
    {
      date: '2006-03-07',
      close: 36.93,
    },
    {
      date: '2006-03-06',
      close: 36.86,
    },
    {
      date: '2006-03-03',
      close: 37.21,
    },
    {
      date: '2006-03-02',
      close: 36.88,
    },
    {
      date: '2006-03-01',
      close: 37.12,
    },
    {
      date: '2006-02-28',
      close: 37.44,
    },
    {
      date: '2006-02-27',
      close: 38.01,
    },
    {
      date: '2006-02-24',
      close: 38.35,
    },
    {
      date: '2006-02-23',
      close: 37.9,
    },
    {
      date: '2006-02-22',
      close: 38.72,
    },
    {
      date: '2006-02-21',
      close: 38.29,
    },
    {
      date: '2006-02-17',
      close: 39.19,
    },
    {
      date: '2006-02-16',
      close: 39.15,
    },
    {
      date: '2006-02-15',
      close: 39.26,
    },
    {
      date: '2006-02-14',
      close: 38.25,
    },
    {
      date: '2006-02-13',
      close: 37.86,
    },
    {
      date: '2006-02-10',
      close: 38.52,
    },
    {
      date: '2006-02-09',
      close: 37.99,
    },
    {
      date: '2006-02-08',
      close: 38.17,
    },
    {
      date: '2006-02-07',
      close: 37.52,
    },
    {
      date: '2006-02-06',
      close: 37.95,
    },
    {
      date: '2006-02-03',
      close: 38.33,
    },
    {
      date: '2006-02-02',
      close: 42.74,
    },
    {
      date: '2006-02-01',
      close: 43.98,
    },
    {
      date: '2006-01-31',
      close: 44.82,
    },
    {
      date: '2006-01-30',
      close: 44.96,
    },
    {
      date: '2006-01-27',
      close: 45.22,
    },
    {
      date: '2006-01-26',
      close: 44.68,
    },
    {
      date: '2006-01-25',
      close: 43.6,
    },
    {
      date: '2006-01-24',
      close: 44.02,
    },
    {
      date: '2006-01-23',
      close: 43.73,
    },
    {
      date: '2006-01-20',
      close: 43.92,
    },
    {
      date: '2006-01-19',
      close: 44.45,
    },
    {
      date: '2006-01-18',
      close: 44.32,
    },
    {
      date: '2006-01-17',
      close: 44,
    },
    {
      date: '2006-01-13',
      close: 44.4,
    },
    {
      date: '2006-01-12',
      close: 44.36,
    },
    {
      date: '2006-01-11',
      close: 44.93,
    },
    {
      date: '2006-01-10',
      close: 45.65,
    },
    {
      date: '2006-01-09',
      close: 47.08,
    },
    {
      date: '2006-01-06',
      close: 47.87,
    },
    {
      date: '2006-01-05',
      close: 47.65,
    },
    {
      date: '2006-01-04',
      close: 47.25,
    },
    {
      date: '2006-01-03',
      close: 47.58,
    },
    {
      date: '2005-12-30',
      close: 47.15,
    },
    {
      date: '2005-12-29',
      close: 47.99,
    },
    {
      date: '2005-12-28',
      close: 48.06,
    },
    {
      date: '2005-12-27',
      close: 48.56,
    },
    {
      date: '2005-12-23',
      close: 49.22,
    },
    {
      date: '2005-12-22',
      close: 49.22,
    },
    {
      date: '2005-12-21',
      close: 48.97,
    },
    {
      date: '2005-12-20',
      close: 48.14,
    },
    {
      date: '2005-12-19',
      close: 48.37,
    },
    {
      date: '2005-12-16',
      close: 49.21,
    },
    {
      date: '2005-12-15',
      close: 49.48,
    },
    {
      date: '2005-12-14',
      close: 49.41,
    },
    {
      date: '2005-12-13',
      close: 49.5,
    },
    {
      date: '2005-12-12',
      close: 49.07,
    },
    {
      date: '2005-12-09',
      close: 48.74,
    },
    {
      date: '2005-12-08',
      close: 48.35,
    },
    {
      date: '2005-12-07',
      close: 48.83,
    },
    {
      date: '2005-12-06',
      close: 49.26,
    },
    {
      date: '2005-12-05',
      close: 48.83,
    },
    {
      date: '2005-12-02',
      close: 49.06,
    },
    {
      date: '2005-12-01',
      close: 49,
    },
    {
      date: '2005-11-30',
      close: 48.46,
    },
    {
      date: '2005-11-29',
      close: 48.55,
    },
    {
      date: '2005-11-28',
      close: 48.35,
    },
    {
      date: '2005-11-25',
      close: 48.06,
    },
    {
      date: '2005-11-23',
      close: 48.24,
    },
    {
      date: '2005-11-22',
      close: 48.85,
    },
    {
      date: '2005-11-21',
      close: 47.99,
    },
    {
      date: '2005-11-18',
      close: 47.98,
    },
    {
      date: '2005-11-17',
      close: 46.74,
    },
    {
      date: '2005-11-16',
      close: 45.3,
    },
    {
      date: '2005-11-15',
      close: 44.45,
    },
    {
      date: '2005-11-14',
      close: 42.53,
    },
    {
      date: '2005-11-11',
      close: 42.68,
    },
    {
      date: '2005-11-10',
      close: 42.18,
    },
    {
      date: '2005-11-09',
      close: 41.4,
    },
    {
      date: '2005-11-08',
      close: 41.95,
    },
    {
      date: '2005-11-07',
      close: 41.39,
    },
    {
      date: '2005-11-04',
      close: 41.09,
    },
    {
      date: '2005-11-03',
      close: 41.56,
    },
    {
      date: '2005-11-02',
      close: 40.75,
    },
    {
      date: '2005-11-01',
      close: 40.37,
    },
    {
      date: '2005-10-31',
      close: 39.86,
    },
    {
      date: '2005-10-28',
      close: 38.95,
    },
    {
      date: '2005-10-27',
      close: 39.06,
    },
    {
      date: '2005-10-26',
      close: 39.75,
    },
    {
      date: '2005-10-25',
      close: 46.17,
    },
    {
      date: '2005-10-24',
      close: 46.93,
    },
    {
      date: '2005-10-21',
      close: 45.95,
    },
    {
      date: '2005-10-20',
      close: 45.01,
    },
    {
      date: '2005-10-19',
      close: 45.86,
    },
    {
      date: '2005-10-18',
      close: 44.65,
    },
    {
      date: '2005-10-17',
      close: 45.02,
    },
    {
      date: '2005-10-14',
      close: 43.79,
    },
    {
      date: '2005-10-13',
      close: 42.62,
    },
    {
      date: '2005-10-12',
      close: 42.55,
    },
    {
      date: '2005-10-11',
      close: 43.4,
    },
    {
      date: '2005-10-10',
      close: 43.76,
    },
    {
      date: '2005-10-07',
      close: 43.72,
    },
    {
      date: '2005-10-06',
      close: 44.01,
    },
    {
      date: '2005-10-05',
      close: 44.49,
    },
    {
      date: '2005-10-04',
      close: 44.93,
    },
    {
      date: '2005-10-03',
      close: 46.01,
    },
    {
      date: '2005-09-30',
      close: 45.3,
    },
    {
      date: '2005-09-29',
      close: 44.79,
    },
    {
      date: '2005-09-28',
      close: 43.37,
    },
    {
      date: '2005-09-27',
      close: 43.16,
    },
    {
      date: '2005-09-26',
      close: 43.34,
    },
    {
      date: '2005-09-23',
      close: 42.19,
    },
    {
      date: '2005-09-22',
      close: 42.08,
    },
    {
      date: '2005-09-21',
      close: 41.25,
    },
    {
      date: '2005-09-20',
      close: 41.87,
    },
    {
      date: '2005-09-19',
      close: 42.75,
    },
    {
      date: '2005-09-16',
      close: 42.8,
    },
    {
      date: '2005-09-15',
      close: 42.71,
    },
    {
      date: '2005-09-14',
      close: 43.1,
    },
    {
      date: '2005-09-13',
      close: 43.93,
    },
    {
      date: '2005-09-12',
      close: 44.5,
    },
    {
      date: '2005-09-09',
      close: 42.95,
    },
    {
      date: '2005-09-08',
      close: 42.96,
    },
    {
      date: '2005-09-07',
      close: 43.73,
    },
    {
      date: '2005-09-06',
      close: 43.62,
    },
    {
      date: '2005-09-02',
      close: 41.51,
    },
    {
      date: '2005-09-01',
      close: 41.84,
    },
    {
      date: '2005-08-31',
      close: 42.7,
    },
    {
      date: '2005-08-30',
      close: 42.49,
    },
    {
      date: '2005-08-29',
      close: 42.79,
    },
    {
      date: '2005-08-26',
      close: 42.37,
    },
    {
      date: '2005-08-25',
      close: 42.31,
    },
    {
      date: '2005-08-24',
      close: 42.37,
    },
    {
      date: '2005-08-23',
      close: 43.42,
    },
    {
      date: '2005-08-22',
      close: 43.77,
    },
    {
      date: '2005-08-19',
      close: 43.72,
    },
    {
      date: '2005-08-18',
      close: 43.73,
    },
    {
      date: '2005-08-17',
      close: 44.12,
    },
    {
      date: '2005-08-16',
      close: 44.27,
    },
    {
      date: '2005-08-15',
      close: 45.04,
    },
    {
      date: '2005-08-12',
      close: 44.2,
    },
    {
      date: '2005-08-11',
      close: 45.21,
    },
    {
      date: '2005-08-10',
      close: 44.76,
    },
    {
      date: '2005-08-09',
      close: 45.93,
    },
    {
      date: '2005-08-08',
      close: 45.66,
    },
    {
      date: '2005-08-05',
      close: 45.27,
    },
    {
      date: '2005-08-04',
      close: 45.46,
    },
    {
      date: '2005-08-03',
      close: 46.11,
    },
    {
      date: '2005-08-02',
      close: 46.51,
    },
    {
      date: '2005-08-01',
      close: 44.93,
    },
    {
      date: '2005-07-29',
      close: 45.15,
    },
    {
      date: '2005-07-28',
      close: 45.68,
    },
    {
      date: '2005-07-27',
      close: 43.65,
    },
    {
      date: '2005-07-26',
      close: 37.74,
    },
    {
      date: '2005-07-25',
      close: 37.95,
    },
    {
      date: '2005-07-22',
      close: 37.95,
    },
    {
      date: '2005-07-21',
      close: 37.95,
    },
    {
      date: '2005-07-20',
      close: 38.17,
    },
    {
      date: '2005-07-19',
      close: 38.17,
    },
    {
      date: '2005-07-18',
      close: 37.19,
    },
    {
      date: '2005-07-15',
      close: 37.15,
    },
    {
      date: '2005-07-14',
      close: 37.19,
    },
    {
      date: '2005-07-13',
      close: 36.51,
    },
    {
      date: '2005-07-12',
      close: 36.31,
    },
    {
      date: '2005-07-11',
      close: 35.59,
    },
    {
      date: '2005-07-08',
      close: 34.74,
    },
    {
      date: '2005-07-07',
      close: 33.96,
    },
    {
      date: '2005-07-06',
      close: 34.06,
    },
    {
      date: '2005-07-05',
      close: 34.08,
    },
    {
      date: '2005-07-01',
      close: 32.91,
    },
    {
      date: '2005-06-30',
      close: 33.09,
    },
    {
      date: '2005-06-29',
      close: 33.35,
    },
    {
      date: '2005-06-28',
      close: 33.71,
    },
    {
      date: '2005-06-27',
      close: 34.5,
    },
    {
      date: '2005-06-24',
      close: 35.02,
    },
    {
      date: '2005-06-23',
      close: 35.43,
    },
    {
      date: '2005-06-22',
      close: 35.22,
    },
    {
      date: '2005-06-21',
      close: 35.38,
    },
    {
      date: '2005-06-20',
      close: 35.69,
    },
    {
      date: '2005-06-17',
      close: 35.31,
    },
    {
      date: '2005-06-16',
      close: 35.58,
    },
    {
      date: '2005-06-15',
      close: 35.24,
    },
    {
      date: '2005-06-14',
      close: 35.04,
    },
    {
      date: '2005-06-13',
      close: 34.87,
    },
    {
      date: '2005-06-10',
      close: 34.95,
    },
    {
      date: '2005-06-09',
      close: 35.2,
    },
    {
      date: '2005-06-08',
      close: 34.83,
    },
    {
      date: '2005-06-07',
      close: 35.35,
    },
    {
      date: '2005-06-06',
      close: 35.77,
    },
    {
      date: '2005-06-03',
      close: 35.59,
    },
    {
      date: '2005-06-02',
      close: 36.41,
    },
    {
      date: '2005-06-01',
      close: 36.5,
    },
    {
      date: '2005-05-31',
      close: 35.51,
    },
    {
      date: '2005-05-27',
      close: 35.5,
    },
    {
      date: '2005-05-26',
      close: 35.45,
    },
    {
      date: '2005-05-25',
      close: 35.25,
    },
    {
      date: '2005-05-24',
      close: 35.54,
    },
    {
      date: '2005-05-23',
      close: 35.68,
    },
    {
      date: '2005-05-20',
      close: 35.5,
    },
    {
      date: '2005-05-19',
      close: 35.59,
    },
    {
      date: '2005-05-18',
      close: 35.33,
    },
    {
      date: '2005-05-17',
      close: 34.73,
    },
    {
      date: '2005-05-16',
      close: 34.54,
    },
    {
      date: '2005-05-13',
      close: 33.9,
    },
    {
      date: '2005-05-12',
      close: 33.85,
    },
    {
      date: '2005-05-11',
      close: 33.82,
    },
    {
      date: '2005-05-10',
      close: 34.23,
    },
    {
      date: '2005-05-09',
      close: 34.64,
    },
    {
      date: '2005-05-06',
      close: 34.52,
    },
    {
      date: '2005-05-05',
      close: 33.96,
    },
    {
      date: '2005-05-04',
      close: 33.96,
    },
    {
      date: '2005-05-03',
      close: 33.21,
    },
    {
      date: '2005-05-02',
      close: 33.1,
    },
    {
      date: '2005-04-29',
      close: 32.36,
    },
    {
      date: '2005-04-28',
      close: 32.52,
    },
    {
      date: '2005-04-27',
      close: 31.72,
    },
    {
      date: '2005-04-26',
      close: 32.71,
    },
    {
      date: '2005-04-25',
      close: 33.53,
    },
    {
      date: '2005-04-22',
      close: 33.04,
    },
    {
      date: '2005-04-21',
      close: 33.73,
    },
    {
      date: '2005-04-20',
      close: 33.25,
    },
    {
      date: '2005-04-19',
      close: 32.78,
    },
    {
      date: '2005-04-18',
      close: 33,
    },
    {
      date: '2005-04-15',
      close: 33.02,
    },
    {
      date: '2005-04-14',
      close: 33.97,
    },
    {
      date: '2005-04-13',
      close: 34.3,
    },
    {
      date: '2005-04-12',
      close: 34.63,
    },
    {
      date: '2005-04-11',
      close: 34.6,
    },
    {
      date: '2005-04-08',
      close: 34.6,
    },
    {
      date: '2005-04-07',
      close: 34.9,
    },
    {
      date: '2005-04-06',
      close: 34.82,
    },
    {
      date: '2005-04-05',
      close: 35.28,
    },
    {
      date: '2005-04-04',
      close: 35,
    },
    {
      date: '2005-04-01',
      close: 34.01,
    },
    {
      date: '2005-03-31',
      close: 34.27,
    },
    {
      date: '2005-03-30',
      close: 34.32,
    },
    {
      date: '2005-03-29',
      close: 33.43,
    },
    {
      date: '2005-03-28',
      close: 33.39,
    },
    {
      date: '2005-03-24',
      close: 32.88,
    },
    {
      date: '2005-03-23',
      close: 33.18,
    },
    {
      date: '2005-03-22',
      close: 33.15,
    },
    {
      date: '2005-03-21',
      close: 33.67,
    },
    {
      date: '2005-03-18',
      close: 34.16,
    },
    {
      date: '2005-03-17',
      close: 33.97,
    },
    {
      date: '2005-03-16',
      close: 33.87,
    },
    {
      date: '2005-03-15',
      close: 34.18,
    },
    {
      date: '2005-03-14',
      close: 34.6,
    },
    {
      date: '2005-03-11',
      close: 34.75,
    },
    {
      date: '2005-03-10',
      close: 34.91,
    },
    {
      date: '2005-03-09',
      close: 35.4,
    },
    {
      date: '2005-03-08',
      close: 35.83,
    },
    {
      date: '2005-03-07',
      close: 36.32,
    },
    {
      date: '2005-03-04',
      close: 35.85,
    },
    {
      date: '2005-03-03',
      close: 35.65,
    },
    {
      date: '2005-03-02',
      close: 35.5,
    },
    {
      date: '2005-03-01',
      close: 35.39,
    },
    {
      date: '2005-02-28',
      close: 35.18,
    },
    {
      date: '2005-02-25',
      close: 34.99,
    },
    {
      date: '2005-02-24',
      close: 34.69,
    },
    {
      date: '2005-02-23',
      close: 34.14,
    },
    {
      date: '2005-02-22',
      close: 34.72,
    },
    {
      date: '2005-02-18',
      close: 35.31,
    },
    {
      date: '2005-02-17',
      close: 35.69,
    },
    {
      date: '2005-02-16',
      close: 35.66,
    },
    {
      date: '2005-02-15',
      close: 36.14,
    },
    {
      date: '2005-02-14',
      close: 36.03,
    },
    {
      date: '2005-02-11',
      close: 35.78,
    },
    {
      date: '2005-02-10',
      close: 35.78,
    },
    {
      date: '2005-02-09',
      close: 35.89,
    },
    {
      date: '2005-02-08',
      close: 36.3,
    },
    {
      date: '2005-02-07',
      close: 35.69,
    },
    {
      date: '2005-02-04',
      close: 35.72,
    },
    {
      date: '2005-02-03',
      close: 35.75,
    },
    {
      date: '2005-02-02',
      close: 41.88,
    },
    {
      date: '2005-02-01',
      close: 42.48,
    },
    {
      date: '2005-01-31',
      close: 43.22,
    },
    {
      date: '2005-01-28',
      close: 42.22,
    },
    {
      date: '2005-01-27',
      close: 42.31,
    },
    {
      date: '2005-01-26',
      close: 41.34,
    },
    {
      date: '2005-01-25',
      close: 40.94,
    },
    {
      date: '2005-01-24',
      close: 40.38,
    },
    {
      date: '2005-01-21',
      close: 41.16,
    },
    {
      date: '2005-01-20',
      close: 42.36,
    },
    {
      date: '2005-01-19',
      close: 43.96,
    },
    {
      date: '2005-01-18',
      close: 44.58,
    },
    {
      date: '2005-01-14',
      close: 44.55,
    },
    {
      date: '2005-01-13',
      close: 42.6,
    },
    {
      date: '2005-01-12',
      close: 42.3,
    },
    {
      date: '2005-01-11',
      close: 41.64,
    },
    {
      date: '2005-01-10',
      close: 41.84,
    },
    {
      date: '2005-01-07',
      close: 42.32,
    },
    {
      date: '2005-01-06',
      close: 41.05,
    },
    {
      date: '2005-01-05',
      close: 41.77,
    },
    {
      date: '2005-01-04',
      close: 42.14,
    },
    {
      date: '2005-01-03',
      close: 44.52,
    },
    {
      date: '2004-12-31',
      close: 44.29,
    },
    {
      date: '2004-12-30',
      close: 44.97,
    },
    {
      date: '2004-12-29',
      close: 44.82,
    },
    {
      date: '2004-12-28',
      close: 44.63,
    },
    {
      date: '2004-12-27',
      close: 42.25,
    },
    {
      date: '2004-12-23',
      close: 38.93,
    },
    {
      date: '2004-12-22',
      close: 39.52,
    },
    {
      date: '2004-12-21',
      close: 39.39,
    },
    {
      date: '2004-12-20',
      close: 38.95,
    },
    {
      date: '2004-12-17',
      close: 40.01,
    },
    {
      date: '2004-12-16',
      close: 40.05,
    },
    {
      date: '2004-12-15',
      close: 41,
    },
    {
      date: '2004-12-14',
      close: 40.44,
    },
    {
      date: '2004-12-13',
      close: 39.83,
    },
    {
      date: '2004-12-10',
      close: 39.05,
    },
    {
      date: '2004-12-09',
      close: 39.82,
    },
    {
      date: '2004-12-08',
      close: 38.72,
    },
    {
      date: '2004-12-07',
      close: 38.2,
    },
    {
      date: '2004-12-06',
      close: 39.49,
    },
    {
      date: '2004-12-03',
      close: 40.09,
    },
    {
      date: '2004-12-02',
      close: 40.17,
    },
    {
      date: '2004-12-01',
      close: 39.98,
    },
    {
      date: '2004-11-30',
      close: 39.68,
    },
    {
      date: '2004-11-29',
      close: 38.94,
    },
    {
      date: '2004-11-26',
      close: 39.09,
    },
    {
      date: '2004-11-24',
      close: 38.75,
    },
    {
      date: '2004-11-23',
      close: 38.31,
    },
    {
      date: '2004-11-22',
      close: 38.05,
    },
    {
      date: '2004-11-19',
      close: 38.55,
    },
    {
      date: '2004-11-18',
      close: 40.37,
    },
    {
      date: '2004-11-17',
      close: 39.9,
    },
    {
      date: '2004-11-16',
      close: 40.07,
    },
    {
      date: '2004-11-15',
      close: 40.89,
    },
    {
      date: '2004-11-12',
      close: 40.46,
    },
    {
      date: '2004-11-11',
      close: 38.83,
    },
    {
      date: '2004-11-10',
      close: 38.09,
    },
    {
      date: '2004-11-09',
      close: 37.4,
    },
    {
      date: '2004-11-08',
      close: 37.32,
    },
    {
      date: '2004-11-05',
      close: 36.56,
    },
    {
      date: '2004-11-04',
      close: 36.91,
    },
    {
      date: '2004-11-03',
      close: 35.92,
    },
    {
      date: '2004-11-02',
      close: 36.24,
    },
    {
      date: '2004-11-01',
      close: 35.1,
    },
    {
      date: '2004-10-29',
      close: 34.13,
    },
    {
      date: '2004-10-28',
      close: 34.45,
    },
    {
      date: '2004-10-27',
      close: 34.23,
    },
    {
      date: '2004-10-26',
      close: 33.83,
    },
    {
      date: '2004-10-25',
      close: 33.97,
    },
    {
      date: '2004-10-22',
      close: 34.6,
    },
    {
      date: '2004-10-21',
      close: 39.47,
    },
    {
      date: '2004-10-20',
      close: 38.35,
    },
    {
      date: '2004-10-19',
      close: 38.33,
    },
    {
      date: '2004-10-18',
      close: 39.27,
    },
    {
      date: '2004-10-15',
      close: 38.55,
    },
    {
      date: '2004-10-14',
      close: 39.1,
    },
    {
      date: '2004-10-13',
      close: 39.98,
    },
    {
      date: '2004-10-12',
      close: 40.22,
    },
    {
      date: '2004-10-11',
      close: 40.15,
    },
    {
      date: '2004-10-08',
      close: 40,
    },
    {
      date: '2004-10-07',
      close: 41.15,
    },
    {
      date: '2004-10-06',
      close: 41.36,
    },
    {
      date: '2004-10-05',
      close: 40.96,
    },
    {
      date: '2004-10-04',
      close: 41.01,
    },
    {
      date: '2004-10-01',
      close: 40.47,
    },
    {
      date: '2004-09-30',
      close: 40.86,
    },
    {
      date: '2004-09-29',
      close: 40.84,
    },
    {
      date: '2004-09-28',
      close: 39.43,
    },
    {
      date: '2004-09-27',
      close: 39.93,
    },
    {
      date: '2004-09-24',
      close: 40.94,
    },
    {
      date: '2004-09-23',
      close: 41.83,
    },
    {
      date: '2004-09-22',
      close: 41.38,
    },
    {
      date: '2004-09-21',
      close: 43.29,
    },
    {
      date: '2004-09-20',
      close: 43.27,
    },
    {
      date: '2004-09-17',
      close: 42.96,
    },
    {
      date: '2004-09-16',
      close: 42.57,
    },
    {
      date: '2004-09-15',
      close: 42.21,
    },
    {
      date: '2004-09-14',
      close: 42.67,
    },
    {
      date: '2004-09-13',
      close: 40.01,
    },
    {
      date: '2004-09-10',
      close: 38.57,
    },
    {
      date: '2004-09-09',
      close: 38.07,
    },
    {
      date: '2004-09-08',
      close: 38.01,
    },
    {
      date: '2004-09-07',
      close: 38.51,
    },
    {
      date: '2004-09-03',
      close: 38.74,
    },
    {
      date: '2004-09-02',
      close: 39.18,
    },
    {
      date: '2004-09-01',
      close: 38.24,
    },
    {
      date: '2004-08-31',
      close: 38.14,
    },
    {
      date: '2004-08-30',
      close: 38.31,
    },
    {
      date: '2004-08-27',
      close: 39.9,
    },
    {
      date: '2004-08-26',
      close: 40.19,
    },
    {
      date: '2004-08-25',
      close: 40.3,
    },
    {
      date: '2004-08-24',
      close: 39.05,
    },
    {
      date: '2004-08-23',
      close: 39.45,
    },
    {
      date: '2004-08-20',
      close: 39.51,
    },
    {
      date: '2004-08-19',
      close: 38.63,
    },
    {
      date: '2004-08-18',
      close: 39.36,
    },
    {
      date: '2004-08-17',
      close: 38.23,
    },
    {
      date: '2004-08-16',
      close: 37.95,
    },
    {
      date: '2004-08-13',
      close: 36.13,
    },
    {
      date: '2004-08-12',
      close: 36.29,
    },
    {
      date: '2004-08-11',
      close: 36.56,
    },
    {
      date: '2004-08-10',
      close: 37.1,
    },
    {
      date: '2004-08-09',
      close: 35.32,
    },
    {
      date: '2004-08-06',
      close: 35.49,
    },
    {
      date: '2004-08-05',
      close: 35.61,
    },
    {
      date: '2004-08-04',
      close: 37.12,
    },
    {
      date: '2004-08-03',
      close: 37.61,
    },
    {
      date: '2004-08-02',
      close: 38.3,
    },
    {
      date: '2004-07-30',
      close: 38.92,
    },
    {
      date: '2004-07-29',
      close: 38.58,
    },
    {
      date: '2004-07-28',
      close: 37.97,
    },
    {
      date: '2004-07-27',
      close: 39.11,
    },
    {
      date: '2004-07-26',
      close: 38.78,
    },
    {
      date: '2004-07-23',
      close: 39.98,
    },
    {
      date: '2004-07-22',
      close: 45.82,
    },
    {
      date: '2004-07-21',
      close: 44.76,
    },
    {
      date: '2004-07-20',
      close: 46.99,
    },
    {
      date: '2004-07-19',
      close: 46.02,
    },
    {
      date: '2004-07-16',
      close: 47.1,
    },
    {
      date: '2004-07-15',
      close: 48.67,
    },
    {
      date: '2004-07-14',
      close: 49.5,
    },
    {
      date: '2004-07-13',
      close: 49.6,
    },
    {
      date: '2004-07-12',
      close: 49.05,
    },
    {
      date: '2004-07-09',
      close: 48.32,
    },
    {
      date: '2004-07-08',
      close: 49.5,
    },
    {
      date: '2004-07-07',
      close: 51,
    },
    {
      date: '2004-07-06',
      close: 51.24,
    },
    {
      date: '2004-07-02',
      close: 52.59,
    },
    {
      date: '2004-07-01',
      close: 52.56,
    },
    {
      date: '2004-06-30',
      close: 54.4,
    },
    {
      date: '2004-06-29',
      close: 53.71,
    },
    {
      date: '2004-06-28',
      close: 53.39,
    },
    {
      date: '2004-06-25',
      close: 51.8,
    },
    {
      date: '2004-06-24',
      close: 51.02,
    },
    {
      date: '2004-06-23',
      close: 50.81,
    },
    {
      date: '2004-06-22',
      close: 49,
    },
    {
      date: '2004-06-21',
      close: 49.77,
    },
    {
      date: '2004-06-18',
      close: 49.6,
    },
    {
      date: '2004-06-17',
      close: 49.77,
    },
    {
      date: '2004-06-16',
      close: 50.57,
    },
    {
      date: '2004-06-15',
      close: 50.11,
    },
    {
      date: '2004-06-14',
      close: 49.25,
    },
    {
      date: '2004-06-10',
      close: 49.94,
    },
    {
      date: '2004-06-09',
      close: 50.24,
    },
    {
      date: '2004-06-08',
      close: 51.94,
    },
    {
      date: '2004-06-07',
      close: 51.76,
    },
    {
      date: '2004-06-04',
      close: 50.95,
    },
    {
      date: '2004-06-03',
      close: 49.4,
    },
    {
      date: '2004-06-02',
      close: 50.35,
    },
    {
      date: '2004-06-01',
      close: 50.23,
    },
    {
      date: '2004-05-28',
      close: 48.5,
    },
    {
      date: '2004-05-27',
      close: 47.62,
    },
    {
      date: '2004-05-26',
      close: 44.69,
    },
    {
      date: '2004-05-25',
      close: 43.62,
    },
    {
      date: '2004-05-24',
      close: 41.63,
    },
    {
      date: '2004-05-21',
      close: 41.17,
    },
    {
      date: '2004-05-20',
      close: 40.98,
    },
    {
      date: '2004-05-19',
      close: 41.69,
    },
    {
      date: '2004-05-18',
      close: 41.99,
    },
    {
      date: '2004-05-17',
      close: 42.08,
    },
    {
      date: '2004-05-14',
      close: 43.05,
    },
    {
      date: '2004-05-13',
      close: 43.61,
    },
    {
      date: '2004-05-12',
      close: 43.02,
    },
    {
      date: '2004-05-11',
      close: 42.7,
    },
    {
      date: '2004-05-10',
      close: 41.26,
    },
    {
      date: '2004-05-07',
      close: 41.9,
    },
    {
      date: '2004-05-06',
      close: 43.14,
    },
    {
      date: '2004-05-05',
      close: 44.26,
    },
    {
      date: '2004-05-04',
      close: 43.95,
    },
    {
      date: '2004-05-03',
      close: 44.41,
    },
    {
      date: '2004-04-30',
      close: 43.6,
    },
    {
      date: '2004-04-29',
      close: 46.19,
    },
    {
      date: '2004-04-28',
      close: 46.97,
    },
    {
      date: '2004-04-27',
      close: 48,
    },
    {
      date: '2004-04-26',
      close: 47.25,
    },
    {
      date: '2004-04-23',
      close: 46.29,
    },
    {
      date: '2004-04-22',
      close: 48.86,
    },
    {
      date: '2004-04-21',
      close: 45.72,
    },
    {
      date: '2004-04-20',
      close: 45.2,
    },
    {
      date: '2004-04-19',
      close: 47.11,
    },
    {
      date: '2004-04-16',
      close: 45.5,
    },
    {
      date: '2004-04-15',
      close: 46.99,
    },
    {
      date: '2004-04-14',
      close: 46.79,
    },
    {
      date: '2004-04-13',
      close: 46.58,
    },
    {
      date: '2004-04-12',
      close: 47.96,
    },
    {
      date: '2004-04-08',
      close: 48.1,
    },
    {
      date: '2004-04-07',
      close: 45.85,
    },
    {
      date: '2004-04-06',
      close: 46.44,
    },
    {
      date: '2004-04-05',
      close: 46.96,
    },
    {
      date: '2004-04-02',
      close: 46.09,
    },
    {
      date: '2004-04-01',
      close: 44.74,
    },
    {
      date: '2004-03-31',
      close: 43.28,
    },
    {
      date: '2004-03-30',
      close: 43.8,
    },
    {
      date: '2004-03-29',
      close: 42.76,
    },
    {
      date: '2004-03-26',
      close: 41.7,
    },
    {
      date: '2004-03-25',
      close: 41.99,
    },
    {
      date: '2004-03-24',
      close: 39.63,
    },
    {
      date: '2004-03-23',
      close: 40.23,
    },
    {
      date: '2004-03-22',
      close: 40.85,
    },
    {
      date: '2004-03-19',
      close: 42.8,
    },
    {
      date: '2004-03-18',
      close: 43.01,
    },
    {
      date: '2004-03-17',
      close: 42.8,
    },
    {
      date: '2004-03-16',
      close: 42.13,
    },
    {
      date: '2004-03-15',
      close: 41.08,
    },
    {
      date: '2004-03-12',
      close: 42.44,
    },
    {
      date: '2004-03-11',
      close: 41.28,
    },
    {
      date: '2004-03-10',
      close: 41.55,
    },
    {
      date: '2004-03-09',
      close: 42.71,
    },
    {
      date: '2004-03-08',
      close: 43.5,
    },
    {
      date: '2004-03-05',
      close: 44.09,
    },
    {
      date: '2004-03-04',
      close: 44.39,
    },
    {
      date: '2004-03-03',
      close: 43.17,
    },
    {
      date: '2004-03-02',
      close: 42.01,
    },
    {
      date: '2004-03-01',
      close: 42.97,
    },
    {
      date: '2004-02-27',
      close: 43.01,
    },
    {
      date: '2004-02-26',
      close: 43.65,
    },
    {
      date: '2004-02-25',
      close: 42.94,
    },
    {
      date: '2004-02-24',
      close: 42.32,
    },
    {
      date: '2004-02-23',
      close: 43.97,
    },
    {
      date: '2004-02-20',
      close: 45.17,
    },
    {
      date: '2004-02-19',
      close: 44.65,
    },
    {
      date: '2004-02-18',
      close: 44.87,
    },
    {
      date: '2004-02-17',
      close: 45.53,
    },
    {
      date: '2004-02-13',
      close: 46.38,
    },
    {
      date: '2004-02-12',
      close: 47.06,
    },
    {
      date: '2004-02-11',
      close: 47.14,
    },
    {
      date: '2004-02-10',
      close: 45.59,
    },
    {
      date: '2004-02-09',
      close: 45.86,
    },
    {
      date: '2004-02-06',
      close: 46.35,
    },
    {
      date: '2004-02-05',
      close: 46.04,
    },
    {
      date: '2004-02-04',
      close: 45.39,
    },
    {
      date: '2004-02-03',
      close: 44.94,
    },
    {
      date: '2004-02-02',
      close: 48.27,
    },
    {
      date: '2004-01-30',
      close: 50.4,
    },
    {
      date: '2004-01-29',
      close: 49.22,
    },
    {
      date: '2004-01-28',
      close: 51.96,
    },
    {
      date: '2004-01-27',
      close: 55.74,
    },
    {
      date: '2004-01-26',
      close: 57.03,
    },
    {
      date: '2004-01-23',
      close: 57.11,
    },
    {
      date: '2004-01-22',
      close: 57.18,
    },
    {
      date: '2004-01-21',
      close: 56.2,
    },
    {
      date: '2004-01-20',
      close: 56.61,
    },
    {
      date: '2004-01-16',
      close: 55.72,
    },
    {
      date: '2004-01-15',
      close: 56.18,
    },
    {
      date: '2004-01-14',
      close: 55.8,
    },
    {
      date: '2004-01-13',
      close: 54.91,
    },
    {
      date: '2004-01-12',
      close: 52.95,
    },
    {
      date: '2004-01-09',
      close: 51.59,
    },
    {
      date: '2004-01-08',
      close: 50.24,
    },
    {
      date: '2004-01-07',
      close: 51.9,
    },
    {
      date: '2004-01-06',
      close: 53.03,
    },
    {
      date: '2004-01-05',
      close: 53.27,
    },
    {
      date: '2004-01-02',
      close: 51.9,
    },
    {
      date: '2003-12-31',
      close: 52.62,
    },
    {
      date: '2003-12-30',
      close: 52.83,
    },
    {
      date: '2003-12-29',
      close: 53.47,
    },
    {
      date: '2003-12-26',
      close: 53.47,
    },
    {
      date: '2003-12-24',
      close: 53.32,
    },
    {
      date: '2003-12-23',
      close: 52.48,
    },
    {
      date: '2003-12-22',
      close: 49.89,
    },
    {
      date: '2003-12-19',
      close: 49.24,
    },
    {
      date: '2003-12-18',
      close: 48.75,
    },
    {
      date: '2003-12-17',
      close: 47.58,
    },
    {
      date: '2003-12-16',
      close: 49.5,
    },
    {
      date: '2003-12-15',
      close: 50.41,
    },
    {
      date: '2003-12-12',
      close: 50.99,
    },
    {
      date: '2003-12-11',
      close: 50.8,
    },
    {
      date: '2003-12-10',
      close: 49.2,
    },
    {
      date: '2003-12-09',
      close: 49.34,
    },
    {
      date: '2003-12-08',
      close: 51.08,
    },
    {
      date: '2003-12-05',
      close: 51.56,
    },
    {
      date: '2003-12-04',
      close: 51.8,
    },
    {
      date: '2003-12-03',
      close: 51.51,
    },
    {
      date: '2003-12-02',
      close: 53.93,
    },
    {
      date: '2003-12-01',
      close: 54.65,
    },
    {
      date: '2003-11-28',
      close: 53.97,
    },
    {
      date: '2003-11-26',
      close: 52.96,
    },
    {
      date: '2003-11-25',
      close: 52.47,
    },
    {
      date: '2003-11-24',
      close: 51.33,
    },
    {
      date: '2003-11-21',
      close: 48.58,
    },
    {
      date: '2003-11-20',
      close: 48.85,
    },
    {
      date: '2003-11-19',
      close: 49.53,
    },
    {
      date: '2003-11-18',
      close: 48.5,
    },
    {
      date: '2003-11-17',
      close: 50.36,
    },
    {
      date: '2003-11-14',
      close: 52.45,
    },
    {
      date: '2003-11-13',
      close: 54.8,
    },
    {
      date: '2003-11-12',
      close: 54.13,
    },
    {
      date: '2003-11-11',
      close: 52.23,
    },
    {
      date: '2003-11-10',
      close: 51.98,
    },
    {
      date: '2003-11-07',
      close: 54.31,
    },
    {
      date: '2003-11-06',
      close: 54.99,
    },
    {
      date: '2003-11-05',
      close: 56.74,
    },
    {
      date: '2003-11-04',
      close: 56.86,
    },
    {
      date: '2003-11-03',
      close: 56.74,
    },
    {
      date: '2003-10-31',
      close: 54.43,
    },
    {
      date: '2003-10-30',
      close: 55.83,
    },
    {
      date: '2003-10-29',
      close: 56.69,
    },
    {
      date: '2003-10-28',
      close: 56.73,
    },
    {
      date: '2003-10-27',
      close: 54.82,
    },
    {
      date: '2003-10-24',
      close: 54.51,
    },
    {
      date: '2003-10-23',
      close: 54.32,
    },
    {
      date: '2003-10-22',
      close: 54.03,
    },
    {
      date: '2003-10-21',
      close: 59.35,
    },
    {
      date: '2003-10-20',
      close: 59.59,
    },
    {
      date: '2003-10-17',
      close: 59.69,
    },
    {
      date: '2003-10-16',
      close: 59.91,
    },
    {
      date: '2003-10-15',
      close: 58.55,
    },
    {
      date: '2003-10-14',
      close: 59.91,
    },
    {
      date: '2003-10-13',
      close: 58.3,
    },
    {
      date: '2003-10-10',
      close: 58.06,
    },
    {
      date: '2003-10-09',
      close: 57.86,
    },
    {
      date: '2003-10-08',
      close: 55.7,
    },
    {
      date: '2003-10-07',
      close: 54.91,
    },
    {
      date: '2003-10-06',
      close: 54.15,
    },
    {
      date: '2003-10-03',
      close: 52.89,
    },
    {
      date: '2003-10-02',
      close: 50.09,
    },
    {
      date: '2003-10-01',
      close: 49.12,
    },
    {
      date: '2003-09-30',
      close: 48.43,
    },
    {
      date: '2003-09-29',
      close: 49.86,
    },
    {
      date: '2003-09-26',
      close: 48.56,
    },
    {
      date: '2003-09-25',
      close: 50.05,
    },
    {
      date: '2003-09-24',
      close: 49.61,
    },
    {
      date: '2003-09-23',
      close: 50.44,
    },
    {
      date: '2003-09-22',
      close: 47.47,
    },
    {
      date: '2003-09-19',
      close: 47.58,
    },
    {
      date: '2003-09-18',
      close: 47.89,
    },
    {
      date: '2003-09-17',
      close: 46.16,
    },
    {
      date: '2003-09-16',
      close: 46.24,
    },
    {
      date: '2003-09-15',
      close: 45.51,
    },
    {
      date: '2003-09-12',
      close: 45.68,
    },
    {
      date: '2003-09-11',
      close: 45.19,
    },
    {
      date: '2003-09-10',
      close: 46.22,
    },
    {
      date: '2003-09-09',
      close: 46.68,
    },
    {
      date: '2003-09-08',
      close: 47.28,
    },
    {
      date: '2003-09-05',
      close: 46.52,
    },
    {
      date: '2003-09-04',
      close: 47.29,
    },
    {
      date: '2003-09-03',
      close: 46.19,
    },
    {
      date: '2003-09-02',
      close: 47.33,
    },
    {
      date: '2003-08-29',
      close: 46.32,
    },
    {
      date: '2003-08-28',
      close: 45.94,
    },
    {
      date: '2003-08-27',
      close: 45.88,
    },
    {
      date: '2003-08-26',
      close: 45.93,
    },
    {
      date: '2003-08-25',
      close: 45.85,
    },
    {
      date: '2003-08-22',
      close: 45.22,
    },
    {
      date: '2003-08-21',
      close: 45.7,
    },
    {
      date: '2003-08-20',
      close: 43.76,
    },
    {
      date: '2003-08-19',
      close: 43.57,
    },
    {
      date: '2003-08-18',
      close: 43.02,
    },
    {
      date: '2003-08-15',
      close: 40.1,
    },
    {
      date: '2003-08-14',
      close: 40.3,
    },
    {
      date: '2003-08-13',
      close: 40.21,
    },
    {
      date: '2003-08-12',
      close: 39.85,
    },
    {
      date: '2003-08-11',
      close: 38.93,
    },
    {
      date: '2003-08-08',
      close: 39.15,
    },
    {
      date: '2003-08-07',
      close: 39.01,
    },
    {
      date: '2003-08-06',
      close: 38.94,
    },
    {
      date: '2003-08-05',
      close: 38.67,
    },
    {
      date: '2003-08-04',
      close: 39.65,
    },
    {
      date: '2003-08-01',
      close: 40.03,
    },
    {
      date: '2003-07-31',
      close: 41.64,
    },
    {
      date: '2003-07-30',
      close: 40.66,
    },
    {
      date: '2003-07-29',
      close: 41.39,
    },
    {
      date: '2003-07-28',
      close: 42.08,
    },
    {
      date: '2003-07-25',
      close: 41.6,
    },
    {
      date: '2003-07-24',
      close: 41.31,
    },
    {
      date: '2003-07-23',
      close: 40.11,
    },
    {
      date: '2003-07-22',
      close: 34.87,
    },
    {
      date: '2003-07-21',
      close: 35.33,
    },
    {
      date: '2003-07-18',
      close: 34.98,
    },
    {
      date: '2003-07-17',
      close: 36.32,
    },
    {
      date: '2003-07-16',
      close: 37.68,
    },
    {
      date: '2003-07-15',
      close: 38.43,
    },
    {
      date: '2003-07-14',
      close: 39.27,
    },
    {
      date: '2003-07-11',
      close: 37.65,
    },
    {
      date: '2003-07-10',
      close: 38.25,
    },
    {
      date: '2003-07-09',
      close: 40.5,
    },
    {
      date: '2003-07-08',
      close: 40.51,
    },
    {
      date: '2003-07-07',
      close: 39.05,
    },
    {
      date: '2003-07-03',
      close: 37.92,
    },
    {
      date: '2003-07-02',
      close: 37.85,
    },
    {
      date: '2003-07-01',
      close: 37.25,
    },
    {
      date: '2003-06-30',
      close: 36.32,
    },
    {
      date: '2003-06-27',
      close: 36.3,
    },
    {
      date: '2003-06-26',
      close: 36.72,
    },
    {
      date: '2003-06-25',
      close: 35.39,
    },
    {
      date: '2003-06-24',
      close: 35.4,
    },
    {
      date: '2003-06-23',
      close: 35.58,
    },
    {
      date: '2003-06-20',
      close: 35.04,
    },
    {
      date: '2003-06-19',
      close: 35.5,
    },
    {
      date: '2003-06-18',
      close: 35.85,
    },
    {
      date: '2003-06-17',
      close: 35.84,
    },
    {
      date: '2003-06-16',
      close: 35.84,
    },
    {
      date: '2003-06-13',
      close: 34.13,
    },
    {
      date: '2003-06-12',
      close: 35.2,
    },
    {
      date: '2003-06-11',
      close: 34.65,
    },
    {
      date: '2003-06-10',
      close: 34.07,
    },
    {
      date: '2003-06-09',
      close: 33.68,
    },
    {
      date: '2003-06-06',
      close: 33.35,
    },
    {
      date: '2003-06-05',
      close: 35.52,
    },
    {
      date: '2003-06-04',
      close: 35.39,
    },
    {
      date: '2003-06-03',
      close: 35.23,
    },
    {
      date: '2003-06-02',
      close: 35.4,
    },
    {
      date: '2003-05-30',
      close: 35.89,
    },
    {
      date: '2003-05-29',
      close: 35.55,
    },
    {
      date: '2003-05-28',
      close: 34.86,
    },
    {
      date: '2003-05-27',
      close: 34.85,
    },
    {
      date: '2003-05-23',
      close: 32.72,
    },
    {
      date: '2003-05-22',
      close: 33,
    },
    {
      date: '2003-05-21',
      close: 31.75,
    },
    {
      date: '2003-05-20',
      close: 31.48,
    },
    {
      date: '2003-05-19',
      close: 31.56,
    },
    {
      date: '2003-05-16',
      close: 33.05,
    },
    {
      date: '2003-05-15',
      close: 32.63,
    },
    {
      date: '2003-05-14',
      close: 32.6,
    },
    {
      date: '2003-05-13',
      close: 32.95,
    },
    {
      date: '2003-05-12',
      close: 31.7,
    },
    {
      date: '2003-05-09',
      close: 30.96,
    },
    {
      date: '2003-05-08',
      close: 30.45,
    },
    {
      date: '2003-05-07',
      close: 30.7,
    },
    {
      date: '2003-05-06',
      close: 30.88,
    },
    {
      date: '2003-05-05',
      close: 29.96,
    },
    {
      date: '2003-05-02',
      close: 29.43,
    },
    {
      date: '2003-05-01',
      close: 28.66,
    },
    {
      date: '2003-04-30',
      close: 28.69,
    },
    {
      date: '2003-04-29',
      close: 28.89,
    },
    {
      date: '2003-04-28',
      close: 29.11,
    },
    {
      date: '2003-04-25',
      close: 28.97,
    },
    {
      date: '2003-04-24',
      close: 25.12,
    },
    {
      date: '2003-04-23',
      close: 25.43,
    },
    {
      date: '2003-04-22',
      close: 25.58,
    },
    {
      date: '2003-04-21',
      close: 25.25,
    },
    {
      date: '2003-04-17',
      close: 24.99,
    },
    {
      date: '2003-04-16',
      close: 24.38,
    },
    {
      date: '2003-04-15',
      close: 25.13,
    },
    {
      date: '2003-04-14',
      close: 25.05,
    },
    {
      date: '2003-04-11',
      close: 25.75,
    },
    {
      date: '2003-04-10',
      close: 25.67,
    },
    {
      date: '2003-04-09',
      close: 25.06,
    },
    {
      date: '2003-04-08',
      close: 26.52,
    },
    {
      date: '2003-04-07',
      close: 26.82,
    },
    {
      date: '2003-04-04',
      close: 26.22,
    },
    {
      date: '2003-04-03',
      close: 26.65,
    },
    {
      date: '2003-04-02',
      close: 26.38,
    },
    {
      date: '2003-04-01',
      close: 25.54,
    },
    {
      date: '2003-03-31',
      close: 26.03,
    },
    {
      date: '2003-03-28',
      close: 27.18,
    },
    {
      date: '2003-03-27',
      close: 27.77,
    },
    {
      date: '2003-03-26',
      close: 27.76,
    },
    {
      date: '2003-03-25',
      close: 26.9,
    },
    {
      date: '2003-03-24',
      close: 26.23,
    },
    {
      date: '2003-03-21',
      close: 27.93,
    },
    {
      date: '2003-03-20',
      close: 27.45,
    },
    {
      date: '2003-03-19',
      close: 26.54,
    },
    {
      date: '2003-03-18',
      close: 26.78,
    },
    {
      date: '2003-03-17',
      close: 26.55,
    },
    {
      date: '2003-03-14',
      close: 24.71,
    },
    {
      date: '2003-03-13',
      close: 24.42,
    },
    {
      date: '2003-03-12',
      close: 23.36,
    },
    {
      date: '2003-03-11',
      close: 22.78,
    },
    {
      date: '2003-03-10',
      close: 22.88,
    },
    {
      date: '2003-03-07',
      close: 22.97,
    },
    {
      date: '2003-03-06',
      close: 22.69,
    },
    {
      date: '2003-03-05',
      close: 22.42,
    },
    {
      date: '2003-03-04',
      close: 22.27,
    },
    {
      date: '2003-03-03',
      close: 21.81,
    },
    {
      date: '2003-02-28',
      close: 22.01,
    },
    {
      date: '2003-02-27',
      close: 21.62,
    },
    {
      date: '2003-02-26',
      close: 21.64,
    },
    {
      date: '2003-02-25',
      close: 21.88,
    },
    {
      date: '2003-02-24',
      close: 21.78,
    },
    {
      date: '2003-02-21',
      close: 21.78,
    },
    {
      date: '2003-02-20',
      close: 21.36,
    },
    {
      date: '2003-02-19',
      close: 21.19,
    },
    {
      date: '2003-02-18',
      close: 21.39,
    },
    {
      date: '2003-02-14',
      close: 20.06,
    },
    {
      date: '2003-02-13',
      close: 20.06,
    },
    {
      date: '2003-02-12',
      close: 21.13,
    },
    {
      date: '2003-02-11',
      close: 20.78,
    },
    {
      date: '2003-02-10',
      close: 21.4,
    },
    {
      date: '2003-02-07',
      close: 21.44,
    },
    {
      date: '2003-02-06',
      close: 22.09,
    },
    {
      date: '2003-02-05',
      close: 22.17,
    },
    {
      date: '2003-02-04',
      close: 22.05,
    },
    {
      date: '2003-02-03',
      close: 22.16,
    },
    {
      date: '2003-01-31',
      close: 21.85,
    },
    {
      date: '2003-01-30',
      close: 21.82,
    },
    {
      date: '2003-01-29',
      close: 22.08,
    },
    {
      date: '2003-01-28',
      close: 21.62,
    },
    {
      date: '2003-01-27',
      close: 21.78,
    },
    {
      date: '2003-01-24',
      close: 22.11,
    },
    {
      date: '2003-01-23',
      close: 21.79,
    },
    {
      date: '2003-01-22',
      close: 21.17,
    },
    {
      date: '2003-01-21',
      close: 21.08,
    },
    {
      date: '2003-01-17',
      close: 21.4,
    },
    {
      date: '2003-01-16',
      close: 21.8,
    },
    {
      date: '2003-01-15',
      close: 22.27,
    },
    {
      date: '2003-01-14',
      close: 22.74,
    },
    {
      date: '2003-01-13',
      close: 22.04,
    },
    {
      date: '2003-01-10',
      close: 21.32,
    },
    {
      date: '2003-01-09',
      close: 21.45,
    },
    {
      date: '2003-01-08',
      close: 21.02,
    },
    {
      date: '2003-01-07',
      close: 21.55,
    },
    {
      date: '2003-01-06',
      close: 20.7,
    },
    {
      date: '2003-01-03',
      close: 20.52,
    },
    {
      date: '2003-01-02',
      close: 19.57,
    },
    {
      date: '2002-12-31',
      close: 18.89,
    },
    {
      date: '2002-12-30',
      close: 19.25,
    },
    {
      date: '2002-12-27',
      close: 18.86,
    },
    {
      date: '2002-12-26',
      close: 20.3,
    },
    {
      date: '2002-12-24',
      close: 21.88,
    },
    {
      date: '2002-12-23',
      close: 22.24,
    },
    {
      date: '2002-12-20',
      close: 21.93,
    },
    {
      date: '2002-12-19',
      close: 21.69,
    },
    {
      date: '2002-12-18',
      close: 22.1,
    },
    {
      date: '2002-12-17',
      close: 22.46,
    },
    {
      date: '2002-12-16',
      close: 22.51,
    },
    {
      date: '2002-12-13',
      close: 22.18,
    },
    {
      date: '2002-12-12',
      close: 22.3,
    },
    {
      date: '2002-12-11',
      close: 22.13,
    },
    {
      date: '2002-12-10',
      close: 21.86,
    },
    {
      date: '2002-12-09',
      close: 21.68,
    },
    {
      date: '2002-12-06',
      close: 22.61,
    },
    {
      date: '2002-12-05',
      close: 22.58,
    },
    {
      date: '2002-12-04',
      close: 23.39,
    },
    {
      date: '2002-12-03',
      close: 23.74,
    },
    {
      date: '2002-12-02',
      close: 24.11,
    },
    {
      date: '2002-11-29',
      close: 23.35,
    },
    {
      date: '2002-11-27',
      close: 24.08,
    },
    {
      date: '2002-11-26',
      close: 23.4,
    },
    {
      date: '2002-11-25',
      close: 24.25,
    },
    {
      date: '2002-11-22',
      close: 23.99,
    },
    {
      date: '2002-11-21',
      close: 23.4,
    },
    {
      date: '2002-11-20',
      close: 22.9,
    },
    {
      date: '2002-11-19',
      close: 21.29,
    },
    {
      date: '2002-11-18',
      close: 22.42,
    },
    {
      date: '2002-11-15',
      close: 22.21,
    },
    {
      date: '2002-11-14',
      close: 21.21,
    },
    {
      date: '2002-11-13',
      close: 20.41,
    },
    {
      date: '2002-11-12',
      close: 19.82,
    },
    {
      date: '2002-11-11',
      close: 19,
    },
    {
      date: '2002-11-08',
      close: 19.51,
    },
    {
      date: '2002-11-07',
      close: 19.12,
    },
    {
      date: '2002-11-06',
      close: 19.34,
    },
    {
      date: '2002-11-05',
      close: 18.72,
    },
    {
      date: '2002-11-04',
      close: 18.78,
    },
    {
      date: '2002-11-01',
      close: 19.8,
    },
    {
      date: '2002-10-31',
      close: 19.36,
    },
    {
      date: '2002-10-30',
      close: 19.08,
    },
    {
      date: '2002-10-29',
      close: 18.57,
    },
    {
      date: '2002-10-28',
      close: 18.59,
    },
    {
      date: '2002-10-25',
      close: 19.3,
    },
    {
      date: '2002-10-24',
      close: 19.86,
    },
    {
      date: '2002-10-23',
      close: 19.75,
    },
    {
      date: '2002-10-22',
      close: 19.38,
    },
    {
      date: '2002-10-21',
      close: 19.26,
    },
    {
      date: '2002-10-18',
      close: 19.04,
    },
    {
      date: '2002-10-17',
      close: 18.74,
    },
    {
      date: '2002-10-16',
      close: 19.49,
    },
    {
      date: '2002-10-15',
      close: 18.94,
    },
    {
      date: '2002-10-14',
      close: 19.2,
    },
    {
      date: '2002-10-11',
      close: 18.46,
    },
    {
      date: '2002-10-10',
      close: 17.96,
    },
    {
      date: '2002-10-09',
      close: 16.86,
    },
    {
      date: '2002-10-08',
      close: 16.94,
    },
    {
      date: '2002-10-07',
      close: 16.64,
    },
    {
      date: '2002-10-04',
      close: 16.55,
    },
    {
      date: '2002-10-03',
      close: 16.75,
    },
    {
      date: '2002-10-02',
      close: 17.01,
    },
    {
      date: '2002-10-01',
      close: 16.95,
    },
    {
      date: '2002-09-30',
      close: 15.93,
    },
    {
      date: '2002-09-27',
      close: 17.01,
    },
    {
      date: '2002-09-26',
      close: 17.15,
    },
    {
      date: '2002-09-25',
      close: 15.73,
    },
    {
      date: '2002-09-24',
      close: 15.93,
    },
    {
      date: '2002-09-23',
      close: 16.05,
    },
    {
      date: '2002-09-20',
      close: 15.86,
    },
    {
      date: '2002-09-19',
      close: 17.21,
    },
    {
      date: '2002-09-18',
      close: 17.73,
    },
    {
      date: '2002-09-17',
      close: 17.35,
    },
    {
      date: '2002-09-16',
      close: 16.71,
    },
    {
      date: '2002-09-13',
      close: 16.61,
    },
    {
      date: '2002-09-12',
      close: 16.75,
    },
    {
      date: '2002-09-11',
      close: 17.11,
    },
    {
      date: '2002-09-10',
      close: 17.13,
    },
    {
      date: '2002-09-09',
      close: 16.51,
    },
    {
      date: '2002-09-06',
      close: 15.31,
    },
    {
      date: '2002-09-05',
      close: 14.25,
    },
    {
      date: '2002-09-04',
      close: 14.83,
    },
    {
      date: '2002-09-03',
      close: 14.6,
    },
    {
      date: '2002-08-30',
      close: 14.94,
    },
    {
      date: '2002-08-29',
      close: 15.14,
    },
    {
      date: '2002-08-28',
      close: 14.57,
    },
    {
      date: '2002-08-27',
      close: 14.52,
    },
    {
      date: '2002-08-26',
      close: 14.93,
    },
    {
      date: '2002-08-23',
      close: 15.17,
    },
    {
      date: '2002-08-22',
      close: 15.73,
    },
    {
      date: '2002-08-21',
      close: 15.38,
    },
    {
      date: '2002-08-20',
      close: 15.98,
    },
    {
      date: '2002-08-19',
      close: 15.5,
    },
    {
      date: '2002-08-16',
      close: 14.9,
    },
    {
      date: '2002-08-15',
      close: 14.62,
    },
    {
      date: '2002-08-14',
      close: 13.91,
    },
    {
      date: '2002-08-13',
      close: 13.93,
    },
    {
      date: '2002-08-12',
      close: 14.46,
    },
    {
      date: '2002-08-09',
      close: 14.26,
    },
    {
      date: '2002-08-08',
      close: 13.9,
    },
    {
      date: '2002-08-07',
      close: 13.6,
    },
    {
      date: '2002-08-06',
      close: 13.74,
    },
    {
      date: '2002-08-05',
      close: 12.87,
    },
    {
      date: '2002-08-02',
      close: 13.84,
    },
    {
      date: '2002-08-01',
      close: 14.16,
    },
    {
      date: '2002-07-31',
      close: 14.45,
    },
    {
      date: '2002-07-30',
      close: 14.77,
    },
    {
      date: '2002-07-29',
      close: 14.33,
    },
    {
      date: '2002-07-26',
      close: 12.93,
    },
    {
      date: '2002-07-25',
      close: 12.49,
    },
    {
      date: '2002-07-24',
      close: 14.1,
    },
    {
      date: '2002-07-23',
      close: 14.55,
    },
    {
      date: '2002-07-22',
      close: 15.5,
    },
    {
      date: '2002-07-19',
      close: 15.29,
    },
    {
      date: '2002-07-18',
      close: 15.55,
    },
    {
      date: '2002-07-17',
      close: 16.16,
    },
    {
      date: '2002-07-16',
      close: 16.29,
    },
    {
      date: '2002-07-15',
      close: 15.94,
    },
    {
      date: '2002-07-12',
      close: 15.43,
    },
    {
      date: '2002-07-11',
      close: 15.55,
    },
    {
      date: '2002-07-10',
      close: 14.96,
    },
    {
      date: '2002-07-09',
      close: 15.6,
    },
    {
      date: '2002-07-08',
      close: 14.94,
    },
    {
      date: '2002-07-05',
      close: 15.21,
    },
    {
      date: '2002-07-03',
      close: 14.25,
    },
    {
      date: '2002-07-02',
      close: 13.32,
    },
    {
      date: '2002-07-01',
      close: 13.55,
    },
    {
      date: '2002-06-28',
      close: 16.25,
    },
    {
      date: '2002-06-27',
      close: 15.86,
    },
    {
      date: '2002-06-26',
      close: 15.85,
    },
    {
      date: '2002-06-25',
      close: 15.34,
    },
    {
      date: '2002-06-24',
      close: 17.51,
    },
    {
      date: '2002-06-21',
      close: 17.53,
    },
    {
      date: '2002-06-20',
      close: 17.55,
    },
    {
      date: '2002-06-19',
      close: 18.3,
    },
    {
      date: '2002-06-18',
      close: 18.78,
    },
    {
      date: '2002-06-17',
      close: 18.41,
    },
    {
      date: '2002-06-14',
      close: 16.82,
    },
    {
      date: '2002-06-13',
      close: 17.43,
    },
    {
      date: '2002-06-12',
      close: 17.08,
    },
    {
      date: '2002-06-11',
      close: 17.14,
    },
    {
      date: '2002-06-10',
      close: 17.3,
    },
    {
      date: '2002-06-07',
      close: 18.58,
    },
    {
      date: '2002-06-06',
      close: 18.17,
    },
    {
      date: '2002-06-05',
      close: 17.99,
    },
    {
      date: '2002-06-04',
      close: 17.97,
    },
    {
      date: '2002-06-03',
      close: 17.96,
    },
    {
      date: '2002-05-31',
      close: 18.23,
    },
    {
      date: '2002-05-30',
      close: 18.37,
    },
    {
      date: '2002-05-29',
      close: 18.91,
    },
    {
      date: '2002-05-28',
      close: 19.06,
    },
    {
      date: '2002-05-24',
      close: 19.47,
    },
    {
      date: '2002-05-23',
      close: 19.45,
    },
    {
      date: '2002-05-22',
      close: 18.75,
    },
    {
      date: '2002-05-21',
      close: 18.76,
    },
    {
      date: '2002-05-20',
      close: 19.39,
    },
    {
      date: '2002-05-17',
      close: 19.16,
    },
    {
      date: '2002-05-16',
      close: 19.61,
    },
    {
      date: '2002-05-15',
      close: 19.94,
    },
    {
      date: '2002-05-14',
      close: 18.81,
    },
    {
      date: '2002-05-13',
      close: 17.32,
    },
    {
      date: '2002-05-10',
      close: 16.94,
    },
    {
      date: '2002-05-09',
      close: 17.73,
    },
    {
      date: '2002-05-08',
      close: 17.32,
    },
    {
      date: '2002-05-07',
      close: 16.11,
    },
    {
      date: '2002-05-06',
      close: 16.12,
    },
    {
      date: '2002-05-03',
      close: 16.05,
    },
    {
      date: '2002-05-02',
      close: 16.32,
    },
    {
      date: '2002-05-01',
      close: 16.49,
    },
    {
      date: '2002-04-30',
      close: 16.69,
    },
    {
      date: '2002-04-29',
      close: 16.18,
    },
    {
      date: '2002-04-26',
      close: 16.91,
    },
    {
      date: '2002-04-25',
      close: 16.82,
    },
    {
      date: '2002-04-24',
      close: 16.79,
    },
    {
      date: '2002-04-23',
      close: 14.06,
    },
    {
      date: '2002-04-22',
      close: 14.31,
    },
    {
      date: '2002-04-19',
      close: 14.53,
    },
    {
      date: '2002-04-18',
      close: 14.26,
    },
    {
      date: '2002-04-17',
      close: 14.82,
    },
    {
      date: '2002-04-16',
      close: 14.01,
    },
    {
      date: '2002-04-15',
      close: 13.89,
    },
    {
      date: '2002-04-12',
      close: 13.31,
    },
    {
      date: '2002-04-11',
      close: 12.74,
    },
    {
      date: '2002-04-10',
      close: 13.48,
    },
    {
      date: '2002-04-09',
      close: 13.6,
    },
    {
      date: '2002-04-08',
      close: 13.95,
    },
    {
      date: '2002-04-05',
      close: 13.5,
    },
    {
      date: '2002-04-04',
      close: 13.54,
    },
    {
      date: '2002-04-03',
      close: 13.67,
    },
    {
      date: '2002-04-02',
      close: 14.25,
    },
    {
      date: '2002-04-01',
      close: 14.8,
    },
    {
      date: '2002-03-28',
      close: 14.3,
    },
    {
      date: '2002-03-27',
      close: 14.25,
    },
    {
      date: '2002-03-26',
      close: 14.83,
    },
    {
      date: '2002-03-25',
      close: 14.74,
    },
    {
      date: '2002-03-22',
      close: 15.53,
    },
    {
      date: '2002-03-21',
      close: 15.17,
    },
    {
      date: '2002-03-20',
      close: 14.5,
    },
    {
      date: '2002-03-19',
      close: 14.66,
    },
    {
      date: '2002-03-18',
      close: 15.01,
    },
    {
      date: '2002-03-15',
      close: 14.03,
    },
    {
      date: '2002-03-14',
      close: 14.48,
    },
    {
      date: '2002-03-13',
      close: 15.74,
    },
    {
      date: '2002-03-12',
      close: 16.31,
    },
    {
      date: '2002-03-11',
      close: 16.71,
    },
    {
      date: '2002-03-08',
      close: 16.35,
    },
    {
      date: '2002-03-07',
      close: 15.62,
    },
    {
      date: '2002-03-06',
      close: 16.33,
    },
    {
      date: '2002-03-05',
      close: 15.97,
    },
    {
      date: '2002-03-04',
      close: 16.48,
    },
    {
      date: '2002-03-01',
      close: 15.39,
    },
    {
      date: '2002-02-28',
      close: 14.1,
    },
    {
      date: '2002-02-27',
      close: 14.27,
    },
    {
      date: '2002-02-26',
      close: 14.4,
    },
    {
      date: '2002-02-25',
      close: 13.73,
    },
    {
      date: '2002-02-22',
      close: 13.07,
    },
    {
      date: '2002-02-21',
      close: 13.26,
    },
    {
      date: '2002-02-20',
      close: 12.96,
    },
    {
      date: '2002-02-19',
      close: 13.01,
    },
    {
      date: '2002-02-15',
      close: 13.41,
    },
    {
      date: '2002-02-14',
      close: 13.88,
    },
    {
      date: '2002-02-13',
      close: 13.29,
    },
    {
      date: '2002-02-12',
      close: 12.9,
    },
    {
      date: '2002-02-11',
      close: 13.3,
    },
    {
      date: '2002-02-08',
      close: 12.52,
    },
    {
      date: '2002-02-07',
      close: 11.24,
    },
    {
      date: '2002-02-06',
      close: 11.26,
    },
    {
      date: '2002-02-05',
      close: 11.5,
    },
    {
      date: '2002-02-04',
      close: 12.53,
    },
    {
      date: '2002-02-01',
      close: 13.73,
    },
    {
      date: '2002-01-31',
      close: 14.19,
    },
    {
      date: '2002-01-30',
      close: 13.9,
    },
    {
      date: '2002-01-29',
      close: 14.22,
    },
    {
      date: '2002-01-28',
      close: 15.5,
    },
    {
      date: '2002-01-25',
      close: 14.44,
    },
    {
      date: '2002-01-24',
      close: 14.01,
    },
    {
      date: '2002-01-23',
      close: 12.47,
    },
    {
      date: '2002-01-22',
      close: 12.6,
    },
    {
      date: '2002-01-18',
      close: 10.16,
    },
    {
      date: '2002-01-17',
      close: 9.74,
    },
    {
      date: '2002-01-16',
      close: 9.13,
    },
    {
      date: '2002-01-15',
      close: 10.29,
    },
    {
      date: '2002-01-14',
      close: 10.11,
    },
    {
      date: '2002-01-11',
      close: 11.03,
    },
    {
      date: '2002-01-10',
      close: 11.04,
    },
    {
      date: '2002-01-09',
      close: 11.53,
    },
    {
      date: '2002-01-08',
      close: 11.85,
    },
    {
      date: '2002-01-07',
      close: 12.34,
    },
    {
      date: '2002-01-04',
      close: 12.25,
    },
    {
      date: '2002-01-03',
      close: 11.9,
    },
    {
      date: '2002-01-02',
      close: 10.96,
    },
    {
      date: '2001-12-31',
      close: 10.82,
    },
    {
      date: '2001-12-28',
      close: 10.9,
    },
    {
      date: '2001-12-27',
      close: 10.6,
    },
    {
      date: '2001-12-26',
      close: 11.1,
    },
    {
      date: '2001-12-24',
      close: 9.83,
    },
    {
      date: '2001-12-21',
      close: 10,
    },
    {
      date: '2001-12-20',
      close: 10.15,
    },
    {
      date: '2001-12-19',
      close: 10.71,
    },
    {
      date: '2001-12-18',
      close: 10.86,
    },
    {
      date: '2001-12-17',
      close: 10.81,
    },
    {
      date: '2001-12-14',
      close: 11,
    },
    {
      date: '2001-12-13',
      close: 10.89,
    },
    {
      date: '2001-12-12',
      close: 11.91,
    },
    {
      date: '2001-12-11',
      close: 12.24,
    },
    {
      date: '2001-12-10',
      close: 11.65,
    },
    {
      date: '2001-12-07',
      close: 11.71,
    },
    {
      date: '2001-12-06',
      close: 12.1,
    },
    {
      date: '2001-12-05',
      close: 11.76,
    },
    {
      date: '2001-12-04',
      close: 11.93,
    },
    {
      date: '2001-12-03',
      close: 10.49,
    },
    {
      date: '2001-11-30',
      close: 11.32,
    },
    {
      date: '2001-11-29',
      close: 11.15,
    },
    {
      date: '2001-11-28',
      close: 11.59,
    },
    {
      date: '2001-11-27',
      close: 11.48,
    },
    {
      date: '2001-11-26',
      close: 12.21,
    },
    {
      date: '2001-11-23',
      close: 9.08,
    },
    {
      date: '2001-11-21',
      close: 8.8,
    },
    {
      date: '2001-11-20',
      close: 8.6,
    },
    {
      date: '2001-11-19',
      close: 9.19,
    },
    {
      date: '2001-11-16',
      close: 8.95,
    },
    {
      date: '2001-11-15',
      close: 9.05,
    },
    {
      date: '2001-11-14',
      close: 9.49,
    },
    {
      date: '2001-11-13',
      close: 7.29,
    },
    {
      date: '2001-11-12',
      close: 7.05,
    },
    {
      date: '2001-11-09',
      close: 7.12,
    },
    {
      date: '2001-11-08',
      close: 6.97,
    },
    {
      date: '2001-11-07',
      close: 7.43,
    },
    {
      date: '2001-11-06',
      close: 7.05,
    },
    {
      date: '2001-11-05',
      close: 6.99,
    },
    {
      date: '2001-11-02',
      close: 6.71,
    },
    {
      date: '2001-11-01',
      close: 6.95,
    },
    {
      date: '2001-10-31',
      close: 6.98,
    },
    {
      date: '2001-10-30',
      close: 6.42,
    },
    {
      date: '2001-10-29',
      close: 7.05,
    },
    {
      date: '2001-10-26',
      close: 7.56,
    },
    {
      date: '2001-10-25',
      close: 7.77,
    },
    {
      date: '2001-10-24',
      close: 7.64,
    },
    {
      date: '2001-10-23',
      close: 9.55,
    },
    {
      date: '2001-10-22',
      close: 8.77,
    },
    {
      date: '2001-10-19',
      close: 8.01,
    },
    {
      date: '2001-10-18',
      close: 8.47,
    },
    {
      date: '2001-10-17',
      close: 8.92,
    },
    {
      date: '2001-10-16',
      close: 9.56,
    },
    {
      date: '2001-10-15',
      close: 8.88,
    },
    {
      date: '2001-10-12',
      close: 8.07,
    },
    {
      date: '2001-10-11',
      close: 7.85,
    },
    {
      date: '2001-10-10',
      close: 7.26,
    },
    {
      date: '2001-10-09',
      close: 6.91,
    },
    {
      date: '2001-10-08',
      close: 7.12,
    },
    {
      date: '2001-10-05',
      close: 7.2,
    },
    {
      date: '2001-10-04',
      close: 7.04,
    },
    {
      date: '2001-10-03',
      close: 6.76,
    },
    {
      date: '2001-10-02',
      close: 6.08,
    },
    {
      date: '2001-10-01',
      close: 6.01,
    },
    {
      date: '2001-09-28',
      close: 5.97,
    },
    {
      date: '2001-09-27',
      close: 6.2,
    },
    {
      date: '2001-09-26',
      close: 6.35,
    },
    {
      date: '2001-09-25',
      close: 7.09,
    },
    {
      date: '2001-09-24',
      close: 7.46,
    },
    {
      date: '2001-09-21',
      close: 7.48,
    },
    {
      date: '2001-09-20',
      close: 7.48,
    },
    {
      date: '2001-09-19',
      close: 7.31,
    },
    {
      date: '2001-09-18',
      close: 7.29,
    },
    {
      date: '2001-09-17',
      close: 7.49,
    },
    {
      date: '2001-09-10',
      close: 8.63,
    },
    {
      date: '2001-09-07',
      close: 8.51,
    },
    {
      date: '2001-09-06',
      close: 8.15,
    },
    {
      date: '2001-09-05',
      close: 7.65,
    },
    {
      date: '2001-09-04',
      close: 8.59,
    },
    {
      date: '2001-08-31',
      close: 8.94,
    },
    {
      date: '2001-08-30',
      close: 8.69,
    },
    {
      date: '2001-08-29',
      close: 9.19,
    },
    {
      date: '2001-08-28',
      close: 9.97,
    },
    {
      date: '2001-08-27',
      close: 10.13,
    },
    {
      date: '2001-08-24',
      close: 10.23,
    },
    {
      date: '2001-08-23',
      close: 9.63,
    },
    {
      date: '2001-08-22',
      close: 10.2,
    },
    {
      date: '2001-08-21',
      close: 9.89,
    },
    {
      date: '2001-08-20',
      close: 10.4,
    },
    {
      date: '2001-08-17',
      close: 9.99,
    },
    {
      date: '2001-08-16',
      close: 9.81,
    },
    {
      date: '2001-08-15',
      close: 10.08,
    },
    {
      date: '2001-08-14',
      close: 10.53,
    },
    {
      date: '2001-08-13',
      close: 10.12,
    },
    {
      date: '2001-08-10',
      close: 9.95,
    },
    {
      date: '2001-08-09',
      close: 10.46,
    },
    {
      date: '2001-08-08',
      close: 11.11,
    },
    {
      date: '2001-08-07',
      close: 11.6,
    },
    {
      date: '2001-08-06',
      close: 11.9,
    },
    {
      date: '2001-08-03',
      close: 12.15,
    },
    {
      date: '2001-08-02',
      close: 12.19,
    },
    {
      date: '2001-08-01',
      close: 12.5,
    },
    {
      date: '2001-07-31',
      close: 12.49,
    },
    {
      date: '2001-07-30',
      close: 12.55,
    },
    {
      date: '2001-07-27',
      close: 12.25,
    },
    {
      date: '2001-07-26',
      close: 12.33,
    },
    {
      date: '2001-07-25',
      close: 11.51,
    },
    {
      date: '2001-07-24',
      close: 12.06,
    },
    {
      date: '2001-07-23',
      close: 16.03,
    },
    {
      date: '2001-07-20',
      close: 16.98,
    },
    {
      date: '2001-07-19',
      close: 16.49,
    },
    {
      date: '2001-07-18',
      close: 15.96,
    },
    {
      date: '2001-07-17',
      close: 16.35,
    },
    {
      date: '2001-07-16',
      close: 16.01,
    },
    {
      date: '2001-07-13',
      close: 16.98,
    },
    {
      date: '2001-07-12',
      close: 16.49,
    },
    {
      date: '2001-07-11',
      close: 15.34,
    },
    {
      date: '2001-07-10',
      close: 15.61,
    },
    {
      date: '2001-07-09',
      close: 15.81,
    },
    {
      date: '2001-07-06',
      close: 15.27,
    },
    {
      date: '2001-07-05',
      close: 15.27,
    },
    {
      date: '2001-07-03',
      close: 14.13,
    },
    {
      date: '2001-07-02',
      close: 14.53,
    },
    {
      date: '2001-06-29',
      close: 14.15,
    },
    {
      date: '2001-06-28',
      close: 14.36,
    },
    {
      date: '2001-06-27',
      close: 14.04,
    },
    {
      date: '2001-06-26',
      close: 13.25,
    },
    {
      date: '2001-06-25',
      close: 12.81,
    },
    {
      date: '2001-06-22',
      close: 12.4,
    },
    {
      date: '2001-06-21',
      close: 13.08,
    },
    {
      date: '2001-06-20',
      close: 12.53,
    },
    {
      date: '2001-06-19',
      close: 11.36,
    },
    {
      date: '2001-06-18',
      close: 11.83,
    },
    {
      date: '2001-06-15',
      close: 12.49,
    },
    {
      date: '2001-06-14',
      close: 13.29,
    },
    {
      date: '2001-06-13',
      close: 14.12,
    },
    {
      date: '2001-06-12',
      close: 14.64,
    },
    {
      date: '2001-06-11',
      close: 14.86,
    },
    {
      date: '2001-06-08',
      close: 15.7,
    },
    {
      date: '2001-06-07',
      close: 16.13,
    },
    {
      date: '2001-06-06',
      close: 15.99,
    },
    {
      date: '2001-06-05',
      close: 16.44,
    },
    {
      date: '2001-06-04',
      close: 16.91,
    },
    {
      date: '2001-06-01',
      close: 16.95,
    },
    {
      date: '2001-05-31',
      close: 16.69,
    },
    {
      date: '2001-05-30',
      close: 15.66,
    },
    {
      date: '2001-05-29',
      close: 17.22,
    },
    {
      date: '2001-05-25',
      close: 17.09,
    },
    {
      date: '2001-05-24',
      close: 16.75,
    },
    {
      date: '2001-05-23',
      close: 15.6,
    },
    {
      date: '2001-05-22',
      close: 16.25,
    },
    {
      date: '2001-05-21',
      close: 16.38,
    },
    {
      date: '2001-05-18',
      close: 14.72,
    },
    {
      date: '2001-05-17',
      close: 14.78,
    },
    {
      date: '2001-05-16',
      close: 14.13,
    },
    {
      date: '2001-05-15',
      close: 13.54,
    },
    {
      date: '2001-05-14',
      close: 13.33,
    },
    {
      date: '2001-05-11',
      close: 14.68,
    },
    {
      date: '2001-05-10',
      close: 14.62,
    },
    {
      date: '2001-05-09',
      close: 15.01,
    },
    {
      date: '2001-05-08',
      close: 16.18,
    },
    {
      date: '2001-05-07',
      close: 16.92,
    },
    {
      date: '2001-05-04',
      close: 17.56,
    },
    {
      date: '2001-05-03',
      close: 16.75,
    },
    {
      date: '2001-05-02',
      close: 17.11,
    },
    {
      date: '2001-05-01',
      close: 16.89,
    },
    {
      date: '2001-04-30',
      close: 15.78,
    },
    {
      date: '2001-04-27',
      close: 15.27,
    },
    {
      date: '2001-04-26',
      close: 15.43,
    },
    {
      date: '2001-04-25',
      close: 16.09,
    },
    {
      date: '2001-04-24',
      close: 15.68,
    },
    {
      date: '2001-04-23',
      close: 16.2,
    },
    {
      date: '2001-04-20',
      close: 15.78,
    },
    {
      date: '2001-04-19',
      close: 15.99,
    },
    {
      date: '2001-04-18',
      close: 16.54,
    },
    {
      date: '2001-04-17',
      close: 14.74,
    },
    {
      date: '2001-04-16',
      close: 14.03,
    },
    {
      date: '2001-04-12',
      close: 14.67,
    },
    {
      date: '2001-04-11',
      close: 13.32,
    },
    {
      date: '2001-04-10',
      close: 12.01,
    },
    {
      date: '2001-04-09',
      close: 11.18,
    },
    {
      date: '2001-04-06',
      close: 8.37,
    },
    {
      date: '2001-04-05',
      close: 9.12,
    },
    {
      date: '2001-04-04',
      close: 8.4,
    },
    {
      date: '2001-04-03',
      close: 8.63,
    },
    {
      date: '2001-04-02',
      close: 9.1,
    },
    {
      date: '2001-03-30',
      close: 10.23,
    },
    {
      date: '2001-03-29',
      close: 10,
    },
    {
      date: '2001-03-28',
      close: 10.8,
    },
    {
      date: '2001-03-27',
      close: 11.64,
    },
    {
      date: '2001-03-26',
      close: 10.94,
    },
    {
      date: '2001-03-23',
      close: 10.1875,
    },
    {
      date: '2001-03-22',
      close: 10.1875,
    },
    {
      date: '2001-03-21',
      close: 10,
    },
    {
      date: '2001-03-20',
      close: 10.25,
    },
    {
      date: '2001-03-19',
      close: 10.5,
    },
    {
      date: '2001-03-16',
      close: 11,
    },
    {
      date: '2001-03-15',
      close: 10.875,
    },
    {
      date: '2001-03-14',
      close: 10.625,
    },
    {
      date: '2001-03-13',
      close: 11,
    },
    {
      date: '2001-03-12',
      close: 10.625,
    },
    {
      date: '2001-03-09',
      close: 12.25,
    },
    {
      date: '2001-03-08',
      close: 11.6875,
    },
    {
      date: '2001-03-07',
      close: 12.25,
    },
    {
      date: '2001-03-06',
      close: 11.875,
    },
    {
      date: '2001-03-05',
      close: 12.625,
    },
    {
      date: '2001-03-02',
      close: 10,
    },
    {
      date: '2001-03-01',
      close: 10.4375,
    },
    {
      date: '2001-02-28',
      close: 10.1875,
    },
    {
      date: '2001-02-27',
      close: 11.75,
    },
    {
      date: '2001-02-26',
      close: 11.9375,
    },
    {
      date: '2001-02-23',
      close: 11.8125,
    },
    {
      date: '2001-02-22',
      close: 11.9375,
    },
    {
      date: '2001-02-21',
      close: 11.9375,
    },
    {
      date: '2001-02-20',
      close: 12.5,
    },
    {
      date: '2001-02-16',
      close: 13.6875,
    },
    {
      date: '2001-02-15',
      close: 14.5,
    },
    {
      date: '2001-02-14',
      close: 14.4375,
    },
    {
      date: '2001-02-13',
      close: 13.75,
    },
    {
      date: '2001-02-12',
      close: 14.5,
    },
    {
      date: '2001-02-09',
      close: 13.375,
    },
    {
      date: '2001-02-08',
      close: 14.375,
    },
    {
      date: '2001-02-07',
      close: 15,
    },
    {
      date: '2001-02-06',
      close: 15.8125,
    },
    {
      date: '2001-02-05',
      close: 14.4375,
    },
    {
      date: '2001-02-02',
      close: 14.375,
    },
    {
      date: '2001-02-01',
      close: 16.25,
    },
    {
      date: '2001-01-31',
      close: 17.3125,
    },
    {
      date: '2001-01-30',
      close: 18.9375,
    },
    {
      date: '2001-01-29',
      close: 20.125,
    },
    {
      date: '2001-01-26',
      close: 19.5,
    },
    {
      date: '2001-01-25',
      close: 19,
    },
    {
      date: '2001-01-24',
      close: 21.875,
    },
    {
      date: '2001-01-23',
      close: 18.9531,
    },
    {
      date: '2001-01-22',
      close: 18.5,
    },
    {
      date: '2001-01-19',
      close: 19.9375,
    },
    {
      date: '2001-01-18',
      close: 19.5,
    },
    {
      date: '2001-01-17',
      close: 18.375,
    },
    {
      date: '2001-01-16',
      close: 18.0625,
    },
    {
      date: '2001-01-12',
      close: 17.6875,
    },
    {
      date: '2001-01-11',
      close: 17,
    },
    {
      date: '2001-01-10',
      close: 16.5,
    },
    {
      date: '2001-01-09',
      close: 16.375,
    },
    {
      date: '2001-01-08',
      close: 14.9375,
    },
    {
      date: '2001-01-05',
      close: 14.5625,
    },
    {
      date: '2001-01-04',
      close: 15.5,
    },
    {
      date: '2001-01-03',
      close: 17.5625,
    },
    {
      date: '2001-01-02',
      close: 13.875,
    },
    {
      date: '2000-12-29',
      close: 15.5625,
    },
    {
      date: '2000-12-28',
      close: 17.375,
    },
    {
      date: '2000-12-27',
      close: 16.875,
    },
    {
      date: '2000-12-26',
      close: 16.9375,
    },
    {
      date: '2000-12-22',
      close: 15.5625,
    },
    {
      date: '2000-12-21',
      close: 15.1875,
    },
    {
      date: '2000-12-20',
      close: 16.6875,
    },
    {
      date: '2000-12-19',
      close: 18.25,
    },
    {
      date: '2000-12-18',
      close: 19.875,
    },
    {
      date: '2000-12-15',
      close: 22.875,
    },
    {
      date: '2000-12-14',
      close: 22.6875,
    },
    {
      date: '2000-12-13',
      close: 23.75,
    },
    {
      date: '2000-12-12',
      close: 25.875,
    },
    {
      date: '2000-12-11',
      close: 25.3125,
    },
    {
      date: '2000-12-08',
      close: 23.4375,
    },
    {
      date: '2000-12-07',
      close: 21.375,
    },
    {
      date: '2000-12-06',
      close: 23.625,
    },
    {
      date: '2000-12-05',
      close: 25.375,
    },
    {
      date: '2000-12-04',
      close: 26.5625,
    },
    {
      date: '2000-12-01',
      close: 24.625,
    },
    {
      date: '2000-11-30',
      close: 24.6875,
    },
    {
      date: '2000-11-29',
      close: 26.9375,
    },
    {
      date: '2000-11-28',
      close: 25.0312,
    },
    {
      date: '2000-11-27',
      close: 28,
    },
    {
      date: '2000-11-24',
      close: 28.9375,
    },
    {
      date: '2000-11-22',
      close: 25.1875,
    },
    {
      date: '2000-11-21',
      close: 24.25,
    },
    {
      date: '2000-11-20',
      close: 25.8125,
    },
    {
      date: '2000-11-17',
      close: 27.4375,
    },
    {
      date: '2000-11-16',
      close: 27.8125,
    },
    {
      date: '2000-11-15',
      close: 29.5,
    },
    {
      date: '2000-11-14',
      close: 28.9375,
    },
    {
      date: '2000-11-13',
      close: 27.8125,
    },
    {
      date: '2000-11-10',
      close: 30.0625,
    },
    {
      date: '2000-11-09',
      close: 31.25,
    },
    {
      date: '2000-11-08',
      close: 33.875,
    },
    {
      date: '2000-11-07',
      close: 36.9375,
    },
    {
      date: '2000-11-06',
      close: 36.5625,
    },
    {
      date: '2000-11-03',
      close: 37.5625,
    },
    {
      date: '2000-11-02',
      close: 39.75,
    },
    {
      date: '2000-11-01',
      close: 37.375,
    },
    {
      date: '2000-10-31',
      close: 36.625,
    },
    {
      date: '2000-10-30',
      close: 32.875,
    },
    {
      date: '2000-10-27',
      close: 35.625,
    },
    {
      date: '2000-10-26',
      close: 36.875,
    },
    {
      date: '2000-10-25',
      close: 31.875,
    },
    {
      date: '2000-10-24',
      close: 29.5625,
    },
    {
      date: '2000-10-23',
      close: 30,
    },
    {
      date: '2000-10-20',
      close: 30.8125,
    },
    {
      date: '2000-10-19',
      close: 27.75,
    },
    {
      date: '2000-10-18',
      close: 25.125,
    },
    {
      date: '2000-10-17',
      close: 21.9375,
    },
    {
      date: '2000-10-16',
      close: 24.3125,
    },
    {
      date: '2000-10-13',
      close: 28.4375,
    },
    {
      date: '2000-10-12',
      close: 25.125,
    },
    {
      date: '2000-10-11',
      close: 27.8125,
    },
    {
      date: '2000-10-10',
      close: 30.4375,
    },
    {
      date: '2000-10-09',
      close: 30.0625,
    },
    {
      date: '2000-10-06',
      close: 31.5625,
    },
    {
      date: '2000-10-05',
      close: 33.5625,
    },
    {
      date: '2000-10-04',
      close: 36,
    },
    {
      date: '2000-10-03',
      close: 35.0625,
    },
    {
      date: '2000-10-02',
      close: 35.875,
    },
    {
      date: '2000-09-29',
      close: 38.4375,
    },
    {
      date: '2000-09-28',
      close: 40,
    },
    {
      date: '2000-09-27',
      close: 37.875,
    },
    {
      date: '2000-09-26',
      close: 39.75,
    },
    {
      date: '2000-09-25',
      close: 40.375,
    },
    {
      date: '2000-09-22',
      close: 41.4375,
    },
    {
      date: '2000-09-21',
      close: 40.0625,
    },
    {
      date: '2000-09-20',
      close: 37.5,
    },
    {
      date: '2000-09-19',
      close: 40.75,
    },
    {
      date: '2000-09-18',
      close: 42.8125,
    },
    {
      date: '2000-09-15',
      close: 43.625,
    },
    {
      date: '2000-09-14',
      close: 44.875,
    },
    {
      date: '2000-09-13',
      close: 42.4375,
    },
    {
      date: '2000-09-12',
      close: 42.6875,
    },
    {
      date: '2000-09-11',
      close: 42.375,
    },
    {
      date: '2000-09-08',
      close: 42.9375,
    },
    {
      date: '2000-09-07',
      close: 43.5,
    },
    {
      date: '2000-09-06',
      close: 45.875,
    },
    {
      date: '2000-09-05',
      close: 45.6875,
    },
    {
      date: '2000-09-01',
      close: 41.5,
    },
    {
      date: '2000-08-31',
      close: 41.5,
    },
    {
      date: '2000-08-30',
      close: 42.9375,
    },
    {
      date: '2000-08-29',
      close: 39.625,
    },
    {
      date: '2000-08-28',
      close: 39.125,
    },
    {
      date: '2000-08-25',
      close: 39.9375,
    },
    {
      date: '2000-08-24',
      close: 39.375,
    },
    {
      date: '2000-08-23',
      close: 38.8125,
    },
    {
      date: '2000-08-22',
      close: 36.5,
    },
    {
      date: '2000-08-21',
      close: 37.5,
    },
    {
      date: '2000-08-18',
      close: 39,
    },
    {
      date: '2000-08-17',
      close: 38.25,
    },
    {
      date: '2000-08-16',
      close: 38.625,
    },
    {
      date: '2000-08-15',
      close: 37.5625,
    },
    {
      date: '2000-08-14',
      close: 34.875,
    },
    {
      date: '2000-08-11',
      close: 33.6875,
    },
    {
      date: '2000-08-10',
      close: 30.4375,
    },
    {
      date: '2000-08-09',
      close: 30.875,
    },
    {
      date: '2000-08-08',
      close: 32.9375,
    },
    {
      date: '2000-08-07',
      close: 33.8125,
    },
    {
      date: '2000-08-04',
      close: 32.5,
    },
    {
      date: '2000-08-03',
      close: 31.5,
    },
    {
      date: '2000-08-02',
      close: 30.8125,
    },
    {
      date: '2000-08-01',
      close: 30.25,
    },
    {
      date: '2000-07-31',
      close: 30.125,
    },
    {
      date: '2000-07-28',
      close: 30,
    },
    {
      date: '2000-07-27',
      close: 31.375,
    },
    {
      date: '2000-07-26',
      close: 36.0625,
    },
    {
      date: '2000-07-25',
      close: 37.625,
    },
    {
      date: '2000-07-24',
      close: 38.75,
    },
    {
      date: '2000-07-21',
      close: 41.125,
    },
    {
      date: '2000-07-20',
      close: 40.3125,
    },
    {
      date: '2000-07-19',
      close: 40.875,
    },
    {
      date: '2000-07-18',
      close: 41.75,
    },
    {
      date: '2000-07-17',
      close: 41.125,
    },
    {
      date: '2000-07-14',
      close: 42.625,
    },
    {
      date: '2000-07-13',
      close: 35,
    },
    {
      date: '2000-07-12',
      close: 35.0625,
    },
    {
      date: '2000-07-11',
      close: 33.125,
    },
    {
      date: '2000-07-10',
      close: 35.0625,
    },
    {
      date: '2000-07-07',
      close: 36.125,
    },
    {
      date: '2000-07-06',
      close: 36.0625,
    },
    {
      date: '2000-07-05',
      close: 36.5,
    },
    {
      date: '2000-07-03',
      close: 37,
    },
    {
      date: '2000-06-30',
      close: 36.3125,
    },
    {
      date: '2000-06-29',
      close: 37.125,
    },
    {
      date: '2000-06-28',
      close: 37.875,
    },
    {
      date: '2000-06-27',
      close: 36.5,
    },
    {
      date: '2000-06-26',
      close: 33.9375,
    },
    {
      date: '2000-06-23',
      close: 33.875,
    },
    {
      date: '2000-06-22',
      close: 42,
    },
    {
      date: '2000-06-21',
      close: 46.0625,
    },
    {
      date: '2000-06-20',
      close: 46.125,
    },
    {
      date: '2000-06-19',
      close: 45.3125,
    },
    {
      date: '2000-06-16',
      close: 46,
    },
    {
      date: '2000-06-15',
      close: 46.3125,
    },
    {
      date: '2000-06-14',
      close: 46.4375,
    },
    {
      date: '2000-06-13',
      close: 49,
    },
    {
      date: '2000-06-12',
      close: 48.4375,
    },
    {
      date: '2000-06-09',
      close: 52.1875,
    },
    {
      date: '2000-06-08',
      close: 51.875,
    },
    {
      date: '2000-06-07',
      close: 51.8125,
    },
    {
      date: '2000-06-06',
      close: 50.5625,
    },
    {
      date: '2000-06-05',
      close: 54.5,
    },
    {
      date: '2000-06-02',
      close: 57.875,
    },
    {
      date: '2000-06-01',
      close: 50.1875,
    },
    {
      date: '2000-05-31',
      close: 48.3125,
    },
    {
      date: '2000-05-30',
      close: 51.75,
    },
    {
      date: '2000-05-26',
      close: 46.5,
    },
    {
      date: '2000-05-25',
      close: 45.5,
    },
    {
      date: '2000-05-24',
      close: 48.5625,
    },
    {
      date: '2000-05-23',
      close: 46.6875,
    },
    {
      date: '2000-05-22',
      close: 51.875,
    },
    {
      date: '2000-05-19',
      close: 52.625,
    },
    {
      date: '2000-05-18',
      close: 55.375,
    },
    {
      date: '2000-05-17',
      close: 61,
    },
    {
      date: '2000-05-16',
      close: 59.0625,
    },
    {
      date: '2000-05-15',
      close: 56.0625,
    },
    {
      date: '2000-05-12',
      close: 53.75,
    },
    {
      date: '2000-05-11',
      close: 54.875,
    },
    {
      date: '2000-05-10',
      close: 53.3125,
    },
    {
      date: '2000-05-09',
      close: 56.25,
    },
    {
      date: '2000-05-08',
      close: 56.0156,
    },
    {
      date: '2000-05-05',
      close: 58.5,
    },
    {
      date: '2000-05-04',
      close: 55.0625,
    },
    {
      date: '2000-05-03',
      close: 54.125,
    },
    {
      date: '2000-05-02',
      close: 56.125,
    },
    {
      date: '2000-05-01',
      close: 59.9375,
    },
    {
      date: '2000-04-28',
      close: 55.1875,
    },
    {
      date: '2000-04-27',
      close: 52.875,
    },
    {
      date: '2000-04-26',
      close: 53.5,
    },
    {
      date: '2000-04-25',
      close: 52.4375,
    },
    {
      date: '2000-04-24',
      close: 49.8125,
    },
    {
      date: '2000-04-20',
      close: 52.375,
    },
    {
      date: '2000-04-19',
      close: 53.4375,
    },
    {
      date: '2000-04-18',
      close: 54.9375,
    },
    {
      date: '2000-04-17',
      close: 47.0625,
    },
    {
      date: '2000-04-14',
      close: 46.875,
    },
    {
      date: '2000-04-13',
      close: 48,
    },
    {
      date: '2000-04-12',
      close: 56.375,
    },
    {
      date: '2000-04-11',
      close: 63.375,
    },
    {
      date: '2000-04-10',
      close: 63.375,
    },
    {
      date: '2000-04-07',
      close: 67.5625,
    },
    {
      date: '2000-04-06',
      close: 64.25,
    },
    {
      date: '2000-04-05',
      close: 62.1875,
    },
    {
      date: '2000-04-04',
      close: 63.9375,
    },
    {
      date: '2000-04-03',
      close: 63.5625,
    },
    {
      date: '2000-03-31',
      close: 67,
    },
    {
      date: '2000-03-30',
      close: 66.5,
    },
    {
      date: '2000-03-29',
      close: 66.25,
    },
    {
      date: '2000-03-28',
      close: 70.125,
    },
    {
      date: '2000-03-27',
      close: 73.125,
    },
    {
      date: '2000-03-24',
      close: 72.6875,
    },
    {
      date: '2000-03-23',
      close: 67.6875,
    },
    {
      date: '2000-03-22',
      close: 70.6875,
    },
    {
      date: '2000-03-21',
      close: 72.375,
    },
    {
      date: '2000-03-20',
      close: 64.1875,
    },
    {
      date: '2000-03-17',
      close: 64.8125,
    },
    {
      date: '2000-03-16',
      close: 66.25,
    },
    {
      date: '2000-03-15',
      close: 63.75,
    },
    {
      date: '2000-03-14',
      close: 65.625,
    },
    {
      date: '2000-03-13',
      close: 65.3125,
    },
    {
      date: '2000-03-10',
      close: 66.875,
    },
    {
      date: '2000-03-09',
      close: 68.8125,
    },
    {
      date: '2000-03-08',
      close: 63.625,
    },
    {
      date: '2000-03-07',
      close: 63.5,
    },
    {
      date: '2000-03-06',
      close: 63.9375,
    },
    {
      date: '2000-03-03',
      close: 62.5,
    },
    {
      date: '2000-03-02',
      close: 62.5625,
    },
    {
      date: '2000-03-01',
      close: 65.875,
    },
    {
      date: '2000-02-29',
      close: 68.875,
    },
    {
      date: '2000-02-28',
      close: 65.75,
    },
    {
      date: '2000-02-25',
      close: 69.125,
    },
    {
      date: '2000-02-24',
      close: 68.4375,
    },
    {
      date: '2000-02-23',
      close: 70.4375,
    },
    {
      date: '2000-02-22',
      close: 63.5625,
    },
    {
      date: '2000-02-18',
      close: 64.75,
    },
    {
      date: '2000-02-17',
      close: 69,
    },
    {
      date: '2000-02-16',
      close: 70.6875,
    },
    {
      date: '2000-02-15',
      close: 73.8125,
    },
    {
      date: '2000-02-14',
      close: 74.4375,
    },
    {
      date: '2000-02-11',
      close: 76.1875,
    },
    {
      date: '2000-02-10',
      close: 76.1875,
    },
    {
      date: '2000-02-09',
      close: 80.25,
    },
    {
      date: '2000-02-08',
      close: 83.125,
    },
    {
      date: '2000-02-07',
      close: 75,
    },
    {
      date: '2000-02-04',
      close: 78.5625,
    },
    {
      date: '2000-02-03',
      close: 84.1875,
    },
    {
      date: '2000-02-02',
      close: 69.4375,
    },
    {
      date: '2000-02-01',
      close: 67.4375,
    },
    {
      date: '2000-01-31',
      close: 64.5625,
    },
    {
      date: '2000-01-28',
      close: 61.6875,
    },
    {
      date: '2000-01-27',
      close: 66.9375,
    },
    {
      date: '2000-01-26',
      close: 64.8125,
    },
    {
      date: '2000-01-25',
      close: 69.25,
    },
    {
      date: '2000-01-24',
      close: 70.125,
    },
    {
      date: '2000-01-21',
      close: 62.0625,
    },
    {
      date: '2000-01-20',
      close: 64.75,
    },
    {
      date: '2000-01-19',
      close: 66.8125,
    },
    {
      date: '2000-01-18',
      close: 64.125,
    },
    {
      date: '2000-01-14',
      close: 64.25,
    },
    {
      date: '2000-01-13',
      close: 65.9375,
    },
    {
      date: '2000-01-12',
      close: 63.5625,
    },
    {
      date: '2000-01-11',
      close: 66.75,
    },
    {
      date: '2000-01-10',
      close: 69.1875,
    },
    {
      date: '2000-01-07',
      close: 69.5625,
    },
    {
      date: '2000-01-06',
      close: 65.5625,
    },
    {
      date: '2000-01-05',
      close: 69.75,
    },
    {
      date: '2000-01-04',
      close: 81.9375,
    },
    {
      date: '2000-01-03',
      close: 89.375,
    },
    {
      date: '1999-12-31',
      close: 76.125,
    },
    {
      date: '1999-12-30',
      close: 79.0625,
    },
    {
      date: '1999-12-29',
      close: 83.5,
    },
    {
      date: '1999-12-28',
      close: 82.3125,
    },
    {
      date: '1999-12-27',
      close: 81.125,
    },
    {
      date: '1999-12-23',
      close: 90,
    },
    {
      date: '1999-12-22',
      close: 97.6875,
    },
    {
      date: '1999-12-21',
      close: 99.875,
    },
    {
      date: '1999-12-20',
      close: 97,
    },
    {
      date: '1999-12-17',
      close: 94.0625,
    },
    {
      date: '1999-12-16',
      close: 94.875,
    },
    {
      date: '1999-12-15',
      close: 96.5,
    },
    {
      date: '1999-12-14',
      close: 95.625,
    },
    {
      date: '1999-12-13',
      close: 102.5,
    },
    {
      date: '1999-12-10',
      close: 106.6875,
    },
    {
      date: '1999-12-09',
      close: 103.625,
    },
    {
      date: '1999-12-08',
      close: 88.5625,
    },
    {
      date: '1999-12-07',
      close: 86.0625,
    },
    {
      date: '1999-12-06',
      close: 87.75,
    },
    {
      date: '1999-12-03',
      close: 86.5625,
    },
    {
      date: '1999-12-02',
      close: 89.0625,
    },
    {
      date: '1999-12-01',
      close: 85,
    },
    {
      date: '1999-11-30',
      close: 85.0625,
    },
    {
      date: '1999-11-29',
      close: 90.4375,
    },
    {
      date: '1999-11-26',
      close: 93.125,
    },
    {
      date: '1999-11-24',
      close: 87.25,
    },
    {
      date: '1999-11-23',
      close: 81.75,
    },
    {
      date: '1999-11-22',
      close: 80.5,
    },
    {
      date: '1999-11-19',
      close: 77.9375,
    },
    {
      date: '1999-11-18',
      close: 77.9375,
    },
    {
      date: '1999-11-17',
      close: 76.5,
    },
    {
      date: '1999-11-16',
      close: 78.9375,
    },
    {
      date: '1999-11-15',
      close: 73.5,
    },
    {
      date: '1999-11-12',
      close: 74.9375,
    },
    {
      date: '1999-11-11',
      close: 73,
    },
    {
      date: '1999-11-10',
      close: 72,
    },
    {
      date: '1999-11-09',
      close: 70.8125,
    },
    {
      date: '1999-11-08',
      close: 78,
    },
    {
      date: '1999-11-05',
      close: 64.9375,
    },
    {
      date: '1999-11-04',
      close: 63.0625,
    },
    {
      date: '1999-11-03',
      close: 65.8125,
    },
    {
      date: '1999-11-02',
      close: 66.4375,
    },
    {
      date: '1999-11-01',
      close: 69.125,
    },
    {
      date: '1999-10-29',
      close: 70.625,
    },
    {
      date: '1999-10-28',
      close: 71,
    },
    {
      date: '1999-10-27',
      close: 75.9375,
    },
    {
      date: '1999-10-26',
      close: 81.25,
    },
    {
      date: '1999-10-25',
      close: 82.75,
    },
    {
      date: '1999-10-22',
      close: 78.625,
    },
    {
      date: '1999-10-21',
      close: 80.75,
    },
    {
      date: '1999-10-20',
      close: 80.5,
    },
    {
      date: '1999-10-19',
      close: 76.625,
    },
    {
      date: '1999-10-18',
      close: 74.0625,
    },
    {
      date: '1999-10-15',
      close: 75.0625,
    },
    {
      date: '1999-10-14',
      close: 79.5938,
    },
    {
      date: '1999-10-13',
      close: 79.9375,
    },
    {
      date: '1999-10-12',
      close: 84.9375,
    },
    {
      date: '1999-10-11',
      close: 88.375,
    },
    {
      date: '1999-10-08',
      close: 89.25,
    },
    {
      date: '1999-10-07',
      close: 87.3125,
    },
    {
      date: '1999-10-06',
      close: 82.4375,
    },
    {
      date: '1999-10-05',
      close: 78.4375,
    },
    {
      date: '1999-10-04',
      close: 77.0625,
    },
    {
      date: '1999-10-01',
      close: 77.25,
    },
    {
      date: '1999-09-30',
      close: 79.9375,
    },
    {
      date: '1999-09-29',
      close: 80.75,
    },
    {
      date: '1999-09-28',
      close: 65.875,
    },
    {
      date: '1999-09-27',
      close: 62.5625,
    },
    {
      date: '1999-09-24',
      close: 65,
    },
    {
      date: '1999-09-23',
      close: 62.25,
    },
    {
      date: '1999-09-22',
      close: 66,
    },
    {
      date: '1999-09-21',
      close: 62.25,
    },
    {
      date: '1999-09-20',
      close: 62.75,
    },
    {
      date: '1999-09-17',
      close: 63.8125,
    },
    {
      date: '1999-09-16',
      close: 65.25,
    },
    {
      date: '1999-09-15',
      close: 65.5625,
    },
    {
      date: '1999-09-14',
      close: 66,
    },
    {
      date: '1999-09-13',
      close: 63.3125,
    },
    {
      date: '1999-09-10',
      close: 66.5,
    },
    {
      date: '1999-09-09',
      close: 63.625,
    },
    {
      date: '1999-09-08',
      close: 61.4375,
    },
    {
      date: '1999-09-07',
      close: 62.9375,
    },
    {
      date: '1999-09-03',
      close: 62.4375,
    },
    {
      date: '1999-09-02',
      close: 60.0625,
    },
    {
      date: '1999-09-01',
      close: 59.5312,
    },
    {
      date: '1999-08-31',
      close: 62.1875,
    },
    {
      date: '1999-08-30',
      close: 59.625,
    },
    {
      date: '1999-08-27',
      close: 64.25,
    },
    {
      date: '1999-08-26',
      close: 64.2812,
    },
    {
      date: '1999-08-25',
      close: 66.4375,
    },
    {
      date: '1999-08-24',
      close: 60.0312,
    },
    {
      date: '1999-08-23',
      close: 59.1875,
    },
    {
      date: '1999-08-20',
      close: 56.7188,
    },
    {
      date: '1999-08-19',
      close: 53.0625,
    },
    {
      date: '1999-08-18',
      close: 56.5625,
    },
    {
      date: '1999-08-17',
      close: 54.625,
    },
    {
      date: '1999-08-16',
      close: 49.1562,
    },
    {
      date: '1999-08-13',
      close: 48.7188,
    },
    {
      date: '1999-08-12',
      close: 45.875,
    },
    {
      date: '1999-08-11',
      close: 45.4688,
    },
    {
      date: '1999-08-10',
      close: 45.5,
    },
    {
      date: '1999-08-09',
      close: 42.75,
    },
    {
      date: '1999-08-06',
      close: 44.7812,
    },
    {
      date: '1999-08-05',
      close: 48.625,
    },
    {
      date: '1999-08-04',
      close: 44.2188,
    },
    {
      date: '1999-08-03',
      close: 47.4375,
    },
    {
      date: '1999-08-02',
      close: 47,
    },
    {
      date: '1999-07-30',
      close: 50.0312,
    },
    {
      date: '1999-07-29',
      close: 50.7812,
    },
    {
      date: '1999-07-28',
      close: 52.875,
    },
    {
      date: '1999-07-27',
      close: 50.5,
    },
    {
      date: '1999-07-26',
      close: 52.9688,
    },
    {
      date: '1999-07-23',
      close: 57.2812,
    },
    {
      date: '1999-07-22',
      close: 53.4062,
    },
    {
      date: '1999-07-21',
      close: 62.7188,
    },
    {
      date: '1999-07-20',
      close: 60.0625,
    },
    {
      date: '1999-07-19',
      close: 65.8438,
    },
    {
      date: '1999-07-16',
      close: 68.8125,
    },
    {
      date: '1999-07-15',
      close: 69.7812,
    },
    {
      date: '1999-07-14',
      close: 67.5,
    },
    {
      date: '1999-07-13',
      close: 63.0625,
    },
    {
      date: '1999-07-12',
      close: 58.6875,
    },
    {
      date: '1999-07-09',
      close: 62.75,
    },
    {
      date: '1999-07-08',
      close: 62.6875,
    },
    {
      date: '1999-07-07',
      close: 60.9375,
    },
    {
      date: '1999-07-06',
      close: 63.4375,
    },
    {
      date: '1999-07-02',
      close: 62.0312,
    },
    {
      date: '1999-07-01',
      close: 61.1875,
    },
    {
      date: '1999-06-30',
      close: 62.5625,
    },
    {
      date: '1999-06-29',
      close: 58.0312,
    },
    {
      date: '1999-06-28',
      close: 55.3438,
    },
    {
      date: '1999-06-25',
      close: 55.0938,
    },
    {
      date: '1999-06-24',
      close: 56.8125,
    },
    {
      date: '1999-06-23',
      close: 58.875,
    },
    {
      date: '1999-06-22',
      close: 58.75,
    },
    {
      date: '1999-06-21',
      close: 61.75,
    },
    {
      date: '1999-06-18',
      close: 55.6562,
    },
    {
      date: '1999-06-17',
      close: 56.4688,
    },
    {
      date: '1999-06-16',
      close: 55.8438,
    },
    {
      date: '1999-06-15',
      close: 48.25,
    },
    {
      date: '1999-06-14',
      close: 46,
    },
    {
      date: '1999-06-11',
      close: 52.9062,
    },
    {
      date: '1999-06-10',
      close: 57.9688,
    },
    {
      date: '1999-06-09',
      close: 57,
    },
    {
      date: '1999-06-08',
      close: 55.7812,
    },
    {
      date: '1999-06-07',
      close: 58.6875,
    },
    {
      date: '1999-06-04',
      close: 54.2188,
    },
    {
      date: '1999-06-03',
      close: 52.5312,
    },
    {
      date: '1999-06-02',
      close: 56.0625,
    },
    {
      date: '1999-06-01',
      close: 52.9062,
    },
    {
      date: '1999-05-28',
      close: 59.375,
    },
    {
      date: '1999-05-27',
      close: 57.2812,
    },
    {
      date: '1999-05-26',
      close: 60.4688,
    },
    {
      date: '1999-05-25',
      close: 55.7812,
    },
    {
      date: '1999-05-24',
      close: 58.75,
    },
    {
      date: '1999-05-21',
      close: 64.2812,
    },
    {
      date: '1999-05-20',
      close: 65.4062,
    },
    {
      date: '1999-05-19',
      close: 69.7812,
    },
    {
      date: '1999-05-18',
      close: 66.3125,
    },
    {
      date: '1999-05-17',
      close: 68.8125,
    },
    {
      date: '1999-05-14',
      close: 66.1875,
    },
    {
      date: '1999-05-13',
      close: 68,
    },
    {
      date: '1999-05-12',
      close: 71.4688,
    },
    {
      date: '1999-05-11',
      close: 74.1875,
    },
    {
      date: '1999-05-10',
      close: 73.4375,
    },
    {
      date: '1999-05-07',
      close: 68.1875,
    },
    {
      date: '1999-05-06',
      close: 68.6875,
    },
    {
      date: '1999-05-05',
      close: 73.25,
    },
    {
      date: '1999-05-04',
      close: 71.5,
    },
    {
      date: '1999-05-03',
      close: 75.4688,
    },
    {
      date: '1999-04-30',
      close: 86.0312,
    },
    {
      date: '1999-04-29',
      close: 84.125,
    },
    {
      date: '1999-04-28',
      close: 96.75,
    },
    {
      date: '1999-04-27',
      close: 102.9375,
    },
    {
      date: '1999-04-26',
      close: 103.5938,
    },
    {
      date: '1999-04-23',
      close: 105.0625,
    },
    {
      date: '1999-04-22',
      close: 95.0312,
    },
    {
      date: '1999-04-21',
      close: 89.625,
    },
    {
      date: '1999-04-20',
      close: 86,
    },
    {
      date: '1999-04-19',
      close: 79.4688,
    },
    {
      date: '1999-04-16',
      close: 95,
    },
    {
      date: '1999-04-15',
      close: 83.625,
    },
    {
      date: '1999-04-14',
      close: 84,
    },
    {
      date: '1999-04-13',
      close: 89.1875,
    },
    {
      date: '1999-04-12',
      close: 92.2188,
    },
    {
      date: '1999-04-09',
      close: 91.4375,
    },
    {
      date: '1999-04-08',
      close: 89.5,
    },
    {
      date: '1999-04-07',
      close: 87.9062,
    },
    {
      date: '1999-04-06',
      close: 91.4375,
    },
    {
      date: '1999-04-05',
      close: 93.25,
    },
    {
      date: '1999-04-01',
      close: 85.5,
    },
    {
      date: '1999-03-31',
      close: 86.0938,
    },
    {
      date: '1999-03-30',
      close: 82.3438,
    },
    {
      date: '1999-03-29',
      close: 74.8125,
    },
    {
      date: '1999-03-26',
      close: 69.5312,
    },
    {
      date: '1999-03-25',
      close: 69.9375,
    },
    {
      date: '1999-03-24',
      close: 61.8438,
    },
    {
      date: '1999-03-23',
      close: 59.6875,
    },
    {
      date: '1999-03-22',
      close: 66,
    },
    {
      date: '1999-03-19',
      close: 67.5312,
    },
    {
      date: '1999-03-18',
      close: 69.2188,
    },
    {
      date: '1999-03-17',
      close: 65.5,
    },
    {
      date: '1999-03-16',
      close: 66.9062,
    },
    {
      date: '1999-03-15',
      close: 69.4688,
    },
    {
      date: '1999-03-12',
      close: 66.6562,
    },
    {
      date: '1999-03-11',
      close: 67.4375,
    },
    {
      date: '1999-03-10',
      close: 68.5625,
    },
    {
      date: '1999-03-09',
      close: 64.9688,
    },
    {
      date: '1999-03-08',
      close: 61.0938,
    },
    {
      date: '1999-03-05',
      close: 60.75,
    },
    {
      date: '1999-03-04',
      close: 60.0625,
    },
    {
      date: '1999-03-03',
      close: 61.75,
    },
    {
      date: '1999-03-02',
      close: 60.6562,
    },
    {
      date: '1999-03-01',
      close: 66.5,
    },
    {
      date: '1999-02-26',
      close: 64.0625,
    },
    {
      date: '1999-02-25',
      close: 62.5,
    },
    {
      date: '1999-02-24',
      close: 55.4688,
    },
    {
      date: '1999-02-23',
      close: 57.5938,
    },
    {
      date: '1999-02-22',
      close: 53.25,
    },
    {
      date: '1999-02-19',
      close: 50.9375,
    },
    {
      date: '1999-02-18',
      close: 44.75,
    },
    {
      date: '1999-02-17',
      close: 46.75,
    },
    {
      date: '1999-02-16',
      close: 49.3125,
    },
    {
      date: '1999-02-12',
      close: 52.25,
    },
    {
      date: '1999-02-11',
      close: 54.9375,
    },
    {
      date: '1999-02-10',
      close: 48.7188,
    },
    {
      date: '1999-02-09',
      close: 50,
    },
    {
      date: '1999-02-08',
      close: 54.5625,
    },
    {
      date: '1999-02-05',
      close: 57.9375,
    },
    {
      date: '1999-02-04',
      close: 59,
    },
    {
      date: '1999-02-03',
      close: 62.875,
    },
    {
      date: '1999-02-02',
      close: 55.125,
    },
    {
      date: '1999-02-01',
      close: 57.9375,
    },
    {
      date: '1999-01-29',
      close: 58.4688,
    },
    {
      date: '1999-01-28',
      close: 61.4375,
    },
    {
      date: '1999-01-27',
      close: 62.8125,
    },
    {
      date: '1999-01-26',
      close: 57.5469,
    },
    {
      date: '1999-01-25',
      close: 56.1875,
    },
    {
      date: '1999-01-22',
      close: 61.5,
    },
    {
      date: '1999-01-21',
      close: 53,
    },
    {
      date: '1999-01-20',
      close: 56.5,
    },
    {
      date: '1999-01-19',
      close: 69.9062,
    },
    {
      date: '1999-01-15',
      close: 70.1875,
    },
    {
      date: '1999-01-14',
      close: 69,
    },
    {
      date: '1999-01-13',
      close: 74,
    },
    {
      date: '1999-01-12',
      close: 81.6875,
    },
    {
      date: '1999-01-11',
      close: 92.3125,
    },
    {
      date: '1999-01-08',
      close: 80.125,
    },
    {
      date: '1999-01-07',
      close: 79.4375,
    },
    {
      date: '1999-01-06',
      close: 69,
    },
    {
      date: '1999-01-05',
      close: 62.25,
    },
    {
      date: '1999-01-04',
      close: 59.1562,
    },
    {
      date: '1998-12-31',
      close: 53.5417,
    },
    {
      date: '1998-12-30',
      close: 53.5417,
    },
    {
      date: '1998-12-29',
      close: 55.3854,
    },
    {
      date: '1998-12-28',
      close: 58.6562,
    },
    {
      date: '1998-12-24',
      close: 54.1354,
    },
    {
      date: '1998-12-23',
      close: 54.1667,
    },
    {
      date: '1998-12-22',
      close: 53.7292,
    },
    {
      date: '1998-12-21',
      close: 53.125,
    },
    {
      date: '1998-12-18',
      close: 47.7812,
    },
    {
      date: '1998-12-17',
      close: 46.125,
    },
    {
      date: '1998-12-16',
      close: 48.1667,
    },
    {
      date: '1998-12-15',
      close: 40.4583,
    },
    {
      date: '1998-12-14',
      close: 37.0417,
    },
    {
      date: '1998-12-11',
      close: 37.1667,
    },
    {
      date: '1998-12-10',
      close: 35.5208,
    },
    {
      date: '1998-12-09',
      close: 36.0417,
    },
    {
      date: '1998-12-08',
      close: 34.0104,
    },
    {
      date: '1998-12-07',
      close: 31.8333,
    },
    {
      date: '1998-12-04',
      close: 31.4167,
    },
    {
      date: '1998-12-03',
      close: 31.5833,
    },
    {
      date: '1998-12-02',
      close: 33.25,
    },
    {
      date: '1998-12-01',
      close: 34.9167,
    },
    {
      date: '1998-11-30',
      close: 32,
    },
    {
      date: '1998-11-27',
      close: 36.1042,
    },
    {
      date: '1998-11-25',
      close: 35.0521,
    },
    {
      date: '1998-11-24',
      close: 35.75,
    },
    {
      date: '1998-11-23',
      close: 36.3333,
    },
    {
      date: '1998-11-20',
      close: 30.1042,
    },
    {
      date: '1998-11-19',
      close: 25.5417,
    },
    {
      date: '1998-11-18',
      close: 27.3333,
    },
    {
      date: '1998-11-17',
      close: 24.75,
    },
    {
      date: '1998-11-16',
      close: 21.0417,
    },
    {
      date: '1998-11-13',
      close: 21.2917,
    },
    {
      date: '1998-11-12',
      close: 21.8333,
    },
    {
      date: '1998-11-11',
      close: 21.1042,
    },
    {
      date: '1998-11-10',
      close: 21.9583,
    },
    {
      date: '1998-11-09',
      close: 21.1458,
    },
    {
      date: '1998-11-06',
      close: 20.7604,
    },
    {
      date: '1998-11-05',
      close: 21.4167,
    },
    {
      date: '1998-11-04',
      close: 21.6354,
    },
    {
      date: '1998-11-03',
      close: 21.0104,
    },
    {
      date: '1998-11-02',
      close: 21.8333,
    },
    {
      date: '1998-10-30',
      close: 21.0729,
    },
    {
      date: '1998-10-29',
      close: 21.0833,
    },
    {
      date: '1998-10-28',
      close: 19.5104,
    },
    {
      date: '1998-10-27',
      close: 19.3854,
    },
    {
      date: '1998-10-26',
      close: 20.2396,
    },
    {
      date: '1998-10-23',
      close: 19.3542,
    },
    {
      date: '1998-10-22',
      close: 19.1146,
    },
    {
      date: '1998-10-21',
      close: 18.3333,
    },
    {
      date: '1998-10-20',
      close: 17.7917,
    },
    {
      date: '1998-10-19',
      close: 17.625,
    },
    {
      date: '1998-10-16',
      close: 16.5729,
    },
    {
      date: '1998-10-15',
      close: 16.1771,
    },
    {
      date: '1998-10-14',
      close: 15.5833,
    },
    {
      date: '1998-10-13',
      close: 15.2292,
    },
    {
      date: '1998-10-12',
      close: 15.5312,
    },
    {
      date: '1998-10-09',
      close: 15.1979,
    },
    {
      date: '1998-10-08',
      close: 14.3646,
    },
    {
      date: '1998-10-07',
      close: 15.5729,
    },
    {
      date: '1998-10-06',
      close: 18.0521,
    },
    {
      date: '1998-10-05',
      close: 17.4505,
    },
    {
      date: '1998-10-02',
      close: 18.375,
    },
    {
      date: '1998-10-01',
      close: 17.1042,
    },
    {
      date: '1998-09-30',
      close: 18.6042,
    },
    {
      date: '1998-09-29',
      close: 18.8542,
    },
    {
      date: '1998-09-28',
      close: 19.2708,
    },
    {
      date: '1998-09-25',
      close: 18.2083,
    },
    {
      date: '1998-09-24',
      close: 17.0208,
    },
    {
      date: '1998-09-23',
      close: 17.5208,
    },
    {
      date: '1998-09-22',
      close: 14.6979,
    },
    {
      date: '1998-09-21',
      close: 14.25,
    },
    {
      date: '1998-09-18',
      close: 13.2812,
    },
    {
      date: '1998-09-17',
      close: 12.8333,
    },
    {
      date: '1998-09-16',
      close: 14.0833,
    },
    {
      date: '1998-09-15',
      close: 12.1667,
    },
    {
      date: '1998-09-14',
      close: 12.2812,
    },
    {
      date: '1998-09-11',
      close: 12.6771,
    },
    {
      date: '1998-09-10',
      close: 13.2708,
    },
    {
      date: '1998-09-09',
      close: 14.0833,
    },
    {
      date: '1998-09-08',
      close: 15.375,
    },
    {
      date: '1998-09-04',
      close: 14.375,
    },
    {
      date: '1998-09-03',
      close: 14.3125,
    },
    {
      date: '1998-09-02',
      close: 14.6458,
    },
    {
      date: '1998-09-01',
      close: 13.3255,
    },
    {
      date: '1998-08-31',
      close: 13.9583,
    },
    {
      date: '1998-08-28',
      close: 17.6484,
    },
    {
      date: '1998-08-27',
      close: 19.8333,
    },
    {
      date: '1998-08-26',
      close: 21.2083,
    },
    {
      date: '1998-08-25',
      close: 21.9375,
    },
    {
      date: '1998-08-24',
      close: 22.4583,
    },
    {
      date: '1998-08-21',
      close: 21.6146,
    },
    {
      date: '1998-08-20',
      close: 21.5208,
    },
    {
      date: '1998-08-19',
      close: 21.4583,
    },
    {
      date: '1998-08-18',
      close: 21.4479,
    },
    {
      date: '1998-08-17',
      close: 19.9479,
    },
    {
      date: '1998-08-14',
      close: 20.4583,
    },
    {
      date: '1998-08-13',
      close: 21.25,
    },
    {
      date: '1998-08-12',
      close: 21.7292,
    },
    {
      date: '1998-08-11',
      close: 20.6667,
    },
    {
      date: '1998-08-10',
      close: 20.2708,
    },
    {
      date: '1998-08-07',
      close: 19.3333,
    },
    {
      date: '1998-08-06',
      close: 18.25,
    },
    {
      date: '1998-08-05',
      close: 17.6979,
    },
    {
      date: '1998-08-04',
      close: 18.3125,
    },
    {
      date: '1998-08-03',
      close: 18.0417,
    },
    {
      date: '1998-07-31',
      close: 18.4792,
    },
    {
      date: '1998-07-30',
      close: 18.9583,
    },
    {
      date: '1998-07-29',
      close: 17.9688,
    },
    {
      date: '1998-07-28',
      close: 19.8229,
    },
    {
      date: '1998-07-27',
      close: 20.9271,
    },
    {
      date: '1998-07-24',
      close: 20.7083,
    },
    {
      date: '1998-07-23',
      close: 21.2708,
    },
    {
      date: '1998-07-22',
      close: 22.3333,
    },
    {
      date: '1998-07-21',
      close: 22.0104,
    },
    {
      date: '1998-07-20',
      close: 22.9167,
    },
    {
      date: '1998-07-17',
      close: 19.9688,
    },
    {
      date: '1998-07-16',
      close: 18.8958,
    },
    {
      date: '1998-07-15',
      close: 18.75,
    },
    {
      date: '1998-07-14',
      close: 19.1667,
    },
    {
      date: '1998-07-13',
      close: 17.9375,
    },
    {
      date: '1998-07-10',
      close: 16.5833,
    },
    {
      date: '1998-07-09',
      close: 17.5833,
    },
    {
      date: '1998-07-08',
      close: 17.8542,
    },
    {
      date: '1998-07-07',
      close: 20.3542,
    },
    {
      date: '1998-07-06',
      close: 23.25,
    },
    {
      date: '1998-07-02',
      close: 20.6667,
    },
    {
      date: '1998-07-01',
      close: 19.0208,
    },
    {
      date: '1998-06-30',
      close: 16.625,
    },
    {
      date: '1998-06-29',
      close: 16.4583,
    },
    {
      date: '1998-06-26',
      close: 15.7083,
    },
    {
      date: '1998-06-25',
      close: 16.5104,
    },
    {
      date: '1998-06-24',
      close: 16.6354,
    },
    {
      date: '1998-06-23',
      close: 15.4479,
    },
    {
      date: '1998-06-22',
      close: 13.5625,
    },
    {
      date: '1998-06-19',
      close: 12.6354,
    },
    {
      date: '1998-06-18',
      close: 12.0208,
    },
    {
      date: '1998-06-17',
      close: 13.1667,
    },
    {
      date: '1998-06-16',
      close: 12.2708,
    },
    {
      date: '1998-06-15',
      close: 10.9583,
    },
    {
      date: '1998-06-12',
      close: 10.1667,
    },
    {
      date: '1998-06-11',
      close: 10.4167,
    },
    {
      date: '1998-06-10',
      close: 9.0208,
    },
    {
      date: '1998-06-09',
      close: 8.5417,
    },
    {
      date: '1998-06-08',
      close: 7.7083,
    },
    {
      date: '1998-06-05',
      close: 7.375,
    },
    {
      date: '1998-06-04',
      close: 7.3125,
    },
    {
      date: '1998-06-03',
      close: 7.0417,
    },
    {
      date: '1998-06-02',
      close: 7.2812,
    },
    {
      date: '1998-06-01',
      close: 7.1354,
    },
    {
      date: '1998-05-29',
      close: 7.3438,
    },
    {
      date: '1998-05-28',
      close: 7.1615,
    },
    {
      date: '1998-05-27',
      close: 7.2188,
    },
    {
      date: '1998-05-26',
      close: 6.8229,
    },
    {
      date: '1998-05-22',
      close: 7.1667,
    },
    {
      date: '1998-05-21',
      close: 7.3958,
    },
    {
      date: '1998-05-20',
      close: 7.3854,
    },
    {
      date: '1998-05-19',
      close: 7.5312,
    },
    {
      date: '1998-05-18',
      close: 7.3385,
    },
    {
      date: '1998-05-15',
      close: 7.4688,
    },
    {
      date: '1998-05-14',
      close: 7.6302,
    },
    {
      date: '1998-05-13',
      close: 7.7396,
    },
    {
      date: '1998-05-12',
      close: 7.6146,
    },
    {
      date: '1998-05-11',
      close: 7.2396,
    },
    {
      date: '1998-05-08',
      close: 7.6979,
    },
    {
      date: '1998-05-07',
      close: 7.5833,
    },
    {
      date: '1998-05-06',
      close: 7.5312,
    },
    {
      date: '1998-05-05',
      close: 7.8099,
    },
    {
      date: '1998-05-04',
      close: 7.9375,
    },
    {
      date: '1998-05-01',
      close: 7.875,
    },
    {
      date: '1998-04-30',
      close: 7.6458,
    },
    {
      date: '1998-04-29',
      close: 7.9583,
    },
    {
      date: '1998-04-28',
      close: 7.9688,
    },
    {
      date: '1998-04-27',
      close: 6.8958,
    },
    {
      date: '1998-04-24',
      close: 7.0729,
    },
    {
      date: '1998-04-23',
      close: 6.75,
    },
    {
      date: '1998-04-22',
      close: 7.2708,
    },
    {
      date: '1998-04-21',
      close: 7.7552,
    },
    {
      date: '1998-04-20',
      close: 7.8542,
    },
    {
      date: '1998-04-17',
      close: 7.9062,
    },
    {
      date: '1998-04-16',
      close: 8.2083,
    },
    {
      date: '1998-04-15',
      close: 8.0104,
    },
    {
      date: '1998-04-14',
      close: 8.099,
    },
    {
      date: '1998-04-13',
      close: 7.8594,
    },
    {
      date: '1998-04-09',
      close: 7.9375,
    },
    {
      date: '1998-04-08',
      close: 7.3854,
    },
    {
      date: '1998-04-07',
      close: 7.1667,
    },
    {
      date: '1998-04-06',
      close: 7.3854,
    },
    {
      date: '1998-04-03',
      close: 7.75,
    },
    {
      date: '1998-04-02',
      close: 7.9219,
    },
    {
      date: '1998-04-01',
      close: 7.5104,
    },
    {
      date: '1998-03-31',
      close: 7.1276,
    },
    {
      date: '1998-03-30',
      close: 7.1562,
    },
    {
      date: '1998-03-27',
      close: 7.0833,
    },
    {
      date: '1998-03-26',
      close: 6.8958,
    },
    {
      date: '1998-03-25',
      close: 6.8073,
    },
    {
      date: '1998-03-24',
      close: 7.0208,
    },
    {
      date: '1998-03-23',
      close: 6.9844,
    },
    {
      date: '1998-03-20',
      close: 7,
    },
    {
      date: '1998-03-19',
      close: 7,
    },
    {
      date: '1998-03-18',
      close: 7.1094,
    },
    {
      date: '1998-03-17',
      close: 6.6562,
    },
    {
      date: '1998-03-16',
      close: 6.5833,
    },
    {
      date: '1998-03-13',
      close: 6.5573,
    },
    {
      date: '1998-03-12',
      close: 6.5417,
    },
    {
      date: '1998-03-11',
      close: 6.6354,
    },
    {
      date: '1998-03-10',
      close: 6.9258,
    },
    {
      date: '1998-03-09',
      close: 6.9583,
    },
    {
      date: '1998-03-06',
      close: 6.3958,
    },
    {
      date: '1998-03-05',
      close: 6.25,
    },
    {
      date: '1998-03-04',
      close: 6.1198,
    },
    {
      date: '1998-03-03',
      close: 5.9792,
    },
    {
      date: '1998-03-02',
      close: 6.3542,
    },
    {
      date: '1998-02-27',
      close: 6.4167,
    },
    {
      date: '1998-02-26',
      close: 6.0625,
    },
    {
      date: '1998-02-25',
      close: 5.4896,
    },
    {
      date: '1998-02-24',
      close: 5.4062,
    },
    {
      date: '1998-02-23',
      close: 5.4062,
    },
    {
      date: '1998-02-20',
      close: 5.2708,
    },
    {
      date: '1998-02-19',
      close: 5.2292,
    },
    {
      date: '1998-02-18',
      close: 5.0729,
    },
    {
      date: '1998-02-17',
      close: 5.1458,
    },
    {
      date: '1998-02-13',
      close: 5.1875,
    },
    {
      date: '1998-02-12',
      close: 5.2604,
    },
    {
      date: '1998-02-11',
      close: 5.2917,
    },
    {
      date: '1998-02-10',
      close: 5.3021,
    },
    {
      date: '1998-02-09',
      close: 4.8542,
    },
    {
      date: '1998-02-06',
      close: 4.9062,
    },
    {
      date: '1998-02-05',
      close: 4.9375,
    },
    {
      date: '1998-02-04',
      close: 5.0625,
    },
    {
      date: '1998-02-03',
      close: 5.151,
    },
    {
      date: '1998-02-02',
      close: 5.1979,
    },
    {
      date: '1998-01-30',
      close: 4.9167,
    },
    {
      date: '1998-01-29',
      close: 4.9583,
    },
    {
      date: '1998-01-28',
      close: 4.7708,
    },
    {
      date: '1998-01-27',
      close: 4.75,
    },
    {
      date: '1998-01-26',
      close: 4.8125,
    },
    {
      date: '1998-01-23',
      close: 4.9375,
    },
    {
      date: '1998-01-22',
      close: 5.1354,
    },
    {
      date: '1998-01-21',
      close: 5.0729,
    },
    {
      date: '1998-01-20',
      close: 4.9531,
    },
    {
      date: '1998-01-16',
      close: 4.7917,
    },
    {
      date: '1998-01-15',
      close: 4.9531,
    },
    {
      date: '1998-01-14',
      close: 4.875,
    },
    {
      date: '1998-01-13',
      close: 4.6458,
    },
    {
      date: '1998-01-12',
      close: 4.3021,
    },
    {
      date: '1998-01-09',
      close: 4.2604,
    },
    {
      date: '1998-01-08',
      close: 4.6146,
    },
    {
      date: '1998-01-07',
      close: 4.7812,
    },
    {
      date: '1998-01-06',
      close: 4.8385,
    },
    {
      date: '1998-01-05',
      close: 4.75,
    },
    {
      date: '1998-01-02',
      close: 4.9583,
    },
    {
      date: '1997-12-31',
      close: 5.0208,
    },
    {
      date: '1997-12-30',
      close: 4.849,
    },
    {
      date: '1997-12-29',
      close: 4.75,
    },
    {
      date: '1997-12-26',
      close: 4.5208,
    },
    {
      date: '1997-12-24',
      close: 4.6042,
    },
    {
      date: '1997-12-23',
      close: 4.625,
    },
    {
      date: '1997-12-22',
      close: 4.6979,
    },
    {
      date: '1997-12-19',
      close: 4.5,
    },
    {
      date: '1997-12-18',
      close: 4.2917,
    },
    {
      date: '1997-12-17',
      close: 4.3906,
    },
    {
      date: '1997-12-16',
      close: 4.4583,
    },
    {
      date: '1997-12-15',
      close: 4.5833,
    },
    {
      date: '1997-12-12',
      close: 4.5417,
    },
    {
      date: '1997-12-11',
      close: 4.6875,
    },
    {
      date: '1997-12-10',
      close: 4.5104,
    },
    {
      date: '1997-12-09',
      close: 4.6875,
    },
    {
      date: '1997-12-08',
      close: 4.7083,
    },
    {
      date: '1997-12-05',
      close: 4.5938,
    },
    {
      date: '1997-12-04',
      close: 4.5,
    },
    {
      date: '1997-12-03',
      close: 4.3646,
    },
    {
      date: '1997-12-02',
      close: 4.2344,
    },
    {
      date: '1997-12-01',
      close: 4.2708,
    },
    {
      date: '1997-11-28',
      close: 4.125,
    },
    {
      date: '1997-11-26',
      close: 4.2604,
    },
    {
      date: '1997-11-25',
      close: 4.2031,
    },
    {
      date: '1997-11-24',
      close: 4.2292,
    },
    {
      date: '1997-11-21',
      close: 4.4896,
    },
    {
      date: '1997-11-20',
      close: 4.5833,
    },
    {
      date: '1997-11-19',
      close: 4.5104,
    },
    {
      date: '1997-11-18',
      close: 4.4167,
    },
    {
      date: '1997-11-17',
      close: 4.375,
    },
    {
      date: '1997-11-14',
      close: 4.1667,
    },
    {
      date: '1997-11-13',
      close: 3.8594,
    },
    {
      date: '1997-11-12',
      close: 3.7708,
    },
    {
      date: '1997-11-11',
      close: 3.9479,
    },
    {
      date: '1997-11-10',
      close: 4.2083,
    },
    {
      date: '1997-11-07',
      close: 4.4792,
    },
    {
      date: '1997-11-06',
      close: 4.6615,
    },
    {
      date: '1997-11-05',
      close: 4.875,
    },
    {
      date: '1997-11-04',
      close: 4.9583,
    },
    {
      date: '1997-11-03',
      close: 5.0729,
    },
    {
      date: '1997-10-31',
      close: 5.0833,
    },
    {
      date: '1997-10-30',
      close: 5.125,
    },
    {
      date: '1997-10-29',
      close: 5.3906,
    },
    {
      date: '1997-10-28',
      close: 4.9479,
    },
    {
      date: '1997-10-27',
      close: 4.2708,
    },
    {
      date: '1997-10-24',
      close: 5.026,
    },
    {
      date: '1997-10-23',
      close: 4.5,
    },
    {
      date: '1997-10-22',
      close: 4.5208,
    },
    {
      date: '1997-10-21',
      close: 4.4271,
    },
    {
      date: '1997-10-20',
      close: 3.8229,
    },
    {
      date: '1997-10-17',
      close: 3.625,
    },
    {
      date: '1997-10-16',
      close: 3.625,
    },
    {
      date: '1997-10-15',
      close: 3.9219,
    },
    {
      date: '1997-10-14',
      close: 3.9792,
    },
    {
      date: '1997-10-13',
      close: 4,
    },
    {
      date: '1997-10-10',
      close: 3.901,
    },
    {
      date: '1997-10-09',
      close: 3.75,
    },
    {
      date: '1997-10-08',
      close: 4.0052,
    },
    {
      date: '1997-10-07',
      close: 4.0573,
    },
    {
      date: '1997-10-06',
      close: 4.125,
    },
    {
      date: '1997-10-03',
      close: 4.0156,
    },
    {
      date: '1997-10-02',
      close: 4.0104,
    },
    {
      date: '1997-10-01',
      close: 4.0208,
    },
    {
      date: '1997-09-30',
      close: 4.3385,
    },
    {
      date: '1997-09-29',
      close: 4.0417,
    },
    {
      date: '1997-09-26',
      close: 4.1667,
    },
    {
      date: '1997-09-25',
      close: 4.0781,
    },
    {
      date: '1997-09-24',
      close: 4.375,
    },
    {
      date: '1997-09-23',
      close: 4.625,
    },
    {
      date: '1997-09-22',
      close: 4.5,
    },
    {
      date: '1997-09-19',
      close: 3.9479,
    },
    {
      date: '1997-09-18',
      close: 3.2917,
    },
    {
      date: '1997-09-17',
      close: 3.4062,
    },
    {
      date: '1997-09-16',
      close: 3.3542,
    },
    {
      date: '1997-09-15',
      close: 3.0938,
    },
    {
      date: '1997-09-12',
      close: 3.6875,
    },
    {
      date: '1997-09-11',
      close: 3.1562,
    },
    {
      date: '1997-09-10',
      close: 3.3021,
    },
    {
      date: '1997-09-09',
      close: 3.2396,
    },
    {
      date: '1997-09-08',
      close: 3,
    },
    {
      date: '1997-09-05',
      close: 2.5,
    },
    {
      date: '1997-09-04',
      close: 2.5521,
    },
    {
      date: '1997-09-03',
      close: 2.3333,
    },
    {
      date: '1997-09-02',
      close: 2.3542,
    },
    {
      date: '1997-08-29',
      close: 2.3385,
    },
    {
      date: '1997-08-28',
      close: 2.375,
    },
    {
      date: '1997-08-27',
      close: 2.3177,
    },
    {
      date: '1997-08-26',
      close: 2.3438,
    },
    {
      date: '1997-08-25',
      close: 2.2188,
    },
    {
      date: '1997-08-22',
      close: 2.125,
    },
    {
      date: '1997-08-21',
      close: 2.1146,
    },
    {
      date: '1997-08-20',
      close: 2.1667,
    },
    {
      date: '1997-08-19',
      close: 2.1667,
    },
    {
      date: '1997-08-18',
      close: 2.0417,
    },
    {
      date: '1997-08-15',
      close: 2.1146,
    },
    {
      date: '1997-08-14',
      close: 2.1562,
    },
    {
      date: '1997-08-13',
      close: 2.1979,
    },
    {
      date: '1997-08-12',
      close: 2.1979,
    },
    {
      date: '1997-08-11',
      close: 2.3281,
    },
    {
      date: '1997-08-08',
      close: 2.2917,
    },
    {
      date: '1997-08-07',
      close: 2.1771,
    },
    {
      date: '1997-08-06',
      close: 2.25,
    },
    {
      date: '1997-08-05',
      close: 2.2083,
    },
    {
      date: '1997-08-04',
      close: 2.3125,
    },
    {
      date: '1997-08-01',
      close: 2.4167,
    },
    {
      date: '1997-07-31',
      close: 2.3958,
    },
    {
      date: '1997-07-30',
      close: 2.4479,
    },
    {
      date: '1997-07-29',
      close: 2.4792,
    },
    {
      date: '1997-07-28',
      close: 2.3229,
    },
    {
      date: '1997-07-25',
      close: 2.2292,
    },
    {
      date: '1997-07-24',
      close: 2.2604,
    },
    {
      date: '1997-07-23',
      close: 2.2917,
    },
    {
      date: '1997-07-22',
      close: 2.1354,
    },
    {
      date: '1997-07-21',
      close: 2.1823,
    },
    {
      date: '1997-07-18',
      close: 2.1562,
    },
    {
      date: '1997-07-17',
      close: 2.2188,
    },
    {
      date: '1997-07-16',
      close: 2.3333,
    },
    {
      date: '1997-07-15',
      close: 2.4375,
    },
    {
      date: '1997-07-14',
      close: 2.1354,
    },
    {
      date: '1997-07-11',
      close: 2.2917,
    },
    {
      date: '1997-07-10',
      close: 2.5625,
    },
    {
      date: '1997-07-09',
      close: 2.3229,
    },
    {
      date: '1997-07-08',
      close: 2.3021,
    },
    {
      date: '1997-07-07',
      close: 2,
    },
    {
      date: '1997-07-03',
      close: 1.9115,
    },
    {
      date: '1997-07-02',
      close: 1.5885,
    },
    {
      date: '1997-07-01',
      close: 1.5156,
    },
    {
      date: '1997-06-30',
      close: 1.5417,
    },
    {
      date: '1997-06-27',
      close: 1.4896,
    },
    {
      date: '1997-06-26',
      close: 1.5104,
    },
    {
      date: '1997-06-25',
      close: 1.5104,
    },
    {
      date: '1997-06-24',
      close: 1.5104,
    },
    {
      date: '1997-06-23',
      close: 1.5,
    },
    {
      date: '1997-06-20',
      close: 1.526,
    },
    {
      date: '1997-06-19',
      close: 1.5104,
    },
    {
      date: '1997-06-18',
      close: 1.5104,
    },
    {
      date: '1997-06-17',
      close: 1.5052,
    },
    {
      date: '1997-06-16',
      close: 1.5729,
    },
    {
      date: '1997-06-13',
      close: 1.5833,
    },
    {
      date: '1997-06-12',
      close: 1.6042,
    },
    {
      date: '1997-06-11',
      close: 1.5417,
    },
    {
      date: '1997-06-10',
      close: 1.5833,
    },
    {
      date: '1997-06-09',
      close: 1.6875,
    },
    {
      date: '1997-06-06',
      close: 1.6562,
    },
    {
      date: '1997-06-05',
      close: 1.5417,
    },
    {
      date: '1997-06-04',
      close: 1.4167,
    },
    {
      date: '1997-06-03',
      close: 1.4792,
    },
    {
      date: '1997-06-02',
      close: 1.5104,
    },
    {
      date: '1997-05-30',
      close: 1.5,
    },
    {
      date: '1997-05-29',
      close: 1.5052,
    },
    {
      date: '1997-05-28',
      close: 1.5312,
    },
    {
      date: '1997-05-27',
      close: 1.5833,
    },
    {
      date: '1997-05-23',
      close: 1.5,
    },
    {
      date: '1997-05-22',
      close: 1.3958,
    },
    {
      date: '1997-05-21',
      close: 1.4271,
    },
    {
      date: '1997-05-20',
      close: 1.6354,
    },
    {
      date: '1997-05-19',
      close: 1.7083,
    },
    {
      date: '1997-05-16',
      close: 1.7292,
    },
    {
      date: '1997-05-15',
      close: 1.9583,
    },
  ],
};
