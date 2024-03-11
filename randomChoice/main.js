// const numberList = [33, 19, 8, 31, 5, 4, 15, 6, 7, 25, 21, 18, 6, 19, 20, 9, 27, 15, 22, 11, 20, 28, 19, 0, 49, 11, 20, 35, 29, 22, 9, 34, 23, 15, 21, 19, 18, 5, 50, 12, 17, 22, 19, 22, 17, 33, 3, 40, 26, 10, 8, 23];

const numberList = [33,19,8,31,5,15,6,7,25,21,18,6,19,20,9,27,15,22,11,20,28,19,49,11,20,35,29,22,9,34,23,15,21,19,18,5,50,12,22,19,22,33,3,40,26,10,8,23,0,17,17];

// choose a random element in the array
function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// get the random element from the array and display it in the HTML div
const randomItem = getRandomItem(numberList);
console.log("randomItem from the array");
console.log(randomItem);

// get the HTML element by its ID
const resultatDiv = document.getElementById("resultat");
resultatDiv.textContent = "To save this week : " + randomItem + " euros.";

const amountSaved = [4];
let sum = 0;

for (let i = 0; i < amountSaved.length; i++) {
    sum += amountSaved[i];
}

console.log("somme_deja_epargnee");
console.log(sum);

// get the HTML element by its ID
const somme_deja_epargnee = document.getElementById("somme_deja_epargnee");

somme_deja_epargnee.textContent = "Alreayd saved : " + sum + " euros.";

console.log("nombre_de_semaine_restante");
console.log(numberList.length);

// get the HTML element by its ID
const nombre_de_semaine_restante = document.getElementById("nombre_de_semaine_restante");

nombre_de_semaine_restante.textContent = numberList.length + " weeks left.";


