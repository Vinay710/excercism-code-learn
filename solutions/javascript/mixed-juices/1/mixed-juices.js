// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let duration = 0;
  switch(name){
    case 'Pure Strawberry Joy': duration+=0.5;
      break;
    case 'Energizer':
    case 'Green Garden':
      duration+=1.5;
    break;
    case 'Tropical Island':
      duration+=3;
    break;
    case 'All or Nothing':
      duration+=5;
    break;
    default: duration+=2.5;
  }
  return duration;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedges = 0;
  let count = 0;
  let index = 0;
  while(index<limes.length && wedges<wedgesNeeded){
   if (limes[index]=='small') {
     wedges+=6;
   }
   else if (limes[index]=='medium') {
     wedges+=8;
   }
   else if (limes[index]=='large'){
     wedges+=10;
   }
    count++;
    index++;
  }
  return count;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let index = 0;
  while (index < orders.length && timeLeft > 0) {
    timeLeft -= timeToMixJuice(orders[index]);
    index++;
  }
  return orders.slice(index);
}
