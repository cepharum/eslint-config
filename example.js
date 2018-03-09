/**
 * (c) 2018 cepharum GmbH, Berlin, http://cepharum.de
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2018 cepharum GmbH
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * @author: cepharum
 */

"use strict";

/**
 * Implements some class.
 */
class SomeClass {
	/**
	 * @param {object} data
	 */
	constructor( data ) {
		this.data = data;
	}
}

/**
 * Implements extension of some class.
 */
class AnotherClass extends SomeClass {
	/**
	 * @param {object} data
	 * @param {string} moreData
	 */
	constructor( data, moreData ) {
		super( data );

		Object.defineProperties( this, {
			/**
			 * @property {string}
			 * @name AnotherClass#more
			 */
			more: { value: String( moreData || "" ) },

			/**
			 * @property {string}
			 * @name AnotherClass#MORE
			 */
			MORE: {
				get: () => String( moreData ).toUpperCase(),
			},
		} );
	}
}

/**
 * Processes some provided instance of another class.
 *
 * @param {AnotherClass} someInstance
 */
function processor( someInstance ) {
	console.log( someInstance.data, someInstance.more, someInstance.MORE ); // eslint-disable-line no-console
}

const instance = new AnotherClass( { info: 42 }, "label" );

processor( instance );
