

window.onload = function () {
    document.querySelector('.bg-modal').style.display = "none";
	document.querySelector('.resumecontent').style.display = "none";
		document.querySelector('.nasapowercont').style.display = "none";
 $('#resumecontent').hide();	// document.querySelector('.spotify').style.display = "none";
	// document.querySelector('.aboutcontent').style.display = "none";
	// document.querySelector('.contactcontent').style.display = "none";

}



document.getElementById('resume').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
	 $('#resumecontent').show()
});



document.getElementById('contact').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
	document.querySelector('.contactcontent').style.display = "flex";
	 $('#resumecontent').hide();	// document.querySelector('.spotify').style.display = "none";

});



document.getElementById('about').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
	document.querySelector('.aboutcontent').style.display = "flex";
	 $('#resumecontent').hide();	// document.querySelector('.spotify').style.display = "none";


});



document.querySelector("#header > div.bg-modal > div > div.close").addEventListener("click", function() {
		 $('#resumecontent').hide()

	document.querySelector('.aboutcontent').style.display = "none";
	document.querySelector('.bg-modal').style.display = "none";
	document.querySelector('.resumecontent').style.display = "none";
	document.querySelector('.contactcontent').style.display = "none";




});