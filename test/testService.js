const service = require('../service.js')
const assert = require('assert')

describe('Mathematical Operation', function() {
    describe('add', function() {
        it('gives back an integer number', function() {
            assert.equal(1, service.add(0,1))
        })
    })
})
