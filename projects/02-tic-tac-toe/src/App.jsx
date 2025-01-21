import { useState } from "react"

const TURNS ={
  X: 'x',
  O: 'o'
}

const Square = ({children, isSelected, updateBoard, index}) => {

  const classname = `square ${isSelected ? 'is-selected': ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return(
    <div onClick={handleClick} className={classname}>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  
  const [turn, setTurn] = useState(TURNS.X)
  // null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null) 

  const updateBoard = (index) => {
    // no actualizamos esta posición
    // si ya tiene algo
    if(board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // cambiar el turno
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }

  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <section className="game">
        {
          board.map((_, index) => {
           return (
            <Square
            key={index}
            index={index}
            updateBoard={updateBoard}
            >
            {board[index]}
            </Square>
           ) 
          })
        }
      </section>
      
      <section className="turn">
        <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
      </section>
      
    </main>
  )
}

export default App
