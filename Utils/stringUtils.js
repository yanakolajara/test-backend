const checkIsUppercase = (str) => {
  if (!!str || typeof str === "number" || str === str.toUpperCase()) {
    return false;
  }
};

module.exports = checkIsUppercase;
