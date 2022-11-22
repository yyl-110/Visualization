import Mock from 'mockjs';

import {productDesignData, productDesignStatistics, productDesignTable} from './ProductDesign';
import {processCardData, processData, tableData} from './ProcessExecution';

/* product-design */
Mock.mock('/Windchill/app/product-design/addStatistics', 'post', {success: true, data: productDesignData});
Mock.mock('/Windchill/app/product-design/addPartStatisticsByPrjType', 'post', {
  success: true,
  data: productDesignStatistics,
});
Mock.mock('/Windchill/app/product-design/productStatisticsByPrjType', 'post', {
  success: true,
  data: productDesignTable,
});

/* process-execution */
Mock.mock('/Windchill/app/process-execution/overdueStatistics', 'post', {success: true, data: processCardData});
Mock.mock('/Windchill/app/process-execution/overdueStatisticsByWfType', 'post', {success: true, data: processData});
Mock.mock('/Windchill/app/process-execution/overdueWfList', 'post', {success: true, data: tableData});
