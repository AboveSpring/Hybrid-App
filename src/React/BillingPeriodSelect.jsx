import React from 'react'
import PropTypes from 'prop-types';

export  const BillingPeriodSelect = (props) => {
  const { billingPeriods, onSelectBillingPeriod } = props;

  const translationService = window.$injector.get('billingService');
  const translation = translationService.billing();

  const selectBillingPeriod = (event) => {
    onSelectBillingPeriod(event.target.value);
  };

  return (
    <div>
      <label>{translation.billingPeriod}:</label>
      <select className="form-control" onChange={selectBillingPeriod}>
        {billingPeriods.map((billingPeriod) => (
          <option key={billingPeriod} value={billingPeriod}> {billingPeriod} </option>
        ))}
      </select>
    </div>
  )
}

BillingPeriodSelect.propTypes = {
  billingPeriods: PropTypes.array,
  onSelectBillingPeriod: PropTypes.func
};

export default BillingPeriodSelect


