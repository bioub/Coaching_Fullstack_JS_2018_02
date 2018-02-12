// function declaration

// celle là est écrasé par la seconde sans avertissement
// et remontée en début de scope (portée)
function sum(a, b) {
  console.log('sum 1');
  return a + b;
}

sum(2, 3); // sum 2

function sum(a, b) {
  console.log('sum 2');
  return a + b;
}

// function expression
const substract = function() {

};

// Error si tu réaffectes
// const substract = function() {};

// fonction fléchée : plus court
const multiply = (a, b) => a * b;

// si plusieurs lignes utiliser {} et return
const divide = (a, b) => {
  return a / b;
};

// si le retour est un objet les parenthèses sont obligatoires
const getContact = () => ({
  prenom: 'Romain',
  nom: 'Bohdanowicz'
});

// Intéret numéro 1 plus court
// syntaxe courte utile dans ce genre de cas (callback)
[1, 2, 3, 4, 23, 15, 2, 8]
  .filter((nb) => nb % 2 === 0)
  .forEach((nb) => {
    console.log(nb);
  });


// Intéret numéro 2
// mélange callback et objet/this

const contact1 = {
  prenom: 'Romain',
  hello: function() {
    console.log('Bonjour je suis ' + this.prenom);
  },
  helloAsync: function() {
    var that = this; // sauvegarde that dans la portée de closure
    setTimeout(function() {
      console.log('Bonjour je suis ' + that.prenom);
    }, 100);
  }
};

contact1.hello(); // Bonjour je suis Romain
contact1.helloAsync(); // Bonjour je suis Romain

const contact2 = {
  prenom: 'Romain',
  hello() { // method property
    console.log('Bonjour je suis ' + this.prenom);
  },
  helloAsync() { // ne pas fléchée (sinon pas de this ici)
    // this sauvegardée dans la portée de closure
    setTimeout(() => {
      // dans une fonction fléchées
      // this et arguments n'existent pas
      console.log('Bonjour je suis ' + this.prenom);
    }, 100);
  }
};

contact2.hello(); // Bonjour je suis Romain
contact2.helloAsync(); // Bonjour je suis Romain