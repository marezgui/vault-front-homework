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
  type: string;
  data: NotificationData;
}

export type Notifications = Notification[];
