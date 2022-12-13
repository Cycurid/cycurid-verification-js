const checkParams = require("./src/checkParams");
const formatData = require("./src/formatData");
const { OAUTH_SERVER } = require("./src/constants");
const axios = require("axios");

async function immeVerification(data) {
  try {
    checkParams(data);
    var formattedData = formatData(data.verifiable_data);
    console.log("formattedData", formattedData);
    var session_url = `${OAUTH_SERVER}/v1/public/kyc/session/start`;
    var uname = data.client_api_key;
    var pass = data.client_api_secret;
    axios
      .post(session_url, formattedData, {
        auth: {
          username: uname,
          password: pass,
        },
      })
      .then(function (response) {
        console.log("responseStart", response);
        const session = response.data.url;
        window.open(session);
      })
      .catch(function (error) {
        console.log("Error", error);
      });
  } catch (error) {
    console.log("Error", error);
  }
}

module.exports = {
  immeVerification,
};
