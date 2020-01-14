var rows = 5;
var asterisks = '';

console.log('1. Menyusun barisan bintang')


for (i = 0; i < rows; i++) {
 console.log('*');
}


console.log('2. Menggunakan nested loop')


for (i = 5; i > 0; i--) {
 for (j = 0; j < rows; j++) {
  asterisks += '*';
 }
 console.log(asterisks);
asterisks = ''
}

console.log('3. ')


for (i = 0; i < rows; i++) {
 for (j = 0; j <= i; j++) {
  asterisks += '*'
 }
 console.log(asterisks)
 asterisks = ''
}


console.log('4. ')


for (i = rows; i > 0; i--) {
 for (j = 0; j < i; j++) {
  asterisks += '*';
 }
 console.log(asterisks);
 asterisks = '';
}
