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

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.aboutcontent').style.display = "none";
	document.querySelector('.bg-modal-2').style.display = "none";
	document.querySelector('.bg-modal').style.display = "none";
	document.querySelector('.resumecontent').style.display = "none";
	document.querySelector('.contactcontent').style.display = "none";
	document.querySelector('.bubbleteacont').style.display = "none";
	document.querySelector('.artisticgroovecont').style.display = "none";




});
