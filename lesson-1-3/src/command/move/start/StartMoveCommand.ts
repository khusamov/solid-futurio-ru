namespace Game {
	export class StartMoveCommand extends StartCommand implements ICommand {
		constructor(private moveCommandStartable: IMoveCommandStartable) {
			super()
		}

		public execute() {
			const {movementVelocity} = this.moveCommandStartable
			const {universalObject, commandQueue} = this.moveCommandStartable

			universalObject.setValue(EMoveValueName.MovementVelocity, movementVelocity)
			const moveCommand = new MoveCommand(new MovableAdapter(universalObject))
			commandQueue.enqueue(moveCommand)
		}
	}
}