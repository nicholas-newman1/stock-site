const axios = require('axios');

exports.handler = async function (event, context, callback) {
  const pass = (body) => {
    callback(null, {
      statusCode: 200,
      // headers: {
      //   'Access-Control-Allow-Origin': '*',
      //   'Access-Control-Allow-Headers':
      //     'Origin, X-Requested-With, Content-Type, Accept',
      // },
      body: JSON.stringify(body),
    });
  };

  const buff = Buffer.from(event.body, 'base64');
  const str = buff.toString('utf-8');

  const { endpoint, params } = JSON.parse(str);

  try {
    const res = await axios.get(
      `https://financialmodelingprep.com/api/v3/${endpoint}?apikey=${
        process.env.REACT_APP_FMP_KEY
      }${params && '&' + params}`
    );
    console.log(process.env.REACT_APP_FMP_KEY);
    pass(res.data);
  } catch (err) {
    let error = {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({ error: err.message }),
    };

    pass(error);
  }
};
