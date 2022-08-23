var gaji = 4500000;
var transport = 10000;
var harikerja = 24;
var infak = 50000;
var bpjs = 250000;
var pajak = 112500;
var potongan = 412500;
var tunjangan = 240000;

console.log("Gaji Kotor" + ":" + "RP." + gaji);
console.log("===================================");
console.log("Potongan Pajak 2,5%" + ":" + "RP." + pajak);
console.log("Potongan BPJS" + ":" +"RP." + bpjs);
console.log("Potongan Infak" + ":" + "RP." + infak);
console.log("====================================");
console.log("Total potongan" + ":" + "RP." + (pajak+bpjs+infak));
console.log("====================================");
console.log("Tunjangan Transport" + ":" + "RP." + transport);
console.log("Total Hari Kerja" + ":"  + harikerja + "Hari");
console.log("====================================");
console.log("Total Tunjangan" + ":" + "RP." + (transport*harikerja));
console.log("====================================");
console.log("Perhitungan Gaji" + ":");
console.log("(Gaji Kotor - Potongan)" + "+" + "Tunjangan");
console.log("(4500000-412500) + 240000");
console.log("====================================")
console.log("Gaji Bersih" + ":" + "RP." + (gaji-potongan+tunjangan));