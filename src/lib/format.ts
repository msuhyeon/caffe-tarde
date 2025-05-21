import { format } from 'date-fns';

/**
 * 천 단위에 콤마 포맷팅
 * 예: 1234567 -> "1,234,567"
 */
export function formatPrice(value: number): string {
  return value.toLocaleString('ko-KR');
}

export function formatDate(value: string): string {
  return format(new Date(value), 'yyyy-MM-dd');
}
