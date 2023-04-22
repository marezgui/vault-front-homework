import type { Notification } from '@ledgerhq/types';

type NotificationItemProps = Notification;

export const NotificationItem = ({ id, type, data }: NotificationItemProps) => {
  const { amount, unit, from, to, name, currency } = data;

  return (
    <div key={id} className="flex items-start p-4">
      <div className="mr-4"> ICON </div>
      <div>
        <div className="font-bold text-lg">{type}</div>
        <div className="text-sm mt-2">
          {amount} {unit} from {from} to {to}
          <br />
          {name} {currency}
          <br />
        </div>
      </div>
    </div>
  );
};
