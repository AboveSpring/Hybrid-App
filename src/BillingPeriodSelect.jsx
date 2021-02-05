import React from 'react'

export  const BillingPeriodSelect = (props) => {
  const { billingPeriods, onSelectBillingPeriod } = props;

  const selectBillingPeriod = (event) => {
    onSelectBillingPeriod(event.target.value);
  };

  return (
    <select className="form-control" onChange={selectBillingPeriod}>
      {billingPeriods.map((billingPeriod) => (
        <option key={billingPeriod} value={billingPeriod}> {billingPeriod} </option>
      ))}
    </select>
  )
}
export default BillingPeriodSelect

