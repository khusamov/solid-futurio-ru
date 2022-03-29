import ICommand from '../ICommand';
import IStopable from './IStopable';
import NotOperationCommand from '../base/NotOperationCommand';

export default class StopCommand implements ICommand {
	constructor(
		private stopable: IStopable
	) {}

	public execute(): void {
		this.stopable.command.inject(new NotOperationCommand)
	}
}