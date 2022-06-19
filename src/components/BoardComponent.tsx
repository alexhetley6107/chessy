import { Fragment, FC, useState, useEffect } from 'react';
import { Board } from '../models/Board';
import { Cell } from '../models/Cell';
import CellComponent from './CellComponent';

interface IBoardProps {
	board: Board;
	setBoard: (board: Board) => void;
}

const BoardComponent: FC<IBoardProps> = ({ board, setBoard }) => {
	const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

	const onClickCell = (cell: Cell) => {
		if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
			selectedCell.moveFigure(cell);
			setSelectedCell(null);
		} else if (cell.figure) {
			setSelectedCell(cell);
		}
	};

	const highlightCells = () => {
		board.highlightCells(selectedCell);
		updateBoard();
	};

	const updateBoard = () => {
		const newBoard = board.getCopyBoard();
		setBoard(newBoard);
	};

	useEffect(() => {
		highlightCells();
	}, [selectedCell]);

	return (
		<div className='board'>
			{board.cells.map((row, idx) => (
				<Fragment key={idx}>
					{row.map((cell) => (
						<CellComponent
							cell={cell}
							key={cell.id}
							selected={cell.x === selectedCell?.x && cell.y === selectedCell.y}
							click={onClickCell}
						/>
					))}
				</Fragment>
			))}
		</div>
	);
};

export default BoardComponent;
