/* 监听dom元素尺寸变化刷新chart */
export const resizeOb = (dom) => {
  // const resizeOb = new ResizeObserver(
  //   _.debounce((entries) => {
  //     for (const entry of entries) {
  //       echarts.getInstanceByDom(entry.target).resize();
  //     }
  //   }, 500),
  // );
  // resizeOb.observe(dom);
};

export const fontSize = (res) => {
  const clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (!clientWidth) return;
  let fontSize = clientWidth / 1920;
  return res * fontSize;
};

/**
 *
 * @param fn {Function}   实际要执行的函数
 * @param delay {Number}  延迟时间，也就是阈值，单位是毫秒（ms）
 *
 * @return {Function}     返回一个“去弹跳”了的函数
 */
export const debounce = function (fn, delay) {
  // 定时器，用来 setTimeout
  var timer;

  // 返回一个函数，这个函数会在一个时间区间结束后的 delay 毫秒时执行 fn 函数
  return function () {
    // 保存函数调用时的上下文和参数，传递给 fn
    var context = this;
    var args = arguments;

    // 每次这个返回的函数被调用，就清除定时器，以保证不执行 fn
    clearTimeout(timer);

    // 当返回的函数被最后一次调用后（也就是用户停止了某个连续的操作），
    // 再过 delay 毫秒就执行 fn
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
};

export const IEVersion = () => {
  const userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
  const isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1; //判断是否IE<11浏览器
  const isEdge = userAgent.indexOf('Edge') > -1 && !isIE; //判断是否IE的Edge浏览器
  const isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1;
  if (isIE) {
    const reIE = new RegExp('MSIE (\\d+\\.\\d+);');
    reIE.test(userAgent);
    const fIEVersion = parseFloat(RegExp['$1']);
    if (fIEVersion == 7) {
      return 7;
    } else if (fIEVersion == 8) {
      return 8;
    } else if (fIEVersion == 9) {
      return 9;
    } else if (fIEVersion == 10) {
      return 10;
    } else {
      return 6; //IE版本<=7
    }
  } else if (isEdge) {
    return 'edge'; //edge
  } else if (isIE11) {
    return 11; //IE11
  } else {
    return -1; //不是ie浏览器
  }
};

/**
 * 是否是空对象
 * @param {*} obj
 * @return {*}
 */
export const isEmptyObject = (obj) => {
  for (let key in obj) {
    return false; //若不为空，可遍历，返回false
  }
  return true;
};

/**
 * 获取当前数字的最大位数 1 =》10 10=》100
 * @return {*}
 */
export const getMaxNumber = (number) => {
  const isNumber = /^[0-9]+.?[0-9]*$/.test(number);
  if (!isNumber) return 100;
  if (Math.floor(number / 10) <= 1) return 10;
  if (Math.floor(number / 10) > 1 && Math.floor(number / 10) <= 10) return 100;
  if (Math.floor(number / 10) > 10 && Math.floor(number / 10) <= 100) return 1000;
  if (Math.floor(number / 10) > 100 && Math.floor(number / 10) <= 1000) return 10000;
  if (Math.floor(number / 10) > 1000 && Math.floor(number / 10) <= 10000) return 100000;
  if (Math.floor(number / 10) > 10000 && Math.floor(number / 10) <= 100000) return 1000000;
  if (Math.floor(number / 10) > 100000 && Math.floor(number / 10) <= 1000000) return 10000000;
  if (Math.floor(number / 10) > 1000000 && Math.floor(number / 10) <= 10000000) return 100000000;
};

/**
 * echarts resise
 * @return {*}
 */
export const chartResise = (chart) => {
  if (chart) chart.resize();
};
