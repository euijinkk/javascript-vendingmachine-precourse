export const COIN_LIST = [500, 100, 50, 10];

export const BLANK_COIN_OBJECT = {
  500: 0,
  100: 0,
  50: 0,
  10: 0,
};

const MINIMUM_CHARGE_MONEY = 100;
const MULTIPLES_MONEY = 10;

export const USER_INPUT_ALERT = {
  blankNameError: '상품명이 비어있습니다.',
  over100Error: `금액은 ${MINIMUM_CHARGE_MONEY}원 이상으로 입력해주세요.`,
  positiveError: `금액은 ${MULTIPLES_MONEY} 이상을 입력해주세요.`,
  multiple10Error: `금액은 ${MULTIPLES_MONEY}으로 나누어 떨어지는 수을 입력해주세요.`,
  notNaturalNumberError: '수량은 자연수만 입력해주세요.',
};

export const EXCEPTION_ALERT = {
  notEnoughMoneyError: '금액이 부족해 구매할 수 없습니다.',
  differentPriceError: '같은 제품에, 다른 가격을 입력하셨습니다.',
};
