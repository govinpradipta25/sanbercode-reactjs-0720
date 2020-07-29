//soal 1

const luas = (sisi) =>
{
	const  lingkaran = 3.14 * ((sisi/2) * (sisi/2));
    console.log("Luas Lingkaran yang berdiameter "+sisi+"cm = " + lingkaran +" cm2");

    const  segitiga = 1/2 * sisi * sisi;
    console.log("Luas Segitiga siku dengan alas dan tinggi "+sisi+"cm = " + segitiga +" cm2");

    const  persegi = sisi * sisi;
    console.log("Luas Persegi dengan sisi "+sisi+"cm = " + persegi +" cm2");
}
luas(5);

//soal 2
let kalimat = "";
const rangkumkata = () =>{
	const kata1 = 'saya'
	const kata2 = 'adalah'
	const kata3 = 'seorang'
	const kata4 = 'frontend'
	const kata5 = 'developer'
	kalimat = `${kata1} ${kata2} ${kata3} ${kata4} ${kata5}`
	console.log(kalimat);
}
rangkumkata();

//soal 3
class Books {
  constructor(name, totalPage, price) {
    this.name = name;
    this.totalPage = totalPage;
    this.price = price;
  }
  present(){
	return this.name+' - '+this.totalPage+' - '+this.price;
  }
}

class Komik extends Books{
	constructor(name, totalPage, price, isColorful){
		super(name, totalPage, price);
		this.isColorful = isColorful;
	}
	present() {
		return this.name+' - '+this.totalPage+' - '+this.price+' - '+this.isColorful;
	}
}
var book = new Books('asd', 10, 2000);
console.log(book.present());
var book2 = new Komik('asd', 10, 2000, true);
console.log(book2.present());