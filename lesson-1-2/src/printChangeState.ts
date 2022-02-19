import SpaceShip from './SpaceShip/SpaceShip';

const toDegree = (angle: number) => angle * 180 / Math.PI

export interface IStateHistoryItem {
	prev: SpaceShip
	middle: SpaceShip
	next: SpaceShip
	comment: string
}

export default function printChangeState(stateHistoryItem: IStateHistoryItem) {
	const {prev, middle, next, comment} = stateHistoryItem;
	console.table({
		'Угол': {
			'Начальное состояние': toDegree(prev.angle),
			[comment]: toDegree(middle.angle),
			'Конечное состояние': toDegree(next.angle),
		},
		'Угловая скорость': {
			'Начальное состояние': toDegree(prev.angularVelocity),
			[comment]: toDegree(middle.angularVelocity),
			'Конечное состояние': toDegree(next.angularVelocity),
		},
		'Позиция': {
			'Начальное состояние': prev.position.toString(),
			[comment]: middle.position.toString(),
			'Конечное состояние': next.position.toString(),
		},
		'Скорость перемещения': {
			'Начальное состояние': prev.movementVelocity.toString(),
			[comment]: middle.movementVelocity.toString(),
			'Конечное состояние': next.movementVelocity.toString(),
		}
	})
}