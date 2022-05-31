const createGameUI = (() => {
  const body = document.querySelector('body')

  const createGameDisplay = (() => {
    const gameDisplay = document.createElement('div')
    gameDisplay.setAttribute('id', 'gameDisplay')
    gameDisplay.textContent = 'gameDisplay'
    body.appendChild(gameDisplay)
  })()
})()

const createSection1 = (() => {
  const section1 = document.createElement('div')
  section1.setAttribute('id', 'section1')
  section1.textContent = 'section1'
  gameDisplay.appendChild(section1)
})()

const createPlayer1 = (() => {
  const player1Input = document.createElement('input')
  player1Input.setAttribute('id', 'player1Input')
  player1Input.setAttribute('placeholder', 'Player One')
  section1.appendChild(player1Input)

  const player1GameOver = document.createElement('div')
  player1GameOver.setAttribute('id', 'player1GameOver')
  section1.appendChild(player1GameOver)

  const player1Marker = document.createElement('div')
  player1Marker.setAttribute('id', 'player1Marker')
  player1Marker.textContent = 'X'
  section1.appendChild(player1Marker)
})()

const createPlayer2 = (() => {
  const player2Input = document.createElement('input')
  player2Input.setAttribute('id', 'player2Input')
  player2Input.setAttribute('placeholder', 'Player Two')
  section1.appendChild(player2Input)

  const player2GameOver = document.createElement('div')
  player2GameOver.setAttribute('id', 'player2GameOver')
  section1.appendChild(player2GameOver)

  const player2Marker = document.createElement('div')
  player2Marker.setAttribute('id', 'player2Marker')
  player2Marker.textContent = 'O'
  section1.appendChild(player2Marker)
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
    gameSquare.setAttribute('id', i)
    section2.appendChild(gameSquare)
  }
})() //createGameGrid

const gameTurn = (() => {
  let count = 0
  for (let i = 1; i <= 9; i++) {
    const gameSpace = document.getElementById(i)
    const playerMove = () => {
      if (gameSpace.textContent == '') {
        if (count % 2 == 0) {
          gameSpace.textContent = 'X'
          gameSpace.setAttribute('value', 1)
        } else {
          gameSpace.textContent = 'O'
          gameSpace.setAttribute('value', 2)
        }
        count++
      }
      const lineTally = (() => {
        const square1 = document.getElementById(1)
        const square2 = document.getElementById(2)
        const square3 = document.getElementById(3)
        const square4 = document.getElementById(4)
        const square5 = document.getElementById(5)
        const square6 = document.getElementById(6)
        const square7 = document.getElementById(7)
        const square8 = document.getElementById(8)
        const square9 = document.getElementById(9)

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
        for (let i = 0; i < lineScores.length; i++) {
          if (lineScores[i].score() == 3 || lineScores[i].score() == 6) {
            if (lineScores[i].score() == 3) {
              console.log('player1 Wins')
              document.getElementById('player1GameOver').textContent = 'W'
              document.getElementById('player2GameOver').textContent = 'L'
            } else {
              console.log('player2 Wins')
              document.getElementById('player2GameOver').textContent = 'W'
              document.getElementById('player1GameOver').textContent = 'L'
            }
            document.getElementById('section2').style.pointerEvents = 'none'
            document.getElementById('section2').setAttribute('value', 5)
            function refresh() { location.reload() }; setTimeout(refresh, 1500)
          }
        } //*for Loop[lineTally]

        const tieScore = (() => {
          if (square1.textContent != '' && square2.textContent != '' && square3.textContent != '' && square4.textContent != '' && square5.textContent != '' && square6.textContent != '' && square7.textContent != '' && square8.textContent != '' && square9.textContent != '' && document.getElementById('section2').getAttribute('value') != 5) {
            document.getElementById('player1GameOver').textContent = 'T'
            document.getElementById('player2GameOver').textContent = 'T'
            document.getElementById('section2').style.pointerEvents = 'none'
            function refresh() { location.reload() }; setTimeout(refresh, 1500)
          }
        })() //tieSCore
      })() //lineTally
    } //playerMove
    document.getElementById('section2').addEventListener('click', () => {
      document.getElementById('player1Input').disabled = true
      document.getElementById('player2Input').disabled = true
    })
    gameSpace.addEventListener('click', playerMove)
  } //*for loop[gameTurn]
})() //gameTurn
