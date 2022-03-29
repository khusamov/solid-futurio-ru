import IMovable from './IMovable';
import Vector from '../../base/Vector';
import UniversalObject from '../../object/UniversalObject';
import IoC from '../../ioc/IoC';
import ICommand from '../ICommand';

export default class MovableAdapter implements IMovable {
	constructor(private universalObject: UniversalObject) {}

	get position(): Vector {
		return IoC.resolve<Vector>('Movable.Position', this.universalObject);
	}

	set position(position: Vector) {
		IoC.resolve<ICommand>('Movable.Position.Set', this.universalObject, position).execute();
	}

	get movementVelocity() {
		return IoC.resolve<Vector>('Movable.MovementVelocity', this.universalObject);
	}
}