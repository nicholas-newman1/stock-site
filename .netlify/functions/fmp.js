exports.handler = async function (event, context, callback) {
  const pass = (body) => {
    callback(null, { statusCode: 200, body: JSON.stringify(body) });
  };

  const { endpoint, params } = JSON.parse(event.body);

  try {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/${endpoint}?apikey=${
        process.env.REACT_APP_FMP_KEY
      }${params && '&' + params}`
    );
    const data = await res.json();
    pass(data);
  } catch (err) {
    let error = {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({ error: err.message }),
    };

    pass(error);
  }
};
