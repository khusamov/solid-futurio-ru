import Move from './Move';
import SpaceShip from './SpaceShip';
import Vector from './Vector';

const spaceShip = new SpaceShip

// Изменение скорости корабля.
spaceShip.velocity = new Vector(1, 1)

// Перемещение корабля.
const moveSpaceShip = new Move(spaceShip)
moveSpaceShip.execute()