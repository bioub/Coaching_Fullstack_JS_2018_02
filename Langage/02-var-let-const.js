
function main() {
  
  if (true) {
    var a = 'a';
    // let et const portée de bloc (if, for...)
    let b = 'b';
    b = 'b1';
    const c = 'c';
    // c = 'c1'; // Error par réaffectable
  }

  console.log(a); // a
  console.log(b); // undefined
  console.log(c); // undefined
  

}