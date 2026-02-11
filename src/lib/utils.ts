import { HistoryItem } from './types';

const HISTORY_KEY = 'ai_history';

export function saveToHistory(item: HistoryItem) {
  const history: HistoryItem[] = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
  history.unshift(item);
  if (history.length > 10) history.pop();
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

export function getHistory(): HistoryItem[] {
  return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
}