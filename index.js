const checkParams = require("./src/checkParams");
const formatData = require("./src/formatData");
const { OAUTH_SERVER, IMMEWIDGET_URL } = require("./src/constants");
const axios = require("axios");

async function immeVerification(data, onSuccess, onFailure) {
  try {
    checkParams(data, onSuccess, onFailure);
    var formattedData = formatData(data.verifiable_data);
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
        console.log("Authenticated", response);

        const session = response.data.url.split("/").pop();
        const testUrl = `${IMMEWIDGET_URL}/${session}`;
        console.log(session);
        // window.open(response.data.url);
        window.open(testUrl);
      })
      .catch(function (error) {
        console.log("Error", error);
      });
  } catch (error) {
    onFailure(error);
  }
}

module.exports = {
  immeVerification,
};
