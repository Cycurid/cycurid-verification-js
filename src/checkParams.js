module.exports = function checkParams(data) {
  try {
    if (!data.client_api_key) {
      throw { statusText: "action is required" };
    }
    if (!data.client_api_secret) {
      throw { statusText: "client_secret is required" };
    }
  } catch (error) {
    throw error;
  }
};
