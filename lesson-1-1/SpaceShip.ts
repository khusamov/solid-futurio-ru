import GameObject from './GameObject';

export default class SpaceShip extends GameObject {
	#angle: number = 0

	get angle(): number {
		return this.#angle
	}

	set angle(newAngle) {
		this.#angle = newAngle
	}

	public rotate() {
		this.velocity = this.velocity.rotate(this.angle)
	}

	public fuelBurn() {
		this.fuel = this.fuel - 10
	}
}