//
// index.d.ts
// @trenskow/combinations
//
// Created by Kristian Trenskow on 2026/03/18
// For license see LICENSE.
//

declare function combinations<T>(
	array: T[]
): T[][];

declare namespace combinations {
	function single<T>(
		array: T[][]
	): T[][];
}

export default combinations;
