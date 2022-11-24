let a = [0, 1, 3, 2, 0, 3, 4, 6, 8, 2, 4, 6, 85, 4];
let z = new Array(a.length);
for (let i = 0; i < a.length; i++) {
  let x = a[i];
  z[x]++;
}
console.log(z);
