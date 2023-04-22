import type { Notification } from '@ledgerhq/types';
import {
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
  ShieldCheckIcon,
  ExclamationCircleIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/outline';
import { addressPreview } from '../utils/addressPreview';

type NotificationItemProps = Notification;

const TYPE_TO_LABEL = {
  TRANSACTION_SENT: 'Sent',
  TRANSACTION_RECEIVED: 'Received',
  ACCOUNT_CREATED: 'Account created',
  DEFAULT: 'Unknown action',
};

const TYPE_TO_ICON = {
  TRANSACTION_SENT: <ChevronDoubleUpIcon className="h-6 w-6 text-purple-500" />,
  TRANSACTION_RECEIVED: <ChevronDoubleDownIcon className="h-6 w-6 text-green-500" />,
  ACCOUNT_CREATED: <ShieldCheckIcon className="h-6 w-6 text-sky-500" />,
  DEFAULT: <ExclamationCircleIcon className="h-6 w-6 text-gray-500" />,
};

export const NotificationItem = ({ type = 'DEFAULT', data }: NotificationItemProps) => {
  const { amount, unit, from, to, name, currency } = data;
  const fromPreview = addressPreview(from);
  const toPreview = addressPreview(to);

  return (
    <div className="flex justify-between p-4">
      <div className="flex">
        <div className="mr-4">{TYPE_TO_ICON[type]}</div>

        <div className="font-bold text-lg justify-item">{TYPE_TO_LABEL[type]}</div>
      </div>

      <div className="flex">
        <div>
          {type === 'ACCOUNT_CREATED' ? (
            <div> {`${name} ${currency}`} </div>
          ) : (
            <div className="flex justify-self-center">
              {fromPreview}
              <ArrowLongRightIcon className="h-6 w-6 text-gray-400 mx-2" />
              {toPreview}
            </div>
          )}
        </div>

        <div className="ml-4 text-right" style={{ minWidth: '80px' }}>{`${amount ?? ''} ${
          unit ?? ''
        }`}</div>
      </div>
    </div>
  );
};
