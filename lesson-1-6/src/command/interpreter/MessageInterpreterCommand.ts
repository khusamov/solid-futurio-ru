import ICommand from '../ICommand';
import IoC from '../../ioc/IoC';
import IQueue from '../../base/queue/IQueue';
import IMessage from './IMessage';
import UniversalObject from '../../object/UniversalObject';

/**
 * Интерпретация сообщений от клиентов.
 * https://stepik.org/lesson/664251/step/1?unit=662137
 */
export default class MessageInterpreterCommand implements ICommand {
	execute(): void {
		const messageQueue = IoC.resolve<IQueue<UniversalObject>>('Message.Queue')
		const uoMessage = messageQueue.dequeue()
		if (uoMessage) {
			const message = IoC.resolve<IMessage>('Adapter', 'IMessage', uoMessage)
			IoC.resolve<ICommand>(message.type, uoMessage).execute()
		}
	}
}