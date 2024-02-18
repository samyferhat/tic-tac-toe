

function Square({ value, onSquareClick, i }) {
    return (
        <button
            className={`square s${i}`}
            onClick={onSquareClick}
        >
            {value}

        </button>
    )
}

export default Square;