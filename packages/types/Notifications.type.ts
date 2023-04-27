type TransactionData = {
  id: number;
  amount: number;
  unit: string;
  from: string;
  to: string;
};

type AccountData = {
  id: number;
  name: string;
  currency: string;
};

type TransactionNotification = {
  id: number;
  type: 'TRANSACTION_SENT' | 'TRANSACTION_RECEIVED';
  data: TransactionData;
};

type AccountNotification = {
  id: number;
  type: 'ACCOUNT_CREATED';
  data: AccountData;
};

export type Notification = TransactionNotification | AccountNotification;

export type Notifications = Notification[];
