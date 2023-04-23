import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { NotificationItem } from '@ledgerhq/ui';

test('display a default label when no type is provided', async () => {
  const props = {
    id: 1,
    data: {
      id: 1,
      amount: 4,
      unit: 'ETH',
      from: '0xe5e428cbb93a218dad2c908f2f3e2f46575d91a5',
      to: '0x5ed8cee6b63b1c6afce3ad7c92f4fd7e1b8fad9f',
    },
  };
  const notificationItem = render(<NotificationItem {...props} />);

  const notificationItemIcon = await notificationItem.findByTestId('notification-type');
  expect(notificationItemIcon.textContent).toBe('Unknown action');

  notificationItem.unmount();
});
