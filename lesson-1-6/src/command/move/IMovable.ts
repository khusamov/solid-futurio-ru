import Vector from '../../base/Vector';

export default interface IMovable {
	position: Vector
	readonly movementVelocity: Vector
}