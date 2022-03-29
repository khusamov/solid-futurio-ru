import IoC from '../../ioc/IoC';
import UniversalObject from '../../object/UniversalObject';
import IInjectableCommand from '../IInjectableCommand';
import IMovable from './IMovable';
import BridgeCommand from '../base/BridgeCommand';
import MacroCommand from '../base/MacroCommand';
import MoveCommand from './MoveCommand';
import RepeatCommand from '../base/RepeatCommand';
import ICommand from '../ICommand';
import IStartable from '../start/IStartable';
import StartCommand from '../start/StartCommand';
import IStopable from '../stop/IStopable';
import StopCommand from '../stop/StopCommand';

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