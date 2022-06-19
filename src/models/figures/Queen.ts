import { Colors } from '../Colors';
import { Cell } from '../Cell';
import { Figure, FigureNames } from './Figure';
import blackLogo from './../../assets/figures/black-queen.png';
import whiteLogo from './../../assets/figures/white-queen.png';

export class Queen extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
		this.name = FigureNames.QUEEN;
	}
}
