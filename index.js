// Intro Typing animation
let myInfo = new TypeIt('#myStats', {
    speed: 50
})

.type('Hiya! I\'m Josh.')
.pause(1000)
.break()
.break()
.type('I\'m a <em> Computer Science </em>student located in San Francisco.')
.pause(500)
.break()
.break()
.type('Welcome to my portfolio.')
.break()
.break()
.type('I hope I can <em>inspire</em> you.')
.go();



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