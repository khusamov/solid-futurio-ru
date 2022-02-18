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
		'Позиция': {
			'Начальное состояние': prev.position.toString(),
			[comment]: middle.position.toString(),
			'Конечное состояние': next.position.toString(),
		},
		'Скорость': {
			'Начальное состояние': prev.velocity.toString(),
			[comment]: middle.velocity.toString(),
			'Конечное состояние': next.velocity.toString(),
		}
	})
}