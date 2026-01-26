// Password validation regex
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]/;
const PASSWORD_MIN_LENGTH = 8;

module.exports = {
  PASSWORD_REGEX,
  PASSWORD_MIN_LENGTH
};
