namespace Game {
	import Vector = Base.Data.Vector;

	export enum EMoveValueName {
		Position = 'position',
		MovementVelocity = 'movement-velocity'
	}

	export class MovableAdapter implements IMovable {
		constructor(private universalObject: UniversalObject) {}

		get position(): Vector {
			return this.universalObject.getValue<Vector>(EMoveValueName.Position)
		}

		set position(position: Vector) {
			this.universalObject.setValue(EMoveValueName.Position, position)
		}

		get movementVelocity() {
			return this.universalObject.getValue<Vector>(EMoveValueName.MovementVelocity)
		}
	}
}