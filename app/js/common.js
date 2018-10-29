// line.onclick = function() {
//   }


window.onscroll = function() {
	let scrolled = window.pageYOffset || document.documentElement.scrollTop;
	if (scrolled > "500" ) {
        document.querySelector('.line1').style.height="130px";
        document.querySelector('.line2').style.height="130px";
		document.querySelector('.line3').style.height="80px";
        document.querySelector('.line4').style.height="130px";
		document.querySelector('.line5').style.height="132px";
		document.querySelector('.line6').style.height="90px";        
	}
	else {
        document.querySelector('.line1').style.height="0px";
        document.querySelector('.line2').style.height="0px";
		document.querySelector('.line3').style.height="0px";
        document.querySelector('.line4').style.height="0px";
		document.querySelector('.line5').style.height="0px";
		document.querySelector('.line6').style.height="0px";
	}
}