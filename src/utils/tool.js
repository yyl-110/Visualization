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

// fn 是需要防抖处理的函数
// wait 是时间间隔
export const debounce = (fn, wait = 50) => {
  // 通过闭包缓存一个定时器 id
  let timer = null;
  // 将 debounce 处理结果当作函数返回
  // 触发事件回调时执行这个返回函数
  return function (...args) {
    // 如果已经设定过定时器就清空上一次的定时器
    if (timer) clearTimeout(timer);
    // 开始设定一个新的定时器，定时器结束后执行传入的函数 fn
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
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
