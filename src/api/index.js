import {post, get} from '../utils/request';

/**
 * 产品设计统计
 * @param {*} params
 * @return {*}
 */
export const getProductDesign = (params) => post('/Windchill/app/product-design/addStatistics', params);

/**
 * 产品设计 零件table统计
 * @param {*} params
 * @return {*}
 */
export const getPartsStatistics = (params) => post('/Windchill/app/product-design/addPartStatisticsByPrjType', params);

/**
 * 产品设计 产品table统计
 * 点击区域六中某个项目类型的柱状图触发
 * @param {*} params
 * @return {*}
 */
export const getProductStatistics = (params) =>
  post('/Windchill/app/product-design/productStatisticsByPrjType', params);

/**
 * 产品设计 pdm查看列表
 * 点击区域十一中某个项目类型的柱状图触发
 * @param {*} params
 * @return {*}
 */
export const getPdmList = (params) => post('/Windchill/app/product-design/productListStatistics', params);

/* 基础数据统计 */

/**
 * 基础数据统计
 * @param {*} params
 * @return {*}
 */
export const getBaseData = (params) => post('/Windchill/app/base-data/addStatistics', params);

/**
 * 流程数据统计
 * 基于区域二十点击某个流程类型的区域触发
 * @return {*}
 */
export const getProcessDataByCard = (params) => post('/Windchill/app/process-data/addStatisticsByWfType', params);

/**
 * 设计更改统计
 * @return {*}
 */
export const getDesignChange = (params) => post('/Windchill/app/design-change/addStatistics', params);

/**
 * 设计更改统计
 * /Windchill/app/design-change/ecnListStatistics
 * @return {*}
 */
export const getDesignChangeByChart = (params) => post('/Windchill/app/design-change/ecnListStatistics', params);

/**
 * 产品标准化率数据统计
 * @return {*}
 */
export const getProductStandard = (params) => post('/Windchill/app/product-standard/standardRateStatistics', params);

/**
 * 产品标准化率数据统计
 * 点击区域二十九中某个项目类型的柱状图触发
 * @return {*}
 */
export const getProductStandardByChart = (params) =>
  post('/Windchill/app/product-standard/standardRateStatisticsByPrjType', params);

/**
 * 1.6零件重用统计
 * 点击”查询”按钮触发
 * @return {*}
 */
export const getPartsReuse = (params) => post('/Windchill/app/parts-reuse/reuseStatistics', params);

/**
 * 数据贡献量及排行
 * @return {*}
 */
export const getContribution = (params) => post('/Windchill/app/data-contribution/addStatistics', params);

/**
 * 数据贡献量及排行
 * 点击区域三十五中某个数据类型触发
 * 两种情况：
 1.按项目类型统计：queryYear=2022&queryTime=1月&dataType=普通文档&statisticsType=项目类型
 2.按人员统计：queryYear=2022&queryTime=1月&dataType=普通文档&statisticsType=人员
 * @return {*}
 */
export const getContributionByCard = (params) =>
  post('/Windchill/app/data-contribution/contributionStatistics', params);

/**
 * 流程超期统计监控
 * @return {*}
 */
export const getProcessExecution = (params) => post('/Windchill/app/process-execution/overdueStatistics', params);

/**
 * 流程超期统计监控
 * 流程超期
 * 点击区域四十一中某个流程类型触发
 * @return {*}
 */
export const getProcessExecutionByPro = (params) =>
  post('/Windchill/app/process-execution/overdueStatisticsByWfType', params);

/**
 * 流程超期统计监控
 * 点击区域四十二中某个柱状图触发
 * @return {*} params
 */
export const getProcessExecutionByChart = (params) =>
  post('/Windchill/app/process-execution/overdueWfListStatistics', params);

/**
 * 流程超期统计监控
 * 任务超期
 * 点击区域四十五中某个流程类型区域触发
 * @return {*}
 */
export const getProcessExecutionByExe = (params) =>
  post('/Windchill/app/process-execution/overdueWfListStatistics', params);

/**
 * 流程执行效率统计
 * @return {*} prarams
 */
export const getProcessEfficiency = (params) => post('/Windchill/app/process-efficiency/efficiencyStatistics', params);


export const test = (params) => get('http://123.56.163.203:7001/getlist', params);
