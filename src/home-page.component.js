const template = `
  <div class="container">
  <headerComp></headerComp>

	  <h3>Överblick Räkningar</h3>

	  <billing-period-select
      billing-periods="$ctrl.billingPeriods"
      on-select-billing-period="$ctrl.fetchBill"
    >
    </billing-period-select>

	  <div ng-show="$ctrl.isBillFetching">
		  laddar...
	  </div>
	  <div ng-show="!$ctrl.isBillFetching">
		  <bill bill="$ctrl.selectedBill">
		  </bill>
	  </div>
  </div>
`;

const controller = ['billApiService', function (billApiService) {

  this.billingPeriods = [
    '2018-06',
    '2018-05',
    '2018-04'
  ];

  this.fetchBill = (billingPeriod) => {
    
    this.isBillFetching = true;

    billApiService.fetchBill(billingPeriod)
      .then((bill) => {   
        this.selectedBill = bill;
        this.isBillFetching = false;
      });
  };

  this.$onInit = () => {
    this.fetchBill(this.billingPeriods[0]);
  }
}];

export default {
  template,
  controller,
};