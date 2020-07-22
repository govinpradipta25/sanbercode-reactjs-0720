// soal 1

var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";


console.log(kataPertama.concat(" ").concat(kataKedua.charAt(0).toUpperCase()).concat(kataKedua.substr(1)).concat(" ").concat(kataKetiga).concat(" ").concat(kataKeempat.toUpperCase()));
// saya Senang belajar JAVASCRIPT

// soal 2

var kataPertama = 1;
var kataKedua = 2;
var kataKetiga = 4;
var kataKeempat = 5;

var penjumlahan = (kataPertama + kataKedua + kataKetiga + kataKeempat);
console.log(penjumlahan);
// 12

// soal 3

var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua= kalimat.substring(4, 14);
var kataKetiga= kalimat.substring(15, 18);
var kataKeempat= kalimat.substring(19, 24);
var kataKelima= kalimat.substring(25, 31);

console.log('Kata Pertama: ' + kataPertama);	//Kata Pertama: wah 
console.log('Kata Kedua: ' + kataKedua); 		//Kata Kedua: javascript
console.log('Kata Ketiga: ' + kataKetiga); 		//Kata Ketiga: itu
console.log('Kata Keempat: ' + kataKeempat); 	//Kata Keempat: keren
console.log('Kata Kelima: ' + kataKelima);		//Kata Kelima: sekali

// soal 4

var nilai= 99;

if (nilai >= 80) {
	console.log("indeksnya A")
}else if (nilai >= 70) {
	console.log("indeksnya B")
}else if (nilai >= 60) {
	console.log("indeksnya C")
}else if (nilai >= 50) {
	console.log("indeksnya D")
}else if (nilai < 50) {
	console.log("indeksnya E")
 }
 
 // indexnya A

// soal 5

var tanggal = 25;
var bulan = 3;
switch (bulan){case 3: bulan = "Maret";break;} 
var tahun = 2000;

var tampiltanggal = tanggal + " " + bulan + " " + tahun;
console.log(tampiltanggal);	//25 Maret 2000

