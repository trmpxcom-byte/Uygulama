const form = document.querySelector("#payment-form");
const amountInput = document.querySelector("#amount");
const currencyInput = document.querySelector("#currency");
const rateInput = document.querySelector("#rate");
const bonusInput = document.querySelector("#bonus");

const gift = document.querySelector("#gift");
const credits = document.querySelector("#credits");
const locked = document.querySelector("#locked");

const currencySymbols = {
  TRY: "TRY",
  USD: "USD",
  EUR: "EUR",
};

const formatter = (value, currency) =>
  `${value.toLocaleString("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} ${currencySymbols[currency]}`;

const calculate = () => {
  const amount = Number.parseFloat(amountInput.value) || 0;
  const rate = Number.parseFloat(rateInput.value) || 0;
  const currency = currencyInput.value;
  const bonusMultiplier = bonusInput.checked ? 1.05 : 1;

  const giftValue = amount;
  const creditValue = amount * bonusMultiplier;

  gift.textContent = formatter(giftValue, currency);
  credits.textContent = formatter(creditValue, currency);
  locked.textContent = `${rate.toLocaleString("tr-TR", {
    maximumFractionDigits: 2,
  })} TRY/${currency}`;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  calculate();
});

[amountInput, currencyInput, rateInput, bonusInput].forEach((input) => {
  input.addEventListener("input", calculate);
});

calculate();
