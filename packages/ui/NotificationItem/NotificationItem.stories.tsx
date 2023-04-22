import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotificationItem } from './NotificationItem';

export default {
  title: 'NotificationItem',
  component: NotificationItem,
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: 2,
  type: 'TRANSACTION_SENT',
  data: {
    id: 2,
    amount: 0.4,
    unit: 'ETH',
    to: '0xe5e428cbb93a218dad2c908f2f3e2f46575d91a5',
    from: '0x5ed8cee6b63b1c6afce3ad7c92f4fd7e1b8fad9f',
  },
};
