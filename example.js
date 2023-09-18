"use strict";

/**
 * Implements some class.
 */
class SomeClass {
	/**
	 * @param {object} data some data
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
	 * @param {object} data some data
	 * @param {string} moreData additional data
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
 * @param {AnotherClass} someInstance instance to process
 * @returns {void}
 */
function processor( someInstance ) {
	console.log( someInstance.data, someInstance.more, someInstance.MORE ); // eslint-disable-line no-console
}

const instance = new AnotherClass( { info: 42 }, "label" );

processor( instance );

console.log( instance.hasOwnProperty( "test" ) );
