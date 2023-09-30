// (soal1.js) Buatlah sebuah program dari akar pangkat 2 dari x dengan x harus bilangan genap, dengan kondisi sebagai berikut :
// - Jika user input angka kurang dari 0 , user get error message "Tidak bisa input bilangan negatif"
// - Jika user input angka ganjil, user get error message "Tidak bisa input bilangan ganjil"
// Hint : gunakan rumus sqrt(x)

// 30 September 2023

const inputkey = require("readline");

const readinput = inputkey.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readinput.question("Masukkan bilangan genap:  ", (input) => {
  const a = parseInt(input);

  if (a < 0) {
    console.log("Tidak bisa memasukkan bilangan negatif"); //syarat kondisi pertama
  } else if (a % 2 !== 0) {
    console.log("Tidak dapat memasukkan bilangan ganjil"); //syarat kondisi kedua
  } else {
    const hasil = Math.sqrt(a);
    console.log(`Hasil Akar 2 dari ${a} adalah = ${hasil}`);
  }

  readinput.close();
});
