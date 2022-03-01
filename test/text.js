import request from 'supertest';
import app from '../index.js';

// test('GET /', (t) => { })
describe('GET /', () => {
  it('responds with greetings', (done) => {
    request(app).get('/api/').expect('Welcome to our API', done);
  });
});
