const game = (() => {

  const createGameboard = (() => {
    const container = document.createElement('div')
    document.querySelector('body').appendChild(container)
    for (let i = 1; i <= 9; i++) {
      const gameDiv = document.createElement('div')
      gameDiv.classList.add('gameSquare')
      gameDiv.setAttribute('id', i)
      container.appendChild(gameDiv)
    }
  })()

  const player = (player, name, marker) => {
    player = player
    name = name //player select name input
    marker = marker // player choose marker
    return { player, name, marker }
  }

  const gamePlay = (() => {
    const player1 = player(1, 'Player 1', 'X')
    const player2 = player(2, 'player2', 'O')

    const play = (() => {
      let count = 0
      for (let i = 1; i <= 9; i++) {
        let gameSpace = document.getElementById(i)
        const playerMove = () => {
          if (gameSpace.textContent == '') {
            if (count % 2 == 0) {
              gameSpace.textContent = player1.marker
              gameSpace.setAttribute('value', 1)
            } else {
              gameSpace.textContent = player2.marker
              gameSpace.setAttribute('value', 2)
            }
            count++
          }
          const scoring = (() => {
            const lineScore = (squareA, squareB, squareC) => {
              squareA = parseInt(squareA.getAttribute('value'))
              squareB = parseInt(squareB.getAttribute('value'))
              squareC = parseInt(squareC.getAttribute('value'))
              const score = () => squareA + squareB + squareC
              return { score, squareA, squareB, squareC }
            }

            const square1 = document.getElementById(1)
            const square2 = document.getElementById(2)
            const square3 = document.getElementById(3)
            const square4 = document.getElementById(4)
            const square5 = document.getElementById(5)
            const square6 = document.getElementById(6)
            const square7 = document.getElementById(7)
            const square8 = document.getElementById(8)
            const square9 = document.getElementById(9)
            /*
                        const lineScore1 = lineScore(square1, square2, square3)
                        const lineScore2 = lineScore(square4, square5, square6)
                        const lineScore3 = lineScore(square7, square8, square9)
                        const lineScore4 = lineScore(square1, square4, square7)
                        const lineScore5 = lineScore(square2, square5, square8)
                        const lineScore6 = lineScore(square3, square6, square9)
                        const lineScore7 = lineScore(square1, square5, square9)
                        const lineScore8 = lineScore(square3, square5, square7)
                        const lineScores = {
            */
            const lineScores = [
              lineScore(square1, square2, square3)
            ]
            console.log(lineScores[0].score())

            for(let i = 0; i< lineScores.length; i++) {
              if (lineScores[i].score() == 3) {
                console.log('pink')
              }
            }




          })()
        }
        gameSpace.addEventListener('click', playerMove)
      }


    })()



  })()

  return {}
})()

/** possible combinations 
111 = 3
112 = 4
122 = 5
222 = 6*/

/*
const scores = (squareA, squareB, squareC) => {
  squareA = squareA
  squareB = squareB
  squareC = squareC
  let score = 0
  squareA.addEventListener('click', () => {
    if (squareA.getAttribute('data-value') != 0) {
      score += parseInt(squareA.getAttribute('value'))
    }
    console.log(score)
    squareA.setAttribute('data-value', 0)
  })
  squareB.addEventListener('click', () => {
    if (squareB.getAttribute('data-value') != 0) {
      score += parseInt(squareB.getAttribute('value'))
    }
    console.log(score)
    squareB.setAttribute('data-value', 0)
  })
  squareC.addEventListener('click', () => {
    if (squareC.getAttribute('data-value') != 0) {
      score += parseInt(squareC.getAttribute('value'))
    }
    console.log(score)
    squareC.setAttribute('data-value', 0)
  })
 
  return { squareA, squareB, squareC }
}

const score1 = scores(square1, square2, square3)
const score2 = scores(square4, square5, square6)
const score3 = scores(square7, square8, square9)
const score4 = scores(square1, square5, square9)
const score5 = scores(square3, square5, square9)
const score6 = scores(square1, square4, square7)
const score7 = scores(square2, square5, square8)
const score8 = scores(square3, square6, square9)
*/

/*            const square1V = parseInt(square1.getAttribute('value'))
            const square2V = parseInt(square2.getAttribute('value'))
            const square3V = parseInt(square3.getAttribute('value'))
            const square4V = parseInt(square4.getAttribute('value'))
            const square5V = parseInt(square5.getAttribute('value'))
            const square6V = parseInt(square6.getAttribute('value'))
            const square7V = parseInt(square7.getAttribute('value'))
            const square8V = parseInt(square8.getAttribute('value'))
            const square9V = parseInt(square9.getAttribute('value'))
            */
