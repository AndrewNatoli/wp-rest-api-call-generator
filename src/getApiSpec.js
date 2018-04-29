const fetch = require('node-fetch');

/**
 * @param {string} url
 */
const getApiSpec = async function(url) {
  const response = await fetch(url);
  return response.json();
};

module.exports = getApiSpec;
