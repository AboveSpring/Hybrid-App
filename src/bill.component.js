const template = `
  <div class="card">
    <div class="card-header">
      Räkningar för: {{ $ctrl.bill.id }}
    </div>
    <div class="card-body">
      <p>
        Summa: $ {{ $ctrl.bill.amount | number }}
      </p>
      <p>
        Betala senast: {{ $ctrl.bill.dueDate | date }}.
      </p>
    </div>
  </div>
`;

export default {
  template,
  bindings: {
    bill: '<'
  }
};
