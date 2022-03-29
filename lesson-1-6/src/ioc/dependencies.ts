import IoC from './IoC';
import IMovable from '../command/move/IMovable';
import ICommand from '../command/ICommand';
import UniversalObject from '../object/UniversalObject';
import Queue from '../base/queue/Queue';
import MovableAdapter from '../command/move/MovableAdapter';



IoC.register('CommandQueue', (): Queue<ICommand> => {
	// TODO Сделать возврат очереди команд. Где эта очередь хранится-то???
	return new Queue
})

IoC.register('UniversalObject', (id: number): UniversalObject => {
	// TODO Сделать возврат UniversalObject с номером id.
	//  А где хранятся универсальные объекты???
	return new UniversalObject
})

IoC.register('Adapter', (interfaceName: string, universalObject: UniversalObject) => {
	// TODO Сделать генератор адаптеров.
	//  Вместо interfaceName данный обработчик должен принимать Reflection-объект
	//  с информацией о выбранном интерфейсе. Это пока не работает для TypeScript.

	// Авторы рефлексии для тайпскрипта исправляют свою библиотеку
	// по моей заявке https://github.com/typescript-rtti/typescript-rtti/issues/36

	switch (interfaceName) {
		case 'IMovable': return new MovableAdapter(universalObject)
		default: throw new Error(`Не найден адаптер для ${interfaceName}`)
	}
})




