namespace Game {
	export class EndMoveCommand extends EndCommand implements ICommand {
		constructor(private moveCommandEndable: IMoveCommandEndable) {
			super()
		}

		public execute() {
			const {universalObject, commandQueue} = this.moveCommandEndable

			universalObject.delete(EMoveValueName.MovementVelocity)
			commandQueue.delete(isMoveCommand)
		}
	}
}