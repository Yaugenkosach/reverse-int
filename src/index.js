module.exports = function reverse (n) {
    const noMinus = Math.abs(n);
    let nToStr = noMinus.toString();
    let i = 0;
    let result = '';
    while (i < nToStr.length) {
      result = `${nToStr[i]}${result}`;
      i = i + 1;
    }
  
    return Number(result);
}