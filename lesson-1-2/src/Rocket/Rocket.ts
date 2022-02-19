import IMovable from '../Move/IMovable';
import Vector from '../Vector';

export default class Rocket implements IMovable {
	#position: Vector = new Vector(0, 0)
	#velocity: Vector = new Vector(0, 0)

	get position(): Vector {
		return this.#position
	}

	set position(newPosition: Vector) {
		this.#position = newPosition
	}

	get velocity(): Vector {
		return this.#velocity
	}

	set velocity(newVelocity: Vector) {
		this.#velocity = newVelocity
	}

	public clone(): Rocket {
		const clone = new Rocket()
		clone.position = this.position
		clone.velocity = this.velocity
		return clone
	}
}