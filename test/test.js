var chai = require('chai');
var expect = require('chai').expect;
var server = require('../server.js');
var Nightmare = require('nightmare');
var assert = require('assert');

describe('Load a Page', function() {
    this.timeout('30s')

    let nightmare = null
    beforeEach(() => {
        nightmare = new Nightmare()
    })

    describe('/ (Home Page)', () => {
        it('should load without error', done => {
            nightmare.goto('http://localhost:3000/path')
                .end()
                .then(function(result) { done() })
                .catch(done)
        })
    })
})