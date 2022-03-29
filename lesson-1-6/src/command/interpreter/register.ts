import IoC from '../../ioc/IoC';
import UniversalObject from '../../object/UniversalObject';
import ICommand from '../ICommand';
import IQueue from '../../base/queue/IQueue';

/**
 * https://stepik.org/lesson/664251/step/1?unit=662137
 */
IoC.register(
	'Command.GameObjectOrderCommand',
	(uoMessage: UniversalObject): ICommand => {
		return new GameObjectOrderCommand(uoMessage)
	}
)

const message = {
	type: 'Command.GameObjectOrderCommand',
	commandName: 'Command.MoveLongTime.Start',
	objectId: 12345
}


interface IGameObjectOrderMessage {
	readonly commandName: string // Command.MoveLongTime.Start
	readonly objectId: number
}

class GameObjectOrderCommand implements ICommand {
	constructor(
		private uoMessage: UniversalObject
	) {}

	execute(): void {
		const {objectId, commandName} = IoC.resolve<IGameObjectOrderMessage>('Adapter', 'IGameObjectOrderMessage', this.uoMessage)
		const uoGameObject = IoC.resolve<UniversalObject>('GameObject', objectId)
		const command = IoC.resolve<ICommand>(commandName, uoGameObject)

		const commandQueue = IoC.resolve<IQueue<ICommand>>('CommandQueue')
		commandQueue.enqueue(command)
	}
}

// - - - - - - - - - - - - - - - - - - - - - - -

// IoC.register(
// 	'GameObjectCommand',
// 	(uoMessage: UniversalObject): ICommand => {
// 		const {objectId, commandName} = IoC.resolve<IGameObjectOrderMessage>('Adapter', 'IGameObjectOrderMessage', this.uoMessage)
// 		const uoGameObject = IoC.resolve<UniversalObject>('GameObject', objectId)
// 		return IoC.resolve<ICommand>(commandName, uoGameObject)
// 	}
// )
//
// IoC.register(
// 	'commandQueue.enqueue',
// 	(command: ICommand): ICommand => {
// 		return {
// 			execute() {
// 				const commandQueue = IoC.resolve<IQueue<ICommand>>('CommandQueue')
// 				commandQueue.enqueue(command)
// 			}
// 		}
// 	}
// )