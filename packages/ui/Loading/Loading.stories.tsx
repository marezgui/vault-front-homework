import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Loading } from './Loading';

export default {
  title: 'Loading',
  component: Loading,
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = () => <Loading />;

export const Primary = Template.bind({});
Primary.args = {};
