namespace Game {
	export const isMoveCommand = (command: ICommand): command is MoveCommand => command instanceof MoveCommand

	export class MoveCommand implements ICommand, InjectableCommand {
		internalCommand?: ICommand;

		constructor(private movable: IMovable, internalCommand?: ICommand) {
			this.internalCommand = internalCommand
		}

		public execute() {
			this.movable.position = this.movable.position.add(this.movable.movementVelocity)
		}

		inject(other: ICommand): void {
			this.internalCommand = other
		}
	}
}