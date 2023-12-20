const request = require('supertest');
const app = require('../app'); 

describe('GET /nearest-vaccines', function() {
  this.timeout(60000);
  it('responds with json', function(done) {
    request(app)
      .get('/nearest-vaccines?lat=40.7128&long=-74.0060&n=5')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});

