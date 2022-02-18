import GameObject from './GameObject';

export default class Rocket extends GameObject {
	public fuelBurn() {
		this.fuel = this.fuel - 5
	}
}