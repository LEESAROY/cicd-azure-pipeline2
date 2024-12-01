const httpMocks = require('node-mocks-http');
const myFunction = require('./index');

describe('Azure Function HTTP Trigger', () => {
  it('should return status 200 and correct body', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();

    const context = {
      res: {}
    };

    req.method = 'GET';
    req.url = '/test';

    console.log("Mocked context before function execution:", context);
    console.log("Mocked request:", req);

    await myFunction(context, req, res);

    console.log("Full response object after function execution:", context.res);
    console.log("Response body in context.res:", context.res.body);

    expect(context.res.status).toBe(200);
    expect(context.res.body).toBe("Hello, world!");
  });
});
