setTimeout(() => {
  console.log('st1');
}, 100);

setTimeout(() => {
  console.log('st2');
}, 50);

setTimeout(() => {
  console.log('st3');
}, 100);

console.log('fin');

// pile d'appel
// ^
// |
// |
// |
// |
// |            
// |                                             inactif  log('st2')
// |setTimeout-setTimeout-setTimeout-log('fin') ......... =>         ...... => . =>
// +------------------------------------------------------------------------------> temps
//                                                        50ms              100ms
// file d'attente : 