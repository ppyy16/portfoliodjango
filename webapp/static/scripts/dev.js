window.onload = function () {
    document.querySelector('.bg-modal-2').style.display = "none";
	document.querySelector('.bubbleteacont').style.display = "none";
	// document.querySelector('.csclass').style.display = "none";
	// document.querySelector('.samsung').style.display = "none";
	// document.querySelector('.spotify').style.display = "none";
	// document.querySelector('.aboutcontent').style.display = "none";
	// document.querySelector('.contactcontent').style.display = "none";

}




document.getElementById('bubbletea').addEventListener("click", function() {
	document.querySelector('.bg-modal-2').style.display = "flex";
	document.querySelector('.bubbleteacont').style.display = "flex";

});

document.getElementById('artisticgroove').addEventListener("click", function() {
	document.querySelector('.bg-modal-2').style.display = "flex";
	document.querySelector('.artisticgroovecont').style.display = "flex";


});



document.getElementById('minimarket').addEventListener("click", function() {
	document.querySelector('.bg-modal-2').style.display = "flex";
	document.querySelector('.minimarketcont').style.display = "flex";


});



document.getElementById('nasapower').addEventListener("click", function() {
	document.querySelector('.bg-modal-2').style.display = "flex";
	document.querySelector('.nasapowercont').style.display = "flex";


});



document.getElementById('mlproj').addEventListener("click", function() {
	document.querySelector('.bg-modal-2').style.display = "flex";
	document.querySelector('.mlprojcont').style.display = "flex";


});







document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.aboutcontent').style.display = "none";
	document.querySelector('.bg-modal-2').style.display = "none";
	document.querySelector('.bg-modal').style.display = "none";
	document.querySelector('.resumecontent').style.display = "none";
	document.querySelector('.contactcontent').style.display = "none";
	document.querySelector('.bubbleteacont').style.display = "none";
	document.querySelector('.artisticgroovecont').style.display = "none";
	document.querySelector('.minimarketcont').style.display = "none";
	document.querySelector('.nasapowercont').style.display = "none";
	document.querySelector('.mlprojcont').style.display = "none";
	document.querySelector('.video').style.display = "none";




});



