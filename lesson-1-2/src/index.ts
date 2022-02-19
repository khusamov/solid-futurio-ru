import Vector from './Vector';
import SpaceShip from './SpaceShip';
import Move from './Move';
import Rotate from './Rotate';
import printChangeState, {IStateHistoryItem} from './printChangeState';

interface IAction {
	execute(): void
}

const spaceShip = new SpaceShip

/**
 * История состояний корабля на каждый момент времени.
 * Хранятся состояния до выполнения действий и после.
 * И промежуточное состояние после измения угла или скорости.
 */
const stateHistory: Array<IStateHistoryItem> = [];

/**
 * Массив применения действий к кораблю.
 * На каждый момент времени запускаются все действия из данного массива.
 * Порядок действий важен! Примечание см. в lesson-1-2/README.md
 */
const actions: IAction[] = [
	new Rotate(spaceShip),
	new Move(spaceShip)
]

/**
 * Перемещаем корабль путем задания вектора скорости.
 */
stateHistory.push({
	comment: 'Перемещение корабля',
	prev: spaceShip.clone(),
	middle: (() => {
		spaceShip.movementVelocity = new Vector(1, 1)
		return spaceShip.clone()
	})(),
	next: (() => {
		actions.forEach(action => action.execute())
		return spaceShip.clone()
	})()
})

/**
 * Добавляем к перемещению вращение корабля, изменяя скорость вращения.
 */
stateHistory.push({
	comment: 'Вращение корабля',
	prev: spaceShip.clone(),
	middle: (() => {
		spaceShip.angularVelocity = Math.PI / 2
		return spaceShip.clone()
	})(),
	next: (() => {
		actions.forEach(action => action.execute())
		return spaceShip.clone()
	})()
})

// Печатаем в консоль историю изменения состояний корабля.
stateHistory.forEach(printChangeState)

