var chai = require("chai");
var chaiHttp = require("chai-http");

var app = require("../server");

var should = chai.should();

chai.use(chaiHttp);

describe("/", function () {

	it("should return a 200 status code and HTML on GET", function () {
		return chai.request(app).get("/").then(function (res) {
			res.should.have.status(200);
			res.should.be.html;
		});
	});
});