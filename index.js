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
.type('Welcome to my portfolio - my playground of interactions, features, and work that I have accomplished.')
.break()
.break()
.type('I hope I can <em>inspire</em> you.')
.go();

function fadeContact() {
    document.getElementById('ContactTitle').className = "classname"
} 