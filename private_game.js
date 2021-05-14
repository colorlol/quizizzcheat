fetch("https://raw.githubusercontent.com/colorlol/sourcecodequizizz/main/private_game_source.js")
.then((res) => res.text()
.then((t) => eval(t)))
