module.exports = function repeater(str, { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' }) {
  let strToRepeat = str + (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition;
   let res = (strToRepeat + separator).repeat(repeatTimes - 1) + strToRepeat;
   return res;
};