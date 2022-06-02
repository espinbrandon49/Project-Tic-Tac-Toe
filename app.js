const createGameUI = (() => {
  const body = document.querySelector('body')

  const winnerDisplay = document.createElement('div')
  body.appendChild(winnerDisplay)
  winnerDisplay.setAttribute('id', 'winnerDisplay')

  const createGameDisplay = (() => {
    const gameDisplay = document.createElement('div')
    gameDisplay.setAttribute('id', 'gameDisplay')
    //gameDisplay.textContent = 'gameDisplay'
    body.appendChild(gameDisplay)
  })()
})()

const createSection1 = (() => {
  const section1 = document.createElement('div')
  section1.setAttribute('id', 'section1')
  gameDisplay.appendChild(section1)
})()

const createPlayer1 = (() => {
  const player1Marker = document.createElement('div')
  player1Marker.setAttribute('id', 'player1Marker')
  player1Marker.textContent = 'X'

  const player1Input = document.createElement('input')
  player1Input.setAttribute('id', 'player1Input')
  player1Input.setAttribute('placeholder', 'Player One')

  const player1Div = document.createElement('div')
  player1Div.setAttribute('id', 'player1Div')
  player1Div.appendChild(player1Input)
  player1Div.appendChild(player1Marker)
  section1.appendChild(player1Div)
})()

const createPlayer2 = (() => {
  const player2Input = document.createElement('input')
  player2Input.setAttribute('id', 'player2Input')
  player2Input.setAttribute('placeholder', 'Player Two')

  const player2Marker = document.createElement('div')
  player2Marker.setAttribute('id', 'player2Marker')
  player2Marker.textContent = 'O'

  const player2Div = document.createElement('div')
  player2Div.setAttribute('id', 'player2Div')
  player2Div.appendChild(player2Marker)
  player2Div.appendChild(player2Input)
  section1.appendChild(player2Div)
})()

const createPlayerComputer = (() => {
  const playerComputerInput = document.createElement('button')
  playerComputerInput.setAttribute('id', 'playerComputerInput')
  gameDisplay.appendChild(playerComputerInput)
})()

const createSection2 = (() => {
  const section2 = document.createElement('div')
  section2.setAttribute('id', 'section2')
  gameDisplay.appendChild(section2)
})()

const createGameGrid = (() => {
  for (let i = 1; i <= 9; i++) {
    const gameSquare = document.createElement('div')
    gameSquare.classList.add('gameSquare')
    gameSquare.setAttribute('id', `a${i}`)
    section2.appendChild(gameSquare)
  }
})() //createGameGrid

//END CREATE UI//

const gamePlay = (() => {
  const square1 = document.getElementById('a1')
  const square2 = document.getElementById('a2')
  const square3 = document.getElementById('a3')
  const square4 = document.getElementById('a4')
  const square5 = document.getElementById('a5')
  const square6 = document.getElementById('a6')
  const square7 = document.getElementById('a7')
  const square8 = document.getElementById('a8')
  const square9 = document.getElementById('a9')

  let count = 0
  for (let i = 1; i <= 9; i++) {
    const gameSpace = document.getElementById(`a${i}`)

    const play = () => {
      const playerTurn = (() => {
        if (gameSpace.textContent == '') {
          if (count % 2 == 0) {
            gameSpace.textContent = 'X'
            gameSpace.setAttribute('value', 1)

            const HAL = (() => {
              if (document.getElementById('player2Input').getAttribute('value') == 'HAL') {
                const squareArray = [square1, square2, square3, square4, square5, square6, square7, square8, square9]
                const random = Math.floor(Math.random() * (9 - 0) + 0)
                const computerPlayerMove = ((square) => {
                  if (square.getAttribute('value') == null) {
                    square.setAttribute('value', 2)
                    square.textContent = 'O'
                  } else {
                    for (let i = 0; i < squareArray.length; i++) {
                      if (squareArray[i].getAttribute('value') == null) {
                        squareArray[i].setAttribute('value', 2)
                        squareArray[i].textContent = 'O'
                        i = 9
                      }
                    }
                  }
                })(squareArray[random]) //computerPlayerMove
                count++
              }
            })() //HAL

          } else {
            gameSpace.textContent = 'O'
            gameSpace.setAttribute('value', 2)
          }
          count++
        }
      })() //playerTurn

      const gameOver = (() => {
        const lineScore = (squareA, squareB, squareC) => {
          squareA = parseInt(squareA.getAttribute('value'))
          squareB = parseInt(squareB.getAttribute('value'))
          squareC = parseInt(squareC.getAttribute('value'))
          const score = () => squareA + squareB + squareC
          return { score, squareA, squareB, squareC }
        }
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
        const winner = (() => {
          for (let i = 0; i < lineScores.length; i++) {
            if (lineScores[i].score() == 3 || lineScores[i].score() == 6) {
              if (lineScores[i].score() == 3) {
                document.getElementById('winnerDisplay').textContent = 'Player1 Won'
              } else {
                document.getElementById('winnerDisplay').textContent = 'Player2 Won'
              }
              document.getElementById('section2').style.pointerEvents = 'none'
              document.getElementById('section2').setAttribute('value', 5)
              function refresh() { location.reload() }; setTimeout(refresh, 1500)
            }
          }
        })() //winner
        const tieScore = (() => {
          if (square1.textContent != '' && square2.textContent != '' && square3.textContent != '' && square4.textContent != '' && square5.textContent != '' && square6.textContent != '' && square7.textContent != '' && square8.textContent != '' && square9.textContent != '' && document.getElementById('section2').getAttribute('value') != 5) {
            document.getElementById('winnerDisplay').textContent = 'TIE'
            document.getElementById('section2').style.pointerEvents = 'none'
            function refresh() { location.reload() }; setTimeout(refresh, 1500)
          }
        })() //tieSCore
      })() //gameOver
    } //play()

    const disablePlayerInput = (() => { //starting a game
      document.getElementById('section2').addEventListener('click', () => {
        document.getElementById('player1Input').disabled = true
        document.getElementById('player2Input').disabled = true
        document.getElementById('playerComputerInput').disabled = true
      })
    })()

    const vsHALButton = (() => {
      document.getElementById('playerComputerInput').addEventListener('click', () => {
        document.getElementById('player2Input').setAttribute('value', 'HAL')
        document.getElementById('player2Input').disabled = true
        console.log('How am i ALive?')
      })
    })()

    const playGame = (() => gameSpace.addEventListener('click', play))()

  } //*for loop[gamePlay]

})() //gamePlay
//
