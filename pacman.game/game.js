let pac_x = Math.round(Math.random() * 9 + 1)
let pac_y = Math.round(Math.random() * 9 + 1)

let coinOne_x = Math.round(Math.random() * 9 + 1)
let coinOne_y = Math.round(Math.random() * 9 + 1)

let coinTwo_x = Math.round(Math.random() * 9 + 1)
let coinTwo_y = Math.round(Math.random() * 9 + 1)

let coinThree_x = Math.round(Math.random() * 9 + 1)
let coinThree_y = Math.round(Math.random() * 9 + 1)

let bombOne_x = Math.round(Math.random() * 9 + 1)
let bombOne_y = Math.round(Math.random() * 9 + 1)

let bombTwo_x = Math.round(Math.random() * 9 + 1)
let bombTwo_y = Math.round(Math.random() * 9 + 1)

let score = 0

let coinOneState = false
let coinTwoState = false
let coinThreeState = false
let bombOneState = false
let bombTwoState = false

function action() {
  
    switch (event.key) {
        case "ArrowDown":  pac_y++
            if (pac_y > 10) {
                pac_y = 10
            } 
        break
        case "ArrowUp":    pac_y--
            if (pac_y < 1) {
                pac_y = 1
            } 
        break
        case "ArrowRight": pac_x++
            if (pac_x > 10) {
                pac_x = 10
            } 
        break
        case "ArrowLeft":  pac_x--
            if (pac_x < 1) {
                pac_x = 1
            }   
        break
}

    if(pac_x == coinOne_x && pac_y == coinOne_y && !coinOneState) {
        score += 10
        coinOneState = true
        coinOne_x = -1
        coinOne_y = -1
        alert("Yeeeeh! +10 Points!!!")
    }

    if (pac_x == coinTwo_x && pac_y == coinTwo_y && !coinTwoState) {
        score += 10
        coinTwoState = true
        coinTwo_x = -1
        coinTwo_y = -1
        alert("Yeeeeh! +10 Points!!!")

    }

    if (pac_x == coinThree_x && pac_y == coinThree_y && !coinThreeState) {
        score += 10
        coinThreeState = true
        coinThree_x = -1
        coinThree_y = -1
        alert("Yeeeeh! +10 Points!!!")
    }


    if (pac_x == bombOne_x && pac_y == bombOne_y && !bombOneState) {
        score -= 10
        bombOneState = true
        bombOne_x = -1
        bombOne_y = -1
        alert("SAD! -10 Points!!!")
    }
    if (pac_x == bombTwo_x && pac_y == bombTwo_y && !bombTwoState) {
        score -= 10
        bombTwoState = true
        bombTwo_x = -1
        bombTwo_y = -1
        alert("SAD! -10 Points!!!")
    }

    renderMap()
}


function renderMap() {
    gameMap.innerHTML = `` 

    for (let y = 1; y <= 10; y++) {
        for( let x = 1; x <= 10; x++ ) {

            if (x == pac_x && y == pac_y) {
               gameMap.innerHTML += 
                `<div class="pac"></div>`
      }
            else if (x == coinOne_x && y == coinOne_y) {
                gameMap.innerHTML +=
                    `<div class="coin"></div>`
            }
            else if (x == coinTwo_x && y == coinTwo_y) {
                gameMap.innerHTML +=
                    `<div class="coin"></div>`
            }
            else if (x == coinThree_x && y == coinThree_y) {
                gameMap.innerHTML +=
                    `<div class="coin"></div>`
            }
            else if (x == bombOne_x && y == bombOne_y) {
                gameMap.innerHTML +=
                    `<div class="bomb"></div>`
            }
            else if (x == bombTwo_x && y == bombTwo_y) {
                gameMap.innerHTML +=
                    `<div class="bomb"></div>`
            }
            else {
               gameMap.innerHTML +=
                `<div></div>`

      }
   } 
}


gameScore.innerHTML = `Score: ${score}`
}

renderMap()