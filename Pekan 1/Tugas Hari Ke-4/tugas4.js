
//Soal 1
console.log("LOOPING PERTAMA");
var kecilbesar = 2;
while (kecilbesar <= 20) {
	console.log(kecilbesar + " - I love coding");
	kecilbesar += 2;
}

console.log("LOOPING KEDUA");
var result = 20;
while (result >= 0) {
    console.log(result + " - I will become a frontend developer");
    result -= 2;
}

//Soal 2

for(var jml = 1; jml <= 20; jml++){
    if((jml % 3 == 0) && (jml % 2 !=0)){
        console.log(jml +" I Love Coding");
    } else if (jml % 2 == 0) {
        console.log(jml + " Berkualitas");
    } else if (jml % 2 != 0){
        console.log(jml + " Santai");
    }
}

//Soal 3

var hasil = "";
for(i = 1; i <= 7 ; i++){
    console.log(hasil += '#');
}

//Soal 4

var kalimat= "saya sangat senang belajar javascript";
var splitmemisah = kalimat.split(' ');
console.log(splitmemisah);

//soal 5

var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var sortBuah = daftarBuah.sort();
for (i = 0; i < sortBuah.length; i++ ){
    console.log(sortBuah[i]);
}
