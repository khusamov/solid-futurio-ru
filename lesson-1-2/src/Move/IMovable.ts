import Vector from '../Vector';

export default interface IMovable {
	/**
	 * Координаты движущегося объекта.
	 */
	position: Vector

	/**
	 * Скорость перемещения объекта.
	 */
	movementVelocity: Vector
}