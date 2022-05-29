const game = (() => {

  
  const createGameboard = (() => {
    const body = document.querySelector('body')

    const header = (() => {
      const title = document.createElement('div')
      const image = document.createElement('img')
      const headerText = document.createElement('h1')
      const X = document.createElement('button')
      const Y = document.createElement('button')
      
      image.setAttribute('src', './odin-lined.png')
      X.textContent = "X's"
      Y.textContent = "O's"
      headerText.textContent = 'Tic Tac Toe'
      title.appendChild(image)
      title.appendChild(headerText)
      title.appendChild(X)
      title.appendChild(Y)
      body.appendChild(title)
    })()

    const createContainer = (() => {
      const container = document.createElement('div')
      container.setAttribute('id', 'container')
      body.appendChild(container)
      createSquares = (() => {
        for (let i = 1; i <= 9; i++) {
          const gameDiv = document.createElement('div')
          gameDiv.classList.add('gameSquare')
          gameDiv.setAttribute('id', i)
          container.appendChild(gameDiv)
        }
      })()
    })()
    const createRestart = (() => {
      const restart = document.createElement('button')
      restart.addEventListener('click', () => location.reload())
      restart.textContent = 'restart'
      body.appendChild(restart)
    })()



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

            const gameOver = (() => {
              const square1 = document.getElementById(1)
              const square2 = document.getElementById(2)
              const square3 = document.getElementById(3)
              const square4 = document.getElementById(4)
              const square5 = document.getElementById(5)
              const square6 = document.getElementById(6)
              const square7 = document.getElementById(7)
              const square8 = document.getElementById(8)
              const square9 = document.getElementById(9)

              const lineScores = [
                lineScore(square1, square2, square3),
                lineScore(square1, square2, square3),
                lineScore(square4, square5, square6),
                lineScore(square7, square8, square9),
                lineScore(square1, square4, square7),
                lineScore(square2, square5, square8),
                lineScore(square3, square6, square9),
                lineScore(square1, square5, square9),
                lineScore(square3, square5, square7)
              ]

              const endGame = (() => {
                for (let i = 0; i < lineScores.length; i++) {
                  const container = document.getElementById('container')
                  if (lineScores[i].score() == 3 || lineScores[i].score() == 6) {
                    if (lineScores[i].score() == 3) {
                      console.log('X wins')
                      container.style.pointerEvents = 'none'
                    } else {
                      console.log('Y wins')
                      container.style.pointerEvents = 'none'
                    }
                  }
                }
              })()
            })()
          })()
        }
        gameSpace.addEventListener('click', playerMove)
      }
    })()
  })()
})()
