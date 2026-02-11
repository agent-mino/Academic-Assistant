import { describe, it, expect } from 'vitest';
import { buildPrompt } from '@/lib/prompts';

describe('buildPrompt', () => {
  it('summarize', () => {
    const { system, user } = buildPrompt('summarize', 'test input');
    expect(system).toContain('academic assistant');
    expect(user).toContain('Summarize this text');
  });

  it('explain', () => {
    const { user } = buildPrompt('explain', 'topic', 'eli5');
    expect(user).toContain('like I\'m 5');
  });

  it('quiz', () => {
    const { user } = buildPrompt('quiz', 'topic', undefined, '5', 'easy');
    expect(user).toContain('5 easy questions');
  });
});