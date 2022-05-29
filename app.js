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

    const turn = (() => {
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
        }
        gameSpace.addEventListener('click', playerMove)
      }
    })()

    const gameOver = () => {
      const square1 = document.getElementById(1)
      const square2 = document.getElementById(2)
      const square3 = document.getElementById(3)
      const square4 = document.getElementById(4)
      const square5 = document.getElementById(5)
      const square6 = document.getElementById(6)
      const square7 = document.getElementById(7)
      const square8 = document.getElementById(8)
      const square9 = document.getElementById(9)

      function score1() {
        let score1 = 0
        square1.addEventListener('click', () => {
          if (square1.getAttribute('data-value') != 0) {
            score1 += parseInt(square1.getAttribute('value'))
          }
          square1.setAttribute('data-value', 0)
          console.log(score1)
        })
        square2.addEventListener('click', () => {
          if (square2.getAttribute('data-value') != 0) {
            score1 += parseInt(square2.getAttribute('value'))
          }
          square2.setAttribute('data-value', 0)
          console.log(score1)
        })
        square3.addEventListener('click', () => {
          if (square3.getAttribute('data-value') != 0) {
            score1 += parseInt(square3.getAttribute('value'))
          }
          square3.setAttribute('data-value', 0)
          console.log(score1)
        })
        return score1
      }
  console.log(score1())
    }
    gameOver()






  })()

  return {}
})()

/** possible combinations 
111 = 3
112 = 4
122 = 5
222 = 6*/

/*

      let score2 = 0
      let score3 = 0
      let score4 = 0
      let score5 = 0
*/

