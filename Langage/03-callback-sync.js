[1, 2, 3, 4]
  .filter((nb) => nb % 2 === 0)
  .forEach((nb) => {
    console.log(nb);
  });

console.log('fin');

// pile d'appel
// ^
// |
// |
// |
// |
// |             log(nb)  log(nb)
// |=>-=>-=>-=>  =>     - =>
// |filter     - forEach        - log('fin')
// +--------------------------------------> temps
// 