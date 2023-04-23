import { expect, test } from 'vitest';
import { fetchNotifications } from '@/api/fetchNotifications';

test('give back all notifications when query is empty', async () => {
  fetchMock.mockRejectOnce();

  const result = await fetchNotifications('');

  expect(result).toEqual([]);
});
