import { $ } from '../utils/DOM.js';
import { CHARGE_SECTION_TEMPLATE } from '../utils/template.js';

export class ChargeView {
  constructor() {
    this.$productBalanceSection = $('#product-balance-section');
    this.$chargeInput;
    this.$chargeButton;
    this.$chargeAmount;
    this.$coin500Quantity;
    this.$coin100Quantity;
    this.$coin50Quantity;
    this.$coin10Quantity;
    this.addElements();
  }

  addElements() {
    this.$productBalanceSection.innerHTML = CHARGE_SECTION_TEMPLATE;
    this.$chargeInput = $('#vending-machine-charge-input');
    this.$chargeButton = $('#vending-machine-charge-button');
    this.$chargeAmount = $('#vending-machine-charge-amount');
    this.$coin500Quantity = $('#vending-machine-coin-500-quantity');
    this.$coin100Quantity = $('#vending-machine-coin-100-quantity');
    this.$coin50Quantity = $('#vending-machine-coin-50-quantity');
    this.$coin10Quantity = $('#vending-machine-coin-10-quantity');
  }
}