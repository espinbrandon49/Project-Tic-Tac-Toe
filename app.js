const game = (() => {

  const createGameboard = (() => {
    const container = document.createElement('div')
    container.classList.add('container')
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
    name = name //eventually name input
    marker = marker
    return { player, name, marker }
  }

  const gamePlay = (() => {
    const player1 = player(1, 'Player 1', 'X')
    const player2 = player(2, 'player2', 'O')
    let count = 0

    for (let i = 1; i <= 9; i++) {
      let gameSpace = document.getElementById(i)
      const playerMove = () => {    
        if (count % 2 == 0) {
          gameSpace.textContent = player1.marker
        } else {
          gameSpace.textContent = player2.marker
        }
        count++
        console.log(count)
      }
      
      gameSpace.addEventListener('click', playerMove)
    }

  })()

  return {}
})()


