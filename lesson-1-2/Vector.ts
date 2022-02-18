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
}