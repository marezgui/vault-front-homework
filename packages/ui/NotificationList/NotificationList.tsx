import type { Notifications } from '@ledgerhq/types';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationListProps {
  notifications: Notifications;
}

export const NotificationList = ({ notifications }: NotificationListProps) => (
  <div className="bg-white divide-y divide-gray-200 shadow rounded-lg overflow-hidden">
    {notifications.map((notification) => (
      <NotificationItem key={notification.id} {...notification} />
    ))}
  </div>
);
