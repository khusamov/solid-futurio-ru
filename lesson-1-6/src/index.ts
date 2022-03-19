import Queue from './base/queue/Queue';
import UniversalObject from './object/UniversalObject';
import Vector from './base/Vector';
import ICommand from './command/ICommand';
import IoC from './ioc/IoC';

/**
 * Очередь команд для всех игровых объектов.
 */
const commandQueue = new Queue<ICommand>()


/**
 * Массив игровых объектов.
 */
const gameObjects: UniversalObject[] = []

// Создание корабля как игрового объекта.
const spaceShip = new UniversalObject
spaceShip.setValue('type', 'spaceShip')
spaceShip.setValue('position', new Vector())

gameObjects.push(spaceShip)

// Добавление в очередь команды 'Длительное движение' для корабля.
commandQueue.enqueue(IoC.resolve<ICommand>('Command.MoveLongTime.Start', spaceShip))
