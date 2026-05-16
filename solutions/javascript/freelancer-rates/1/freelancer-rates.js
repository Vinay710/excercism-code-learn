// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./freelancer-rates.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Get those rates calculated!

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return 8*ratePerHour;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  const hours = budget/ratePerHour;
  const days = hours/8;
  return Math.floor(days);
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const rateperday = dayRate(ratePerHour); //89
  const rem_day_month = numDays%22; //230%22 =10
  const month_days = numDays-rem_day_month; //230-10 = 220
  const dis_month_days = month_days*rateperday; //220*712 = 156640
  const non_dis_month_days = rem_day_month*rateperday;//10*712 = 7120
  const discountable_month_amt = dis_month_days*discount;// 156640*0.42 = 65788.8
  const final_discounted_amt = dis_month_days-discountable_month_amt;// 156640+65788.8=90851.2
  const final_amt = final_discounted_amt+non_dis_month_days;//90851.2+7120 = 97971.2
  return Math.ceil(final_amt);//97972
}
