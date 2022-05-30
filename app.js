const game = (() => {

  const createGameboard = (() => {
    const body = document.querySelector('body')

    const createTitle = (() => {
      const title = document.createElement('div')
      title.setAttribute('id', 'title')
      body.appendChild(title)

      const titleCol1 = (() => {
        const col1Div = document.createElement('div')
        col1Div.setAttribute('id', 'col1Div')
        title.appendChild(col1Div)

        const imageF = (() => {
          const image = document.createElement('img')
          image.setAttribute('src', './odin-lined.png')
          col1Div.appendChild(image)
        })()

        const titleTxtF = (() => {
          const headerText = document.createElement('h1')
          headerText.textContent = 'Tic Tac Toe'
          col1Div.appendChild(headerText)
        })()
      })()

      const titleCol2 = (() => {
        const markers = document.createElement('fieldset')
        markers.setAttribute('id', 'markers')
        title.appendChild(markers)

        const legendF = (() => {
          const legend = document.createElement('legend')
          legend.textContent = 'Select marker (X/starts)'
          markers.appendChild(legend)
        })()

        const XORf = (() => {
          const XOR = document.createElement('div')
          XOR.setAttribute('id', 'XOR')
          markers.appendChild(XOR)

          const radioXF = (() => {
            const radioX = document.createElement('div')
            radioX.setAttribute('id', 'radioX')
            const labelX = document.createElement('label')
            labelX.setAttribute('for', 'markerX')
            labelX.textContent = 'X'
            const X = document.createElement('input')
            X.setAttribute('type', 'radio')
            X.setAttribute('id', 'markerX')
            X.setAttribute('name', 'marker')
            XOR.appendChild(radioX)
            radioX.appendChild(X)
            radioX.appendChild(labelX)
          })()

          const radioOF = (() => {
            const radioO = document.createElement('div')
            radioO.setAttribute('id', 'radioO')
            const labelO = document.createElement('label')
            labelO.setAttribute('for', 'markerO')
            labelO.textContent = 'O'
            const O = document.createElement('input')
            O.setAttribute('id', 'markerO')
            O.setAttribute('type', 'radio')
            O.setAttribute('name', 'marker')
            XOR.appendChild(radioO)
            radioO.appendChild(O)
            radioO.appendChild(labelO)
          })()

          const restartBF = (() => {
            const restart = document.createElement('button')
            restart.addEventListener('click', () => location.reload())
            restart.textContent = 'restart'
            XOR.appendChild(restart)
          })()
        })()

        const blankDivF = (() => {
          const blankDiv = document.createElement('div')
          blankDiv.setAttribute('id', 'blankDiv')
          markers.appendChild(blankDiv)
        })()

      })()
    })()

    const createContainer = (() => {
      const container = document.createElement('div')
      container.setAttribute('id', 'container')
      body.appendChild(container)

      const createSquares = (() => {
        for (let i = 1; i <= 9; i++) {
          const gameDiv = document.createElement('div')
          gameDiv.classList.add('gameSquare')
          gameDiv.setAttribute('id', i)
          container.appendChild(gameDiv)
        }
      })()
    })()

  })()

  const player = (player, name, marker) => {
    player = player
    name = name //player select name input
    marker = marker // player choose marker
    return { player, name, marker }
  }

  const playerAssignments = () => {
    const assignment = document.createElement('div')
    const player1A = document.createElement('p')
    player1A.textContent = 'Player 1'
    player2A.textContent = 'Player 2'
    assignment.appendChild(player1A)
    assignment.appendChild(player2A)
    markers.appendChild(player1A)
    X.addEventListener('click', playerAssignments)
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
