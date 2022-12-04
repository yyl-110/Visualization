export default {
  fomartNum(value) {
    try {
      let val = parseFloat(value || 0);
      return val.toFixed(2) + '%';
      // eslint-disable-next-line no-empty, no-unreachable
    } catch (error) {
      console.log(error);
      return value;
    }
  },
};
