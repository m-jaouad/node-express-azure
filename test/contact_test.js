'use strict';
const config = require('../config');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../app');

chai.use(chaiHttp);

describe('/GET', () => {
    it('******* CONTACT PAGE *******', (done) => {
        chai.request(`http://localhost:${config.port}`)
            .get('/contact')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});