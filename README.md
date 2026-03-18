@trenskow/combinations
----

Small package that iterates an array and returns all ordering combinations.

# Usage

````javascript

import combinations from '@trenskow/combinations';

combinations([1, 2, 3])

/*
	-> [
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
		]
*/

````

# License

See license in LICENSE
