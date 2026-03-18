//
// index.js
// @trenskow/combinations
//
// Created by Kristian Trenskow on 2026/03/18
// For license see LICENSE.
//

import { expect } from 'chai';

import combinations from '../index.js';

describe('@trenskow/combinations', () => {

	it('should come back with all combinations.', () => {
		expect(combinations([1, 2, 3])).to.deep.equal([
			[],
			[ 1 ],
			[ 1, 2 ],
			[ 1, 2, 3 ],
			[ 1, 3 ],
			[ 1, 3, 2 ],
			[ 2 ],
			[ 2, 1 ],
			[ 2, 1, 3 ],
			[ 2, 3 ],
			[ 2, 3, 1 ],
			[ 3 ],
			[ 3, 1 ],
			[ 3, 1, 2 ],
			[ 3, 2 ],
			[ 3, 2, 1 ]
		]);
	});

});
