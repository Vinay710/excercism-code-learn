/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(timer) {
  if (timer === 0) {
    return 'Lasagna is done.';
  }
  else if (timer>0) {
    return 'Not done, please wait.';
  }
  else{
    return 'You forgot to set the timer.';
  }
}

export function preparationTime(layers, averageTime = 2) {
  return layers.length * averageTime;
}

export function quantities(layers) {
  let noodleq = 0;
  let sauceq = 0;

  for (const layer of layers) {
    if (layer === 'noodles') {
      noodleq++;
    } else if (layer === 'sauce') {
      sauceq++;
    }
  }

  return {
    noodles: noodleq * 50,
    sauce: sauceq * 0.2
  };
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
  
}

export function scaleRecipe(recipe,portion) {
  const scaledRecipe = {}

  for (const ingredient in recipe){
    scaledRecipe[ingredient] = recipe[ingredient] * portion / 2;
  }
  return scaledRecipe
}
