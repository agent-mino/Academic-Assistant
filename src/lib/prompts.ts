import { Mode } from './types';

export function buildPrompt(
  mode: Mode,
  input: string,
  explainLevel?: 'eli5' | 'highschool' | 'university',
  quizCount?: '5' | '10',
  quizDifficulty?: 'easy' | 'medium' | 'hard'
) {
  const system = `You are an academic assistant. Provide clear structure, no fake citations. If input too short/unclear, ask 1-2 clarifying questions. Refuse disallowed requests briefly.`;

  let user = '';

  if (mode === 'summarize') {
    user = `Summarize this text in markdown: bullets for main points, bold key terms, 3 takeaways at end.\n\n${input}`;
  } else if (mode === 'explain') {
    const levelMap = { eli5: 'like I\'m 5', highschool: 'high school level', university: 'university level' };
    user = `Explain "${input}" at ${levelMap[explainLevel!]} in markdown: sections, analogy, quick recap at end.`;
  } else if (mode === 'quiz') {
    user = `Create ${quizCount} ${quizDifficulty} questions on "${input}" in markdown: numbered Qs, then answers with short explanations.`;
  }

  return { system, user };
}