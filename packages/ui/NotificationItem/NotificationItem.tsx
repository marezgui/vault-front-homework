import type { Notification } from '@ledgerhq/types';
import {
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
  ShieldCheckIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/outline';
import { addressPreview } from '../utils/addressPreview';

type NotificationItemProps = Notification;

const TYPE_TO_LABEL = {
  TRANSACTION_SENT: 'Sent',
  TRANSACTION_RECEIVED: 'Received',
  ACCOUNT_CREATED: 'Account created',
};

const TYPE_TO_ICON = {
  TRANSACTION_SENT: <ChevronDoubleUpIcon className="h-6 w-6 text-purple-500" />,
  TRANSACTION_RECEIVED: <ChevronDoubleDownIcon className="h-6 w-6 text-green-500" />,
  ACCOUNT_CREATED: <ShieldCheckIcon className="h-6 w-6 text-sky-500" />,
};

export const NotificationItem = ({ type, data }: NotificationItemProps) => {
  const icon = TYPE_TO_ICON[type];
  const label = TYPE_TO_LABEL[type];

  return (
    <div className="flex justify-between p-4">
      <div className="flex">
        <div className="mr-4">{icon}</div>

        <div data-testid="notification-type" className="font-bold text-lg justify-item">
          {label}
        </div>
      </div>

      <div className="flex">
        <div>
          {type === 'ACCOUNT_CREATED' ? (
            <div> {`${data.name} ${data.currency}`} </div>
          ) : (
            <div className="flex justify-self-center">
              {addressPreview(data.from)}
              <ArrowLongRightIcon className="h-6 w-6 text-gray-400 mx-2" />
              {addressPreview(data.to)}
            </div>
          )}
        </div>

        {type !== 'ACCOUNT_CREATED' && (
          <div className="ml-4 text-right" style={{ minWidth: '80px' }}>
            {`${data.amount ?? ''} ${data.unit || ''}`}
          </div>
        )}
      </div>
    </div>
  );
};
