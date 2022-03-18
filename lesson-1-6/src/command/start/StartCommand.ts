import ICommand from '../ICommand';
import IoC from '../../ioc/IoC';
import IQueue from '../../base/queue/IQueue';
import IStartable from './IStartable';
import IInjectableCommand from '../IInjectableCommand';

export default class StartCommand implements ICommand {
	constructor(
		private startable: IStartable,
		private longTimeCommand: IInjectableCommand
	) {}

	public execute(): void {
		const commandQueue = IoC.resolve<IQueue<ICommand>>('CommandQueue')
		this.startable.command = this.longTimeCommand
		commandQueue.enqueue(this.longTimeCommand)
	}
}