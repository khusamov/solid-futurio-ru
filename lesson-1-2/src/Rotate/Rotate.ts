import IRotable from './IRotable';

export default class Rotate {
	constructor(private rotable: IRotable) {}

	public execute() {
		this.rotable.angle = this.rotable.angle + this.rotable.angularVelocity
	}
}