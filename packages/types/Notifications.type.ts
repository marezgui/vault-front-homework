interface NotificationData {
  id: number;
  amount?: number;
  unit?: string;
  from?: string;
  to?: string;
  name?: string;
  currency?: string;
}

export interface Notification {
  id: number;
  type?: 'TRANSACTION_SENT' | 'TRANSACTION_RECEIVED' | 'ACCOUNT_CREATED';
  data: NotificationData;
}

export type Notifications = Notification[];
