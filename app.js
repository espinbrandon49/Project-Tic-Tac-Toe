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

      const getScore = () => {
        let square1 = document.getElementById(1)
        let score1 = 0
        const addScore = function () {
          score1 += parseInt(square1.getAttribute('value'))
          console.log(score1)
        }
        square1.addEventListener('click', addScore)
      }
getScore()


      document.getElementById(2)
      document.getElementById(3)
      let score2 = 0
      let score3 = 0
      let score4 = 0
      let score5 = 0
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






