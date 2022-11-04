import _ from 'lodash';
/* 监听dom元素尺寸变化刷新chart */
export const resizeOb = (dom) => {
  const resizeOb = new ResizeObserver(
    _.debounce((entries) => {
      console.log('dom:', dom);
      for (const entry of entries) {
        echarts.getInstanceByDom(entry.target).resize();
      }
    }, 1000),
  );
  resizeOb.observe(dom);
};
