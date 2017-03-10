var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require('../server');
var models = require('../models');

var should = chai.should();
var app = server.app;
// var storage = server.storage;

chai.use(chaiHttp);

describe('node-capstone-find-register-events', function() {
    before(function(done) {
        server.runServer(function() {
            models.create({
                name: 'Broad beans'
            }, {
                name: 'Tomatoes'
            }, {
                name: 'Peppers'
            }, function() {
                done();
            });
        });
    });

    describe('index page', function() {
        it('exists', function(done) {
            chai.request(app)
                .get('/')
                .end(function(err, res) {
                    res.should.have.status(200);
                    res.should.be.html;
                    done();
                });
        });
    });

    describe('event page', function() {
        it('exists', function(done) {
            chai.request(app)
                .get('/')
                .end(function(err, res) {
                    res.should.have.status(200);
                    res.should.be.html;
                    done();
                });
        });
    });

    describe('dashboard page', function() {
        it('exists', function(done) {
            chai.request(app)
                .get('/')
                .end(function(err, res) {
                    res.should.have.status(200);
                    res.should.be.html;
                    done();
                });
        });
    });
    after(function(done) {
        models.remove(function() {
            done();
        });
    });
});