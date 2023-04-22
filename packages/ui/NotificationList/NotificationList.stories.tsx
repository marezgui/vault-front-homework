import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotificationList } from './NotificationList';
import { notificationListData } from './notificationListData.mock';

export default {
  title: 'NotificationList',
  component: NotificationList,
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  notifications: notificationListData,
};
