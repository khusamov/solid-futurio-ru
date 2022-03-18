import ICommand from '../ICommand';
import IQueue from '../../base/queue/IQueue';
import IoC from '../../ioc/IoC';

export default class RepeatCommand implements ICommand {
	constructor(
		private repeatedCommand: ICommand
	) {}

	public execute(): void {
		const commandQueue = IoC.resolve<IQueue<ICommand>>('CommandQueue')
		commandQueue.enqueue(this.repeatedCommand)
	}
}