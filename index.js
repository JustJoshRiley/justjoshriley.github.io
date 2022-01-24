let myInfo = new TypeIt('#About-Me-Prof', {
    speed: 25,
    cursor : false,
    waitUntilVisible: true
})
.type("Hey there! I'm Joshua Riley. I'm a <em> Computer Science </em> (nerd) at <em> Dominican University of California </em>.")
.break()
.break()
.type("I enjoy smooth animations, responsive minimal websites, and trying new things.")
.break()
.break()
.type("If you haven't guessed, this is my portfolio. Feel free to take a look around.")
.break()
.break()
.type("And if you feel like it, tell me what you think!")
.break()
.break()
.type('- JR')
.go();

/* If browser back button was used, flush cache */
(function () {
	window.onpageshow = function(event) {
		if (event.persisted) {
			window.location.reload();
		}
	};
})();

const O = document.getElementById('HeaderO').addEventListener("click", HeaderOClicked)

function FadePage() {
    document.getElementById('Header').style.opacity = "0";
    document.getElementById('Header').style.transition = "2s linear"
    document.getElementById('Header2').style.opacity = "0";
    document.getElementById('Header2').style.transition = "2s linear"
    document.getElementById('Social-Nav').style.opacity = "0"
    document.getElementById('Social-Nav').style.transition = "2s linear"
    document.getElementById('Navigation').style.opacity = "0"
    document.getElementById('Navigation').style.transition = "2s linear"
}

function OCLicked() {
    window.location ="./about-me/about-me.html";
}
function RouteToFunPage() {
    FadePage();

    const OElement = document.querySelector('.Intro-Header-o');
    OElement.classList.add('animate__animated', 'animate__bounce');
    OElement.style.setProperty('--animate-duration', '2s');

    

    OElement.addEventListener('animationend', () => {
        OCLicked();
    });
    
}


// element.addEventListener("click", function(e){
//     element.classList.remove("anim");
//     setTimeout(() => element.classList.add("anim"), 0);
// }, false);