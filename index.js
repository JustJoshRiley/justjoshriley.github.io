
let myInfo = new TypeIt('#myStats', {
    speed: 50
})
.type('Hello there!')
.break()
.break()
.type('My name is Joshua Riley. I\'m a <em> Computer Science </em>student at <em>Make School</em> in San Francisco.')
.break()
.break()
.type('Welcome to my portfolio: my playground of interactions, features, and work that I have accomplished.')
.break()
.break()
.type('Click around and be curious, I hope something here inspires you.')
.break()
.break()
.type('- J.W.R')
.go();

const body = document.getElementById('body')
body.addEventListener('keydown', (event) => {
    console.log(event.key);
    if (event.key == "j" || event.key == "J") {
       const J = document.getElementsByClassName('menuj')[0];
       J.click();
    }
    else if (event.key == 'w' || event.key == 'W') {
        const W = document.getElementsByClassName('menuw')[0];
        W.click();
    }
    else if (event.key == 'r' || event.key == 'R') {
        const R = document.getElementsByClassName('menur')[0];
        R.click();
    }
    // else if (event.key ==' ') {
    //     alert('space was clicked');
    // }
    else {
        
    }


})

const themeSelector = document.querySelector("#themes");
const themeLink = document.querySelector(".theme");

function setTheme() {
    let theme = themeSelector.value;
    themeLink.setAttribute("href", "theme-" + theme + ".css");
}

themeSelector.addEventListener("change", () => {
    setTheme();
});

setTheme();




function isDarkMode() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches == true){
        themeSelector.value = 'dark'
        let theme = themeSelector.value
        themeLink.setAttribute("href", "theme-" + theme + ".css")
        setTheme()
    }
    else {
        themeSelector.value = 'light'
        let theme = themeSelector.value
        themeLink.setAttribute("href", "theme-" + theme + ".css")
        setTheme()
    }
}
isDarkMode();
window.setInterval(isDarkMode ,2000);