namespace Game {
	import Vector = Base.Data.Vector;

	export interface IMovable {
		position: Vector
		readonly movementVelocity: Vector
	}
}