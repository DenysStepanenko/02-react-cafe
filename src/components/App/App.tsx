import { useState } from 'react';
import css from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import Notification from '../Notification/Notification';
import type { Votes, VoteType } from '../../types/votes';

// Головний компонент, який керує станом і рендерить усі компоненти
export default function App() {
  // Стан для збереження голосів
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Функція для оновлення голосів при натисканні кнопок
  const handleVote = (type: VoteType) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1, // Збільшуємо лічильник для вибраного типу
    }));
  };

  // Функція для скидання всіх голосів
  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  // Обчислення загальної кількості голосів
  const totalVotes = votes.good + votes.neutral + votes.bad;

  // Обчислення відсотка позитивних голосів
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  return (
    <div className={css.app}>
      {/* Компонент із назвою та описом кав’ярні */}
      <CafeInfo />
      {/* Кнопки для голосування та скидання */}
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={totalVotes > 0} // Показуємо Reset, якщо є голоси
      />
      {/* Умовний рендеринг: статистика або повідомлення */}
      {totalVotes > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

