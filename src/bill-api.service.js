export default [
  "$http",
  function ($http) {
    this.fetchBill = (billingPeriod) => {
      return $http
        .get(`http://localhost:3000/${billingPeriod}`)
        .then((successResponse) => successResponse.data);
    }; 
  }
];