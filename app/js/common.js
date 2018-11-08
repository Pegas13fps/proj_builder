// line.onclick = function() {
//   }

// function addActiveClass() {
// 	let buttonBack = document.getElementById('backSide');
// 	if (buttonBack.classList === 'active') {
// 		alert('hi');
// 	}
// }
// document.getElementById('backSide').classList.add('active'); 

// function sandwich(id){
// 	style = document.getElementById(id).className;
// 	if(style=='active'){
// 		document.getElementById(id).classList.remove('active');
// 	}else{
// 		document.getElementById(id).classList.add('active');
// 	}
// }


$(".buttons button").click(function(e) {
	e.preventDefault();
	$(".buttons button").removeClass('active');
	$(this).addClass('active');
  })

window.onscroll = function() {
	let scrolled = window.pageYOffset || document.documentElement.scrollTop;
	let widthWindow = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	if (widthWindow >= 769 && scrolled > "550") {
        document.querySelector('.line1').style.height="130px";
        document.querySelector('.line2').style.height="130px";
		document.querySelector('.line3').style.height="80px";
        document.querySelector('.line4').style.height="130px";
		document.querySelector('.line5').style.height="132px";
		document.querySelector('.line6').style.height="90px";

		document.querySelector('.line21').style.height="130px";
		document.querySelector('.line22').style.height="130px";

		document.querySelector('.line31').style.height="130px";

		document.querySelector('.port1').style.opacity="1";
		document.querySelector('.port2').style.opacity="1";      
		document.querySelector('.port3').style.opacity="1";      
		document.querySelector('.port4').style.opacity="1";      
		document.querySelector('.port5').style.opacity="1";      
		document.querySelector('.port6').style.opacity="1";
		
		document.querySelector('.port21').style.opacity="1";      
		document.querySelector('.port22').style.opacity="1";  
		
		document.querySelector('.port31').style.opacity="1";      				

	}
	else if (widthWindow <= 768 && widthWindow >= 321 && scrolled > "550") {
		document.querySelector('.line2').style.height="160px";
		document.querySelector('.line5').style.height="160px";

		document.querySelector('.port1').style.opacity="1";
		document.querySelector('.port2').style.opacity="1";      
		document.querySelector('.port3').style.opacity="1";      
		document.querySelector('.port4').style.opacity="1";      
		document.querySelector('.port5').style.opacity="1";      
		document.querySelector('.port6').style.opacity="1";
		
		document.querySelector('.port21').style.opacity="1";      
		document.querySelector('.port22').style.opacity="1";  
		
		document.querySelector('.port31').style.opacity="1";  
	}
	else if (widthWindow <= 320 && scrolled > "550") {
		document.querySelector('.line1').style.height="38px";
		document.querySelector('.line2').style.height="86px";
		document.querySelector('.line3').style.height="108px";
		document.querySelector('.line4').style.height="127px";
		document.querySelector('.line5').style.height="68px";
		document.querySelector('.line6').style.height="40px";

		document.querySelector('.port1').style.opacity="1";
		document.querySelector('.port2').style.opacity="1";      
		document.querySelector('.port3').style.opacity="1";      
		document.querySelector('.port4').style.opacity="1";      
		document.querySelector('.port5').style.opacity="1";      
		document.querySelector('.port6').style.opacity="1";
		
		document.querySelector('.port21').style.opacity="1";      
		document.querySelector('.port22').style.opacity="1";  
		
		document.querySelector('.port31').style.opacity="1";  
	}
	else {
        document.querySelector('.line1').style.height="0px";
        document.querySelector('.line2').style.height="0px";
		document.querySelector('.line3').style.height="0px";
        document.querySelector('.line4').style.height="0px";
		document.querySelector('.line5').style.height="0px";
		document.querySelector('.line6').style.height="0px";

		document.querySelector('.line21').style.height="0px";
		document.querySelector('.line22').style.height="0px";

		document.querySelector('.line31').style.height="0px";

		document.querySelector('.port1').style.opacity="0";
		document.querySelector('.port2').style.opacity="0";      
		document.querySelector('.port3').style.opacity="0";      
		document.querySelector('.port4').style.opacity="0";      
		document.querySelector('.port5').style.opacity="0";      
		document.querySelector('.port6').style.opacity="0";      

		document.querySelector('.port21').style.opacity="0";      
		document.querySelector('.port22').style.opacity="0"; 
		
		document.querySelector('.port31').style.opacity="0";      		
	}
}
viewSide();
function viewSide() {
	let laptopBack = document.getElementById("backSide");
	// let laptopLeft = document.getElementById("lefrSide");
	// let laptopRight = document.getElementById("rightSide");

	if((laptopBack).classList == "active" ) {
		document.querySelector(".left-side").style.display="none";
		document.querySelector(".right-side").style.display="none";
		document.querySelector(".back-side").style.display="block";
	}
}
// function viewLeftSide() {
// 	let laptopLeft = document.getElementById("lefrSide");
// 	if((laptopLeft).classList == "active") {
// 		document.querySelector(".back-side").style.display="none";
// 		document.querySelector(".right-side").style.display="none";
// 		document.querySelector(".left-side").style.display="block";

// 	}
// }

backSide.onclick = function() {
	document.querySelector(".back-side").style.display="block";
	document.querySelector(".right-side").style.display="none";
	document.querySelector(".left-side").style.display="none";
}

leftSide.onclick = function() {
	document.querySelector(".back-side").style.display="none";
	document.querySelector(".right-side").style.display="none";
	document.querySelector(".left-side").style.display="block";
}

rightSide.onclick = function() {
	document.querySelector(".back-side").style.display="none";
	document.querySelector(".right-side").style.display="block";
	document.querySelector(".left-side").style.display="none";
}