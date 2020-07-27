// soal 1
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var objDaftarPeserta = {
	nama : arrayDaftarPeserta[0].toString(),
	"jenis kelamin" : arrayDaftarPeserta[1].toString(),
	hobi : arrayDaftarPeserta[2].toString(),
	"tahun lahir" : arrayDaftarPeserta[3].toString(),
}
console.log(objDaftarPeserta)

// soal 2
var objdaftarbuah = [{
	nama: "straberry", 
	warna: "merah", 
	"ada bijinya": "tidak", 
	harga: 9000
},{
	nama: "jeruk", 
	warna: "orange", 
	"ada bijinya": "ada", 
	harga: 800
},{
	nama: "semangka", 
	warna: "Hijau & Merah", 
	"ada bijinya": "adda", 
	harga: 10000
},{
	nama: "pisang", 
	warna: "kuning", 
	"ada bijinya": "tidak", 
	harga: 5000
},];
console.log(objdaftarbuah[0]);

// soal 3

var dataFilm = [];

function TambahDataFilm(nama, durasi, genre, tahun) {
    dataFilm.push({
        nama: nama,
        durasi: durasi,
        genre: genre,
        tahun: tahun
    })
}
TambahDataFilm("Pacarku Adalah Istri Ayahku", "30 menit", "Azab", 2000);
console.log(dataFilm);

// soal 4

// release 0
class Animal {
    constructor(name) {
        this._name = name;
        this._legs = 4;
        this._cold_blooded = false;
    }

    get name() {
        return this._name;
    }

    get legs() {
        return this._legs;
    }

    get cold_blooded() {
        return this._cold_blooded;
    }
}


var sheep = new Animal("shaun");
console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);

// release 1

class Ape extends Animal {
    constructor(name) {
        super(name);
        this._legs = 2;
    }

    yell() {
        console.log('Auooo');
    }
}

class Frog extends Animal {
    constructor(name) {
        super(name);
    }

    jump() {
        console.log('hop hop');
    }
}

var sungokong = new Ape("kera sakti");
sungokong.yell(); // "Auooo"

var kodok = new Frog("buduk");
kodok.jump(); // "hop hop"

// Soal 5
class Clock {
    constructor({
        template
    }) {
        this.timer;
        this._template = template;
    }

    render(template) {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this._template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(timer);
    }

    start() {
        this.render(this._template);
        this.timer = setInterval(() => this.render(this._template), 1000);
    }

}

var clock = new Clock({
    template: 'h:m:s'
});

console.log('\n\nSoal 5\n');
clock.start(); 