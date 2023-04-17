const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  encrypt(value, key) {
    let array = [],
      countity = 0,
      posA,
      posB;
    if (key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    if (value === undefined) {
      throw new Error("Incorrect arguments!");
    }
    value = value.toUpperCase();
    key = key.toUpperCase();
    for (let index = 0; index < value.length; index++) {
      posB = this.alphabet.indexOf(value[index]);
      if (posB === -1) {
        array.push(value[index]);
        continue;
      }
      posA = this.alphabet.indexOf(key[countity % key.length]);
      array.push(this.alphabet[(posB + posA) % 26]);
      ++countity;
    }
    if (this.type) {
      return array.join("");
    } else return array.reverse().join("");
  }
  decrypt(value, key) {
    let array = [],
      countity = 0,
      posA,
      posB;
    if (key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    if (value === undefined) {
      throw new Error("Incorrect arguments!");
    }
    key = key.toUpperCase();
    for (let index = 0; index < value.length; index++) {
      posB = this.alphabet.indexOf(value[index]);
      if (posB === -1) {
        array.push(value[index]);
        continue;
      }
      posA = this.alphabet.indexOf(key[countity % key.length]);
      array.push(this.alphabet[(posB - posA + 26) % 26]);
      ++countity;
    }
    if (this.type) {
      return array.join("");
    } else {
      return array.reverse().join("");
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
