
var bil1,bil2;
bil1=parseInt(prompt("bilangan 1","0"));
bil2=parseInt(prompt("bilangan 2","0"));
bil1+=bil2;

alert("hasilnya : "+bil1);

var konfirm = confirm("Apakah ingin masuk ke website biodata ?");
if (konfirm==true){
	document.location.href="biodata1.html";
}		
