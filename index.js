var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}

const subText = new TypeIt('#Intro-Subtext', {
    // speed: 50,
    cursor : true,
    waitUntilVisible: true,
})
.type(`let Josh = [ Full_Stack_Software_Engineer`)
.pause(5000)
.type(`, Photographer ]`)
.go(500)
.pause();


let myInfo = new TypeIt('#About-Me-Prof', {
    speed: 25,
    cursor : false,
    waitUntilVisible: false
})
.type("Hey there, I'm Josh. I'm a Software Engineer at EverTrue.")
.break()
.break()
.type("I enjoy animations, transitions, and trying new things.")
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

const O = document.getElementById('HeaderO').addEventListener("click", OCLicked)

function FadePage() {
    document.getElementById('Header').style.opacity = "0";
    document.getElementById('Header').style.transition = "2s linear"
    document.getElementById('Header2').style.opacity = "0";
    document.getElementById('Header2').style.transition = "2s linear"
    document.getElementById('Social-Nav').style.opacity = "0"
    document.getElementById('Social-Nav').style.transition = "2s linear"
    document.getElementById('Navigation').style.opacity = "0"
    document.getElementById('Navigation').style.transition = "2s linear"
    document.getElementById('Intro-Subtext').style.opacity = "0"
    document.getElementById('Intro-Subtext').style.transition = "1.75s linear"
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
    
};

function closeAboutElements() {
    document.getElementById('AboutNav').style.display = "none"
    document.getElementById('AboutNav').style.transition = "2s linear"
    document.getElementById('About').style.display = "none"
    document.getElementById('About').style.transition = "2s linear"
};

function CloseAboutSection() {
    closeAboutElements();
};

// function MinimizeAboutSection() {
//     document.getElementById('AcardContentBox').style.height = "0px";
//     document.getElementById('AcardContentBox').style.transition = "1s linear"
// };

// document.querySelector('body').addEventListener('mousemove', eyeball);
//     function eyeball() {
//     // let eye = new Array(document.getElementById('Intro-Header'));
//     // eye.forEach(function (eye) {
//     //     let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
//     //     let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
//     //     let radian = Math.atan2(event.pageX - x, event.pageY - y);
//     //     let rotating = radian * (180 / Math.PI) * -1 + 270;
//     //     eye.style.transform = `${rotating( + `${rotating}` + radian)}`;
//     // });
//     let eye = document.getElementById('Intro-Header')
//     console.log(eye)
// }