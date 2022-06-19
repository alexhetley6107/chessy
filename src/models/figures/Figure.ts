import { Cell } from '../Cell';
import { Colors } from '../Colors';
import logo from './../../assets/figures/black-bishop.png';

export enum FigureNames {
	FIGURE = 'Фигура',
	KING = 'Король',
	QUEEN = 'Ферзь',
	KNIGHT = 'Конь',
	ROOK = 'Ладья',
	PAWN = 'Пешка',
	BISHOP = 'Слон',
}

export class Figure {
	color: Colors;
	logo: typeof logo | null;
	cell: Cell;
	name: FigureNames;
	id: number;

	constructor(color: Colors, cell: Cell) {
		this.color = color;
		this.cell = cell;
		this.cell.figure = this;
		this.logo = null;
		this.name = FigureNames.FIGURE;
		this.id = Math.random();
	}

	canMove(cell: Cell): boolean {
		return true;
	}
	moveFigure(cell: Cell): boolean {
		return true;
	}
}
