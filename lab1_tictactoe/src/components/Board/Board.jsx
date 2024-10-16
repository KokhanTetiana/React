import React, { useState } from "react";
import Square from "../Square/Square"; 
import calculateWinner from "../../helper_functions/calculateWinner";
import './Board.css';
import ResetButton from "../ResetButton/ResetButton"; 
import StatusBox from "../StatusBox/StatusBox"; 

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = (i) => {
        const newSquares = squares.slice();
        if (calculateWinner(newSquares) || newSquares[i]) {
            return;
        }

        newSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    };

    const resetGame = () => {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    }

    const renderSquare = (i) => {
        return <Square value={squares[i]} onClick={() => handleClick(i)} />;
    };

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Переможець: ' + winner;
    } else {
        status = 'Наступний хід: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <div>
            <StatusBox status={status} />
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            <ResetButton onReset={resetGame} />
        </div>
    );
};

export default Board; 
