import { http, HttpResponse } from 'msw';
import { response } from '../mocks/response';

export const handlers = [
  http.get('http://localhost:1337/api/page', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(response);
  })
];
