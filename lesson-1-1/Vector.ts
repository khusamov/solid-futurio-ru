export default class Vector {
	constructor(
		public x: number,
		public y: number
	) {}

	public add(vector: Vector): Vector {
		return new Vector(
			this.x + vector.x,
			this.y + vector.y
		)
	}

	public rotate(angle: number) {
		return new Vector(
			this.x * Math.cos(angle) - this.y * Math.sin(angle),
			this.x * Math.sin(angle) + this.y * Math.cos(angle)
		)
	}

	public toString() {
		const digits = 2
		return `[${this.x.toFixed(digits)}, ${this.y.toFixed(digits)}]`
	}
}