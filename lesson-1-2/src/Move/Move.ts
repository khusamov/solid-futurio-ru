import IMovable from './IMovable';

export default class Move {
	constructor(private movable: IMovable) {}

	public execute() {
		this.movable.position = this.movable.position.add(this.movable.velocity)
	}
}