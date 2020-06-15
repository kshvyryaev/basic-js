const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members || !members.flat) {
    return false;
  }

  return members
    .filter(x => typeof x === 'string')
    .map(x => x.trim().toUpperCase()[0])
    .sort()
    .join('');
};
