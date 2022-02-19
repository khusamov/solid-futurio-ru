import IMovable from '../Move/IMovable';
import Vector from '../Vector';

export default class Rocket implements IMovable {
	#position: Vector = new Vector(0, 0)
	#movementVelocity: Vector = new Vector(0, 0)

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

	public clone(): Rocket {
		const clone = new Rocket()
		clone.position = this.position
		clone.movementVelocity = this.movementVelocity
		return clone
	}
}