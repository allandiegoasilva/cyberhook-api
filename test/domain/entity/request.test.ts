
import { Request } from '@/domain/entity/request';
import { describe, test, expect } from 'vitest';

describe('Response', () => {
  test('should create default request object', () => {
    const sut = new Request({
      host: "192.0.0.1",
      contentLength: 250,
      contentType: "application/json",
      header: {
        "Origin": "http://localhost:3000"
      },
      method: "POST",
      body: {
        content: "any"
      },
    });

    expect(sut.id).toBeDefined();
    expect(sut.id).toBeTypeOf('string');
    expect(sut.createdAt).toBeDefined();
    expect(sut.createdAt).toBeInstanceOf(Date);
    expect(sut.contentLength).toBe(250);
    expect(sut.header).toEqual({
      "Origin": "http://localhost:3000"
    });
    expect(sut.method).toBe('POST');
    expect(sut.host).toBe("192.0.0.1");
    expect(sut.queryParams).toBeUndefined();
    expect(sut.contentType).toBe('application/json');
  });
});