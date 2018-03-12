
function fakeHttpRequest(msg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(msg);
      resolve(msg);
    }, Math.floor(Math.random() * 1001));
  });
}

console.time('Temps sans Promise.all');
fakeHttpRequest('Request 1')
  .then(() => fakeHttpRequest('Request 2'))
  .then(() => fakeHttpRequest('Request 3'))
  .then(() => console.timeEnd('Temps sans Promise.all'));

console.time('Temps avec Promise.all');
Promise.all([
  fakeHttpRequest('Request 1'),
  fakeHttpRequest('Request 2'),
  fakeHttpRequest('Request 3'),
]).then((result) => {
  console.log(result); // Meme ordre que le tableau d'origine
  console.timeEnd('Temps avec Promise.all')
});

const tab = ['Request 1', 'Request 2', 'Request 3'];

console.time('Temps avec Promise.all map');
Promise.all(
  tab.map(elt => fakeHttpRequest(elt))
)
  .then((result) => {
    console.log(result); // Meme ordre que le tableau d'origine
    console.timeEnd('Temps avec Promise.all map')
  });