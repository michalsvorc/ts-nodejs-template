import { describe, expect, it, vi } from 'vitest';
import result from './main.js';

vi.mock('nanoid', () => ({
  nanoid: () => 'test-id',
}));

describe('Main function', () => {
  it('should return greeting message', () => {
    expect(result.greeting).toBe('Hello World.');
  });
  it('it should call random id function', () => {
    expect(result.id).toBe('test-id');
  });
});
