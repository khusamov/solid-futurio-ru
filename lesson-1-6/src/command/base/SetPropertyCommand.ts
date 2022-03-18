import ICommand from '../ICommand';
import UniversalObject from '../../object/UniversalObject';

export default class SetPropertyCommand implements ICommand {
	constructor(
		private universalObject: UniversalObject,
		private propertyName: any,
		private value: any
	) {}
	public execute(): void {
		this.universalObject.setValue(this.propertyName, this.value)
	}
}