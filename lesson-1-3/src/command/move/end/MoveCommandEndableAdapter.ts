namespace Game {
	import Vector = Base.Data.Vector;

	export class MoveCommandEndableAdapter implements IMoveCommandEndable {
		readonly #commandQueue: DeletableQueue<ICommand>
		readonly #universalObject: UniversalObject

		constructor(
			commandQueue: DeletableQueue<ICommand>,
			universalObject: UniversalObject
		) {
			this.#commandQueue = commandQueue
			this.#universalObject = universalObject
		}

		get commandQueue(): DeletableQueue<ICommand> {
			return this.#commandQueue
		}

		get universalObject(): UniversalObject {
			return this.#universalObject
		}
	}
}