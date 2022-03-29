import IoC from '../../ioc/IoC';
import UniversalObject from '../../object/UniversalObject';
import Vector from '../../base/Vector';
import ICommand from '../ICommand';
import SetPropertyCommand from '../base/SetPropertyCommand';
import IMovable from './IMovable';
import MoveCommand from './MoveCommand';

IoC.register(
	'Movable.Position',
	(universalObject: UniversalObject): Vector => {
		return universalObject.getValue<Vector>('Position')
	}
)

IoC.register(
	'Movable.Position.Set',
	(universalObject: UniversalObject, position: Vector): ICommand => {
		return new SetPropertyCommand(universalObject, 'Position', position)
	}
)

IoC.register(
	'Command.Move',
	(universalObject: UniversalObject) => {
		const movable = IoC.resolve<IMovable>('Adapter', 'IMovable', universalObject);
		return new MoveCommand(movable)
	}
)