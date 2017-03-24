global.DATABASE_URL = 'mongodb://admin:admin@ds127300.mlab.com:27300/node-capstone-find-register-events';

var chai = require('chai');
var chaiHttp = require('chai-http');

var server = require('../server.js');
var Activity = require('../models/activity');

var should = chai.should();
var app = server.app;

chai.use(chaiHttp);

describe('node-capstone-find-register-events', function() {
    before(function(done) {
        server.runServer(function() {
            Activity.create({
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
        Activity.remove(function() {
            done();
        });
    });
});