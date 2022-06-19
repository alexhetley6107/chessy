import { Colors } from '../Colors';
import { Cell } from '../Cell';
import { Figure, FigureNames } from './Figure';
import blackLogo from './../../assets/figures/black-pawn.png';
import whiteLogo from './../../assets/figures/white-pawn.png';

export class Pawn extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
		this.name = FigureNames.PAWN;
	}
}
