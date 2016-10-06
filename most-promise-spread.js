"use strict"

var most = require("most")

/**
 * For a given seed, iterate & return the next tuple.
 */
function step(seed){
	var result = {
		value: seed.array[seed.position],
		seed
	}
	var remaining = seed.array.length - seed.position
	++seed.position

	if(remaining <= 0){
		// /w proper input, ought never iterate here, but just in-case
		result.value = undefined
		result.done = true
	}
	return result
}

/**
 * Unfold a promise returning an array of values into a Most stream.
 * @param {Promise<Array<>>} promise - A promise returning an array
 */
function mostPromiseSpread(promise){
	return most.unfold(function(seed){
		if(seed === undefined){
			return promise.then(function(array){
				if(!array || array.length === undefined){
					throw new Error("Expected an array")
				}
				return step({
					array: array,
					position: 0
				})
			})
		}else{
			return step(seed)
		}
	})
}

module.exports = mostPromiseSpread
