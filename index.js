/*!
 * handle-callback <https://github.com/hybridables/handle-callback>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var isPromise = require('is-promise')
var promise2thunk = require('promise2thunk')

module.exports = function handleCallback (promise, callback) {
  if (!isPromise(promise)) {
    throw new TypeError('handle-callback expect `promise` be Promise')
  }
  if (typeof callback !== 'function') {
    throw new TypeError('handle-callback expect `callback` be function')
  }

  promise2thunk(promise)(callback)

  return promise
}
