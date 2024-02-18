import Board from "./Board"
import { useEffect, useState } from 'react'

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [lastMove, setLastMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  useEffect(() => {
    if(currentMove > lastMove) setLastMove(currentMove);
  }, [currentMove, lastMove])

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    console.log("cur : " + currentMove)
  //  updateLastMove();
    console.log(" onplay : last " +lastMove + "  current " + currentMove )
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
/*
  const updateLastMove = () => {
    console.log(" cur update : " + currentMove + " last " + lastMove)
    if(currentMove > lastMove) setLastMove(currentMove );
    console.log(" after cur update : " + currentMove + " last " + lastMove)
  }*/

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  const handleRestart = () => {
    jumpTo(0);
    setLastMove(0);
  }
  const handleGoBack = () => {
    if (currentMove === 0) {
      return;
    }
    jumpTo(currentMove - 1);
  }
  const handleGoFront = () => {
    console.log("last " +lastMove + "  current " + currentMove )
    if ( currentMove === lastMove || currentMove === 8) return;
    jumpTo(currentMove + 1);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          //
          onGoBack={handleGoBack}
          onGoFront={handleGoFront}

        />
      </div>
      <div className="restart">
        <button className="restart-button" onClick={handleRestart}>
          <svg height="40" viewBox="0 0 21 21" width="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="matrix(0 1 1 0 2.5 2.5)"><path d="m3.98652376 1.07807068c-2.38377179 1.38514556-3.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8" /><path d="m4 1v4h-4" transform="matrix(1 0 0 -1 0 6)" /></g></svg>
        </button>
      </div>

      {/*
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
        */ }

    </div>
  );
}
export default Game