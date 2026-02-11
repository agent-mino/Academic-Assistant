export type Mode = 'summarize' | 'explain' | 'quiz';

export interface ApiRequest {
  input: string;
  mode: Mode;
  explainLevel?: 'eli5' | 'highschool' | 'university';
  quizCount?: '5' | '10';
  quizDifficulty?: 'easy' | 'medium' | 'hard';
}

export interface ApiResponse {
  requestId: string;
  mode: Mode;
  outputMarkdown: string;
}

export interface HistoryItem {
  mode: Mode;
  timestamp: number;
  preview: string;
}