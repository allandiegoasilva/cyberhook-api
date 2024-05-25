
import { Response } from '@/domain/entity/response';
import { describe, test, expect } from 'vitest';

describe('Response', () => {
  test('should create default response object', () => {
    const sut = new Response();

    expect(sut.id).toBeDefined();
    expect(sut.id).toBeTypeOf('string');
    expect(sut.createdAt).toBeDefined();
    expect(sut.createdAt).toBeInstanceOf(Date);
    expect(sut.headers).toBeUndefined();
    expect(sut.content).toBe('No content');
    expect(sut.statusCode).toBe(200);
    expect(sut.contentType).toBe('text/html');
    expect(sut.isFile).toBeFalsy();
    expect(sut.filename).toBeUndefined();
  });
  
  test('should create customized object', () => {
    const sut = new Response({
      headers: {
        'Authorization': 'Bearer xxxxx',
        'Referer': 'http://localhost:3000',
        'Origin': 'http://localhost:3000/test'
      },
      content: JSON.stringify({users: []}),
      contentType: 'application/json',
      statusCode: 404
    });

    expect(sut.id).toBeDefined();
    expect(sut.id).toBeTypeOf('string');
    expect(sut.createdAt).toBeDefined();
    expect(sut.createdAt).toBeInstanceOf(Date);
    expect(sut.headers).toEqual( {
      'Authorization': 'Bearer xxxxx',
      'Referer': 'http://localhost:3000',
      'Origin': 'http://localhost:3000/test'
    });
    expect(sut.content).toBe(JSON.stringify({users: []}));
    expect(sut.statusCode).toBe(404);
    expect(sut.contentType).toBe('text/html');
    expect(sut.isFile).toBeFalsy();
    expect(sut.filename).toBeUndefined();
  });
});