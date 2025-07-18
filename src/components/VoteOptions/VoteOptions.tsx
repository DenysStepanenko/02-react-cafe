import css from './VoteOptions.module.css';
import type { VoteType } from "../../types/votes";

// Інтерфейс для пропсів компонента
interface VoteOptionsProps {
  onVote: (type: VoteType) => void; // Функція для обробки голосування
  onReset: () => void; // Функція для скидання
  canReset: boolean; // Чи показувати кнопку Reset
}

// Компонент із кнопками для голосування та скидання
export default function VoteOptions({ onVote, onReset, canReset }: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onVote('good')}>
        Good
      </button>
      <button className={css.button} onClick={() => onVote('neutral')}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onVote('bad')}>
        Bad
      </button>
      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}