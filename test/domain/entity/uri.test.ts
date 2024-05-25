
import { URI } from '@/domain/entity/uri';
import { describe, test, expect } from 'vitest';

describe('URI', () => {
  test('should create a unique slug', () => {
    const sut = new URI();

    expect(sut.id).toBeDefined();
    expect(sut.id).toBeTypeOf('string');
    expect(sut.createdAt).toBeDefined();
    expect(sut.createdAt).toBeInstanceOf(Date);
  });

  test('should generate a unique path', () => {
    const sut = new URI();
    sut.uniquePath = sut.generateUniquePath();

    expect(sut.id).toBeDefined();
    expect(sut.id).toBeTypeOf('string');
    expect(sut.uniquePath.length).toBe(7);
    expect(sut.createdAt).toBeDefined();
    expect(sut.createdAt).toBeInstanceOf(Date);
  });
  
  test('should fill a unique path', () => {
    const sut = new URI({
      uniquePath: 'uniquePath'
    });
    
    expect(sut.id).toBeDefined();
    expect(sut.id).toBeTypeOf('string');
    expect(sut.uniquePath.length).toBe(7);
    expect(sut.uniquePath).toBe('uniqueP');
    expect(sut.createdAt).toBeDefined();
    expect(sut.createdAt).toBeInstanceOf(Date);
  });
});