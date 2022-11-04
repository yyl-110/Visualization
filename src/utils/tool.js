/* 监听dom元素尺寸变化刷新chart */
export const resizeOb = (dom) => {
  const resizeOb = new ResizeObserver((entries) => {
    for (const entry of entries) {
      echarts.getInstanceByDom(entry.target).resize();
    }
  });
  resizeOb.observe(dom);
};
