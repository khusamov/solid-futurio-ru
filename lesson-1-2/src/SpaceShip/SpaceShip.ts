import IMovable from '../Move/IMovable';
import Vector from '../Vector';
import IRotable from '../Rotate/IRotable';

export default class SpaceShip implements IMovable, IRotable {
	#position: Vector = new Vector(0, 0)
	#movementVelocity: Vector = new Vector(0, 0)
	#angularVelocity: number = 0
	#angle: number = 0

	get angularVelocity(): number {
		return this.#angularVelocity
	}

	set angularVelocity(newAngularVelocity) {
		this.#angularVelocity = newAngularVelocity
	}

	get angle(): number {
		return this.#angle
	}

	set angle(newAngle) {
		this.#angle = newAngle
	}

	get position(): Vector {
		return this.#position
	}

	set position(newPosition: Vector) {
		this.#position = newPosition
	}

	get movementVelocity(): Vector {
		return this.#movementVelocity
	}

	set movementVelocity(newMovementVelocity: Vector) {
		this.#movementVelocity = newMovementVelocity
	}

	public clone(): SpaceShip {
		const clone = new SpaceShip()
		clone.position = this.position
		clone.movementVelocity = this.movementVelocity
		clone.angle = this.angle
		clone.angularVelocity = this.angularVelocity
		return clone
	}
}
