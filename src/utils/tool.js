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