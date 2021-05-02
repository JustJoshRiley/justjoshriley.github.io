let myInfo = new TypeIt('#myStats', {
    speed: 50
})
.type('Hey there!')
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