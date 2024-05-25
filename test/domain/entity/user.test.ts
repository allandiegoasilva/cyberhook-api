
import { User } from '@/domain/entity/user';
import { UserType } from '@/domain/enum/user-type';
import { describe, test, expect } from 'vitest';

describe('User', () => {
  test('should create a REGISTERED user', () => {
    const sut = new User({
      type: UserType.REGISTERED,
    });

    expect(sut.id).toBeDefined();
    expect(sut.id).toBeTypeOf('string');
    expect(sut.type).toBe(UserType.REGISTERED);
    expect(sut.createdAt).toBeDefined();
    expect(sut.createdAt).toBeInstanceOf(Date);
  });

  test('should pass all parameters for an existing user', () => {
    const sut = new User({
      id:'',
      type: UserType.REGISTERED,
    });

    expect(sut.id).toBeDefined();
    expect(sut.id).toBeTypeOf('string');
    expect(sut.type).toBe(UserType.REGISTERED);
    expect(sut.createdAt).toBeDefined();
    expect(sut.createdAt).toBeInstanceOf(Date);
  });
  
  test('should calculate a valid expired date', () => {
    const createdAt = new Date();

    const sut = new User({
      type: UserType.VISITOR,
      createdAt: createdAt,
    });

    const expireAt = createdAt;

    expireAt.setDate(expireAt.getDate() + 3);

    expect(sut.expireAt()).toBe(expireAt);
  });
});