const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  smartChain: [],
  getLength() {
    return this.smartChain.length;
  },
  addLink(value) {
    this.smartChain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.smartChain.length
    ) {
      this.smartChain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.smartChain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.smartChain.reverse();
    return this;
  },
  finishChain() {
    const finish = this.smartChain.join("~~");
    this.smartChain = [];
    return finish;
  },
};

module.exports = {
  chainMaker,
};
