const chai = require('chai');
const chaiHttp = require('vhai-http');
const expect = chai.expect;
const app = require('../app');

chai.use(chaiHttp);

describe("API ENPOINT TESTING")