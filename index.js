'use strict'

var Messaging = function () {}

Messaging.prototype.send = function (topic, destination, payload) {}

var Platform = function (identity) {
  this.identity = identity
  this.messaging = new Messaging(this)
}

module.exports = Platform
