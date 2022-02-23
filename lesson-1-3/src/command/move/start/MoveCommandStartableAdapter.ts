namespace Game {
	import Vector = Base.Data.Vector;

	export class MoveCommandStartableAdapter implements IMoveCommandStartable {
		readonly #commandQueue: DeletableQueue<ICommand>
		readonly #universalObject: UniversalObject
		readonly #movementVelocity: Vector

		constructor(
			commandQueue: DeletableQueue<ICommand>,
			universalObject: UniversalObject,
			movementVelocity: Vector
		) {
			this.#commandQueue = commandQueue
			this.#universalObject = universalObject
			this.#movementVelocity = movementVelocity
		}

		get commandQueue(): DeletableQueue<ICommand> {
			return this.#commandQueue
		}

		get universalObject(): UniversalObject {
			return this.#universalObject
		}

		get movementVelocity(): Vector {
			return this.#movementVelocity
		}
	}
}