import type { Notifications } from '@ledgerhq/types';
import { NotificationItem } from '../NotificationItem/NotificationItem';

type NotificationListProps = {
  notifications: Notifications;
};

export const NotificationList = ({ notifications }: NotificationListProps) => {
  if (notifications.length === 0) {
    return <div className="text-center text-gray-500 mt-8"> No notifications found</div>;
  }

  return (
    <div className="bg-white divide-y divide-gray-200 shadow rounded-lg overflow-hidden mt-4">
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} {...notification} />
      ))}
    </div>
  );
};
