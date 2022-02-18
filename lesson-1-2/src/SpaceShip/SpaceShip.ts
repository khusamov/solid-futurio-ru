import IMovable from '../Move/IMovable';
import Vector from '../Vector';
import IRotable from '../Rotate/IRotable';

export default class SpaceShip implements IMovable, IRotable {
	#position: Vector = new Vector(0, 0)
	#velocity: Vector = new Vector(0, 0)
	#angle: number = 0

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

	get velocity(): Vector {
		return this.#velocity
	}

	set velocity(newVelocity: Vector) {
		this.#velocity = newVelocity
	}

	public clone(): SpaceShip {
		const clone = new SpaceShip()
		clone.position = this.position
		clone.angle = this.angle
		clone.velocity = this.velocity
		return clone
	}
}
