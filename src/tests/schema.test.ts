import { describe, it, expect } from 'vitest';
import { z } from 'zod';

const schema = z.object({
  input: z.string().max(8000),
  mode: z.enum(['summarize', 'explain', 'quiz']),
});

describe('schema', () => {
  it('valid', () => {
    expect(schema.safeParse({ input: 'short', mode: 'summarize' }).success).toBe(true);
  });

  it('invalid long input', () => {
    expect(schema.safeParse({ input: 'a'.repeat(8001), mode: 'summarize' }).success).toBe(false);
  });

  it('invalid mode', () => {
    expect(schema.safeParse({ input: 'short', mode: 'invalid' }).success).toBe(false);
  });
});