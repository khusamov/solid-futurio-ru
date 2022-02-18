import Vector from './Vector';

export default abstract class GameObject {
	#position: Vector = new Vector(0, 0)
	#velocity: Vector = new Vector(0, 0)
	#fuel: number = 100

	get fuel(): number {
		return this.#fuel
	}

	set fuel(newFuel: number) {
		this.#fuel = newFuel
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

	public move() {
		this.position = this.position.add(this.velocity)
	}

	public abstract fuelBurn(): void
}