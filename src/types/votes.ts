// Тип для можливих варіантів голосування
export type VoteType = 'good' | 'neutral' | 'bad';

// Інтерфейс для об'єкта голосів
export interface Votes {
  good: number;
  neutral: number;
  bad: number;
}