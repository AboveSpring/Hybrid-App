import angular from 'angular';
import { react2angular } from 'react2angular';

import billApiService from './bill-api.service.js';
import billingService from './billing.service';
import bill from './bill.component.js';
import BillingPeriodSelect from './React/BillingPeriodSelect';
import HeaderComp from './React/HeaderComp';
import homePage from './home-page.component.js';

runConfig.$inject = ['$injector'];
function runConfig($injector) {
  window.$injector = $injector;
}

angular.module('billViewer', [])
  .service('billingService', billingService)
  .service('billApiService', billApiService)
  .component('bill', bill)
  .component('billingPeriodSelect', react2angular(BillingPeriodSelect, [
    'billingPeriods',
    'onSelectBillingPeriod'
    ]))
  .component('headerComp', react2angular(HeaderComp, []))
  .component('homePage', homePage)
  .run(runConfig);
