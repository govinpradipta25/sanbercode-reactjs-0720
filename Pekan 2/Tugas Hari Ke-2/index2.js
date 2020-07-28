//SOAL 2
var readBooksPromise = require('./promise.js')

var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

// Lanjutkan code untuk menjalankan function readBooksPromise 

function panggil(time,i){
    readBooksPromise(time,books[i])
        .then(function(check){
            i++;
            var length=books.length;
            if(check<=0){
                console.log("Waktu Habis");
            }
            else if(i<length){
                time=check;
                panggil(check,i);
            }
            else{
                console.log("Semua buku sudah dibaca");
            }
        })
}
panggil(10000,0); 