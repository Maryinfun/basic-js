const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let counter = 0;

  if (s1.length <= s2.length) {
    for (let i = 0; i < s1.length; i++) {
      for (let j = 0; j < s2.length; j++) {
        if (s1[i] === s2[j]) {
          counter++;
          s2 = s2.replace(s2[j], "");
          break;
        }
      }
    }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount,
};
