const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if(arguments.length === 0) {
      this.chain.push('( )');
    } else {
      this.chain.push('( ' + value + ' )');
    }

    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 0 || position > this.chain.length - 1) {
      this.chain = [];
      throw new Error();
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const resultChain = this.chain.join('~~');
    this.chain = [];
    return resultChain;
  }
};

module.exports = chainMaker;
