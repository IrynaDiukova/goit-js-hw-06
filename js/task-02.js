const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.querySelector("ul#ingredients");

const takeIngredients = ingredients => {
  return ingredients.map(ingredient => {
    const liRef = document.createElement("li");
    liRef.classList.add("item");
    liRef.textContent = ingredient;

    return liRef;
  });
};

const itemRef = takeIngredients(ingredients);
ulRef.append(...itemRef);
console.log(ulRef);
