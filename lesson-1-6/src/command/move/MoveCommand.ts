import ICommand from '../ICommand';
import IMovable from './IMovable';

export default class MoveCommand implements ICommand {
	constructor(
		private movable: IMovable
	) {}

	public execute() {
		this.movable.position = this.movable.position.add(this.movable.movementVelocity)
	}
}