namespace Game {
	export interface IMoveCommandEndable {
		readonly universalObject: UniversalObject
		readonly commandQueue: DeletableQueue<ICommand>
	}
}