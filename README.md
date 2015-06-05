# handle-callback [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Make promise to have support for callback api, it returns promise in that same time.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i handle-callback --save
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var handleCallback = require('handle-callback')
var got = require('then-got')

function hybridGot (url, callback) {
  var promise = got(url)

  if (callback) {
    promise = handleCallback(promise, callback)
  }

  return promise
}

hybridGot('https://github.com')
.then(function (res) {
  console.log(res[0])
  //=> html content of the page
})
.catch(console.error)

// or both in same time
hybridGot('https://github.com', function (err, res) {
  console.log(err) //=> null
  console.log(res[0]) //=> html of page
})
.then(function (res) {
  console.log(res[0]) //=> html of page
})
.catch(console.error)
```


## Related
- [make-callback](https://github.com/tunnckocore/make-callback): Make synchronous function to support callback api
- [always-callback](https://github.com/tunnckocore/always-callback): Create callback api for given sync function. Guarantee that given function (sync or async, no matter) will always have callback api and will handle errors correctly.
- [always-promise](https://github.com/tunnckocore/always-promise): Create Bluebird Promise from given async or synchronous function. It automatically convert sync functions to async, then to promise.
- [hybridify](https://github.com/hybridables/hybridify): Building hybrid APIs. You can use both callback and promise in same time.
- [handle-arguments](https://github.com/hybridables/handle-arguments): Handles given Arguments object - return separatly last argument (commonly callback) and other arguments as Array. Useful in node-style callback flow.
- [manage-arguments](https://github.com/tunnckocore/manage-arguments): Prevents arguments leakage - managing arguments. From Optimization killers by Petka Antonov.
- [promise2thunk](https://github.com/tunnckocore/promise2thunk): Convert (transform) promise to thunk, just like was in co@3


## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/hybridables/handle-callback/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/handle-callback
[npmjs-img]: https://img.shields.io/npm/v/handle-callback.svg?label=handle-callback

[license-url]: https://github.com/hybridables/handle-callback/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/hybridables/handle-callback
[codeclimate-img]: https://img.shields.io/codeclimate/github/hybridables/handle-callback.svg

[travis-url]: https://travis-ci.org/hybridables/handle-callback
[travis-img]: https://img.shields.io/travis/hybridables/handle-callback.svg

[coveralls-url]: https://coveralls.io/r/hybridables/handle-callback
[coveralls-img]: https://img.shields.io/coveralls/hybridables/handle-callback.svg

[david-url]: https://david-dm.org/hybridables/handle-callback
[david-img]: https://img.shields.io/david/hybridables/handle-callback.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg
