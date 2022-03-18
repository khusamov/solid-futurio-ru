import IoC from '../../ioc/IoC';
import UniversalObject from '../../object/UniversalObject';
import Vector from '../../base/Vector';
import ICommand from '../ICommand';
import SetPropertyCommand from '../base/SetPropertyCommand';
import IMovable from './IMovable';
import MoveCommand from './MoveCommand';
import IInjectableCommand from '../IInjectableCommand';
import BridgeCommand from '../base/BridgeCommand';
import MacroCommand from '../base/MacroCommand';
import RepeatCommand from '../base/RepeatCommand';
import StartCommand from '../start/StartCommand';
import IStartable from '../start/IStartable';
import IStopable from '../stop/IStopable';
import StopCommand from '../stop/StopCommand';

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

IoC.register(
	'Command.MoveLongTime',
	(universalObject: UniversalObject): IInjectableCommand => {
		const movable = IoC.resolve<IMovable>('Adapter', 'IMovable', universalObject);
		const moveLongTimeCommand = new BridgeCommand()
		moveLongTimeCommand.inject(
			new MacroCommand([
				new MoveCommand(movable),
				new RepeatCommand(moveLongTimeCommand)
			])
		)
		return moveLongTimeCommand;
	}
)

IoC.register(
	'Command.MoveLongTime.Start',
	(universalObject: UniversalObject): ICommand => {
		const startable = IoC.resolve<IStartable>('Adapter', 'IStartable', universalObject);
		return new StartCommand(
			startable,
			IoC.resolve<IInjectableCommand>('Command.MoveLongTime', universalObject)
		)
	}
)

IoC.register(
	'Command.MoveLongTime.Stop',
	(universalObject: UniversalObject): ICommand => {
		const stopable = IoC.resolve<IStopable>('Adapter', 'IStopable', universalObject);
		return new StopCommand(stopable)
	}
)