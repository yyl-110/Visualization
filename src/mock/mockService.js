import Mock from 'mockjs';

import {
  productChange,
  productDesignData,
  productDesignStatistics,
  productDesignTable,
  productDesignTable2,
} from './ProductDesign';
import {processCardData, processData, tableData, pdm} from './ProcessExecution';
import baseData from './BaseData/data.json';
import _processData from './ProcessData/data.json';
import designChange from './DesignChange/data.json';
import data35 from './DataContribution/35.json';
import click35 from './DataContribution/click35.json';
import processEfficiency from './ProcessEfficiency/data.json'

/* product-design */
Mock.mock('/Windchill/app/product-design/addStatistics', 'post', {success: true, data: productDesignData});
Mock.mock('/Windchill/app/design-change/ecnListStatistics', 'post', {success: true, data: productChange});
Mock.mock('/Windchill/app/product-design/productListStatistics', 'post', {success: true, data: productDesignTable2});
Mock.mock('/Windchill/app/product-design/addPartStatisticsByPrjType', 'post', {
  success: true,
  data: productDesignStatistics,
});
Mock.mock('/Windchill/app/product-design/productStatisticsByPrjType', 'post', {
  success: true,
  data: productDesignTable,
});

/* basedata */
Mock.mock('/Windchill/app/base-data/addStatistics', 'post', {
  success: true,
  data: baseData,
});

/* processdata */
Mock.mock('/Windchill/app/process-data/addStatistics', 'post', {
  success: true,
  data: _processData,
});
Mock.mock('/Windchill/app/process-data/addStatisticsByWfType', 'post', {
  success: true,
  data: _processData,
});

/* designchange */
Mock.mock('/Windchill/app/design-change/addStatistics', 'post', {
  success: true,
  data: designChange,
});

/* datacontribution */
Mock.mock('/Windchill/app/data-contribution/addStatistics', 'post', {
  success: true,
  data: data35,
});
Mock.mock('/Windchill/app/data-contribution/contributionStatistics', 'post', {
  success: true,
  data: click35,
});

/* process-execution */
Mock.mock('/Windchill/app/process-execution/overdueStatistics', 'post', {success: true, data: processCardData});
Mock.mock('/Windchill/app/process-execution/overdueStatisticsByWfType', 'post', {success: true, data: processData});
Mock.mock('/Windchill/app/process-execution/overdueWfList', 'post', {success: true, data: tableData});
Mock.mock('/Windchill/app/process-execution/overdueWfListStatistics', 'post', {success: true, data: pdm});


Mock.mock('/Windchill/app/process-efficiency/efficiencyStatistics', 'post', {success: true, data: processEfficiency});
