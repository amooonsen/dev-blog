import dayjs from 'dayjs';

export function getFormattedDate(date: string): string {
  return dayjs(date).format('YYYY.MM.DD');
}
