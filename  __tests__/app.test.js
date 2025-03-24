const request = require('supertest');
const { app, server } = require('../app'); // Import your Express app and server

afterAll((done) => {
  server.close(done);
});

describe('GET /', () => {
  it('should render the index template', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('What is your name?'); // Check for content
  });
});

describe('POST /greeting', () => {
  it('should render the greeting template with the correct name', async () => {
    const response = await request(app)
      .post('/greeting')
      .type('form') // Specify the content type
      .send({ name: 'Test User' });
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Hello Test User!'); // Check for content
  });
});
