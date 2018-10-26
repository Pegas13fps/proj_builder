// line.onclick = function() {

//     this.style.height = 200 + 'px';
//   }

    // let a = document.querySelector("#line").style.height;
    // console.log(a);

window.onscroll = function() {
	let scrolled = window.pageYOffset || document.documentElement.scrollTop;
	if (scrolled > "900" ) {
        document.querySelector('.l1').style.height="130px";
        document.querySelector('.l2').style.height="130px";
		document.querySelector('.l3').style.height="80px";
        document.querySelector('.l4').style.height="130px";
		document.querySelector('.l5').style.height="132px";
		document.querySelector('.l6').style.height="90px";        
	}
	else {
        document.querySelector('.l1').style.height="0px";
        document.querySelector('.l2').style.height="0px";
		document.querySelector('.l3').style.height="0px";
        document.querySelector('.l4').style.height="0px";
		document.querySelector('.l5').style.height="0px";
		document.querySelector('.l6').style.height="0px";
	}
}