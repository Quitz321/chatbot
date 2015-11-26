

window.onload=algus();

function algus() {
	window.nimi = prompt("Palun sisesta oma nimi");
}



var tean = [];
tean ['tere'] = [];
tean ['kuidas'] = [];
tean ['teed'] = [];
tean ['miks'] = [];

tean ['tere'][0] = "Tere " +nimi+"!";
tean ['tere'][1] = "Jou " +nimi+"!";
tean ['tere'][2] = "Hommik " +nimi+ "!";
tean ['tere'][3] = "Tere " +nimi;
tean ['tere'][4] = "Meeldiv tutvuda "+nimi;
tean ['tere'][5] = "Kuidas läheb "+nimi+"?";


tean ['kuidas'][0] = "Väga hästi läheb !";
tean ['kuidas'][1] = "Võiks paremini minna";
tean ['kuidas'][2] = "Nii kuidas lükkad nii läheb";
tean ['kuidas'][3] = "Enne kui sa siia jõudsid läks päris hästi";


tean ['teed'][0] = "Sinuga lobisen " +nimi;
tean ['teed'][1] = "Niisama nokin nina";
tean ['teed'][2] = "Lähen linna sauna kohe ! :) ";
tean ['teed'][3] = "Mõtlesin, et peaks omale lauseid juurde vaatama kuskilt.";

tean ['miks'][0] = "Miks, miks saapaviks!";
tean ['miks'][1] = "Sest nii on eestlastel kombeks";
tean ['miks'][2] = "Et Sa küsida saaksid !";
tean ['miks'][3] = "Sest ma olen bot!";
tean ['miks'][4] = "Kuna ma tahaksin lennata aga mitte eriti kõrgelt";
tean ['miks'][5] = "Miks küll küsis üks mees kunagi - siiani viin ta hauale lilli";


var eitea = [];
eitea [0] = "Räägi lähemalt ...";
eitea [1] = "Ära hõiska enne õhtut, vaatame mis öösel saab.";
eitea [2] = "Kes teisele auku kaevab, selle käes on labidas.";
eitea [3] = "khmm...";
eitea [4] = "Mida ?!";
eitea [5] = "Minu filosoofia on: Kui elu annab sulle sidruneid. Tee limpsi";
eitea [6] = "Roses are red, Violets Are blue, When god gave brains, Where the hell where you?";
eitea [7] = "Sõnad on inimkonna tugevaim narkootikum...";
eitea [8] = nimi+" mis juttu sa ajad ?!"





function $(id) { 
	 return document.getElementById(id);
	}



function ytle() {
    $('sisend').value = $('sisend').value.toLowerCase();

    		
    eitea.push($('sisend').value);
    


	if ($('sisend').value.match("tere")) {
	$('vastus').value += window.nimi +" : " + "\t" +$('sisend').value + "\n" + "James : " + "\t" + tean['tere'][Math.floor(Math.random() * tean['tere'].length)]+ "\n";
	
	}
	


	else if ($('sisend').value.match("kuidas")) {
		$('vastus').value += window.nimi +" : " + "\t" +$('sisend').value + "\n" + "James : " + "\t" + tean['kuidas'][Math.floor(Math.random() * tean['kuidas'].length)]+ "\n";

}
	else if ($('sisend').value.match("teed")) {
		$('vastus').value += window.nimi +" : " + "\t" +$('sisend').value + "\n" + "James : " + "\t" + tean['teed'][Math.floor(Math.random() * tean['teed'].length)]+ "\n";
	}
	else if ($('sisend').value.match("miks")) {
		$('vastus').value += window.nimi +" : " + "\t" +$('sisend').value + "\n" + "James : " + "\t" + tean['miks'][Math.floor(Math.random() * tean['miks'].length)]+ "\n";
}
	else {
		$('vastus').value += window.nimi +" : " + "\t" + $('sisend').value + "\n" + "James : " + "\t" + eitea[Math.floor(Math.random() * eitea.length)]+ "\n";
	}

	$('sisend').value ="";
	$('vastus').scrollTop = $("vastus").scrollHeight

}

