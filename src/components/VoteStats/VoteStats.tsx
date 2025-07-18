import css from './VoteStats.module.css';
import { Votes } from '../../types/votes';

// Інтерфейс для пропсів компонента
interface VoteStatsProps {
  votes: Votes; // Об'єкт із кількістю голосів
  totalVotes: number; // Загальна кількість голосів
  positiveRate: number; // Відсоток позитивних голосів
}

// Компонент для відображення статистики голосів
export default function VoteStats({ votes, totalVotes, positiveRate }: VoteStatsProps) {
  return (
    <div className={css.container}>
      <p className={css.stat}>
        Good: <strong>{votes.good}</strong>
      </p>
      <p className={css.stat}>
        Neutral: <strong>{votes.neutral}</strong>
      </p>
      <p className={css.stat}>
        Bad: <strong>{votes.bad}</strong>
      </p>
      <p className={css.stat}>
        Total: <strong>{totalVotes}</strong>
      </p>
      <p className={css.stat}>
        Positive: <strong>{positiveRate}%</strong>
      </p>
    </div>
  );
}