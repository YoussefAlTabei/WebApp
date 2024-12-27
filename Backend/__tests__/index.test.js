const request = require('supertest');
const app = require('/server/index');  // Import the app

describe('GET /movies', () => {
  it('should return a list of movies message', async () => {
    const response = await request(app).get('/movies');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('List of movies');
  });
});
