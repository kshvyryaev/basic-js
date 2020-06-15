const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity && typeof sampleActivity === 'string') {
    const activity = parseFloat(sampleActivity);
    if (!isNaN(activity) && activity > 0 && activity < 15) {
      const k = 0.693 / HALF_LIFE_PERIOD;
      const result = Math.ceil(Math.log(MODERN_ACTIVITY / activity) / k);
      return result;
    }
  }

  return false;
};
