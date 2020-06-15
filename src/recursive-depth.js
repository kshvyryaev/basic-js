module.exports = class DepthCalculator {
  calculateDepth(arr) {
    const innerDepths = arr.filter(Array.isArray).map(e => {
      return this.calculateDepth(e);
    });

    return innerDepths.length ? Math.max(...innerDepths) + 1 : 1;
  }
};