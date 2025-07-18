import css from './Notification.module.css';

// Компонент для відображення повідомлення, якщо немає голосів
export default function Notification() {
  return <p className={css.message}>No feedback yet</p>;
}