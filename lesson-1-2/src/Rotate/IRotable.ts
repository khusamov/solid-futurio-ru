import Vector from '../Vector';

export default interface IRotable {
	/**
	 * Скорость вращения.
	 * На какой угол повернуться за единицу времени.
	 * Измеряется в радианах.
	 * Положительные числа вращают против часовой стрелки.
	 */
	angle: number

	/**
	 * Скорость перемещения объекта.
	 */
	velocity: Vector
}