namespace Game {
	import Vector = Base.Data.Vector;

	export interface IMoveCommandStartable {
		readonly universalObject: UniversalObject
		readonly movementVelocity: Vector
		readonly commandQueue: DeletableQueue<ICommand>
	}
}