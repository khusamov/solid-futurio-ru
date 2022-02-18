import SpaceShip from './SpaceShip/SpaceShip';
import Move from './Move/Move';
import {describe, it} from 'mocha';
import {assert} from 'chai';

describe('Move', () => {
	it('execute', () => {
		assert.doesNotThrow(() => {
			const spaceShip = new SpaceShip
			const moveSpaceShip = new Move(spaceShip)
			moveSpaceShip.execute()
		})
	})
})