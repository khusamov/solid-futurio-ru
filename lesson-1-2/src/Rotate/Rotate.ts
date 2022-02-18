import IRotable from './IRotable';

export default class Rotate {
	constructor(private rotable: IRotable) {}

	public execute() {
		this.rotable.velocity = this.rotable.velocity.rotate(this.rotable.angle)
	}
}