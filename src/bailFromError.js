/**
 * @param {String?} message
 * @param {Number} errorCode
 */
function bailFromError(message = '', err) {
  console.error(message);
  console.error(err);
  process.exit(1);
}

module.exports = bailFromError;
