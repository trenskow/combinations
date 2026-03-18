//
// index.js
// @trenskow/combinations
//
// Created by Kristian Trenskow on 2026/03/18
// For license see LICENSE.
//

export default (array) => {

	const result = [[]];

	function backtrack(
		current,
		remaining
	) {

		remaining
			.forEach((item, index) => {

				const next = [...current, item];

				result.push(next);

				backtrack(
					next,
					[
						...remaining.slice(0, index),
						...remaining.slice(index + 1)
					]);

			});

	}

	backtrack([], array);

	return result;

};
