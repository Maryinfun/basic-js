const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {
    separator = "+",
    additionRepeatTimes,
    repeatTimes,
    additionSeparator = "|",
    addition = "",
  } = options;

  addition = addition + "";

  additionRepeatTimes !== 0
    ? (addition = Array(additionRepeatTimes)
        .fill(addition)
        .join(additionSeparator))
    : null;

  return repeatTimes !== 0
    ? Array(repeatTimes)
        .fill(str + addition)
        .join(separator)
    : str + addition;
}

module.exports = {
  repeater,
};
