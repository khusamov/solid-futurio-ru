import Move from './Move';
import SpaceShip from './SpaceShip';
import Vector from './Vector';

const spaceShip = new SpaceShip

// Перемещение корабля.
const moveSpaceShip = new Move(spaceShip)
moveSpaceShip.execute()