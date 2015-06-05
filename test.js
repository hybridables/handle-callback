/*!
 * handle-callback <https://github.com/hybridables/handle-callback>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var handleCallback = require('./index')
var got = require('then-got')

function fixture (url, callback) {
  var promise = got(url)

  if (callback) {
    promise = handleCallback(promise, callback)
  }

  return promise
}

test('handle-callback:', function () {
  test('should throw TypeError if not a promise given', function (done) {
    function fixture () {
      handleCallback(12345)
    }

    test.throws(fixture, TypeError)
    test.throws(fixture, /handle-callback expect `promise` be Promise/)
    done()
  })
  test('should throw TypeError if not a function given as second param', function (done) {
    function fixture () {
      var promise = got('https://github.com')
      handleCallback(promise, 12345)
    }

    test.throws(fixture, TypeError)
    test.throws(fixture, /handle-callback expect `callback` be function/)
    done()
  })

  test('should work with callback api', function (done) {
    fixture('https://github.com', function (err, res) {
      var body = res[0]

      test.ifError(err)
      test.ok(body.indexOf('<title>') !== -1)
      done()
    })
  })
  test('should handle errors with callback api', function (done) {
    fixture('random://github.com', function (err) {
      test.ifError(!err)
      test.ok(/Protocol.*not supported/.test(err.message))
      done()
    })
  })

  test('should work with promise api', function (done) {
    fixture('https://github.com')
    .then(function (res) {
      var body = res[0]

      test.ok(body.indexOf('<title>') !== -1)
      done()
    })
  })
  test('should catch errors with promise api', function (done) {
    fixture('random://github.com')
    .catch(function (err) {
      test.ifError(!err)
      test.ok(/Protocol.*not supported/.test(err.message))
      done()
    })
  })

  test('should work both promise and callback api in same time', function (done) {
    var marker = 11
    fixture('https://github.com', function (err, res) {
      var body = res[0]

      test.ifError(err)
      test.ok(body.indexOf('<title>') !== -1)
      marker += 21
    })
    .then(function (res) {
      var body = res[0]

      test.ok(body.indexOf('<title>') !== -1)
      test.equal(marker, 32)
      done()
    })
  })
  test('should handle errors in when both promise and callback', function (done) {
    var marker = 11
    fixture('random://github.com', function (err, res) {
      test.ifError(!err)
      test.ok(/Protocol.*not supported/.test(err.message))
      test.equal(res, undefined)
      marker += 22
    })
    .catch(function (err) {
      test.ifError(!err)
      test.ok(/Protocol.*not supported/.test(err.message))
      test.equal(marker, 33)
      done()
    })
  })
})
